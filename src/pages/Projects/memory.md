// Projects page section change log for `src/pages/Projects` (read before modifying files here).

## Purpose of `Projects` sections

- Present a small number of high-signal React projects and demos, not toy apps.
- Show how frontend work contributed to real outcomes: speed of delivery, operational efficiency, revenue visibility, or product flows.
- Keep structure consistent so reviewers can quickly scan project type, status, and where to explore more detail (live demo vs. case study).
- Serve as the dedicated `/projects` route in the React Router setup, with individual case studies rendered on `/projects/:id` and demos exposed under `/demos/*`.

## Decisions made

- Every project follows a consistent, case-study style structure:
  - Context
  - Problem
  - Solution
  - Key contributions
  - Outcome
  - Tech Stack
- `ProjectCaseStudy.tsx`:
  - Encapsulates this structure in a single reusable component with explicit props for each section, including an anonymized context line.
  - Renders content in clearly labeled subsections for fast scanning.
  - Uses `hover-elevate`, rounded corners, and light shadows to match other cards in the portfolio.
  - Includes a small disclaimer on each card: “Representative case study based on real enterprise work.” to make clear that details are anonymized while still grounded in real projects.
- `ProjectsList.tsx`:
  - Currently defines three representative business case studies:
    - Revenue Analytics Dashboard
    - Customer Support Operations Console
    - Design System to React Component Library
  - Each example emphasizes real product problems, React-based solutions, concrete features, and measurable or directional outcomes.
  - Section respects layout and animation rules with `page-section`, `max-w-[1200px]`, `animate-fade-up`, and no toy/demo apps.
  - Heading typography is intentionally slightly larger than adjacent home sections so the projects area is visually dominant on the home page without changing colors or spacing.

## Last changes applied

- **2026-01-21**: Created `ProjectCaseStudy.tsx`, `ProjectsList.tsx`, and this `memory.md` to enforce case-study structure and business-first project framing.
- **2026-01-21**: Scroll navigation removed from usage; React Router implemented so projects are accessed via `/projects` and detailed case studies via `/projects/:id` only, not inline on the home page.
- **2026-01-21**: Updated projects heading scale to make the projects section the primary visual anchor on the home route while maintaining the same layout grid, spacing system, colors, and copy.
 - **2026-01-21**: Refined project copy to clarify problem context, make solutions more specific, and add realistic outcome metrics (time saved, response-time deltas, adoption across apps) without naming specific companies or exaggerating results.
- **2026-01-21**: Further refined projects into realistic, anonymized case studies with explicit Context, Problem, Solution, Key contributions, Outcome, and Tech Stack sections; added enterprise-style anonymization (e.g. “B2B SaaS analytics platform”, “internal operations tool”) and documented assumptions while keeping metrics approximate and believable.
- **2026-01-21**: Condensed the `/projects` index into lightweight cards (title, role, one-line context, outcome bullets, and a “View case study” CTA) while moving full case-study content to `/projects/:slug` pages for better scannability and to help recruiters quickly find relevant examples before diving into details.

