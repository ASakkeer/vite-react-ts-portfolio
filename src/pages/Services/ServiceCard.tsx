// Presentational card for a single service with icon, outcomes, and deliverables.
import type { FC, ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  outcome: string;
  deliverables: string[];
}

export const ServiceCard: FC<ServiceCardProps> = ({ icon, title, outcome, deliverables }) => {
  return (
    <article className="hover-elevate flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 p-5">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-800">
        {icon}
      </div>
      <h3 className="mb-2 text-base font-medium text-slate-900">{title}</h3>
      <p className="mb-4 text-sm text-slate-600">{outcome}</p>
      <ul className="mt-auto list-disc space-y-1 pl-5 text-xs text-slate-500">
        {deliverables.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
};

export default ServiceCard;

