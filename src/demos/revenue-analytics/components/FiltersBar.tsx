// Filter bar for selecting plan segments in the revenue analytics demo.
import type { FC } from "react";
import type { DashboardFilters } from "../utils/metrics";

interface FiltersBarProps {
  filters: DashboardFilters;
  onPlanChange: (plan: DashboardFilters["plan"]) => void;
}

export const FiltersBar: FC<FiltersBarProps> = ({ filters, onPlanChange }) => {
  return (
    <section className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h3 className="text-sm font-semibold text-slate-900">Filters</h3>
        <p className="text-xs text-slate-600">
          Adjust plan segments to see how revenue and churn change.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 text-xs">
        {[
          { label: "All plans", value: "all" as const },
          { label: "Basic", value: "Basic" as const },
          { label: "Pro", value: "Pro" as const },
          { label: "Enterprise", value: "Enterprise" as const },
        ].map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onPlanChange(option.value)}
            className={`rounded-full border px-3 py-1 font-medium ${
              filters.plan === option.value
                ? "border-[#2563EB] bg-[#2563EB]/10 text-[#2563EB]"
                : "border-slate-300 bg-white text-slate-700"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default FiltersBar;

