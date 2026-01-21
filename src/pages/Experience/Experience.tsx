// Experience section summarizing roles with measurable, technology-focused achievements.
import type { FC } from "react";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
  technologies: string[];
}

const experience: ExperienceItem[] = [
  {
    company: "SaaS Analytics Platform",
    role: "Senior Frontend React Developer",
    duration: "2021 – Present",
    achievements: [
      "Led React migration of core analytics workflows, reducing page load time by ~40% on high-traffic dashboards.",
      "Delivered a unified reporting UI used in weekly leadership reviews for subscription, churn, and MRR trends.",
      "Introduced a shared analytics component library that standardized dashboards and forms across multiple product areas.",
    ],
    technologies: ["React", "TypeScript", "React Query", "Recharts", "Tailwind CSS"],
  },
  {
    company: "B2B Productivity Suite",
    role: "Frontend Engineer",
    duration: "2018 – 2021",
    achievements: [
      "Implemented permission-aware admin panels that reduced configuration errors and related support tickets for misconfigured accounts.",
      "Optimized data-heavy views with virtualization and pagination to keep critical workflows responsive under peak usage.",
      "Added front-end CI checks and linting rules that caught common regressions before they reached production.",
    ],
    technologies: ["React", "JavaScript", "Redux", "REST APIs", "Jest"],
  },
  {
    company: "Digital Services Agency",
    role: "React Developer",
    duration: "2016 – 2018",
    achievements: [
      "Delivered multiple React-based marketing and product sites to production under tight launch timelines.",
      "Converted static design handoffs into reusable React components to speed up subsequent page builds.",
      "Set up basic performance and accessibility checks so launches met client requirements without last-minute rework.",
    ],
    technologies: ["React", "Next.js", "Sass", "Webpack"],
  },
];

export const Experience: FC = () => {
  return (
    <section
      id="experience"
      className="page-section animate-fade-up bg-white"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-[1200px] space-y-8">
        <header className="max-w-2xl space-y-3">
          <h2
            id="experience-heading"
            className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
          >
            Experience and impact
          </h2>
          <p className="text-sm text-slate-600 md:text-base">
            Roles focused on shipping React-based interfaces, improving performance, and supporting
            product and operations teams.
          </p>
        </header>
        <div className="space-y-5">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}-${item.duration}`}
              className="hover-elevate rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm"
            >
              <header className="mb-3 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{item.company}</h3>
                  <p className="text-sm text-slate-600">{item.role}</p>
                </div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  {item.duration}
                </p>
              </header>
              <div className="space-y-3 text-sm text-slate-700">
                <section>
                  <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Achievements
                  </h4>
                  <ul className="list-disc space-y-1 pl-5">
                    {item.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Technologies
                  </h4>
                  <p>{item.technologies.join(" · ")}</p>
                </section>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

