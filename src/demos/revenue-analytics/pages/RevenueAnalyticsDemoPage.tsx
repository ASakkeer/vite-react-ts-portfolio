// Route-level page for the Revenue Analytics dashboard demo.
import type { FC } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../components/layout/Layout";
import DemoDisclaimer from "../../../components/DemoDisclaimer";
import { useRevenueFilters } from "../hooks/useRevenueFilters";
import { getKpis, getMrrSeries, getRevenueByPlan } from "../utils/metrics";
import KpiCards from "../components/KpiCards";
import FiltersBar from "../components/FiltersBar";
import MrrLineChart from "../components/MrrLineChart";
import RevenueByPlanBarChart from "../components/RevenueByPlanBarChart";
import AccountsTable from "../components/AccountsTable";

export const RevenueAnalyticsDemoPage: FC = () => {
  const { filters, setPlan } = useRevenueFilters();
  const kpis = getKpis(filters);
  const mrrSeries = getMrrSeries(filters);
  const revenueByPlan = getRevenueByPlan(filters);

  return (
    <Layout>
      <section className="space-y-6 bg-slate-50 py-4">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Revenue Analytics Dashboard (Demo)
          </h1>
          <p className="max-w-2xl text-sm text-slate-600 md:text-base">
            Representative B2B SaaS analytics dashboard using mocked data to illustrate how
            recurring revenue, churn, and plan mix can be surfaced for finance and product teams.
          </p>
          <p className="text-xs text-slate-600">
            Admin preview:{" "}
            <Link
              to="/demos/revenue-analytics/plans"
              className="font-semibold text-[#2563EB] underline-offset-2 hover:underline"
            >
              Manage Plans
            </Link>
          </p>
        </header>
        <FiltersBar filters={filters} onPlanChange={setPlan} />
        <KpiCards {...kpis} />
        <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <MrrLineChart data={mrrSeries} />
          <RevenueByPlanBarChart data={revenueByPlan} />
        </div>
        <AccountsTable />
        <DemoDisclaimer />
      </section>
    </Layout>
  );
};

export default RevenueAnalyticsDemoPage;

