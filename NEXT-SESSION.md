# Brief for the next session (updated 26 Nov 2026, end of long session)

**Standing rules (CLAUDE.md):** fail twice → `pending.md`, move on · chief-of-staff growth mandate, plan in `PHASE4-PLAN.md` · `pending.md` is owned by the site-fix workstream (Claude Code updates it for P10 etc.) — do not rewrite it from chat sessions.

**Branch note:** sessions get a fresh branch name each time — check `CLAUDE.md`'s "Git Development Branch Requirements" for the current one; don't assume the name below is still right.

## Start
1. Repos (both):
   - `erpvarsha-star/website`, branch per `CLAUDE.md`: plans, facts, logs, drafts.
   - `erpvarsha-star/VflWebsite`, branch `main`: live site code + ops. **Every push to main auto-publishes.**
2. Read, in this order: `CLAUDE.md` → `website.md` (HANDOVER) → `pending.md` → `PHASE4-PLAN.md` → `GROWTH-RESEARCH.md` → `WEEKLY-RHYTHM.md` → `FACTS.md`.

## Where things stand (26 Nov 2026, end of long session; start a NEW session from here)
- **Site fix workstreams W5-W8, P1-P6, P8, P10, P15: DONE and verified live.** City rename "Chhatrapati Sambhajinagar (Aurangabad)" is live in body, footer, blogs and all 256 FAQ v2 entries. 5 blog posts live (EN x3, ES, DE). Content-ops pipeline (`ops/run.js`, key stays in GitHub) and Velo embed-swap pipeline are the two channels for almost everything.
- **P4b and P11 were misdiagnosed** (no legacy widget; one FAQ app; stale v2 entries since Aug). All FAQ v2 violations fixed; a broad re-scan of all 256 entries now returns 0. **Do not trust a logged "N entries, 0 hits" claim; re-verify by direct API GET.**
- **P15 closed:** `/steering-suspension-components` China matrix was an iframe shared with `/buying-forgings-from-india`; wired to the corrected embed (VflWebsite `0a2c2bd`).
- **Three times this session "Editor-only" was wrong (P8, P4b/P11, P15).** Before parking anything as Editor-only: check raw HTML for `filesusr.com/html/` iframes (embed-swap route), check whether it is FAQ v2 data, check Velo `$w` reach.
- **Genuinely Editor-only / owner-only (exact steps in `pending.md`):** P7 (3 empty-body pages need a Text element each), P9 (Social Bar widget: unlink FB/IG, set WhatsApp to wa.me/918411000551; no real FB/IG accounts exist), P10 (CSP = Wix Studio Enterprise upgrade, owner cost decision), Sprint-2 off-site profiles (IndiaMART, TradeIndia, Kompass, ThomasNet, GBP; drafts in `content-drafts/offsite-profiles-DRAFT.md`), LinkedIn photos, Apollo/Lusha approval (>$50).
- **Open for Claude:** **P14** (renamed SEO title/meta/og/JSON-LD on 10 pages saved correctly but not rendering live after 3 CLI publishes incl. a real `src/` bump; API GET shows the new values; hypotheses "later run reverted" and "needs src change" both ruled out, not CDN delay). Next diagnostic: one Editor-triggered Publish click by Yash to test CLI-vs-Editor publish; else raise with Wix support. **P12** (shorten 3 titles over 65 chars; only after P14 renders), **P13** (off-site address strings; owner list in `AURANGABAD-RENAME-PLAN.md`).
- **Two Claude threads ran in parallel on this account** (Yash confirmed fine). Expect merge-conflict notices on PR #1 in `website.md` log; resolve by merging the base branch in (`ccr-6409486e-3vy613`), keep both log entries.
- **Branches:** website repo work branch `ccr-1e875ebc-2tltlt` (PR #1 into `ccr-6409486e-3vy613`, draft, clean); that repo has no `main`. VflWebsite: push to `main` auto-publishes (publish.yml), one release at a time, verify live after each.
- **Growth plan:** `PHASE4-PLAN.md`, `GROWTH-RESEARCH.md`, `WEEKLY-RHYTHM.md`. Next build items: L1 /tie-rod-end-forgings and L2 /railway-forgings-rdso drafts, blog engine from B1-B10, Sited re-run (baseline 83) once P4b-era fixes are live (they are now).

## Blog API lessons (hard-won, do not relearn)
- Wix **ignores the requested slug** — live slug is title-derived. Match posts by **TITLE** for idempotency.
- Publish returns a **bare 200** with no post object — verify by curling the live site.
- **Never pass `language`** on draft-posts (e.g. 'es') — the post publishes invisibly. Omit it; the site default works for all content.
- Wix **reuses the draft id for the published post** — any draft purge must skip ids present in the posts inventory.
- New posts may serve body client-side only at first (curl shows shell; headless browser shows all). Don't mistake that for a failed publish.

## START HERE (27 Nov 2026, after the final wave)
1. **Done and live (Firecrawl verified):** award captions on /copy-of-articles (Bronze 2018, Gold 2015), "Verified" dropped from the /automotive-steering-powertrain H1, multi-H1 fixed on /rubber-bonded-components (7 -> 1) and /forging-presses-hammers (4 -> 1), repeated paragraph/block/table removed on /forged-components-ev and /about-1-1. See website.md HANDOVER.
2. **Claude next:** reviewer re-verifies the five pages above; P22 redirect/merge job (spec in pending.md; /copy-of-awards is NOT a duplicate; merge content before any redirect); P24 "VFL" company-name text rules; KPI re-check 10 Dec.
3. **Editor-only for Yash:** P23 /forging repeater duplicate bullets, P26 empty headings left after de-duplication, plus the older P19/P20/P9/P13/P10 list.
4. **Lessons:** `collapse()` is not SSR-visible, blank `t.html` instead; Wix gallery captions are item data (`$w('Gallery').items`), not Text; /forging slideshow makes Firecrawl h1 counts vary with waitFor (use 1000 to see slide 1).

## START HERE (26 Nov 2026, after Wave 2)
1. **Done and live:** Wave 1 (llms.txt, sitewide fixes, /alloy-steel-forgings embed) and Wave 2 (ZLD and PPAP FAQ fixes, railway row/heading/RDSO wording, China-free intro, links to /forging-manufacturer-india from 7 pages). See website.md HANDOVER.
2. **Next for Claude:** pending.md W2-1 (two FAQ entries with "PPAP Level 3 documentation"), reviewer re-verify of Wave 2, P19/P20 (Yash Editor), KPI re-check 10 Dec and 24 Dec.
3. **Lesson:** paginate FAQ v2 queries (cursor) before claiming 0 hits; Velo `corrections-rules` entries can silently not match live, so verify with Firecrawl maxAge 0.

## START HERE (end of 27 Nov 02:15 run; superseded)
1. **Closed and reviewer-verified:** QS1, P17, P18, CC, C1-C4 (25 posts), links round 2, FAQPage JSON-LD (21 posts), blog meta descriptions (25/25; rv6 PASS). Nothing in flight.
2. **Claude next:** KPI search re-check 10 Dec and 24 Dec (PHASE4-PLAN.md); LinkedIn batch 2 links for C1-C4 (add 4 posts); next content wave. Do not ask Yash to run Sited.
3. **Open for Yash:** P9 social icons (pending.md), Google Business Profile (does one exist?), P13 off-site address text, LinkedIn batch 2 posting, optional RDSO reference, P10 decision.

## START HERE (27 Nov run 3; superseded)
1. **Reviewer (Haiku) verifies blog meta descriptions live:** `<meta name="description">` present in `<head>` on 3 posts (one EN, ES, DE) and the FAQPage JSON-LD still parses (VflWebsite b5ce3a7; API read-back 25/25 already done).
2. CC, P18, FAQ-LD are closed (reviewer PASS). Nothing else in flight.
3. KPI re-check 10 Dec (PHASE4-PLAN.md), LinkedIn batch 2, GBP walkthrough once Yash answers. Do not ask Yash to run Sited.

## START HERE (27 Nov run 2; superseded)
1. **Reviewer (Haiku) verifies VflWebsite 4fca538 live:** (a) 'Capability claims:' gone on homepage and /forging (bullets and prose intact); (b) /forging has exactly 1 DOM H1 ('Closed-Die Forging for Carbon and Alloy Steel Components'), no empty h1, 'FORGING' now a p; (c) FAQPage JSON-LD present, parseable and Q&A matching visible text on 3 sample posts (e.g. tie-rod-end, forging-vs-casting, L3 Germany), and each sampled post's `<head>` still has title and description (FAQPage was their only seoData tag). Results of the last run: `ops/results/run-2026-11-26T21-00-49-647Z.json`.
2. If (a) or (b) fails: failed twice, Editor delete by Yash (pending.md CC, P18); otherwise close CC and P18.
3. KPI re-check 10 Dec (PHASE4-PLAN.md), LinkedIn batch 2, GBP walkthrough once Yash answers. Do not ask Yash to run Sited.

## START HERE (27 Nov 02:15 run; superseded)
1. **Reviewer (Haiku) verifies VflWebsite 7354946 live:** (a) Related buyer guides block on /about-1, /forging-manufacturer-india, /forging-company-maharashtra, /forging-company-aurangabad, /forging-manufacturer-pune (links resolve, exactly 1 H1 each, no DNP hits); (b) 'Capability claims:' paragraph gone on /quality, homepage, /forging; (c) C1-C4 posts live at the URLs in website.md (27 Nov entry). Revert on any regression.
2. FAQPage JSON-LD for the blog posts (executor).
3. KPI re-check 10 Dec (PHASE4-PLAN.md), then LinkedIn batch 2 help, GBP walkthrough once Yash answers.
4. QS1/P17 attempt 2 reviewer PASS (1 H1). Do not ask Yash to run Sited.

## START HERE (previous, end of 26 Nov session 3; superseded)
**Scheduled restart:** task 'Varsha site work resume 2:15 IST' (trig_01PTT36Du9dsPRy9JdovtZzo) fires a fresh session at 27 Nov 02:15 IST with the full task list. It was created WITHOUT connectors (Firecrawl/Wix) — Yash should add them in claude.ai scheduled tasks, else the reviewer cannot scrape live pages.
**In flight at handover:** executor fixing /quality slide-1 clipped heading (owner phone screenshot) + P17 extra H1s; needs reviewer verification.
1. Follow the model rule strictly: Opus briefs only; executor (Sonnet) does; **reviewer (Haiku) verifies** — Opus never scrapes/greps itself.
2. **Diagnose QS1/P17 (first attempt failed 27 Nov):** VflWebsite aa1e9cb, aab379e, 000d668 are live and green, but the served HTML is unchanged ('Capability claims:' on /quality; 2 DOM H1s there; 23 on /automotive-steering-powertrain). Executor to diagnose: (1) Velo el.html/retag client-only vs SSR (compare Company.plew4.js homepage H6 retag, wixWindow.rendering), (2) onReady error in 'Automotive Steering & Powertrain.tfegr.js', (3) CDN cache. One more attempt; reviewer (Haiku) verifies; if it fails again, move to pending.md as Editor-only. Also 'Capability claims:' on homepage and /forging.
3. Then: LinkedIn batch 2 scheduling help for Yash, GBP walkthrough once Yash answers, KPI re-check 10 Dec.

## Update 26 Nov (session 3)
- Sited 83/100 received; its one finding is already fixed live. **Never ask Yash to run Sited** — he sends results himself.
- P14 re-checked: still not rendering; data layer correct. Waiting on Yash's Editor Publish click; Wix support text ready in `handover/P14-wix-support-repro.md`.
- P13 off-site address text drafted (`content-drafts/P13-offsite-address-strings-DRAFT.md`) for Yash.
- L1 and L2 LIVE as blog posts (verified). B1 drafted and gated: publish next via content-ops (append to VflWebsite ops/payloads/blog-posts.json, no `language` field, avoid BLOG_BANNED words incl. 'stainless'), then B2-B10.

- P14 + P12 CLOSED via Velo SEO override (`src/public/seo-override.js`, generator `ops/tools/gen-seo-override.js`). SEO head of those 11 pages is now owned by Velo — edit via the generator, not the API.
- DONE: P16 (false positive), B1-B10 live. LinkedIn batch 2 ready with real URLs (Yash posts or schedules). Next for Claude: L5-L8 publish, then hub/internal links from service pages to the new posts, then GEO probe of the 8 prompts in GROWTH-RESEARCH Part 3.
- Yash: P9 social icons (steps given in chat 26 Nov), Google Business Profile (ask if one exists), P13 text. Apollo/Lusha parked (recommend not now).

## First: P14 re-check, then the rest
1. Re-scrape `/forging-company-aurangabad?nc=<new>` (Firecrawl maxAge 0). If the `<title>` now says "Chh. Sambhajinagar (Aurangabad)", P14 fixed itself: update pending.md, then do P12. If still bare, ask Yash for the one Editor Publish click, or write up the Wix support repro (API GET new value; 3 CLI publishes later live HTML old).
2. ~~Ask Yash to run Sited~~ — removed by owner, 26 Nov.

## Do next, in order
1. Yash queue: P9 (2 min) -> P7 Editor batch -> Editor Publish click for P14 diagnostic -> Sprint-2 profiles and LinkedIn photos -> Apollo/Lusha yes/no -> P10 cost decision.
2. Claude queue: P14 -> P12 -> P13 -> L1/L2 landing drafts -> blog engine B1-B10 -> KPIs vs Sited baseline in `PHASE4-PLAN.md`.
3. Open question for Yash: the neutral China sentence in `/buying-forgings-from-india` intro and the railway page's vague "long service life" table rows are Editor-only body text; decide if they stay.
