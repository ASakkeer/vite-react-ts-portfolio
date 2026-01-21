// Ops tool demo change log for `src/demos/ops-tool` (read before modifying files here).

## Purpose of the demo

- Provide a SaaS-style internal operations tool example that focuses on reusable components, workflow screens, and product-oriented frontend architecture.
- Demonstrate how task-centric UIs can be structured with shared primitives (badges, headers, empty states) rather than one-off pages.
- Complement the analytics and e-commerce demos with an internal-tool scenario.

## Scope decisions

- Route: `/demos/ops-tool` exposed as a standalone demo inside the existing portfolio.
- Features included in the MVP:
  - Dashboard summary cards for total tasks and counts by status.
  - Task management CRUD (create, edit, delete) with fields for title, description, status, and priority.
  - Workflow-oriented UI including a reusable status badge, basic filtering by status, and a simple table/list layout.
- Intentional exclusions for the MVP:
  - No authentication, permissions, or multi-user state.
  - No drag-and-drop, Kanban board, or complex workflow automations.
  - No additional animations beyond what the global design system already provides.

## Data and API simulation

- All tasks are backed by in-memory data seeded from static JSON under `data/`.
- A small mock service layer under `utils/` simulates `fetchTasks`, `createTask`, `updateTask`, and `deleteTask` with a short artificial delay.
- Components and pages interact with this layer via hooks under `hooks/`, keeping React state localized to the demo.

## Last changes applied

- **2026-01-21**: Created the `ops-tool` demo folder with `components/`, `data/`, `hooks/`, `pages/`, `utils/`, and this `memory.md` documenting purpose, scope, exclusions, and data/API simulation for Phase 2 – Project #3.

