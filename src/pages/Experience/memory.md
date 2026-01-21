// Experience page section change log for `src/pages/Experience` (read before modifying files here).

## Purpose of `Experience` sections

- Present roles in a concise, professional format that highlights responsibilities and measurable contributions.
- Emphasize how React and frontend work supported product, analytics, and operational goals.
- Keep tone neutral and outcome-oriented, avoiding emotional or narrative language.
- Provide the primary content for the `/experience` route in the React Router configuration instead of being embedded in a single scrolling page.

## Decisions made

- Experience items include:
  - Company
  - Role
  - Duration
  - Achievements (bullet list, capped at three per role)
  - Technologies
- Achievements:
  - Focus on measurable or directional impact (performance improvements, reduced support load, faster reporting).
  - Emphasize scale and responsibility (core workflows, high-traffic areas, primary queues) rather than generic task descriptions.
  - Avoid vague language; statements describe concrete outcomes while staying truthful to the underlying experience.
  - Highlight collaboration and ownership only insofar as it clarifies the contribution to business outcomes.
- Layout and behavior:
  - Each experience entry is rendered as a card with company, role, and duration header, plus Achievements and Technologies sections.
  - Uses `page-section`, `max-w-[1200px]`, `animate-fade-up`, and `hover-elevate` to stay aligned with other sections.
  - Content is optimized for scanning by hiring managers and clients assessing fit for React-heavy roles.

## Last changes applied

- **2026-01-21**: Created `Experience.tsx` with three representative roles and this `memory.md` capturing structure, tone, and layout conventions.
- **2026-01-21**: Scroll navigation removed from the site; experience content is now only accessible via the `/experience` route, not as a long home-page section.
- **2026-01-21**: Refined achievement bullets to keep a maximum of three per role and to focus on senior, credible impact (scale, performance, support load, regression prevention) without introducing new roles or fabricated experience.

