// Bar chart showing revenue by plan tier for the revenue analytics demo.
import type { FC } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface RevenueByPlanBarChartProps {
  data: { plan: string; mrr: number; subscriptions: number }[];
}

export const RevenueByPlanBarChart: FC<RevenueByPlanBarChartProps> = ({ data }) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white/80 p-4">
      <header className="mb-3 flex items-baseline justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Revenue by plan</h3>
          <p className="text-xs text-slate-600">
            Compare monthly recurring revenue and subscription counts by plan tier.
          </p>
        </div>
      </header>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ left: -20, right: 10, top: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis dataKey="plan" tick={{ fontSize: 10, fill: "#64748B" }} />
            <YAxis
              tick={{ fontSize: 10, fill: "#64748B" }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip
              formatter={(value: number, name) =>
                name === "mrr"
                  ? [`$${value.toLocaleString("en-US")}`, "MRR"]
                  : [`${value.toLocaleString("en-US")}`, "Subscriptions"]
              }
            />
            <Bar
              dataKey="mrr"
              name="MRR"
              fill="#2563EB"
              radius={[4, 4, 0, 0]}
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default RevenueByPlanBarChart;

