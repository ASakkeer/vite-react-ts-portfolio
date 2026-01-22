// Experience section emphasizing ownership, impact, and senior-level decision-making.
import type { FC } from "react";

export const Experience: FC = () => {
  return (
    <section
      id="experience"
      className="page-section animate-fade-up bg-white"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-[1200px] space-y-6 md:space-y-8">
        <header className="max-w-2xl space-y-3">
          <h2
            id="experience-heading"
            className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
          >
            Professional experience
          </h2>
          <p className="text-sm text-slate-600 md:text-base">
            Building and shipping production React and React Native applications with end-to-end
            ownership—from architecture decisions to app store publishing and long-term maintenance.
          </p>
        </header>

        <div className="space-y-4 md:space-y-5">
          {/* 1) Senior Software Engineer – React Native */}
          <article className="hover-elevate rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
            <header className="mb-3 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  Senior Software Engineer – React Native
                </h3>
                <p className="text-sm text-slate-600">Atom8 IT Solutions Pvt Ltd</p>
              </div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Aug 2020 – Sep 2025
              </p>
            </header>
            <div className="space-y-3 text-sm text-slate-700">
              <p className="text-xs font-medium text-slate-600">
                Owned end-to-end delivery of 10+ cross-platform mobile applications, from initial
                architecture through app store publishing and ongoing maintenance.
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  Led technical decisions for React Native architecture, state management, and
                  native module integration across consumer and B2B mobile products.
                </li>
                <li>
                  Reduced app crash rate by 40% through systematic error monitoring, stability
                  improvements, and performance optimization—enabling more reliable user experiences.
                </li>
                <li>
                  Managed complete app store publishing workflow (Apple App Store, Google Play
                  Store), including release coordination, metadata, and compliance requirements.
                </li>
                <li>
                  Mentored team members on React Native best practices, code review standards, and
                  mobile delivery workflows, improving team velocity and code quality.
                </li>
              </ul>
            </div>
          </article>

          {/* 2) Full Stack Developer */}
          <article className="hover-elevate rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
            <header className="mb-3 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <div>
                <h3 className="text-base font-semibold text-slate-900">Full Stack Developer</h3>
                <p className="text-sm text-slate-600">Hartwin Tech Pvt Ltd</p>
              </div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Mar 2020 – Jun 2020
              </p>
            </header>
            <div className="space-y-3 text-sm text-slate-700">
              <p className="text-xs font-medium text-slate-600">
                Contributed to web and mobile product development, working across frontend and
                backend to deliver integrated user experiences.
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  Built responsive web interfaces and mobile screens, collaborating with product and
                  design teams to translate requirements into working features.
                </li>
                <li>
                  Integrated frontend applications with REST APIs, ensuring reliable data flow and
                  error handling across user-facing workflows.
                </li>
              </ul>
            </div>
          </article>

          {/* 3) Frontend Developer */}
          <article className="hover-elevate rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
            <header className="mb-3 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <div>
                <h3 className="text-base font-semibold text-slate-900">Frontend Developer</h3>
                <p className="text-sm text-slate-600">Brigita Solutions Pvt Ltd</p>
              </div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Sep 2017 – Feb 2020
              </p>
            </header>
            <div className="space-y-3 text-sm text-slate-700">
              <p className="text-xs font-medium text-slate-600">
                Built user interfaces for web applications using React and Angular, focusing on
                component-driven architecture and maintainable code patterns.
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  Implemented reusable component libraries and UI patterns that improved development
                  speed and consistency across multiple product features.
                </li>
                <li>
                  Collaborated with backend engineering teams to design API contracts and data
                  structures, ensuring smooth integration between frontend and backend systems.
                </li>
              </ul>
            </div>
          </article>
        </div>

        {/* Skills badges */}
        <section className="pt-2 text-sm text-slate-700">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Core skills
          </h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "React",
              "React Native",
              "TypeScript",
              "JavaScript",
              "REST APIs",
              "React Query",
              "State Management",
              "App Store / Play Store publishing",
              "Component-driven UI",
            ].map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Experience;

