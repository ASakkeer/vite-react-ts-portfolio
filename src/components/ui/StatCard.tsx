/**
 * Stat card with icon, value, and label.
 * Count-up animation from 0 to value when in view.
 */

import { Calendar, Smartphone, Zap, Shield } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const icons: Record<string, React.ElementType> = {
  calendar: Calendar,
  smartphone: Smartphone,
  zap: Zap,
  shield: Shield,
};

interface StatCardProps {
  value: number;
  label: string;
  icon: string;
  suffix?: string;
  countUp?: boolean;
}

export function StatCard({ value, label, icon: iconKey, suffix = "", countUp = true }: StatCardProps) {
  const Icon = icons[iconKey] ?? Calendar;

  const { ref, count } = useCountUp({
    end: value,
    duration: 2000,
  });

  const displayValue = countUp ? `${count}${suffix}` : `${value}${suffix}`;

  return (
    <div
      ref={countUp ? ref : undefined}
      className="rounded-xl bg-white/5 border border-white/10 p-4 sm:p-5 md:p-6 text-center hover:border-portfolio-primary/20 transition-colors"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-portfolio-primary/20 flex items-center justify-center mx-auto mb-2 sm:mb-3 text-portfolio-primary [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
        <Icon size={24} />
      </div>
      <span className="text-portfolio-primary font-hero font-bold text-2xl sm:text-3xl md:text-4xl block">
        {displayValue}
      </span>
      <span className="text-white text-xs sm:text-sm mt-1 block">{label}</span>
    </div>
  );
}
