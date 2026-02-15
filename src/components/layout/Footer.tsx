/**
 * Footer with logo, quick links, contact info, and socials.
 * Spinning footer-bg-img.png only behind the left section (Sakkeer + tagline); not grabbable.
 */

import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { contactDetails, resumeUrl } from "@/data/contact.data";
import { Logo } from "@/components/ui/Logo";
import footerBgImg from "@/assets/images/footer-bg-img.png";

const socialIcons: Record<string, React.ElementType> = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  instagram: Instagram,
};

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
  { href: resumeUrl, label: "Resume", external: true },
];

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/10 mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8 md:gap-10 lg:gap-12 text-center md:text-left">
          {/* Left: Logo + tagline — spinning bg image behind this section only; responsive height and image size */}
          <div className="relative overflow-hidden min-h-[11rem] sm:min-h-[11rem] md:min-h-[10rem] lg:min-h-[11rem] py-2">
            <div
              className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none"
              aria-hidden
            >
              <img
                src={footerBgImg}
                alt=""
                draggable={false}
                className="footer-bg-no-drag h-full w-full max-h-full max-w-full object-contain object-center opacity-40 brightness-110 contrast-125 animate-spin-slow motion-reduce:animate-none select-none pointer-events-none max-h-[8.5rem] max-w-[95%] sm:max-h-[10rem] sm:max-w-[100%] md:max-h-none md:max-w-full"
              />
            </div>
            <div className="relative z-10 px-1">
              <Link to="/" className="font-hero font-bold text-lg sm:text-xl text-white flex items-center gap-2 justify-center md:justify-start">
                <Logo variant="black" />
                Sakkeer
              </Link>
              <p className="mt-3 text-white/70 text-sm max-w-xs mx-auto md:mx-0 px-1 sm:px-0">
                React Native and React developer. Building mobile apps, web applications, dashboards,
                and internal tools for businesses.
              </p>
            </div>
          </div>

          {/* Center: Quick links — touch-friendly on mobile */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-1 flex flex-col items-center md:items-start">
              {quickLinks.map((item) => (
                <li key={item.label} className="min-h-[44px] flex items-center justify-center md:justify-start">
                  {"external" in item && item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-portfolio-primary transition-colors text-sm py-2 px-1 -my-1 -mx-1 rounded touch-manipulation"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.to}
                      className="text-white/70 hover:text-portfolio-primary transition-colors text-sm py-2 px-1 -my-1 -mx-1 rounded touch-manipulation"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact — wrap-friendly and touch-friendly on mobile */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-sm flex flex-col items-center md:items-start">
              <a
                href={`mailto:${contactDetails.email}`}
                className="flex items-center gap-2 text-white/70 hover:text-portfolio-primary transition-colors break-all min-h-[44px] items-center justify-center md:justify-start touch-manipulation"
              >
                <Mail size={16} className="shrink-0" />
                {contactDetails.email}
              </a>
              <a
                href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-white/70 hover:text-portfolio-primary transition-colors min-h-[44px] items-center justify-center md:justify-start touch-manipulation sm:whitespace-nowrap"
              >
                <Phone size={16} className="shrink-0" />
                {contactDetails.phone}
              </a>
              {(contactDetails.address ?? contactDetails.location) && (
                <p className="flex items-center gap-2 text-white/70 min-h-[44px] items-center justify-center md:justify-start text-center md:text-left">
                  <MapPin size={16} className="shrink-0" />
                  <span>{contactDetails.address ?? contactDetails.location}</span>
                </p>
              )}
            </div>
            <div className="flex gap-2 mt-4 justify-center md:justify-start flex-wrap">
              {contactDetails.socials.map((s) => {
                const Icon = socialIcons[s.icon] ?? Mail;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 sm:w-9 sm:h-9 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:text-portfolio-primary hover:bg-white/10 transition-colors touch-manipulation"
                    aria-label={s.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 text-center text-white/50 text-sm px-2">
          © {new Date().getFullYear()} Sakkeer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
