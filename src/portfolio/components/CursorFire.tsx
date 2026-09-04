import { useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "@/portfolio/hooks/useReducedMotion";
import { useDeviceCapabilities } from "@/portfolio/hooks/useDeviceCapabilities";
import { attachPointerStore, pointer } from "@/portfolio/interaction/pointerStore";
import { registerForceBurnHandler } from "@/portfolio/interaction/fireBurnBridge";

type Kind = 0 | 1; // 0 flame, 1 smoke

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  decay: number;
  size: number;
  heat: number;
  wiggle: number;
  phase: number;
  kind: Kind;
};

type Phase = "charging" | "burning" | "ash" | "restore";

type BurnJob = {
  el: HTMLElement;
  phase: Phase;
  start: number;
  charge: number;
  burn: number;
};

const POOL = 380;
const CHARGE_MS = 2000;
const BURN_MS = 2000;
const ASH_MS = 4000;
const RESTORE_MS = 3200;
const IDLE_EMIT = 6;
const MOVE_EMIT = 12;
const BURN_EMIT = 11;
const MAX_ACTIVE_JOBS = 6;
const TWO_PI = Math.PI * 2;

function createPool(): Particle[] {
  return Array.from({ length: POOL }, () => ({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    life: 0,
    decay: 1,
    size: 1,
    heat: 1,
    wiggle: 0,
    phase: 0,
    kind: 0 as Kind,
  }));
}

function findBurnable(el: EventTarget | null): HTMLElement | null {
  if (!(el instanceof Element)) return null;
  const hit = el.closest("a, button, [data-burnable]");
  if (!(hit instanceof HTMLElement)) return null;
  if (hit.hasAttribute("data-no-burn")) return null;
  if (hit.classList.contains("sr-only")) return null;
  return hit;
}

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function easeIn(t: number) {
  return t * t;
}

/**
 * Cursor fire + multi-button burn-to-ash.
 * Cursor flame always stays on the pointer; buttons burn independently.
 * Gated by `active` (play mode fire flag).
 */
export function CursorFire({ active = false }: { active?: boolean }) {
  const reducedMotion = useReducedMotion();
  const caps = useDeviceCapabilities();

  const enabled = useMemo(() => {
    return active && !reducedMotion && !caps.isTouchLike && !caps.isCoarsePointer;
  }, [active, reducedMotion, caps.isTouchLike, caps.isCoarsePointer]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true, desynchronized: true });
    if (!ctx) return;

    const detachPointer = attachPointerStore();
    const pool = createPool();
    let alive = 0;

    const jobs = new Map<HTMLElement, BurnJob>();
    const completions = new Map<HTMLElement, () => void>();
    let chargingEl: HTMLElement | null = null;

    let raf = 0;
    let lastX = pointer.x;
    let lastY = pointer.y;
    let hasPointer = false;
    let cssW = window.innerWidth;
    let cssH = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let lastTs = 0;
    let wind = 0;

    const spawn = (
      x: number,
      y: number,
      dx: number,
      dy: number,
      moving: boolean,
      fromButton: boolean
    ) => {
      if (alive >= POOL) return;
      const p = pool[alive++];
      const speed = Math.min(Math.hypot(dx, dy), 60);
      const isSmoke = Math.random() > (fromButton ? 0.68 : 0.8);
      p.kind = isSmoke ? 1 : 0;
      p.x = x + (Math.random() - 0.5) * (fromButton ? 22 : moving ? 12 : 5);
      p.y = y + (Math.random() - 0.5) * (fromButton ? 8 : moving ? 12 : 5);
      p.vx =
        -dx * 0.1 +
        (Math.random() - 0.5) * (fromButton || moving ? 2.1 : 0.65) +
        wind * 0.4;
      p.vy =
        -dy * 0.1 -
        Math.random() * (fromButton ? 3.2 : moving ? 2.1 : 1.05) -
        speed * 0.02 -
        (isSmoke ? 0.7 : 0);
      p.life = 1;
      p.decay =
        1 /
        (60 *
          (isSmoke
            ? 1.15 + Math.random() * 0.8
            : fromButton
              ? 0.5 + Math.random() * 0.55
              : moving
                ? 0.42 + Math.random() * 0.48
                : 0.6 + Math.random() * 0.45));
      p.size = isSmoke
        ? 11 + Math.random() * 18
        : fromButton
          ? 6 + Math.random() * 15
          : moving
            ? 5 + Math.random() * 12
            : 6 + Math.random() * 9;
      p.heat = isSmoke ? 0.12 + Math.random() * 0.2 : 0.55 + Math.random() * 0.45;
      p.wiggle = 0.45 + Math.random() * 1.5;
      p.phase = Math.random() * TWO_PI;
    };

    const release = (i: number) => {
      alive -= 1;
      const tmp = pool[i];
      pool[i] = pool[alive];
      pool[alive] = tmp;
    };

    const clearClasses = (el: HTMLElement) => {
      el.classList.remove("fire-charging", "fire-burning", "fire-ash", "fire-restore");
      el.style.removeProperty("--fire-charge");
      el.style.removeProperty("--fire-burn");
      el.style.removeProperty("--fire-ash");
    };

    const removeJob = (el: HTMLElement) => {
      clearClasses(el);
      jobs.delete(el);
      if (chargingEl === el) chargingEl = null;
      const done = completions.get(el);
      if (done) {
        completions.delete(el);
        done();
      }
    };

    /** Skip charge — start burning immediately (demo / scripted burns). */
    const beginForcedBurn = (el: HTMLElement, now: number, onComplete: () => void) => {
      const existing = jobs.get(el);
      if (existing) {
        // Replace in-progress cycle
        completions.delete(el);
        clearClasses(el);
        jobs.delete(el);
        if (chargingEl === el) chargingEl = null;
      }

      if (jobs.size >= MAX_ACTIVE_JOBS && !jobs.has(el)) {
        onComplete();
        return;
      }

      completions.set(el, onComplete);
      jobs.set(el, {
        el,
        phase: "burning",
        start: now,
        charge: 1,
        burn: 0,
      });
      el.classList.remove("fire-charging", "fire-ash", "fire-restore");
      el.classList.add("fire-burning");
      el.style.setProperty("--fire-charge", "1");
      el.style.setProperty("--fire-burn", "0");
    };

    const beginCharge = (el: HTMLElement, now: number) => {
      const existing = jobs.get(el);
      if (existing && existing.phase !== "charging") return;

      // Cancel other in-progress charges (only one charge under cursor)
      if (chargingEl && chargingEl !== el) {
        const prev = jobs.get(chargingEl);
        if (prev?.phase === "charging") removeJob(chargingEl);
      }

      if (jobs.size >= MAX_ACTIVE_JOBS && !jobs.has(el)) return;

      chargingEl = el;
      const job: BurnJob = existing ?? {
        el,
        phase: "charging",
        start: now,
        charge: 0,
        burn: 0,
      };
      job.phase = "charging";
      job.start = now;
      job.charge = 0;
      job.burn = 0;
      jobs.set(el, job);
      el.classList.remove("fire-burning", "fire-ash", "fire-restore");
      el.classList.add("fire-charging");
      el.style.setProperty("--fire-charge", "0");
      el.style.setProperty("--fire-burn", "0");
    };

    const cancelCharge = (el: HTMLElement) => {
      const job = jobs.get(el);
      if (!job || job.phase !== "charging") return;
      removeJob(el);
    };

    const drawCore = (x: number, y: number, r: number, intensity: number) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(255, 252, 210, ${0.85 * intensity})`);
      g.addColorStop(0.28, `rgba(255, 195, 50, ${0.48 * intensity})`);
      g.addColorStop(0.62, `rgba(255, 100, 10, ${0.2 * intensity})`);
      g.addColorStop(1, "rgba(255, 40, 0, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, TWO_PI);
      ctx.fill();
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      cssW = window.innerWidth;
      cssH = window.innerHeight;
      canvas.width = Math.floor(cssW * dpr);
      canvas.height = Math.floor(cssH * dpr);
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = () => {
      hasPointer = true;
    };

    const onOver = (e: PointerEvent) => {
      const el = findBurnable(e.target);
      if (!el) return;
      const existing = jobs.get(el);
      if (existing && existing.phase !== "charging") return;
      beginCharge(el, performance.now());
    };

    const onOut = (e: PointerEvent) => {
      if (!chargingEl) return;
      const el = chargingEl;
      const related = e.relatedTarget;
      if (related instanceof Node && el.contains(related)) return;
      const next = findBurnable(related);
      if (next === el) return;
      cancelCharge(el);
    };

    const tick = (ts: number) => {
      raf = window.requestAnimationFrame(tick);
      const dt = lastTs ? Math.min(32, ts - lastTs) : 16;
      lastTs = ts;

      ctx.clearRect(0, 0, cssW, cssH);

      const px = pointer.x;
      const py = pointer.y;
      const dx = px - lastX;
      const dy = py - lastY;
      const moving = Math.hypot(dx, dy) > 0.55;
      wind += (dx * 0.08 - wind) * 0.12;
      lastX = px;
      lastY = py;

      // Update all button jobs (multi-target)
      for (const job of [...jobs.values()]) {
        const { el } = job;

        if (job.phase === "charging") {
          const t = Math.min(1, (ts - job.start) / CHARGE_MS);
          job.charge = easeInOut(t);
          el.style.setProperty("--fire-charge", job.charge.toFixed(3));

          // Tether sparks toward button while charging
          if (hasPointer && job.charge > 0.04) {
            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width * 0.5;
            const cy = rect.top + rect.height * 0.5;
            const pull = job.charge;
            const tx = px + (cx - px) * pull;
            const ty = py + (cy - py) * pull;
            if (Math.random() > 0.35) {
              spawn(tx, ty, dx, dy, true, false);
            }
          }

          if (t >= 1) {
            job.phase = "burning";
            job.start = ts;
            job.burn = 0;
            job.charge = 1;
            if (chargingEl === el) chargingEl = null;
            el.classList.remove("fire-charging");
            el.classList.add("fire-burning");
            el.style.setProperty("--fire-charge", "1");
            el.style.setProperty("--fire-burn", "0");
          }
          continue;
        }

        if (job.phase === "burning") {
          const t = Math.min(1, (ts - job.start) / BURN_MS);
          job.burn = easeIn(t);
          el.style.setProperty("--fire-burn", job.burn.toFixed(3));

          const rect = el.getBoundingClientRect();
          // Consume entire button: emit along width, fireline rises with burn
          const fireLine = 1 - job.burn;
          const emitCount = 4 + Math.floor(BURN_EMIT * (0.55 + job.burn * 0.7));
          for (let i = 0; i < emitCount; i++) {
            const u = Math.random();
            const bx = rect.left + rect.width * u;
            const by = rect.top + rect.height * (fireLine * 0.85 + 0.12) + (Math.random() - 0.5) * 6;
            spawn(bx, by, (u - 0.5) * 8, -2, true, true);
          }
          // Extra base roar
          drawCore(
            rect.left + rect.width * 0.5,
            rect.top + rect.height * (0.2 + fireLine * 0.6),
            28 + job.burn * 36 + rect.width * 0.12,
            0.75 + job.burn * 0.4
          );

          if (t >= 1) {
            job.phase = "ash";
            job.start = ts;
            job.burn = 1;
            el.classList.remove("fire-burning");
            el.classList.add("fire-ash");
            el.style.setProperty("--fire-burn", "1");
            el.style.setProperty("--fire-ash", "0");
          }
          continue;
        }

        if (job.phase === "ash") {
          const t = Math.min(1, (ts - job.start) / ASH_MS);
          el.style.setProperty("--fire-ash", t.toFixed(3));
          const rect = el.getBoundingClientRect();
          // Smolder + ash flakes
          if (t < 0.7) {
            for (let i = 0; i < 3; i++) {
              spawn(
                rect.left + Math.random() * rect.width,
                rect.top + Math.random() * rect.height * 0.5,
                (Math.random() - 0.5) * 4,
                -1,
                false,
                true
              );
            }
          }
          if (t >= 1) {
            job.phase = "restore";
            job.start = ts;
            el.classList.remove("fire-ash");
            el.classList.add("fire-restore");
            el.style.removeProperty("--fire-ash");
            el.style.removeProperty("--fire-burn");
          }
          continue;
        }

        if (job.phase === "restore") {
          if (ts - job.start > RESTORE_MS) removeJob(el);
        }
      }

      // Cursor flame always (independent of button burns)
      if (hasPointer) {
        const cursorCount = moving ? MOVE_EMIT : IDLE_EMIT;
        for (let i = 0; i < cursorCount; i++) {
          spawn(px, py, dx, dy, moving, false);
        }
        ctx.globalCompositeOperation = "lighter";
        drawCore(px, py, moving ? 26 : 34, 1);

        // Charge tether from cursor → charging button
        if (chargingEl) {
          const job = jobs.get(chargingEl);
          if (job?.phase === "charging" && job.charge > 0.05) {
            const rect = chargingEl.getBoundingClientRect();
            const cx = rect.left + rect.width * 0.5;
            const cy = rect.top + rect.height * 0.5;
            for (let s = 1; s <= 6; s++) {
              const u = s / 6;
              const sx = px + (cx - px) * u * job.charge;
              const sy = py + (cy - py) * u * job.charge;
              drawCore(sx, sy, 7 + u * 12, 0.45 * job.charge);
            }
          }
        }
      } else if (jobs.size === 0) {
        // nothing to draw besides lingering particles below
        ctx.globalCompositeOperation = "lighter";
      } else {
        ctx.globalCompositeOperation = "lighter";
      }

      for (let i = alive - 1; i >= 0; i--) {
        const p = pool[i];
        p.life -= p.decay * (dt / 16.67);
        if (p.life <= 0) {
          release(i);
          continue;
        }

        p.phase += 0.2 * p.wiggle;
        p.x += p.vx + Math.sin(p.phase) * p.wiggle * 0.55;
        p.y += p.vy;
        p.vy -= p.kind === 1 ? 0.028 : 0.058;
        p.vx = p.vx * 0.96 + wind * 0.02;
        p.vy *= 0.97;

        const t = p.life;
        const radius = p.size * (0.4 + t * 0.85);

        if (p.kind === 1) {
          ctx.fillStyle = `rgba(110, 85, 60, ${0.1 * t})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius * 1.25, 0, TWO_PI);
          ctx.fill();
        } else {
          const heat = p.heat;
          const a = 0.55 * t;
          if (t > 0.55) ctx.fillStyle = `rgba(255, 250, ${150 + heat * 50}, ${a})`;
          else if (t > 0.28) ctx.fillStyle = `rgba(255, ${160 + heat * 55}, 35, ${a * 0.9})`;
          else ctx.fillStyle = `rgba(255, ${80 + heat * 45}, 8, ${a * 0.7})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius, 0, TWO_PI);
          ctx.fill();
        }
      }

      ctx.globalCompositeOperation = "source-over";
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("pointerout", onOut, { passive: true });
    const detachForceBurn = registerForceBurnHandler((el, onComplete) => {
      beginForcedBurn(el, performance.now(), onComplete);
    });
    raf = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      detachForceBurn();
      window.cancelAnimationFrame(raf);
      for (const el of [...jobs.keys()]) clearClasses(el);
      for (const done of completions.values()) done();
      completions.clear();
      jobs.clear();
      detachPointer();
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[140] pointer-events-none"
      aria-hidden
    />
  );
}
