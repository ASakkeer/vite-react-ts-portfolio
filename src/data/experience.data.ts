/**
 * Experience data. Content from memory.md.
 */

export interface Role {
  id: string;
  company: string;
  role: string;
  duration: string;
  bullets: string[];
}

export const experienceData: Role[] = [
  {
    id: "1",
    company: "Atom8 IT Solutions Pvt Ltd",
    role: "Senior Software Engineer – React Native",
    duration: "Aug 2020 – Sep 2025",
    bullets: [
      "Delivered 10+ cross-platform mobile apps from architecture through app store publishing.",
      "Reduced app crash rate by 40% through error monitoring and performance optimization.",
      "Led React Native technical decisions and mentored team on best practices.",
    ],
  },
  {
    id: "2",
    company: "Hartwin Tech Pvt Ltd",
    role: "Full Stack Developer",
    duration: "Mar 2020 – Jun 2020",
    bullets: [
      "Built responsive web interfaces and mobile screens for integrated product experiences.",
      "Integrated frontend with REST APIs for reliable data flow and error handling.",
    ],
  },
  {
    id: "3",
    company: "Brigita Solutions Pvt Ltd",
    role: "Frontend Developer",
    duration: "Sep 2017 – Feb 2020",
    bullets: [
      "Built web UIs with React and Angular using component-driven architecture.",
      "Implemented reusable UI component libraries improving development speed.",
      "Collaborated with backend on API contracts and data structures.",
    ],
  },
];

export const coreSkills = [
  "React Native",
  "React",
  "TypeScript",
  "JavaScript",
  "REST APIs",
  "React Query",
  "State Management",
  "App Store / Play Store publishing",
  "Component-driven UI",
];

/** Skill bars for Experience page. Relevant to projects. */
export interface SkillBar {
  name: string;
  percent: number;
}

export const developmentSkillsLeft: SkillBar[] = [
  { name: "React Native", percent: 95 },
  { name: "React", percent: 75 },
  { name: "JavaScript", percent: 90 },
  { name: "TypeScript", percent: 75 },
];

export const developmentSkillsRight: SkillBar[] = [
  { name: "HTML", percent: 95 },
  { name: "CSS", percent: 95 },
  { name: "Express.js", percent: 50 },
  { name: "MongoDB", percent: 35 },
];

/** Stats for experience section. */
export const experienceStats = {
  years: "8+",
  appsPublished: "5+",
  performanceBoost: 40,
  crashReduction: 85,
};

/** Stat cards with value, label, icon, and optional suffix for Home/About. */
export const statCards = [
  { value: 8, suffix: "+", label: "Years Experience", icon: "calendar", countUp: true },
  { value: 5, suffix: "+", label: "Apps Published", icon: "smartphone", countUp: true },
  { value: 40, suffix: "%", label: "Performance Boost", icon: "zap", countUp: true },
  { value: 85, suffix: "%", label: "Crash Reduction", icon: "shield", countUp: true },
];

/** Service/skill cards for About/Experience hero area. */
export const serviceCards = [
  { title: "React Native", count: "10+", icon: "mobile" },
  { title: "Web App", count: "8+", icon: "web" },
  { title: "UI/UX Design", count: "25+", icon: "design" },
  { title: "API Integration", count: "25+", icon: "api" },
];
