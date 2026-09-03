import { headerNav, heroCopy } from "@/portfolio/data/portfolioData";
import { assets } from "@/portfolio/assets";
import { links } from "@/portfolio/data/links";
import "@/portfolio/styles/portfolio.css";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  // Use native scroll; GSAP/ScrollTrigger will refine later.
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function PortfolioApp() {
  return (
    <div
      className="min-h-screen w-full bg-[#0B0B0D] text-[#F5F5F5] overflow-x-hidden"
      aria-label="Kinetic Obsidian Portfolio"
    >
      {/* Minimal shell header. The full polished header/cursor/hover/GSAP lives in later to-dos. */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0D]/80 backdrop-blur-md border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-lg md:text-xl tracking-tight">
            SAKKEER<span className="text-[#FF494A]">.</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.25em] text-[#A1A1AA]">
            {headerNav.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToId(item.id)}
                className="hover:text-[#F5F5F5] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={links.resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-[#FF494A]/40 text-[#FF494A] font-display text-xs uppercase tracking-[0.12em] hover:bg-white/5 transition-colors"
            >
              {links.resume.label}
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-16 md:pt-16">
        {/* Scene 01: Identity */}
        <section
          id="scene-hero"
          className="relative min-h-screen flex items-center justify-center px-6 md:px-12"
        >
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-10 pb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="inline-block h-[1px] w-10 bg-[#FF494A]" />
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#A1A1AA]">
                  {heroCopy.availability}
                </span>
              </div>

              <h1 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl xl:text-9xl tracking-tight leading-[0.92]">
                {heroCopy.name} <span className="text-[#FF494A]">{heroCopy.nameSuffix}</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#A1A1AA] mt-4 tracking-tight">
                  // {heroCopy.role}
                </span>
              </h1>

              <p className="font-body text-lg sm:text-xl text-[#A1A1AA] font-light leading-relaxed max-w-xl mt-8">
                {heroCopy.summary}
              </p>

              <div className="flex flex-wrap items-center gap-5 mt-10">
                <button
                  type="button"
                  onClick={() => scrollToId("scene-build")}
                  className="px-8 py-4 rounded-full bg-[#FF494A] text-[#0B0B0D] font-display font-bold text-xs md:text-sm tracking-wider uppercase flex items-center gap-3 shadow-[0_0_30px_rgba(255,73,74,0.35)] hover:bg-white transition-colors"
                >
                  {heroCopy.ctas.explore}
                  <span aria-hidden className="text-[14px] leading-none">
                    ↓
                  </span>
                </button>

                <a
                  href={links.resume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full border border-white/10 bg-[#111214]/60 backdrop-blur-xl text-[#F5F5F5] font-display font-semibold text-xs md:text-sm tracking-wider uppercase hover:bg-[#17181B] transition-colors"
                >
                  {heroCopy.ctas.resume}
                </a>
              </div>

              <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-wrap gap-8 font-mono text-xs text-[#A1A1AA]">
                {heroCopy.metaPills.map((p) => (
                  <div key={p} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF494A]" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative flex items-center justify-center">
              {/* 2D/3D hero portrait is implemented in the later 3D to-dos.
                  This provides a stable layout anchor so ScrollTrigger can be added safely. */}
              <div className="w-full max-w-[420px] aspect-[4/5] bg-[#111214]/40 border border-white/[0.06] rounded-none overflow-hidden relative">
                <img
                  src={assets.heroPortrait}
                  alt=""
                  className="hidden"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-xs text-[#A1A1AA] uppercase tracking-[0.35em]">
                    PORTFOLIO 3D / HERO IS NEXT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scene 02: I Build */}
        <section
          id="scene-build"
          className="relative w-full py-28 md:py-44 px-6 md:px-12 border-t border-white/[0.08]"
        >
          <div className="max-w-7xl mx-auto">
            <div className="font-mono text-xs uppercase tracking-[0.35em] text-[#FF494A] font-semibold">
              ENGINEERING MANIFESTO
            </div>
            <div className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-[#A1A1AA] mt-6 leading-[0.96]">
              I BUILD <span className="text-[#FF494A]">MOBILE,</span> WEB, NATIVE SYSTEMS THAT SHIP.
            </div>
          </div>
        </section>

        {/* Scene 03: Proof */}
        <section
          id="scene-proof"
          className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-[#111214]/40 border-y border-white/[0.08]"
        >
          <div className="max-w-7xl mx-auto">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#A1A1AA] flex items-center gap-3 mb-16">
              <span className="w-2 h-2 rounded-full bg-[#FF494A]" />
              BENCHMARKED PERFORMANCE & LONGEVITY
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {["8", "5+", "10+", "65%"].map((v) => (
                <div key={v} className="border-l border-white/10 pl-6">
                  <div className="font-display font-bold text-6xl lg:text-7xl xl:text-8xl text-white tracking-tight">
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scene 04: Experience */}
        <section
          id="scene-trajectory"
          className="relative w-full py-32 md:py-44 px-6 md:px-12 max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-24">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#FF494A] font-semibold">
                CAREER TRAJECTORY
              </div>
              <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mt-3">
                VERIFIED PROGRESSION.
              </h2>
            </div>
            <p className="font-body text-[#A1A1AA] text-sm md:text-base max-w-md">
              A disciplined evolution from responsive web interfaces into cross-platform mobile engineering.
            </p>
          </div>
        </section>

        {/* Scene 05: The Lab */}
        <section
          id="scene-lab"
          className="relative w-full py-32 md:py-44 px-6 md:px-12 bg-[#111214]/40 border-y border-white/[0.08]"
        >
          <div className="max-w-7xl mx-auto">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#FF494A] font-semibold">
              PUBLIC SOFTWARE & UTILITIES
            </div>
            <div className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mt-3">
              THE LAB <span className="text-[#FF494A]">//</span> TOOLS.SAKKEER.COM
            </div>
          </div>
        </section>

        {/* Scene 06: Signal */}
        <section
          id="scene-signal"
          className="relative w-full py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]"
        >
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#FF494A] font-semibold">
            SIGNAL ARCHITECTURE
          </div>
          <div className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mt-3">
            THE RUNTIME SIGNAL FLOW.
          </div>
        </section>

        {/* Scene 06-B: Contact */}
        <section
          id="scene-contact"
          className="relative w-full py-32 md:py-44 px-6 md:px-12"
        >
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            <div className="mb-12 max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#FF494A] font-semibold block mb-4">
                THE ARCHITECT
              </span>
              <h2 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl tracking-tighter text-white max-w-4xl leading-[0.95] mb-10">
                HAVE SOMETHING WORTH SHIPPING?{" "}
                <span className="text-[#FF494A]">LET&apos;S TALK.</span>
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5 w-full max-w-2xl">
              <a
                href={links.email.url}
                className="px-8 py-5 rounded-full bg-[#FF494A] text-[#0B0B0D] font-display font-bold text-sm tracking-wider uppercase shadow-[0_0_35px_rgba(255,73,74,0.35)] hover:bg-white transition-colors"
              >
                Email
              </a>
              <div className="flex items-center gap-3">
                <a
                  aria-label="LinkedIn"
                  href={links.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-none bg-[#111214] border border-white/10 hover:border-[#FF494A] hover:text-[#FF494A] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  aria-label="GitHub"
                  href={links.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-none bg-[#111214] border border-white/10 hover:border-[#FF494A] hover:text-[#FF494A] transition-colors"
                >
                  GitHub
                </a>
              </div>
              <a
                href={links.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-5 rounded-full border border-white/10 bg-[#111214] hover:border-[#FF494A] hover:text-[#FF494A] transition-colors"
              >
                {links.resume.label}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

