/**
 * Theme context for portfolio colors and design tokens.
 */

import { createContext, useContext, type ReactNode } from "react";
import { theme } from "@/theme/theme.config";

const ThemeContext = createContext(theme);

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
