export type BuildStage = {
  id: string;
  label: string;
  description: string;
};

export type SkillGroup = {
  id: string;
  index: string;
  title: string;
  skills: string[];
};

/** Engineering workflow under HOW I BUILD */
export const buildStages: BuildStage[] = [
  {
    id: "ui",
    label: "UI",
    description: "React Native & React interfaces built for real-world usability.",
  },
  {
    id: "state",
    label: "STATE",
    description: "Redux / Redux Toolkit for predictable application and UI state.",
  },
  {
    id: "api",
    label: "API",
    description: "REST API integration, asynchronous data flows and error handling.",
  },
  {
    id: "native",
    label: "NATIVE",
    description:
      "Android & iOS capabilities through React Native, with Kotlin / Swift when needed.",
  },
  {
    id: "device",
    label: "DEVICE",
    description: "Cross-platform experiences tested and optimized for production devices.",
  },
];

/** Editorial skill groups — only skills already represented in the portfolio. */
export const skillGroups: SkillGroup[] = [
  {
    id: "mobile-frontend",
    index: "01",
    title: "MOBILE & FRONTEND",
    skills: ["React Native", "React.js", "TypeScript", "JavaScript", "Angular"],
  },
  {
    id: "platform",
    index: "02",
    title: "PLATFORM",
    skills: ["Android", "Kotlin", "iOS", "Swift", "Redux / Redux Toolkit"],
  },
  {
    id: "engineering",
    index: "03",
    title: "ENGINEERING",
    skills: [
      "REST APIs",
      "Git",
      "CI/CD",
      "Cross-platform development",
      "Performance optimization",
    ],
  },
];

/** @deprecated Prefer skillGroups — kept for any residual imports */
export const technologyTags: string[] = skillGroups.flatMap((g) => g.skills);
