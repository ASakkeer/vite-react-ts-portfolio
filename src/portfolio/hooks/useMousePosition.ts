import { useEffect, useRef } from "react";

export type MousePosition = { x: number; y: number };

/**
 * Ref-based mouse position to avoid React rerenders on every pointer move.
 */
export function useMousePosition() {
  const ref = useRef<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      ref.current.x = e.clientX;
      ref.current.y = e.clientY;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return ref;
}

