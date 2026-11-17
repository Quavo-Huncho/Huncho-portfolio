
import {
  ArrowUpRight,
  ExternalLink,
  BriefcaseBusiness,
  Coins,
  Search,
  Zap,
  Code2,
  Globe,
  Layers3,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";


const projects = [
  {
    number: "01",
    title: "Huncho Electrical",
    category: "Business Website & Management System",
    description:
      "A professional website for an electrical services and materials business. It helps customers explore electrical products and services, while providing an administrative dashboard for managing business enquiries, projects and materials.",
    features: [
      "Responsive business website",
      "Materials catalogue",
      "Admin dashboard",
      "Enquiry management",
      "Supabase integration",
    ],
    technologies: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Supabase",
    ],
    icon: BriefcaseBusiness,
    visual: "electrical",
    liveUrl: "https://huncho-electrical.vercel.app/",
    githubUrl: "https://github.com/Quavo-Huncho/Huncho-electrical",
  },
  {
    number: "02",
    title: "FX Checker",
    category: "Currency Conversion & Financial Application",
    description:
      "A currency conversion and exchange-rate tracking application that makes it easier to compare currencies, monitor rate movements and keep track of conversion activity.",
    features: [
      "Currency conversion",
      "Exchange-rate comparisons",
      "Historical rate tracking",
      "Favorites and conversion history",
      "Authentication system",
    ],
    technologies: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Frankfurter API",
      "Supabase Auth",
    ],
    icon: Globe,
    visual: "fx",
    liveUrl: "https://fx-checker.vercel.app/",
    githubUrl: "https://github.com/Quavo-Huncho/fx-checker",
  },
  {
    number: "03",
    title: "Kante Exchange",
    category: "Cryptocurrency Exchange Platform",
    description:
      "A cryptocurrency exchange platform showcasing market information and exchange services. It brings together cryptocurrency market data, trending assets, market movers and an exchange calculator in one interface.",
    features: [
      "Cryptocurrency market overview",
      "Trending coins and market movers",
      "Top gainers and losers",
      "Exchange calculator",
      "Crypto and payment services",
    ],
    technologies: [],
    icon: Coins,
    visual: "kante",
    liveUrl: "https://kante-exchange.vercel.app/",
    githubUrl: "https://github.com/Quavo-Huncho/kante-exchange",
  },
  {
    number: "04",
    title: "Pokedex Lite",
    category: "Interactive Web Application",
    description:
      "An interactive Pokédex that lets users explore Pokémon, search by name, filter by type and save their favorite Pokémon. The application uses Pokémon data from PokéAPI.",
    features: [
      "Pokémon search",
      "Filter by Pokémon type",
      "Favorites collection",
      "Infinite scrolling",
      "PokéAPI integration",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PokéAPI",
    ],
    icon: Search,
    visual: "pokedex",
    liveUrl: "https://pokedex-lite-azure.vercel.app/",
    githubUrl: "https://github.com/Quavo-Huncho/Pokedex-Lite",
  },
];

function ProjectVisual({ project }) {
  const Icon = project.icon;

  return (
    <div className="relative flex min-h-[245px] items-center justify-center overflow-hidden rounded-t-[1.4rem] bg-[var(--surface-secondary)] p-6 sm:min-h-[280px]">
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {project.visual === "electrical" && (
        <div className="relative w-full max-w-sm rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-blue-600">HUNCHO</p>
              <p className="text-sm font-black">Electrical Solutions</p>
            </div>
            <div className="rounded-lg bg-blue-500/10 p-2 text-blue-600">
              <Zap size={22} />
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-900 p-5 text-white">
            <p className="text-xs text-blue-100">Professional Services</p>
            <p className="mt-2 text-xl font-black">
              Powering Your World.
            </p>
            <div className="mt-4 h-1.5 w-20 rounded-full bg-blue-300" />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Materials", "Projects", "Services"].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-[var(--border)] p-3 text-center"
              >
                <div className="mx-auto h-5 w-5 rounded-md bg-blue-500/15" />
                <p className="mt-2 text-[10px] font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.visual === "fx" && (
        <div className="relative w-full max-w-sm rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-blue-600">FX CHECKER</p>
              <p className="mt-1 text-sm font-bold">Currency Overview</p>
            </div>
            <Globe size={22} className="text-blue-600" />
          </div>

          <div className="mt-5 rounded-xl bg-[var(--surface-secondary)] p-4">
            <p className="text-xs text-[var(--muted)]">Exchange overview</p>
            <p className="mt-2 text-2xl font-black">USD / EUR</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-[var(--muted)]">Rate comparison</span>
              <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-bold text-emerald-600">
                Tracking
              </span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-[var(--border)] p-3">
              <p className="text-[10px] text-[var(--muted)]">Converter</p>
              <p className="mt-1 text-sm font-bold">Exchange</p>
            </div>
            <div className="rounded-lg border border-[var(--border)] p-3">
              <p className="text-[10px] text-[var(--muted)]">History</p>
              <p className="mt-1 text-sm font-bold">Rate logs</p>
            </div>
          </div>
        </div>
      )}

      {project.visual === "kante" && (
        <div className="relative w-full max-w-sm rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-amber-500/10 p-3 text-amber-500">
              <Coins size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-amber-500">KANTE</p>
              <p className="text-sm font-black">Crypto Market</p>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-gradient-to-br from-zinc-900 to-slate-800 p-5 text-white">
            <p className="text-xs text-zinc-300">Explore the crypto market</p>
            <p className="mt-2 text-xl font-black">
              Exchange. Explore. Trade.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="rounded-full bg-amber-500 px-3 py-1 text-[10px] font-bold text-black">
                Markets
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-[10px]">
                Exchange
              </span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Trending", "Gainers", "Losers"].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-[var(--border)] p-3 text-center"
              >
                <div className="mx-auto h-5 w-5 rounded-full bg-amber-500/15" />
                <p className="mt-2 text-[10px] font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.visual === "pokedex" && (
        <div className="relative w-full max-w-sm rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-red-500">POKÉDEX LITE</p>
              <p className="mt-1 text-sm font-black">Explore Pokémon</p>
            </div>
            <Search size={21} className="text-red-500" />
          </div>

          <div className="mt-5 flex items-center gap-2 rounded-lg border border-[var(--border)] px-3 py-3">
            <Search size={15} className="text-[var(--muted)]" />
            <span className="text-xs text-[var(--muted)]">
              Search Pokémon...
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { name: "Explore", color: "bg-red-500/10" },
              { name: "Filter", color: "bg-blue-500/10" },
              { name: "Favorites", color: "bg-amber-500/10" },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-[var(--border)] p-3 text-center"
              >
                <div className={`mx-auto h-9 w-9 rounded-full ${item.color}`} />
                <p className="mt-2 text-[10px] font-semibold">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="absolute bottom-4 right-4 rounded-full border border-[var(--border)] bg-[var(--surface)] p-2.5 shadow-lg">
        <Icon size={18} className="text-blue-600 dark:text-blue-400" />
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface)] transition duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-2xl">
      <ProjectVisual project={project} />

      <div className="p-6 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-black tracking-widest text-blue-600 dark:text-blue-400">
            PROJECT {project.number}
          </span>

          <span className="rounded-full bg-[var(--surface-secondary)] px-3 py-1.5 text-[10px] font-semibold text-[var(--muted)]">
            {project.category}
          </span>
        </div>

        <h2 className="mt-5 text-2xl font-black tracking-tight">
          {project.title}
        </h2>

        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
          {project.description}
        </p>

        <div className="mt-6">
          <h3 className="text-xs font-bold uppercase tracking-wider">
            Key Features
          </h3>

          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-xs leading-5 text-[var(--muted)]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {project.technologies.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider">
              Technologies
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface-secondary)] px-3 py-2 text-xs font-medium"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-7 flex flex-wrap gap-3 border-t border-[var(--border)] pt-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-xs font-bold text-white transition hover:bg-blue-700"
            >
              Live Preview
              <ExternalLink size={15} />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-xs font-bold transition hover:border-blue-500 hover:text-blue-600"
            >
              <FaGithub size={17} />
              Source Code
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative border-b border-[var(--border)]">
        <div className="absolute inset-0 grid-pattern opacity-40" />

        <div className="container-width relative py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Selected Projects
            </span>

            <h1 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              Ideas transformed into{" "}
              <span className="gradient-text">real products.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Here's a collection of applications and websites I've
              worked on. Each project represents an opportunity to
              learn, solve problems and create useful digital experiences.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3">
                <p className="text-2xl font-black">04</p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Featured Projects
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3">
                <p className="text-2xl font-black">Web</p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Development Focus
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3">
                <p className="text-2xl font-black">01</p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Project at a time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding">
        <div className="container-width">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                My Portfolio
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                Featured work.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
              Explore the projects, the problems they address and the
              technologies behind each experience.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding border-t border-[var(--border)] bg-[var(--surface-secondary)]">
        <div className="container-width">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 to-indigo-900 px-7 py-14 text-center text-white md:px-14 md:py-20">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

            <div className="relative mx-auto max-w-2xl">
              <Layers3 size={34} className="mx-auto text-blue-200" />

              <h2 className="mt-6 text-3xl font-black tracking-tight md:text-5xl">
                Let's build something meaningful.
              </h2>

              <p className="mt-5 leading-8 text-blue-100">
                Have a project, an idea or an opportunity in mind?
                I'd love to hear about it.
              </p>

              <a
                href="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
              >
                Start a Conversation
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
