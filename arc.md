## Project goal

Build a career-focused React portfolio for an experienced Frontend React Developer that clearly demonstrates business impact, technical depth, and readiness to deliver value on real-world products.

## Target audience

- **Primary**: Hiring managers, founders, and engineering leaders who need a senior frontend engineer who can ship production-quality features.
- **Secondary**: Technical recruiters and talent partners evaluating frontend capabilities and project ownership.

## Design principles

- **Career-focused**: Every section must support credibility as a frontend React engineer (experience, impact, skills, case-study style projects).
- **Business-first**: Emphasize outcomes (metrics, UX wins, conversion lifts, performance gains) over code trivia.
- **Signal-dense**: No filler; prioritize clarity, scannability, and decision-making signals for busy reviewers.
- **Product-like experience**: The portfolio should feel like a polished product, not a personal blog or playground.
- **Accessible & responsive**: The experience must work well across devices and respect basic accessibility best practices.

## Tech stack

- **Framework**: React (Vite, TypeScript)
- **Styling**: Tailwind CSS + utility-first, component-driven UI
- **Routing**: React Router
- **Data & utilities**: TanStack Query where appropriate, small focused utils
- **Tooling**: ESLint + Prettier, TypeScript, modern bundling via Vite

## Deployment and hosting

- Primary deployment target: Vercel (optimized for React/Vite SPAs).
- Production domain: `sakkeer.com` configured via Vercel project settings and DNS (A/ALIAS/CNAME records pointing to Vercel).
- Performance baseline: home page Lighthouse scores targeted at 90+ for Performance, Accessibility, Best Practices, and SEO on production builds.

## Navigation structure

- **Home (`/`)**: High-level positioning, value proposition, and strongest proof points above the fold.
- **Experience / Impact**: Curated roles and impact stories, focused on shipped features and measurable outcomes.
- **Projects / Case Studies**: A small set of projects with context, constraints, decisions, and results.
- **Skills / Stack**: Focused, categorized list of relevant technologies and strengths.
- **Contact / CTA**: Clear ways to reach out (email, LinkedIn) plus a concise call-to-action for collaboration or hiring.

## Rules

- **No personal fluff**: Exclude hobbies, life story, or unrelated biography.
- **No storytelling for its own sake**: Only include narrative elements that clarify problem, constraints, decisions, and impact.
- **Career- and business-first**: Every page, section, and component should support hiring decisions and client trust.
- **Future changes**: Update this document only when core architecture, navigation, or tech stack decisions change.

## Navigation architecture status

- Scroll/anchor-based single-page navigation has been removed in favor of true multi-page routing.
- React Router is implemented with `BrowserRouter` at the root and route-based pages.
- Core pages are split into dedicated routes: Home (`/`), Projects (`/projects`), Project case studies (`/projects/:id`), Services (`/services`), Experience (`/experience`), Contact (`/contact`), plus demo routes such as `/demos/revenue-analytics` and `/demos/ecommerce` for interactive flagship examples.
- The primary navigation header now uses `NavLink` with route-based active states (pill background + stronger font weight) so the current section is clearly highlighted and persists across refreshes and deep links.
- A shared `BackButton` component is used on deep routes (project case studies and demos) to provide a lightweight “← Back” action that prefers browser history when available and falls back to `/projects` when a page is accessed directly.

## Project completion status

- Initial version of the career-focused portfolio is implemented with Home, Services, Projects, Experience, and Contact sections wired into a shared layout.
- Global theme, styles, and minimal-motion animation rules are centralized, with per-folder `memory.md` files documenting design decisions.
- Ready for production deployment to Vercel and connection of `sakkeer.com`, with Lighthouse tuning and SEO refinements performed against the deployed build as needed.


