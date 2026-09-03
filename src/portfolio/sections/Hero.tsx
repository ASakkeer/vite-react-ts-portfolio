import { useEffect, useRef } from "react";
import { assets } from "@/portfolio/assets";
import { heroCopy } from "@/portfolio/data/portfolioData";
import { links } from "@/portfolio/data/links";
import { MagneticButton } from "@/portfolio/components/MagneticButton";
import { attachPointerStore, pointer } from "@/portfolio/interaction/pointerStore";
import { useReducedMotion } from "@/portfolio/hooks/useReducedMotion";
import { useDeviceCapabilities } from "@/portfolio/hooks/useDeviceCapabilities";

export function Hero() {
  const reducedMotion = useReducedMotion();
  const caps = useDeviceCapabilities();
  const portraitRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reducedMotion || caps.isTouchLike) return;
    const detach = attachPointerStore();
    let raf = 0;

    const tick = () => {
      raf = 0;
      const portrait = portraitRef.current;
      const glow = glowRef.current;
      if (!portrait) return;
      const x = pointer.nx * 10;
      const y = pointer.ny * -8;
      portrait.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (glow) glow.style.transform = `translate3d(${x * 0.45}px, ${y * 0.45}px, 0)`;
    };

    const onMove = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) window.cancelAnimationFrame(raf);
      detach();
    };
  }, [caps.isTouchLike, reducedMotion]);

  return (
    <section
      id="scene-hero"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          ref={glowRef}
          className="absolute top-[18%] right-[8%] w-[420px] h-[420px] bg-[#FF494A]/[0.07] rounded-full blur-[90px] will-change-transform"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-10 pb-16">
        <div className="lg:col-span-7 flex flex-col justify-center order-1">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block h-[1px] w-10 bg-[#FF494A]" />
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#A1A1AA]">
              {heroCopy.availability}
            </span>
          </div>

          <h1 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl xl:text-9xl tracking-tight text-white leading-[0.92] mb-5">
            {heroCopy.name}
            <span className="text-[#FF494A]">{heroCopy.nameSuffix}</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#A1A1AA] mt-4 tracking-tight">
              // {heroCopy.role}
            </span>
          </h1>

          <p className="font-body text-lg sm:text-xl text-[#A1A1AA] font-light leading-relaxed max-w-xl mb-10">
            {heroCopy.summary}
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <MagneticButton
              href="#scene-build"
              className="px-8 py-4 rounded-full bg-[#FF494A] text-[#0B0B0D] font-display font-bold text-xs md:text-sm tracking-wider uppercase flex items-center gap-3 hover:bg-white transition-colors duration-200"
            >
              <span>{heroCopy.ctas.explore}</span>
              <span aria-hidden>↓</span>
            </MagneticButton>
            <MagneticButton
              href={links.resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white/10 bg-[#111214] text-[#F5F5F5] font-display font-semibold text-xs md:text-sm tracking-wider uppercase flex items-center gap-2 hover:border-[#FF494A]/60 hover:text-white transition-colors duration-200"
            >
              <span>{heroCopy.ctas.resume}</span>
              <span aria-hidden className="text-[#FF494A]">
                →
              </span>
            </MagneticButton>
          </div>

          <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-wrap gap-8 font-mono text-xs text-[#A1A1AA]">
            {heroCopy.metaPills.map((pill) => (
              <div key={pill} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF494A]" />
                <span>{pill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative flex items-center justify-center order-2">
          <div
            ref={portraitRef}
            className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center will-change-transform"
          >
            <div className="relative w-full h-full flex items-center justify-center avatar-blend-mask">
              <img
                alt="Sakkeer A., Senior Software Engineer"
                src={assets.heroPortrait}
                className="w-full h-full object-contain object-bottom select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
