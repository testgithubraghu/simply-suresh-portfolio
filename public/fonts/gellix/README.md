# Gellix webfonts

The Simply Suresh site uses **Gellix** (licensed, Displaay Type Foundry) as its
primary typeface, following the Ondo Finance design system.

The licensed files are **not** committed to this repository. To activate them:

1. Obtain licensed `woff2` files for Gellix Regular (400), Medium (500),
   SemiBold (600) and Bold (700).
2. Place them in this directory as:
   - `Gellix-Regular.woff2`
   - `Gellix-Medium.woff2`
   - `Gellix-SemiBold.woff2`
   - `Gellix-Bold.woff2`
3. In `src/app/globals.css`, extend each `@font-face` `src` for the matching
   weight with e.g. `url("/fonts/gellix/Gellix-Regular.woff2") format("woff2")`.

Until the files are supplied, the `@font-face` rules resolve through `local()`
only and the stack falls through to the documented interim typeface
**Manrope Variable** (`/fonts/fallback/`). The fallback is never presented or
labelled as Gellix anywhere in the product.
