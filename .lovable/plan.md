## Problém

Na homepage (`src/routes/index.tsx`) má karta 8bites hardcoded video (`8bites-8.mp4`), preto sa zmena `cover` v `src/data/projects.ts` neprejavila — homepage si ťahá obrázky vlastným importom, nie z `projects.ts`.

## Riešenie

V `src/routes/index.tsx`:
1. Nahradiť import `eightBites8 from "@/assets/projects/8bites-8.mp4"` za import nového cover obrázka `8bites-cover.jpeg`.
2. V `projectsBottom` zmeniť `img: eightBites8` na nový cover.

Tým bude karta 8bites na homepage zobrazovať rovnaký obrázok (laptop medzi skalami) ako na `/projects` a ako prvý obrázok na detaile.
