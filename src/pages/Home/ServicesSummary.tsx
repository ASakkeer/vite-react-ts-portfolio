/**
 * Compact services preview on Home page. Links to full Services page.
 */

import { Link } from "react-router-dom";
import { Layout, BarChart3, Code, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { servicesData } from "@/data/services.data";

const icons = [Layout, BarChart3, Code, Zap];

export function ServicesSummary() {
  const preview = servicesData.slice(0, 3);

  return (
    <AnimatedSection className="py-16 md:py-24" fadeOutOnExit>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-hero font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-2">
          Services aligned to real product needs
        </h2>
        <p className="text-white/70 max-w-2xl mb-8 sm:mb-12 text-sm sm:text-base">
          React Native mobile apps and React web applications. Each engagement focuses on measurable
          outcomes—faster delivery, improved workflows, and smoother user journeys.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {preview.map((s, i) => {
            const Icon = icons[i] ?? Layout;
            return (
              <AnimatedSection key={s.id} delay={i * 0.1} direction="up">
                <div className="p-5 sm:p-6 rounded-xl bg-white/5 border border-white/10 hover:border-portfolio-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-portfolio-primary/20 flex items-center justify-center text-portfolio-primary mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-white/70 text-sm">{s.outcome}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
        <AnimatedSection delay={0.3} className="mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-portfolio-primary font-medium hover:underline"
          >
            View all services
            <span aria-hidden>→</span>
          </Link>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
}
