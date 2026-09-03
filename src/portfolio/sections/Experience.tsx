import { experienceData } from "@/portfolio/data/experienceData";

export function Experience() {
  return (
    <section
      id="scene-trajectory"
      className="relative w-full py-32 md:py-40 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#FF494A] font-semibold">
            EXPERIENCE
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mt-3">
            Career
          </h2>
        </div>
        <p className="font-body text-[#A1A1AA] text-sm md:text-base max-w-md">
          From frontend interfaces into cross-platform mobile engineering.
        </p>
      </div>

      <div className="relative border-l border-white/10 ml-3 md:ml-8 pl-8 md:pl-12 flex flex-col gap-16">
        {experienceData.map((entry, idx) => (
          <div key={entry.id} className="relative">
            <div
              className={
                idx === 0
                  ? "absolute -left-[41px] md:-left-[57px] top-2 w-3 h-3 rounded-full bg-[#FF494A]"
                  : "absolute -left-[41px] md:-left-[57px] top-2 w-3 h-3 rounded-full bg-[#0B0B0D] border border-white/30"
              }
            />

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white">{entry.role}</h3>
              <span className="font-mono text-xs text-[#A1A1AA] uppercase tracking-widest">
                {entry.duration}
              </span>
            </div>

            <div className="font-display text-base text-[#A1A1AA] mt-1">{entry.company}</div>

            <p className="font-body text-base text-[#A1A1AA] mt-4 leading-relaxed max-w-3xl">
              {entry.summary}
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 font-mono text-xs text-[#F5F5F5]/80">
              {entry.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
