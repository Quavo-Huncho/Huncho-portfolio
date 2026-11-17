# Implementation Plan — Developer Portfolio

## Project Facts (confirmed from codebase)

- **Next.js 16.4.5** App Router, JS only. `next.config.mjs` uses Turbopack + `@tailwindcss/turbopack` — **do not touch this file**.
- **Tailwind CSS v4** — uses `@import "tailwindcss"` syntax. No `tailwind.config.js`. Custom tokens go inside `@theme inline { }` in `globals.css`.
- **Framer Motion 14.10.1** — no breaking changes from v11+. All hooks (`useInView`, `useScroll`, `useTransform`, `useAnimation`, `useSpring`) available from `'framer-motion'`. Any file using `motion.*` or FM hooks **must** have `'use client'` at the top.
- **lucide-react 1.70.0** — named imports: `import { Menu, X, Github } from 'lucide-react'`.
- **react-icons 5.7.0** — subpath imports: `import { SiReact } from 'react-icons/si'`. Must be statically imported (no dynamic string-based resolution).
- **Path alias**: `@/*` → `./` (jsconfig.json). Use `@/components/X`, `@/lib/data`, etc.
- **`app/page.js`** can stay a **Server Component** — it just imports and renders client components.
- **`app/layout.js`** is a **Server Component** — do not add `'use client'` to it.
- **All interactive components** must have `'use client'` as the first line.

---

## Key Design Decisions

1. **Permanently dark theme** — no light mode toggle. The design system is entirely dark with a purple/teal accent palette. This removes all `dark:` variant complexity from Tailwind and keeps the CSS clean.

2. **Tailwind v4 token strategy** — Define custom color tokens inside `@theme inline { }` in `globals.css`. A token like `--color-accent: #6c63ff` auto-generates `bg-accent`, `text-accent`, `border-accent` utilities. Never use arbitrary values like `bg-[#6c63ff]` for design system colors — always use the token-derived classes.

3. **Framer Motion scroll animations** — Use `useInView` with `{ once: true, margin: '-80px' }` inside `SectionWrapper` to trigger entrance animations. This is the correct v14 pattern. Do NOT use `whileInView` prop directly on `motion.*` elements for section-level orchestration — `useInView` gives better control. Individual cards can use `whileHover`.

4. **react-icons static import map** — Dynamic resolution of icon names from strings (e.g. `data.icon = 'SiReact'`) cannot use `import()` at runtime in RSC/SSR contexts. Solve this with an `ICON_MAP` object declared at the top of the component that statically imports all needed icons.

5. **Profile image placeholder** — Use a styled div with gradient border and initials 'CE' (no actual photo file required). If the user later places `/public/profile.jpg`, the `Next.js Image` component can be swapped in. For project screenshots, use a mock browser chrome built from divs with gradient backgrounds — no external images needed.

6. **Font loading** — Import `Inter` (body) and `Sora` (display/headings) from `next/font/google` in `layout.js`. Expose them as `--font-sans` and `--font-display` CSS variables. Map these in `@theme inline` so Tailwind's `font-sans` and `font-display` utilities use them.

7. **Contact form** — Client-side only with `useState`. No server action or API route needed. On submit, show a success state using `AnimatePresence`. This satisfies the portfolio requirement without backend complexity.

---

## File Creation Order (dependency-ordered)

- [ ] 1. **Replace `app/globals.css`** — Design system foundation with all color/font tokens in `@theme inline {}`.
      Files: `app/globals.css`
      Verify: `npm run build` — exits 0.

- [ ] 2. **Replace `app/layout.js`** — Add Inter + Sora font imports, apply CSS variable classNames, update metadata.
      Files: `app/layout.js`
      Verify: `npm run build` — exits 0.

- [ ] 3. **Create `lib/data.js`** — All portfolio content: PERSONAL, SKILLS (with icon names), PROJECTS, SERVICES, EXPERIENCE.
      Files: `lib/data.js`
      Verify: `npm run build` — exits 0.

- [ ] 4. **Create `components/ui/GradientButton.jsx`** — Reusable button primitive with primary and outline variants, Framer Motion whileHover/whileTap. Mark `'use client'`.
      Files: `components/ui/GradientButton.jsx`
      Verify: `npm run build` — exits 0.

- [ ] 5. **Create `components/ui/AnimatedText.jsx`** — Word-by-word staggered text entrance animation. Mark `'use client'`.
      Files: `components/ui/AnimatedText.jsx`
      Verify: `npm run build` — exits 0.

- [ ] 6. **Create `components/ui/SectionWrapper.jsx`** — Section-level entrance animation using `useInView`. Mark `'use client'`.
      Files: `components/ui/SectionWrapper.jsx`
      Verify: `npm run build` — exits 0.

- [ ] 7. **Create `components/Navbar.jsx`** — Sticky navbar with scroll detection, desktop nav links with hover underline, mobile hamburger + animated panel, `GradientButton` CTA. Mark `'use client'`.
      Files: `components/Navbar.jsx`
      Verify: `npm run build` — exits 0.

- [ ] 8. **Create `components/Hero.jsx`** — Full-viewport hero with animated role title cycling, gradient orbs, profile image placeholder, social links, CTA buttons, parallax scroll effect. Mark `'use client'`.
      Files: `components/Hero.jsx`
      Verify: `npm run build` — exits 0.

- [ ] 9. **Create `components/About.jsx`** — Two-column layout: professional bio + stats cards (left), decorative stacked code card (right). Mark `'use client'`.
      Files: `components/About.jsx`
      Verify: `npm run build` — exits 0.

- [ ] 10. **Create `components/Skills.jsx`** — Three-category skill grid with react-icons, static ICON_MAP, hover animations. Mark `'use client'`.
       Files: `components/Skills.jsx`
       Verify: `npm run build` — exits 0.

- [ ] 11. **Create `components/Projects.jsx`** — Alternating-layout project cards with mock screenshot placeholder, tech chips, Github/Live links. Mark `'use client'`.
       Files: `components/Projects.jsx`
       Verify: `npm run build` — exits 0.

- [ ] 12. **Create `components/Services.jsx`** — 3-column service card grid with lucide icons, glow hover effect. Mark `'use client'`.
       Files: `components/Services.jsx`
       Verify: `npm run build` — exits 0.

- [ ] 13. **Create `components/Experience.jsx`** — Two-column vertical timeline split by type (education/experience). Mark `'use client'`.
       Files: `components/Experience.jsx`
       Verify: `npm run build` — exits 0.

- [ ] 14. **Create `components/Contact.jsx`** — Accessible contact form with name/email/subject/message, success state, social links sidebar. Mark `'use client'`.
       Files: `components/Contact.jsx`
       Verify: `npm run build` — exits 0.

- [ ] 15. **Create `components/Footer.jsx`** — Three-row footer: logo + nav + socials / divider / copyright + back-to-top. Mark `'use client'`.
       Files: `components/Footer.jsx`
       Verify: `npm run build` — exits 0.

- [ ] 16. **Replace `app/page.js`** — Server Component importing and composing all 9 section components in order: Navbar, Hero, About, Skills, Projects, Services, Experience, Contact, Footer.
       Files: `app/page.js`
       Verify: `npm run build` — exits 0. All sections render at `npm run dev`.

---

## Tailwind v4 Gotchas

- `@theme inline { }` not `@theme { }` — `inline` mode means the token value is inlined directly into generated utilities rather than wrapped in a `var()` call. The existing `globals.css` already uses `@theme inline`.
- No `tailwind.config.js` and no `@tailwind base/components/utilities` — only `@import "tailwindcss"` at the top.
- Custom animation keyframes go in `@keyframes` blocks after `@import "tailwindcss"`, not in a config file.
- To add a custom utility class (like `.gradient-text`), use `@layer utilities { }` after the `@theme inline` block.
- For component-level hover glow effects using radial gradient, use inline `style` prop or an absolutely-positioned child div rather than a Tailwind `@layer components` pseudo-class, since Tailwind v4 has limited `@apply` support.

## Next.js 16 App Router Gotchas

- `params` in `page.js` and `layout.js` is now a **Promise** — use `await params` before destructuring. Not relevant for this single-page portfolio (no dynamic routes) but important to know.
- `next/font/google` works as before — import in `layout.js`, apply as CSS variable className on `<html>`.
- `next/image` requires `width` and `height` props (or `fill` with a sized parent). For the profile image placeholder that uses a div, this is not needed. For any real images later, always provide dimensions.
- `'use client'` must be the absolute first line before any imports.

## CSS Custom Property Strategy

```css
/* app/globals.css */
@import "tailwindcss";

@theme inline {
  /* Colors — each generates bg-*, text-*, border-* utilities */
  --color-bg-primary: #0a0b0f;
  --color-bg-secondary: #0f1117;
  --color-bg-card: #13151f;
  --color-accent: #6c63ff;
  --color-accent-light: #8b85ff;
  --color-accent-secondary: #00d4aa;
  --color-text-primary: #f0f0f5;
  --color-text-secondary: #9999bb;
  --color-text-muted: #666688;
  --color-border: #1e2035;

  /* Fonts */
  --font-sans: var(--font-inter);
  --font-display: var(--font-sora);
}
```

Usage in JSX: `className="bg-bg-card text-text-secondary border-border"` — all resolved by Tailwind.

## Image Placeholder Strategy

- **Profile image**: A `320×320` div with a gradient border technique: outer div with `bg-gradient-to-br from-accent to-accent-secondary p-0.5 rounded-2xl`, inner div with `bg-bg-card rounded-2xl flex items-center justify-center`, containing `<span className="text-6xl font-display font-bold gradient-text">CE</span>`.
- **Project screenshots**: A div with `style={{ background: 'linear-gradient(135deg, ...)' }}` using the project's gradient colors, containing mock browser chrome (3 colored dots + URL bar as divs) and abstract content blocks (divs of varying widths and heights).
- **No external image CDN calls** — zero network dependency for visuals.
