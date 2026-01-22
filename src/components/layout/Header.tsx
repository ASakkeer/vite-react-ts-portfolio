// Sticky site header with primary navigation, active route highlighting, and hire-me call to action.
import type { FC } from "react";
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-slate-50/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 md:h-20">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="Sakkeer portfolio home"
          onClick={closeMenu}
        >
          <img
            src="/brand/logo-black.png"
            alt="Sakkeer"
            className="h-6 w-6"
            width={24}
            height={24}
            fetchPriority="high"
          />
          <span
            className="text-lg font-medium tracking-wide text-slate-900 md:text-xl"
            style={{ letterSpacing: "0.1em" }}
          >
            SAKKEER
          </span>
        </Link>

        {/* Desktop Navigation */}
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

        {/* Desktop Hire Me Button */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/contact"
            className="rounded-full border border-slate-300 bg-transparent px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          className="flex flex-col items-center justify-center gap-1.5 rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-slate-700 transition-all ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-slate-700 transition-all ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-slate-700 transition-all ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        className={`absolute left-0 right-0 top-16 z-50 border-b border-slate-200 bg-slate-50/95 backdrop-blur transition-all md:hidden ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mx-auto max-w-[1200px] px-4 py-4">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={closeMenu}
                className={({ isActive }) =>
                  [
                    "rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-[#2563EB] text-white font-semibold"
                      : "text-slate-700 hover:bg-slate-100",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-2 rounded-lg border border-slate-300 bg-transparent px-4 py-2.5 text-center text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;


