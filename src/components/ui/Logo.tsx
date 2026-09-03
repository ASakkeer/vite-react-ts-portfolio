/**
 * Logo by page background:
 * - white → logo-white.png (dark / black backgrounds)
 * - black → logo-black.png (light / white backgrounds)
 * - gray → logo-gray.png (mid-dark surfaces, e.g. #161616)
 */

import logoGray from "@/assets/images/logo-gray.png";
import logoBlack from "@/assets/images/logo-black.png";
import logoWhite from "@/assets/images/logo-white.png";

const logos = {
  gray: logoGray,
  black: logoBlack,
  white: logoWhite,
};

interface LogoProps {
  variant?: "gray" | "black" | "white";
  className?: string;
}

export function Logo({ variant = "gray", className = "h-8 w-auto" }: LogoProps) {
  return (
    <img
      src={logos[variant]}
      alt="Sakkeer"
      className={className}
      draggable={false}
    />
  );
}
