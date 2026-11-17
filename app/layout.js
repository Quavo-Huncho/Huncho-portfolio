
import "./globals.css";

import ThemeProvider from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
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

  authors: [
    {
      name: "Johnpaul Ozioko",
    },
  ],

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

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />

          <main className="min-h-screen">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
