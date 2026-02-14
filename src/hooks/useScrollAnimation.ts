/**
 * Custom hook wrapping Intersection Observer + Framer Motion for scroll animations.
 * Provides consistent pop-in and fade-out behavior.
 */

import { useInView } from "react-intersection-observer";

export interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", triggerOnce = true } = options;
  const { ref, inView } = useInView({ threshold, rootMargin, triggerOnce });
  return { ref, inView };
}
