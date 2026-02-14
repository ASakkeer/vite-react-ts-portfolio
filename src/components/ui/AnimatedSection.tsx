/**
 * Animated section with scroll-triggered pop-in and optional fade-out on scroll exit.
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  fadeOutOnExit?: boolean;
}

const directionOffset = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
};

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  fadeOutOnExit = false,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const offset = directionOffset[direction];
  const initial = { opacity: 0, ...offset };
  const animate = { opacity: 1, x: 0, y: 0 };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, fadeOutOnExit ? 0 : 1]);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={fadeOutOnExit ? { opacity } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
