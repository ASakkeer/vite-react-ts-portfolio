/**
 * Primary button component.
 */

import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({
  children,
  to,
  href,
  variant = "primary",
  className,
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-sm transition-all hover:opacity-90";
  const variants = {
    primary: "bg-portfolio-primary text-white",
    outline: "border-2 border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10",
  };
  const cls = cn(base, variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={cls} disabled={disabled}>
      {children}
    </button>
  );
}
