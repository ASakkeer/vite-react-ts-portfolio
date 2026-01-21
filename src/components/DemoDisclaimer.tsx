// Shared disclaimer for interactive demos in the portfolio.
import type { FC } from "react";

export const DemoDisclaimer: FC = () => {
  return (
    <section className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 p-4 text-xs text-slate-600">
      <p>
        This demo uses mocked data and simulated APIs to demonstrate frontend architecture, UI
        patterns, and workflow design.
      </p>
    </section>
  );
};

export default DemoDisclaimer;

