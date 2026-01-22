// Case study presenting a decision-driven narrative demonstrating senior-level problem-solving and system design.
import type { FC } from "react";

export interface ProjectCaseStudyProps {
  name: string;
  role: string;
  problemContext: string;
  constraints: string[];
  solutionApproach: string;
  tradeoffs: string[];
  outcome: string;
  learnings?: string;
  techStack: string[];
  demoAlignment: string;
}

export const ProjectCaseStudy: FC<ProjectCaseStudyProps> = ({
  name,
  role,
  problemContext,
  constraints,
  solutionApproach,
  tradeoffs,
  outcome,
  learnings,
  techStack,
  demoAlignment,
}) => {
  return (
    <article className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
        <div className="space-y-5 text-sm text-slate-700">
          <section>
            <h3 className="mb-2 text-sm font-semibold text-slate-900">Problem Context</h3>
            <p>{problemContext}</p>
          </section>

          <section>
            <h3 className="mb-2 text-sm font-semibold text-slate-900">Constraints & Assumptions</h3>
            <ul className="list-disc space-y-1 pl-5">
              {constraints.map((constraint, index) => (
                <li key={index}>{constraint}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="mb-2 text-sm font-semibold text-slate-900">Solution Approach</h3>
            <p>{solutionApproach}</p>
          </section>

          <section>
            <h3 className="mb-2 text-sm font-semibold text-slate-900">Key Tradeoffs</h3>
            <ul className="list-disc space-y-1 pl-5">
              {tradeoffs.map((tradeoff, index) => (
                <li key={index}>{tradeoff}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="mb-2 text-sm font-semibold text-slate-900">Outcome & Learnings</h3>
            <p className="mb-2">{outcome}</p>
            {learnings && <p className="text-xs text-slate-600">{learnings}</p>}
          </section>

          <section>
            <h3 className="mb-2 text-sm font-semibold text-slate-900">Tech Stack</h3>
            <p>{techStack.join(" · ")}</p>
          </section>

          <section className="rounded-lg border border-slate-200 bg-slate-50 p-3">
            <h3 className="mb-1 text-xs font-semibold text-slate-900">Demo Alignment</h3>
            <p className="text-xs text-slate-600">{demoAlignment}</p>
          </section>
        </div>
      </div>
      <p className="text-[10px] text-slate-400">
        Representative case study based on real enterprise work. Details anonymized for
        confidentiality.
      </p>
    </article>
  );
};

export default ProjectCaseStudy;

