// Layout and shell components change log for `src/components/layout` (read before modifying files here).

## Purpose of `layout` components

- Provide a consistent application shell (header, constrained content area, footer) across all pages.
- Keep navigation, branding, and key calls-to-action visible and predictable for hiring managers and clients.
- Enforce the max-width and responsive behavior defined in the overall design system.

## Decisions made

- Implemented a sticky header (`Header.tsx`) with:
  - Brand mark text logo `SAKKEER`.
  - Primary navigation items: Home, Services, Projects, Experience, Contact (anchored via `#` IDs).
  - A prominent `Hire Me` call-to-action button linking to the contact section.
  - Subtle blur and border to separate it from the content while preserving a minimal, professional look.
- Created a centered layout shell (`Layout.tsx`) that:
  - Constrains page content to a `max-width` of 1200px and centers it horizontally.
  - Uses a vertical flex layout (`.page-shell`) with header, main content, and footer.
  - Maintains responsive horizontal padding so content is readable on small screens.
- Added a concise, business-focused footer (`Footer.tsx`) that reinforces role and value proposition without personal fluff.

## Last changes applied

- **2026-01-21**: Initial creation of `Header.tsx`, `Footer.tsx`, and `Layout.tsx` plus this `memory.md` to document layout and navigation decisions.

