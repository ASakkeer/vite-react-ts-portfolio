/**
 * Project card for grid display.
 */

import { motion } from "framer-motion";
import type { Project } from "@/data/projects.mock";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="group rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-portfolio-primary/30 transition-colors"
    >
      <a href={project.link ?? "#"} className="block">
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-5 md:p-6">
          <span className="text-portfolio-primary text-xs font-medium">{project.category}</span>
          <h3 className="font-semibold text-white mt-1 group-hover:text-portfolio-primary transition-colors text-base sm:text-lg">
            {project.title}
          </h3>
          <p className="text-white/70 text-sm mt-1 line-clamp-2">{project.description}</p>
        </div>
      </a>
    </motion.article>
  );
}
