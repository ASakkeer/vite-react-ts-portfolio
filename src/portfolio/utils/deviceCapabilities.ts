export type DeviceCapabilities = {
  isCoarsePointer: boolean;
  isTouchLike: boolean;
};

export function getDeviceCapabilities(): DeviceCapabilities {
  const coarse = window.matchMedia?.("(pointer: coarse)")?.matches ?? false;
  // `hover: none` is a good proxy for touch-like environments.
  const touchLike = window.matchMedia?.("(hover: none)")?.matches ?? coarse;
  return { isCoarsePointer: coarse, isTouchLike: touchLike };
}

