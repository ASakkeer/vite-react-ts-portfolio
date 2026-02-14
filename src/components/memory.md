# Components

## Purpose

Reusable UI and layout components for the portfolio.

## Structure

- **layout/** – Header, Footer, Layout (wraps pages)
- **ui/** – Button, AnimatedSection, FloatingElements

## Flow

- `Layout` wraps all page content via React Router `<Outlet />`
- `Header` is sticky with nav, socials, Hire Me CTA; responsive hamburger on mobile
- `Footer` has logo, quick links, contact info, socials
- `AnimatedSection` uses Framer Motion for scroll-triggered pop-in and optional fade-out
- `FloatingElements` renders decorative animated shapes (Hero, etc.)

## Dependencies

- framer-motion
- react-router-dom
- lucide-react
- @/lib/utils, @/data/contact.data

## Future changes

- Add more shared UI (e.g. Card, Badge) as needed
