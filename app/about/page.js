
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  GraduationCap,
  Lightbulb,
  Monitor,
  Database,
  Wrench,
  BriefcaseBusiness,
  Zap,
  Target,
} from "lucide-react";

const skills = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, accessible and interactive user interfaces.",
    icon: Monitor,
    technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    description:
      "Creating application logic, authentication systems and database integrations.",
    icon: Database,
    technologies: ["Supabase", "PostgreSQL", "REST APIs", "Authentication"],
  },
  {
    title: "Tools & Workflow",
    description:
      "Using modern development tools to build, manage and deploy projects.",
    icon: Wrench,
    technologies: ["Git", "GitHub", "VS Code", "Vercel", "npm"],
  },
];

const values = [
  {
    number: "01",
    title: "Continuous Learning",
    description:
      "I believe in consistently improving my skills, exploring new technologies and staying curious.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Problem Solving",
    description:
      "I enjoy breaking complex problems into manageable steps and building practical solutions.",
    icon: Target,
  },
  {
    number: "03",
    title: "Quality & Detail",
    description:
      "I pay attention to performance, responsiveness, usability and the details that make products better.",
    icon: Zap,
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Page Hero */}
      <section className="relative border-b border-[var(--border)]">
        <div className="absolute inset-0 grid-pattern opacity-40" />

        <div className="container-width relative py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Get to know me
            </span>

            <h1 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              A little about{" "}
              <span className="gradient-text">who I am.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
              I'm a developer with an engineering background and a passion
              for building modern digital experiences. I enjoy turning ideas
              into functional, user-friendly products through technology,
              creativity and problem-solving.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Introduction */}
      <section className="section-padding">
        <div className="container-width grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              My Story
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
              Engineering mindset.{" "}
              <span className="gradient-text">Developer creativity.</span>
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-[var(--muted)]">
              <p>
                My journey started with a background in Electrical
                Engineering, where I developed a strong interest in
                technology, logical thinking and solving real-world
                problems.
              </p>

              <p>
                Over time, that interest grew into a passion for software
                development. I began exploring web technologies and
                discovered how much I enjoyed creating websites and
                applications that people can actually use.
              </p>

              <p>
                Today, I focus on frontend and full-stack development,
                working with JavaScript, React, Next.js, Tailwind CSS and
                Supabase to build responsive websites and practical
                applications.
              </p>

              <p>
                I'm continuously learning, improving my craft and looking
                forward to contributing to meaningful projects alongside
                other creative and innovative people.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Explore My Projects
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3.5 text-sm font-bold transition hover:border-blue-500 hover:text-blue-600"
              >
                Contact Me
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          {/* Profile Card */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-xl md:p-9">
              <div className="flex items-center gap-3 border-b border-[var(--border)] pb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl font-black text-white">
                  JO.
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                    Johnpaul Ozioko
                  </h3>
                  <p className="text-sm text-[var(--muted)]">
                    Developer & Engineer
                  </p>
                </div>
              </div>

              <div className="space-y-6 py-7">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
                    Background
                  </p>
                  <p className="mt-2 font-semibold">
                    Electrical Engineering
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
                    Education
                  </p>
                  <p className="mt-2 font-semibold">
                    University of Nigeria, Nsukka
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Second Class Honours (Upper Division)
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
                    Development Focus
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Frontend", "Full-Stack", "Web Applications"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[var(--surface-secondary)] p-5">
                <div className="flex items-center gap-3">
                  <Code2 className="text-blue-600" size={23} />
                  <p className="text-sm font-bold">
                    Building. Learning. Improving.
                  </p>
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Focused on creating digital solutions that combine
                  functionality, performance and great user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding border-y border-[var(--border)] bg-[var(--surface-secondary)]">
        <div className="container-width">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Education
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
              My academic foundation.
            </h2>

            <p className="mt-4 leading-7 text-[var(--muted)]">
              My engineering education helped shape the analytical,
              technical and problem-solving approach I bring to software
              development.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 md:p-9">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <GraduationCap size={29} />
              </div>

              <div className="flex-1">
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Academic Qualification
                </span>

                <h3 className="mt-2 text-xl font-bold md:text-2xl">
                  Bachelor of Engineering (B.Eng.)
                </h3>

                <p className="mt-2 font-medium text-[var(--muted)]">
                  Electrical Engineering
                </p>

                <p className="mt-1 text-sm text-[var(--muted)]">
                  University of Nigeria, Nsukka
                </p>

                <div className="mt-5 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-600 dark:text-blue-400">
                  Second Class Honours (Upper Division)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="section-padding">
        <div className="container-width">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              What I Work With
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
              My technical skill set.
            </h2>

            <p className="mt-4 leading-7 text-[var(--muted)]">
              The technologies and tools I use to turn ideas into
              functional digital products.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.title}
                  className="group rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white dark:text-blue-400">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {skill.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {skill.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {skill.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-[var(--border)] bg-[var(--surface-secondary)] px-3 py-2 text-xs font-medium"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Personal Values */}
      <section className="section-padding border-y border-[var(--border)] bg-[var(--surface-secondary)]">
        <div className="container-width">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              My Approach
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
              What drives my work.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.number}
                  className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-blue-600 dark:text-blue-400">
                      {value.number}
                    </span>
                    <Icon
                      size={25}
                      className="text-[var(--muted)]"
                    />
                  </div>

                  <h3 className="mt-7 text-xl font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding">
        <div className="container-width">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 to-indigo-800 px-7 py-14 text-center text-white md:px-14 md:py-20">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

            <div className="relative mx-auto max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
                Let's Connect
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
                Have an idea worth building?
              </h2>

              <p className="mt-5 leading-8 text-blue-100">
                I'm always interested in meaningful projects,
                collaborations and opportunities to create something
                impactful.
              </p>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
              >
                Get in Touch
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
