// Sticky site header with primary navigation, active route highlighting, and hire-me call to action.
import type { FC } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
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
          className="flex items-center gap-3"
          aria-label="Sakkeer portfolio home"
        >
          <img
            src="/brand/logo-black.png"
            alt="Sakkeer"
            className="h-6 w-6"
            width={24}
            height={24}
            fetchPriority="high"
          />
          <span className="text-lg font-medium tracking-wide text-slate-900 md:text-xl" style={{ letterSpacing: '0.1em' }}>
            SAKKEER
          </span>
        </Link>
        <nav className="hidden items-center gap-2 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                [
                  "rounded-full px-3 py-1 transition-colors",
                  isActive
                    ? "bg-[#2563EB] text-white font-semibold"
                    : "hover-elevate text-slate-700 hover:text-slate-900",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="rounded-full border border-slate-300 bg-transparent px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;


