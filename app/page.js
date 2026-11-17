
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Monitor,
  Smartphone,
  Zap,
  Globe,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Hero from "@/components/home/Hero";

const skills = [
  { name: "HTML & CSS", icon: Globe },
  { name: "JavaScript", icon: Code2 },
  { name: "React.js", icon: Code2 },
  { name: "Next.js", icon: Monitor },
  { name: "Tailwind CSS", icon: Smartphone },
  { name: "Supabase", icon: Database },
  { name: "Git & GitHub", icon: FaGithub },
  { name: "Responsive Design", icon: Zap },
];




const projects = [
  {
    number: "01",
    title: "Huncho Electrical",
    category: "Business Website",
    description:
      "A professional electrical materials sales, installation and maintenance platform featuring an administrative dashboard, materials management, project management and customer enquiries.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Supabase"],
    image: "/huncho-electrical.jpg",
    liveUrl: "https://huncho-electrical.vercel.app/",
    githubUrl: "https://github.com/Quavo-Huncho/Huncho-electrical",
    visual: "from-blue-600/20 via-indigo-500/10 to-transparent",
  },
  {
    number: "02",
    title: "FX Checker",
    category: "Finance & Currency",
    description:
      "A modern currency exchange application featuring currency conversion, exchange-rate comparisons, historical rate tracking, favorites and conversion history.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Frankfurter API"],
    image: "/fx-checker.jpg",
    liveUrl: "https://huncho-fx-checker.vercel.app/",
    githubUrl: "https://github.com/Quavo-Huncho/fx-checker",
    visual: "from-purple-600/20 via-blue-500/10 to-transparent",
  },
  {
    number: "03",
    title: "Kante Exchange",
    category: "Cryptocurrency Platform",
    description:
      "A cryptocurrency platform featuring market data, trending coins, top gainers and losers, a crypto calculator and payment options.",
    technologies: ["JavaScript", "API Integration", "Responsive Design"],
    image: "/kante-exchange.jpg",
    liveUrl: "https://kante-exchange.vercel.app/",
    githubUrl: "https://github.com/Quavo-Huncho/kante-exchange",
    visual: "from-emerald-600/20 via-teal-500/10 to-transparent",
  },
  {
    number: "04",
    title: "Pokedex Lite",
    category: "Web Application",
    description:
      "An interactive Pokémon discovery application with Pokémon search, type filtering, favorites and infinite scrolling, powered by the PokéAPI.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PokéAPI"],
    image: "/pokedex.jpg",
    liveUrl: "https://pokedex-lite-azure.vercel.app/",
    githubUrl: "https://github.com/Quavo-Huncho/Pokedex-Lite",
    visual: "from-orange-600/20 via-red-500/10 to-transparent",
  },
];


function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-5 leading-8 text-[var(--muted)]">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* About Preview */}
      <section className="section-padding border-t border-[var(--border)]">
        <div className="container-width grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <SectionTitle
              eyebrow="Get to know me"
              title="Engineering ideas into digital experiences."
              description="My journey combines an engineering mindset with a passion for technology and software development. I enjoy solving problems, learning new technologies and building applications that deliver meaningful experiences."
            />

            <Link
              href="/about"
              className="inline-flex items-center gap-3 font-bold text-blue-600 transition hover:gap-5"
            >
              More About Me
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7">
              <Code2 size={28} className="text-blue-600" />

              <h3 className="mt-8 text-2xl font-black">
                Developer
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Building modern web applications with clean and maintainable code.
              </p>
            </div>

            <div className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7">
              <Zap size={28} className="text-purple-500" />

              <h3 className="mt-8 text-2xl font-black">
                Engineer
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Applying analytical thinking and problem-solving to technology.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="section-padding bg-[var(--surface-secondary)]">
        <div className="container-width">

          <SectionTitle
            eyebrow="My expertise"
            title="Technologies I work with."
            description="Tools and technologies I use to develop modern, responsive and functional digital experiences."
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  className="group flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-blue-600">
                    <Icon size={21} />
                  </div>

                  <span className="text-sm font-bold">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-9 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:gap-4"
            >
              Explore My Skills
              <ArrowUpRight size={17} />
            </Link>
          </div>

        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-width">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionTitle
              eyebrow="Selected work"
              title="Projects I've built."
              description="A selection of practical projects that demonstrate my approach to solving real-world problems through technology."
            />

            <Link
              href="/projects"
              className="mb-12 inline-flex shrink-0 items-center gap-2 text-sm font-bold text-blue-600 hover:gap-4"
            >
              All Projects
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-7 lg:grid-cols-2">

            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* Project Visual */}
                
                {/* Project Screenshot */}
                <div className="relative h-[260px] overflow-hidden bg-[var(--surface-secondary)]">

                  <Image
                    src={project.image}
                    alt={`${project.title} website screenshot`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

                  {/* Project category */}
                  <span className="absolute left-7 top-7 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                    {project.category}
                  </span>

                  {/* Project number */}
                  <span className="absolute bottom-5 right-7 text-5xl font-black text-white/70">
                    {project.number}
                  </span>

                </div>


                {/* Project Details */}
                <div className="p-7 sm:p-9">

                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-black">
                      {project.title}
                    </h3>

                    <ArrowUpRight
                      size={22}
                      className="shrink-0 text-[var(--muted)] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600"
                    />
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-[var(--surface-secondary)] px-3 py-2 text-xs font-semibold"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-blue-700"
                      >
                        Live Demo
                        <ArrowUpRight size={17} />
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-bold transition hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
                    >
                      <FaGithub size={17} />
                      Source Code
                    </a>
                  </div>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding">
        <div className="container-width">
          <div className="relative overflow-hidden rounded-[32px] bg-blue-600 px-7 py-16 text-center text-white sm:px-14 sm:py-20">

            <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full border-[40px] border-white/10" />

            <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border-[40px] border-white/10" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
                Have a project in mind?
              </p>

              <h2 className="mt-5 text-3xl font-black sm:text-5xl">
                Let's build something amazing together.
              </h2>

              <p className="mt-6 leading-8 text-blue-100">
                Have an idea, opportunity or project you'd like to discuss?
                I'd love to hear from you.
              </p>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
              >
                Get In Touch
                <ArrowUpRight size={18} />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
