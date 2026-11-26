# Brief for the next session (updated 23 Nov 2026, final close-out — start the NEW session from here)

**Standing rules (CLAUDE.md):** fail twice → `pending.md`, move on · chief-of-staff growth mandate, plan in `PHASE4-PLAN.md` · `pending.md` is owned by the site-fix workstream (Claude Code updates it for P10 etc.) — do not rewrite it from chat sessions.

**Branch note:** sessions get a fresh branch name each time — check `CLAUDE.md`'s "Git Development Branch Requirements" for the current one; don't assume the name below is still right.

## Start
1. Repos (both):
   - `erpvarsha-star/website`, branch per `CLAUDE.md`: plans, facts, logs, drafts.
   - `erpvarsha-star/VflWebsite`, branch `main`: live site code + ops. **Every push to main auto-publishes.**
2. Read, in this order: `CLAUDE.md` → `website.md` (HANDOVER) → `pending.md` → `PHASE4-PLAN.md` → `GROWTH-RESEARCH.md` → `WEEKLY-RHYTHM.md` → `FACTS.md`.

## Where things stand (23 Nov 2026, final)
- **Site fixes W5–W8: DONE and verified.** FAQ DB 500/500 clean; SEO tags live (og:image ×5, trimmed title, short desc). Only residue: P4b legacy-FAQ-widget sentence on /forging-company-maharashtra — Yash dashboard edit, 5 min (steps in `pending.md`).
- **Content-ops pipeline:** `content-ops.yml` + `ops/run.js` (v6f) on VflWebsite — FAQ gate/fix, SEO fixes, **idempotent blog publishing** (payload posts in `ops/payloads/blog-posts.json`). Results in `ops/results/`.
- **Blog (4 live posts):** /post/precision-forging-cost-what-drives-the-price · /post/how-to-source-closed-die-forgings-from-india-a-buyer-s-guide · /post/a-proven-indian-forging-partner-for-german-and-european-manufacturers (L3 EN) · /post/cómo-comprar-piezas-forjadas-en-india-guía-para-compradores-europeos-2 (ES). DE version drafted (`content-drafts/DE-buyers-guide-DRAFT.md`), held for native-speaker review.
- **Growth research:** `GROWTH-RESEARCH.md` — 8 landing pages (L1–L8), 10 blog topics (B1–B10), 8 GEO prompt targets.
- **Weekly agents:** 6 scheduled (Mon–Sat 09:00 IST): KPI/site-health · LinkedIn ×2 · lead-gen · GEO/competitors · blog engine. See `WEEKLY-RHYTHM.md`.
- **P9/P10 retested this session (separate concurrent thread, same account):** P10 (CSP) confirmed Wix Studio Enterprise-only via Wix Help Center — not a support ticket, a paid-upgrade decision; parked pending Yash's go-ahead on cost. P8 (visible date/byline) and P9 (social icons — no real FB/Instagram, so unlink rather than relink; WhatsApp click-to-chat added via wa.me/918411000551) were re-tested via the same Velo channel that shipped W5/W6, since the "Editor-only" call predated that capability — executor pushed `VflWebsite` commits 08c0556 (P9) and 8e094fb (P8); **verify these live before trusting them done**, since the report from that run hadn't landed when this file was written. Check `website.md`'s latest log entry for the outcome.
- **⚠️ Two threads were pushing to Wix concurrently this session** (same account, apparently two client surfaces open at once — one doing blog/growth-research/ops work, one doing P8/P9/masterPage.js work). No file-level collision found, but this breaks the "one Wix writer at a time" rule in spirit. If you're starting a new session, check whether another thread on this account is still active before writing to Wix, and flag it to Yash — running two AI threads against the same live site at once is a real risk even when nothing visibly broke this time.

## Blog API lessons (hard-won, do not relearn)
- Wix **ignores the requested slug** — live slug is title-derived. Match posts by **TITLE** for idempotency.
- Publish returns a **bare 200** with no post object — verify by curling the live site.
- **Never pass `language`** on draft-posts (e.g. 'es') — the post publishes invisibly. Omit it; the site default works for all content.
- Wix **reuses the draft id for the published post** — any draft purge must skip ids present in the posts inventory.
- New posts may serve body client-side only at first (curl shows shell; headless browser shows all). Don't mistake that for a failed publish.

## First: P14 (city-rename SEO tags not rendering)
See pending.md P14: GET the 10 items, then republish with a src/ comment bump, then verify live.

## Do next, in order
1. **Yash queue:** P4b (5-min FAQ edit) → run Sited → P7 Editor batch (static L3/L1/L2/L6 pages need Text elements) → Sprint-2 profiles (IndiaMART/TradeIndia/Kompass/ThomasNet/GBP from `offsite-profiles-DRAFT.md`) → Apollo/Lusha approval for lead-gen emails → P10 Enterprise-upgrade go/no-go.
2. **Next session work:** build L1 /tie-rod-end-forgings and L2 /railway-forgings-rdso drafts (GROWTH-RESEARCH Part 1); keep the blog engine fed from B1–B10; DE page goes live after native review.
3. KPIs vs the 81/0% Sited baseline per `PHASE4-PLAN.md`.
