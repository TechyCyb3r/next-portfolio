"use client";

import type { FormEvent } from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiGithub, FiInstagram, FiLinkedin, FiMail, FiPhone, FiSend, FiTwitter } from "react-icons/fi";
import SectionHeader from "./SectionHeader";

type StatusType = "idle" | "loading" | "success" | "error";

type ContactStatus = {
  type: StatusType;
  message: string;
};

type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: typeof FiMail;
};

const contactLinks: ContactLink[] = [
  { label: "Email", value: "himanshuagarwalskr@gmail.com", href: "mailto:himanshuagarwalskr@gmail.com", icon: FiMail },
  { label: "Phone", value: "+91 84410-97957", href: "tel:+918441097957", icon: FiPhone },
  { label: "GitHub", value: "TechyCyb3r", href: "https://github.com/TechyCyb3r", icon: FiGithub },
  { label: "LinkedIn", value: "himanshuagarwal04", href: "https://www.linkedin.com/in/himanshuagarwal04/", icon: FiLinkedin },
  { label: "Instagram", value: "agarwalji_957", href: "https://www.instagram.com/agarwalji_957/", icon: FiInstagram },
  { label: "Twitter", value: "Himansh3386402", href: "https://x.com/Himansh33864021", icon: FiTwitter },
];

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<ContactStatus>({ type: "idle", message: "" });
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "EmailJS env missing. Add NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.",
      });
      return;
    }

    if (!formRef.current) {
      setStatus({ type: "error", message: "Form is not ready yet. Please try again." });
      return;
    }

    try {
      setStatus({ type: "loading", message: "Sending message..." });
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });

      formRef.current.reset();
      setStatus({ type: "success", message: "Message sent successfully. I’ll get back to you soon." });
    } catch {
      setStatus({
        type: "error",
        message: "Message failed to send. Please try again or use the email address above.",
      });
    }
  };

  return (
    <section id="contact" className="section-spacing section-shell">
      <div className="page-container">
        <SectionHeader
          kicker="Contact"
          title="Contact Himanshu Agarwal | Full Stack Developer"
          subtitle="Open for freelance web projects, React development, Next.js development, backend APIs, and full stack software engineering opportunities."
        />

        <div className="section-body mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <div className="rounded-3xl border border-ocean-primary/20 bg-ocean-primary/10 p-4 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-ocean-primary sm:text-sm sm:tracking-[0.2em]">Availability</p>
              <h3 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">Available for React, Next.js, and full stack web work.</h3>
              <p className="mt-4 text-sm leading-7 text-ocean-muted">
                Share your idea, project brief, or role details. I can help with React UI, Next.js apps, frontend polishing, backend APIs,
                portfolio builds, and full stack project delivery.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {contactLinks.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="min-w-0 rounded-[1.25rem] border border-white/10 bg-white/4 p-4 transition hover:-translate-y-1 hover:border-ocean-primary/35 hover:bg-white/6 sm:p-5"
                >
                  <Icon className="text-ocean-primary" size={22} />
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-ocean-muted sm:tracking-[0.2em]">{label}</p>
                  <p className="mt-1 min-w-0 break-all text-sm font-bold text-white">{value}</p>
                </a>
              ))}
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="min-w-0 rounded-3xl border border-white/10 bg-white/4 p-4 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-ocean-primary sm:text-sm sm:tracking-[0.2em]">Send a message</p>
                <h3 className="mt-2 text-xl font-black wrap-break-word text-white sm:text-2xl">Let&apos;s talk about your React, Next.js, or full stack project</h3>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-ocean-muted sm:tracking-[0.18em]">Your Name</span>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Enter your name"
                    className="rounded-xl border border-white/10 bg-ocean-bg/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-ocean-muted focus:border-ocean-primary/50"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-ocean-muted sm:tracking-[0.18em]">Email</span>
                  <input
                    type="email"
                    name="reply_to"
                    required
                    placeholder="Enter your email"
                    className="rounded-xl border border-white/10 bg-ocean-bg/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-ocean-muted focus:border-ocean-primary/50"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-ocean-muted sm:tracking-[0.18em]">Subject</span>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="What do you need help with?"
                  className="rounded-xl border border-white/10 bg-ocean-bg/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-ocean-muted focus:border-ocean-primary/50"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-ocean-muted sm:tracking-[0.18em]">Message</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Describe your project, timeline, and goals..."
                  className="rounded-xl border border-white/10 bg-ocean-bg/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-ocean-muted focus:border-ocean-primary/50"
                />
              </label>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className={`text-sm ${status.type === "success" ? "text-emerald-400" : status.type === "error" ? "text-rose-400" : "text-ocean-muted"}`}>
                {status.message || "I usually respond within 24 hours."}
              </p>

              <button
                type="submit"
                disabled={status.type === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ocean-primary px-5 py-3 text-sm font-black text-ocean-bg shadow-[0_0_24px_rgba(124,102,227,0.24)] transition hover:-translate-y-1 hover:bg-white disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                <FiSend size={14} />
                {status.type === "loading" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;