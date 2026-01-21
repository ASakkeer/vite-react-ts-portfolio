// Services section highlighting how React expertise translates into business outcomes.
import type { FC } from "react";
import ServiceCard from "./ServiceCard";
import { services } from "./services.data.tsx";

export const Services: FC = () => {
  return (
    <section
      id="services"
      className="page-section animate-fade-up bg-white"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <header className="max-w-2xl space-y-3">
          <h2
            id="services-heading"
            className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
          >
            Services aligned to real product needs
          </h2>
          <p className="text-sm text-slate-600 md:text-base">
            Each engagement focuses on measurable outcomes—faster delivery, clearer dashboards, and
            smoother user journeys—rather than one-off feature drops.
          </p>
        </header>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              outcome={service.outcome}
              deliverables={service.deliverables}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

