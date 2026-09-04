import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/portfolio/hooks/useReducedMotion";
import { useDeviceCapabilities } from "@/portfolio/hooks/useDeviceCapabilities";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
};

const MAGNET_PX = 4;

export function MagneticButton(
  props:
    | (BaseProps & { href: string; onClick?: React.MouseEventHandler })
    | (BaseProps & { onClick?: React.MouseEventHandler; href?: never })
) {
  const reducedMotion = useReducedMotion();
  const caps = useDeviceCapabilities();
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);

  const isMagnetEnabled = useMemo(() => {
    return !reducedMotion && !caps.isTouchLike;
  }, [reducedMotion, caps.isTouchLike]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !isMagnetEnabled) return;

    const quickX = gsap.quickTo(el, "x", { duration: 0.18, ease: "power3.out" });
    const quickY = gsap.quickTo(el, "y", { duration: 0.18, ease: "power3.out" });
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const rect = el.getBoundingClientRect();
        const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
        const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
        quickX(dx * MAGNET_PX);
        quickY(dy * MAGNET_PX);
      });
    };

    const onLeave = () => {
      quickX(0);
      quickY(0);
    };

    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (raf) window.cancelAnimationFrame(raf);
      quickX(0);
      quickY(0);
    };
  }, [isMagnetEnabled]);

  const className = props.className;

  if ("href" in props && props.href) {
    return (
      <a
        ref={ref as unknown as React.Ref<HTMLAnchorElement>}
        className={className}
        href={props.href}
        onClick={props.onClick}
        target={props.target}
        rel={props.rel}
        data-magnetic=""
        data-burnable=""
      >
        {props.children}
      </a>
    );
  }

  return (
    <button
      ref={ref as unknown as React.Ref<HTMLButtonElement>}
      className={className}
      type="button"
      onClick={props.onClick}
      data-magnetic=""
      data-burnable=""
    >
      {props.children}
    </button>
  );
}
