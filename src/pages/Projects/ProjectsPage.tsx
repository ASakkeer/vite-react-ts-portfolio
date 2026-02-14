/**
 * Projects page with full mock data grid.
 */

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProjectsList } from "./ProjectsList";

export function ProjectsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <h1 className="font-hero font-bold text-3xl md:text-4xl text-white mb-2">
            Transforming ideas into exceptional projects
          </h1>
          <p className="text-white/70 max-w-2xl mb-12">
            A showcase of mobile apps, web applications, dashboards, and tools built with React
            Native and React.
          </p>
        </AnimatedSection>
        <ProjectsList />
      </div>
    </div>
  );
}
