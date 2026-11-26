# Rename: Aurangabad → Chhatrapati Sambhajinagar (Aurangabad)
Owner request 26 Nov 2026. Rules are in FACTS.md: full form everywhere; "Chh. Sambhajinagar (Aurangabad)" only where space is tight; URL `/forging-company-aurangabad` kept. **Status: PLAN, waiting for owner GO.**

## Audit summary (Haiku reviewer, 26 Nov, 55 live pages, Firecrawl maxAge 0)
| Channel | Live hits | Notes |
|---|---|---|
| Footer, every page (master page) | 110 (2 strings × 55) | "Forging & Machining Division, Aurangabad Plant"; address "…Chhatrapati Sambhajinagar(Aurangabad) - 431136" (missing space) |
| Body text served by our Velo code (`w6ops-*.js`, corrected embeds) | 28 nodes on ~15 pages | e.g. homepage "The Aurangabad plant at MIDC Waluj…", /alloy-steel-forgings H1 "…from Aurangabad, India" |
| Body text set in the Editor (no repo source) | ~25 nodes | e.g. /forging-company-aurangabad "the Aurangabad plant is engineered for…", contact "MIDC Waluj, Aurangabad - 431136" |
| FAQ answers (widget not yet identified) | 7 | Aurangabad, Maharashtra, buying-from-india and steering pages |
| SEO tags (titles, meta, og, JSON-LD) | 54 on 10 pages | includes homepage schema `addressLocality: "Aurangabad"` (conflicts with FACTS) |
| Blog posts | 3 | EN, DE and ES European buyer's guides |
| Page attributes (title / aria-label) | 2 | contact page |
| Not visible (Wix page registry, page name) | 264 | internal, no SEO effect |
| Off-site | not measured | Google Business Profile, LinkedIn, IndiaMART/TradeIndia etc. |
New name already live in 84 places (partly renamed).

## Plan: one release, 5 steps, run in order (one Wix writer)
| # | Step | Channel / agent | Covers | Gate |
|---|---|---|---|---|
| 1 | **Source edits:** replace the city name in every live-content source: `w6ops-*.js`, `embeds/corrected/*` → regenerate modules, `ops/run.js` constants, blog payloads, drafts | Sonnet executor, VflWebsite branch `rename-csn` | 28 Velo nodes + sources | lint clean, generator idempotent, grep shows 0 bare "Aurangabad" in content sources |
| 2 | **Server-side safety rule** in `corrections-rules.js` (runs on every page incl. master page): bare "Aurangabad" → "Chhatrapati Sambhajinagar (Aurangabad)"; fix "Sambhajinagar(Aurangabad)" spacing; uppercase variant; never touches URLs, never double-wraps | same branch | Footer (110) + ~25 Editor-set nodes, without Editor work | unit tests on every audit string; idempotent second pass |
| 3 | **SEO tags** for 10 pages via content-ops (titles short form, meta/og full form, JSON-LD `addressLocality` "Chhatrapati Sambhajinagar (Aurangabad)", FAQ schema text). Slug-based URLs unchanged | content-ops workflow (key stays in GitHub) | 54 | read-back per item |
| 4 | **FAQ + blog:** query FAQ v2 for "Aurangabad", fix via content-ops; update the 3 blog posts via blog API | content-ops | 7 FAQ + 3 blog | read-back; legacy-widget entries (if any) go to the owner list |
| 5 | **Release:** merge `rename-csn` → main (auto-publishes; also makes step 3 SEO tags render). Add the 2 attribute fixes to the browser layer | Opus merges; executor patches embed | everything | Haiku re-scan of all 55 pages + ssr-check: 0 bare "Aurangabad"; no broken links; URL still resolves |

Estimated: one working session. Cost $0. Rollback: revert the main commit (auto-publishes) and re-PATCH the SEO tags from the step-3 backup.

## Owner list (only what no channel reaches)
1. Google Business Profile, LinkedIn company page, directory listings: change the address/plant name to "Chhatrapati Sambhajinagar (Aurangabad)". Claude will give exact text.
2. Any FAQ answer that sits in the legacy FAQ widget (known only after step 4; same as P4b): a dashboard edit with exact text from Claude.
3. Optional: Wix Pages panel page name "Forging Company in Aurangabad" (internal only; not visible, no SEO effect). Can be left.

## Failure protocol
- Rule over-matches (e.g. inside a URL or email): unit tests block the release; post-release scan catches it, then revert.
- Content-ops run fails: nothing published; fix and re-run. Velo release waits so SEO and text ship together.
- Wix renders an element outside Velo's reach: it goes on the owner list with exact text.
