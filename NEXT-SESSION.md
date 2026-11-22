# Brief for the next session (updated 23 Nov 2026, session close-out)

**New rules this session (CLAUDE.md):** fail twice → `pending.md`, move on · chief-of-staff growth mandate, plan in `PHASE4-PLAN.md`. Blocked items: `pending.md` P1–P10.

## Start
1. Run Opus as the main session (`/model opus`) and set the mode dropdown to **Auto**.
2. Repos. **Both must be attached when the session starts.** If VflWebsite is missing, run `add_repo` right away; don't work without it.
   - `erpvarsha-star/website`, branch `ccr-6409486e-3vy613`: plans, facts, logs, drafts and scripts.
   - `erpvarsha-star/VflWebsite`, branch `main`: live site code. **A push to main auto-publishes the live site.** Attach it with `add_repo` (owner erpvarsha-star, repo VflWebsite, access push) and clone it to /home/user/vflwebsite.
3. Read, in this order: `CLAUDE.md` → `website.md` (HANDOVER) → `pending.md` → `PHASE4-PLAN.md` → `PHASE3-PLAN.md` (Status table) → `FACTS.md` → `BRAND.md` → `W6-DESIGN.md` (bundler line-length + collapse/SSR lessons) → `baseline/w5-verify.md`.

## Where things stand (23 Nov 2026)
- **W6 is DONE and verified live.** All 3 approved content-drafts render via Velo on 10 pages; served no-JS HTML shows 1 visible H1 per page, 0 DNP hits, 656–1,678 words per touched page. See `W6-DESIGN.md`.
- W5/W7 corrections remain live and clean except the Wix FAQ-app answers below.
- Auto-publish works (secret `WIXKEY`, rotated 23 Nov; Actions green).
- Sited findings 2 (thin pages) and 8 (EV H1) are closed by W6. Findings 5 and 6 were closed earlier at schema level.

## Do next, in order

### 0. Check `pending.md` first
Blocked items P1–P10 with unblock conditions. Retry only when unblocked (content API key, or Yash Editor work). Then execute `PHASE4-PLAN.md` sprint 1→4.

### 1. FAQ-app corrections (the only remaining on-site fact conflicts)
Re-query ALL FAQ entries first (a fix was started and stopped once before). Known conflicts and their replacements:

| Page | Current (wrong) | Replace with |
|---|---|---|
| /forging-manufacturer-pune | "over 60 CNC turning centers, 17 VMCs…" | "a large in-house CNC machining capacity with turning, milling and drilling across shifts" (no counts) |
| /forging-company-aurangabad | "0.5 kg … up to 50 kg" | "1 kg to 25 kg" |
| railways FAQ | "Charpy … tested at −40 °C" | remove the Charpy sentence; keep "tested per customer specification" |
| /forging-company-maharashtra | "hot forging, warm forging, cold forging" | "hot closed-die forging" (we do not offer warm or cold forging) |
| /electric-vehicles | "closed-die hot and warm forging" | "closed-die hot forging" |

Gate: no-JS ssr-check reports "60 CNC" 0, "0.5 kg" 0, "Charpy" 0, "warm forging" 0, "cold forging" 0.
**Channel:** needs a Wix API key with FAQ permissions (the current WIXKEY only covers CLI publish). If Yash cannot grant that, hand him the table above as a 5-minute FAQ-app click-list.

### 2. W8 — SEO for changed pages (same API-channel question)
- Refresh titles/meta/descriptions for the 10 W6 pages via the SEO tags API, one page per call, ≤3,600 chars JSON-LD.
- Sited quick wins that are API-doable: confirm schema on /about-1-1, /product, /electric-vehicles, /tool-manufactring after the W6 content changes.
- sameAs: the LinkedIn company page is already live in the homepage Organization schema (done 22 Nov, reviewer-verified). More verified profiles (IndiaMART, trade directories) would strengthen Brand Authority further — optional; only add real URLs Yash confirms.

### 3. Editor-only items for Yash (batch these into one ask)
- /product, /transmission-and-driveline, /electric-mobility have no body Text elements — Velo cannot inject content there. Needs a Text element added in the Editor (then Velo can fill it), or direct Editor authoring.
- Visible publication date (/assembly-services, /forging-company-aurangabad, /company-profile) and visible byline (/assembly-services).
- CSP header: Wix platform setting — confirm with Wix support.
- F10 social icons point to Wix's own Facebook/Instagram.

### 4. Tell Yash to run Sited
New pages are live and verified. The ideal moment is after step 1 lands; if the FAQ channel stalls, tell him to run it now and expect the FAQ residues to show.

## Hard-won lessons (do not relearn)
- **Wix bundler rejects very long single lines** (~44 KB one-line JSON fails with a parse error even though node/eslint pass). Keep public-module lines < ~6 KB; split big payloads into per-page modules.
- **`element.collapse()` does not affect SSR markup.** For "one H1 per page" in served HTML, rewrite the tag (demoteH1 / stripEmptyH1), never collapse.
- A rich-text element can contain several H1 tags; strip `<script>` blocks before counting H1s in raw HTML (the serialized page JSON double-counts).
- curl to www.varshaforgings.com works for no-JS verification; cache-bust with `?nc=N`.

## Tools and gates
- Use Firecrawl scrape with maxAge 0 and waitFor 20000 when JS rendering is needed; curl is enough for SSR checks.
- Embed content is generated with `scripts/build-embed-modules.js`, which is idempotent; its rule source is `corrections/rules-src/`.
- Rollback: reset VflWebsite main to the previous commit and push. That auto-publishes the rollback.
