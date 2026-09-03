export const pointer = {
  x: 0,
  y: 0,
  nx: 0,
  ny: 0,
};

let attached = 0;

function onMove(e: PointerEvent) {
  pointer.x = e.clientX;
  pointer.y = e.clientY;
  const w = window.innerWidth || 1;
  const h = window.innerHeight || 1;
  pointer.nx = (e.clientX / w) * 2 - 1;
  pointer.ny = -((e.clientY / h) * 2 - 1);
}

export function attachPointerStore() {
  attached += 1;
  if (attached === 1) {
    window.addEventListener("pointermove", onMove, { passive: true });
  }
  return () => {
    attached = Math.max(0, attached - 1);
    if (attached === 0) {
      window.removeEventListener("pointermove", onMove);
    }
  };
}
