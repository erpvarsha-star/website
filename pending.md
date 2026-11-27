# Pending — failed twice or blocked, do not retry without the listed unblock

## OPEN at end of 26 Nov session 3
| # | Item | Owner | Next step |
|---|---|---|---|
| IL | Internal 'Related buyer guides' links (Velo) — LIVE on 7 pages (VflWebsite 2c1f872 + stage 2); /railway, /agriculture skipped (image-only) | Claude | ✅ Haiku reviewer PASS 7/7 pages (26 Nov). Yash: glance at /quality on phone for layout overlap |
| IL2 | Links round 2 (5 pages) | Claude | CLOSED 27 Nov: reviewer PASS 5/5 (7354946) |
| C1-4 | C1-C4 blog posts | Claude | CLOSED 27 Nov: reviewer PASS live |
| QS1 | /quality slide 1 heading clipped on mobile | Claude | Attempt 2 (VflWebsite 62adc58) reviewer PASS: 1 H1. Remaining: 'Capability claims:' label, see CC (7354946 pending reviewer) |
| P17 | /automotive-steering-powertrain 23 DOM H1s | Claude | CLOSED 27 Nov: attempt 2 (62adc58) reviewer PASS, 1 H1 |
| CC | 'Capability claims:' label on /quality, homepage, /forging | Claude | CLOSED 27 Nov: reviewer PASS on all three (4fca538) |
| P18 | /forging 3 DOM H1s | Claude | CLOSED 27 Nov: reviewer PASS, exactly 1 H1 (4fca538) |
| Note | Reviewer 'title run-together' on /forging-company-aurangabad | - | Parser artifact: SVG `<title>` elements inside the body, not an SEO bug. Pune H1 contains 'CNC' without a count: allowed |
| FAQ-LD | FAQPage JSON-LD on blog posts | Claude | CLOSED 27 Nov: 21/21 via Draft Posts PATCH (9dfa187), reviewer PASS |
| MD | Blog posts had no `<meta name="description">` | Claude | DONE 27 Nov: 25/25 via `ops/blog-meta.js` (VflWebsite b5ce3a7), API read-back all present; reviewer rv6 PASS live (1 meta description on tie-rod, railway-bogie, DE posts); CLOSED 27 Nov |
| P19 | /product button labels: "Secotr Shaft" (12), "Steering Level" (4), "Swingram Mount" (4) | Claude (one bounded code attempt, owner-authorised 27 Nov) | **27 Nov owner AUTHORISED one bounded code attempt (W6 mechanism for button labels, plus a re-test of Velo reach on /product) before any Editor work; the two-failure rule is explicitly overridden for this single attempt. If it fails, it returns to Yash (Editor) with the steps below.** History: FAILED twice 26 Nov (Velo `$item('Button')` then `$item('StylableButton')` in repeater `onItemReady`; served HTML unchanged; the tab label did work). Editor: open /product, click each repeater button, change text: Secotr Shaft -> Sector Shaft; Steering Level -> Steering Lever; Swingram Mount -> Swing Arm Mount. Unblock for Claude: a Velo element id for the repeater. |
| P20 | /product has 0 h1 | Yash (Editor), code attempt authorised | 27 Nov owner authorised one bounded code attempt, but it is EXPECTED to stay Editor-only: needs a Text element that does not exist and Velo cannot create elements. Two-failure rule overridden for that one attempt. No page-level Text element exists on /product (all text is master-page footer), so Velo cannot retag or inject. Editor: add a Text element at the top of /product, set it to Heading 1, text "Forged and Machined Components for Automotive, Railway and Industrial Applications". |
| P21 | /alloy-steel-forgings table (weight, broaching) | Claude | CLOSED 26 Nov: embed swap live (embeds-extra.js). |
| LLMS | /llms.txt DO NOT PUBLISH breach | Claude | CLOSED 26 Nov: rewritten via Wix Llms Txt API, live. Edit only through that API; any Editor SEO-settings change could override it. |
| P9 | Social Bar: remove FB/IG, WhatsApp → https://wa.me/918411000551 | Yash | Editor: click icons → Set Social Links → delete FB, IG → WhatsApp Link → Web address → Publish |
| P13 | Off-site listings rename | Yash | Paste `content-drafts/P13-offsite-address-strings-DRAFT.md`. GBP exists for BOTH plants [Y] 27 Nov: Claude produces the GBP cleanup list (forward queue G) |
| RDSO | Approval reference number | - | DECIDED 27 Nov: add RDSO to hasCredential and railway copy with NO reference number (FACTS.md). Wave A of the forward queue (INTERNATIONAL-PLAN.md section 8) |
| LI | LinkedIn batch 2 (12 posts) | Yash / Claude | Post Tue/Wed/Thu from `content-drafts/linkedin-posts-batch2-DRAFT.md` |
| KPI | Search re-check | Claude | 10 Dec + 24 Dec (queries in PHASE4-PLAN.md) |


## OPEN 27 Nov 2026, final wave (executor; reviewer sitemap audit)

| # | Item | Owner | Status / next step |
|---|---|---|---|
| P22 | Duplicate-page clusters: redirect/merge job (NOT done this wave) | Claude (+ Yash Editor for nav) | Scoped spec below. Do one cluster at a time, merge content FIRST, redirect LAST. |
| P23 | /forging "Key Features" repeater shows the same 3-bullet block in 4 items (Key Features / Industries Served / Equipment and Capacity / Product Range) | Claude (one bounded code attempt, owner-authorised 27 Nov) | **27 Nov owner AUTHORISED one bounded attempt via the W6 mechanism before any Editor work; two-failure rule explicitly overridden for this single attempt; on failure it returns to Yash (Editor).** History: FAILED twice 27 Nov (VflWebsite 98d3113 `rep.data` filter, 9f8d86c blank Text html in `forEachItem`; live DOM unchanged both times; same SSR limit as P19). Editor: open /forging, click the repeater, in items 2-4 replace the body text with real content for that heading (Industries Served, Equipment and Capacity, Product Range, all from FACTS.md) or delete items 2-4. Unblock for Claude: a repeater element id. The `dedupeRepeater` W6 op stays in `w6content.js` (tested) but is not wired to any page. |
| P24 | "VFL" used as the company name on /heat-treatment, /design, /certifications, /history (FACTS legal name: Varsha Forgings Private Limited) | Claude | Low priority. Add path-scoped text rules in `sitewide-fixes.js` (VFL -> Varsha Forgings). Quote each live string first; do not touch the "-vf" slugs. |
| P25 | Two noindex pages listed in pages-sitemap.xml (previously identified as /electric-mobility and /transmission-and-driveline; both 0-word pages) | Claude | **DECIDED 27 Nov (owner): LIFT THE NOINDEX. Status: decided-but-pending-identification.** Claude promised to identify both pages and show Yash what is on them BEFORE the change. Do NOT lift anything until Yash has seen the page contents. Evidence: reviewer sitemap audit 27 Nov; baseline shows both with 0-word bodies, so lifting noindex on empty pages needs content first (note for the report to Yash). |
| P26 | Empty spacing left after de-duplication (cosmetic only): blank boxes on /forged-components-ev and /about-1-1, plus spare space under the EV embed | Claude (code attempt, authorised) | **27 Nov owner chose TRY TO FIX FROM CODE (Velo collapse() route), not Editor work: authorised for a code attempt.** Earlier lesson: collapse() is not SSR-visible, so test client-side effect with Firecrawl and a real browser view. Old note: Orphan headings were CLEARED 27 Nov (W6 `blank` op, VflWebsite commit after 9f8d86c; verified in rawHtml: no heading above an empty body on /forged-components-ev or /about-1-1). 'Verified Shop-Floor Equipment' reworded to 'Shop-Floor Equipment'. What remains: the blanked text boxes and 2 blank embeds still occupy vertical space; delete them in the Editor if the gaps look odd (/forged-components-ev, /about-1-1). |

### P22 job spec: duplicate clusters (reviewer sitemap audit, 27 Nov 2026)

**Hard constraints.** Wix Redirects API has NO update method: every change is delete-then-create and issues a NEW redirect id. Do not redirect or merge anything until the unique content of the old page lives on the canonical page. `/about-1` vs `/about-1-1` and `/electric-vehicles` vs `/forged-components-ev` are NOT duplicates (different content and purpose): never redirect them. `/tool-manufacturing` returns 404, so the misspelled `/tool-manufactring` is the live slug and MUST be kept (main nav links to it).

**Evidence collected 27 Nov (Firecrawl maxAge 0, rawHtml; canonical = `<link rel=canonical>`):**
| Old slug | Proposed canonical | Old: words / H1 / canonical | Canonical page: words / H1 / canonical |
|---|---|---|---|
| /assembly | /assembly-services | 393 / "ASSEMBLY" / self | 1,303 / "Contract Assembly & Sub-Assembly Services for OEM Line-Ready..." / self |
| /heat-treatment | /heat-treatment-metallurgy | 437 / "HEAT TREATMENT" / self | 1,361 / "Heat Treatment & Metallurgical Validation for Forged Steel C..." / self |
| /railway | /forged-components-railways | 137 / no H1 (image-only) / self | 1,351 / "Forged Components for Railway Rolling Stock & Bogie Systems" / self |
| /forged-machined-components | /forged-machined-components-vf | 837 / same H1 / **already canonical to -vf** | 837 / "Forged and Machined Components from One Supplier" / self |
| /forging + /forging-presses-hammers | keep BOTH (different intent: process page vs equipment page) | /forging: 1 H1 "Closed-Die Forging for Carbon and Alloy Steel Components" | /forging-presses-hammers: 1 H1 "Precision Forging Presses & Hammer Capacities | IATF 16949 Certified" |
| /copy-of-awards -> /copy-of-articles | **DO NOT REDIRECT**: not a duplicate | /copy-of-awards is "Company Milestones" (H1 "AIFI's 2nd Annual Conference 2026", nav label "Moments") | /copy-of-articles is "Awards & Recognition" (nav label "Awards") |

**Per cluster (order of work):**
1. /assembly -> /assembly-services. MERGE FIRST: read both live bodies; anything on /assembly not on /assembly-services (393 words; list in the Wix Editor) must be added to /assembly-services (Velo `append` op or Editor). Linkers to repoint: main nav "Assembly" and footer "Assembly" both point to `/assembly` (seen on /copy-of-articles 27 Nov); homepage and any "Related buyer guides" / `w6-xlink` blocks. Nav is Editor-only (Menu items), so Yash edits the nav target, then Claude creates the 301.
2. /heat-treatment -> /heat-treatment-metallurgy. Same method. Nav "Heat Treatment" (header and footer) points to `/heat-treatment`; homepage "Know More" link on /forging ("HEAT TREATMENT" block) probably does too (verify the href). Merge unique content from the 437-word page first (it also uses "VFL" as company name; see P24).
3. /railway -> /forged-components-railways. Nothing unique expected (137 words, image-only, no H1). Check which pages link to /railway (nav shows Railway via /product tabs, not /railway; scan the 49 pages). Repoint any link, then 301.
4. /forged-machined-components -> /forged-machined-components-vf. Canonical already points to -vf and the body is identical, so only the 301 plus link repoint remain. Find linkers first (nav "Capabilities"?).
5. /forging + /forging-presses-hammers: no redirect. Decide only whether /forging-presses-hammers should absorb the "Equipment and Capacity" repeater content (see P23).
6. /copy-of-awards: no action (distinct "Moments" page). Rename slug is a separate, optional job (slug "copy-of-..." is ugly); a rename = new URL + 301 + nav edit, so owner decision.

**Open evidence still needed before any redirect:** (a) full main-nav and footer membership for every old slug (this reviewer could verify the header/footer anchors only from /copy-of-articles; the Editor menu is the source of truth); (b) an in-site link scan of all 49 pages for each old slug (rawHtml href grep); (c) GSC clicks/impressions per old slug (a slug with traffic needs the 301 even more, and its title must be matched); (d) confirm no external links (Sited backlink export). **Redirect mechanics:** create via the Wix Redirects API (301); to change one later, delete then create (new id); log each id in `website.md`. After each: Firecrawl the old slug (expect final URL = canonical) and the canonical page (1 H1, content intact).

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

**P15 CLOSED 26 Nov (via the embed-swap channel, no Editor needed):** the `/steering-suspension-components` "India vs China" section was an HTML-embed iframe, the same filesusr file as `/buying-forgings-from-india` (already corrected, 38 changes). The page was simply missing from the W3 embed scan. Wired it to the corrected embed (website repo `c75a253`; VflWebsite `0a2c2bd`, publish run 45853304309 green). Independently re-verified live: 0 occurrences of "China"/"Chinese", Varsha-only "Sourcing Forgings from India: Key Factors" section renders, H1 unchanged.

**Railway page FAQ claims closed 26 Nov:** 3 FAQ entries on `/forged-components-railways` ("100% Volumetric UT", "axle loads exceeding 32 metric tons", "multi-decade service lives") fixed, plus 2 more found by a broader re-scan of all 256 entries: a "15+ year service life" bonded-bush claim and an unconfirmed NR/SBR rubber-blend claim, both rewritten to the FACTS rubber-bonding-partner wording. Re-scan with broader patterns now returns 0 violations. Read back via API and live-checked.

**Still open (Editor-only body text, low priority, vague not numeric):** `/forged-components-railways` intro "across long service lives", benefits-table row "Long Service Life | Long Service Life With Minimal Degradation" and "Zero Internal Porosity"; `/buying-forgings-from-india` intro sentence "While China has historically dominated low-cost forging production" (neutral, not a negative claim, left as is). Two generic rubber FAQ entries (NR vs EPDM `2cf3d241`, elastomer hardness `7eedbb93`) are general content with no Varsha-specific claim; left, owner may decide.

## City rename (26 Nov 2026): items outside every channel Claude controls

| # | Item | Why | Unblock |
|---|---|---|---|
| P12 | **✅ CLOSED 26 Nov (VflWebsite 9af45ca, Velo override):** kihd6 "Contact Varsha Forgings | MIDC Waluj, Chh. Sambhajinagar (Aurangabad)", dpizt "Forging Company in Chh. Sambhajinagar (Aurangabad) | Varsha Forgings", n1h72 "Forging Company in Maharashtra | Chh. Sambhajinagar (Aurangabad) & Pune". Same release: noindex,follow on /electric-mobility + /transmission-and-driveline (Opus verified robots live), and restored og:url/og:site_name/og:type/twitter:card/twitter:image that P14 stages had dropped (setMetaTags replaces all). Old: **Titles over 65 characters** after the rename: kihd6 87, dpizt 100, n1h72 98 (short form already used). Titles were over 65 before (66, 79, 76) so Google was truncating already. | The brief said change the city text only. | Opus decision: shorten the tail of those 3 titles (suggested: "Contact Varsha Forgings | MIDC Waluj, Chh. Sambhajinagar (Aurangabad)"; "Forging Company in Chh. Sambhajinagar (Aurangabad) | Varsha Forgings"; "Forging Company in Maharashtra | Chh. Sambhajinagar (Aurangabad) & Pune"). Meta descriptions grew by about 28 characters each (tfegr 285, jo7nt 231, t6wcz 229, dpizt 208) and were already over 160. |
| P14 | **✅ CLOSED 26 Nov (session 3) via Velo SEO override** (`src/public/seo-override.js`, generator `ops/tools/gen-seo-override.js`; VflWebsite e18884e stage 1, 484469a stage 2). All 10 pages serve the renamed title/description/og/twitter server-side; Opus re-verified dpizt + kihd6 live (?nc=261126v1). Root cause at Wix still unknown (item-seo-tags stored but not baked); Velo now owns these 10 pages' SEO head, so future SEO edits to them go through the generator, not the API. --- History: **Re-checked 26 Nov (new session): still NOT rendering.** Live `/forging-company-aurangabad?nc=261126a` title = "Forging Company in Aurangabad | Varsha Forgings | Heavy-Die Forging Plant India" (old). Direct API GET of `item-seo-tags/STATIC_PAGE` dpizt, kihd6, n1h72: `tags` AND `resolvedTags` both hold the renamed titles, `hasOverride:true`, `publishStatus:PUBLISH_STATUS_UNSPECIFIED` on all (same as homepage plew4, whose W8 edit did render). Data layer correct; render gap persists. Yash did the Editor Publish click 26 Nov: **live title still old** (re-scraped ?nc=261126d) → not a CLI-vs-Editor issue. **New route (Opus, 26 Nov): Velo `wix-seo-frontend` override in page code, staged (dpizt first).** Wix support repro kept in `handover/P14-wix-support-repro.md`. If that fails: Wix support repro below. --- Earlier: **Renamed SEO tags not rendering live — both hypotheses tested and ruled out, parked (fail-twice rule, 26 Nov).** On 10 pages: titles, meta, og/twitter, JSON-LD incl. homepage `addressLocality` "Aurangabad". | **H1 ruled out:** direct `GET /seo-metatags-server/v1/item-seo-tags/STATIC_PAGE/dpizt` (26 Nov, independent of any ops run) confirms the stored title/description are correctly renamed — nothing re-PATCHed it back. The data layer is fine. **H2 ruled out:** pushed a real `src/public/richtext.js` comment-line change (commit `4ae5a92`, not just a `.github/republish-trigger` bump) specifically to test whether `wix publish` needs a `src/` diff to re-bake SEO, same technique that fixed W8 on 23 Nov. GitHub Action ran green (`wix publish --source remote -y`, conclusion success); checked live twice — immediately after publish and again 3 minutes later with a fresh cache-bust (`?nc=`) — both times still serving the pre-rename title/meta/og. Not a CDN propagation delay either. | **Unknown — genuinely stuck, two real root-cause attempts exhausted.** Next session: this may be a Wix platform-side issue with `item-seo-tags` re-baking for `STATIC_PAGE` items specifically after a CLI publish (as opposed to an Editor-triggered publish) — worth testing whether publishing once from the Wix Editor itself (Yash, one click) re-bakes it, which would confirm a CLI-vs-Editor-publish gap worth reporting to Wix. If Yash is willing to try that one click, it's the fastest diagnostic; otherwise this needs a fresh investigation, possibly contacting Wix support with the exact repro (API GET shows new value, 3 CLI publishes later the live HTML still shows the old one). |
| P13 | **Off-site and Wix-internal strings** (unchanged from the plan's owner list): Google Business Profile, LinkedIn, directories; 2 contact-page attribute fixes (browser layer, step 5); Wix Pages-panel page name. | No API reaches them. | Step 5 / owner list in `AURANGABAD-RENAME-PLAN.md`. |

## Sited re-run received 26 Nov 2026 (owner: do NOT ask him to run Sited again)
Score **83/100** (up from 70 on 22 Nov baseline per Sited; our logged baseline 81). Only issue: "Heading order skips from H1 to H6" on the homepage. **Already fixed after that run:** `Company.plew4.js` retags 4 section h6 -> h2 and `masterPage.js` turns footer/header h6 -> p. Verified 26 Nov in served HTML (`/?nc=261126b`): 1 H1, 10 H2, 0 H3-H6. Sub-scores: Content clarity 13/15, Structured data 14/15, Citation readiness 13/15, First-party evidence 3/5 (the gaps to work next).

## Blocked on Yash in the Wix Editor (no API/Velo path exists)

| # | Item | Why blocked |
|---|---|---|
| P7 | **DECIDED by Opus 26 Nov (owner delegated):** /product KEEP as is (it is the product photo gallery, linked from the homepage, good meta; no Text element needed). /transmission-and-driveline and /electric-mobility: 0 words, not linked from homepage; /electric-mobility duplicates /electric-vehicles. Decision: keep them out of Google (noindex via Velo SEO, ships with P14 stage 2) and later 301 them once Yash deletes the pages (optional, 1 min each). No content to write. Old note: /product (hd575), /transmission-and-driveline (dqw97), /electric-mobility (jo7nt) body content | No body Text elements on these pages — Velo cannot inject. Add one Text element per page in the Editor; then Velo can fill it (drafts ready in content-drafts/) |
| P9 | Homepage social icons link to facebook.com/wix, instagram.com/wix (template default); WhatsApp icon has no link | **Confirmed via live diagnosis, 23 Nov 2026 — genuinely Editor-only, not a Velo gap.** These render as Wix's native **Social Bar header widget**, outside the page's own element tree — `$w('Image')`, `$w('VectorImage')`, `$w('Button')` in masterPage.js never iterate over it (confirmed live: the fix shipped, published, and had zero effect; no error, just nothing to touch). No evidence of a `wix:social-bar`-type Velo/CLI API either. Fail-twice rule applied; the attempted code was reverted (harmless no-op, but dead code) so the repo reflects the true state. **Unblock (Yash, 2 minutes):** in the Editor, remove/replace the Facebook and Instagram icon links (no real accounts exist — see FACTS.md), and set the WhatsApp icon's link to `https://wa.me/918411000551`. |

## P10 DROPPED from the plan (owner decision, 27 Nov 2026)
P10 (CSP header, Sited finding 7) needs Wix Studio Enterprise (custom security headers are unavailable on this site's plan, 23 Nov finding), a likely >$50/mo upgrade for 5 of 100 GEO points. The owner dropped it on 27 Nov 2026. It is removed from the open list; **do not re-raise it, price it, or list it as an owner decision in any future session.**

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

## Apollo / Lusha: DEFERRED to Q1 2027 (owner-confirmed 27 Nov 2026)
Owner confirmed the deferral on 27 Nov 2026, as originally recommended on 26 Nov. A third-party planning document wrongly recorded this as closed by the owner; the correct state is DEFERRED to Q1 2027, not closed. Original recommendation follows.

Paid contact databases (~$50-100/mo) for cold email to OEM procurement staff. Park until: (1) the site's inbound engine is complete (L-pages, B1-B10 live), (2) a written email sequence exists, (3) someone at Varsha owns follow-up replies within 24 h. Re-evaluate Q1 2027.

## P16 — ✅ CLOSED 26 Nov: false positive
Only 1 real H1 ("Contact Varsha Forgings", comp-m0amumye, from w6ops-kihd6.js). The 2nd raw `<h1` match is an escaped copy inside Wix warmup JSON. Lesson: count DOM headings, not raw-string matches. Old note: /contact-us-1 serves 2 H1s
Found in the P12 live check; baseline (22 Nov) had 1. Not caused by the SEO override (head only). Next: find which element is the 2nd H1 (raw HTML), fix via Velo retag (h1->h2) like the homepage fix.

## W2-1 (26 Nov, Wave 2): two FAQ entries still say "PPAP Level 3 documentation"
FAQ v2 ids `163738ab-fc88-49ef-916e-a3a43e9839b8` (custom suspension assemblies) and `25ab412d-53ec-4c0d-a7d3-75d1df2c31f8` (custom V-Link assemblies): "...with full APQP and PPAP Level 3 documentation." FACTS: PPAP Levels 1-5 supersedes "Level 3 capability". Fix path: FAQ API, same as Wave 2 (change to "PPAP documentation (Levels 1 to 5 as required)"). Unblock: orchestrator go-ahead; no Yash work. Also: add /forging-company-maharashtra to FACTS correction queue for ZLD (FACTS.md is orchestrator-owned).

**W2-1 CLOSED 26 Nov:** all four "PPAP Level 3" FAQ entries fixed and read back (163738ab, 25ab412d, f4a5114b, affc7440); full 256-entry re-audit clean. See website.md.
