// Contact section with a business-focused project inquiry form.
import type { FC, FormEvent } from "react";

export const Contact: FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Wire this form to an email/service endpoint or client-side integration.
  };

  return (
    <section
      id="contact"
      className="page-section animate-fade-up bg-slate-50"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <header className="max-w-2xl space-y-3">
          <h2
            id="contact-heading"
            className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
          >
            Let&apos;s work together
          </h2>
          <p className="text-sm text-slate-600 md:text-base">
            Let&apos;s discuss the problem first. Scope and timelines come next.
          </p>
        </header>
        <form
          onSubmit={handleSubmit}
          className="mt-8 grid gap-6 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm md:grid-cols-2"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-slate-800">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-800">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="projectType" className="text-sm font-medium text-slate-800">
              Project type
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
            >
              <option value="">Select a project type</option>
              <option value="web-app">React web application</option>
              <option value="dashboard">Dashboard or admin panel</option>
              <option value="migration">UI to React conversion</option>
              <option value="integration">API integration</option>
              <option value="performance">Performance optimization</option>
              <option value="maintenance">Bug fixing &amp; maintenance</option>
              <option value="other">Other React project</option>
            </select>
          </div>
          <div className="md:col-span-2 space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-800">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
            />
            <p className="text-xs text-slate-500">
              Include goals, timelines, and any relevant context so we can quickly confirm fit and
              next steps.
            </p>
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="pressable inline-flex items-center justify-center rounded-full bg-[#2563EB] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1d4ed8]"
            >
              Let&apos;s Work Together
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

