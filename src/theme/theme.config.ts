// Centralized design system configuration for the career-focused portfolio.
export const colors = {
  primary: "#2563EB",
  secondary: "#0F172A",
  accent: "#22C55E",
  background: "#F8FAFC",
  textPrimary: "#334155",
} as const;

export const fonts = {
  // Use CSS font-family stacks; fonts are loaded via CSS/Tailwind.
  sans: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  display: '"Poppins", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
} as const;

export const radii = {
  none: "0px",
  sm: "0.125rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  full: "9999px",
} as const;

export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.5rem",
  "2xl": "2rem",
  "3xl": "3rem",
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export const theme = {
  colors,
  fonts,
  radii,
  spacing,
  breakpoints,
} as const;

export type Theme = typeof theme;

