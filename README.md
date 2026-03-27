# Joy Sithole Portfolio

Professional portfolio website for Joy Sithole, Virtual Assistant for Business Growth. Clean, minimalist design with dark mode support. Built entirely on mobile devices using Termux.

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Architecture Overview](#architecture-overview)
- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [Technology Stack](#technology-stack)
- [Deployment](#deployment)
- [Design Philosophy](#design-philosophy)
- [License](#license)
- [Contact](#contact)

---

## About

This portfolio showcases Joy Sithole's professional services as a Virtual Assistant for Business Growth. It presents her services, strengths, international experience, and client testimonials in a clean, accessible format.

The project was developed entirely on Android devices using Termux, which influenced key architectural decisions. Memory constraints encouraged minimal dependencies, storage limitations demanded efficient asset management, and the mobile-first development environment resulted in a site that performs exceptionally well on all devices. The portfolio handles dark mode switching, smooth scroll animations, and touch-friendly interactions without sacrificing performance.

---

## Features

### Core Functionality

- **Theme switching** with persistent preference stored in localStorage. Dark mode inverts the color scheme without introducing new colors, maintaining brand consistency while respecting user preference.

- **Responsive grid matrix** background creates visual texture without images. Each cell has randomized border presence, opacity, and color, with 35% of cells fully transparent for a balanced, organic appearance.

- **Scroll-responsive hero image** that fades and moves upward as the user scrolls. The image starts at 85% opacity positioned at 35% from the top, transitioning to fully transparent at 8% after 900px of scroll.

- **Testimonial carousel** with swipe gestures, direction-aware animations, and auto-play. The carousel pauses on user interaction and uses 6-second intervals between testimonials.

- **Consultation request modal** with a simple form capturing business name, email, and message. Submissions are currently simulated for demonstration purposes.

### Visual Design

- **Single-color palette** using #915F6D as the primary accent, creating a unified, professional appearance across both light and dark themes.

- **Typography pairing** with Montserrat for body text (clean, geometric), Roboto for headings (bold contrast), Georgia for numbers (elegant touch), and Russo One for the hero's vertical text (distinctive visual interest).

- **Theme-aware images** that switch between light (`joy.png`) and dark (`joyNude.png`) versions when the theme toggles, ensuring proper contrast in both modes.

- **Matrix background** with 16×16 grid, 4px gaps, randomized borders (60% chance), and colored cells (30% chance) that create visual interest without distracting from content.

### User Experience

- **Mobile-first responsive design** that scales up for desktop. All components are designed for touch interaction first, with desktop enhancements added via breakpoints.

- **Touch-friendly interactions** with swipe gestures for the carousel, tap targets meeting the 44×44 pixel minimum, and visual feedback for all interactive elements.

- **Accessibility features** including semantic HTML, screen reader support with `sr-only` classes, `aria-label` attributes, and `role="presentation"` for decorative images.

- **Smooth animations** using Framer Motion for scroll-based transforms and carousel transitions, optimized to use CSS transforms for performance.

---

## Architecture Overview

### Frontend Architecture

The frontend is built with React 18 and TypeScript, using Vite 5 for fast development and optimized builds. Tailwind CSS 3 provides styling with aggressive purging to keep bundle sizes minimal.

Component organization follows a clear separation of concerns:

```tsx
// Section components handle layout and data
const Hero = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 500], [1, 0])
  return <motion.div style={{ opacity }}>...</motion.div>
}

// UI components are reusable and isolated
const Button = ({ children, variant, ...props }) => {
  return <button className={`btn-${variant}`}>{children}</button>
}
```

State management is layered appropriately, with section-specific state in components, theme state persisted in localStorage, and UI state handled by local React state. This separation ensures predictable behavior and maintainable code.

### Theme System

The dark mode implementation uses Tailwind's dark variant with a `dark` class on the `html` element. The theme toggle updates this class and saves the preference to localStorage. Images respond to theme changes through a MutationObserver that watches for class changes on the document element.

```tsx
// Theme detection and persistence
const [isDark, setIsDark] = useState(false)

useEffect(() => {
  const observer = new MutationObserver(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  })
  observer.observe(document.documentElement, { attributes: true })
  return () => observer.disconnect()
}, [])

const imageSrc = isDark ? '/images/joyDark.png' : '/images/joy.png'
```

### Matrix Background Generation

The matrix is generated once using `useMemo` to prevent expensive recalculations. Each cell has randomized properties:

```tsx
const gridCells = useMemo(() => {
  return Array.from({ length: cols * rows }).map((_, index) => {
    const opacity = minOpacity + (distance * (maxOpacity - minOpacity))
    const hasColor = pseudoRandom(index) < coloredCells
    const hasBorder = pseudoRandom(index + 1000) < borderChance
    const isZeroOpacity = pseudoRandom(index + 2000) < zeroOpacityChance

    return { opacity: isZeroOpacity ? 0 : opacity, hasColor, hasBorder }
  })
}, [cols, rows, minOpacity, maxOpacity])
```

---

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/Yothabo/joy-sithole-portfolio.git
cd joy-sithole-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will be available at http://localhost:5173.

### Production Build

```bash
# Create optimized production build
npm run build

# Preview the build locally
npm run preview
```

The production build will be output to the `dist/` directory.

---

## Documentation

| Document | Description |
|---|---|
| Internal Dossier | Termux-first architecture deep dive, development constraints, and mobile optimizations |
| Design Decisions | Color palette, typography, component architecture, and performance considerations |
| Changelog | Version history and release notes |

---

## Technology Stack

### Frontend

| Technology | Purpose |
|---|---|
| React 18 | UI library with functional components and hooks |
| TypeScript | Type safety with strict mode enabled |
| Vite 5 | Build tool with fast HMR and optimized production builds |
| Tailwind CSS 3 | Utility-first styling with responsive design |
| Framer Motion | Animation library for scroll-based transforms and transitions |
| React Icons | Icon library for social media and contact icons |
| Headless UI | Accessible UI components for modals and carousels |

### Development Tools

| Tool | Purpose |
|---|---|
| ESLint | Code linting with TypeScript support |
| Prettier | Code formatting with Tailwind plugin |
| Git | Version control |
| Termux | Primary development environment on Android |

### DevOps & Infrastructure

| Service | Purpose |
|---|---|
| Netlify | Hosting with continuous deployment |
| GitHub | Source control and collaboration |

---

## Deployment

### Netlify (Recommended)

```bash
# Build the project
npm run build

# Deploy using Netlify CLI
netlify deploy --prod --dir=dist
```

Alternatively, connect your GitHub repository to Netlify for automatic deployments on push.

### Environment Variables

No environment variables are required for the portfolio, as all content is static and client-side. The consultation form is currently a demonstration and does not send data to a backend.

---

## Design Philosophy

### Termux-First Development

This portfolio was developed entirely on an Android device using Termux, which imposed constraints that ultimately made the production system more robust:

- **Memory limitations** encouraged efficient code splitting and minimal dependencies. The project uses Vite for fast builds on ARM processors and avoids heavy development tools that would consume excessive memory.
- **Storage constraints** mandated minimal node_modules footprint and efficient asset management. Images are optimized with responsive sizing and WebP formats where possible, and the matrix background uses CSS grid instead of canvas to avoid additional JavaScript overhead.
- **Mobile-first design** ensures the site performs well on all devices. Every component was designed on a small screen first, with desktop enhancements added progressively through Tailwind's responsive prefixes.
- **Touch-friendly interactions** prioritize finger-friendly tap targets and swipe gestures. The testimonial carousel supports swipe navigation, and all interactive elements exceed the recommended 44×44 pixel minimum for touch targets.

### Mobile-First Design Principles

- Default styles target mobile devices, with desktop enhancements added via `md:` and `lg:` breakpoints
- Touch targets are at least 44×44 pixels for all interactive elements
- Viewport units (`vw`, `vh`) ensure proper scaling across devices
- Gestures like swipe are supported for natural mobile navigation
- Performance budgets keep the initial bundle under 300KB gzipped

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Joy Sithole

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## Contact

- **Portfolio:** https://joynoku.netlify.app
- **Email:** Joynokusithole@gmail.com
- **Phone:** +27 79 555 4738
- **GitHub:** Yothabo/joy-sithole-portfolio

---

*Built on Termux. Designed for mobile. Developed anywhere.*


