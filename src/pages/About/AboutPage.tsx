/**
 * About page: service cards, skills, experience stats, education.
 */

import { Link } from "react-router-dom";
import { Smartphone, Globe, Palette, Database } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SkillBar } from "@/components/ui/SkillBar";
import { StatCard } from "@/components/ui/StatCard";
import {
  designSkills,
  developmentSkills,
  serviceCards,
  coreSkills,
  statCards,
} from "@/data/experience.data";
import { educationData } from "@/data/about.data";

const serviceIcons = [Smartphone, Globe, Palette, Database];

export function AboutPage() {

  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop)`,
          }}
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection>
            <h1 className="font-hero font-bold text-4xl md:text-5xl text-white mb-4 border-b-2 border-portfolio-primary inline-block pb-2">
              About
            </h1>
            <nav className="flex items-center gap-2 text-sm md:text-base mt-4" aria-label="Breadcrumb">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/50">/</span>
              <span className="text-portfolio-primary font-medium">About</span>
            </nav>
          </AnimatedSection>
        </div>
      </section>

      {/* Service / skill cards */}
      <section className="container mx-auto px-4 md:px-6 -mt-4 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {serviceCards.map((card, i) => {
            const Icon = serviceIcons[i] ?? Smartphone;
            return (
              <AnimatedSection key={card.title} delay={i * 0.08} direction="up">
                <div className="rounded-xl bg-white/5 border border-white/10 p-6 md:p-8 text-center hover:border-portfolio-primary/30 transition-colors">
                  <div className="w-14 h-14 rounded-lg bg-portfolio-primary/20 flex items-center justify-center mx-auto mb-3 text-portfolio-primary">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-semibold text-white text-sm md:text-base">{card.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{card.count} Projects</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <AnimatedSection direction="up">
              <h2 className="font-hero font-bold text-2xl text-white mb-6 pb-2 border-b-2 border-portfolio-primary inline-block">
                Design Skill
              </h2>
              <div className="mt-6">
                {designSkills.map((s) => (
                  <SkillBar key={s.name} name={s.name} percent={s.percent} />
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.1}>
              <h2 className="font-hero font-bold text-2xl text-white mb-6 pb-2 border-b-2 border-portfolio-primary inline-block">
                Development Skill
              </h2>
              <div className="mt-6">
                {developmentSkills.map((s) => (
                  <SkillBar key={s.name} name={s.name} percent={s.percent} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience stats */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {statCards.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.08} direction="up">
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
        </div>
      </section>

      {/* Education */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h2 className="font-hero font-bold text-2xl md:text-3xl text-white mb-8 pb-2 border-b-2 border-portfolio-primary inline-block">
              Education
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {educationData.map((edu, i) => (
              <AnimatedSection key={edu.id} delay={i * 0.1} direction="up">
                <div className="rounded-xl bg-white/5 border border-white/10 p-6 md:p-8 hover:border-portfolio-primary/20 transition-colors">
                  <h3 className="font-semibold text-lg text-white">{edu.title}</h3>
                  <p className="text-portfolio-primary text-sm mt-1">{edu.period}</p>
                  <p className="text-white/70 text-sm mt-2">{edu.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Core skills */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h2 className="font-hero font-bold text-2xl text-white mb-6">Core skills</h2>
            <div className="flex flex-wrap gap-3">
              {coreSkills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm hover:border-portfolio-primary/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
