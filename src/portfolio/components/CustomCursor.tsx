import { useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "@/portfolio/hooks/useReducedMotion";
import { useDeviceCapabilities } from "@/portfolio/hooks/useDeviceCapabilities";
import { attachPointerStore, pointer } from "@/portfolio/interaction/pointerStore";

function isInteractive(el: EventTarget | null): boolean {
  if (!(el instanceof Element)) return false;
  return Boolean(
    el.closest(
      "a, button, label, [data-magnetic], [data-lever-switch], .manifesto-keyword, input, textarea, select"
    )
  );
}

export function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const caps = useDeviceCapabilities();

  const enabled = useMemo(() => {
    return !reducedMotion && !caps.isTouchLike && !caps.isCoarsePointer;
  }, [reducedMotion, caps.isTouchLike, caps.isCoarsePointer]);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const ringPos = useRef({ x: 0, y: 0 });
  const hovering = useRef(false);
  const rafRef = useRef(0);
  const needsFrame = useRef(false);

  useEffect(() => {
    if (!enabled) return;

    const prevCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    const detachPointer = attachPointerStore();

    const render = () => {
      rafRef.current = 0;
      const dot = dotRef.current;
      const ring = ringRef.current;
      if (!dot || !ring) return;

      const tx = pointer.x;
      const ty = pointer.y;

      dot.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`;

      ringPos.current.x += (tx - ringPos.current.x) * 0.28;
      ringPos.current.y += (ty - ringPos.current.y) * 0.28;
      const scale = hovering.current ? 1.35 : 1;
      ring.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;

      const dx = Math.abs(tx - ringPos.current.x);
      const dy = Math.abs(ty - ringPos.current.y);
      if (dx > 0.4 || dy > 0.4) {
        needsFrame.current = true;
        rafRef.current = window.requestAnimationFrame(render);
      } else {
        needsFrame.current = false;
      }
    };

    const requestRender = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(render);
    };

    const onMove = () => requestRender();

    const onOver = (e: PointerEvent) => {
      hovering.current = isInteractive(e.target);
      requestRender();
    };

    ringPos.current.x = pointer.x;
    ringPos.current.y = pointer.y;
    requestRender();

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });

    return () => {
      document.body.style.cursor = prevCursor;
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      detachPointer();
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#FF494A] z-[200] pointer-events-none will-change-transform"
        aria-hidden
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#FF494A]/45 z-[199] pointer-events-none will-change-transform"
        aria-hidden
      />
    </>
  );
}
