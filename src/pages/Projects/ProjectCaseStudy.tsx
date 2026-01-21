// Case study card presenting a single project in a business-focused structure.
import type { FC } from "react";

export interface ProjectCaseStudyProps {
  name: string;
  role: string;
  context: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  outcome: string;
}

export const ProjectCaseStudy: FC<ProjectCaseStudyProps> = ({
  name,
  role,
  context,
  problem,
  solution,
  features,
  techStack,
  outcome,
}) => {
  return (
    <article className="hover-elevate rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
      <header className="mb-4 flex flex-col gap-1">
        <h3 className="text-base font-semibold text-slate-900">{name}</h3>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{role}</p>
      </header>
      <div className="space-y-3 text-sm text-slate-700">
        <section>
          <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Context
          </h4>
          <p>{context}</p>
        </section>
        <section>
          <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Problem
          </h4>
          <p>{problem}</p>
        </section>
        <section>
          <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Solution
          </h4>
          <p>{solution}</p>
        </section>
        <section>
          <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Key contributions
          </h4>
          <ul className="list-disc space-y-1 pl-5">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
        <section>
          <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Outcome
          </h4>
          <p>{outcome}</p>
        </section>
        <section>
          <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Tech Stack
          </h4>
          <p>{techStack.join(" · ")}</p>
        </section>
        <p className="pt-1 text-[10px] text-slate-400">
          Representative case study based on real enterprise work.
        </p>
      </div>
    </article>
  );
};

export default ProjectCaseStudy;

