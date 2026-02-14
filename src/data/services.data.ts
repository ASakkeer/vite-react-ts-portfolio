/**
 * Services offered: React Native and React development.
 */

export interface Service {
  id: string;
  title: string;
  outcome: string;
  deliverables: string[];
}

export const servicesData: Service[] = [
  {
    id: "1",
    title: "React Native Mobile App Development",
    outcome:
      "Build cross-platform iOS and Android applications that scale with your product roadmap and deliver a native-like experience.",
    deliverables: [
      "Cross-platform architecture for iOS and Android",
      "App store publishing (Apple App Store, Google Play Store)",
      "Native module integration and performance optimization",
    ],
  },
  {
    id: "2",
    title: "React Web Application Development",
    outcome:
      "Deliver production-ready React web applications, dashboards, and admin panels that enable faster decision-making.",
    deliverables: [
      "Component architecture and state management",
      "Data visualizations and KPI reporting",
      "Deployment-ready frontends",
    ],
  },
  {
    id: "3",
    title: "UI to React / React Native Conversion",
    outcome:
      "Transform static designs or legacy interfaces into maintainable, component-driven React or React Native applications.",
    deliverables: [
      "Pixel-accurate implementation from Figma or design systems",
      "Accessible, responsive layouts for web and mobile",
      "Reusable UI components",
    ],
  },
  {
    id: "4",
    title: "API Integration",
    outcome:
      "Integrate React and React Native apps with REST or GraphQL APIs using resilient error handling and efficient data patterns.",
    deliverables: [
      "Integration with existing backend services",
      "Loading, error, and empty states",
      "Client-side caching and query patterns (React Query)",
    ],
  },
  {
    id: "5",
    title: "Performance Optimization",
    outcome:
      "Improve app performance, Core Web Vitals, and user-perceived speed to drive better engagement and conversion.",
    deliverables: [
      "Bundle and render performance audits",
      "Code-splitting and lazy loading",
      "Mobile crash reduction and stability improvements",
    ],
  },
  {
    id: "6",
    title: "Bug Fixing & Maintenance",
    outcome:
      "Stabilize existing React and React Native codebases to reduce technical debt and enable confident feature delivery.",
    deliverables: [
      "Bug triage and fixes",
      "Refactors to reduce regressions",
      "Guardrails such as tests and linting",
    ],
  },
];
