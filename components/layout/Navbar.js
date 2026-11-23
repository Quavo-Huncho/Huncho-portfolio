"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const EASE = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const { scrollY } = useScroll();

  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => setMounted(true), []);
  useEffect(() => setMenuOpen(false), [pathname]);

  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 12));

  // Lock page scroll and allow Escape to close while the mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");
  const highlighted = hovered ?? pathname;

  return (
    <header
      className={`glass fixed left-0 top-0 z-50 w-full border-b transition-[border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-[var(--border)] shadow-sm"
          : "border-transparent"
      }`}
    >
      <nav
        className={`container-width flex items-center justify-between transition-[height] duration-300 ${
          scrolled ? "h-16" : "h-[76px]"
        }`}
        aria-label="Main"
      >
        <Link href="/" className="text-2xl font-black tracking-tight" aria-label="Home">
          JO<span className="text-[var(--accent)]">.</span>
        </Link>

        {/* Desktop links */}
        <div
          className="hidden items-center gap-1 md:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onMouseEnter={() => setHovered(link.href)}
                onFocus={() => setHovered(link.href)}
                onBlur={() => setHovered(null)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  active ? "text-[var(--accent)]" : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {highlighted === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-[var(--surface-secondary)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            disabled={!mounted}
            aria-label="Toggle dark mode"
            className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[var(--border)] transition hover:bg-[var(--surface-secondary)]"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mounted && (
                <motion.span
                  key={resolvedTheme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  {resolvedTheme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:flex"
          >
            Let&apos;s Talk
            <ArrowUpRight size={16} />
          </Link>

          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] md:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="border-t border-[var(--border)] bg-[var(--background)] px-5 py-5 md:hidden"
          >
            <motion.div
              className="container-width flex flex-col gap-1"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: EASE } },
                  }}
                >
                  <Link
                    href={link.href}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                      pathname === link.href
                        ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                        : "text-[var(--foreground)] hover:bg-[var(--surface-secondary)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE } },
                }}
              >
                <Link
                  href="/contact"
                  className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white"
                >
                  Let&apos;s Talk
                  <ArrowUpRight size={17} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
