/**
 * Experience page: professional work history (roles at companies).
 */

import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { experienceData } from "@/data/experience.data";

export function ExperiencePage() {
  return (
    <div>
      {/* Hero / Page title */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop)`,
          }}
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="font-hero font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Experience
            </h1>
            <nav className="flex items-center justify-center gap-2 text-sm md:text-base" aria-label="Breadcrumb">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/50">/</span>
              <span className="text-portfolio-primary font-medium">Experience</span>
            </nav>
          </AnimatedSection>
        </div>
      </section>

      {/* Professional experiences */}
      <section className="container mx-auto px-4 md:px-6 -mt-8 relative z-20 py-16 md:py-24">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <AnimatedSection className="lg:col-span-4" direction="up">
              <div className="rounded-xl overflow-hidden aspect-square max-w-sm mx-auto lg:mx-0">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=500&fit=crop"
                  alt="Developer at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
            <div className="lg:col-span-8 space-y-8">
              {experienceData.map((role, i) => (
                <AnimatedSection key={role.id} delay={i * 0.1} direction="up">
                  <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-white/5 border border-white/10 hover:border-portfolio-primary/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <h2 className="font-semibold text-lg sm:text-xl text-white">{role.role}</h2>
                      <div className="text-portfolio-primary text-sm font-medium">
                        {role.company} · {role.duration}
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {role.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-white/70 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-portfolio-primary mt-1.5 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
