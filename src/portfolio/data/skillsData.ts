export type DepthNode = {
  id: string;
  label: string;
  tech: string[];
};

export const depthFlowNodes: DepthNode[] = [
  {
    id: "ui",
    label: "UI",
    tech: ["React.js", "React Native"],
  },
  {
    id: "state",
    label: "STATE",
    tech: ["Redux / Redux Toolkit", "TypeScript"],
  },
  {
    id: "api",
    label: "API",
    tech: ["REST APIs", "CI/CD"],
  },
  {
    id: "native",
    label: "NATIVE",
    tech: ["Kotlin", "Swift", "JavaScript", "TypeScript"],
  },
  {
    id: "device",
    label: "DEVICE",
    tech: ["React Native", "Git / CI/CD"],
  },
];

export const technologyTags: string[] = [
  "React Native",
  "React.js",
  "TypeScript",
  "JavaScript",
  "Angular",
  "Kotlin",
  "Swift",
  "Redux / Redux Toolkit",
  "REST APIs",
  "Git / CI/CD",
];

