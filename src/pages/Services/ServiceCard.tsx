/**
 * Service card with title, outcome, and deliverables.
 */

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import type { Service } from "@/data/services.data";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <AnimatedSection delay={index * 0.08} direction="up">
      <div className="p-6 md:p-10 rounded-xl bg-white/5 border border-white/10 hover:border-portfolio-primary/30 transition-colors h-full flex flex-col">
        <h3 className="font-semibold text-lg sm:text-xl text-white mb-2">{service.title}</h3>
        <p className="text-white/80 mb-4">{service.outcome}</p>
        <ul className="mt-auto space-y-2">
          {service.deliverables.map((d, i) => (
            <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-portfolio-primary flex-shrink-0" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}
