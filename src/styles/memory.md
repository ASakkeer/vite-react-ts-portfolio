// Styles and animation change log for the `styles` folder (read before modifying files here).

## Purpose of `styles` folder

- Centralize global CSS and low-level animation utilities that complement Tailwind and the theme config.
- Keep layout, typography defaults, and motion behaviors consistent across the portfolio.
- Ensure the visual experience remains professional, minimal, and aligned with business-focused goals.

## Decisions made

- Adopted minimal-motion as a default principle: no parallax, no heavy motion, and no distracting continuous animations.
- Defined a single easing curve `cubic-bezier(.22,.9,.26,1)` as the standard for all transitions and keyframe animations.
- Constrained animation durations to the 300–500ms range for entry and hover transitions to feel responsive but calm.
- Implemented three animation patterns:
  - Fade-up on section entry (`@keyframes fade-up` and `.animate-fade-up`).
  - Subtle hover elevation (`.hover-elevate`) for cards and interactive surfaces.
  - Button press feedback (`.pressable`) for clear but restrained interaction response.
- Kept all motion effect utilities opt-in via classes to avoid over-animating by default.

## Last changes applied

- **2026-01-21**: Created `global.css` for base layout and typography, `animations.css` for minimal animation utilities, and initial `memory.md` documenting motion rules and constraints.

