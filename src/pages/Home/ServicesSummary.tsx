// Compact services summary for the home page, linking to the full services page.
import type { FC } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../Services/ServiceCard";
import { services } from "../Services/services.data.tsx";

export const ServicesSummary: FC = () => {
  const highlighted = services.slice(0, 3);

  return (
    <section
      className="page-section border-t border-slate-200 bg-white"
      aria-labelledby="home-services-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <header className="max-w-2xl space-y-3">
          <h2
            id="home-services-heading"
            className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
          >
            Services aligned to real product needs
          </h2>
          <p className="text-sm text-slate-600 md:text-base">
            Each engagement focuses on measurable outcomes—faster delivery, clearer dashboards, and
            smoother user journeys.
          </p>
        </header>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {highlighted.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              outcome={service.outcome}
              deliverables={service.deliverables}
            />
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <Link
            to="/services"
            className="pressable inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            View all services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSummary;

