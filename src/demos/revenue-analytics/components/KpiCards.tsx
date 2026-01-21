// KPI cards summarizing key revenue metrics for the demo dashboard.
import type { FC } from "react";

interface KpiCardsProps {
  mrr: number;
  activeSubscriptions: number;
  churnRate: number;
  netRevenueGrowth: number;
}

export const KpiCards: FC<KpiCardsProps> = ({
  mrr,
  activeSubscriptions,
  churnRate,
  netRevenueGrowth,
}) => {
  return (
    <section className="grid gap-4 md:grid-cols-4">
      <article className="rounded-2xl border border-slate-200 bg-white/80 p-4">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Monthly Recurring Revenue
        </h3>
        <p className="mt-2 text-xl font-semibold text-slate-900">
          ${mrr.toLocaleString("en-US")}
        </p>
      </article>
      <article className="rounded-2xl border border-slate-200 bg-white/80 p-4">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Active Subscriptions
        </h3>
        <p className="mt-2 text-xl font-semibold text-slate-900">
          {activeSubscriptions.toLocaleString("en-US")}
        </p>
      </article>
      <article className="rounded-2xl border border-slate-200 bg-white/80 p-4">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Churn Rate
        </h3>
        <p className="mt-2 text-xl font-semibold text-slate-900">
          {churnRate.toFixed(1)}%
        </p>
      </article>
      <article className="rounded-2xl border border-slate-200 bg-white/80 p-4">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Net Revenue Growth
        </h3>
        <p className="mt-2 text-xl font-semibold text-slate-900">
          {netRevenueGrowth.toFixed(1)}%
        </p>
      </article>
    </section>
  );
};

export default KpiCards;

