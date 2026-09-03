import { useEffect, useState } from "react";
import {
  getDeviceCapabilities,
  type DeviceCapabilities,
} from "@/portfolio/utils/deviceCapabilities";

export function useDeviceCapabilities(): DeviceCapabilities {
  const [caps, setCaps] = useState<DeviceCapabilities>(() => ({
    isCoarsePointer: false,
    isTouchLike: false,
  }));

  useEffect(() => {
    const update = () => setCaps(getDeviceCapabilities());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return caps;
}

