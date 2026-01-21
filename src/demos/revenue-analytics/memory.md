// Revenue Analytics demo change log for `src/demos/revenue-analytics` (read before modifying files here).

## Purpose of the demo

- Provide a flagship, interactive example of a B2B SaaS revenue analytics dashboard built with React.
- Demonstrate how a senior frontend engineer structures dashboards, filters, charts, and tables using mocked but realistic data.
- Support the portfolio’s business-first positioning by showing how frontend work surfaces metrics leadership actually cares about.

## Scope decisions

- Route: `/demos/revenue-analytics` exposed as a standalone demo inside the existing portfolio.
- Features included in the MVP:
  - Dashboard overview KPIs for MRR, active subscriptions, churn rate, and net revenue growth.
  - Charts: MRR over time and revenue by plan/tier using the existing charting library.
  - Client-side filters for date range and plan tier that update KPIs, charts, and table views.
  - A sortable, paginated revenue-by-account table.
- Intentional exclusions for the MVP:
  - No backend, authentication, or role-based access.
  - No export/download, alerts, or advanced drill-down flows.
  - No dark mode and no additional animations beyond what the global system already provides.

## Mocking strategy

- All data is sourced from static JSON files under `data/`:
  - MRR over time by month.
  - Revenue and subscription counts by plan.
  - Per-account revenue and plan assignments.
- Data is shaped to look like realistic enterprise usage patterns but does not represent any real customer or company.
- All calculations (KPIs, filters, chart series, pagination) are done client-side in the browser.

## Last changes applied

- **2026-01-21**: Created the `revenue-analytics` demo folder with `components/`, `data/`, `hooks/`, `pages/`, and `utils/` plus this `memory.md` to document purpose, scope, mocking approach, and intentional exclusions.
- **2026-01-21**: Added a subscription plans management admin module at `/demos/revenue-analytics/plans` with a small CRUD surface (list, create, update, delete) backed by a mocked service layer (`plansService`) that simulates `fetchPlans`, `createPlan`, `updatePlan`, and `deletePlan` with artificial delay. This exists as a Phase 2 proof to demonstrate how an admin dashboard with CRUD and API-like interactions could be structured without introducing a real backend and completes Phase 2 for Project #1.

