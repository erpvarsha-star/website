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
- **P8/P9/P10 CLOSED (verified live, not just agent self-report):** P8 (visible date/byline) is live and correct on all 3 pages — confirmed by independent Firecrawl re-check, including a self-caught footer-nav regression that got fixed with a `requireTag` discriminator in `w6content.js`. P9 (social icons) is confirmed genuinely Editor-only — they're Wix's native Social Bar widget, outside `$w()`'s reach; the attempted Velo fix was reverted (harmless no-op). P10 (CSP) confirmed Wix Studio Enterprise-only via the Wix Help Center — not a support ticket, a paid-upgrade decision; parked pending Yash's go-ahead on cost. See `pending.md` for exact text/status on each.
- **Two threads on this account were pushing to Wix concurrently this session** (one doing blog/growth-research/city-rename work, one doing P8/P9 work) — Yash confirmed this is expected/fine, not a conflict to avoid. It did cause 3 git merge conflicts on PR #1 (all in shared log files, no code collision, all resolved cleanly). Still worth knowing: if a new session hits a PR merge-conflict notification on this repo, it's very likely this same pattern — just merge the base branch in, same as before.

## Blog API lessons (hard-won, do not relearn)
- Wix **ignores the requested slug** — live slug is title-derived. Match posts by **TITLE** for idempotency.
- Publish returns a **bare 200** with no post object — verify by curling the live site.
- **Never pass `language`** on draft-posts (e.g. 'es') — the post publishes invisibly. Omit it; the site default works for all content.
- Wix **reuses the draft id for the published post** — any draft purge must skip ids present in the posts inventory.
- New posts may serve body client-side only at first (curl shows shell; headless browser shows all). Don't mistake that for a failed publish.

## First: P14 (city-rename SEO tags not rendering) — re-confirmed live 26 Nov
Independently re-checked `/forging-company-aurangabad`: body text is fully renamed to "Chhatrapati Sambhajinagar (Aurangabad)" but the SEO `<title>`/meta/og tags still serve the bare old name. P11 also re-confirmed live on the same page: one FAQ answer ("What primary forging equipment is installed at Varsha Forgings' Aurangabad facility?") and the FAQ category heading ("FORGING COMPANY IN AURANGABAD") are still bare — both are legacy-FAQ-widget content, same store as P4b, not fixable by API. See `pending.md` P14 for the GET/republish steps and P11 for Yash's exact replacement text.

## Do next, in order
1. **Yash queue (all in pending.md, exact text given):** P4b (5-min FAQ edit) → P11 (FAQ-app edits, same visit as P4b) → P9 (2 min, unlink FB/IG icons + WhatsApp link) → run Sited → P7 Editor batch (3 empty-body pages need Text elements) → Sprint-2 profiles (IndiaMART/TradeIndia/Kompass/ThomasNet/GBP from `offsite-profiles-DRAFT.md`) → Apollo/Lusha approval for lead-gen emails → P10 Enterprise-upgrade go/no-go.
2. **Claude queue:** P14 (GET the 10 items' live tags, diagnose why the apply didn't render, republish, verify) → P12 (shorten the 3 over-length titles) → P13 (off-site/Wix-internal strings, see `AURANGABAD-RENAME-PLAN.md`) → build L1 /tie-rod-end-forgings and L2 /railway-forgings-rdso drafts (GROWTH-RESEARCH Part 1) → keep the blog engine fed from B1–B10 → DE page goes live after native review.
3. KPIs vs the 81/0% Sited baseline per `PHASE4-PLAN.md`.
