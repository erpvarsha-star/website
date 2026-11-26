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

## START HERE (end of 26 Nov session 3)
1. Follow the model rule strictly: Opus briefs only; executor (Sonnet) does; **reviewer (Haiku) verifies** — Opus never scrapes/greps itself.
2. Verify the in-progress internal-links release (see website.md HANDOVER) via `reviewer`; revert if broken.
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
