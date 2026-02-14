/**
 * About page data: education, service cards, etc.
 */

export interface EducationEntry {
  id: string;
  title: string;
  period: string;
  description: string;
}

export const educationData: EducationEntry[] = [
  {
    id: "1",
    title: "Bachelor of Computer Applications",
    period: "2014–2017",
    description:
      "Computer science fundamentals, software development, and database management. Foundation for frontend and mobile development career.",
  },
  {
    id: "2",
    title: "Higher Secondary",
    period: "2012–2014",
    description:
      "Science stream with focus on mathematics and computer applications.",
  },
];
