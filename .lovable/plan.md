## Čo sa stalo

Detail projektu nezmizol — súbor `src/routes/projects.$slug.tsx` v projekte stále existuje a je registrovaný v route tree. Problém je v naming konvencii TanStack Router:

- `src/routes/projects.tsx` → ROUTE `/projects` (listing) — **a zároveň layout pre child routes**
- `src/routes/projects.$slug.tsx` → child route `/projects/$slug`

Pretože `projects.tsx` je rodič pre `projects.$slug.tsx`, musí vo svojej komponente vyrenderovať `<Outlet />`, kde sa zobrazí detail. Aktuálne `projects.tsx` `<Outlet />` neobsahuje — renderuje len grid 6 projektov. Výsledok: keď klikneš na projekt a otvorí sa `/projects/aurean-journeys`, matchne sa rodičovský `/projects` layout, ten nevyrenderuje žiadny outlet, takže detail nie je vidno (vidíš stále listing alebo prázdno).

## Riešenie

Premenovať listing tak, aby nebol rodič pre `$slug`:

- `src/routes/projects.tsx` → `src/routes/projects.index.tsx`

Vďaka tomu:
- `/projects` (listing) a `/projects/$slug` (detail) budú **dve samostatné súrodenecké routes**, nie parent + child
- listing sa už nemusí starať o `<Outlet />`
- detail projektu sa otvorí presne ako pred tým

Obsah súboru sa nemení — len cesta a `createFileRoute("/projects")` ostáva, ale plugin ho zaregistruje ako index route bez child layoutu.

## Súbory

- premenovať `src/routes/projects.tsx` → `src/routes/projects.index.tsx`
- `src/routeTree.gen.ts` sa pregeneruje automaticky pluginom

Po tejto zmene kliknutie na projekt v Latest work aj v `/projects` opäť otvorí detail projektu so všetkými fotkami a info stĺpcom.