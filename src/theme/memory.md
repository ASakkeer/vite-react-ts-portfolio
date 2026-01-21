// Design-system change log for the theme folder (read before modifying files here).

## Purpose of `theme` folder

- Centralize visual design decisions (colors, typography, spacing, radii, and breakpoints) for the portfolio.
- Provide a single source of truth that can be consumed by React components, Tailwind configuration, and utilities.
- Keep the portfolio visually consistent and aligned with its career- and business-focused positioning.

## Decisions made

- Defined a primary brand color `#2563EB`, secondary surface/ink color `#0F172A`, accent color `#22C55E`, background `#F8FAFC`, and primary text color `#334155` to support a clean, professional UI.
- Established two main font stacks: `Inter` as the default sans-serif for UI and body text, and `Poppins` as a display font for headings and key highlights.
- Standardized border radius tokens (`none`, `sm`, `md`, `lg`, `xl`, `full`) to keep components visually cohesive.
- Created a small, practical spacing scale (`xs`–`3xl`) that maps cleanly to Tailwind spacing concepts.
- Adopted Tailwind-style responsive breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`) so the design system aligns with the existing Tailwind setup.

## Last changes applied

- **2026-01-21**: Initial creation of `theme.config.ts` with colors, fonts, radii, spacing, and breakpoints; documented purpose and decisions in `memory.md`.

