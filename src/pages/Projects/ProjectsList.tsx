/**
 * Grid of project cards + non-clickable "more projects cooking" card at the end.
 */

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ComingSoonCard } from "./ComingSoonCard";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "@/data/projects.mock";

interface ProjectsListProps {
  limit?: number;
}

export function ProjectsList({ limit }: ProjectsListProps) {
  const projects = limit ? projectsData.slice(0, limit) : projectsData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-stretch">
      {projects.map((project, i) => (
        <AnimatedSection key={project.id} delay={i * 0.08} direction="up" className="h-full min-h-0">
          <ProjectCard project={project} />
        </AnimatedSection>
      ))}
      <AnimatedSection delay={0.12} direction="up" className="h-full min-h-0">
        <ComingSoonCard />
      </AnimatedSection>
    </div>
  );
}
