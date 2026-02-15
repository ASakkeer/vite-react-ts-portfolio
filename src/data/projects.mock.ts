/**
 * Project data for Projects page.
 * Thumbnails: add images under src/assets/images/projects/ and import here.
 */

import thumbnailTools from "@/assets/images/projects/thumbnail-tools.jpg";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  external?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Simple Web Tools",
    category: "Web Tools",
    description:
      "Fast, private, browser-based tools for developers and everyday tasks. No login. No ads. Everything runs locally in your browser.",
    image: thumbnailTools,
    link: "https://tools.sakkeer.com/",
    external: true,
  },
];

/** @deprecated Use projectsData. Kept for compatibility. */
export const projectsMock = projectsData;
