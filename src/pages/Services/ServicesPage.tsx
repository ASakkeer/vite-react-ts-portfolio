/**
 * Services page with full services grid.
 */

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ServiceCard } from "./ServiceCard";
import { servicesData } from "@/data/services.data";

export function ServicesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <h1 className="font-hero font-bold text-3xl md:text-4xl text-white mb-2">
            Elevated designs, personalized experiences
          </h1>
          <p className="text-white/70 max-w-2xl mb-12">
            React Native and React development services. Mobile apps, web applications, dashboards,
            and more. Focus on outcomes and measurable deliverables.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {servicesData.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
