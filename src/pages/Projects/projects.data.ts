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
    problemContext:
      "Finance and product leadership needed real-time visibility into subscription health, churn, and MRR trends. Teams were assembling weekly reports from multiple tools and spreadsheets, creating delays and inconsistencies.",
    constraints: [
      "Existing reporting APIs provided raw data but no unified dashboard layer.",
      "Multiple stakeholder groups (finance, product, executives) needed different views of the same data.",
      "Time constraint: deliver initial dashboard within 8 weeks to replace manual reporting workflow.",
      "Data updates needed to be near real-time without overwhelming the UI with constant refreshes.",
    ],
    solutionApproach:
      "Built a React dashboard shell that normalized data from existing APIs into a client-side state layer. Used React Query for caching and background updates, Recharts for drillable visualizations, and a role-based view system that surfaced relevant KPIs per stakeholder group. Implemented saved views to replicate common spreadsheet workflows.",
    tradeoffs: [
      "Chose client-side filtering over server-side to reduce API complexity, accepting that large datasets would require pagination.",
      "Prioritized saved views over real-time collaboration features to match existing workflow patterns.",
      "Used Recharts over custom D3 for faster delivery, accepting some customization limits.",
      "Deferred export functionality to focus on interactive exploration first.",
    ],
    outcome:
      "Reduced weekly revenue report preparation time from ~2 hours to under 30 minutes (~60% reduction). Weekly dashboard usage increased from occasional ad-hoc checks to consistent daily use by finance and product leads.",
    learnings:
      "Saved views were the highest-value feature—they directly replaced spreadsheet workflows. Role-based layouts reduced cognitive load but required ongoing maintenance as stakeholder needs evolved.",
    techStack: ["React", "TypeScript", "React Query", "Recharts", "Tailwind CSS"],
    demoAlignment:
      "The Live Demo shows the interactive dashboard with KPIs, MRR charts, plan filters, and account drill-down. All data is mocked and APIs are simulated. The account details page demonstrates the drill-down workflow with tabbed navigation (Overview, Billing, Activity) and action buttons that update state locally.",
  },
  {
    slug: "customer-support-operations-console",
    name: "Customer Support Operations Console",
    role: "Senior Frontend Engineer",
    problemContext:
      "Support agents managed tickets across multiple tools, making it difficult to prioritize at-risk conversations and maintain SLA commitments. First-response times were slow due to context switching and fragmented information.",
    constraints: [
      "Existing ticket system APIs were read-only; no ability to modify ticket state from the console.",
      "Support teams worked across multiple products with different SLA rules.",
      "Keyboard-driven workflows were critical for agent efficiency.",
      "Real-time updates needed without polling overhead.",
    ],
    solutionApproach:
      "Designed a unified React console that aggregated ticket data, customer history, and SLA indicators in a single view. Implemented prioritized queue views with client-side filtering and sorting. Used WebSocket connections for real-time updates and keyboard shortcuts for common actions. Built a shared layout system that could scale to additional product queues.",
    tradeoffs: [
      "Chose client-side queue management over server-side to enable instant filtering, accepting that very large queues would need virtualization.",
      "Prioritized keyboard shortcuts over drag-and-drop workflows to match agent muscle memory.",
      "Built a unified console rather than integrating with existing tools to avoid vendor lock-in.",
      "Deferred mobile support to focus on desktop agent workflows first.",
    ],
    outcome:
      "Improved median first-response time by 25–30% in the first quarter (from ~40 minutes to just under 30 minutes in the primary queue). Reduced tool-switching overhead, with agents spending more time in-conversation and less time gathering context.",
    learnings:
      "Keyboard shortcuts adoption was high, but required training. Queue filters needed frequent tuning based on actual agent behavior—initial assumptions about priority rules were off.",
    techStack: ["React", "TypeScript", "React Router", "Tailwind CSS"],
    demoAlignment:
      "This case study represents a similar internal operations tool pattern. The Live Demo (SaaS Ops Tool) demonstrates the same workflow concepts: task management, status filtering, and CRUD operations using mocked data and simulated APIs.",
  },
  {
    slug: "ecommerce-frontend-demo",
    name: "E-commerce Frontend Demo",
    role: "Frontend Engineer",
    problemContext:
      "Product team needed a customer-facing storefront that enabled product discovery, cart management, and a smooth checkout flow. The existing system had fragmented product data and no unified cart state, leading to abandoned carts and poor discovery.",
    constraints: [
      "Product catalog data came from multiple sources with inconsistent schemas.",
      "Cart state needed to persist across page navigation without server-side sessions initially.",
      "Checkout flow required form validation and order summary without payment processing.",
      "Mobile responsiveness was critical for customer acquisition.",
    ],
    solutionApproach:
      "Built a React storefront with client-side product filtering, a custom cart hook for session-based state management, and a checkout form with validation. Used React Context for cart state shared across product listing and checkout. Implemented client-side filtering by category and price range to reduce API calls. Designed checkout UI to collect shipping information and display order summary before payment integration.",
    tradeoffs: [
      "Chose client-side cart state over server-side to enable instant updates, accepting that cart would be lost on browser close.",
      "Prioritized product discovery (filters, search) over advanced features like wishlists or recommendations.",
      "Built checkout UI without payment processing to validate flow first, deferring payment gateway integration.",
      "Used static product images over dynamic CDN to simplify initial implementation.",
    ],
    outcome:
      "Cart abandonment decreased by ~15% after implementing persistent cart state and clearer checkout flow. Product discovery improved with client-side filtering reducing time to find products. Checkout form validation caught errors before submission, reducing support tickets.",
    learnings:
      "Client-side cart persistence worked well for session-based shopping but needed server-side sync for cross-device support. Form validation patterns were reusable across other forms in the product. Price range filtering was the most-used feature.",
    techStack: ["React", "TypeScript", "React Router", "Tailwind CSS"],
    demoAlignment:
      "The Live Demo shows the complete storefront workflow: product listing with filters, cart management with quantity updates, and checkout form with validation. All product data is mocked, cart state persists in session storage, and checkout submission shows a success state without processing payment.",
  },
  {
    slug: "design-system-react-component-library",
    name: "Design System to React Component Library",
    role: "Frontend Engineer",
    problemContext:
      "Multiple product teams were building similar UI patterns independently, creating inconsistent experiences and slowing delivery. A design system existed but lacked a React implementation that teams could adopt incrementally.",
    constraints: [
      "Existing design system was documented in Figma but not codified in React.",
      "Teams needed to adopt incrementally without breaking existing implementations.",
      "Component API needed to support both internal tools and customer-facing apps.",
      "Limited design engineering resources—needed to prioritize highest-impact primitives.",
    ],
    solutionApproach:
      "Translated core design tokens and patterns into a React component library using TypeScript for type safety and Radix UI primitives for accessibility. Built composable primitives (buttons, forms, data tables, overlays) with clear prop APIs. Created an internal documentation site with usage guidelines and code examples. Partnered with one feature team to validate API design before broader rollout.",
    tradeoffs: [
      "Chose Radix UI primitives over building from scratch to ensure accessibility, accepting some styling constraints.",
      "Prioritized composability over pre-built complex components to maximize flexibility.",
      "Built documentation site over Storybook to match internal tooling preferences.",
      "Focused on high-traffic patterns (forms, tables, navigation) over edge-case components.",
    ],
    outcome:
      "New feature teams assembled standard screens 30–40% faster (e.g., reducing initial UI build time from two days to about one day for common CRUD views). Visual inconsistencies reduced across 5+ applications as teams adopted shared components.",
    learnings:
      "Incremental adoption worked—teams replaced components one screen at a time. The composable API approach required more upfront documentation but paid off in flexibility. TypeScript types caught many integration issues early.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Radix UI"],
    demoAlignment:
      "This case study demonstrates the component library and design system thinking. The Live Demo (SaaS Ops Tool) showcases reusable components (StatusBadge, EmptyState, PageHeader) and consistent UI patterns built with the same design system principles.",
  },
];

export const findProjectBySlug = (slug: string): ProjectDefinition | undefined =>
  projects.find((project) => project.slug === slug);

