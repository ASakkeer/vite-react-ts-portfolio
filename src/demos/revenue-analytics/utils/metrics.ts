// Helper utilities for computing KPIs from mocked revenue analytics data.
import mrrOverTime from "../data/mrr-over-time.json";
import revenueByPlan from "../data/revenue-by-plan.json";
import accounts from "../data/accounts.json";

type Account = (typeof accounts)[number];

export interface DashboardFilters {
  plan: "all" | "Basic" | "Pro" | "Enterprise";
}

export const defaultFilters: DashboardFilters = {
  plan: "all",
};

export function getFilteredAccounts(filters: DashboardFilters): Account[] {
  if (filters.plan === "all") {
    return accounts;
  }
  return accounts.filter((account) => account.plan === filters.plan);
}

export function getKpis(filters: DashboardFilters) {
  const filteredAccounts = getFilteredAccounts(filters);
  const active = filteredAccounts.filter((a) => a.status === "active");
  const churned = filteredAccounts.filter((a) => a.status === "churned");

  const mrr = active.reduce((sum, a) => sum + a.mrr, 0);
  const activeSubscriptions = active.length;
  const churnRate =
    active.length + churned.length === 0
      ? 0
      : (churned.length / (active.length + churned.length)) * 100;

  const series = mrrOverTime.series;
  const first = series[0];
  const last = series[series.length - 1];
  const netRevenueGrowth =
    first && last && first.mrr > 0 ? ((last.mrr - first.mrr) / first.mrr) * 100 : 0;

  return {
    mrr,
    activeSubscriptions,
    churnRate,
    netRevenueGrowth,
  };
}

export function getMrrSeries(filters: DashboardFilters) {
  // For the MVP, filters do not change the shape of the time series; in a real system,
  // this would slice by plan and date range.
  return mrrOverTime.series;
}

export function getRevenueByPlan(filters: DashboardFilters) {
  if (filters.plan === "all") {
    return revenueByPlan.plans;
  }
  return revenueByPlan.plans.filter((plan) => plan.plan === filters.plan);
}

