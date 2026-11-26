# Pending — failed twice or blocked, do not retry without the listed unblock

Rule (owner instruction, 23 Nov 2026): **if a task fails more than once, stop, log it here, and move to the next task.** Review this file at the start of every session; retry an item only when its unblock condition is met.

## Resolved this session (23 Nov 2026, content-ops pipeline)

| # | Item | Resolution |
|---|---|---|
| P1–P3, P5 | FAQ: Pune machine counts, Aurangabad 0.5–50 kg, railways Charpy, EV "hot and warm forging" | ✅ DONE at the data layer. Full FAQ DB (500 v2 entries) verified clean of all banned patterns via the content-ops workflow. Live no-JS gates pass 0 hits on /forging-manufacturer-pune, /forging-company-aurangabad, /railway, /electric-vehicles. |
| P6 | W8 SEO: titles/meta refresh + og:image on the W6 pages | ✅ DONE and verified live. All 5 fixes saved via `seo-metatags-server/v1/item-seo-tags` and rendering in served HTML after a forced republish (og:image now on all 5 pages; /tool-manufactring serves the new short description). |

## Parked: Maharashtra FAQ widget staleness (P4 remnant)

| # | Item | Why parked | Unblock (Yash, 5 minutes) |
|---|---|---|---|
| P4b | /forging-company-maharashtra FAQ answer still serves "hot forging, warm forging, cold forging, closed-die forging, and precision forging …" (accordion + FAQ JSON-LD) | The FAQ v2 DB is 100% clean (500 entries verified) — the live widget is the **legacy faq-builder app** (faq-ooi), which serves a baked copy it never refreshes. No public API reaches that store (only `/faq/v1/categories` responds; all other legacy paths 404; legacy FAQ API deprecates 2026-12-31). Site republish does not refresh it. Fail-twice rule applied. | Yash: open the **FAQ app** in the Wix dashboard → edit the answer to "What forging processes does Varsha Forgings offer?" → replace with: **"Varsha Forgings provides hot closed-die forging solutions supported by its press and hammer systems."** → Save. This forces the widget to re-bake. Longer term: migrate the widget to the current FAQ app before the legacy API shuts down end of 2026. |

## City rename (26 Nov 2026): items outside every channel Claude controls

| # | Item | Why | Unblock |
|---|---|---|---|
| P11 | **Live FAQ text still naming bare "Aurangabad", not in FAQ v2** (FAQ v2 has 0 hits in 500 entries). Found by live scrape (maxAge 0) on 4 pages, probably the legacy faq-builder widget (same store as P4b) | The FAQ v2 data is clean; these answers are baked in the legacy widget. Velo `applyTextCorrections` only reaches Text elements. | **Step 5 first:** after Opus merges and the site publishes, re-scan. If a string below is still bare, Yash edits it in the FAQ app (same visit as P4b). Exact text below. |

Replacement text for P11 (full form; the 2 "customer audits" answers also take the FACTS-aligned wording that `corrections-rules.js` already applies on text elements, "plant visits after an RFQ"):
1. /forging-company-aurangabad, question: **"What primary forging equipment is installed at Varsha Forgings' Chhatrapati Sambhajinagar (Aurangabad) facility?"** answer: **"The flagship plant houses a high-capacity 2500-ton press, dual 1300-ton press lines, an 800-ton screw press, and 1 MT to 3 MT friction drop hammer systems."**
2. /forging-company-maharashtra, answer to "Are your Maharashtra facilities equipped for in-house heat treatment?": **"Our Chhatrapati Sambhajinagar (Aurangabad) facility features comprehensive in-house heat treatment capabilities, including batch-type and continuous hardening furnaces for normalizing, iso-thermal annealing, and tempering."**
3. /forging-company-maharashtra, strategic-advantage answer: **"The primary forging press shop in MIDC Waluj, Chhatrapati Sambhajinagar (Aurangabad) handles heavy hot closed-die forging, while the Pune (Markal, Khed) facility provides precision CNC machining, sub-assembly, and JIT warehouse staging, delivering a seamless end-to-end supply chain."**
4. /buying-forgings-from-india and /steering-suspension-components (same sentence, 2 places): **"Varsha Forgings welcomes plant visits after an RFQ at both the Chhatrapati Sambhajinagar (Aurangabad), MIDC Waluj and Pune (Markal, Khed) facilities."**
(Re-check 26 Nov after 2 publishes: items 1–4 still bare live, so this is confirmed an owner FAQ-app edit. The JSON-LD FAQ rename is saved but not rendering yet; see P14.)
5. /forging-company-aurangabad, FAQ category heading "FORGING COMPANY IN AURANGABAD" → **"FORGING COMPANY IN CHHATRAPATI SAMBHAJINAGAR (AURANGABAD)"**.

| # | Item | Why | Unblock |
|---|---|---|---|
| P12 | **Titles over 65 characters** after the rename: kihd6 87, dpizt 100, n1h72 98 (short form already used). Titles were over 65 before (66, 79, 76) so Google was truncating already. | The brief said change the city text only. | Opus decision: shorten the tail of those 3 titles (suggested: "Contact Varsha Forgings | MIDC Waluj, Chh. Sambhajinagar (Aurangabad)"; "Forging Company in Chh. Sambhajinagar (Aurangabad) | Varsha Forgings"; "Forging Company in Maharashtra | Chh. Sambhajinagar (Aurangabad) & Pune"). Meta descriptions grew by about 28 characters each (tfegr 285, jo7nt 231, t6wcz 229, dpizt 208) and were already over 160. |
| P14 | **Renamed SEO tags not rendering live (parked, failed twice, 26 Nov)** on 10 pages: titles, meta, og/twitter, JSON-LD incl. homepage `addressLocality` "Aurangabad" (conflicts with FACTS). The content-ops apply run 2026-11-26T12-11-00Z read back the new values, but the live HTML still serves the old ones after 2 publishes (d07e5eb run 45817946397; 78dd6ec run 45819010276, a non-src trigger commit). | Unknown. Hypotheses: (1) a later content-ops run re-PATCHed the old payload values (check ops/results runs after 12:11Z and the API read-back now); (2) the CLI publish skips re-baking SEO when `src/` is unchanged (the W8 fix used a src comment bump). | Next session: (1) GET the 10 items' tags. If reverted, find and fix the payload source, then re-apply via content-ops. (2) Push a harmless `src/` comment bump to main to republish, then curl/Firecrawl. Backup of the pre-rename tags: VflWebsite `ops/results/rename-csn-backup-apply-2026-11-26T12-11-00-412Z.json`. |
| P13 | **Off-site and Wix-internal strings** (unchanged from the plan's owner list): Google Business Profile, LinkedIn, directories; 2 contact-page attribute fixes (browser layer, step 5); Wix Pages-panel page name. | No API reaches them. | Step 5 / owner list in `AURANGABAD-RENAME-PLAN.md`. |

## Blocked on Yash in the Wix Editor (no API/Velo path exists)

| # | Item | Why blocked |
|---|---|---|
| P7 | /product (hd575), /transmission-and-driveline (dqw97), /electric-mobility (jo7nt) body content | No body Text elements on these pages — Velo cannot inject. Add one Text element per page in the Editor; then Velo can fill it (drafts ready in content-drafts/) |
| P8 | Visible publication date on /assembly-services, /forging-company-aurangabad, /company-profile; visible byline on /assembly-services | Schema-level done 22 Nov; visible text is Editor-only |
| P9 | Homepage social icons point to facebook.com/wix and instagram.com/wix (template default) | Editor link swap |
| P10 | CSP header (Sited finding 7) | Wix platform-level on Classic sites — raise with Wix support |

## Status note (23 Nov 2026, late)
The content-ops pipeline is live end-to-end: `.github/workflows/content-ops.yml` on VflWebsite (created by Yash via web UI — the GitHub integration token lacks the `workflow` scope, so Claude cannot push workflow files; 403 confirmed on both push tools). `ops/run.js` reads `secrets.WIXKEY` (never leaves GitHub), runs Wix API reads/writes, and commits results to `ops/results/` for read-back verification.

**Hard-won lessons recorded this session:**
- Correct endpoints: FAQ v2 `POST /faq/v2/question-entries/query` (cursor paging via `pagingMetadata.cursors.next`); SEO `GET/PATCH /seo-metatags-server/v1/item-seo-tags/STATIC_PAGE/{itemId}` with `publish:true`. PATCH replaces the item's tags IN FULL — always resend the complete tag list.
- **item-seo-tags writes are saved immediately but only RENDER after the next site publish.** API read-back is not a live-render check; always republish (push any real change to main) before curling to verify.
- **Empty commits don't trigger path-filtered workflows.** A byte-identical re-push produces no diff, so `paths:` never matches. Bump a comment line.
- The GitHub MCP token cannot push `.github/workflows/**` (no `workflow` scope) — workflow files go through Yash's web UI.
