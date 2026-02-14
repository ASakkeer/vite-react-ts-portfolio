/**
 * Portfolio theme configuration.
 * Centralizes colors, fonts, and design tokens.
 */

export const theme = {
  colors: {
    background: "#161616",
    foreground: "#ffffff",
    primary: "#ff494a",
    primaryForeground: "#ffffff",
    muted: "#a3a3a3",
    mutedForeground: "#737373",
  },
  fonts: {
    hero: "'Rajdhani', sans-serif",
    body: "'Rubik', sans-serif",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1400px",
  },
} as const;

export type Theme = typeof theme;
