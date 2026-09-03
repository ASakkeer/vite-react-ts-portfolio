import { useEffect } from "react";
import { useReducedMotion } from "@/portfolio/hooks/useReducedMotion";
import { setupScrollAnimations } from "@/portfolio/animations/scrollAnimations";

export function ScrollChoreography() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const cleanup = setupScrollAnimations();
    return cleanup;
  }, [reducedMotion]);

  return null;
}

