/**
 * Grid of project cards. Optional limit for Home preview.
 */

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProjectCard } from "./ProjectCard";
import { projectsMock } from "@/data/projects.mock";

interface ProjectsListProps {
  limit?: number;
}

export function ProjectsList({ limit }: ProjectsListProps) {
  const projects = limit ? projectsMock.slice(0, limit) : projectsMock;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
      {projects.map((project, i) => (
        <AnimatedSection key={project.id} delay={i * 0.1} direction="up">
          <ProjectCard project={project} />
        </AnimatedSection>
      ))}
    </div>
  );
}
