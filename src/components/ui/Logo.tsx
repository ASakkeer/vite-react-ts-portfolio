/**
 * Logo component. Variant by background: gray (#161616), black, white.
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
      alt=""
      className={className}
      draggable={false}
    />
  );
}
