/**
 * Home page: short versions of everything – Hero, services, projects, about, experience.
 */

import { Link } from "react-router-dom";
import { Hero } from "./Hero";
import { ServicesSummary } from "./ServicesSummary";
import { ProjectsList } from "../Projects/ProjectsList";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StatCard } from "@/components/ui/StatCard";
import { statCards } from "@/data/experience.data";
import { experienceData } from "@/data/experience.data";

export function HomePage() {
  return (
    <>
      <Hero />

      {/* Services – short */}
      <ServicesSummary />

      {/* Projects – short */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-hero font-bold text-3xl md:text-4xl text-white mb-2">
            Inspiring projects
          </h2>
          <p className="text-white/70 max-w-2xl mb-10">
            Mobile apps and web applications built with React Native and React.
          </p>
          <ProjectsList limit={3} />
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-portfolio-primary font-medium mt-8 hover:underline"
          >
            View all projects
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* About – short: 8 years + stats */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-hero font-bold text-3xl md:text-4xl text-white mb-2">About me</h2>
          <p className="text-white/70 max-w-2xl mb-10">
            React Native and React developer. Skills, stats, and education.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {statCards.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.05} direction="up">
                <StatCard
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                  suffix={stat.suffix}
                  countUp={stat.countUp}
                />
              </AnimatedSection>
            ))}
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-portfolio-primary font-medium mt-8 hover:underline"
          >
            View full about
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Experience – short: recent roles */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-hero font-bold text-3xl md:text-4xl text-white mb-2">Experience</h2>
          <p className="text-white/70 max-w-2xl mb-10">
            Professional work history across product companies.
          </p>
          <div className="space-y-4">
            {experienceData.slice(0, 2).map((role, i) => (
              <AnimatedSection key={role.id} delay={i * 0.05} direction="up">
                <div className="p-4 md:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-portfolio-primary/20 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="font-semibold text-white">{role.role}</h3>
                    <span className="text-portfolio-primary text-sm">{role.company} · {role.duration}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 text-portfolio-primary font-medium mt-8 hover:underline"
          >
            View full experience
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
