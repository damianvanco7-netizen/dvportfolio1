## Plan

Add gentle scroll-triggered reveal animations to each major section on the homepage, and finish smoothing the remaining UI transitions so everything feels uniformly slow and silky.

### 1. Scroll-reveal helper

Create a small reusable component `Reveal` in `src/components/Reveal.tsx`:

- Wraps `motion.div` with `initial={{ opacity: 0, y: 32 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, margin: "-10% 0px -10% 0px" }}`.
- Default transition: `duration: 1.0`, `ease: [0.22, 1, 0.36, 1]`, optional `delay` prop.
- Accepts `as`, `className`, `delay`, `y` overrides for flexibility.

This keeps Framer Motion (already a dependency) and avoids new packages.

### 2. Wire reveals into homepage sections (`src/routes/index.tsx`)

Wrap each homepage block in `<Reveal>`:

- **INTRO** — the About headline reveals on enter; the logo carousel reveals with `delay: 0.15`.
- **LATEST WORK** — the section heading reveals first; each `ProjectCard` row reveals with staggered `delay` (`i * 0.1`).
- **SERVICES** — heading reveals; each accordion item reveals with staggered `delay`.
- **REFERENCES** — heading + rating chip reveal together; carousel reveals with small delay.

All thresholds use `viewport={{ once: true, margin: "-10%" }}` so the reveal triggers slightly before the section enters the viewport — no late pop-in, no jank.

### 3. Final smoothing pass

- Increase the global Motion default further from `1.1s` → `1.2s` in `src/routes/__root.tsx` for any non-overridden `motion.*`.
- Bump shared-layout cover morph from `1.05s` → `1.2s` in `index.tsx`, `projects.index.tsx`, `projects.$slug.tsx` for an even more cinematic open.
- Add `prefers-reduced-motion` respect — Framer Motion already honors it via `MotionConfig reducedMotion="user"`. Add that to the root config so accessibility users get instant reveals.
- Audit any leftover `transition` / `duration-150` / fast Tailwind transitions on route files; standardize on `duration-700 ease-out`.

### Files touched

- `src/components/Reveal.tsx` (new)
- `src/routes/index.tsx`
- `src/routes/__root.tsx`
- `src/routes/projects.index.tsx`
- `src/routes/projects.$slug.tsx`

### Out of scope

- Detail page sections (already have their own staggered intro on open).
- Shadcn ui internals.
- Any layout/design changes — only animation/timing.
