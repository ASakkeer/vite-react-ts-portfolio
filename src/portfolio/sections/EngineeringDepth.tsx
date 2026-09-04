import { buildStages, skillGroups } from "@/portfolio/data/skillsData";

export function EngineeringDepth() {
  return (
    <section
      id="scene-signal"
      className="relative w-full py-28 md:py-36 px-6 md:px-12 border-y border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="skills-label">
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#FF494A] font-semibold">
            SKILLS
          </span>
        </div>

        <h2 className="skills-heading font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mt-3 mb-12 md:mb-14">
          HOW I BUILD
        </h2>

        {/* One continuous engineering pipeline — no cell borders */}
        <div className="skills-flow mb-16 md:mb-20 pb-12 md:pb-14 border-b border-white/[0.08]">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-4">
            {buildStages.map((stage, i) => (
              <div
                key={stage.id}
                className="skills-flow-item flex flex-col lg:flex-1 lg:min-w-0 lg:max-w-[11.5rem]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-display font-bold text-xl md:text-2xl text-white tracking-tight">
                    {stage.label}
                  </span>
                  {i < buildStages.length - 1 ? (
                    <>
                      <span
                        className="hidden lg:block flex-1 max-w-[2.5rem] h-px bg-white/15"
                        aria-hidden
                      />
                      <span
                        className="font-mono text-[#FF494A] text-sm shrink-0"
                        aria-hidden
                      >
                        →
                      </span>
                    </>
                  ) : null}
                </div>
                <p className="font-body text-sm text-[#A1A1AA] leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Actual skills — editorial columns */}
        <div className="skills-groups grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-14">
          {skillGroups.map((group) => (
            <div key={group.id} className="skills-group min-w-0">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-mono text-xs text-[#FF494A] tracking-[0.2em]">
                  {group.index}
                </span>
                <span className="font-mono text-xs text-[#FF494A] tracking-[0.2em]">/</span>
                <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-white">
                  {group.title}
                </h3>
              </div>
              <div className="h-px w-full bg-white/[0.08] mb-5" aria-hidden />
              <ul className="flex flex-col">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <span className="skill-item group relative inline-flex items-center gap-3 py-2.5 font-display text-base md:text-lg text-[#A1A1AA] cursor-default">
                      <span
                        className="skill-item__tick block w-0 h-px bg-[#FF494A] transition-all duration-200 ease-out group-hover:w-3"
                        aria-hidden
                      />
                      <span className="skill-item__label transition-[color,transform] duration-200 ease-out group-hover:text-[#FF494A] group-hover:translate-x-0.5">
                        {skill}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
