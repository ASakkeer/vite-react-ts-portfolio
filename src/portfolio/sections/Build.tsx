import { manifestoCopy } from "@/portfolio/data/portfolioData";

const contextItems = [
  {
    title: "Mobile",
    body: "Cross-platform apps with predictable UI and production-grade delivery.",
  },
  {
    title: "Web",
    body: "React and TypeScript frontends with resilient state and clean component systems.",
  },
  {
    title: "Native",
    body: "Platform work with Kotlin and Swift where the product needs it.",
  },
  {
    title: "Systems",
    body: "CI/CD-driven shipping with defensive architecture for stable releases.",
  },
];

export function Build() {
  return (
    <section
      id="scene-build"
      className="relative w-full py-32 md:py-40 px-6 md:px-12 border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#FF494A] font-semibold">
          {manifestoCopy.eyebrow}
        </span>

        <h2 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] tracking-tight text-[#A1A1AA] leading-[0.96]">
          <span className="text-white">I BUILD </span>
          <span className="manifesto-keyword text-[#FF494A]">MOBILE,</span>{" "}
          <span className="manifesto-keyword text-white">WEB,</span>
          <br />
          <span className="manifesto-keyword">NATIVE</span>{" "}
          <span className="manifesto-keyword">SYSTEMS</span>
          <br />
          <span className="text-white underline decoration-[#FF494A] underline-offset-[14px]">
            THAT SHIP.
          </span>
        </h2>

        <div className="pt-8 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-4 gap-8">
          {contextItems.map((item) => (
            <div key={item.title} className="border-l border-white/10 pl-4">
              <h3 className="font-display text-sm font-semibold text-white mb-2">{item.title}</h3>
              <p className="font-body text-sm text-[#A1A1AA] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
