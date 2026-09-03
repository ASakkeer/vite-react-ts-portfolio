import { useEffect, useRef, type RefObject } from "react";
import { HeroScene } from "@/portfolio/scenes/HeroScene";
import { WorkScene } from "@/portfolio/scenes/WorkScene";
import { useThree } from "@react-three/fiber";

type Metrics = Record<string, { top: number; height: number }>;

export type SceneManagerProps = {
  scrollRef: RefObject<number>;
};

const SCENE_IDS = ["scene-hero", "scene-lab"] as const;

function DemandDriver({
  scrollRef,
  metricsRef,
}: {
  scrollRef: RefObject<number>;
  metricsRef: RefObject<Metrics>;
}) {
  const invalidate = useThree((s) => s.invalidate);

  useEffect(() => {
    const sceneActive = () => {
      const y = scrollRef.current;
      for (const id of SCENE_IDS) {
        const m = metricsRef.current[id];
        if (!m) continue;
        const t = (y - m.top) / Math.max(1, m.height);
        if (t > -0.2 && t < 1.05) return true;
      }
      return false;
    };

    const onInvalidate = () => {
      if (document.hidden) return;
      if (sceneActive()) invalidate();
    };

    window.addEventListener("pointermove", onInvalidate, { passive: true });
    window.addEventListener("scroll", onInvalidate, { passive: true });
    document.addEventListener("visibilitychange", onInvalidate);
    onInvalidate();

    return () => {
      window.removeEventListener("pointermove", onInvalidate);
      window.removeEventListener("scroll", onInvalidate);
      document.removeEventListener("visibilitychange", onInvalidate);
    };
  }, [invalidate, metricsRef, scrollRef]);

  return null;
}

export function SceneManager({ scrollRef }: SceneManagerProps) {
  const metricsRef = useRef<Metrics>({});

  useEffect(() => {
    const compute = () => {
      const next: Metrics = {};
      for (const id of SCENE_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        next[id] = {
          top: rect.top + window.scrollY,
          height: el.offsetHeight || rect.height,
        };
      }
      metricsRef.current = next;
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return (
    <group>
      <ambientLight intensity={0.35} />
      <DemandDriver scrollRef={scrollRef} metricsRef={metricsRef} />
      <HeroScene scrollRef={scrollRef} metricsRef={metricsRef} />
      <WorkScene scrollRef={scrollRef} metricsRef={metricsRef} />
    </group>
  );
}
