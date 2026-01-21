// Experience section aligned to real, resume-style professional history.
import type { FC } from "react";

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
            Professional experience
          </h2>
          <p className="text-sm text-slate-600 md:text-base">
            Roles focused on building and shipping React and React Native applications across mobile
            and web, with end-to-end ownership from implementation to publishing.
          </p>
        </header>

        <div className="space-y-5">
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
              <ul className="list-disc space-y-1 pl-5">
                <li>Delivered 10+ cross-platform mobile applications using React Native.</li>
                <li>
                  Managed end-to-end app publishing to both the Apple App Store and Google Play
                  Store.
                </li>
                <li>Contributed to a 40% crash reduction through monitoring and stability fixes.</li>
                <li>Integrated native modules where needed for device- and OS-specific features.</li>
                <li>Mentored developers on React Native patterns and mobile delivery practices.</li>
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
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  Worked across web and mobile solutions, contributing to both frontend and backend
                  code.
                </li>
                <li>Integrated REST APIs to connect UI flows with backend services.</li>
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
              <ul className="list-disc space-y-1 pl-5">
                <li>Implemented user interfaces in React and Angular for web applications.</li>
                <li>Collaborated with backend teams to connect UI components to REST APIs.</li>
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

