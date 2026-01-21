// Projects section presenting business-focused case studies instead of toy apps.
import type { FC } from "react";
import { Link } from "react-router-dom";
import { projects } from "./projects.data";

export const ProjectsList: FC = () => {
  return (
    <section
      id="projects"
      className="page-section animate-fade-up bg-slate-50"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-[1200px] space-y-8">
        <header className="max-w-2xl space-y-3">
          <h2
            id="projects-heading"
            className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl"
          >
            Selected React projects as business case studies
          </h2>
          <p className="text-sm text-slate-600 md:text-base">
            Each project is framed around the problem, solution, and measurable impact, rather than
            toy apps or isolated UI experiments.
          </p>
          <p className="text-xs text-slate-500">
            Representative case studies based on real enterprise work. Details anonymized for
            confidentiality.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.slug} to={`/projects/${project.slug}`} className="block">
              <article className="hover-elevate h-full rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
                <header className="mb-3 flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-slate-900">{project.name}</h3>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    {project.role}
                  </p>
                </header>
                <p className="mb-3 text-sm text-slate-700">{project.context}</p>
                <section className="mb-4">
                  <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Outcomes
                  </h4>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
                    <li>{project.outcome}</li>
                  </ul>
                </section>
                <p className="text-xs font-semibold text-[#2563EB]">View case study</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;


