/**
 * Header with navigation, social links, and Hire Me CTA.
 * Reeni-inspired layout: logo left, nav center, socials + CTA right.
 * Responsive: hamburger menu on mobile.
 */

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Linkedin, Twitter, Github, Instagram, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { contactDetails } from "@/data/contact.data";
import { Logo } from "@/components/ui/Logo";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const socialIcons: Record<string, React.ElementType> = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  instagram: Instagram,
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#161616]/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="font-hero font-bold text-lg sm:text-xl text-white flex items-center gap-2 min-w-0">
          <Logo variant="gray" />
          Sakkeer
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={cn(
                "text-sm font-medium transition-colors hover:text-portfolio-primary",
                location.pathname === to ? "text-portfolio-primary" : "text-white/90"
              )}
            >
              {label.toUpperCase()}
            </Link>
          ))}
        </nav>

        {/* Right: socials + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            {contactDetails.socials.map((s) => {
              const Icon = socialIcons[s.icon] ?? Mail;
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:text-portfolio-primary hover:bg-white/10 transition-colors"
                  aria-label={s.name}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full bg-portfolio-primary text-white font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden w-10 h-10 flex items-center justify-center text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-[#161616]"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={cn(
                    "py-2 text-white font-medium",
                    location.pathname === to ? "text-portfolio-primary" : "text-white/90"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="flex gap-2 pt-2">
                {contactDetails.socials.map((s) => {
                  const Icon = socialIcons[s.icon] ?? Mail;
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white"
                      aria-label={s.name}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
              <Link
                to="/contact"
                className="mt-2 py-3 rounded-lg bg-portfolio-primary text-white font-medium text-center"
                onClick={() => setMobileOpen(false)}
              >
                Hire Me
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
