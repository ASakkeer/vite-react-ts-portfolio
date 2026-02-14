/**
 * About page data: education, service cards, etc.
 */

export interface EducationEntry {
  id: string;
  title: string;
  institution?: string;
  period: string;
  description: string;
}

export const educationData: EducationEntry[] = [
  {
    id: "1",
    title: "B Sc Computer Science",
    institution: "K.S.G. College of Arts and Science, Coimbatore",
    period: "2014 – 2017",
    description:
      "Bachelor's degree in Computer Science covering programming fundamentals, data structures, algorithms, software engineering, databases, and computer networks. Foundation for software development and career in frontend, mobile, and full-stack development.",
  },
];
