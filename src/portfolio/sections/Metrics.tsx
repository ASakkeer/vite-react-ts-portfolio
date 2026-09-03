import { useEffect, useRef, useState } from "react";
import { metricsCopy } from "@/portfolio/data/portfolioData";
import { useReducedMotion } from "@/portfolio/hooks/useReducedMotion";

const metricItems = [
  {
    end: 8,
    suffix: "",
    label: "Years in software",
    desc: "Production engineering across web and mobile products.",
  },
  {
    end: 5,
    suffix: "+",
    label: "Years React Native",
    desc: "Shipped and maintained cross-platform mobile apps.",
  },
  {
    end: 10,
    suffix: "+",
    label: "Apps shipped",
    desc: "Released to the App Store and Google Play.",
  },
  {
    end: 65,
    prefix: "",
    suffix: "%",
    label: "Crash Reduction",
    desc: "Through monitoring and performance-focused work.",
    accent: true,
  },
] as const;

function useOnceInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function MetricValue({
  end,
  prefix = "",
  suffix,
  accent,
  animate,
}: {
  end: number;
  prefix?: string;
  suffix: string;
  accent?: boolean;
  animate: boolean;
}) {
  const reducedMotion = useReducedMotion();
  const [value, setValue] = useState(reducedMotion ? end : 0);

  useEffect(() => {
    if (!animate) return;
    if (reducedMotion) {
      setValue(end);
      return;
    }

    const start = performance.now();
    const duration = 900;
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, [animate, end, reducedMotion]);

  return (
    <div
      className={
        accent
          ? "font-display font-bold text-6xl lg:text-7xl text-[#FF494A] tracking-tight"
          : "font-display font-bold text-6xl lg:text-7xl text-white tracking-tight"
      }
    >
      {prefix}
      {value}
      <span className={accent ? "text-white text-5xl font-light" : "text-[#FF494A] font-light"}>
        {suffix}
      </span>
    </div>
  );
}

export function Metrics() {
  const { ref, inView } = useOnceInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="scene-proof"
      className="relative w-full py-24 md:py-32 px-6 md:px-12 border-y border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#A1A1AA] mb-14 block">
          {metricsCopy.eyebrow}
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {metricItems.map((m) => (
            <div key={m.label} className="border-l border-white/10 pl-6">
              <MetricValue
                end={m.end}
                prefix={"prefix" in m ? m.prefix : ""}
                suffix={m.suffix}
                accent={"accent" in m && m.accent}
                animate={inView}
              />
              <h3 className="font-display text-lg font-semibold text-white mt-5">{m.label}</h3>
              <p className="font-body text-sm text-[#A1A1AA] mt-1 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
