
import Link from "next/link";

import {
  ArrowUpRight,
  Heart,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="container-width py-12">

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

          {/* Branding */}
          <div>
            <Link href="/" className="text-2xl font-black">
              JO<span className="text-blue-600">.</span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-7 text-[var(--muted)]">
              Building modern digital experiences through
              thoughtful design and clean code.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-6 text-sm font-medium">
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>

            <Link href="/projects" className="hover:text-blue-600">
              Projects
            </Link>

            <Link href="/services" className="hover:text-blue-600">
              Services
            </Link>

            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            <a
              href="https://github.com/Quavo-Huncho"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] transition hover:border-blue-600 hover:text-blue-600"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/johnpaul-ozioko-65b08a369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] transition hover:border-blue-600 hover:text-blue-600"
            >
              <FaLinkedin size={19} />
            </a>
            <a
              href="https://x.com/OziokoJohnpaul2/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] transition hover:border-blue-600 hover:text-blue-600"
            >
              <FaTwitter size={19} />
            </a>
            <a
              href="https://www.facebook.com/johnpaulchbueze.ozioko/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] transition hover:border-blue-600 hover:text-blue-600"
            >
              <FaFacebook size={19} />
            </a>
            <a
              href="https://www.instagram.com/jpquavo?mdxt=NmZlYmJzZnQzYnB2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] transition hover:border-blue-600 hover:text-blue-600"
            >
              <FaInstagram size={19} />
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-[var(--border)] pt-7 text-sm text-[var(--muted)] sm:flex-row">

          <Copyright />
          <p className="flex items-center gap-1">
            Crafted with
            <Heart size={14} className="text-red-500" />
            and code.
          </p>

        </div>
      </div>
    </footer>
  );
}
