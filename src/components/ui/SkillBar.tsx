/**
 * Skill progress bar. Animates fill when in view.
 */

import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface SkillBarProps {
  name: string;
  percent: number;
}

export function SkillBar({ name, percent }: SkillBarProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(percent), 100);
      return () => clearTimeout(timer);
    }
  }, [inView, percent]);

  return (
    <div ref={ref} className="mb-6 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white text-sm font-medium uppercase tracking-wide">{name}</span>
        <span className="text-portfolio-primary text-sm font-medium">{percent}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-portfolio-primary transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
