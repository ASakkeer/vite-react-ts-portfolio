// Shared page header component for ops tool pages.
import type { FC, ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: ReactNode;
  actions?: ReactNode;
}

export const PageHeader: FC<PageHeaderProps> = ({ title, description, badge, actions }) => {
  return (
    <header className="mb-4 flex flex-col gap-3 border-b border-slate-200 pb-3 md:flex-row md:items-center md:justify-between">
      <div className="space-y-1">
        {badge}
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          {title}
        </h1>
        {description && <p className="max-w-2xl text-sm text-slate-600">{description}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </header>
  );
};

export default PageHeader;

