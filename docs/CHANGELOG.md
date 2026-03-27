# Changelog

All notable changes to the Joy Sithole Portfolio project will be documented in this file.

---

## [1.0.0] - 2026-03-26

### Added
- Initial release of the portfolio website
- Hero section with scroll-responsive image and vertical text animation
- Philosophy section outlining services offered
- About section with international experience
- Strengths section with professional qualities
- Tools section with platform expertise
- Testimonials carousel with swipe gestures and auto-play
- Pricing section with hourly rates by region
- Footer with social icons and legal disclaimer
- Dark mode toggle with persistent preference
- Matrix background with randomized cells
- Consultation request modal
- Screen reader accessibility features

### Changed
- N/A (initial release)

### Fixed
- N/A (initial release)

### Security
- All images have proper `alt` attributes
- Form fields have appropriate labels and ARIA attributes
- No external dependencies with known vulnerabilities

---

## [1.0.0] Technical Details - 2026-03-26

### Frontend

| Package | Version |
|---|---|
| React | 18.3.1 |
| TypeScript | (strict mode) |
| Vite | 5.4.21 |
| Tailwind CSS | 3.4.17 |
| Framer Motion | 11.18.2 |
| Headless UI | 2.2.0 |

### Performance

| Metric | Value |
|---|---|
| Initial bundle size | ~280KB gzipped |
| CSS bundle | ~14KB gzipped |
| Largest image | 85KB (joy.png) |
| Time to interactive | <2 seconds on mid-range Android |

### Development Environment

- Built entirely on Android using Termux
- Vim/Neovim for code editing
- Git for version control
- Netlify for deployment

---

### Known Limitations

- Consultation form does not currently send data to a backend (simulated submission)
- File sharing not implemented (portfolio-only site)
- No analytics tracking to maintain privacy

### Future Roadmap

- Add WebP image formats with fallbacks
- Implement actual form submission service
- Add service worker for offline capability
- Enhance animation performance on low-end devices

