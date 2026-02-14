/**
 * Home page: Hero, services summary, and about stats.
 */

import { Link } from "react-router-dom";
import { Hero } from "./Hero";
import { ServicesSummary } from "./ServicesSummary";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StatCard } from "@/components/ui/StatCard";
import { statCards } from "@/data/experience.data";

export function HomePage() {
  return (
    <>
      <Hero />

      {/* Services – short */}
      <ServicesSummary />

      {/* About – short: 8 years + stats */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-hero font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-2">About me</h2>
          <p className="text-white/70 max-w-2xl mb-8 sm:mb-10 text-sm sm:text-base">
            React Native and React developer. Skills, stats, and education.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
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
    </>
  );
}
