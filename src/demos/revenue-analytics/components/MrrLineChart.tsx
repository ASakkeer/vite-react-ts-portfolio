// Line chart showing MRR over time for the revenue analytics demo.
import type { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface MrrLineChartProps {
  data: { month: string; mrr: number }[];
}

export const MrrLineChart: FC<MrrLineChartProps> = ({ data }) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white/80 p-4">
      <header className="mb-3 flex items-baseline justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">MRR over time</h3>
          <p className="text-xs text-slate-600">Trailing 12 months of monthly recurring revenue.</p>
        </div>
      </header>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ left: -20, right: 10, top: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 10, fill: "#64748B" }}
              tickFormatter={(value) => value.slice(5)}
            />
            <YAxis
              tick={{ fontSize: 10, fill: "#64748B" }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip
              formatter={(value: number) => [`$${value.toLocaleString("en-US")}`, "MRR"]}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Line
              type="monotone"
              dataKey="mrr"
              stroke="#2563EB"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default MrrLineChart;

