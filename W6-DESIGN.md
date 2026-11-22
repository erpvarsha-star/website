# W6 — approved content-drafts live via Velo (design note)

Status: **live and verified 2026-11-23** (all 10 pages, SSR, no-JS curl).

## What shipped

The 3 approved content-drafts (7 rewrites + homepage additions + 2 new page bodies)
are rendered on the live site by Velo page code at request time, so the content is
in the server-side HTML (AI crawlers and no-JS clients see it).

## Architecture

- `src/public/w6content.js` — brand-styled block renderer + `applyW6Content($w, ops)`.
  Imports the per-page ops from the `w6ops-*.js` modules and re-exports the merged
  `W6_OPS`. Pages import only from `w6content.js` (unchanged page contract).
- `src/public/w6ops-data.js` — ops for plew4 (home), l95rc (about-1), mfcwu (v-link).
- `src/public/w6ops-<page>.js` — one module per remaining page
  (kihd6, slfrq, akw9j, uqck0, owlox, i5dze, kvzzx).
- 10 page files (`src/pages/*.js`) call `applyW6Content($w, W6_OPS['<pageId>'])`
  inside `onReady`, after the W5 corrections call, wrapped in try/catch.

**Why the split:** the Wix bundler fails with a parse error on a single ~44 KB
line (the original one-line `W6_OPS` JSON). Node and eslint accept it; Wix does
not. Splitting into one small module per page keeps every line < ~6 KB.
**Lesson for future public modules: keep individual lines short.**

## Op types

- `{find, set}` — replace the html of the Text element whose visible text starts
  with `find`. Used for title/H1 rewrites and full-body replacements.
- `{find, append}` — append rendered blocks after the matched element, behind a
  hidden `<p class="w6-injected">` marker (idempotency guard).
- `{demoteH1: [texts]}` — rewrite `<h1>` to `<h2>` in Text elements whose whole
  visible text matches. Used where a page had multiple H1s.
- `{stripEmptyH1: true}` — remove empty `<h1>` tags *inside* a rich-text element
  (home: the empty H1 lived inside the same element as the main H1, so neither
  collapse nor demote-by-text could reach it).

**`element.collapse()` does not affect SSR markup** — it only hides client-side.
For "one H1 per page" in served HTML, rewrite the tag (demote/strip), never collapse.

## Pages touched (all verified: 1 visible H1, 0 DNP hits)

| Page | URL | Change | Words after |
|---|---|---|---|
| home | / | +2 H2 sections, empty H1 stripped | 656 |
| about-1 | /about-1 | full closed-die rewrite, dup H1 demoted | 725 |
| contact-us-1 | /contact-us-1 | H1 + full contact/RFQ content | 998 |
| about-1-1 | /about-1-1 | hub expansion, 2 H1s demoted | 1021 |
| tool-manufactring | /tool-manufactring | die-shop expansion | 1678 |
| alloy-steel-forgings | /alloy-steel-forgings | H1 + full draft | 1090 |
| forged-machined-components-vf | /forged-machined-components-vf | H1 + full draft | 781 |
| steering-suspension-components | /steering-suspension-components | H1 + wrong article replaced | 1365 |
| electric-vehicles | /electric-vehicles | full EV draft (was 148 words, no H1) | 828 |
| v-link-assemblies | /v-link-assemblies | "Applications" H1 demoted | 912 |

## Brand

All injected HTML follows BRAND.md: H1 42px centred #ED8019; H2 15px rubik-medium
#ED8019 ls 0.01em; body 14px rubik-light #595959 justified 1.6em; no other colours.

## Revert

Delete the W6 import + call from the 10 page files (or revert to the commit before
the W6 merge) and push; publish runs on push to main.
