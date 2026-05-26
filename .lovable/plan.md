## Add video to Villa Potôn project

1. Copy uploaded `vp_video.mp4` → `src/assets/projects/villa-poton.mp4`.
2. In `src/data/projects.ts`:
   - Add import `villaPotonVideo from "@/assets/projects/villa-poton.mp4"`.
   - Set Villa Potôn `cover: villaPotonVideo` (card on /projects will use existing video detection and autoplay it).
   - Prepend the video to the `gallery` array so it appears on the project detail page.

No changes needed in `projects.index.tsx` or `projects.$slug.tsx` — both already detect `.mp4` and render a muted, autoplay, looping `<video>`.