/**
 * Services page with full services grid.
 */

import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ServiceCard } from "./ServiceCard";
import { servicesData } from "@/data/services.data";

export function ServicesPage() {
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
              Services
            </h1>
            <nav className="flex items-center justify-center gap-2 text-sm md:text-base" aria-label="Breadcrumb">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/50">/</span>
              <span className="text-portfolio-primary font-medium">Services</span>
            </nav>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 md:px-6 -mt-8 relative z-20 py-16 md:py-24">
        <AnimatedSection>
          <h2 className="font-hero font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-2">
            Elevated designs, personalized experiences
          </h2>
          <p className="text-white/70 max-w-2xl mb-8 sm:mb-12 text-sm sm:text-base">
            React Native and React development services. Mobile apps, web applications, dashboards,
            and more. Focus on outcomes and measurable deliverables.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {servicesData.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
