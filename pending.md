# Pending — failed twice or blocked, do not retry without the listed unblock

Rule (owner instruction, 23 Nov 2026): **if a task fails more than once, stop, log it here, and move to the next task.** Review this file at the start of every session; retry an item only when its unblock condition is met.

## Resolved this session (23 Nov 2026, content-ops pipeline)

| # | Item | Resolution |
|---|---|---|
| P1–P3, P5 | FAQ: Pune machine counts, Aurangabad 0.5–50 kg, railways Charpy, EV "hot and warm forging" | ✅ DONE at the data layer. Full FAQ DB (500 v2 entries) verified clean of all banned patterns via the content-ops workflow. Live no-JS gates pass 0 hits on /forging-manufacturer-pune, /forging-company-aurangabad, /railway, /electric-vehicles. |
| P6 | W8 SEO: titles/meta refresh + og:image on the W6 pages | ✅ DONE and verified live. All 5 fixes saved via `seo-metatags-server/v1/item-seo-tags` and rendering in served HTML after a forced republish (og:image now on all 5 pages; /tool-manufactring serves the new short description). |

## RESOLVED 26 Nov 2026 — P4b and P11 were misdiagnosed; both fixed via API, no Yash needed

**The "legacy frozen widget" theory was wrong.** Both the Maharashtra FAQ and every other page use the exact same `faq-ooi` Wix app (same artifactId/bundle, confirmed by inspecting raw HTML on both a "clean" page and the "stuck" one). The widget reads live from the FAQ v2 database — it always did. The real problem: specific FAQ v2 entries had sat with stale/banned content **since 2026-08-0x**, never actually touched by any of this project's earlier "FAQ v2 clean" sweeps, which reported false positives (claimed "500 entries, 0 hits" when the real count is 256 and at least one banned-content entry was sitting right there).

All 6 items fixed via `UpdateQuestionEntry` / category-update API, independently re-verified live (not just agent self-report):
1. P4b: "What forging processes does Varsha Forgings offer?" → "Varsha Forgings provides hot closed-die forging solutions supported by its press and hammer systems." ✅ live.
2. P11 #1: Aurangabad question + answer renamed to "Chhatrapati Sambhajinagar (Aurangabad)". ✅ live.
3. P11 #2: Maharashtra heat-treatment answer renamed. ✅ live.
4. P11 #3: strategic-advantage answer renamed. ✅ live.
5. P11 #4: plant-visits answer renamed + FACTS-aligned ("after an RFQ"), confirmed live on both /buying-forgings-from-india and /steering-suspension-components (shared entry). ✅ live.
6. P11 #5: FAQ category heading renamed to "FORGING COMPANY IN CHHATRAPATI SAMBHAJINAGAR (AURANGABAD)". ✅ live.

**Independent full re-scan of all 256 FAQ v2 entries** (not trusting the earlier "500/0 hits" claim) found 6 more genuine DO NOT PUBLISH/unconfirmed-claim violations, sitting there since August, never caught: warm/cold forging claims (×3 entries, on /steering-suspension-components and /forged-components-ev), an unconfirmed Charpy −40°C railway claim (/forged-components-railways), an "open account terms" payment claim and an invented freight-cost figure (both /buying-forgings-from-india). **All 6 fixed and independently re-verified live** (not just agent self-report) — e.g. the payment-terms and freight answers on /buying-forgings-from-india now read "Letter of Credit or advance payment" and "Freight cost depends on container volume... confirmed in writing at quotation stage", with no dollar figures or open-account wording. 4 near-duplicate "closed-die vs open-die, general explanation" entries were correctly left alone (compliant — general engineering explanation, not a Varsha-specific claim).

**P4b and P11 are now fully closed.** No Yash action needed for either.

**New open item (P15) found during this cleanup:** `/steering-suspension-components` carries a body-text "India vs China" sourcing-comparison section with negative competitor framing and specific invented numbers (MOQ 1,000–5,000, sample lead 4–6 weeks, 18–22 days transit) — this was already flagged in FACTS.md's correction queue back on 22 Nov but never actually fixed on the live page. It's visible body text (Editor-set or inside an HTML-embed iframe), not FAQ v2, so **not API-reachable** — same category as P7/P9. Replacement copy (reframed as Varsha's own strengths, no competitor negativity) still needs drafting.

**Also found, not yet actioned:** `/forged-components-railways` has OTHER unconfirmed railway claims in body/table text (separate from the one FAQ entry already fixed) — "axle loads exceeding 32 metric tons" and "100% Volumetric Ultrasonic Testing (UT)", plus an H2 "Low-Temperature Impact Validation" section repeating the Charpy −40°C claim. FACTS.md: "Not confirmed, remove: railway performance claims (30+ year operational life, axle loads > 32 t, Charpy at −40 °C)." Same category as P15 — visible body text, Editor-only, needs a click-list entry.

## City rename (26 Nov 2026): items outside every channel Claude controls

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
