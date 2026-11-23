# Brief for the next session (updated 23 Nov 2026, Phase 4 Sprint 1/2)

**Branch note:** this session's branch is `ccr-1e875ebc-2tltlt` (not `ccr-6409486e-3vy613` — each session gets a new branch name; check `CLAUDE.md`'s "Git Development Branch Requirements" section for the current one, don't assume the name in this file is still right).

**Since the close-out below:** P4b and P9 confirmed STILL unresolved (live-checked, not just assumed). 2nd blog post published (`/post/how-to-source-closed-die-forgings-from-india-a-buyer-s-guide`) and 3 off-site content drafts committed — see `website.md`'s latest log entry. Next: either push Yash again on P4b/P7–P10, or continue Sprint 2 (he needs to actually create/claim the IndiaMART/TradeIndia/Kompass/ThomasNet/GBP accounts — Claude can't sign up for him) and Sprint 3 (weekly content cadence).


**New rules this session (CLAUDE.md):** fail twice → `pending.md`, move on · chief-of-staff growth mandate, plan in `PHASE4-PLAN.md`. Blocked items: `pending.md` P4b, P7–P10.

## Start
1. Run Opus as the main session (`/model opus`) and set the mode dropdown to **Auto**.
2. Repos. **Both must be attached when the session starts.** If VflWebsite is missing, run `add_repo` right away; don't work without it.
   - `erpvarsha-star/website`, branch `ccr-6409486e-3vy613`: plans, facts, logs, drafts and scripts.
   - `erpvarsha-star/VflWebsite`, branch `main`: live site code. **A push to main auto-publishes the live site.** Attach it with `add_repo` (owner erpvarsha-star, repo VflWebsite, access push) and clone it to /home/user/vflwebsite.
3. Read, in this order: `CLAUDE.md` → `website.md` (HANDOVER) → `pending.md` → `PHASE4-PLAN.md` → `PHASE3-PLAN.md` (Status table) → `FACTS.md` → `BRAND.md` → `W6-DESIGN.md` → `baseline/w5-verify.md`.

## Where things stand (23 Nov 2026, close)
- **W6 DONE and verified live.** 10 pages serve the new copy server-side, 1 visible H1 each, 0 banned terms, 656–1,678 words.
- **FAQ fact contamination DONE at the data layer.** All 500 FAQ v2 entries verified clean (Pune counts, Aurangabad weights, Charpy, EV wording — all fixed). Live gates pass 0 hits on pune/aurangabad/railway/ev.
- **W8 SEO DONE and verified live.** 5 fixes (trimmed V-Link title, short tool-mfg description, og:image ×5) saved via the item-seo-tags API and rendering in served HTML after a forced republish.
- **Content-ops pipeline live:** `content-ops.yml` + `ops/run.js` on VflWebsite run Wix API work through GitHub Actions with `secrets.WIXKEY`; results committed to `ops/results/`. Use this channel for ALL future FAQ/SEO API work.
- **One residue:** /forging-company-maharashtra still serves "warm forging / cold forging" via the **legacy faq-builder widget** (baked copy; DB is clean). Parked as P4b — a 5-minute Yash dashboard edit (exact text in pending.md).
- Auto-publish healthy (secret `WIXKEY`, rotated 23 Nov; runs green).

## Do next, in order

### 0. Check `pending.md` first
P4b (Yash FAQ-app click), P7–P10 (Editor/Wix-support). Retry only when unblocked.

### 1. Tell Yash to run Sited
Everything API-fixable is now live and verified: new pages, corrected old pages, SEO tags. The only expected residue is the Maharashtra FAQ sentence (P4b). If Yash does the P4b dashboard edit first, Sited should come back fully clean.

### 2. Execute `PHASE4-PLAN.md` sprint 1→4
Sprint 1 closes site gaps (P7 pages once Yash adds Text elements); sprint 2 off-site profiles/listicles; sprint 3 content engine; sprint 4 weekly rhythm (LinkedIn, email, lead-gen). Apollo/Lusha (~$50–100/mo) needs his explicit approval before any signup.

### 3. Content-ops channel usage (for any future FAQ/SEO API work)
- Trigger: push a real change to `ops/run.js` or `ops/payloads/**` on VflWebsite main (byte-identical pushes don't trigger — bump a comment), or `workflow_dispatch`.
- Results: read `ops/results/run-<ts>.json` after the run completes.
- SEO writes: always republish the site afterwards and verify with curl — API read-back ≠ live render.

## Hard-won lessons (do not relearn)
- **Wix bundler rejects very long single lines** (~44 KB one-line JSON fails with a parse error even though node/eslint pass). Keep public-module lines < ~6 KB.
- **`element.collapse()` does not affect SSR markup.** Rewrite tags for H1 fixes, never collapse.
- A rich-text element can contain several H1 tags; strip `<script>` blocks before counting H1s in raw HTML.
- **item-seo-tags PATCHes only render after the next site publish.**
- **Empty commits don't fire path-filtered workflows.**
- GitHub MCP token cannot push workflow files (403, no `workflow` scope) — Yash does those via the web UI.
- The legacy faq-builder widget (faq-ooi) serves baked content independent of the FAQ v2 DB; only a dashboard edit re-bakes it. Legacy FAQ API deprecates 2026-12-31 — plan a widget migration.
- curl to www.varshaforgings.com works for no-JS verification; cache-bust with `?nc=N`.

## Tools and gates
- Use Firecrawl scrape with maxAge 0 and waitFor 20000 when JS rendering is needed; curl is enough for SSR checks.
- Embed content is generated with `scripts/build-embed-modules.js`, which is idempotent; its rule source is `corrections/rules-src/`.
- Rollback: reset VflWebsite main to the previous commit and push. That auto-publishes the rollback.
