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
      "Ship production-ready React applications that are maintainable, testable, and aligned with your product roadmap.",
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
      "Enable teams to make faster decisions with clear, responsive dashboards and admin tools.",
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
      "Turn static designs or legacy frontends into modern, component-driven React interfaces.",
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
      "Connect your frontend to REST or GraphQL APIs with resilient error handling and caching.",
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
      "Improve Core Web Vitals and perceived performance to support better engagement and conversion.",
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
      "Stabilize existing React codebases so teams can ship features with confidence.",
    deliverables: [
      "Bug triage and fixes",
      "Refactors to reduce regressions",
      "Guardrails such as tests and linting",
    ],
  },
];

