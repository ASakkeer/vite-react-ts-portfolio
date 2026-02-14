/**
 * Contact page: hero, contact info cards, and form.
 * EmailJS integration with loading, success/error notifications, and form reset.
 */

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { contactDetails } from "@/data/contact.data";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().optional(),
  email: z.string().email("Valid email required"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

/** Build consolidated message and map to EmailJS template variables */
const toEmailJSParams = (data: FormData) => {
  const lines: string[] = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    data.subject ? `Subject: ${data.subject}` : null,
    "",
    "Message:",
    data.message,
  ].filter(Boolean) as string[];

  const messageBody = lines.join("\n");

  return {
    from_name: data.name,
    from_email: data.email,
    subject: data.subject || "Contact form message",
    message: messageBody,
  };
};

const contactCards = [
  {
    icon: MapPin,
    title: "Address",
    content: contactDetails.address ?? contactDetails.location ?? "—",
    href: null,
  },
  {
    icon: Mail,
    title: "E-Mail",
    content: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
  },
  {
    icon: Phone,
    title: "Call Me",
    content: contactDetails.phone,
    href: `tel:${contactDetails.phone.replace(/\s/g, "")}`,
  },
];

export function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email service not configured. Add VITE_EMAILJS_* env variables.");
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, toEmailJSParams(data), publicKey);
      toast.success("Message sent! I'll get back to you soon.", {
        duration: 5000,
        description: "Thank you for reaching out.",
      });
      reset();
    } catch (e) {
      console.error(e);
      toast.error("Failed to send message. Please try again or email directly.", {
        duration: 6000,
        description: "You can reach me at " + contactDetails.email,
      });
    }
  };

  return (
    <div>
      {/* Hero / Page title */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop)`,
          }}
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="font-hero font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Contact
            </h1>
            <nav className="flex items-center justify-center gap-2 text-sm md:text-base" aria-label="Breadcrumb">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/50">/</span>
              <span className="text-portfolio-primary font-medium">Contact</span>
            </nav>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="container mx-auto px-4 md:px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {contactCards.map((card, i) => {
            const Icon = card.icon;
            return (
            <AnimatedSection key={card.title} delay={i * 0.1} direction="up">
              <div className="rounded-xl bg-white/5 border border-white/10 p-6 sm:p-8 md:p-10 text-center hover:border-portfolio-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-full bg-portfolio-primary/20 flex items-center justify-center mx-auto mb-4 text-portfolio-primary">
                  <Icon size={28} />
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">{card.title}</h3>
                {card.href ? (
                  <a
                    href={card.href}
                    className="text-white/70 hover:text-portfolio-primary transition-colors text-sm md:text-base"
                  >
                    {card.content}
                  </a>
                ) : (
                  <p className="text-white/70 text-sm md:text-base">{card.content}</p>
                )}
              </div>
            </AnimatedSection>
          );
          })}
        </div>
      </section>

      {/* Form section: two columns */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start">
            {/* Left: Get in touch text */}
            <div className="lg:col-span-5">
              <AnimatedSection direction="up">
                <p className="text-portfolio-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                  Get in Touch
                </p>
                <h2 className="font-hero font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4 sm:mb-6">
                  Elevate your brand with me
                </h2>
                <p className="text-white/70 leading-relaxed mb-8 max-w-md">
                  Ready to build React Native mobile apps or React web applications? Let&apos;s
                  discuss how we can deliver measurable impact for your product—from cross-platform
                  apps to dashboards and internal tools.
                </p>
                <div
                  className="rounded-xl overflow-hidden opacity-60 max-w-sm w-full mx-auto"
                  style={{ aspectRatio: "4/3" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop"
                    alt="Collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7">
              <AnimatedSection delay={0.1} direction="up">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl bg-white/5 border border-white/10 space-y-5 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                        Your Name
                      </label>
                      <input
                        id="name"
                        {...register("name")}
                        className="w-full min-h-[44px] px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-portfolio-primary/50 text-base"
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-portfolio-primary">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        className="w-full min-h-[44px] px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-portfolio-primary/50 text-base"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="w-full min-h-[44px] px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-portfolio-primary/50 text-base"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-portfolio-primary">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                        Subject
                      </label>
                      <input
                        id="subject"
                        {...register("subject")}
                        className="w-full min-h-[44px] px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-portfolio-primary/50 text-base"
                        placeholder="Project inquiry"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      {...register("message")}
                      rows={5}
                      className="w-full min-h-[120px] px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-portfolio-primary/50 resize-none text-base"
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-portfolio-primary">{errors.message.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[48px] py-4 rounded-lg bg-portfolio-primary text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" aria-hidden />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight size={20} aria-hidden />
                      </>
                    )}
                  </button>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
