import { useMediaQuery } from "@/portfolio/hooks/useMediaQuery";

export function useReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

