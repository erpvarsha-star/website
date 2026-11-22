# Phase 3 — Corrections, new content, brand-consistent design (no owner clicks)
Created 22 Nov 2026, after Yash connected Wix to GitHub (`erpvarsha-star/VflWebsite`). Owner action from here: approve spend over $50 and answer fact *conflicts* only.

## Principles
- **Nothing breaks:** every change to the site code passes lint, a staged pilot, and a regression diff against the baseline snapshot (W0) before the next batch goes out.
- **One Wix writer at a time** (site-code pushes, embed PATCHes, SEO PATCHes, blog writes). Drafting and reviewing run in parallel.
- **Models:** Opus plans and dispatches; Sonnet `executor` drafts and writes; Haiku `reviewer` reads and verifies.
- **Facts only from `FACTS.md`; nothing from the DO NOT PUBLISH table.**

## Workstreams
| # | Workstream | Agent | Parallel? | Gate |
|---|---|---|---|---|
| W0 | Baseline snapshot of all sitemap pages (text, links, forms, H1, schema presence) → `baseline/` | Haiku reviewer | Yes, now | File per page committed |
| W1 | Velo route research (HTML-embed reach, element IDs, publish flow) → `VELO-ROUTE.md` | Sonnet | Running | Doc cites Wix docs |
| W2 | Brand kit: logo files/URLs, colours, fonts, spacing, button and heading styles from the live site → `BRAND.md` | Sonnet | Yes, now | Values read from the live site, not invented |
| W3 | Content: finalise the 7 rewrites, F28 thin pages (/alloy-steel-forgings, /forged-machined-components-vf), the wrong article on /steering-suspension-components, and corrected HTML for every flagged embed → `content-drafts/`, `embeds/` | Sonnet | Yes, now | `check-wordcount.sh` + reviewer FACTS check |
| W4 | Velo pilot: footer email fix in `masterPage.js` → push → publish → verify the live page source | Sonnet (sole writer) | After W1 | Raw HTML shows the fix; W0 diff clean |
| W5 | Velo corrections, page by page: machine counts first (DO NOT PUBLISH), then weights, stainless/ASME, hours, typos | Sonnet (sole writer) | After W4 | Per batch: reviewer live check + W0 diff |
| W6 | New content live: the 7 rewrites, thin pages, homepage additions in the W2 brand style | Sonnet (sole writer) | After W5 batch 1 | Reviewer: FACTS, word count, H1, links, visual style vs `BRAND.md` |
| W7 | Retire the browser layer rules that Velo now covers (keep the layer as backup until all Velo work verifies) | Sonnet | After W6 | No visible-text regressions |
| W8 | SEO/schema touch-ups for changed pages; Sited re-run; KPI strip in the weekly task | Sonnet + Haiku | After W6 | Sited score vs 81 baseline |

## Failure protocol (Plan B)
- **A Velo push breaks a page:** revert the commit on `VflWebsite` main and republish. The baseline diff identifies which page broke.
- **Velo can't reach the HTML embeds:** go to W3's corrected HTML for each embed. The fallback is a one-time owner paste (~6 blocks), which needs the owner's agreement first.
- **Publish needs the owner:** one Publish click per batch, batched to at most once a day.
- **A tool or API is down:** the browser correction layer stays live as the interim fix.

## Status (update after every step)
| # | Status | Evidence |
|---|---|---|
| W0 | ✅ Done (9cf3803) | 49 pages in `baseline/INDEX.md`; 2 empty bodies (/transmission-and-driveline, /electric-mobility) |
| W1 | ✅ Done | `VELO-ROUTE.md` (c5e5b9d) |
| W2 | ✅ Done | `BRAND.md` (d37863c) |
| W3 | ✅ Drafted (ce78c18); review 4d2a602: 50/60 PASS; 5 true conflicts fixed (10f5a11; w5-embeds 7f64c4b); drafts PASS (review FAILs were non-conflicts) | 60 embeds, 41 corrected (175 edits) in `embeds/`; F28 drafts pass the word-count gate |
| W4 | ⏳ Pushed `4ed2cab`, awaiting Yash Publish | `baseline/ssr-before.md` |
| W5 | ✅ Prepped on VflWebsite branch `w5-embeds` (7f64c4b); known nit: the build script adds 2 blank lines per page file on each run (fix before merge); lint clean; NOT merged. Blocked on: W4 publish+verify, W3 review | `W5-DEPLOY.md`: 38 embed modules, 41 swaps on 17 pages, text rules in all 56 page files |
| W6–W8 | ⬜ Not started | — |
| Auto-publish | ⬜ Yash to set up | `SETUP-AUTO-PUBLISH.md` |
