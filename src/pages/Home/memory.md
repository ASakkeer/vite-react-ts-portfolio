// Home page section change log for `src/pages/Home` (read before modifying files here).

## Purpose of `Home` page sections

- Deliver a focused, above-the-fold summary of frontend React expertise and business value.
- Provide clear, action-oriented entry points into case studies, projects, and hiring contact.
- Reinforce the professional, product-oriented positioning defined in `arc.md` without personal fluff.

## Decisions made

- Hero content:
  - Headline: “Frontend React Developer – Building Business-Ready Web Applications”.
  - Subline: “8+ years of experience delivering scalable React web applications, focused on clear UX, performance, and measurable business outcomes.”
  - Primary calls-to-action now use route-based navigation: “View Projects” links to `/projects` and “Hire Me” links to `/contact`.
  - Headline uses a slightly heavier font weight to increase contrast and establish it as the primary focal point above the fold without changing colors or copy.
- Layout and design:
  - Two-column layout on desktop (copy on the left, abstract UI mockup on the right), stacked vertically on mobile.
  - No personal photography; the visual side uses an abstract UI card mockup to suggest product work without being distracting.
  - Uses the global `page-section` spacing and `max-w-[1200px]` constraint to align with the layout system.
  - Applies `animate-fade-up` for a minimal entry animation and `hover-elevate`/`pressable` motion utilities in line with the minimal-motion rules.

## Last changes applied

- **2026-01-21**: Created `Hero.tsx` with headline, subline, CTAs, and abstract illustration plus this `memory.md` documenting home hero content and layout decisions.
- **2026-01-21**: Scroll navigation removed from the hero CTAs; React Router implemented so the home page is a route composed of hero, services preview, and project highlights, with full sections moved to dedicated routes.
- **2026-01-21**: Adjusted hero typography to slightly increase headline visual contrast while keeping layout, spacing, colors, and copy unchanged.

