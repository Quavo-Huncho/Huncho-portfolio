import Link from "next/link";

import { Heart } from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Copyright from "./Copyright";
import { Reveal } from "@/components/motion/Reveal";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Quavo-Huncho",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/johnpaul-ozioko-65b08a369",
    icon: FaLinkedin,
  },
  {
    label: "X",
    href: "https://x.com/OziokoJohnpaul2/",
    icon: FaTwitter,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/johnpaulchbueze.ozioko/",
    icon: FaFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jpquavo?mdxt=NmZlYmJzZnQzYnB2",
    icon: FaInstagram,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="container-width py-12">
        <Reveal y={16}>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            {/* Branding */}
            <div>
              <Link href="/" className="text-2xl font-black">
                JO<span className="text-blue-600">.</span>
              </Link>

              <p className="mt-3 max-w-sm text-sm leading-7 text-[var(--muted)]">
                Building modern digital experiences through thoughtful design
                and clean code.
              </p>
            </div>

            {/* Navigation */}
            <nav
              aria-label="Footer"
              className="flex flex-wrap gap-6 text-sm font-medium"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative transition-colors hover:text-blue-600 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-blue-600 after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] transition duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-600/10"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Copyright */}
        <Reveal y={10} delay={0.1}>
          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-[var(--border)] pt-7 text-sm text-[var(--muted)] sm:flex-row">
            <Copyright />

            <p className="flex items-center gap-1">
              Crafted with
              <Heart size={14} className="text-red-500" />
              and code.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
