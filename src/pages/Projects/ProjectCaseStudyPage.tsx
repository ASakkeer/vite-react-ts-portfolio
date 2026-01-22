// Route-level case study page for a single project identified by id, with back navigation.
import type { FC } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import BackButton from "../../components/BackButton";
import ProjectCaseStudy from "./ProjectCaseStudy";
import { findProjectBySlug } from "./projects.data";

export const ProjectCaseStudyPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? findProjectBySlug(id) : undefined;

  return (
    <Layout>
      <div className="mb-4">
        <BackButton fallbackPath="/projects" label="Back to projects" />
      </div>
      <section className="page-section bg-white" aria-labelledby="project-case-study-heading">
        <div className="mx-auto max-w-[1200px] space-y-6">
          {project ? (
            <>
              <header className="space-y-2">
                <h1
                  id="project-case-study-heading"
                  className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
                >
                  {project.name}
                </h1>
                <p className="text-sm text-slate-600 md:text-base">{project.role}</p>
              </header>
              <ProjectCaseStudy {...project} />
            </>
          ) : (
            <p className="text-sm text-slate-600">This case study could not be found.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProjectCaseStudyPage;

