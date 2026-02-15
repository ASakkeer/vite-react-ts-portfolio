/**
 * Project card for grid display. Theme: dark bg, primary accent, uniform size, smooth animations.
 */

import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects.mock";

interface ProjectCardProps {
  project: Project;
}

const CARD_IMAGE_ASPECT = "aspect-video"; // 16/9 – same for all cards

export function ProjectCard({ project }: ProjectCardProps) {
  const href = project.link ?? "#";
  const isExternal = project.external === true;

  return (
    <article className="group h-full flex flex-col rounded-xl overflow-hidden bg-[#1a1a1a] border border-white/10 hover:border-portfolio-primary/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-portfolio-primary/10">
      <a
        href={href}
        className="block h-full flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#161616] rounded-xl"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <div
          className={`${CARD_IMAGE_ASPECT} w-full overflow-hidden bg-white/5 flex-shrink-0 relative`}
          style={{ contain: "layout paint" }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
            loading="lazy"
            decoding="async"
          />
          {isExternal && (
            <span className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-[#161616]/90 flex items-center justify-center text-white/80 group-hover:text-portfolio-primary transition-colors">
              <ExternalLink size={14} />
            </span>
          )}
        </div>
        <div className="flex flex-col flex-1 min-h-[7.5rem] p-5 md:p-6 border-t border-white/5">
          <span className="text-portfolio-primary text-xs font-semibold uppercase tracking-wider">
            {project.category}
          </span>
          <h3 className="font-hero font-semibold text-white mt-1.5 group-hover:text-portfolio-primary transition-colors duration-200 text-base sm:text-lg">
            {project.title}
          </h3>
          <p className="text-white/70 text-sm mt-1 line-clamp-2 flex-1">{project.description}</p>
        </div>
      </a>
    </article>
  );
}
