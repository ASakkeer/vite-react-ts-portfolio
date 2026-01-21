// Reusable empty state component for ops tool lists.
import type { FC } from "react";

interface EmptyStateProps {
  title: string;
  description?: string;
}

export const EmptyState: FC<EmptyStateProps> = ({ title, description }) => {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 p-6 text-center text-sm text-slate-600">
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      {description && <p className="mt-1 text-xs text-slate-600">{description}</p>}
    </div>
  );
};

export default EmptyState;

