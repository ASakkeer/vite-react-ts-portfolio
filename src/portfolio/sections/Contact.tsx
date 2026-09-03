import { links } from "@/portfolio/data/links";
import { contactCopy } from "@/portfolio/data/portfolioData";
import { MagneticButton } from "@/portfolio/components/MagneticButton";

export function Contact() {
  return (
    <section id="scene-contact" className="relative w-full py-32 md:py-40 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <p className="font-body text-lg text-[#A1A1AA] max-w-2xl mb-10">
          I&apos;m Sakkeer, a Senior Software Engineer focused on React Native, frontend architecture,
          and cross-platform product development.
        </p>

        <h2 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl tracking-tighter text-white max-w-4xl leading-[0.95] mb-12">
          HAVE SOMETHING WORTH SHIPPING?{" "}
          <span className="text-[#FF494A]">LET&apos;S TALK.</span>
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            href={links.email.url}
            className="px-8 py-4 rounded-full bg-[#FF494A] text-[#0B0B0D] font-display font-bold text-sm tracking-wider uppercase hover:bg-white transition-colors duration-200"
          >
            {links.email.label}
          </MagneticButton>
          <a
            href={links.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-full border border-white/10 text-white font-mono text-xs uppercase tracking-widest hover:border-[#FF494A] hover:text-[#FF494A] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={links.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-full border border-white/10 text-white font-mono text-xs uppercase tracking-widest hover:border-[#FF494A] hover:text-[#FF494A] transition-colors"
          >
            GitHub
          </a>
          <MagneticButton
            href={links.resume.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-full border border-white/10 text-[#F5F5F5] font-display font-bold text-sm tracking-wider uppercase hover:border-[#FF494A] hover:text-[#FF494A] transition-colors duration-200"
          >
            Resume
          </MagneticButton>
        </div>

        <p className="mt-12 font-mono text-xs text-[#A1A1AA]">{contactCopy.locationLine}</p>
      </div>
    </section>
  );
}
