import { resumeUrl } from "@/data/contact.data";

export const links = {
  github: {
    label: "GITHUB / ASakkeer",
    url: "https://github.com/ASakkeer",
  },
  linkedin: {
    label: "LinkedIn Profile",
    url: "https://linkedin.com/in/sakkeer5297",
  },
  website: {
    label: "sakkeer.com",
    url: "https://sakkeer.com",
  },
  tools: {
    label: "tools.sakkeer.com",
    url: "https://tools.sakkeer.com",
  },
  email: {
    label: "sakkeer.nsn@gmail.com",
    url: "mailto:sakkeer.nsn@gmail.com",
  },
  resume: {
    label: "RESUME",
    url: resumeUrl,
  },
} as const;

