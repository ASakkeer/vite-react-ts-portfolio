export type HeaderNavItem = {
  id: string;
  label: string;
};

export const headerNav: HeaderNavItem[] = [
  { id: "scene-hero", label: "Home" },
  { id: "scene-build", label: "About" },
  { id: "scene-trajectory", label: "Experience" },
  { id: "scene-lab", label: "Work" },
  { id: "scene-signal", label: "Skills" },
  { id: "scene-contact", label: "Contact" },
];

export const heroCopy = {
  availability: "Available for select engagements",
  name: "SAKKEER",
  nameSuffix: "A.",
  role: "SENIOR SOFTWARE ENGINEER",
  summary:
    "8 years building production web and cross-platform mobile experiences. Specializing in React Native, frontend architecture, and performance-focused UI systems.",
  ctas: {
    explore: "EXPLORE WORK",
    resume: "RESUME",
  },
  metaPills: ["REACT NATIVE", "TYPESCRIPT", "KOTLIN / SWIFT"],
};

export const manifestoCopy = {
  eyebrow: "WHAT I BUILD",
  titleLines: ["I BUILD", "MOBILE,", "WEB,", "NATIVE", "SYSTEMS", "THAT SHIP."],
};

export const metricsCopy = {
  eyebrow: "SELECTED OUTCOMES",
};

export const labCopy = {
  eyebrow: "PERSONAL WORK",
  title: "THE LAB // TOOLS.SAKKEER.COM",
  description:
    "Client-side developer utilities at tools.sakkeer.com — fast transformations that run in the browser.",
};

export const contactCopy = {
  kicker: "ABOUT",
  closingPill: "Available for select lead roles",
  title: "HAVE SOMETHING WORTH SHIPPING?",
  titleAccent: "LET'S TALK.",
  locationLine: "India · Remote",
};
