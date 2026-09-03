import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, type RefObject } from "react";
import * as THREE from "three";
import { pointer } from "@/portfolio/interaction/pointerStore";

type Metrics = Record<string, { top: number; height: number }>;

export function WorkScene({
  scrollRef,
  metricsRef,
}: {
  scrollRef: RefObject<number>;
  metricsRef: RefObject<Metrics>;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const tilt = useRef({ x: 0, y: 0 });

  const geometries = useMemo(
    () => ({
      frame: new THREE.BoxGeometry(4.2, 2.6, 0.12),
      screen: new THREE.PlaneGeometry(3.8, 2.2),
    }),
    []
  );

  const materials = useMemo(
    () => ({
      frame: new THREE.MeshBasicMaterial({
        color: 0x17181b,
        transparent: true,
        opacity: 0.35,
        depthWrite: false,
      }),
      screen: new THREE.MeshBasicMaterial({
        color: 0xff494a,
        transparent: true,
        opacity: 0.08,
        depthWrite: false,
      }),
    }),
    []
  );

  useFrame(() => {
    const group = groupRef.current;
    if (!group) return;

    const m = metricsRef.current["scene-lab"];
    if (!m) {
      group.visible = false;
      return;
    }

    const t = (scrollRef.current - m.top) / Math.max(1, m.height);
    const inView = t > -0.2 && t < 1.05;
    group.visible = inView;
    if (!inView) return;

    tilt.current.x += (pointer.ny * 0.06 - tilt.current.x) * 0.12;
    tilt.current.y += (pointer.nx * 0.08 - tilt.current.y) * 0.12;
    group.rotation.x = 0.08 + tilt.current.x;
    group.rotation.y = -0.18 + tilt.current.y;
  });

  return (
    <group ref={groupRef} position={[2.8, -0.1, -2]}>
      <mesh geometry={geometries.frame} material={materials.frame} />
      <mesh geometry={geometries.screen} material={materials.screen} position={[0, 0, 0.08]} />
    </group>
  );
}
