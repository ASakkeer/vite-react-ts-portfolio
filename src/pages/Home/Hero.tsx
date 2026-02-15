/**
 * Hero section: left (name + role + Hire Me), center (hero image), right (About Me + socials).
 * Reference: Reeni-style layout with background text and floating elements.
 */

import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { resumeUrl } from "@/data/contact.data";
import { FloatingElements } from "@/components/ui/FloatingElements";
import { contactDetails } from "@/data/contact.data";
import heroImage from "@/assets/images/hero.png";

const socialIcons: Record<string, React.ElementType> = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  instagram: Instagram,
};

export function Hero() {
  return (
    <section className="relative min-h-[85svh] sm:min-h-[90vh] flex items-center overflow-hidden">
      <FloatingElements />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left: HELLO, name, role, Hire Me — no negative translate on mobile so intro sits below hero/FRONTEND */}
          <div className="lg:col-span-4 order-2 lg:order-1 text-center lg:text-left mt-4 sm:mt-6 lg:mt-0 lg:-translate-y-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white text-base sm:text-lg md:text-xl font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2"
            >
              HELLO
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-hero font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
            >
              I'm Sakkeer, a{" "}
              <span className="text-portfolio-primary">Senior Software Engineer</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <Button to="/contact" variant="primary" className="inline-flex items-center gap-2">
                Hire Me
                <ArrowRight size={18} />
              </Button>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-sm border-2 border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10 transition-colors"
              >
                View Resume
              </a>
            </motion.div>
          </div>

          {/* Center: Hero image with FRONTEND (before=behind, after=above), bottom-centered */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center items-center relative min-h-[17rem] sm:min-h-[22rem] md:min-h-[26rem] lg:min-h-[30rem] w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-60 sm:w-72 md:w-[24rem] lg:w-[30rem] h-72 sm:h-[26rem] md:h-[32rem] lg:h-[36rem] flex flex-col items-center justify-end"
            >
              {/* before: FRONTEND behind image, bottom-centered */}
              <span
                className="absolute left-1/2 -bottom-6 -translate-x-1/2 z-0 pointer-events-none select-none animate-hero-float-2 motion-reduce:animate-none font-hero font-bold leading-none uppercase whitespace-nowrap"
                aria-hidden
                style={{
                  fontSize: "clamp(4rem, 14vw, 14rem)",
                  color: "transparent",
                  WebkitTextStroke: "2px rgba(200, 200, 200, 0.16)",
                  paintOrder: "stroke fill",
                }}
              >
                FRONTEND
              </span>

              {/* Hero image */}
              <div className="relative z-10 w-full h-full overflow-hidden">
                <img
                  src={heroImage}
                  alt="Sakkeer - Senior Software Engineer"
                  draggable={false}
                  className="w-full h-full object-cover object-top select-none"
                  style={{
                    userSelect: "none",
                    WebkitUserDrag: "none",
                    maskImage: "linear-gradient(to bottom, black 95%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 95%, transparent 100%)",
                  }}
                />
              </div>

              {/* after: FRONTEND above image, bottom-centered */}
              <span
                className="absolute left-1/2 -bottom-6 -translate-x-1/2 z-20 pointer-events-none select-none animate-hero-float motion-reduce:animate-none font-hero font-bold leading-none uppercase whitespace-nowrap"
                aria-hidden
                style={{
                  fontSize: "clamp(2.5rem, 9vw, 9.5rem)",
                  color: "transparent",
                  WebkitTextStroke: "1.5px #ff494a",
                  paintOrder: "stroke fill",
                }}
              >
                FRONTEND
              </span>
            </motion.div>
          </div>

          {/* Right: About + socials — no negative translate on mobile for proper stacking */}
          <div className="lg:col-span-4 order-3 text-center lg:text-left mt-6 sm:mt-8 lg:mt-0 lg:-translate-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-white font-semibold mb-3">About Me</h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
                A personal <span className="text-portfolio-primary font-medium">portfolio</span> is
                a collection of your work, achievements, and skills.{" "}
                <span className="text-portfolio-primary font-medium">React Native</span> highlights
                growth in cross-platform mobile development.
              </p>
              <p className="text-white/70 text-sm mt-4">Find me on</p>
              <div className="flex gap-3 mt-3 justify-center lg:justify-start">
                {contactDetails.socials.map((s) => {
                  const Icon = socialIcons[s.icon] ?? Github;
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:text-portfolio-primary hover:bg-white/10 transition-colors"
                      aria-label={s.name}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
