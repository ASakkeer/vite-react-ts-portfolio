// Shared services configuration used across services pages and summaries.
import type { ReactNode } from "react";
import { Code2, LayoutTemplate, PanelsTopLeft, Network, Gauge, Wrench } from "lucide-react";

export interface ServiceDefinition {
  title: string;
  icon: ReactNode;
  outcome: string;
  deliverables: string[];
}

export const services: ServiceDefinition[] = [
  {
    title: "React Web Application Development",
    icon: <Code2 className="h-5 w-5" aria-hidden="true" />,
    outcome:
      "Deliver production-ready React applications that scale with your product roadmap and team growth.",
    deliverables: [
      "Component architecture and state management",
      "Routing, forms, and data flows",
      "Deployment-ready frontends",
    ],
  },
  {
    title: "Dashboard & Admin Panels",
    icon: <PanelsTopLeft className="h-5 w-5" aria-hidden="true" />,
    outcome:
      "Build dashboards that surface key metrics and enable faster decision-making for stakeholders.",
    deliverables: [
      "Role-based UI and navigation",
      "Data visualizations and KPI reporting",
      "Table, filter, and search experiences",
    ],
  },
  {
    title: "UI to React Conversion",
    icon: <LayoutTemplate className="h-5 w-5" aria-hidden="true" />,
    outcome:
      "Transform static designs or legacy interfaces into maintainable, component-driven React applications.",
    deliverables: [
      "Pixel-accurate implementation from Figma or design systems",
      "Accessible, responsive layouts",
      "Reusable UI components",
    ],
  },
  {
    title: "API Integration",
    icon: <Network className="h-5 w-5" aria-hidden="true" />,
    outcome:
      "Integrate frontend with REST or GraphQL APIs using resilient error handling and efficient data patterns.",
    deliverables: [
      "Integration with existing backend services",
      "Loading, error, and empty states",
      "Client-side caching and query patterns",
    ],
  },
  {
    title: "Performance Optimization",
    icon: <Gauge className="h-5 w-5" aria-hidden="true" />,
    outcome:
      "Improve Core Web Vitals and user-perceived speed to drive better engagement and conversion rates.",
    deliverables: [
      "Bundle and render performance audits",
      "Code-splitting and lazy loading",
      "Targeted UX improvements for speed",
    ],
  },
  {
    title: "Bug Fixing & Maintenance",
    icon: <Wrench className="h-5 w-5" aria-hidden="true" />,
    outcome:
      "Stabilize existing React codebases to reduce technical debt and enable confident feature delivery.",
    deliverables: [
      "Bug triage and fixes",
      "Refactors to reduce regressions",
      "Guardrails such as tests and linting",
    ],
  },
];

