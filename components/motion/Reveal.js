"use client";

import { motion, useReducedMotion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

const viewport = { once: true, margin: "-80px" };

/** Single element: fades in and rises slightly when scrolled into view. */
export function Reveal({ children, className, delay = 0, y = 20 }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Wrap a group; children wrapped in <StaggerItem> animate in sequence. */
export function Stagger({ children, className, gap = 0.07, delay = 0 }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={viewport}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Image/media wipe: the frame opens up as it enters the viewport. */
export function ClipReveal({ children, className, radius = 28 }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduce ? false : { clipPath: `inset(12% 12% 12% 12% round ${radius}px)`, opacity: 0 }
      }
      whileInView={{ clipPath: `inset(0% 0% 0% 0% round ${radius}px)`, opacity: 1 }}
      viewport={viewport}
      transition={{ duration: 1, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
