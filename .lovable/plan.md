# Plán: Homepage podľa studio-terrace.framer.website

Postavím **iba homepage** ako vernú repliku referencie. Ostatné podstránky doplníme neskôr — všetky linky v navigácii a CTA budú zatiaľ smerovať na `/` (placeholder), aby build nepadol.

## Štruktúra stránky (zhora nadol)

1. **Sticky header** — vľavo logo „Studio Terrace" s kosoštvorcovou ikonkou, vpravo nav (Projects, Studio, News, Careers) + oranžové pill CTA „Get in touch" s bodkou.
2. **Hero** — veľa whitespace hore, dole obrovský nadpis „A Digital First Creative Studio" (3 riadky, tight tracking, čierna), vpravo dole malý text „(Since 2010)". Pod nadpisom plnoširoký vizuál: cream/béžové vertikálne pruhy vľavo, oranžová „sun" guľa vpravo (generovaný obrázok).
3. **Intro odstavec** — malý „About us" pill chip + jeden krátky paragraf o štúdiu, v ľavej polovici stránky.
4. **Latest work** — sekcia s nadpisom „Latest work" a tlačidlom „View all projects" vpravo. Grid:
   - Riadok 1: 2 veľké project karty (50/50)
   - Riadok 2: 3 menšie project karty (1/3 každá)
   - Každá karta = obrázok + nad ním malý popis tagov („Art Direction / Web Design") + názov projektu pod obrázkom.
5. **News** — nadpis sekcie + „Read all articles" vpravo. 4 články v jednom riadku (každý 1/4): obrázok hore, titulok, krátky popis.
6. **Footer** — minimalistický s copyrightom (referencia ho má len decentne).

## Technické detaily

- Routing: úprava `src/routes/index.tsx`. Header rozdelený do `src/components/SiteHeader.tsx`, footer `src/components/SiteFooter.tsx`.
- Design tokens v `src/styles.css`: warm off-white background (`oklch` ~ `#FAFAF7`), čierny foreground, oranžový accent (~ `#FF6A1F`) pre CTA a bodky. Pridám tokeny `--accent-orange`, `--surface-cream`.
- Typografia: bezpätkový grotesk podobný originálu — použijem **Inter Tight** (alebo **Geist**) cez `<link>` v `__root.tsx`, very tight tracking pre hero (-0.04em), font-weight 400/500.
- Layout: max-width container ~1440px, generózne padding (`px-6 md:px-10`), tenké horizontálne separátory medzi sekciami (`border-t border-border/50`).
- Responzivita: mobile = jeden stĺpec, projekty/news stackujú; hero font sa zmenší (`clamp`). Bez horizontal scrollu.
- Pill button: `rounded-full bg-[accent-orange] text-white` s malou bielou bodkou vľavo.
- SEO meta v `head()` route — vlastný title/description pre homepage.

## Obrázky (generované)

Všetky uložím do `src/assets/` ako `.jpg` a importnem ESM:

| Súbor | Účel | Prompt (skrátený) |
|---|---|---|
| `hero-sun.jpg` | hero | cream vertical pleated curtain left, glowing orange sun sphere right, soft grain |
| `project-1.jpg` | In-House | abstract art direction mockup, diagonal lines, muted tones |
| `project-2.jpg` | Ora Studio | cinematic dark red portrait UI mockup |
| `project-3.jpg` | Jacob Turner | minimal portfolio website mockup with bold typography |
| `project-4.jpg` | Studio B | dark studio identity mockup |
| `project-5.jpg` | Apex Films | film studio web mockup, dark with grid of stills |
| `news-1.jpg` … `news-4.jpg` | news cards | leather notebook, packaging, awards trophy, market chart — všetko soft editorial photography |

Generujem cez `imagegen` (fast/standard tier), aspect ratio prispôsobený sekcii.

## Čo NEbudem teraz robiť

- Žiadne podstránky (Projects, Studio, News, Careers, Get in touch, project detaily). Iba homepage.
- Žiadny backend (Lovable Cloud), žiadny CMS — content je hardcoded v komponente, ľahko sa neskôr nahradí.
- Žiadne komplexné animácie (scroll parallax, kurzor efekty) — len jemné hover stavy a fade-in, aby to ostalo blízko referencii bez zbytočného „slop".

Po schválení implementujem v jednom prechode a pošlem náhľad.