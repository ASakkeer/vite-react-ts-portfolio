// Projects section listing real, completed demos and upcoming work.
import type { FC } from "react";
import { Link } from "react-router-dom";

const ProjectsList: FC = () => {
  return (
    <section
      id="projects"
      className="page-section animate-fade-up border-t border-slate-200 bg-white"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-[1200px] space-y-6 md:space-y-8">
        <header className="max-w-2xl space-y-3">
          <h2
            id="projects-heading"
            className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
          >
            Projects and demos
          </h2>
          <p className="text-sm text-slate-600 md:text-base">
            Interactive product simulations and case studies demonstrating React applications for
            B2B analytics, customer-facing storefronts, and internal operations tools. All demos use
            mocked data and simulated APIs to illustrate real-world workflows and technical decisions.
          </p>
        </header>
        <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1: Revenue Analytics Dashboard */}
          <article className="hover-elevate h-full rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <header className="mb-3 space-y-1">
              <p className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                Completed · B2B SaaS Analytics
              </p>
              <h3 className="text-base font-semibold text-slate-900">
                Revenue Analytics Dashboard
              </h3>
            </header>
            <p className="mb-4 text-sm text-slate-700">
              Simulates a B2B SaaS revenue operations dashboard solving the problem of fragmented
              subscription data across tools. Demonstrates KPI monitoring, account drill-down, and
              plan management workflows using mocked data and simulated APIs.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link
                to="/demos/revenue-analytics"
                className="pressable inline-flex items-center justify-center rounded-full bg-[#2563EB] px-4 py-1.5 font-semibold text-white shadow-sm hover:bg-[#1d4ed8]"
              >
                Live Demo
              </Link>
              <Link
                to="/projects/revenue-analytics-dashboard"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-1.5 font-semibold text-slate-800 hover:bg-slate-50"
              >
                Case Study
              </Link>
            </div>
          </article>

          {/* Project 2: E-commerce Frontend Demo */}
          <article className="hover-elevate h-full rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <header className="mb-3 space-y-1">
              <p className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                Completed · Customer-Facing Storefront
              </p>
              <h3 className="text-base font-semibold text-slate-900">
                E-commerce Frontend Demo
              </h3>
            </header>
            <p className="mb-4 text-sm text-slate-700">
              Simulates a customer-facing product catalog solving discovery and cart management
              workflows. Demonstrates client-side filtering, state management, and checkout UX
              patterns using mocked product data and session-based cart persistence.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link
                to="/demos/ecommerce"
                className="pressable inline-flex items-center justify-center rounded-full bg-[#2563EB] px-4 py-1.5 font-semibold text-white shadow-sm hover:bg-[#1d4ed8]"
              >
                Live Demo
              </Link>
              <Link
                to="/projects/ecommerce-frontend-demo"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-1.5 font-semibold text-slate-800 hover:bg-slate-50"
              >
                Case Study
              </Link>
            </div>
          </article>

          {/* Project 3: SaaS Ops Tool / Design System (preview) */}
          <article className="hover-elevate h-full rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 p-6">
            <header className="mb-3 space-y-1">
              <p className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700">
                Preview · Internal Operations Tool
              </p>
              <h3 className="text-base font-semibold text-slate-900">
                SaaS Ops Tool / Design System
              </h3>
            </header>
            <p className="mb-4 text-sm text-slate-700">
              Simulates an internal task management system solving workflow coordination across
              teams. Demonstrates CRUD patterns, status filtering, and reusable component
              architecture using mocked data and simulated API interactions.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link
                to="/demos/ops-tool"
                className="pressable inline-flex items-center justify-center rounded-full bg-[#2563EB] px-4 py-1.5 font-semibold text-white shadow-sm hover:bg-[#1d4ed8]"
              >
                Live Demo
              </Link>
              <Link
                to="/projects/design-system-react-component-library"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-1.5 font-semibold text-slate-800 hover:bg-slate-50"
              >
                Case Study
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;


