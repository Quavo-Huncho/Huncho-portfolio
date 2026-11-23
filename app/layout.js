import "./globals.css";

import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";

import ThemeProvider from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/motion/ScrollProgress";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata = {
  // Set NEXT_PUBLIC_SITE_URL to your live domain so share images resolve correctly
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),

  title: {
    default: "Johnpaul Ozioko | Full-Stack Developer",
    template: "%s | Johnpaul Ozioko",
  },

  description:
    "I'm Johnpaul Ozioko, a Full-Stack Developer building modern, responsive and functional web applications using JavaScript, React, Next.js and Supabase.",

  keywords: [
    "Johnpaul Ozioko",
    "Full Stack Developer",
    "Frontend Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "React Developer",
    "Web Developer in Nigeria",
    "Supabase Developer",
  ],

  authors: [{ name: "Johnpaul Ozioko" }],
  creator: "Johnpaul Ozioko",

  openGraph: {
    title: "Johnpaul Ozioko | Full-Stack Developer",
    description:
      "Explore my portfolio, projects, technical skills and experience building modern web applications.",
    siteName: "Johnpaul Ozioko Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Johnpaul Ozioko | Full-Stack Developer",
    description:
      "Explore my portfolio and projects. I build modern, responsive and functional web applications.",
  },

  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable}`}
    >
      <body>
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only z-[70] rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to content
          </a>

          <ScrollProgress />
          <Navbar />

          <main id="main" className="min-h-screen">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
