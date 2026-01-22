// Hero section introducing the frontend React focus and primary route-based calls-to-action.
import type { FC } from "react";
import { Link } from "react-router-dom";

export const Hero: FC = () => {
  return (
    <section
      id="home"
      className="page-section animate-fade-up bg-slate-50"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <p className="text-base font-medium uppercase tracking-wide text-slate-600 md:text-lg">
            8+ Years Building Scalable React Applications
          </p>
          <h1
            id="hero-heading"
            className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl"
          >
            Production-Ready React Applications Built for Real Business Use
          </h1>
          <p className="max-w-xl text-base text-slate-600 md:text-lg">
            Delivering measurable outcomes through faster workflows, clearer dashboards, and
            user-focused interfaces.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="pressable inline-flex items-center justify-center rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1d4ed8]"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="pressable inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Hire Me
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <div className="hover-elevate relative mx-auto max-w-md rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="h-3 w-3 rounded-full bg-slate-200" />
              <div className="h-3 w-3 rounded-full bg-slate-200" />
              <div className="h-3 w-3 rounded-full bg-slate-200" />
            </div>
            <div className="space-y-3">
              <div className="h-3 w-3/4 rounded-full bg-slate-100" />
              <div className="h-3 w-1/2 rounded-full bg-slate-100" />
              <div className="h-3 w-5/6 rounded-full bg-slate-100" />
              <div className="h-3 w-2/3 rounded-full bg-slate-100" />
            </div>
            <p className="mt-6 text-xs text-slate-400">
              Abstract UI mockup representing product-focused frontend work. No personal photography.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

