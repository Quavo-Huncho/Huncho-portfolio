"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Sparkles,
} from "lucide-react";

import CountUp from "@/components/motion/CountUp";
import { EASE } from "@/components/motion/Reveal";

/** Headline line that slides up from behind a mask. */
function Line({ children, delay, reduce, className = "" }) {
  return (
    <span className="block overflow-hidden pb-[0.1em]">
      <motion.span
        className={`block ${className}`}
        initial={reduce ? false : { y: "105%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

const fade = (reduce, delay, y = 20) => ({
  initial: reduce ? false : { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

export default function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);

  // Photo drifts slightly slower than the page while scrolling
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70]);

  // Photo tilts toward the pointer
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 140, damping: 18 };
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-7, 7]), spring);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [6, -6]), spring);

  function onMove(event) {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function onLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[760px] items-center overflow-hidden pb-20 pt-28"
    >
      {/* Background */}
      <div className="grid-pattern absolute inset-0 opacity-40" />

      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
        className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[120px]"
      />

      <div className="container-width relative z-10 grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Hero Content */}
        <div>
          <motion.div
            {...fade(reduce, 0.05)}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Open to opportunities
          </motion.div>

          <motion.p
            {...fade(reduce, 0.12)}
            className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400"
          >
            <Sparkles size={16} />
            Hello, I&apos;m Johnpaul
          </motion.p>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-[82px]">
            <Line reduce={reduce} delay={0.2}>
              I Build Digital
            </Line>
            <Line reduce={reduce} delay={0.32} className="gradient-text">
              Experiences
            </Line>
            <Line reduce={reduce} delay={0.44}>
              That Matter.
            </Line>
          </h1>

          <motion.p
            {...fade(reduce, 0.7)}
            className="mt-8 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg"
          >
            I&apos;m a Full-Stack Web Developer passionate about transforming
            ideas into beautiful, responsive and functional digital products
            using modern web technologies.
          </motion.p>

          <motion.div
            {...fade(reduce, 0.85)}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="group flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Explore My Work
              <ArrowUpRight
                size={18}
                className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="group flex items-center gap-3 rounded-full border border-[var(--border)] px-7 py-4 text-sm font-bold transition hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
            >
              Let&apos;s Connect
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <motion.div
            {...fade(reduce, 1.0, 10)}
            className="mt-14 flex flex-wrap items-center gap-8 border-t border-[var(--border)] pt-8"
          >
            <div>
              <h3 className="text-2xl font-black">
                <CountUp to={2} delay={1.1} />+
              </h3>
              <p className="mt-1 text-xs text-[var(--muted)]">
                Featured Projects
              </p>
            </div>

            <div className="h-10 w-px bg-[var(--border)]" />

            <div>
              <h3 className="text-2xl font-black">Next.js</h3>
              <p className="mt-1 text-xs text-[var(--muted)]">
                Modern Development
              </p>
            </div>

            <div className="h-10 w-px bg-[var(--border)]" />

            <div>
              <h3 className="text-2xl font-black">100%</h3>
              <p className="mt-1 text-xs text-[var(--muted)]">
                Passion for Building
              </p>
            </div>
          </motion.div>
        </div>

        {/* Profile Photograph */}
        <motion.div
          style={{ y: photoY }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.94, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ rotateX, rotateY, transformPerspective: 900 }}
            className="relative"
          >
            {/* Background glow */}
            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-blue-500/25 to-purple-500/25 blur-2xl" />

            {/* Photo frame */}
            <div className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-2xl">
              <motion.div
                initial={
                  reduce ? false : { clipPath: "inset(100% 0% 0% 0% round 24px)" }
                }
                animate={{ clipPath: "inset(0% 0% 0% 0% round 24px)" }}
                transition={{ duration: 1.1, delay: 0.45, ease: EASE }}
                className="group relative aspect-[3/4] overflow-hidden rounded-[24px] bg-[var(--surface-secondary)]"
              >
                <Image
                  src="/profile.jpg"
                  alt="Johnpaul Ozioko - Full-Stack Web Developer"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover object-center transition duration-700 group-hover:scale-105"
                />

                {/* Bottom photo overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent px-6 pb-7 pt-24">
                  <p className="text-xl font-black text-white">
                    Johnpaul Ozioko
                  </p>

                  <p className="mt-1 text-sm text-white/80">
                    Full-Stack Web Developer
                  </p>
                </div>
              </motion.div>

              {/* Photo footer */}
              <div className="flex items-center justify-between px-3 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <Code2 size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold">Creative Developer</p>

                    <p className="text-xs text-[var(--muted)]">
                      Building digital solutions
                    </p>
                  </div>
                </div>

                <Sparkles className="text-blue-600" size={20} />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.3, ease: EASE }}
              className="absolute -right-3 top-20 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-xl sm:-right-10"
            >
              <p className="text-xs text-[var(--muted)]">Currently working with</p>

              <p className="mt-1 text-sm font-bold text-blue-600">
                Next.js + Supabase
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-[var(--muted)] md:flex"
      >
        <ArrowDown size={15} />
        Scroll to explore
      </motion.div>
    </section>
  );
}
