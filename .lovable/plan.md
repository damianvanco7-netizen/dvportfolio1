## Plan

### 1. Add the uploaded video to Velox detail

- Upload `velox video.mp4` to Lovable Assets via the sandbox CLI (no binary committed to the repo). Write the pointer to `src/assets/projects/velox-video.mp4.asset.json`.
- In `src/data/projects.ts`, import the pointer and insert its URL as the **second** entry in the Velox `gallery` array:
  ```
  gallery: [velox, veloxVideo.url, /* future items */]
  ```
- The detail page already auto-detects `.mp4`/`.webm`/`.mov` URLs and renders them as autoplay/muted/loop video, so no component changes are needed.

### 2. Make remaining transitions slower & more seamless

Audit pass to catch the spots that still feel snappy after the previous round:

- **Tailwind hover / state transitions** — bump any leftover `duration-200` / `duration-300` on route files and shared components (e.g. accordion chevron, SiteHeader/SiteFooter links, project arrow chip, logo opacity hover, accordion +/× icon) to `duration-700` and standardize on `ease-out`.
- **Global Motion config** in `src/routes/__root.tsx` — keep the smooth ease `[0.22, 1, 0.36, 1]` and increase the default `duration` from `0.9` → `1.1` so any non-overridden `motion.*` element breathes more.
- **Project detail right-column stagger** in `src/routes/projects.$slug.tsx` — stretch each step's `duration` by ~20% and slightly increase the gaps between heading → button → info → rows → bottom line so the column lands as one flowing reveal instead of discrete pops.
- **Project open shared-layout morph** — bump cover layout `duration` from `0.9` → `1.05` in `index.tsx`, `projects.index.tsx`, and `projects.$slug.tsx` for a more cinematic open. Closing animation stays disabled.
- **Carousels** (References + Logos) — slow the slide tween from `1400ms` → `1800ms` while keeping the 6s / 3s intervals so the motion itself looks gentler. (If you want the logo carousel slower too I'll match it.)
- **Hero entrance** in `index.tsx` — extend the headline/video fade-ins slightly (1.1s → 1.4s on the h1, 1.6s → 2.0s on the video zoom-out) for a calmer first impression.

No structural/layout changes, no new dependencies. Purely timing + the one data addition.

### Files touched

- `src/assets/projects/velox-video.mp4.asset.json` (new, via lovable-assets)
- `src/data/projects.ts`
- `src/routes/__root.tsx`
- `src/routes/index.tsx`
- `src/routes/projects.index.tsx`
- `src/routes/projects.$slug.tsx`
- `src/components/SiteHeader.tsx`, `src/components/SiteFooter.tsx` (only if leftover short durations are found)

### Out of scope

- shadcn/ui component internals (dialog, sheet, sidebar, etc.) — those use their own animation conventions and shouldn't be retimed globally.
- Any visual redesign — only timing/easing changes.
