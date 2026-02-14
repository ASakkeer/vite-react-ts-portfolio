/**
 * Hero section: left (name + role + Hire Me), center (hero image), right (About Me + socials).
 * Reference: Reeni-style layout with background text and floating elements.
 */

import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
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
      {/* Background: large outline text at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none"
        aria-hidden
      >
        <span
          className="text-[clamp(3rem,12vw,11rem)] font-hero font-bold text-white/[0.02] select-none leading-none"
          style={{
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.06)",
            paintOrder: "stroke fill",
          }}
        >
          FRONTEND
        </span>
      </div>

      <FloatingElements />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left: HELLO, name, role, Hire Me */}
          <div className="lg:col-span-4 order-2 lg:order-1 text-center lg:text-left">
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
              I'm Sakkeer a{" "}
              <span className="text-portfolio-primary">Senior Software Engineer</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6"
            >
              <Button to="/contact" variant="primary" className="inline-flex items-center gap-2">
                Hire Me
                <ArrowRight size={18} />
              </Button>
            </motion.div>
          </div>

          {/* Center: Hero image with bottom fade */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-56 h-72 sm:w-72 sm:h-96 md:w-96 md:h-[32rem] lg:w-[28rem] lg:h-[36rem] overflow-hidden mx-auto"
            >
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
            </motion.div>
          </div>

          {/* Right: About + socials */}
          <div className="lg:col-span-4 order-3 text-center lg:text-left">
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
