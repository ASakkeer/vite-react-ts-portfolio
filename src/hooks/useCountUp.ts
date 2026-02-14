/**
 * Count-up animation when element enters viewport.
 * Returns current count value for display.
 */

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
}

export function useCountUp({ end, duration = 1200, start = 0 }: UseCountUpOptions) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!inView) return;

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic for smooth deceleration at end
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(start + (end - start) * eased);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [inView, end, start, duration]);

  return { ref, count };
}
