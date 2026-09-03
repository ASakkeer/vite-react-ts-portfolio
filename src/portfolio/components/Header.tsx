import { useEffect, useState } from "react";
import { headerNav } from "@/portfolio/data/portfolioData";
import { links } from "@/portfolio/data/links";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState(headerNav[0].id);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 16;
      setScrolled((prev) => (prev === next ? prev : next));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = headerNav
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={
        scrolled
          ? "fixed top-0 left-0 right-0 z-50 bg-[#0B0B0D]/92 border-b border-white/[0.06]"
          : "fixed top-0 left-0 right-0 z-50 bg-[#0B0B0D]/70 border-b border-transparent"
      }
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollToId("scene-hero")}
          className="font-display font-bold text-lg tracking-tight"
          aria-label="Go to Home"
        >
          SAKKEER<span className="text-[#FF494A]">.</span>
        </button>

        <nav className="hidden lg:flex items-center gap-8 font-mono text-sm uppercase tracking-[0.14em] text-[#A1A1AA]">
          {headerNav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToId(item.id)}
              className={
                activeId === item.id
                  ? "text-white border-b border-[#FF494A] pb-0.5"
                  : "hover:text-[#F5F5F5] transition-colors"
              }
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
            className="px-5 py-2 rounded-full bg-[#FF494A] text-[#0B0B0D] font-display font-bold text-sm uppercase tracking-[0.12em] hover:bg-white transition-colors"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden min-w-11 min-h-11 flex items-center justify-center text-[#F5F5F5]"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="font-mono text-sm tracking-widest uppercase">
            {mobileOpen ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      {mobileOpen ? (
        <div className="lg:hidden border-t border-white/[0.06] bg-[#0B0B0D]">
          <div className="px-6 py-4 flex flex-col gap-1">
            {headerNav.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  scrollToId(item.id);
                }}
                className="text-left py-3 font-mono text-sm uppercase tracking-[0.14em] text-[#A1A1AA] hover:text-[#F5F5F5]"
              >
                {item.label}
              </button>
            ))}
            <a
              href={links.resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 py-3 rounded-full bg-[#FF494A] text-[#0B0B0D] font-display font-bold text-sm uppercase tracking-[0.12em] text-center"
            >
              Resume
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
