import { useEffect, useRef } from "react";
import { usePlayMode } from "@/portfolio/play/PlayModeContext";
import { forceBurnElement } from "@/portfolio/interaction/fireBurnBridge";

const DEMO_IDLE_MS = 2000;
const DEMO_LOOP_GAP_MS = 1400;

function wait(ms: number, signal: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    if (signal.aborted) {
      reject(new DOMException("aborted", "AbortError"));
      return;
    }
    const id = window.setTimeout(() => resolve(), ms);
    const onAbort = () => {
      window.clearTimeout(id);
      reject(new DOMException("aborted", "AbortError"));
    };
    signal.addEventListener("abort", onAbort, { once: true });
  });
}

const FIRE_STEPS = [
  "Your cursor turns into a little flame.",
  "Hover any button and hold still for 2 seconds.",
  "It catches fire, burns to ash, then comes back.",
  "Try it on real buttons after this demo. Have fun.",
];

/**
 * Post-select how-to popup for Fire mode.
 * Uses the same CursorFire burn pipeline for the live demo.
 */
export function ModeDemoPanel() {
  const { demoOpen, closeDemo, activeMode, boredOn, fireEnabled } = usePlayMode();
  const demoBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!demoOpen || activeMode !== "fire" || !fireEnabled) return;

    const el = demoBtnRef.current;
    if (!el) return;

    const ac = new AbortController();
    const { signal } = ac;

    const loop = async () => {
      try {
        while (!signal.aborted) {
          await wait(DEMO_IDLE_MS, signal);
          await forceBurnElement(el);
          if (signal.aborted) break;
          await wait(DEMO_LOOP_GAP_MS, signal);
        }
      } catch {
        /* aborted */
      }
    };

    void loop();
    return () => ac.abort();
  }, [demoOpen, activeMode, fireEnabled]);

  useEffect(() => {
    if (!demoOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDemo();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [demoOpen, closeDemo]);

  if (!boredOn || activeMode !== "fire") return null;

  return (
    <div
      className={[
        "fixed inset-0 z-[126] flex items-end sm:items-center justify-center p-4 sm:p-8",
        "transition-opacity duration-300",
        demoOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      ].join(" ")}
      aria-hidden={!demoOpen}
    >
      <button
        type="button"
        data-no-burn=""
        aria-label="Close mode demo"
        className={[
          "absolute inset-0 bg-[#0B0B0D]/75 backdrop-blur-md transition-opacity duration-300",
          demoOpen ? "opacity-100" : "opacity-0",
        ].join(" ")}
        onClick={closeDemo}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="mode-demo-title"
        data-no-burn=""
        className={[
          "relative z-10 w-full max-w-4xl border border-white/[0.08] bg-[#111214]/95 backdrop-blur-xl",
          "shadow-[0_30px_80px_rgba(0,0,0,0.55)]",
          "transition-all duration-300 ease-out",
          demoOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-[0.98]",
        ].join(" ")}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="px-6 sm:px-8 py-7 sm:py-9 border-b md:border-b-0 md:border-r border-white/[0.06]">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#FF494A] mb-3">
              Mode
            </p>
            <h2
              id="mode-demo-title"
              className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-white mb-6"
            >
              Fire
            </h2>

            <ol className="space-y-4 mb-8">
              {FIRE_STEPS.map((step, i) => (
                <li key={step} className="flex gap-3 items-start">
                  <span className="font-mono text-xs text-[#FF494A] mt-1 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-body text-base text-[#A1A1AA] leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>

            <button
              type="button"
              data-no-burn=""
              onClick={closeDemo}
              className="px-6 py-3 rounded-full bg-[#FF494A] text-[#0B0B0D] font-display font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
            >
              Got it — let me burn stuff
            </button>
          </div>

          <div className="px-6 sm:px-8 py-10 sm:py-12 flex flex-col items-center justify-center gap-5 bg-[#0B0B0D]/35">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#A1A1AA]">
              Live demo
            </p>
            <button
              ref={demoBtnRef}
              type="button"
              data-no-burn=""
              className="px-8 py-4 rounded-full bg-[#FF494A] text-[#0B0B0D] font-display font-bold text-sm uppercase tracking-wider"
            >
              Fire ME
            </button>
            <p className="font-body text-sm text-[#A1A1AA] text-center max-w-[16rem]">
              Watch — after 2 seconds it burns by itself. Same fire as the real mode.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
