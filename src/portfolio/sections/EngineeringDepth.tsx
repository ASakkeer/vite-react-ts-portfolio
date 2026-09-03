import { technologyTags } from "@/portfolio/data/skillsData";

const flow = ["UI", "STATE", "API", "NATIVE", "DEVICE"] as const;

export function EngineeringDepth() {
  return (
    <section
      id="scene-signal"
      className="relative w-full py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#FF494A] font-semibold">
        SKILLS
      </span>
      <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-white mt-3 mb-12">
        How I ship
      </h2>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-xl md:text-2xl text-white mb-12">
        {flow.map((step, i) => (
          <span key={step} className="flex items-center gap-3">
            <span className="hover:text-[#FF494A] transition-colors">{step}</span>
            {i < flow.length - 1 ? (
              <span className="text-[#FF494A] text-base" aria-hidden>
                →
              </span>
            ) : null}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-3">
        {technologyTags.map((tag) => (
          <span key={tag} className="font-mono text-xs uppercase tracking-widest text-[#A1A1AA]">
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
