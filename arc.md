# Project arc

## Overview

Vite + React + TypeScript portfolio for **Sakkeer** (Senior Software Engineer – React Native & React). Theme: `#161616` background, `#ff494a` primary, white text. Fonts: Rajdhani (hero), Rubik (body).

---

## Folder Structure

```
vite-react-ts-portfolio/
├── index.html
├── package.json
├── tailwind.config.ts
├── vite.config.ts
├── arc.md
├── EMAILJS_SETUP.md
├── memory.md
│
├── public/
│   └── ...
│
└── src/
    ├── main.tsx              # Entry: React root, StrictMode, providers
    ├── App.tsx               # Router, Toaster, ThemeProvider, Layout, Routes
    ├── index.css             # Tailwind imports
    ├── vite-env.d.ts         # Vite env types
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx    # Nav, logo, socials, Resume, Hire Me; hamburger on mobile
    │   │   ├── Footer.tsx    # Logo, quick links, contact, socials; footer-bg-img (slow spin)
    │   │   ├── Layout.tsx    # Wraps pages with Header + main + Footer
    │   │   └── ScrollToTop.tsx
    │   └── ui/
    │       ├── AnimatedSection.tsx   # Framer Motion scroll pop-in
    │       ├── Button.tsx
    │       ├── FloatingElements.tsx  # Hero background shapes (responsive)
    │       ├── Logo.tsx
    │       ├── SkillBar.tsx
    │       └── StatCard.tsx
    │
    ├── pages/
    │   ├── Home/
    │   │   ├── HomePage.tsx        # Hero, ServicesSummary, About stats
    │   │   ├── Hero.tsx            # Name, role, FRONTEND effect, image, CTAs
    │   │   └── ServicesSummary.tsx
    │   ├── About/
    │   │   └── AboutPage.tsx       # Service cards, skills, stats, education, core skills
    │   ├── Experience/
    │   │   └── ExperiencePage.tsx  # Work history cards
    │   ├── Projects/
    │   │   ├── ProjectsPage.tsx    # Under construction
    │   │   ├── ProjectsList.tsx    # Grid of ProjectCard
    │   │   └── ProjectCard.tsx
    │   ├── Services/
    │   │   ├── ServicesPage.tsx    # Full services grid
    │   │   └── ServiceCard.tsx
    │   └── Contact/
    │       └── ContactPage.tsx     # Contact cards, form (EmailJS)
    │
    ├── data/
    │   ├── about.data.ts           # educationData
    │   ├── contact.data.ts         # contactDetails, resumeUrl
    │   ├── experience.data.ts      # experienceData, statCards, serviceCards, skills
    │   ├── projects.mock.ts        # projectsMock
    │   └── services.data.ts        # servicesData
    │
    ├── context/
    │   ├── ThemeContext.tsx
    │   └── NavigationContext.tsx
    │
    ├── hooks/
    │   ├── useCountUp.ts
    │   ├── useScrollAnimation.ts
    │   └── useIntersectionObserver.ts
    │
    ├── lib/
    │   └── utils.ts
    │
    ├── styles/
    │   └── global.css
    │
    ├── theme/
    │   └── theme.config.ts
    │
    └── assets/
        ├── images/
        │   └── hero.png
        └── resume/
            └── senior_software_engineer_sakkeer.pdf
```

---

## Routing Flow

```
/ (Home)
├── /about
├── /experience
├── /projects
├── /services
└── /contact
```

- **App.tsx**: `BrowserRouter` → `ThemeProvider` → `NavigationProvider` → `Layout` (with `Outlet`)
- **Layout**: `Header` + `<main><Outlet /></main>` + `Footer`
- **ScrollToTop**: Resets scroll on route change

---

## Data Flow

| Data File          | Consumed By                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `contact.data`     | Header, Footer, Hero, ContactPage (form env, fallback email)                |
| `experience.data`  | HomePage (statCards), AboutPage (serviceCards, skills, statCards), ExperiencePage |
| `about.data`       | AboutPage (educationData)                                                   |
| `services.data`    | ServicesSummary, ServicesPage, ServiceCard                                  |
| `projects.mock`    | ProjectsList, ProjectCard                                                   |

---

## Page Flow

1. **Home** → Hero (CTAs: Hire Me, View Resume) → ServicesSummary (3 cards, link to /services) → About stats (link to /about)
2. **About** → Service/skill cards (4) → Development skills (SkillBar) → Stat cards → Education → Core skills
3. **Experience** → Work history cards (role, company, duration, bullets)
4. **Projects** → Under-construction placeholder (no links yet)
5. **Services** → Full grid of ServiceCard
6. **Contact** → Contact info cards (Address, Email, Phone) → Form (name, phone, email, subject, message) → EmailJS send

---

## Feature Flow

### Contact Form
- **Form lib**: react-hook-form + zod (validation)
- **Email**: EmailJS (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`)
- **UI**: Sonner toasts (success/error), loading spinner, form reset on success
- **Body**: Consolidated `from_name`, `from_email`, `subject`, `message` (name, email, phone, subject, message)

### Resume
- **Source**: `resumeUrl` from `contact.data` → `/assets/resume/senior_software_engineer_sakkeer.pdf`
- **Used**: Header, Footer, Hero

### Animations
- **Framer Motion**: AnimatedSection (scroll pop-in), Hero motion, mobile menu
- **CSS**: `hero-float`, `hero-float-2` for FRONTEND text in Hero

---

## Component Relationships

```
Layout
├── Header
│   ├── Logo
│   ├── Nav (desktop) / Mobile menu (mobile)
│   └── Socials + Resume + Hire Me
├── main > Outlet (route content)
└── Footer
    ├── Logo
    ├── Quick links
    └── Contact + Socials

Pages use:
- AnimatedSection, Button, StatCard, SkillBar (UI)
- FloatingElements (Hero only)
- data/* (shared)
```

---

## Responsive Behavior (Mobile First)

- **Global**: `overflow-x: hidden` (html, body)
- **Container**: `px-4 md:px-6`, `container mx-auto`
- **Header**: Hamburger on `md` and below; full nav on `md+`
- **Hero**: Single column on mobile; 3-column grid on `lg+`; image order-1 on mobile; intro/About blocks use `mt-4`/`mt-6` on mobile (no negative translate) so "Hello I'm Sakkeer…" sits below hero/FRONTEND without overlay
- **Forms**: `grid-cols-1 sm:grid-cols-2` for name/phone, email/subject; `min-h-[44px]` for touch targets
- **Grids**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` (projects, services); `grid-cols-2 md:grid-cols-4` (stats)
- **Typography**: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl` patterns
- **FloatingElements**: Scaled down on small screens
- **Footer**: Single column on mobile, 3 columns on `md+`; spinning bg image scaled (max-h/max-w) on small screens; Quick Links and Contact use `min-h-[44px]` and `touch-manipulation` for touch targets; social icons `w-11` (44px) on mobile

---

## Changelog

- **Reset (Feb 2025)**: `src` cleared for new portfolio build. Preserved content in root `memory.md`.
- **Portfolio Build (Feb 2025)**: Full portfolio with theme, structure, routing, animations.
- **Responsive (Feb 2025)**: All screens mobile-responsive; touch-friendly inputs; overflow-x hidden.
- **arc.md (Feb 2025)**: Project structure, data flow, routing, page flow, feature flow documented.
- **Footer (Feb 2025)**: `footer-bg-img.png` as footer background; fit with object-cover; smooth rotation (`animate-spin-slow`, 10s linear); reduced motion respected.
