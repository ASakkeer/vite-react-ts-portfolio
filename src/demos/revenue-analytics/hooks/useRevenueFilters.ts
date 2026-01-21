// Local state hook for managing revenue analytics dashboard filters.
import { useState } from "react";
import { defaultFilters, type DashboardFilters } from "../utils/metrics";

export const useRevenueFilters = () => {
  const [filters, setFilters] = useState<DashboardFilters>(defaultFilters);

  const setPlan = (plan: DashboardFilters["plan"]) => {
    setFilters((current) => ({ ...current, plan }));
  };

  return {
    filters,
    setPlan,
  };
};

