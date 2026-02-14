/**
 * Contact details for Sakkeer.
 */

import resumePdf from "@/assets/resume/senior_software_engineer_sakkeer.pdf";

export const resumeUrl = resumePdf;

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactDetails {
  email: string;
  phone: string;
  address?: string;
  location?: string;
  socials: SocialLink[];
}

export const contactDetails: ContactDetails = {
  email: "sakkeer.nsn@gmail.com",
  phone: "+91 7904341001",
  address: "Coimbatore, Tamil Nadu, India",
  location: "Coimbatore, Tamil Nadu, India",
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/sakkeer5297", icon: "linkedin" },
    { name: "X", url: "https://x.com/Sakkeer5297", icon: "twitter" },
    { name: "GitHub", url: "https://github.com/ASakkeer", icon: "github" },
    { name: "Instagram", url: "https://www.instagram.com/_luckystar_sakkeer_", icon: "instagram" },
  ],
};
