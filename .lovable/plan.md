Zmena v `src/routes/projects.$slug.tsx`:

1. V DOMe presunúť info stĺpec PRED galériu.
2. Galérii pridať `order-2 md:order-1` — na mobile bude druhá, na desktope prvá (vľavo).
3. Info stĺpcu pridať `order-1 md:order-2` — na mobile bude prvý, na desktope druhý (vpravo).
4. Upraviť/odstrániť `md:sticky md:top-28 md:self-start` z info stĺpca, ak by `order` s tým interagovalo (Tailwind `order` funguje so grid aj flex, sticky zostáva na mieste v poradí).