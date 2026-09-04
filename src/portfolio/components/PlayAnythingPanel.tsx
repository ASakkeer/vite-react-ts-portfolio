import { useEffect } from "react";
import { usePlayMode, type PlayModeId } from "@/portfolio/play/PlayModeContext";

type PlayCard = {
  id: PlayModeId | "soon-a" | "soon-b";
  title: string;
  blurb: string;
  available: boolean;
};

const CARDS: PlayCard[] = [
  {
    id: "fire",
    title: "Fire",
    blurb: "Turn your cursor into a flame. Burn buttons for fun.",
    available: true,
  },
  {
    id: "soon-a",
    title: "Coming soon",
    blurb: "More chaos loading…",
    available: false,
  },
  {
    id: "soon-b",
    title: "Coming soon",
    blurb: "More chaos loading…",
    available: false,
  },
];

export function PlayAnythingPanel() {
  const { panelOpen, closePanel, setActiveMode, activeMode, boredOn } = usePlayMode();

  useEffect(() => {
    if (!panelOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePanel();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [panelOpen, closePanel]);

  if (!boredOn) return null;

  return (
    <div
      className={[
        "fixed inset-0 z-[125] flex items-end sm:items-center justify-center p-4 sm:p-8",
        "transition-opacity duration-300",
        panelOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      ].join(" ")}
      aria-hidden={!panelOpen}
    >
      <button
        type="button"
        data-no-burn=""
        aria-label="Close play modes"
        className={[
          "absolute inset-0 bg-[#0B0B0D]/70 backdrop-blur-md transition-opacity duration-300",
          panelOpen ? "opacity-100" : "opacity-0",
        ].join(" ")}
        onClick={closePanel}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="play-anything-title"
        data-no-burn=""
        className={[
          "relative z-10 w-full max-w-3xl rounded-none border border-white/[0.08] bg-[#111214]/95 backdrop-blur-xl",
          "shadow-[0_30px_80px_rgba(0,0,0,0.55)]",
          "transition-all duration-300 ease-out",
          panelOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-[0.98]",
        ].join(" ")}
      >
        <div className="flex items-start justify-between gap-6 px-6 sm:px-8 pt-7 pb-5 border-b border-white/[0.06]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#FF494A] mb-3">
              Playground
            </p>
            <h2
              id="play-anything-title"
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white"
            >
              Play Anything
            </h2>
            <p className="font-body text-sm text-[#A1A1AA] mt-3 max-w-md leading-relaxed">
              Pick a mode and cause a little beautiful trouble. Flip Bored off whenever you want your dignity back.
            </p>
          </div>
          <button
            type="button"
            data-no-burn=""
            onClick={closePanel}
            className="font-mono text-xs uppercase tracking-[0.2em] text-[#A1A1AA] hover:text-white transition-colors pt-1"
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-6 sm:p-8">
          {CARDS.map((card) => {
            const isActive = card.available && activeMode === card.id;
            const disabled = !card.available;

            return (
              <button
                key={card.id}
                type="button"
                data-no-burn=""
                disabled={disabled}
                onClick={() => {
                  if (card.available && card.id === "fire") setActiveMode("fire");
                }}
                className={[
                  "text-left rounded-none border p-5 transition-colors duration-200",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF494A] focus-visible:outline-offset-2",
                  disabled
                    ? "border-white/[0.05] bg-white/[0.02] text-[#A1A1AA]/70 cursor-not-allowed"
                    : isActive
                      ? "border-[#FF494A]/55 bg-[#FF494A]/10 text-white"
                      : "border-white/10 bg-[#0B0B0D]/50 text-[#F5F5F5] hover:border-[#FF494A]/40 hover:bg-white/[0.03]",
                ].join(" ")}
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#FF494A]">
                    {disabled ? "Locked" : isActive ? "Active" : "Mode"}
                  </span>
                  {card.id === "fire" && (
                    <span aria-hidden className="text-[#FF494A] text-sm">
                      ✦
                    </span>
                  )}
                </div>
                <div className="font-display font-bold text-xl tracking-tight mb-2">
                  {card.title}
                </div>
                <p className="font-body text-sm text-[#A1A1AA] leading-relaxed">{card.blurb}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
