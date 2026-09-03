import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { hasWebGL } from "@/portfolio/utils/webgl";
import { useReducedMotion } from "@/portfolio/hooks/useReducedMotion";
import { useDeviceCapabilities } from "@/portfolio/hooks/useDeviceCapabilities";
import { SceneManager } from "@/portfolio/three/SceneManager";
import { attachPointerStore } from "@/portfolio/interaction/pointerStore";

export function PortfolioCanvas() {
  const reducedMotion = useReducedMotion();
  const caps = useDeviceCapabilities();
  const scrollRef = useRef(0);
  const [webglEnabled, setWebglEnabled] = useState(false);

  useEffect(() => {
    setWebglEnabled(hasWebGL());
  }, []);

  useEffect(() => {
    const detach = attachPointerStore();
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        scrollRef.current = window.scrollY || 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
      detach();
    };
  }, []);

  const dpr = useMemo(() => {
    if (typeof window === "undefined") return 1;
    if (caps.isTouchLike || reducedMotion) return 1;
    return Math.min(window.devicePixelRatio || 1, 1.25);
  }, [caps.isTouchLike, reducedMotion]);

  if (!webglEnabled || reducedMotion || caps.isTouchLike) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        frameloop="demand"
        dpr={dpr}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "high-performance",
          stencil: false,
        }}
        camera={{ position: [0, 0, 12], fov: 42 }}
      >
        <Suspense fallback={null}>
          <SceneManager scrollRef={scrollRef} />
        </Suspense>
      </Canvas>
    </div>
  );
}
