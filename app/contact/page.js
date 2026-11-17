
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Send,
  MapPin,
  Clock3,
  CheckCircle2,
  BriefcaseBusiness,
  Sparkles,
  LoaderCircle,
  AlertCircle,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const CONTACT_EMAIL = "johnpaulchibueze1@gmail.com";

const contactOptions = [
  {
    icon: <Mail size={22} />,
    title: "Email",
    description: "For project enquiries and professional opportunities.",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: <FaGithub size={22} />,
    title: "GitHub",
    description: "Explore my code, repositories and development projects.",
    value: "Quavo-Huncho",
    href: "https://github.com/Quavo-Huncho",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [notice, setNotice] = useState("");
  const [noticeType, setNoticeType] = useState("");
  const [isSending, setIsSending] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setNotice("");
    setNoticeType("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setNotice("");
    setNoticeType("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          website: "",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to send your message. Please try again."
        );
      }

      setNotice(
        "Your message has been sent successfully! Thank you for reaching out. I'll get back to you soon."
      );

      setNoticeType("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form submission error:", error);

      setNotice(
        error.message ||
          "Something went wrong. Please try again later."
      );

      setNoticeType("error");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative border-b border-[var(--border)]">
        <div className="absolute inset-0 grid-pattern opacity-40" />

        <div className="container-width relative py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Let's Connect
            </span>

            <h1 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              Let's start a{" "}
              <span className="gradient-text">conversation.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Have a project idea, a collaboration opportunity or just
              want to say hello? I'd be happy to hear from you. Let's
              discuss how we can create something meaningful together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-width grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact Information */}
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Get In Touch
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
              I'd love to hear from you.
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted)]">
              Whether you're looking for a developer for your next
              project, have a business idea or want to explore a
              professional opportunity, feel free to reach out.
            </p>

            <div className="mt-9 space-y-4">
              {contactOptions.map((option) => (
                <a
                  key={option.href}
                  href={option.href}
                  target={
                    option.title === "GitHub" ? "_blank" : undefined
                  }
                  rel={
                    option.title === "GitHub"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    {option.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold">{option.title}</h3>

                    <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                      {option.description}
                    </p>

                    <p className="mt-2 break-all text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {option.value}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-[var(--muted)] transition group-hover:text-blue-600"
                  />
                </a>
              ))}
            </div>

            {/* Additional Information */}
            <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <BriefcaseBusiness size={20} />
                </div>

                <h3 className="font-bold">Open to Opportunities</h3>
              </div>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                I'm interested in meaningful projects, collaborations,
                internships and professional opportunities where I can
                contribute, learn and grow.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3 text-sm text-[var(--muted)]">
              <MapPin size={18} className="text-blue-600" />
              Based in Nigeria
            </div>

            <div className="mt-3 flex items-center gap-3 text-sm text-[var(--muted)]">
              <Clock3 size={18} className="text-blue-600" />
              Available for conversations and enquiries
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-[1.7rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xl sm:p-9">
            <div className="mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Send size={22} />
              </div>

              <h2 className="mt-5 text-2xl font-black">
                Send me a message
              </h2>

              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Fill in the details below and I'll be looking forward
                to hearing from you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Your Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-3.5 text-sm outline-none transition placeholder:text-[var(--muted)] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Email Address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-3.5 text-sm outline-none transition placeholder:text-[var(--muted)] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold"
                >
                  Subject *
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  maxLength={150}
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-3.5 text-sm outline-none transition placeholder:text-[var(--muted)] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  minLength={10}
                  maxLength={5000}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me a little about your project, idea or enquiry..."
                  className="w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-3.5 text-sm outline-none transition placeholder:text-[var(--muted)] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              {/* Hidden bot protection field */}
              <div
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
              >
                <label htmlFor="website">Leave this field empty</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value=""
                  readOnly
                />
              </div>

              {notice && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`flex items-start gap-3 rounded-xl border p-4 text-sm leading-6 ${
                    noticeType === "success"
                      ? "border-green-500/20 bg-green-500/10 text-green-700 dark:text-green-300"
                      : "border-red-500/20 bg-red-500/10 text-red-700 dark:text-red-300"
                  }`}
                >
                  {noticeType === "success" ? (
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0"
                    />
                  ) : (
                    <AlertCircle
                      size={19}
                      className="mt-0.5 shrink-0"
                    />
                  )}

                  <p>{notice}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? (
                  <>
                    Sending Message...
                    <LoaderCircle size={18} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={18} />
                  </>
                )}
              </button>

              <p className="text-center text-xs leading-6 text-[var(--muted)]">
                Your message will be sent securely. I'll get back
                to you as soon as possible.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-[var(--border)] bg-[var(--surface-secondary)] py-16">
        <div className="container-width">
          <div className="flex flex-col items-center justify-between gap-7 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:flex-row sm:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Sparkles size={23} />
              </div>

              <div>
                <h2 className="text-xl font-black">
                  Want to see what I've built?
                </h2>

                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Explore some of my recent projects and development work.
                </p>
              </div>
            </div>

            <Link
              href="/projects"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3.5 text-sm font-bold transition hover:border-blue-500 hover:text-blue-600"
            >
              Explore Projects
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
