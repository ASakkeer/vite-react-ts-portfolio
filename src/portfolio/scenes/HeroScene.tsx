import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, type RefObject } from "react";
import * as THREE from "three";
import { pointer } from "@/portfolio/interaction/pointerStore";

type Metrics = Record<string, { top: number; height: number }>;

export function HeroScene({
  scrollRef,
  metricsRef,
}: {
  scrollRef: RefObject<number>;
  metricsRef: RefObject<Metrics>;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const tilt = useRef({ x: 0, y: 0 });

  const ringMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: 0xff494a,
        transparent: true,
        opacity: 0.18,
        side: THREE.DoubleSide,
        depthWrite: false,
      }),
    []
  );

  useFrame(() => {
    const group = groupRef.current;
    if (!group) return;

    const m = metricsRef.current["scene-hero"];
    if (!m) {
      group.visible = false;
      return;
    }

    const t = (scrollRef.current - m.top) / Math.max(1, m.height);
    const inView = t > -0.15 && t < 0.95;
    group.visible = inView;
    if (!inView) return;

    tilt.current.x += (pointer.ny * 0.08 - tilt.current.x) * 0.12;
    tilt.current.y += (pointer.nx * 0.1 - tilt.current.y) * 0.12;
    group.rotation.x = tilt.current.x;
    group.rotation.y = tilt.current.y;
  });

  return (
    <group ref={groupRef} position={[3.2, 0.15, -1.2]}>
      <mesh rotation={[Math.PI / 2.6, 0.2, 0]} material={ringMat}>
        <ringGeometry args={[2.4, 2.43, 48]} />
      </mesh>
    </group>
  );
}
