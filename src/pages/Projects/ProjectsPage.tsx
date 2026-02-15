/**
 * Projects page. Showcase grid with uniform cards and smooth animations.
 */

import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProjectsList } from "./ProjectsList";

export function ProjectsPage() {
  return (
    <div>
      {/* Hero / Page title */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop)`,
          }}
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="font-hero font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Projects
            </h1>
            <nav className="flex items-center justify-center gap-2 text-sm md:text-base" aria-label="Breadcrumb">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/50">/</span>
              <span className="text-portfolio-primary font-medium">Projects</span>
            </nav>
          </AnimatedSection>
        </div>
      </section>

      {/* Project showcase – uniform cards, smooth animations */}
      <section className="container mx-auto px-4 md:px-6 -mt-8 relative z-20 py-16 md:py-24">
        <AnimatedSection>
          <h2 className="font-hero font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-2">
            Transforming ideas into exceptional projects
          </h2>
          <p className="text-white/70 max-w-2xl mb-8 sm:mb-12 text-sm sm:text-base">
            A showcase of mobile apps, web applications, dashboards, and tools built with React
            Native and React.
          </p>
        </AnimatedSection>
        <ProjectsList />
      </section>
    </div>
  );
}
