// Contact section with EmailJS integration for professional project inquiries.
import type { FC, FormEvent } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_b8zlv6l";
const EMAILJS_TEMPLATE_ID = "template_45yogmq";
const EMAILJS_PUBLIC_KEY = "O2cXyPaOgsWpx1QAW";

interface FormData {
  fullName: string;
  email: string;
  projectType: string;
  message: string;
}

export const Contact: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          subject: `Project Inquiry: ${formData.projectType}`,
          message: `Project Type: ${formData.projectType}\n\n${formData.message}`,
        },
        EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="page-section animate-fade-up bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <header className="max-w-2xl space-y-3">
          <h2
            id="contact-heading"
            className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
          >
            Let&apos;s Talk
          </h2>
          <p className="text-sm text-slate-600 md:text-base">
            Send a message below and I&apos;ll review your inquiry and get back to you as soon as
            possible.
          </p>
        </header>
        <form
          onSubmit={handleSubmit}
          className="mt-8 grid gap-6 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm md:grid-cols-2"
        >
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-sm font-medium text-slate-800">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-800">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="projectType" className="text-sm font-medium text-slate-800">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
            >
              <option value="">Select a project type</option>
              <option value="Web App">Web App</option>
              <option value="Mobile App">Mobile App</option>
              <option value="Internal Tool / Dashboard">Internal Tool / Dashboard</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="md:col-span-2 space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-800">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
            />
          </div>
          {status === "success" && (
            <div className="md:col-span-2 rounded-lg bg-emerald-50 p-4 text-sm text-emerald-700">
              <p className="font-medium">Message sent successfully.</p>
              <p className="mt-1 text-emerald-600">
                I&apos;ll review your message and get back to you as soon as possible.
              </p>
            </div>
          )}
          {status === "error" && (
            <div className="md:col-span-2 rounded-lg bg-red-50 p-4 text-sm text-red-700">
              <p className="font-medium">Unable to send message.</p>
              <p className="mt-1 text-red-600">Please try again or reach out directly via email.</p>
            </div>
          )}
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="pressable inline-flex items-center justify-center rounded-full bg-[#2563EB] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1d4ed8] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

