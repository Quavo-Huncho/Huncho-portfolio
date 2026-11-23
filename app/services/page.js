import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  MonitorSmartphone,
  Database,
  Globe,
  Gauge,
  LayoutDashboard,
  Smartphone,
  Layers3,
  CheckCircle2,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Modern, professional and responsive websites designed to help individuals and businesses establish a strong online presence.",
    icon: Globe,
    features: [
      "Business and corporate websites",
      "Personal and portfolio websites",
      "Landing pages",
      "Responsive layouts",
    ],
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "Building attractive and interactive user interfaces with a strong focus on usability, accessibility and responsive design.",
    icon: MonitorSmartphone,
    features: [
      "React and Next.js development",
      "Reusable UI components",
      "Responsive web interfaces",
      "Interactive user experiences",
    ],
  },
  {
    number: "03",
    title: "Full-Stack Development",
    description:
      "Developing complete web applications by combining frontend interfaces with backend services, databases and application logic.",
    icon: Layers3,
    features: [
      "Full-stack web applications",
      "Authentication systems",
      "Database integration",
      "Application functionality",
    ],
  },
  {
    number: "04",
    title: "Backend & API Integration",
    description:
      "Connecting applications to databases and external services to make them dynamic, data-driven and functional.",
    icon: Database,
    features: [
      "Supabase integration",
      "Database design and queries",
      "Third-party API integration",
      "User authentication",
    ],
  },
  {
    number: "05",
    title: "Admin Dashboards",
    description:
      "Creating practical management dashboards that help businesses organize information and manage important operations.",
    icon: LayoutDashboard,
    features: [
      "Admin interfaces",
      "Data management",
      "CRUD functionality",
      "Dashboard layouts",
    ],
  },
  {
    number: "06",
    title: "Website Maintenance & Optimization",
    description:
      "Improving existing websites through bug fixes, performance enhancements, responsive adjustments and ongoing updates.",
    icon: Gauge,
    features: [
      "Bug fixing and troubleshooting",
      "Performance improvements",
      "Responsive design adjustments",
      "Content and feature updates",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We discuss your idea, understand your requirements and identify the goals your website or application should achieve.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "I organize the project structure and plan the user interface, features and technologies needed for the solution.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Development",
    description:
      "I turn the plan into a working product, focusing on functionality, responsiveness and a clean user experience.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Testing & Delivery",
    description:
      "I test the application, address issues and prepare the finished project for deployment.",
    icon: Rocket,
  },
];

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Vercel",
  "REST APIs",
];

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative border-b border-[var(--border)]">
        <div className="absolute inset-0 grid-pattern opacity-40" />

        <div className="container-width relative py-24 md:py-32">
          <Stagger className="max-w-3xl" gap={0.12}>
            <StaggerItem>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                What I Can Do
              </span>
            </StaggerItem>

            <StaggerItem>
              <h1 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
                Building digital solutions that{" "}
                <span className="gradient-text">make a difference.</span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
                I help turn ideas into functional digital experiences through
                modern web technologies, thoughtful development and a
                problem-solving mindset.
              </p>
            </StaggerItem>

            <StaggerItem className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Discuss a Project
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3.5 text-sm font-bold transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600"
              >
                View My Work
                <ArrowUpRight size={17} />
              </Link>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-width">
          <Reveal className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              My Services
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
              How I can help you.
            </h2>

            <p className="mt-4 leading-7 text-[var(--muted)]">
              From building a website from scratch to connecting applications
              with backend services, I focus on creating solutions that are
              useful, reliable and easy to use.
            </p>
          </Reveal>

          <Stagger
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            gap={0.1}
          >
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <StaggerItem key={service.number} className="h-full">
                  <article className="group h-full rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white dark:text-blue-400 dark:group-hover:text-white">
                        <Icon size={27} />
                      </div>

                      <span className="text-sm font-black tracking-widest text-[var(--muted)] transition group-hover:text-blue-600">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-bold">{service.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {service.description}
                    </p>

                    <div className="my-6 h-px bg-[var(--border)]" />

                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-[var(--muted)]"
                        >
                          <CheckCircle2
                            size={17}
                            className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-400"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding border-y border-[var(--border)] bg-[var(--surface-secondary)]">
        <div className="container-width grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              My Technology Stack
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
              The tools behind my work.
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted)]">
              I work with modern web development technologies to build
              responsive interfaces, develop application functionality and
              connect digital products to backend services.
            </p>

            <Link
              href="/projects"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-all hover:gap-3 dark:text-blue-400"
            >
              See these technologies in action
              <ArrowRight size={17} />
            </Link>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 md:p-9">
              <div className="flex items-center gap-3">
                <Code2 className="text-blue-600 dark:text-blue-400" size={25} />
                <h3 className="text-lg font-bold">Technologies & Tools</h3>
              </div>

              <Stagger className="mt-7 flex flex-wrap gap-3" gap={0.04} delay={0.2}>
                {technologies.map((technology) => (
                  <StaggerItem key={technology}>
                    <span className="block rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-3 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                      {technology}
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Work Process */}
      <section className="section-padding">
        <div className="container-width">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              My Workflow
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
              From idea to delivery.
            </h2>

            <p className="mt-4 leading-7 text-[var(--muted)]">
              A straightforward process that keeps projects organized and
              focused on their intended goals.
            </p>
          </Reveal>

          <Stagger
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            gap={0.14}
          >
            {process.map((step) => {
              const Icon = step.icon;

              return (
                <StaggerItem key={step.number} className="h-full">
                  <div className="relative h-full rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black text-blue-600 dark:text-blue-400">
                        STEP {step.number}
                      </span>

                      <Icon size={23} className="text-[var(--muted)]" />
                    </div>

                    <h3 className="mt-7 text-xl font-bold">{step.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-[var(--border)] bg-[var(--surface-secondary)]">
        <div className="container-width">
          <Reveal y={32}>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 to-indigo-900 px-7 py-14 text-center text-white md:px-14 md:py-20">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

              <div className="relative mx-auto max-w-2xl">
                <Smartphone size={35} className="mx-auto text-blue-200" />

                <h2 className="mt-6 text-3xl font-black tracking-tight md:text-5xl">
                  Have a project in mind?
                </h2>

                <p className="mt-5 leading-8 text-blue-100">
                  Let&apos;s discuss your ideas and explore how I can help turn
                  them into a functional digital product.
                </p>

                <Link
                  href="/contact"
                  className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
                >
                  Let&apos;s Talk
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
