<div align="center">
<br />

<pre>
███████╗██╗      █████╗ ██████╗  █████╗ 
██╔════╝██║     ██╔══██╗██╔══██╗██╔══██╗
█████╗  ██║     ███████║██████╔╝███████║
██╔══╝  ██║     ██╔══██║██╔══██╗██╔══██║
███████╗███████╗██║  ██║██║  ██║██║  ██║
╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
███████╗███████╗████████╗ █████╗ ████████╗███████╗███████╗
██╔════╝██╔════╝╚══██╔══╝██╔══██╗╚══██╔══╝██╔════╝██╔════╝
█████╗  ███████╗   ██║   ███████║   ██║   █████╗  ███████╗
██╔══╝  ╚════██║   ██║   ██╔══██║   ██║   ██╔══╝  ╚════██║
███████╗███████║   ██║   ██║  ██║   ██║   ███████╗███████║
╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝
</pre>

<p><strong>A luxury real estate showcase UI — built to show clients exactly what they're getting.</strong></p>

<br />

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EF0074?style=flat-square&logo=framer)
![License](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)
![Status](https://img.shields.io/badge/status-live-brightgreen?style=flat-square)

<br />

</div>

---

## What is this?

**realestate-ui** is a polished, client-facing real estate showcase — not a generic template. It's built to present luxury property listings to prospective clients in a way that feels premium and trustworthy from the first load.

It features a full single-page layout with animated sections, property filtering, a consultation booking modal, and a curated collection of listings. The brand identity, copy, and UX are all dialled in to communicate quality before a single word is read.

Built as a portfolio piece demonstrating production-quality frontend work for the real estate vertical.

---

## Features

| Feature | Description |
|---|---|
| 🏠 **Property Listings** | Filterable collection with detail modals — by type, budget, location, and bedrooms |
| 🔍 **Smart Search Bar** | Live multi-filter search: location, budget range, property type, bed count |
| 📅 **Consultation Modal** | Fully-validated booking form with a success confirmation screen |
| 🗺️ **Areas We Serve** | Interactive location cards that filter the property grid |
| 💬 **Testimonials** | Auto-advancing carousel with client reviews |
| 📊 **Stats Section** | Animated trust indicators |
| 🌙 **Dark / Light Mode** | System-aware theme toggle, persisted to localStorage |
| ⚡ **Page Loader** | Branded preloader with smooth slide-exit animation |
| 📜 **Smooth Scroll** | Lenis-powered inertia scrolling throughout |
| 📱 **Fully Responsive** | Mobile menu, adaptive layouts across all breakpoints |
| 🎞️ **Scroll Animations** | Framer Motion enter animations on every section |

---

## Tech Stack

```
realestate-ui/
├── Next.js 16          — App Router, SSR, metadata API
├── React 19            — Latest concurrent features
├── TypeScript 5        — Strict mode throughout
├── Framer Motion 12    — Page loader, scroll reveals, modal transitions
├── Lenis 1.3           — Smooth inertia scrolling
├── Lucide React        — Consistent icon set
└── CSS Modules         — Scoped, component-level styles
```

---

## Getting Started

### Clone & install

```bash
git clone https://github.com/gautamxgambhir/realestate-ui.git
cd realestate-ui
npm install
```

### Run locally

```bash
npm run dev
# → http://localhost:3000
```

### Build for production

```bash
npm run build
npm start
```

---

## Deployment

Built for Vercel — zero-config deployment, no setup required.

**Vercel (recommended)** — connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments on every push. Or deploy via CLI:

```bash
npm install -g vercel
vercel
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              — Root layout, fonts, metadata
│   ├── page.tsx                — Entry point, state orchestration
│   └── globals.css             — CSS variables & theme tokens
└── components/
    ├── Navbar.tsx              — Sticky nav, scroll progress, theme toggle
    ├── Hero.tsx                — Typewriter headline, featured property card
    ├── SearchBar.tsx           — Multi-filter property search
    ├── Stats.tsx               — Animated trust metrics
    ├── FeaturedProperties.tsx  — Filterable grid + detail modal
    ├── WhyChoose.tsx           — Value proposition section
    ├── AreasWeServe.tsx        — Location cards with filter integration
    ├── Testimonials.tsx        — Auto-advancing review carousel
    ├── Process.tsx             — Step-by-step advisory process
    ├── About.tsx               — Founder & brand story
    ├── FAQ.tsx                 — Accordion FAQ
    ├── FinalCTA.tsx            — Contact / consultation prompt
    ├── Footer.tsx              — Links, contact details, newsletter
    ├── ConsultationModal.tsx   — Booking form with success state
    ├── PageLoader.tsx          — Branded preloader
    └── SmoothScroll.tsx        — Lenis scroll provider
```

---

## License

MIT © [Gautam Gambhir](https://github.com/gautamxgambhir)

---

<div align="center">
<sub>Built with ☕ and a taste for the finer things.</sub>
<br /><br />
<a href="https://github.com/gautamxgambhir">GitHub</a> ·
<a href="https://twitter.com/gautamxgambhir">Twitter</a> ·
<a href="https://instagram.com/gautamxgambhir">Instagram</a>
</div>
