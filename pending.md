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
