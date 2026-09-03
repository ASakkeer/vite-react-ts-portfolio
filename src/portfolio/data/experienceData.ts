export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  duration: string;
  summary: string;
  tech: string[];
};

export const experienceData: ExperienceEntry[] = [
  {
    id: "atom8",
    role: "Senior Software Engineer",
    company: "Atom8 IT Solutions",
    duration: "2020–2025",
    summary:
      "Lead the mobile engineering practice from architecture through shipping. Delivered 10+ cross-platform mobile apps and reduced app crash rate by 65% through error monitoring and performance work.",
    tech: ["React Native", "TypeScript", "REST APIs", "CI/CD"],
  },
  {
    id: "hartwin",
    role: "Full Stack Developer",
    company: "Hartwin Tech",
    duration: "2020",
    summary:
      "Built responsive web interfaces and integrated frontend with REST APIs for reliable data flow and error handling.",
    tech: ["React", "TypeScript", "JavaScript", "REST APIs"],
  },
  {
    id: "brigita",
    role: "Frontend Developer",
    company: "Brigita Solutions",
    duration: "2017–2020",
    summary:
      "Crafted modular web UI using React and Angular, focusing on component-driven architecture and reusable component systems.",
    tech: ["React", "Angular", "JavaScript", "Component systems"],
  },
];

