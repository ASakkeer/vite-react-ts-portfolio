import { useRef } from "react";
import { links } from "@/portfolio/data/links";
import { labCopy } from "@/portfolio/data/portfolioData";
import { useReducedMotion } from "@/portfolio/hooks/useReducedMotion";
import { useDeviceCapabilities } from "@/portfolio/hooks/useDeviceCapabilities";

export function PersonalWork() {
  const reducedMotion = useReducedMotion();
  const caps = useDeviceCapabilities();
  const cardRef = useRef<HTMLAnchorElement | null>(null);

  const onMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (reducedMotion || caps.isTouchLike) return;
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - rect.left) / rect.width - 0.5;
    const dy = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateY(${dx * 6}deg) rotateX(${-dy * 6}deg)`;
  };

  const onLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <section
      id="scene-lab"
      className="relative w-full py-32 md:py-40 px-6 md:px-12 border-y border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#FF494A] font-semibold">
            {labCopy.eyebrow}
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-white">
            tools.sakkeer.com
          </h2>
          <p className="font-body text-[#A1A1AA] leading-relaxed text-base">{labCopy.description}</p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={links.tools.url}
              rel="noopener noreferrer"
              target="_blank"
              className="px-6 py-3 rounded-full bg-[#FF494A] text-[#0B0B0D] font-display font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
            >
              Visit tools
            </a>
            <a
              href={links.github.url}
              rel="noopener noreferrer"
              target="_blank"
              className="px-6 py-3 rounded-full border border-white/10 text-[#F5F5F5] font-display font-semibold text-xs uppercase tracking-wider hover:border-[#FF494A] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="lg:col-span-7" style={{ perspective: "1200px" }}>
          <a
            ref={cardRef}
            href={links.tools.url}
            target="_blank"
            rel="noopener noreferrer"
            onPointerMove={onMove}
            onPointerLeave={onLeave}
            className="block border border-white/10 bg-[#111214] overflow-hidden transition-transform duration-150 ease-out will-change-transform"
            aria-label="Open tools.sakkeer.com"
          >
            <div className="h-10 px-4 border-b border-white/[0.08] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#FF494A]/70" />
              <span className="font-mono text-[11px] text-[#A1A1AA]">tools.sakkeer.com</span>
            </div>
            <div className="p-8 min-h-[220px] flex flex-col justify-between">
              <p className="font-display text-2xl text-white">Client-side developer utilities</p>
              <p className="font-body text-sm text-[#A1A1AA] mt-4">
                Fast transformations that run in the browser.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
