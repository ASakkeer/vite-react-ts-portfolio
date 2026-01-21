// Shared project case study data used across projects pages and previews.
import type { ProjectCaseStudyProps } from "./ProjectCaseStudy";

export interface ProjectDefinition extends ProjectCaseStudyProps {
  slug: string;
}

export const projects: ProjectDefinition[] = [
  {
    slug: "revenue-analytics-dashboard",
    name: "Revenue Analytics Dashboard",
    role: "Lead Frontend Engineer",
    context:
      "B2B SaaS analytics platform used by finance and product leadership to understand subscription health, churn, and recurring revenue trends.",
    problem:
      "Revenue stakeholders across finance and product lacked a single, reliable view of subscription, churn, and MRR trends, relying on ad-hoc spreadsheets assembled from multiple tools.",
    solution:
      "Designed and implemented a React-based analytics dashboard that pulled data from existing reporting APIs into a normalized layer, with drillable charts, cohort filters, and saved views tailored to recurring leadership questions.",
    features: [
      "Led the front-end migration of core analytics screens from server-rendered pages to a React dashboard shell.",
      "Defined and implemented role-based dashboard layouts for executives, product, and finance stakeholders.",
      "Collaborated with data and finance teams to translate recurring spreadsheet workflows into saved dashboard views.",
    ],
    techStack: ["React", "TypeScript", "React Query", "Recharts", "Tailwind CSS"],
    outcome:
      "Reduced time to prepare weekly revenue reports from roughly 2 hours of manual spreadsheet work to under 30 minutes using saved dashboard views (~60% reduction), and increased weekly dashboard usage from occasional ad-hoc checks to consistent use by finance and product leads.",
  },
  {
    slug: "customer-support-operations-console",
    name: "Customer Support Operations Console",
    role: "Senior Frontend Engineer",
    context:
      "Internal operations tool for support agents handling high-volume customer tickets across multiple products and SLAs.",
    problem:
      "Support teams juggled tickets, user history, and SLAs across separate tools, creating slow first-response times and making it hard to see which conversations were at risk of breaching commitments.",
    solution:
      "Built a unified React console that surfaced prioritized ticket queues, inline customer context, and SLA indicators in a single view, with keyboard-driven workflows and real-time updates to keep agents focused on at-risk conversations.",
    features: [
      "Owned the front-end architecture for the console, including routing, shared layout, and state management for ticket queues.",
      "Implemented prioritized views that surfaced tickets by SLA risk, segment, and channel so leads could triage quickly.",
      "Worked with support leadership to tune queue filters and shortcuts based on observed agent workflows and bottlenecks.",
    ],
    techStack: ["React", "TypeScript", "React Router", "Tailwind CSS"],
    outcome:
      "Improved median first-response time by roughly 25–30% over the first quarter after launch (e.g. from ~40 minutes to just under 30 minutes in the primary queue) and reduced the need to switch between multiple tools for day-to-day support work.",
  },
  {
    slug: "design-system-react-component-library",
    name: "Design System to React Component Library",
    role: "Frontend Engineer",
    context:
      "Cross-team design system initiative to provide a reusable React component library for several internal and customer-facing web applications.",
    problem:
      "Product teams implemented the same patterns differently across several internal and customer-facing apps, slowing front-end delivery and creating inconsistent user experiences.",
    solution:
      "Translated an existing design system into a reusable React component library, defining composable primitives for navigation, forms, data display, and overlays, plus theming hooks and documentation so teams could adopt the system incrementally.",
    features: [
      "Implemented core UI primitives (buttons, form controls, layout components) as accessible, theme-aware React components.",
      "Collaborated with designers to codify usage guidelines and variants, then documented them in an internal Storybook-style catalog.",
      "Partnered with feature teams to replace bespoke UI with the shared components in high-traffic flows, validating API design and ergonomics.",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Radix UI"],
    outcome:
      "Enabled new feature teams to assemble standard screens ~30–40% faster (e.g. reducing initial UI build time from two days to about a day for common CRUD views) and reduced visual inconsistencies across 5+ applications as they adopted the shared components.",
  },
];

export const findProjectBySlug = (slug: string): ProjectDefinition | undefined =>
  projects.find((project) => project.slug === slug);

