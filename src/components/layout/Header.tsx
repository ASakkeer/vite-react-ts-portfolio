// Sticky site header with primary navigation and hire-me call to action.
import type { FC } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

export const Header: FC = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-slate-50/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 md:h-20">
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-slate-900 md:text-xl"
          aria-label="Sakkeer portfolio home"
        >
          SAKKEER
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hover-elevate rounded-full px-2 py-1 transition-colors hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="pressable rounded-full bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1d4ed8]"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;


