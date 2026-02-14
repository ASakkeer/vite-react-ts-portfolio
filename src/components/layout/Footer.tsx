/**
 * Footer with logo, quick links, contact info, and socials.
 */

import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { contactDetails, resumeUrl } from "@/data/contact.data";
import { Logo } from "@/components/ui/Logo";

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 text-center md:text-left">
          {/* Left: Logo + tagline */}
          <div>
            <Link to="/" className="font-hero font-bold text-xl text-white flex items-center gap-2 justify-center md:justify-start">
              <Logo variant="black" />
              Sakkeer
            </Link>
            <p className="mt-3 text-white/70 text-sm max-w-xs mx-auto md:mx-0">
              React Native and React developer. Building mobile apps, web applications, dashboards,
              and internal tools for businesses.
            </p>
          </div>

          {/* Center: Quick links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 flex flex-col items-center md:items-start">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  {"external" in item && item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-portfolio-primary transition-colors text-sm"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.to}
                      className="text-white/70 hover:text-portfolio-primary transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-sm flex flex-col items-center md:items-start">
              <a
                href={`mailto:${contactDetails.email}`}
                className="flex items-center gap-2 text-white/70 hover:text-portfolio-primary transition-colors break-all"
              >
                <Mail size={16} />
                {contactDetails.email}
              </a>
              <a
                href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-white/70 hover:text-portfolio-primary transition-colors whitespace-nowrap"
              >
                <Phone size={16} />
                {contactDetails.phone}
              </a>
              {(contactDetails.address ?? contactDetails.location) && (
                <p className="flex items-center gap-2 text-white/70">
                  <MapPin size={16} />
                  {contactDetails.address ?? contactDetails.location}
                </p>
              )}
            </div>
            <div className="flex gap-2 mt-4 justify-center md:justify-start">
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
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Sakkeer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
