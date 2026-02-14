/**
 * Animated floating shapes (circles, rectangles) for Hero and decorative sections.
 * Uses Framer Motion with reduced motion support for accessibility.
 */

import { motion, useReducedMotion } from "framer-motion";

/* Sizes kept moderate for mobile; desktop gets same visual */
const shapes = [
  { w: 80, h: 80, x: "10%", y: "20%", delay: 0, duration: 4 },
  { w: 50, h: 50, x: "85%", y: "30%", delay: 0.5, duration: 5 },
  { w: 40, h: 40, x: "75%", y: "70%", delay: 1, duration: 4.5 },
  { w: 60, h: 30, x: "5%", y: "75%", delay: 0.3, duration: 5.5 },
  { w: 90, h: 90, x: "50%", y: "50%", delay: 0.8, duration: 6 },
];

export function FloatingElements() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border-2 border-portfolio-primary/30 bg-portfolio-primary/5"
          style={{
            width: s.w,
            height: s.h,
            left: s.x,
            top: s.y,
            transform: "translate(-50%, -50%)",
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -15, 0],
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1],
                }
          }
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Rectangle shape */}
      <motion.div
        className="absolute w-20 h-12 sm:w-32 sm:h-20 border-2 border-portfolio-primary/20 rounded-lg bg-portfolio-primary/5"
        style={{ right: "15%", top: "25%", transform: "rotate(-15deg)" }}
        animate={
          shouldReduceMotion
            ? {}
            : { y: [0, -10, 0], rotate: [-15, -12, -15] }
        }
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
