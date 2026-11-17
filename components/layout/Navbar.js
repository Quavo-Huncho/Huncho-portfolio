
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[var(--border)] glass">
      <nav className="container-width flex h-[76px] items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tight"
        >
          JO<span className="text-blue-600">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  active
                    ? "text-blue-600"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {link.name}

                {active && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-blue-600" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            disabled={!mounted}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] transition hover:bg-[var(--surface-secondary)]"
          >
            {mounted ? (
              resolvedTheme === "dark" ? (
                <Sun size={19} />
              ) : (
                <Moon size={19} />
              )
            ) : (
              <span className="h-[19px] w-[19px]" />
            )}
          </button>

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:flex"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] md:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--background)] px-5 py-5 md:hidden">
          <div className="container-width flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                  pathname === link.href
                    ? "bg-[var(--accent-soft)] text-blue-600"
                    : "text-[var(--foreground)] hover:bg-[var(--surface-secondary)]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white"
            >
              Let's Talk
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
