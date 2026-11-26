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
| P14 | **Renamed SEO tags not rendering live — both hypotheses tested and ruled out, parked (fail-twice rule, 26 Nov).** On 10 pages: titles, meta, og/twitter, JSON-LD incl. homepage `addressLocality` "Aurangabad". | **H1 ruled out:** direct `GET /seo-metatags-server/v1/item-seo-tags/STATIC_PAGE/dpizt` (26 Nov, independent of any ops run) confirms the stored title/description are correctly renamed — nothing re-PATCHed it back. The data layer is fine. **H2 ruled out:** pushed a real `src/public/richtext.js` comment-line change (commit `4ae5a92`, not just a `.github/republish-trigger` bump) specifically to test whether `wix publish` needs a `src/` diff to re-bake SEO, same technique that fixed W8 on 23 Nov. GitHub Action ran green (`wix publish --source remote -y`, conclusion success); checked live twice — immediately after publish and again 3 minutes later with a fresh cache-bust (`?nc=`) — both times still serving the pre-rename title/meta/og. Not a CDN propagation delay either. | **Unknown — genuinely stuck, two real root-cause attempts exhausted.** Next session: this may be a Wix platform-side issue with `item-seo-tags` re-baking for `STATIC_PAGE` items specifically after a CLI publish (as opposed to an Editor-triggered publish) — worth testing whether publishing once from the Wix Editor itself (Yash, one click) re-bakes it, which would confirm a CLI-vs-Editor-publish gap worth reporting to Wix. If Yash is willing to try that one click, it's the fastest diagnostic; otherwise this needs a fresh investigation, possibly contacting Wix support with the exact repro (API GET shows new value, 3 CLI publishes later the live HTML still shows the old one). |
| P13 | **Off-site and Wix-internal strings** (unchanged from the plan's owner list): Google Business Profile, LinkedIn, directories; 2 contact-page attribute fixes (browser layer, step 5); Wix Pages-panel page name. | No API reaches them. | Step 5 / owner list in `AURANGABAD-RENAME-PLAN.md`. |

## Blocked on Yash in the Wix Editor (no API/Velo path exists)

| # | Item | Why blocked |
|---|---|---|
| P7 | /product (hd575), /transmission-and-driveline (dqw97), /electric-mobility (jo7nt) body content | No body Text elements on these pages — Velo cannot inject. Add one Text element per page in the Editor; then Velo can fill it (drafts ready in content-drafts/) |
| P9 | Homepage social icons link to facebook.com/wix, instagram.com/wix (template default); WhatsApp icon has no link | **Confirmed via live diagnosis, 23 Nov 2026 — genuinely Editor-only, not a Velo gap.** These render as Wix's native **Social Bar header widget**, outside the page's own element tree — `$w('Image')`, `$w('VectorImage')`, `$w('Button')` in masterPage.js never iterate over it (confirmed live: the fix shipped, published, and had zero effect; no error, just nothing to touch). No evidence of a `wix:social-bar`-type Velo/CLI API either. Fail-twice rule applied; the attempted code was reverted (harmless no-op, but dead code) so the repo reflects the true state. **Unblock (Yash, 2 minutes):** in the Editor, remove/replace the Facebook and Instagram icon links (no real accounts exist — see FACTS.md), and set the WhatsApp icon's link to `https://wa.me/918411000551`. |

## Closed — needs a paid upgrade, not a fix (23 Nov 2026)

| # | Item | Finding |
|---|---|---|
| P10 | CSP header (Sited finding 7) | **Confirmed via Wix Help Center, not just "ask support":** custom security headers (CSP included) are Wix Studio Enterprise-only — unavailable on this site's plan (Premium, Classic Editor) by any means, code or otherwise. Not a support ticket; it's an upgrade decision (cost unknown, likely >$50/mo) for 5 of 100 GEO points. Parked pending Yash's explicit go-ahead to price it; not pursued further this session. |

## Resolved via Velo re-test (23 Nov 2026) — "Editor-only" call was stale

| # | Item | Resolution |
|---|---|---|
| P8 | Visible publication date on /assembly-services, /forging-company-aurangabad, /company-profile; visible byline on /assembly-services | ✅ DONE and verified live on all 3 pages, zero Editor work. Wired the existing W6 `{find, append}` SSR pattern into all 3 pages. Hit and fixed one real regression along the way: anchoring on bare "Leadership" also matched the site footer's "Leadership Team" nav link — fixed by adding an optional `requireTag` discriminator to the shared matcher (`w6content.js`), scoped to that one op. Final live check: "Last updated: 23 November 2026" renders correctly on all 3 pages, "· By Varsha Forgings" byline on /assembly-services, footer nav confirmed clean, H1 count unchanged (1) on every page. |

## Status note (23 Nov 2026, late)
The content-ops pipeline is live end-to-end: `.github/workflows/content-ops.yml` on VflWebsite (created by Yash via web UI — the GitHub integration token lacks the `workflow` scope, so Claude cannot push workflow files; 403 confirmed on both push tools). `ops/run.js` reads `secrets.WIXKEY` (never leaves GitHub), runs Wix API reads/writes, and commits results to `ops/results/` for read-back verification.

**Hard-won lessons recorded this session:**
- Correct endpoints: FAQ v2 `POST /faq/v2/question-entries/query` (cursor paging via `pagingMetadata.cursors.next`); SEO `GET/PATCH /seo-metatags-server/v1/item-seo-tags/STATIC_PAGE/{itemId}` with `publish:true`. PATCH replaces the item's tags IN FULL — always resend the complete tag list.
- **item-seo-tags writes are saved immediately but only RENDER after the next site publish.** API read-back is not a live-render check; always republish (push any real change to main) before curling to verify.
- **Empty commits don't trigger path-filtered workflows.** A byte-identical re-push produces no diff, so `paths:` never matches. Bump a comment line.
- The GitHub MCP token cannot push `.github/workflows/**` (no `workflow` scope) — workflow files go through Yash's web UI.
