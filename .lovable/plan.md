## Goal

Keep the shared-element animation only when **opening** a project (grid → detail). When going **back** (detail → /projects or /), the new page should appear instantly without any shared cover morph. Make the forward animation perfectly smooth — no jitter, no overshoot, no video reflow stutter.

## Changes

### 1. Detect navigation direction

Track previous pathname in a small client-side store (React ref + listener on `useRouterState`). Derive a flag `isOpeningProject`:

- `true` when previous path is `/` or `/projects` AND current path matches `/projects/$slug`
- `false` in all other cases (including back navigation, navigating to a different section, first load)

### 2. Conditionally enable the shared layout

In `src/routes/__root.tsx`, wrap `<Outlet />` with `AnimatePresence` only when `isOpeningProject` is true. On back navigation, render `<Outlet />` directly so no `popLayout` ghost frame and no layoutId interpolation runs.

On the grid (`src/routes/index.tsx` `ProjectCard` and `src/routes/projects.index.tsx`) and on the detail (`src/routes/projects.$slug.tsx` first gallery item), keep `layoutId={`project-cover-${slug}`}` but only emit it when `isOpeningProject` is true. Otherwise render a plain `<div>` so motion has nothing to match against on back nav.

### 3. Smooth out the forward open animation

- Pin scroll: when a project card is clicked, scroll the window to `0,0` synchronously before navigation so the source and destination rects are measured from the same baseline.
- Lighten the detail page during the transition: render only the first gallery item (the cover) for the first ~650ms, then mount the rest of the gallery. This removes the layout/decoding burden of 10–20 images and videos that currently load simultaneously while the cover is morphing.
- GPU-promote the cover: add `style={{ willChange: "transform", backfaceVisibility: "hidden" }}` to the `motion.div` covers.
- Make the right-column stagger start after the cover lands (≈0.55s) instead of overlapping the layout interpolation.
- Keep the smooth tween (`duration 0.6s`, ease `[0.22, 1, 0.36, 1]`) — no spring, no overshoot.

### 4. Files touched

- `src/routes/__root.tsx` — direction detection, conditional `AnimatePresence`.
- `src/routes/index.tsx` — conditional `layoutId` on `ProjectCard`, scroll-to-top on click.
- `src/routes/projects.index.tsx` — conditional `layoutId`, scroll-to-top on click.
- `src/routes/projects.$slug.tsx` — conditional `layoutId` on first gallery item, deferred mount of remaining gallery items, retimed right-column stagger.

No new dependencies. No design changes outside the transition behavior.

## Out of scope

- Back-navigation animation (intentionally removed).
- Any visual redesign of the cards, detail layout, or copy.
