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
      "Owned end-to-end delivery of 10+ cross-platform mobile applications, from initial architecture through app store publishing and ongoing maintenance.",
      "Led technical decisions for React Native architecture, state management, and native module integration across consumer and B2B mobile products.",
      "Reduced app crash rate by 40% through systematic error monitoring, stability improvements, and performance optimization.",
      "Managed complete app store publishing workflow (Apple App Store, Google Play Store), including release coordination, metadata, and compliance.",
      "Mentored team members on React Native best practices, code review standards, and mobile delivery workflows.",
    ],
  },
  {
    id: "2",
    company: "Hartwin Tech Pvt Ltd",
    role: "Full Stack Developer",
    duration: "Mar 2020 – Jun 2020",
    bullets: [
      "Contributed to web and mobile product development, working across frontend and backend to deliver integrated user experiences.",
      "Built responsive web interfaces and mobile screens, collaborating with product and design teams to translate requirements into working features.",
      "Integrated frontend applications with REST APIs, ensuring reliable data flow and error handling across user-facing workflows.",
    ],
  },
  {
    id: "3",
    company: "Brigita Solutions Pvt Ltd",
    role: "Frontend Developer",
    duration: "Sep 2017 – Feb 2020",
    bullets: [
      "Built user interfaces for web applications using React and Angular, focusing on component-driven architecture and maintainable code patterns.",
      "Implemented reusable UI component libraries and UI patterns that improved development speed and consistency across multiple product features.",
      "Collaborated with backend engineering teams to design API contracts and data structures, ensuring smooth integration between frontend and backend systems.",
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

export const designSkills: SkillBar[] = [
  { name: "Figma", percent: 85 },
  { name: "Photoshop", percent: 70 },
  { name: "UI/UX Design", percent: 80 },
];

export const developmentSkills: SkillBar[] = [
  { name: "React Native", percent: 95 },
  { name: "React", percent: 92 },
  { name: "TypeScript", percent: 88 },
  { name: "JavaScript", percent: 90 },
  { name: "HTML", percent: 88 },
  { name: "CSS", percent: 85 },
  { name: "Express.js", percent: 65 },
  { name: "MongoDB", percent: 55 },
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
  { title: "React Web", count: "15+", icon: "web" },
  { title: "UI/UX Design", count: "25+", icon: "design" },
  { title: "API Integration", count: "20+", icon: "api" },
];
