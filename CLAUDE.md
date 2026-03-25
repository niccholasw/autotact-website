# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AutoTact marketing website — a Next.js 14 App Router site for a NZ-based automation services company. Dark-themed, animation-heavy, three-page marketing site.

## Commands

```bash
npm run dev      # Dev server on localhost:3000
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint with Next.js config
```

No test framework is configured.

## Tech Stack

- **Next.js 14.2** with App Router (all pages are client components via `'use client'`)
- **React 18.3** with hooks (no global state management)
- **Tailwind CSS 3.4** with a custom dark theme defined in `tailwind.config.js`
- **framer-motion 12** for animations
- **Fonts:** IBM Plex Serif (body) + Roboto Slab (headings) via `next/font/google`

## Architecture

**Pages** (App Router, file-based routing):
- `/` — Home: hero, stats, animated workflow, process steps, typing animation, CTA
- `/about` — Company story, values, team, testimonials
- `/enquiries` — Contact form with client-side validation (no backend integration yet)

**Shared layout** (`app/layout.js`): sets fonts, metadata, wraps pages in `TransitionLayout` for page transitions.

**Key components** (`components/`):
- `Reveal.js` — Scroll-triggered animations using IntersectionObserver. Exports `Reveal`, `StaggerContainer`, and `Parallax` components used throughout all pages.
- `TransitionLayout.js` — Page transition wrapper (fade + blur + scale, 400ms)
- `TypingSection.js` — Typing/deleting text effect for the home page
- `AutomationVisual.js` — Animated workflow diagram on home page
- `Navbar.js` — Responsive header with scroll-aware styling and mobile hamburger menu
- `Footer.js` — Simple footer

**Styling**: Custom color tokens (surface, ink, accent, etc.) and utility classes (`.btn-primary`, `.card-hover`, `.gradient-text`, `.dot-pattern`) defined in `tailwind.config.js` and `app/globals.css`. The design is dark-mode only with blue/purple accents.

**Animations**: Custom IntersectionObserver-based reveals with configurable delay/direction, parallax scrolling with passive listeners, and a custom easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`).
