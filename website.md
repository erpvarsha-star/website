# Varsha Forgings — GEO/AI-Visibility Fix Log

> ## HANDOVER: 27 Nov 2026 step F accuracy fixes applied to F1 and F2 drafts (READ THIS FIRST; adds to the steps E and F block below)
> - **Drafting only: no Wix writes, no VflWebsite push.** Accuracy review fixes applied (INTERNATIONAL-PLAN.md section 8 step F). F1: CBAM obligations qualified to importers above the 50-tonne threshold; one sentence added that the Commission's roughly-180-product downstream extension from 1 Jan 2028 is PROPOSED, not law (Council position agreed, Parliament not adopted); specific CN code deleted (unverified against Annex I), sector-level iron and steel kept. F2: EN19 and EN24 rows marked approx.; key now says "None close"; oil-and-gas end-use wording replaced with general standard usage (no VFL market claim). Metallurgist sign-off caveat and column-1 grade list untouched. Reviewer to re-check.

> ## HANDOVER: 27 Nov 2026 steps E and F content DRAFTED (READ THIS FIRST; adds to the step B2 block below, which still stands)
> - **Drafting only: no Wix writes, no VflWebsite push, nothing live.** Six drafts in content-drafts/, each passing `scripts/check-wordcount.sh 550` (page copy under one `## Page copy` heading; fact audit and owner questions sit above it, outside the counted body): F1-esg-sustainability (750 words), F2-steel-equivalency-matrix (839), F3-anonymised-case-studies (637), F4-commercial-vehicle-forgings (712, improves the existing /commercial-vehicle orphan), E1-transmission-and-driveline (647), E2-electric-mobility (615).
> - **Owner decisions needed before any publish:** F3 cases are scaffolds, FACTS has no project histories, so the owner must confirm each matches a real project or approve them as generic capability scenarios. F2 equivalents are general engineering reference (no VFL grade-equivalence claim; first column only is from FACTS Materials); a metallurgist should spot-check rows. F1: confirm Pune rooftop is 150 kW; park name, metering and use by the plants stay unpublished; no emissions or share figures. Each draft lists its own owner questions.
> - **P25 (step E):** noindex stays until the owner has read E1 and E2. **Next:** reviewer checks drafts against FACTS and DNP; owner reads; then build pages (Editor Text element + H1 for the empty and label-only pages).

> ## HANDOVER: 27 Nov 2026 step B2 (P19 attempt 2, alt-text check, P26 attempt) ran (READ THIS FIRST; supersedes the step B P19 line below)
> - **P19 /product STILL PARTIAL, now PARKED (Editor).** Diagnostics (x-diag, VflWebsite releases f62edcd onward, all removed) showed the 3 families are static repeaters (repeater11 = comp-m375d8tc, 11 items; repeater12 = comp-m375dac84, 4 items; repeater14 = comp-m375ddpo3, 10 items; button ids button24, button25, button27) whose per-item labels are editor overrides: `$item('#buttonN').label` READS the template label for every item and a WRITE is NOT item-scoped. Attempt 2 (op `itemLabelById`, matching item `_id`) overwrote EVERY item in those 3 repeaters (live aria-labels: Sector Shaft 23, Swing Arm Mount 4). Reverted within one release (812babb); live re-verified: the 6 original typos are back and nothing else changed ('Secotr Shaft' 4, 'Steering Level' 1, 'Swingram Mount' 1 aria-labels). No diagnostic is left in the code (grep clean). Remaining route: Editor (3 labels in 3 repeaters, strings in pending.md P19), or extend the slim browser layer (`corrections/embed-layer.js`, a Wix embed PATCH) with a DOM rule on button label text and aria-label; not done because the brief limited P19 to the Velo W6 route.
> - **Alt text (Job 2): nothing to fix; already live.** 0 'Secotr', 'Steering Level' or 'Swingram' in any `alt` on /product, /automotive-steering-powertrain, /suspension-components (rawHtml, maxAge 0). Alts read 'Sector Shaft (32).png' (alt rules in corrections-rules.js plus the browser layer). Image FILENAMES still carry 'Secotr': 7 distinct media files on /product (Secotr Shaft (22), (25), (26), (29), (30), (31), (32).png); media-library rename is out of scope, owner to rename if wanted.
> - **P26 PARKED (cosmetic, no SEO impact).** W6 `blank` and `dedupe` ops already call collapse() on every blanked box; the rendered /forged-components-ev screenshot (Firecrawl, waitFor 6000) still shows 100-200 px empty bands under each embed table and where boxes were blanked, i.e. Classic absolute layout does not reflow on collapse(). The embed iframe height is set by the Wix component, not by the served embed source, and Classic Velo has no height setter. /about-1-1 not re-screenshotted (same mechanism). Owner fallback applies: leave it.
> - **P27:** /product scrapes (maxAge 0, waitFor 1500) succeeded 9 of 9 this step; `/` and `/company-profile` not retried here.

> ## HANDOVER: 27 Nov 2026 step B (P19/P20/P23) ran: P23 FIXED live, P19 PARTIAL, P20 Editor-only (READ THIS FIRST; supersedes the step A "Next: step B")
> - **Mechanism found (new, reusable):** Velo `$item('Text')`/`$item('Button')` TYPE selectors are NOT item-scoped (return the whole page's elements); `$item('#id')` IS item-scoped, and `$w('Repeater')` reaches every repeater. Element ids read via a temporary `x-diag` meta (wix-seo-frontend setMetaTags, SSR-visible; removed again). FAQ v2 (3 pages via pagingMetadata.cursors.next, 256 entries): 0 hits for the repeater text; the block is not an embed (0 HtmlComponent on /product; DOM repeater on /forging), so it was Velo.
> - **P23 /forging FIXED live (VflWebsite 39007ae):** new W6 op `itemBlank` blanks text14 (heading) and text15 (body) of repeater6 items 1-3. Live rawHtml waitFor 1000, maxAge 0: 'Specialization in hot forgings' in the repeater 4 -> 1 (2 other hits are in an unrelated section at the page foot), 'Key Features' 1, 'Industries Served', 'Equipment and Capacity', 'Product Range' 0 in the repeater.
> - **P19 /product PARTIAL (39007ae + 88d58da):** new op `itemLabelSub` (item-scoped by id) reaches SOME buttons: aria-label count before/after: 'Secotr Shaft' see log, 'Sector Shaft' 0 -> 2; 6 buttons (comp-m375d8tc, comp-m375dac84, comp-m375ddpo3 item families) still show the typo after an id sweep button1..button80. Cause undetermined; no second mechanism tried (owner: one attempt). Image filenames/alt text also contain 'Secotr' (not button labels, not changed).
> - **P20 /product H1: Editor-only, confirmed.** 0 HtmlComponent, `$w('Text')`=32 all template/footer text, no page-level text to retag; Velo cannot create elements.
> - Live scrapes of /forging and /product at maxAge 0 succeeded 8 of 8 today (about 10 s); no cached copies used.

> ## HANDOVER: 27 Nov 2026 step A credential + Person wave WRITTEN (live verification pending) (READ THIS FIRST; supersedes the "Not emitted" lines below for CQI-9, ARAI, RDSO, AIFI years)
> - **Wix writes (STATIC_PAGE, full tag set, publish:true, one page per call):** `/` (plew4) hasCredential now SEVEN (IATF 16949, ISO 9001:2015, ISO 45001:2018, ISO 14001:2015, CQI-9, ARAI, RDSO; the three new carry no dates, revision numbers, reference numbers, part names or issuing bodies). `/company-profile` (unlvj) Person: memberOf OrganizationRole President of AIFI, startDate 2024, no endDate (current), description states term 2024-26; jobTitle unchanged "CEO & Director". Other nodes untouched.
> - **Measured:** PATCH 200 both; API GET read-back JSON-LD identical to payload; plew4 2,868 chars, unlvj 1,916 chars (both under 4,096); tag counts unchanged (4 and 4); one @id (#organization) per page, no duplicates. No solar/ESG, PED, Maxility/KCTR, CIN, machine counts.
> - **NOT verified:** live Firecrawl scrape timed out 4 times at the 60s tool limit (pending.md P27). Reviewer must confirm live parse before step A is marked done. Next: step B.


> ## HANDOVER: 27 Nov 2026 owner answers recorded, forward queue set (READ THIS FIRST; supersedes the A10 block below on RDSO, CQI-9, ARAI, AIFI years, solar)
> - **Record-keeping only this step:** no Wix writes, no VflWebsite push. Yash answered 16 questions on 27 Nov 2026; all are in FACTS.md under "Owner answers 27 Nov 2026" with source [Y] (CQI-9 held, no dates; ARAI claimable without part names, owner's framing verbatim; AIFI president, currently serving, term 2024-26, years now publishable; RDSO added with no reference number; GBP exists for both plants; solar = Pune rooftop (150 kW as FACTS records) + 5 MW owned plant in a solar park; export order EU/Germany, North America, Middle East and Africa, SE Asia/Japan/Korea deprioritised; anonymised case studies only; no MOQ number; no group schema; PED/AD 2000 not applicable).
> - **Decisions:** CLAUDE.md Wix API row corrected (real cap 12,000 chars per JSON-LD script, no whole-tag-set cap, 4,096 kept as house policy). P10 DROPPED (pending.md; never re-raise). P25 lift noindex, DECIDED but pending identification (show Yash what is on both pages first; lift nothing yet). P26 authorised for a Velo collapse() code attempt. P19/P23 (and a P20 attempt, expected Editor-only) authorised for ONE bounded code attempt each, two-failure rule explicitly overridden for that one attempt. Apollo/Lusha DEFERRED to Q1 2027. INTERNATIONAL-PLAN.md section 5 is fully closed.
> - **Next, in order (INTERNATIONAL-PLAN.md section 8):** A credential and fact wave (Wix API, one page per call, full tag set) -> B P19/P20/P23 -> C P26 -> D P22 proposed 301 map for owner approval -> E P25 identify then lift -> F Wave 4 content (equivalency matrix DIN/EN + SAE/AISI, ESG page now unblocked, 3 anonymised case studies, commercial-vehicle page) -> G GBP cleanup list -> H KPI re-check 10 and 24 Dec.
> - **Not emitted until step A runs:** CQI-9, ARAI, RDSO, AIFI years and solar are recorded in FACTS but NOT yet on the live site.
>
> ## HANDOVER: 27 Nov 2026 A10 schema wave LIVE (READ THIS FIRST; supersedes the final-wave block below for schema)
> - **Wix item SEO tags written (STATIC_PAGE, full tag set, publish:true), all GET read-back equal to payload and live-verified (Firecrawl maxAge 0, waitFor 6000, JSON-LD parses, no duplicate @id):** `/` (plew4) Organization upgraded to ["Organization","Manufacturer"] with @id #organization, foundingDate 1989, two plants, four credentials; `/company-profile` (unlvj) + Person (Yash J. Munot, CEO & Director, youngest AIFI president, no years) + BreadcrumbList; `/automotive-steering-powertrain` (tfegr) + Product + BreadcrumbList; `/about-1` (l95rc) + BreadcrumbList only (Person moved off it).
> - **SIZE CAP (measured):** the API enforces a per-tag limit on the structured-data script of **12,000 characters** (error `MAX_TAG_BYTES_EXCEEDED`, 400). Draft-only probes accepted 4,200, 8,000 (tag set 8,600) and rejected 16,000. There is NO 3,600 or 4,096 cap and no whole-tag-set cap at the API. 3,600 and 4,096 are our own conservative limits; keep them as policy but a JSON-LD up to ~12,000 is valid.
> - **Merge rule used:** GET current tags, edit the parsed JSON-LD, resend the full set; homepage Organization node upgraded in place (existing contactPoint/knowsAbout/sameAs kept, contactPoint gained telephone; top-level `address` dropped because the two plant `location` nodes carry the addresses; existing FAQPage kept verbatim).
> - **Not emitted:** CQI-9, ARAI, solar/energy, AIFI presidency years, RDSO (FACTS.md records RDSO approved, owner-confirmed 22 Nov, but A10 credential list is four-only; owner decision pending), CIN, machine counts.
>
> ## HANDOVER: 27 Nov 2026 final wave (award years, "Verified" H1, multi-H1, repeated blocks) (READ THIS FIRST; supersedes the Wave 2 block below)
> - **Item 1 DONE (VflWebsite 6d60050):** /copy-of-articles award captions are Wix **gallery item data**, not Text elements, so the existing TEXT_RULES (Bronze 2016->2018, Gold 2016->2015) never matched. `corrections.js` now also runs the rules over `Gallery`/`ProGallery`/`MediaGallery` `items` (title, description, alt). Live (Firecrawl maxAge 0): Bronze 2018 (x2), Gold 2015; every other caption checked against FACTS (2019 Cluster, 2016 Daimler, 2014 SME Excellence, 2025 SME 100, Ashok Leyland 2023, ACMA Medal/Award 2020) and unchanged; no "Best Leadership", "Best Employer" or "SME Chamber" strings on the page.
> - **Item 2 DONE (VflWebsite d7d0fb2):** /automotive-steering-powertrain H1 now "OEM Automotive Forged Components Supplier | Tier 1 & OEM Sourcing" (rule in `sitewide-fixes.js`, path-scoped). DOM h1 before 1, after 1.
> - **Item 3 DONE (6ad7960):** /rubber-bonded-components DOM h1 7 -> 1; /forging-presses-hammers 4 -> 1 (the "paragraph styled as H1" WAS a real `<h1>` tag, retagged to `<p>`). Both pages wired to W6 (`pa6w8`, `n2uai`). Inline styles kept.
> - **Item 4 PARTIAL:** /forged-components-ev (paragraph x4 -> x1) and /about-1-1 (portfolio heading/paragraph/engine heading x2 -> x1; capability-table embed x3 -> x1, repeats point at the new empty `/_functions/embed/blank`) DONE live via new W6 ops `dedupe` and `dedupeEmbeds` (98d3113, 9f8d86c). Lesson: `collapse()` is NOT rendered server-side; blanking `t.html` is. /forging repeater (4 items with the same bullets) FAILED twice (rep.data filter; blank html in forEachItem): parked as P23.
> - **Item 4 follow-up DONE (VflWebsite 8d10eb4, 27 Nov):** the 2nd 'Varsha Forgings supports EV range optimization through:' on /forged-components-ev was a `<p>` inside HTML embed `forged-components-ev__5` (not a Text element, so W6 `blank` cannot reach it). Deleted from `embeds/corrected/forged-components-ev__5.html`, regenerated the module; live Firecrawl maxAge 0: line x1 (the `<h4>` kept), DOM h1 x1. The iframe keeps its fixed height, so a little spare space sits below the bullet list (optional P26 spacing).
> - **H1 counting warning:** raw `<h1` substring counts give false 2s on pages where Velo sets component html (/forged-components-ev, /automotive-steering-powertrain): Wix's `wix-warmup-data` JSON carries an escaped copy of the same H1. Count real DOM h1 only (strip the warmup script first).
> - **Items 5-6:** pending.md P22 (redirect/merge spec; evidence: /copy-of-awards is a different page, "Moments", so it must NOT be redirected; /forged-machined-components already canonicals to -vf), P23-P26.
> - **Scrape artifact to remember:** /forging has a slideshow; Firecrawl DOM varies with capture timing (h1 absent at waitFor 6000-9000, present at 1000). Always compare h1 counts with a short waitFor before declaring a regression.
> - **Publish runs:** 6d60050, "Verified" commit, 6ad7960, 98d3113, 9f8d86c and the cleanup commit all `success`. Tests (5 files) and `npx eslint src` green before each push.
>
> ## HANDOVER: 26 Nov 2026 Wave 2 (reviewer FACTS violations, wording, de-orphaning /forging-manufacturer-india) (READ THIS FIRST; supersedes the Wave 1 block below)
> - **4 FACTS violations FIXED live (Firecrawl maxAge 0 verified):** (1)+(2) ZLD clause removed from FAQ v2 entries `3864f222...` and `a0abdceb...` (both pages show "waste-heat recovery systems, solar roof installations, and scrap metal recycling"; the /forging-company-maharashtra copy still ends "under ISO 14001 guidelines"); (3) /forging-manufacturer-india PPAP now "complete PPAP (Levels 1 to 5 as required)" (FAQ entry `5b700a87...`); (4) /forged-components-railways 'Long Service Life' row removed (VflWebsite b895aa7, corrected copy of embed `forged-components-railways__2` in `embeds-extra.js`).
> - **Wording:** (5) table re-headed "Material and Inspection Standards" and (7) /buying-forgings-from-india intro without the China comparison (VflWebsite d87a072, new W6 ops `sub` and `rewriteFirstP`, `tests/wave2.test.cjs`); (6) RDSO FAQ answer now "...manufactured under Varsha Forgings' Indian Railways (RDSO) approval." (FAQ entry `655f4204...`, API).
> - **De-orphaning (VflWebsite 5c23c76):** one `w6-xlink` paragraph with a distinct anchor on 7 pages (/, /about-1, /forging, /machining, /quality, /automotive-steering-powertrain, /forged-components-railways); each verified live (exactly 1 link, 1 H1). /machining page code now has the W6 hook. Ops in `src/public/w6ops-wave2.js`.
> - **Lesson:** the earlier "all 256 FAQ v2 entries clean" claim missed ZLD and PPAP Level 3 because the scan list was incomplete. FAQ query needs cursor paging (`paging.limit` 50 returns hasNext); always paginate before declaring 0 hits.
> - **Open (queued, not done):** two FAQ entries still say "full APQP and PPAP Level 3 documentation" (suspension and V-Link custom-assembly Q&As, ids `163738ab...`, `25ab412d...`); conflicts with FACTS (Levels 1-5). `/forging-company-maharashtra` ZLD was not in FACTS correction queue (FACTS.md not edited by executor).
>
> ## HANDOVER: 26 Nov 2026 reviewer-fix release (llms.txt breach, sitewide, /product, /alloy-steel-forgings) (READ THIS FIRST; supersedes the 02:15 block below)
> - **llms.txt DO NOT PUBLISH breach FIXED live** (Wix-managed `/llms.txt`, served by the Wix Llms Txt API, not by VflWebsite): machine counts, BMW and 2013 Pune removed, rewritten from FACTS.md. Firecrawl maxAge 0 confirms. Edit it only via `PUT /promote-seo-robots-server/v2/llms` (ExecuteWixAPI).
> - **Sitewide (VflWebsite 312339b, 5fea826):** footer 2026, footer link https, nav "Customers" (menu + footer). Rules in the NEW hand-written `src/public/sitewide-fixes.js` because `corrections-rules.js` is generated. Test: `tests/sitewide-fixes.test.cjs`.
> - **/product:** tab label fixed; repeater button typos (Secotr, Steering Level, Swingram) and the missing H1 FAILED twice, parked in `pending.md` (P19, P20).
> - **/alloy-steel-forgings (P21):** capabilities table was an HTML embed; swapped to a corrected copy (1 kg-25 kg; broaching via vendor partners) via `src/backend/embeds-extra.js` + page-code swap. Live.
> - **Next:** reviewer re-verifies; Yash Editor work for P19/P20 (pending.md).
>
> ## HANDOVER: end of 27 Nov 02:15 run (superseded by the 26 Nov reviewer-fix block above; supersedes 'run 3' below)
> - **DONE, all reviewer-verified live:** QS1, P17, P18, CC closed (exactly 1 H1 on /quality, /automotive-steering-powertrain and /forging; 'Capability claims:' label gone on /quality, homepage and /forging). C1-C4 blog posts live (25 posts total). Links round 2 live on 5 pages. FAQPage JSON-LD on 21 posts. Meta description on all 25 posts (reviewer rv6 PASS: exactly 1 meta description on tie-rod, railway-bogie and DE posts; FAQPage + BlogPosting JSON-LD parse; titles and first H2 OK). Row MD closed in pending.md.
> - **OPEN for Yash:** P9 social icons (steps in pending.md); Google Business Profile (does one exist?); P13 off-site address text; LinkedIn batch 2 posting; optional RDSO reference; P10 decision (Enterprise cost).
> - **OPEN for Claude next:** KPI search re-check 10 Dec and 24 Dec (PHASE4-PLAN.md); LinkedIn batch 2 links for C1-C4 (add 4 posts); next content wave. Do not ask Yash to run Sited.
>
> ## HANDOVER: 27 Nov run 3 (superseded)
> - **Reviewer PASS (reported by orchestrator):** FAQPage JSON-LD on 21 blog posts; 'Capability claims:' label removed on homepage and /forging (CC closed); /forging exactly 1 H1 (P18 closed).
> - **Blog meta description fix: DONE via Wix Blog API (VflWebsite b5ce3a7 all posts, 574f4a7 canary, 355b59e job removed; results `ops/results/run-2026-11-26T21-09-00-027Z.json` (canary) and the following 'ops results' commit 57d874e).** Reviewer found live posts had no `<meta name="description">`. New job `ops/blog-meta.js` (same Draft Posts PATCH `UPDATE_PUBLISH` mechanism as the FAQ job): appends meta description (post excerpt, 130-154 chars) keeping all existing tags. Read-back, all 25 posts: `metaDescriptionPresent` true, `hasUnpublishedChanges` false, slug unchanged; FAQPage tag still present on 23 (ES and DE posts never had one). 22 posts patched, 3 already had a description (L3, buyer-guide, precision-forging-cost). **Awaiting reviewer verify live `<head>`** (2-3 posts incl. ES/DE).
> - Next: reviewer verifies meta descriptions live; KPI re-check 10 Dec; LinkedIn batch 2; GBP walkthrough once Yash answers.
>
> ## HANDOVER: 27 Nov run 2 (superseded by run 3)
> - **Reviewer results (reported by orchestrator):** C1-C4 blog posts PASS live; links round 2 (IL2) PASS 5/5 pages; 'Capability claims:' label PASS on /quality; homepage and /forging label still present after attempt 1 (7354946).
> - **Capability-claims attempt 2 (VflWebsite 4fca538, Publish green):** live markup is not a `<p>`: it is a text line inside one `<p>`, `...<br>\nCapability claims:<br>\n• ...`. New `removeLines` op in `w6content.js` removes the label line plus its `<br>` (whole-line match; inline sentences kept). Applied to plew4 (homepage) and a3evt (/forging). Unit tests extended (live-markup case), lint clean. **Awaiting reviewer verify.** If it persists, this is fail-twice: Editor delete by Yash (pending.md CC).
> - **/forging H1s (P18, same release):** DOM has 3 H1s: descriptive 'Closed-Die Forging for Carbon and Alloy Steel Components' (KEPT as page H1), an empty `<h1>&nbsp;</h1>` (removed with the existing `stripEmptyH1` op; it sits in the same rich-text element as the descriptive H1), and 'FORGING' (retagged h1 -> p, inline styles kept). **Awaiting reviewer verify** (expect exactly 1 H1).
> - **FAQPage JSON-LD on blog posts: DONE via Wix Blog API, 21/21 posts** (VflWebsite 2aa5b24 canary, 9dfa187 all, 9273f5d job removed; results `ops/results/run-2026-11-26T21-00-49-647Z.json`). Mechanism: Draft Posts PATCH `draftPost.seoData.tags` with `action: UPDATE_PUBLISH` (Posts API is read-only). Every post read back with `faqPagePresent: true`, question counts equal to the payload (3-6 Q&A, 1,043-1,836 chars each), slug unchanged, `hasUnpublishedChanges` false. All 21 posts had 0 existing seo tags, so the FAQPage script is their only seoData tag; reviewer should confirm live `<head>` still has title/description and the JSON-LD parses. Note: the orchestrator's count of 25 does not match; the payload has 20 posts with an FAQ section (22 minus ES and DE) plus the L3 Germany post in run.js = 21; the other 4 inventory posts (ES, DE, 2 older) have no FAQ section.
> - Next: reviewer verifies attempt 2 (homepage, /forging labels; /forging H1 count) and the FAQPage tags live (Google Rich Results style check of 2-3 posts); KPI re-check 10 Dec.
>
> ## HANDOVER: 27 Nov 02:15 run (superseded) (READ THIS FIRST; supersedes the 'IN PROGRESS' block below)
> - **QS1 + P17 attempt 2** (VflWebsite 62adc58, w6content text-matching): reviewer PASS on exactly 1 H1 on /quality and /automotive-steering-powertrain.
> - **C1-C4 blog posts LIVE** (content-ops fd57fe0, run-2026-11-26T20-50-40-925Z, drafts e6df43c): total 25 posts. C1 `how-to-choose-a-closed-die-forging-company-in-india-for-oems`, C2 `ppap-level-5-forging-supplier-in-india-a-capability-profile`, C3 `iatf-16949-forging-supplier-in-india-export-to-europe`, C4 `railway-bogie-component-forgings-from-india-buyer-guide` (all under /post/). Wix returned bare 200; reviewer must confirm each URL.
> - **Links round 2 + 'Capability claims:' label removal** pushed to VflWebsite 7354946 (+ f6989dd test fix), both Publish runs green. Related buyer guides on /about-1 (l95rc), /forging-manufacturer-india (q1c5f), /forging-company-maharashtra (n1h72), /forging-company-aurangabad (dpizt), /forging-manufacturer-pune (lgtlq); new `removeParas` op removes the label paragraph on /quality, homepage and /forging. **Awaiting reviewer verification of both.**
> - Next: reviewer verifies step 3 live; FAQPage JSON-LD for posts; KPI re-check 10 Dec.
>
> ## HANDOVER: as of 26 Nov 2026, end of session 3 (READ THIS FIRST)
> **IN PROGRESS (27 Nov ~01:30 IST), first attempt FAILED, not yet fail-twice:**
> 1. **QS1** /quality slide-1: VflWebsite aa1e9cb + 000d668 pushed, publish green, but reviewer rv2 (Firecrawl maxAge 0) shows served HTML still has 'Capability claims:' and 2 DOM H1s.
> 2. **P17** /automotive-steering-powertrain: aab379e retagged 22 h1 items to p, but served HTML still 23 DOM H1s. /steering-suspension-components and /electric-vehicles already 1 DOM H1 (earlier counts were warmup-JSON copies).
> 3. Next: executor diagnoses (likely client-only el.html vs SSR; compare Company.plew4.js; page-code error; CDN cache), one more attempt, reviewer verifies; if it fails again, pending.md as Editor-only. Also open: 'Capability claims:' label on homepage and /forging (see pending.md CC).
>
> **Rule breach this session:** Opus did verifications itself instead of the Haiku `reviewer` → limits burned. Next session: follow the model rule strictly (see CLAUDE.md gotcha).
> **DONE + verified live today:**
> - P14 CLOSED: renamed SEO titles/meta now served via Velo override (`src/public/seo-override.js`, generator `ops/tools/gen-seo-override.js`, VflWebsite e18884e, 484469a). Yash's Editor Publish did not help.
> - P12 CLOSED (9af45ca): 3 short titles; noindex on /electric-mobility + /transmission-and-driveline; restored og:url/og:type/twitter tags dropped by P14.
> - P16 CLOSED: false positive (warmup JSON copy of H1).
> - P7 DECIDED: keep /product (gallery); hide the 2 empty pages (done).
> - Sited 83/100 received; its H1→H6 issue was already fixed. Never ask Yash to run Sited.
> - **21 blog posts live:** L1, L2, L5-L8 landing posts + B1-B10 + L3/ES/DE + 2 older. URLs in the log below.
> - Drafts ready: P13 off-site address text, LinkedIn batch 2 (12 posts, real URLs) in `content-drafts/`.
> - Search baseline logged in PHASE4-PLAN.md (Varsha not top-10 yet; re-run 10 Dec and 24 Dec).
> **DONE (reviewer PASS 7/7):** "Related buyer guides" internal links from service pages to the new posts via Velo (executor, stage 1 = /quality, stage 2 = 8 more pages). **First thing next session:** check VflWebsite `git log` for commits "Related guides links"; have the `reviewer` verify live links + H1 counts on /quality, /railway, /steering-suspension-components, /buying-forgings-from-india; revert if broken.
> **Yash's list:** (1) P9 social icons (steps in chat 26 Nov; also in pending.md), (2) tell Claude if a Google Business Profile exists, (3) paste P13 text into outside listings, (4) optional: RDSO approval reference. Apollo/Lusha parked (recommend not now). P10 Enterprise cost decision still open.
>
> ## HANDOVER (previous): as of 26 Nov 2026 (two concurrent threads, same account — confirmed fine by Yash). Read `pending.md` first. Growth plan is `PHASE4-PLAN.md`.
> **This thread's work (23–26 Nov):** 2nd blog post live (`/post/how-to-source-closed-die-forgings-from-india-a-buyer-s-guide`, FAQPage + BlogPosting JSON-LD, 1,163 words, 0 DNP hits). Off-site Sprint 2 drafts committed (`capability-onepager-DRAFT.md`, `offsite-profiles-DRAFT.md`, `linkedin-posts-batch1-DRAFT.md`). **P8/P9/P10 closed:** P8 (visible date/byline) done and verified live on all 3 pages (one self-caught footer-nav regression, fixed with a `requireTag` discriminator in `w6content.js`). P9 (social icons) confirmed genuinely Editor-only — Wix's native Social Bar widget, outside `$w()`'s reach; attempted fix reverted. P10 (CSP) confirmed Wix Studio Enterprise-only via the Help Center — a spend decision, not a fix; parked for Yash's cost call. All on branch `ccr-1e875ebc-2tltlt`, PR #1 (clean, draft).
> **The other thread's work (26 Nov, same account):** city rename "Aurangabad" → "Chhatrapati Sambhajinagar (Aurangabad)" site-wide, owner's explicit GO — merged to `VflWebsite` main, live. Opened P11–P14 (see `pending.md`): P14 (SEO tags not rendering after 2 publishes) and P12/P13 still open; I independently re-verified P14 and P11 live on 26 Nov — both still present exactly as logged (see the 26 Nov entry below). 3 merge conflicts on PR #1 from the two threads editing `website.md`'s log in the same spot — all resolved cleanly, no code collision, no data loss.
> **Current `pending.md` summary:** Yash — P4b, P11 (FAQ-app edits, same visit), P9 (2 min, icons), then P7 (Editor Text elements), then P10 (cost decision). Claude — P14 (diagnose the non-rendering SEO tags), P12 (shorten 3 titles), P13 (off-site strings).
> **Live and verified**
> - **Velo + GitHub:** `erpvarsha-star/VflWebsite`, main 750cc2d (W6 merge + follow-ups + content-ops + republish). Every push to main AUTO-PUBLISHES via `.github/workflows/publish.yml` (secret `WIXKEY`, rotated by Yash 23 Nov — publish runs green). Yash approved live pushes (CLAUDE.md).
> - **Content-ops pipeline (NEW, live end-to-end):** `.github/workflows/content-ops.yml` (created by Yash via web UI) runs `ops/run.js` with `secrets.WIXKEY` against the Wix FAQ + SEO APIs and commits results to `ops/results/`. This is the channel for ALL future FAQ/SEO API work — the key never leaves GitHub.
> - **W5:** 41 corrected HTML embeds on 17 pages served from `/_functions/embed/<key>`. `applyTextCorrections` runs server-side on all 56 pages. 17/17 pages verified, 0 visible DNP hits (`baseline/w5-verify.md`).
> - **W6 (DONE 23 Nov):** all 3 approved content-drafts live via Velo on 10 pages. Verified in served no-JS HTML: exactly 1 visible H1 per page, 0 DNP hits, 656–1,678 words per touched page. Design note: `W6-DESIGN.md`.
> - **W7 (DONE 23 Nov):** browser layers slimmed; no machine counts in any source; **all 5 FAQ-app fact conflicts cleared at the data layer** — 500 FAQ v2 entries verified clean via content-ops; live gates 0 hits on pune/aurangabad/railway/ev. One residue parked: P4b (legacy FAQ widget on /forging-company-maharashtra serves a baked stale copy; Yash dashboard edit, text in `pending.md`).
> - **W8 (DONE 23 Nov):** 5 SEO fixes saved via `seo-metatags-server/v1/item-seo-tags` and verified rendering live after a forced republish — og:image on all 5 pages, trimmed V-Link title, short tool-mfg description. **Lesson: item-seo-tags writes render only after the next site publish.**
> - SEO/schema on all 49 pages, redirects and facts done earlier (see log below). sameAs: LinkedIn live on the homepage schema (22 Nov).
>
> **City rename (26 Nov 2026, owner GO): steps 1-4 DONE on `erpvarsha-star/VflWebsite` branch `rename-csn` (not on main).** Source edits, server-side rule (layer-3) with unit test, 10 SEO items and 3 blog posts already written to Wix (SEO tags render after the next publish). Step 5 (Opus merges `rename-csn`, publishes, Haiku re-scan) is next. Open: P11-P13 in `pending.md`. Details: `AURANGABAD-RENAME-PLAN.md` execution status.
>
> - **City rename (26 Nov):** "Chhatrapati Sambhajinagar (Aurangabad)" is live on visible text across all 55 pages, the footer and the blogs (`AURANGABAD-RENAME-PLAN.md`). Open: P14 (renamed SEO tags saved but not rendering), P11 (legacy FAQ edits, Yash), P13 (off-site, Yash).
>
> **Open, in order** (details in `pending.md` and `PHASE4-PLAN.md`)
> 1. **Yash, 5 minutes (P4b):** FAQ app → edit "What forging processes does Varsha Forgings offer?" → "Varsha Forgings provides hot closed-die forging solutions supported by its press and hammer systems." → Save.
> 2. **Yash: run Sited.** Everything API-fixable is live and verified; the only expected residue is the Maharashtra FAQ sentence until P4b is done.
> 3. **Blocked on the Editor (Yash):** /product, /transmission-and-driveline, /electric-mobility bodies (P7); visible dates/byline (P8); social icons (P9); CSP is a Wix-support question (P10).
> 4. **Phase 4 (growth):** execute `PHASE4-PLAN.md` — sprint 1 closes site gaps, sprint 2 off-site profiles/listicles, sprint 3 content engine, sprint 4 weekly rhythm (LinkedIn, email, lead-gen). KPIs against the 81/0% Sited baseline. Apollo/Lusha ~$50–100/mo needs his explicit approval.
>
> **Rules:** Opus plans, Sonnet executes, Haiku reviews. Ask Yash only on fact conflicts or spend over $50. No CIN, no machine counts. One Wix writer at a time. Refresh this block and the PHASE3-PLAN.md Status after every step.

**Source:** Sited AI Visibility Report, analysed 2026-11-22 · GEO Readiness Score 81/100 at time of report
**Scope:** 10 crawled pages — homepage, /contact-us-1, /about-1, /assembly-services, /about-1-1, /product, /forging-company-aurangabad, /company-profile, /electric-vehicles, /tool-manufactring

This file is the single working log for this fix cycle. Every action taken is logged here with date, method (API vs Editor), and status. Read this before resuming work on the Sited findings in a future session.

---

## Prioritised Plan (from the report, in order)

| # | Finding | Impact | Fixable by | Status |
|---|---|---|---|---|
| 1 | No `sameAs` links on homepage Organization schema | High (30 pts) | Claude, API — **needs real profile URLs from Yash first** | ⏳ Blocked on input |
| 2 | 7 of 10 pages under 500 words | Medium (17 pts) | Editor (Yash pastes expanded copy) — Claude can draft the copy | ✅ Done (W6) |
| 3 | 4 pages carry no structured data (`/about-1-1`, `/product`, `/electric-vehicles`, `/tool-manufactring`) | Medium (20 pts) | Claude, API | ✅ Done |
| 4 | No publication dates on 3 substantial pages | Medium (10 pts) | Schema-level: Claude, API. Visible on-page date: Editor (Yash) | ✅ Schema done / ⏳ visible date pending |
| 5 | Homepage title omits brand name | Medium (10 pts) | Claude, API | ✅ Done |
| 6 | No author byline on `/assembly-services` | Low (5 pts) | Schema-level: Claude, API. Visible byline: Editor (Yash) | ✅ Schema done / ⏳ visible byline pending |
| 7 | Missing `content-security-policy` header | Low (5 pts) | Wix-controlled on Classic Editor sites — likely not site-owner-adjustable | ⏳ Needs confirmation from Wix support |
| 8 | 2 pages (`/product`, `/electric-vehicles`) lack H1/H2 structure | Low (3 pts) | Editor only (page layout) | ✅ /electric-vehicles done (W6); /product pending P7 |
| — | og:image missing on pages that lack one | Low | Claude, API | ✅ Done — all Sited-crawled pages + W6 pages verified live 23 Nov |
| — | Social icons on homepage link to Wix's own Facebook/Instagram, not Varsha's | Not scored, but a real bug | Editor only | ⏳ Flagged for Yash (P9) |

---

## Action Log

### 2026-11-26 - Reviewer-fix release: llms.txt, sitewide rules, /product, /alloy-steel-forgings (executor)
- **P1 llms.txt (DO NOT PUBLISH breach):** `/llms.txt` is the Wix-managed file (Llms Txt API, `GET/PUT https://www.wixapis.com/promote-seo-robots-server/v2/llms`, `manuallyEdited: true`), not served from VflWebsite. It carried machine counts (CNC 60, VMC 17, HMC 2, hobbing 5, drilling 15, lathe 10), "2013 (Pune Plant)", BMW MTG Brackets/N597, plus warm/cold forging claims and the short name "Chhatrapati Sambhajinagar". Whole file rewritten from FACTS.md (2,297 chars): since 1989, Pune since 2007, full certification list, 1 kg-25 kg, +/-0.5 mm and +/-0.02 mm, 800-2,500 T presses, 1-3 MT friction drop hammers, capability-only machining line, no BMW, full city name, phone and email. PUT 200, API read-back equals the content, Firecrawl maxAge 0 shows it live. Previous content saved in this log only as above (counts not reproduced).
- **P2 sitewide (VflWebsite 312339b, 5fea826, both Publish green):** new `src/public/sitewide-fixes.js` (text rules + https href rewrite) wired into `corrections.js`; menu labels via `menuItems`. Live on /assembly (SSR): footer "2026", footer link https, nav label "Customers". Remaining "Customer's" strings are page-title metadata JSON only. Test `tests/sitewide-fixes.test.cjs` (idempotency, URLs/slugs/emails untouched); city test still 25/25; eslint clean. First footer-year rule missed (symbol form), fixed in 5fea826.
- **P3 /product:** tab label "Commercial Vehicle's" fixed live. Repeater buttons (Secotr 12, Steering Level 4, Swingram 4) not reachable after 2 attempts (c9cd5a3: `Button`; dea8167: `StylableButton`; both inside `onItemReady`), served HTML unchanged. No page-level Text element exists on /product (only master-page footer), so an H1 cannot be injected or retagged. Both logged in pending.md (P19, P20).
- **P4 /alloy-steel-forgings:** the "Forging Weight Range 0.5 kg - 20 kg" and "Broaching" cells are inside HTML embed `72f2bf_1da1ed23...`. Corrected copy `alloy-steel-forgings__1` in new `src/backend/embeds-extra.js` (not in the generated `embeds/` folder, which the generator wipes), merged in `http-functions.js`; `uqck0` page code swaps the iframe src. Live: iframe src is `/_functions/embed/alloy-steel-forgings__1`, table reads "1 kg - 25 kg" and "Broaching (through vendor partners)".
- Note: existing generated rule maps "Swingram Mount" to "Swing Arm Mount" (brief said "Swingarm Mount"); kept, matches FACTS "swing arm".

### 2026-11-27 - Blog meta descriptions on all 25 posts (executor)
Reviewer PASS (per orchestrator): FAQPage schema on 21 posts; 'Capability claims:' label removed on homepage and /forging; /forging has 1 H1 (P18 closed). Reviewer then found live blog posts had no `<meta name="description">`. Fix: `ops/blog-meta.js` + job file (VflWebsite 574f4a7 canary on the L3 post, b5ce3a7 all, 355b59e job removed, README updated). Canary read-back: description present, FAQPage kept, slug unchanged. Full run read-back, 25/25: meta description present, hasUnpublishedChanges false, slug unchanged; 22 PATCHED, 3 already had one; FAQPage present on 23 (ES/DE have none by design). Backups in `ops/results/blog-meta-backup-*.json`. Live `<head>` check pending reviewer.

### 2026-11-27 - FAQPage JSON-LD on 21 blog posts; Capability claims attempt 2; /forging H1s (executor)
- **FAQPage:** new `ops/blog-faq.js` + `ops/payloads/blog-faq-schema.json` in VflWebsite (job-file mode like the rename job; job file deleted after the run). Wix docs: Posts API is read-only; edits go through Draft Posts PATCH with `action: UPDATE_PUBLISH`. Canary on 1 post (2aa5b24) read back OK, then all 21 (9dfa187): 21/21 PATCHED/ALREADY, 0 failures, 0 retries. Q&A copied exactly from payload nodes; no trimming needed (max 1,836 chars vs 3,600 limit). Backups in `ops/results/blog-faq-backup-*.json`.
- **Capability claims attempt 2 + /forging H1s:** VflWebsite 4fca538, Publish run 45895587615 success. Details in the HANDOVER block above.
- Pipeline lesson: pushing a code commit after the bot's "ops results" commit needs `git pull --rebase` first.

### 2026-11-27 ~01:30 IST - QS1/P17 first attempt FAILED (logged by Opus)
- Executor pushed to VflWebsite main: aa1e9cb (Quality.t6wcz.js: Velo rewrite of slide-1 text in comp-mu59fb5u, remove 'Capability claims:'), aab379e (tfegr: 22 'forged' link items comp-mtu3.../comp-mttzn3j4 h1->p), 000d668 (Quality slide-1 heading comp-mu59fb5s h1->h2). All publish runs green.
- Haiku reviewer rv2 (Firecrawl maxAge 0): FAIL. Served HTML still OLD: /quality has 'Capability claims:' and 2 DOM H1s; /automotive-steering-powertrain 23 DOM H1s. PASS: titles and related-guide links. Mobile screenshot inconclusive.
- /steering-suspension-components and /electric-vehicles already had 1 DOM H1 (P17 counts there were warmup-JSON copies).
- First failure only. Hypotheses and next step in pending.md (QS1, P17, CC).

### 2026-11-22
- **Published `/precision-forging-cost` as a Wix Blog post** (Owner's Path — no Editor page creation). SEO title/meta/FAQ schema set via API.
- **Folded consultant-plan facts** (OEM list, export countries, 2011 patent, 2014 India SME Excellence Award, 2025 India SME 100 Award — all source-verified against Varsha's own company presentation, not the consultant's unverified version) into `/forging-manufacturer-india`, `/forging-company-aurangabad`, `/forging-company-maharashtra`, `/forging-manufacturer-pune`, `/oil-and-gas`. CIN explicitly left out per instruction.
- **Homepage (internal id `plew4`, served at `/`) fixes, pre-dating this report but same scope:**
  - Added `og:image` meta tag.
  - Added homepage FAQ schema (3 Q&A) merged into existing Organization schema.
- **Sited full report received and logged** (this file created).

### 2026-11-22 (continued) — Sited full report received, fixes actioned

Full Sited report (GEO Readiness 81/100) read and parsed into the Prioritised Plan table above. API-doable fixes actioned immediately:

- **Finding 5 (homepage title, Medium, 10 pts) — DONE.** Title changed from "Closed-Die Forgings, Precision Machining and Assembly from India" to "Varsha Forgings | Closed-Die Forgings, Precision Machining and Assembly from India".
- **Finding 3 (4 pages with no structured data, Medium, 20 pts) — DONE, with a correction to the report.** `/about-1-1`, `/product`, `/electric-vehicles`, `/tool-manufactring` already carried FAQ schema (pre-existing, not from this session) — Sited's crawl evidently didn't count bare FAQPage JSON-LD as "structured data" since there was no Organization/Service node. Converted all 4 to `@graph` format: Organization + Service + existing FAQ, preserved content, added `dateModified`.
- **Finding 4 (no publication dates, Medium, 10 pts) — schema-level DONE.** Added `dateModified` to `/assembly-services`, `/forging-company-aurangabad`, and `/company-profile` (the latter needed an Organization node added first, since its schema was FAQ-only). **Visible on-page date still pending — Editor-only, see Pending for Yash below.**
- **Finding 6 (no author byline on `/assembly-services`, Low, 5 pts) — schema-level DONE.** Added `author: Organization` to its schema node. **Visible byline still pending — Editor-only.**
- **og:image sweep across all 10 Sited-crawled pages — DONE.** Added to the 9 pages that lacked it (`/contact-us-1`, `/about-1`, `/assembly-services`, `/about-1-1`, `/product`, `/forging-company-aurangabad`, `/company-profile`, `/electric-vehicles`, `/tool-manufactring`); homepage already fixed earlier this session.

### 2026-11-22 (continued) — CORRECTION: Phase 1 failed its gate

The entry below was logged as "complete" without verification. Measured afterwards with `scripts/check-wordcount.sh` (visible copy, excluding SEO title/meta): `/electric-vehicles` 375, `/about-1` 376, `/contact-us-1` 303, `/about-1-1` 311, `/tool-manufactring` 210, `/product` 207, homepage addition 189. **0 of 7 met the 550-word target**; two drafts were shorter than the live pages they were meant to expand. Root cause: thin fact base and no measurable acceptance test in the agent brief. Fixes: `FACTS.md` created as the single verified fact source, `check-wordcount.sh` added as the gate, `PLAN.md` v2.0 written with exit gates per phase. Phase 1 rework launched under the new brief. Drafts below are superseded.

### 2026-11-22 (continued) — Phase 1 rework, group A: gate PASSED (verified independently)

`scripts/check-wordcount.sh 550` run by the orchestrator, not just the agent: `/electric-vehicles` 617, `/about-1` 571, `/contact-us-1` 574, exit 0. Scan for DO NOT PUBLISH terms (BMW, KTM, 1988, 0240, seven-groove, SME Chamber, 60 CNC/17 VMC): none. Each page has an H1, 4-5 H2s and a 3-question FAQ, sourced from `FACTS.md`. EV axle mounts and steering levers were dropped because they aren't in `FACTS.md`.

**Owner must confirm before Gate 1 closes (in `/contact-us-1` copy):**
1. The RFQ sequence as written (drawing → feasibility → quote → PPAP). It's inferred from PPAP Level 3 + in-house die shop, not from a documented procedure.
2. "Plant visits can be arranged by phone." A reasonable reading, but not in `FACTS.md`.

### 2026-11-22 (continued) — Phase 1 rework, group B: gate PASSED. All 7 drafts pass.

Orchestrator re-ran the gate across both files: `/about-1-1` 608, `/tool-manufactring` 607, `/product` 574, homepage addition 166 (takes the live page from 483 to ~649), exit 0. No DO NOT PUBLISH claims. Vendor capacity on `/product` is correctly framed as "15 dedicated machining vendors", not in-house (F18).

**Owner must confirm before Gate 1 closes (group B):**
3. Industry-segment wording (passenger vehicle, two-wheeler, agricultural) on `/about-1-1` and `/product`. It's inferred from the customer list (Bajaj, TVS, John Deere, TAFE), not stated in `FACTS.md`.
4. Optional: add steel grades to `FACTS.md`. The live `/forging-company-aurangabad` schema lists EN8, EN9, EN19, EN24, 20MnCr5, 16MnCr5, 42CrMo4, 20MoCr4E and SAE1541. If you confirm them, `/product` can name grades.

**Gate 1 status:** word-count and fact checks passed. Waiting on the owner's read-through plus items 1-3. Once approved, the Phase 2 click-list goes to Yash.

### 2026-11-22 (continued) — Phase 1 first attempt (superseded, see correction above)

Two background forks completed, per `PLAN.md` Phase 1. All 7 pages Sited flagged as under 500 words now have ready-to-paste expanded copy, committed to `content-drafts/`:

- `content-drafts/electric-vehicles-about-1-contact-us-1-DRAFT.md` — `/electric-vehicles` (148→~450w), `/about-1` (222→~470w), `/contact-us-1` (267→~380w), each with H1 + H2 sections + FAQ block.
- `content-drafts/about-1-1-tool-manufacturing-product-homepage-DRAFT.md` — `/about-1-1` (282→500+w), `/tool-manufactring` (352→500+w), `/product` (367→500+w, replaces bare gallery framing with per-product-family intros), homepage (+2 new H2 sections past the existing 483w, existing H1/H2/schema untouched).

All copy grounded only in facts already verified this session — no invented customers, certs, or figures. **Status: drafted, not yet live.** Next step is Yash's Editor pass (Phase 2 per PLAN.md) — paste each page's copy, which also gives the chance to fix Findings 4/6/8 (visible dates, byline, H1/H2 structure) in the same sitting since the Editor is already open.

### Pending — needs Yash (Editor-only, no API path)
- **Finding 8:** add a proper H1 + at least 2 H2 sections to `/product` and `/electric-vehicles` (both currently have a null H1).
- **Finding 2:** expand 7 thin pages above 500 words — `/electric-vehicles` (148w), `/about-1` (222w), `/contact-us-1` (267w), `/about-1-1` (282w), `/tool-manufactring` (352w), `/product` (367w), homepage (483w). **Claude can draft this copy for Yash to paste — ask if you want that done now.**
- **Visible publication date** on `/assembly-services`, `/forging-company-aurangabad`, `/company-profile` (schema-level date is live; a human-visible date on the page itself is Editor work).
- **Visible author byline** on `/assembly-services` (schema-level done; visible byline is Editor work).
- **Bug found, not in the Sited report:** the homepage's social icons link to Wix's own Facebook/Instagram pages (`facebook.com/wix`, `instagram.com/wix`), not Varsha's — leftover template default. Needs Yash to swap the links in the Editor.

### Pending — needs input from Yash (not Editor-work, just facts)
- **Finding 1 (sameAs links, High, 30 pts) — the single biggest fix available, not yet done.** Needs Varsha's real, verified external profile URLs (LinkedIn company page, any industry directory listings, YouTube if any) before I add them to the Organization schema. **I will not invent these URLs.**

### Not actionable by anyone here
- **Finding 7 (missing content-security-policy header, Low, 5 pts).** This is server/CDN-level config. On a Wix-hosted Classic Editor site, this is controlled by Wix itself, not exposed to site owners via API or Editor settings. Needs a check with Wix support to confirm whether it's adjustable at all before treating this as actionable.

### Score trajectory (per the report's own arithmetic)
Quick Wins alone (all now done except sameAs, which needs input): report estimates 81 → 90.
Quick Wins + Medium-Term content expansion: 81 → 97 (Brand Authority capped at 80 without verified off-site presence — that's the sameAs/off-site work in Finding 1 and the Strategic Initiatives section).


### 2026-11-22 (continued) — Owner rules applied; Phase 3 dispatched under the new model split
- **Owner decisions:** LinkedIn `https://www.linkedin.com/company/varsha-forgings-private-limited/` is the sameAs profile. CIN is never published (F11 closed). No CNC/VMC/HMC machine counts anywhere (F18 rule).
- **Model rule set** (`CLAUDE.md`, `.claude/agents/`): Opus plans and dispatches, Sonnet executes, Haiku reviews.
- **Tracker stack decided** (`PLAN.md` §1): GSC, GA4 AI-referral visits via Windsor.ai, Wix Forms lead count, visibility.ai Starter $39/mo (Yash to sign up), Sited quarterly.
- **Weekly Monday task updated** (`trig_01CcK6WNr29MzcPgQbkWaW9S`, Sonnet): now enforces the HARD RULES, checks sameAs, and reports a KPI strip (GSC · AI-referral visits · leads this week). Before this it measured no leads at all.
- **Dispatched (Sonnet executors, in parallel, one Wix writer):** (1) add sameAs to homepage `plew4` + sweep all 49 pages for machine counts; (2) strip machine counts from `content-drafts/`. A Haiku reviewer verifies both before anything is logged as done.

### 2026-11-22 (continued) — Owner answers; tracker plan corrected
- **Owner confirmed:** RFQ sequence is drawing → feasibility → quotation → PPAP. Customers are welcome to visit the plants after an RFQ. Both added to `FACTS.md`.
- **Correction to the tracker decision above:** no new sign-ups. The owner has already paid for Sited and uses it year-round, so visibility.ai is dropped (F17 closed). AI-citation tracking now comes from Sited's live AI check plus GA4 AI-referral visits.
- **Queued after the reviewer finishes:** restore the RFQ steps and the post-RFQ visit offer in the `/contact-us-1` draft (executor), then re-review that page.

### 2026-11-22 (continued) — Reviewer (Haiku) verdict: OVERALL FAIL. Findings and actions
**Passed:** sameAs live on homepage `plew4` · Pune meta, LocalBusiness and FAQ in SEO/schema now Pune-specific with the in-house/vendor split · zero machine counts across all 49 pages' SEO data · drafts gate exit 0 · no banned terms in drafts · 9 of 10 fact-traces.

**Failed:**
1. Machine counts are still in the **visible body text** of `/forging-manufacturer-pune` ("over 60 CNC turning centers, 17 VMCs") and the `/forging-company-maharashtra` FAQ ("60 CNC machines, 17 VMCs, 2 HMCs"). The schema fix didn't touch Editor body text. → Yash, Phase 2.
2. Only 11 of 49 live pages were swept. → A full fresh sweep has been dispatched to the reviewer.
3. "Driveline" in the EV draft isn't in FACTS. → Executor dispatched.
4. Live conflicts with FACTS: `/company-profile` "Pune plant established in 2007" (deck: Maxility 2007, Pune 2013); weight ranges `/forging` 1–25 kg vs Aurangabad 0.5–50 kg. → Owner to confirm.
5. **Lead-critical:** footer and mailto use `marketing@varshaforging.com` (missing "s"). → Top of Yash's Phase 2 list.

**Rules added to CLAUDE.md:** general engineering explanation is allowed; pre-existing live claims not in FACTS are batched for owner confirmation, not auto-deleted; schema fixes don't fix visible body text, so verify both.

### 2026-11-22 (continued) — Full 49-page live audit; Article schema; owner and Yash deliverables
- **Full live audit (Haiku reviewer, 49/49 pages fresh):**
  - Machine counts are in the visible text of **7 pages**: Pune, Maharashtra, suspension, railways, and the radius-rod, V-link and torque-rod assemblies pages.
  - 12 claims conflict with the company deck (Pune "2007", acquisition "2009", IATF "2024", award years, "500T" and "1,000–5,000 T" presses, rubber bonding described as in-house, and others).
  - The site contradicts itself on weight range and tolerance.
  - High-risk unsupported claims: RDSO/EN/UIC/AAR compliance; competitor claims about Chinese suppliers.
  - Many untraceable specifics, apparently from earlier AI/consultant passes.
  - **mailto typo `varshaforging.com` in the footer on every page and on /contact-us-1, so enquiries may bounce.**
- **Delivered:** `OWNER-CONFIRM.md` (35 items, with defaults) and `PHASE2-YASH-CLICKLIST.md` (26 steps in 6 blocks, lead-critical first).
- **F21 done (executor, API):** Article + author (Organization; no person byline is shown live) on `/forging-company-aurangabad`, `/company-profile`, `/assembly-services`. To stay under the size limit, `dpizt` dropped hours/geo/duplicate contactPoint/description and `slaet` dropped duplicate fields. Restore hours/geo after owner item 32.
- **Dispatched (executor):** meta/title fixes on /railway, /media, /alloy-steel-forgings, /forging-presses-hammers (800T, not 500T).

### 2026-11-22 (continued) — Fact confirmation round with Yash (one multiple-choice question at a time)
Rule added to CLAUDE.md. All answers recorded in FACTS.md with [Y]. **Confirmed:**
- Presses 800 T–2,500 T, incl. a new 1,000 T press
- Weight range 1–25 kg
- Tolerances: forging ±0.5 mm, machining ±0.02 mm
- Pune since 2007
- RDSO approved (not EN/UIC/AAR)
- Rubber bonding and broaching are vendor processes
- Capacity 12,000+ MT/yr and 3M+ pieces/yr
- Carbon/alloy grades incl. A105/LF2/F11/F22, no stainless
- Industries incl. oil & gas, mining/off-highway and e-buses, not aerospace
- PPAP Levels 1–5, APQP, IMDS, export logistics (no ZLD)
- Process temperatures, die steels, software, SPC/Cpk, testing
- Assembly specs and JIT
- Hours: Aurangabad 09–18, closed Friday; Pune 09–18, closed Sunday
- 13 more customers (Corvette removed)
- ACMA 2020 and Ashok Leyland 2023 awards
- Piyush = Director
- "Since 1989" phrasing, 60% OEM share
- Full product range (no EV motor parts)
- Surface treatments (no warm/cold/open-die forging)
- Asia-Pacific exports, air freight for samples, virtual tours, 2D/3D drawings
- Bios, CSR, Tier 1/2 (slogan removed)

`OWNER-CONFIRM.md` is marked resolved. The weekly Monday task prompt now carries these facts, so it won't flag them as drift.
**Dispatched:** (1) executor aligning the 7 drafts to the new facts (no Wix); (2) **owner-approved** ("Apply all now") executor correcting SEO/schema on all 49 pages, including restored opening hours. A reviewer verifies after.

### 2026-11-22 (continued) — Final SEO/schema cleanup batch; text-automation decision
- **Cleanup batch (executor, all PATCH 200):**
  - Pune described as machining and assembly (tfegr); hammers 1–3 MT (n2uai, l95rc).
  - Positive single-supplier wording (arrpe, lgtlq, slaet, owlox); high-speed-rail overclaims removed (l2sru).
  - h3p1f meta rewritten; "VFL" replaced (a3evt, odejn).
  - EV pages now suspension and steering only (jq1y2); subsea removed (xr827); "1981 roots" removed (unlvj).
  - 48-hour promise now says "single drawing or part" (mfcwu, pa6w8, wu1va, zwiw1).
  - Organization nodes now have name "Varsha Forgings" plus legalName on all pages except dpizt (at its size limit).
  - Oversized scripts compacted; to fit, BreadcrumbList was dropped on mfcwu, wu1va and zwiw1.
  - Re-scan: 0 hits across 49 pages.
- **Open:** dpizt is at its size limit (no legalName; hours and geo were trimmed earlier). Leftover superlatives ("leading", "renowned", "cost-effective") on a3evt, q1c5f, gfauz, odejn. "Forging Manufacturer in Pune" titles imply forging at Pune (lgtlq, jo7nt). "Friction drop hammers" is not in FACTS. **F27 redirect:** `/forged-machined-components` → `/alloy-steel-forgings` hides page arrpe.
- **Decision (Yash):** visible-text corrections via a **Velo + GitHub code layer** (F26). Research is in `AUTOMATION-OPTIONS.md`, setup steps in `SETUP-VELO-GITHUB.md`.

### 2026-11-22 (continued) — F27 redirects updated (owner-approved)
The Redirects API has no update method, so each was deleted and recreated. All calls returned 200, and the new IDs are below.
- `/forged-machined-components` → **`/forged-machined-components-vf`** (new ID 4fc5982d-e1f3-4442-914a-5a152295d346; was → /alloy-steel-forgings)
- `/forged-machined-components-1` → **`/forged-machined-components-vf`** (75219b15-bd40-494a-9fea-75546e741a97; was chained)
- `/copy-of-alloy-steel-forgings` → **`/alloy-steel-forgings`** (e30f2e8b-c10e-4714-9a19-6eb628973195; was chained)
- `/blank` and `/about-us` untouched.

**Live check:**
- `/copy-of-alloy-steel-forgings` lands correctly.
- The two plain `/forged-machined-components*` URLs still land on /alloy-steel-forgings, while cache-busted requests land on `-vf`. Likely a stale edge cache.
- **Re-verify later**; if still stale, republish or ask Wix support.

### 2026-11-22 (continued) — Custom Embed correction layer: pilot (owner-approved)
- Created Wix custom embed **"VF Corrections Layer"** (id 546ea6cc-003e-41ef-a6f8-97e23f614e77, BODY_END, ESSENTIAL, loadOnce) via the Custom Embeds API. No Editor or GitHub step was needed. The site had no embeds before.
- Pilot rule: rewrite `mailto:marketing@varshaforging.com` → `mailto:marketing@varshaforgings.com` on every page (browser-side, with a MutationObserver for Wix's client-side navigation).
- Source of truth: `corrections/embed-layer.js`. Future rules are added there and the embed is updated via the API (pass the revision).
- **Limit:** runs in the browser, so humans and Google see the fix, but non-JS AI crawlers don't. Velo + GitHub (F26) gives the server-side version.
- Verification: Playwright was blocked by the sandbox proxy (www.varshaforgings.com not allowed). The reviewer is verifying via Firecrawl instead.
- **Pilot verified PASS (Haiku reviewer, Firecrawl browser render):** home and /contact-us-1 show every mailto href as `marketing@varshaforgings.com`; the embed script is present in the page body. The audit earlier today saw the typo in those hrefs, so the fix comes from the layer. **Lead-critical bug F25 is resolved for visitors.**
- **Next:** batch 1 of factual visible-text corrections via the same embed (executor dispatched). The 7-page copy rewrites follow in a later batch.

### 2026-11-22 10:40 UTC — Scheduled F27 re-check: PASS
All 3 redirects land correctly live (Haiku reviewer, Firecrawl). Edge cache cleared. Batch 1 visible-text executor had failed on the usage limit with no changes made. It is queued for the next working session.

### 2026-11-22 — Batch 1 visible-text corrections deployed via Custom Embeds (partial reach)
- **Deployed:** embed 1 "VF Corrections Layer" (546ea6cc…, rev 2, 11.9k chars) and **new** embed 2 "VF Corrections Layer 2" (8733abc0-12cc-47f5-bf5a-41d7ee045d64, rev 1, 10.8k chars). Wix caps each embed at 15k chars.
- **Rules:** 122 text, 11 hideText, 4 alt, 1 href. Sources are `corrections/embed-layer.js` and `corrections/embed-layer-2.js`; the table is `corrections/RULES.md`.
- **Self-check findings:**
  - (1) The layer applies **late** (corrected at 12–25 s, not at 6 s), so visitors briefly see the old text.
  - (2) **Tables and bullet lists inside Wix HTML-embed iframes are unreachable** from page script: the Pune equipment table and diagram, the suspension machine-count table, the India-vs-China tables, the EV table, and railway Charpy/UIC/AAR. They stay wrong until fixed in the Editor or Velo.
  - (3) Ten pages were covered only by global rules.
- **Open owner items raised:** EN 10204 3.1/3.2; advance payment and LC terms; 15+ yr rubber life; "tier-one mills"; friction drop hammers; SAE1018 and C45 grades; duplicate EV paragraph on torque-rod and assembly pages; wrong article on /steering-suspension-components; "24–48 hour" lead time on Pune; Corvette logo image.
- **Status:** NOT marked done. A reviewer verifies next.

### 2026-11-22 — Batch 1 reviewer verdict: PARTIAL (8 of 48 pages fully clean)
Haiku reviewer, all sitemap pages, Firecrawl waitFor 25 s.
- **Clean:** /customer, /request-for-quote, /contact-us-1, /commercial-vehicle, /agriculture, /railway, /media, /industrial-application.
- **Most remaining hits are (a) table cells, lists and HTML-embed iframes that the browser layer can't reach.** This includes machine counts on Pune, Maharashtra, suspension, railways and manufacturer-india; China/MOQ/lead-time tables; EV RPM/µm/motor parts; and 0.5–50 kg on about-1, about-1-1, oil-and-gas, forging-vs-casting, torque-rod and radius-rod.
- **Rule misses to fix in the layer:** rule 13 ("up to 50 kg"), rule 62 ("DELIVER."), rule 119 ("LFull"), rule 29 (second 2009 history copy). hideText 1–4 and 10 didn't hide their targets.
- **Reviewer over-flags, already confirmed in FACTS:** Daimler 2023 letter, ACMA 2019, SME100 27,467, bios incl. ZF "Managing Director" role.
- **Untraced, ask owner:** construction/infrastructure/defense industries; "ape" logo; EV "drivetrain" wording; control-rod assemblies; normalizing; grinding in-house; Middle East & Africa exports; "complaint-free products".
- **Conclusion:** the browser-layer channel can't clear the highest-risk content. **Velo + GitHub (server-side, can control HTML-embed components) or a paste of corrected HTML per embed block is required.**

### 2026-11-22 — Facts added; ask-only-on-conflict rule
- FACTS.md [Y]: construction/infrastructure/defense industries; Middle East & Africa exports; normalizing; grinding in-house; control-rod assemblies (adjustable/crimped).
- CLAUDE.md: Yash is asked only when live data conflicts with FACTS.md. Non-conflicting live claims stay and are logged as [L].

### 2026-11-22 — Batch 1 rule-miss fix pass: embeds redeployed
Sonnet executor. Fixed the misses from the batch 1 reviewer verdict and redeployed both embeds (GET then PATCH with the current revision; read-back html equals the local files, djb2 hashes match).
- **Embed 1** `546ea6cc-...` revision 2 -> **4**, 13,299 chars html (13,282 source; local file `corrections/embed-layer.js`). **Embed 2** `8733abc0-...` revision 1 -> **3**, 12,446 chars html (12,429 source; `corrections/embed-layer-2.js`). Both under 15,000. (Revision 3 / 2 was an intermediate deploy that held literal invisible characters; revision 4 / 3 holds the `\u` escapes.)
- **Rules changed:** 13 (tolerant of spacing, dash type, NBSP, "up to"); 29 (heading prefix dropped so every copy matches); 35 (tolerant IATF dash/space); 62 (live text is "DELIVER." not "DELIVERY"; fragment rules added); 119 (`/LFull/`); hideText 1-4 and 10 (case-insensitive, whitespace/dash tolerant, deepest element then enclosing tr/li/p, wrapper climb).
- **New rules 123-130:** "We has been"; "FORGIN "; "Commercial Vehicle's"; "IATF- 16949"; Pune "Year Established 2013" (inline and table-cell pair); "08:00" -> "09:00"; Aurangabad Mon-Sat -> Sat-Thu (closed Friday). Pune already reads Mon-Sat, so closed-Sunday needs no rule.
- **Engine:** NBSP/whitespace normalised before matching; no innerHTML; runs at load, 1 s, 3 s, 8 s plus the MutationObserver.
- **Checked:** `node --check` passes on both files; a jsdom smoke test showed the rule 13 variants, DELIVER motto, LFull, FORGIN, Commercial Vehicles, IATF, year, hours and hide rules all applying. Live pages not verified (reviewer next). The Aurangabad hours rule is untested live because the exact live wording was not found.
- **Status:** NOT marked done. A reviewer verifies next.

### 2026-11-22 — Layer rev 4/3 live check (reviewer, 10 pages): 3 clean, 35 FAIL items
- Clean: /, /company-profile, /contact-us-1.
- ~28 FAILs sit in tables/HTML embeds the layer can't reach. This includes the Pune machine-count table (DO NOT PUBLISH), 0.5–50 kg tables, stainless and ASME tables on /about-1 and /oil-and-gas, and the Pune/Aurangabad hours tables. **Needs Velo + GitHub or the embed HTML paste.**
- ~7 rule gaps queued for executor round 2: R129/130 en dash; R124 FORGIN at block end; R119 LFull still live; R13 paragraph on /oil-and-gas; ×N machine-count layout; R42 Broaching variants; 55–75 Shore A.
- FACTS.md correction-queue hours line updated to the owner-confirmed 09:00–18:00.
- Untraced but non-conflicting claims (IATF 16949:2016, 24–48 h lead time, cryogenic, Industrial Enamel, 3–25 kg) stay per the ask-only-on-conflict rule and are logged as [L].

### 2026-11-22 — Round 2 layer gaps: embeds redeployed; schema hours read-back
Sonnet executor. Root causes found by reading the live raw HTML (Firecrawl, maxAge 0), not by guessing.
- **Embed 1** `546ea6cc-...` revision 4 -> **5**, html 13,429 chars (source 13,412, `corrections/embed-layer.js`, escapes only, no rule changes). **Embed 2** `8733abc0-...` revision 3 -> **4**, html 13,814 chars (source 13,797, `corrections/embed-layer-2.js`). Both under 15,000. Read-back html equals the local file wrapped in `<script>` (djb2 of source matched before PATCH; html has zero non-ASCII characters). `node --check` passes on both.
- **Rules changed (embed 2):** R124 `/\bFORGIN(?![A-Za-z])/` (block end or punctuation, never inside FORGING); R129/R130 accept hyphen, en dash, em dash, minus; new R131 Pune "Monday–Saturday (closed Sunday)"; R132 strip " ×N" after CNC Turning Centers / VMC / HMC / Gear Hobbing; R133 broaching sentence -> "...End-Face Machining (broaching via vendor partners)"; R134 any "55–75 Shore A" -> "Application-specific hardness"; R135 hide table rows whose label is CNC Turning Centers, Vertical Machining Centers, Horizontal Machining Centers, Gear Hobbing Machines or Broaching Units; R136 hide an "in-house" list item that is just "Broaching". Unit-tested in node on the exact live strings. RULES.md header range and rows 124, 129-136 updated.
- **Root cause R119 "LFull":** the text sits in an HTML-embed iframe ("WHY BUYERS CHOOSE US", filesusr.com, cross-origin) on /forged-machined-components-vf. No page script can read it. The rule is correct but unreachable. Fix is an Editor/Velo edit of that HTML embed.
- **Root cause R13 on /oil-and-gas:** the paragraph is not the miss. The rendered DOM already reads "precision component weights from 1–25 kg", so the layer works there. The remaining "0.5 kg to 50 kg (1.1 lbs to 110 lbs)" is a row in an HTML-embed iframe table (cross-origin), unreachable.
- **Also unreachable (iframes):** on /forging-manufacturer-pune the machine-count layout "[CNC Turning Centers ×60] → [VMC ×17] → [HMC ×2]", "[Gear Hobbing ×5]", the equipment table rows and "Monday–Saturday, 08:00–18:00 IST" are all inside HTML-embed iframes. R132, R135 and the Pune hours rule only help where the text is in the page DOM. These need Velo or an Editor paste of corrected embed HTML (DO NOT PUBLISH machine counts remain live in them).
- **Schema hours (Part B), read-back, no write needed:** STATIC_PAGE `lgtlq` (Pune) openingHoursSpecification = Monday–Saturday 09:00–18:00; `dpizt` (Aurangabad) = Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday 09:00–18:00 (closed Friday). Both already correct, so no PATCH was sent. JSON-LD sizes: lgtlq 3,523 chars (3 tags), dpizt 3,600 chars (4 tags; at the 3,600 cap, so no growth is possible). Neither graph has a separate `openingHours` string property.
- **Status:** NOT marked done. Live pages not verified (per brief); reviewer next.

### 2026-11-22 — Velo + GitHub connected
- Yash connected the Wix site to GitHub. Repo `erpvarsha-star/VflWebsite` (private), branch `main`, initial commit 5e7dc78; `wix.config.json` siteId matches 4a42e2d8.
- Contents: `src/pages/*.js` for all ~60 pages (named `<Page>.<pageId>.js`), `masterPage.js`, `src/backend`, `src/public`.
- The repo is attached to this session (clone at /home/user/vflwebsite). Next: a pilot with one fix (footer email href) in `masterPage.js`, after the layer round-2 executor finishes (one Wix writer at a time).
- `erpvarsha-star/website` stays as the ops/docs repo; Wix only syncs with the repo it created.

### 2026-11-22 — Phase 3 plan (PHASE3-PLAN.md)
Yash's side is complete. Workstreams W0–W8 are defined; W0 (baseline), W2 (brand kit) and W3 (content and embed HTML) start in parallel with W1 (Velo research). All Wix writes stay serial.

## 22 Nov 2026 - W4 Velo pilot (awaiting owner Publish)
- Site-code commit `4ed2cab` pushed to `erpvarsha-star/VflWebsite` main (not published): `masterPage.js` footer email fix (marketing@varshaforging.com -> marketing@varshaforgings.com, Button link + Text html, try/catch); `Forging Manufacturer Pune.lgtlq.js` DO NOT PUBLISH stopgap that collapses the embeds with hashes `72f2bf_67e78ccdca212a0b2190ce8f60a915e2` (plant layout, CNC/VMC/HMC/hobbing counts) and `72f2bf_cf35346801ce140403d76fe7f1fd6dcc` (equipment table). ESLint clean.
- SSR checker `.github/workflows/ssr-check.yml` ran OK; baseline in `baseline/ssr-before.md`.
- Unverified until Publish + re-run: that `$w('Button')`/`$w('Text')` hit the footer, that `HtmlComponent.src` returns the filesusr URL in code mode, and SSR effect.

### 2026-11-22 — W3 drafted; W3 review and W5 prep dispatched
- W3 (ce78c18): 60 embeds, 41 corrected (175 edits), originals kept. F28 thin pages and the steering article drafted. Existing drafts updated to the newest facts. Gate PASS.
- Dispatched: Haiku review of all corrected embeds (embeds/REVIEW.md); Sonnet W5 prep on VflWebsite branch `w5-embeds` (http-functions serving the corrected HTML plus a src swap). Main is untouched until the pilot is verified.

### 2026-11-22 — W0 baseline complete
49 sitemap entries snapshotted (`baseline/`). Empty bodies: /transmission-and-driveline, /electric-mobility (new copy needed in W6). Machine counts are in native text on 5 pages, so W5 scope now includes `src/public/corrections.js` (the RULES ported to Velo, called from every page). H1 structure problems are queued for W6.

### 2026-11-22 — W5 prepped (not live)
VflWebsite `w5-embeds` 9757629: 38 corrected-embed modules served by `/_functions/embed/<key>`, 41 src swaps on 17 pages, 136+11+1 rules ported to `src/public/corrections.js` and called on every page. Lint clean; mock tests pass. Merge only after the W4 pilot is published and verified and the W3 review passes. Rules with no Velo equivalent (Year Established cell-pair, rows(), image alt) stay in the browser layer.

### 2026-11-22 — W3 review ruled by Opus
The Haiku review (embeds/REVIEW.md, 4d2a602) gave 50/60 PASS. Of its 17 FAIL items, Opus ruled 5 to be true conflicts: "under one roof" vs two plants, the EV motor item, "Pan-India", a competitor negative, and the NR rubber / in-house phosphating claims. The executor is fixing those and regenerating `w5-embeds`. The rest are pre-existing non-conflicts and stay [L]. The F28 draft FAILs were non-conflicts (SimuFact, 2D/3D drawings and the RFQ page are all in FACTS), so the drafts PASS. reviewer.md updated: FAIL only on conflicts.

### 2026-11-22 — W3 conflicts fixed; W5 branch regenerated
5 conflict fixes applied to corrected embeds (10f5a11). `w5-embeds` regenerated (7f64c4b), lint clean. Nit: `build-embed-modules.js` adds blank lines on each re-run, to fix before merge. **Everything is now waiting on Yash publishing the W4 pilot.**

### 2026-11-22 - W4 follow-up: DNP stopgap in browser layer; Velo diagnostic prepared (not pushed)
Sonnet executor.
- **Embed 2** `8733abc0-...` revision 4 -> **5**, html 14,576 chars; read-back equals the patched html and the local `corrections/embed-layer-2.js` (djb2 3773504837 both, zero non-ASCII). New `dnp()` hides the `comp-` ancestor of iframes whose src holds one of 7 count-embed hash prefixes (see RULES.md) plus `#comp-mscxleug` / `#comp-mscxlevk` on Pune.
- **Live check:** Firecrawl (maxAge 0, waitFor 25000) of /forging-manufacturer-pune still served the OLD embed 2 script (no `dnp`, `7edffdcc5c` absent), "x60" still present in markdown (1) and rawHtml (1). So the stopgap is NOT verified live; the served page appears cached. Recheck after the next site publish.
- **Velo diag:** edited `masterPage.js` (meta `vf-diag`) and `Forging Manufacturer Pune.lgtlq.js` (meta `vf-diag-pune`, distinct name so the two do not overwrite each other) on VflWebsite main in the working tree; eslint clean. NOT committed or pushed: the commit+push command was denied by the permission system, and the auto-publish workflow `.github/workflows/publish.yml` is likewise written but not pushed. Parts 2 push and 3 wait for the owner's go.

### 2026-11-22 — Owner approved live pushes; auto-publish and diagnostic pushed
Yash saved `WIX_CLI_API_KEY` in VflWebsite and approved pushes to main (recorded in CLAUDE.md). VflWebsite a892ff1 adds `.github/workflows/publish.yml` (login with the API key, `wix publish --source remote -y`) and the `vf-diag` / `vf-diag-pune` meta-tag diagnostic. Embed 2 rev 5 holds the DNP iframe-hide stopgap for 7 machine-count embeds, not yet seen served live (cache?). Verification is pending.

### 2026-11-22 — Rollout cut to two releases (owner challenge)
Diagnostic first, then one full W5 release. W5-DEPLOY.md's 4-stage plan is superseded.

### 2026-11-22 — Diagnostic read: Velo works server-side
Live Pune vf-diag: env "backend"; 7 HtmlComponents (html1–7) with full filesusr src. No-JS typo count for varshaforging.com fell 2/2/4 → 0/0/0, so the Velo email fix renders server-side. The W4 collapse failed only because Yash's first Publish predated the code sync. "CNC Turning Centers" ×4 in the no-JS HTML on every page is the correction-layer script's own rule text, not visible copy. The DNP stopgap hides the Pune wrappers (display:none); Firecrawl still inlines iframe text, so its markdown can't prove visibility. Auto-publish is still failing on an empty secret. The full W5 release is being assembled on VflWebsite `release-w5`.

### 2026-11-22 — W5 full release pushed to main
VflWebsite main fast-forwarded bf6ed6c → be4d7bc: merged w5-embeds, diagnostic removed, lint clean, generator idempotent. Covers http-functions serving 38 corrected embeds, 41 src swaps on 17 pages, applyTextCorrections on all 56 pages, the footer email fix, and the Pune collapse kept as a fallback. Awaiting publish.

### 2026-11-22 — W5 verified live; W6 and W7 dispatched
Auto-publish works (secret is named WIXKEY). W5: 17/17 pages pass, with 0 visible DNP hits. W7 (Sonnet) is removing machine-count strings from the browser layer and Velo rule source. W6 (Sonnet) is building the new page content on `w6-content`. **Owner instruction: when new pages are live and old pages corrected, return to Yash so he runs Sited.**

### 2026-11-22 — W7: browser layers slimmed, Velo count rules made generic
- Embed 1 `546ea6cc-...` rev 5 -> 6, 13,429 -> 1,007 chars (alt, mailto). Embed 2 `8733abc0-...` rev 5 -> 7, 14,576 -> 2,726 chars (Year Established pair, rows(), dnp stopgap). Read-back equals local `corrections/embed-layer*.js`; 0 machine-count matches; 0 non-ASCII. Full old rule source moved to `corrections/rules-src/layer-1.js` and `layer-2.js` (generator input).
- VflWebsite `3a62db4`: count patterns in `corrections-rules.js` use `\d+`; eslint clean; publish run 45069516062 success.
- Verify: ssr-check 45069569237 and Firecrawl in `baseline/w5-verify.md`. Open: Pune FAQ answer still states the machine counts and the Aurangabad FAQ answer says 0.5-50 kg; both are Wix FAQ-app content, so they need the FAQ API.

### 2026-11-22 ~21:15 UTC: session end (usage limit)
Stopped both agents: the FAQ-app fix (partial, state unknown) and W6 (no output). All work is committed. The next session starts from `NEXT-SESSION.md`.

### 2026-11-23 — Publish pipeline repaired (WIXKEY)
Yash reported the Actions runs failing. Diagnosis: `.github/workflows/publish.yml` already read `secrets.WIXKEY` correctly; the secret value itself was stale. Yash rotated the key; a dummy commit (`.github/republish-trigger`, 3e61780) re-fired the workflow and runs #6/#7 went green. Publish pipeline confirmed healthy end-to-end.

### 2026-11-23 — W6 LIVE and verified (all 10 pages)
Branch `w6-content` → PR #1 → merged to main (dc457ea); follow-up fixes to e9629f4.
- **Shipped:** `src/public/w6content.js` (brand renderer + `applyW6Content`, 4 op types: `{find,set}`, `{find,append}` with `w6-injected` idempotency marker, `{demoteH1}`, `{stripEmptyH1}`) + `w6ops-data.js` + 7 per-page `w6ops-<id>.js` modules + the W6 call in 10 page files.
- **Wix bundler error and fix:** publish failed with a parse error on the original ~44 KB single-line `W6_OPS` JSON in `w6content.js` (node --check and eslint both passed — the limit is Wix's bundler, not JS). Fixed by splitting the payload into one small module per page, all lines < ~6 KB. Yash was told **not** to publish while the error stood; the fix went in first.
- **H1 lesson:** `collapse()` never reaches SSR markup. about-1 was fixed with `demoteH1`; home's empty H1 lived *inside* the same rich-text element as the main H1, so a new `stripEmptyH1` op rewrites the tag away. Home now serves exactly 1 H1.
- **Verification (no-JS curl, scripts stripped before counting):** all 10 pages serve the new content server-side; exactly 1 visible H1 each; 0 hits for "60 CNC", "17 VMC", "0.5 kg", "2 kg – 20 kg", "Charpy", "warm forging", "cold forging"; word counts home 656, about-1 725, contact 998, about-1-1 1021, tool 1678, alloy 1090, machined 781, steering 1365, ev 828, v-link 912 — every touched page above Sited's 500-word threshold. Full details in `W6-DESIGN.md`.
- **Sited mapping:** findings 2 (thin pages) and 8 (/electric-vehicles H1) are now covered by W6. Remaining report items: 1 sameAs (LinkedIn live on the homepage schema since 22 Nov; extra profiles optional), 3 schema on 4 pages (done earlier; re-confirm after W6), 4 dates (schema done earlier; visible date Editor), 5 brand in homepage title (done earlier), 6 byline (schema done earlier; visible Editor), 7 CSP (Wix platform).
- **FAQ re-query** found 3 further visible conflicts beyond the 2 known: railways "Charpy … −40 °C", maharashtra "hot forging, warm forging, cold forging", ev "closed-die hot and warm forging". Replacement texts prepared; the write is blocked on a Wix API channel with FAQ permissions (or a Yash click-list).
- **Empty-body pages:** /product, /transmission-and-driveline, /electric-mobility have no body Text elements — Velo cannot inject; flagged for Editor work.

### 2026-11-23 (later) — Session close: owner rules added, Phase 4 planned
- **New owner rules (CLAUDE.md):** (1) a task that fails more than once goes to `pending.md` with its unblock condition and work moves on; (2) growth mandate — chief-of-staff role for business growth/strategy/branding; goal is top-of-search worldwide for sourcing forgings from India, with a weekly plan beyond SEO/GEO (email, LinkedIn, lead-gen tools).
- **Final verification sweep (no-JS curl, scripts stripped):** /, /about-1, /contact-us-1, /tool-manufactring, /steering-suspension-components, /forged-machined-components-vf, /electric-vehicles — all 1 visible H1, 0 banned-term hits, 659–1,684 words. Site state confirmed good.
- **Blocked items parked in `pending.md` (P1–P10):** 5 FAQ-app answers + W8 SEO writes (need a Wix API key with FAQ + SEO permissions — creation steps documented for Yash), 3 empty-body pages + visible dates/byline + social icons + CSP (Editor/Wix-support only).
- **Competitor study (scraped live):** Bharat Forge wins on brand/off-site, not on-page depth; mid-size rivals (Shivam Forge 6,700-word homepage + 10 JSON-LD blocks; JK Forge 4,100-word capability pages with 24 h RFQ CTA) win AI citations with long-form + FAQ + schema. Directory/listicle ecosystem (Moglix, Tofler) ranks for our target searches and is the fastest off-site win. Full findings and the plan in `PHASE4-PLAN.md`.
- **PHASE4-PLAN.md created:** keyword clusters (sourcing/capability/product/industry/buyer-process), 4 sprints (close site gaps → off-site profiles + listicles → content engine → measure), weekly business-growth rhythm (2 LinkedIn posts, email sequences, lead-gen tools — Apollo/Lusha/IndiaMART/TradeIndia/Kompass/ThomasNet, trade shows), KPI table with 8-week and 6-month targets against the Sited baseline (81 GEO, 0% prompt visibility).

### 2026-11-23 (late) — Yash: rotated key has ALL permissions → FAQ/SEO unblocked
- **Plan:** run the Wix FAQ + SEO APIs from a GitHub Actions workflow (`content-ops.yml`) on VflWebsite, using the `WIXKEY` secret; results committed to `ops/results/` for read-back. `ops/run.js` (5 FAQ fact fixes with read-back gate + SEO read of the 10 W6 pages) and `ops/README.md` pushed to main (84be594).
- **Failed twice (rule applied, logged in pending.md):** pushing `.github/workflows/content-ops.yml` — the GitHub integration token lacks the `workflow` scope (403 via both push tools). **Yash creates that one file via the GitHub web UI** (content provided in chat); once it lands, a re-push of `ops/run.js` triggers the run.

### 2026-11-23 (close-out) — Content-ops pipeline live; FAQ DB clean; W8 SEO live and verified
- **Content-ops pipeline proven end-to-end.** Yash created `.github/workflows/content-ops.yml` via the web UI (token lacks the `workflow` scope — 403 on both push tools, parked per the fail-twice rule). 8 runs executed; results committed to `ops/results/` (latest `run-2026-11-23T00-54-38-610Z.json`).
- **Correct API endpoints (from dev.wix.com, after two 404 rounds on guessed paths):** FAQ v2 `POST https://www.wixapis.com/faq/v2/question-entries/query` with cursor paging (`pagingMetadata.cursors.next` / `hasNext`); SEO `GET/PATCH https://www.wixapis.com/seo-metatags-server/v1/item-seo-tags/STATIC_PAGE/{itemId}` with `fieldMask:"tags", publish:true`. PATCH replaces the item's tags IN FULL — always resend the complete list (helper `slim()` keeps only type/props/children/meta).
- **FAQ fact contamination cleared at the data layer (P1–P3, P5 + P4's DB copy).** First gate saw only 50 entries (paging bug — false clean); with cursor paging the full DB is 500 entries, ALL clean of every banned pattern (60 CNC / 17 VMC / 0.5 kg / Charpy / warm forging / cold forging). The 22-Nov killed agent's writes (or dashboard edits) had already landed. Live no-JS gates re-confirmed 0 hits on /forging-manufacturer-pune, /forging-company-aurangabad, /railway, /electric-vehicles.
- **W8 SEO (P6) executed via API:** 5 fixes — trimmed /v-link-assemblies title, shortened /tool-manufactring description to 173 chars, added og:image to /v-link-assemblies, /alloy-steel-forgings, /forged-machined-components-vf, /steering-suspension-components (and re-sent full tag lists everywhere). API read-back confirmed all saved.
- **Render lag diagnosed and solved:** the PATCHes were saved but did NOT render in served HTML even after hours. Root cause: **item-seo-tags writes only bake into SSR `<head>` on the next site publish.** Forced a republish (750cc2d, comment bump in richtext.js) → all 5 fixes verified live by curl: og:image on all 5 pages, /tool-manufactring serving the new description, /v-link-assemblies serving the trimmed title. **Lesson recorded: API read-back ≠ live render; always republish then curl.**
- **Empty-commit lesson:** a byte-identical re-push produces no diff, so the `paths:` filter never matches and the workflow silently doesn't run. Always bump a comment line.
- **Maharashtra FAQ widget staleness — parked as P4b (fail-twice rule).** The FAQ DB is clean, but the live page uses the LEGACY faq-builder widget (faq-ooi bundle), which serves a baked copy of the old answer ("hot forging, warm forging, cold forging, closed-die forging, and precision forging … Erie presses, screw presses, and friction drop hammer systems") in both the accordion and the FAQ JSON-LD. Site republish does not refresh it; no public API reaches the legacy store (only `/faq/v1/categories` responds; legacy FAQ API deprecates 2026-12-31). Also misdiagnosed initially as ricos page text — `src/public/richtext.js` (deployed, harmless) only reaches RichContentViewer elements, not app widgets. Unblock: Yash edits the answer in the FAQ app (exact replacement text in `pending.md`), which re-bakes the widget; longer term migrate to the current FAQ app.
- **Md close-out:** pending.md, NEXT-SESSION.md, PHASE3-PLAN.md and this file updated with all outcomes (commit e28efa4 on website ccr-6409486e-3vy613).
- **Next:** Yash does P4b (5 min) and runs Sited; then Phase 4 sprints per `PHASE4-PLAN.md`.

### 2026-11-23 (new session) — Phase 4 Sprint 1/2: 2nd blog post + off-site drafts

Checked `pending.md` first: P4b and P9 confirmed still live-unresolved (Firecrawl re-verify of `/forging-company-maharashtra` — FAQ still serves "hot forging, warm forging, cold forging..."; homepage social icons still `facebook.com/wix` / `instagram.com/wix`). Both need Yash; nothing new to do there. Proceeded into `PHASE4-PLAN.md` Sprint 1/2 per owner's standing growth mandate.

**Blog post (Sprint 1, ST2):** Dispatched Sonnet executor to draft and publish "How to Source Closed-Die Forgings from India: A Buyer's Guide" via the Wix Blog v3 API (same Owner's-Path method as `/precision-forging-cost`) — grounded only in `FACTS.md`, no Editor work. Independently re-verified live via Firecrawl (not just the agent's self-report):
- URL: `https://www.varshaforgings.com/post/how-to-source-closed-die-forgings-from-india-a-buyer-s-guide`
- 1,163 words visible body, 0 DO NOT PUBLISH hits
- FAQPage JSON-LD live with all 5 Q&A; BlogPosting JSON-LD with dateModified/datePublished
- SEO title + meta description set via `PATCH /promote/seo/v1/item-seo-tags/BLOG_POST/{postId}` (fieldMask must be a comma-separated string, not `{paths:[...]}` — new API quirk, noting here)
- Byline shows "Admin Varsha Forgings" (Wix's blog-author default, tied to the dashboard account) — cosmetic, folds into existing P8 byline work, not a fact issue.

**Off-site content drafts (Sprint 2):** Drafted directly (no agent needed — plain copy, no live writes), self-scanned clean against DO NOT PUBLISH:
- `content-drafts/capability-onepager-DRAFT.md` — one-page capability sheet for listicle/directory submissions
- `content-drafts/offsite-profiles-DRAFT.md` — ready-to-paste copy for IndiaMART, TradeIndia, Kompass, ThomasNet, Google Business Profile (both plants)
- `content-drafts/linkedin-posts-batch1-DRAFT.md` — company page setup text + first 4 posts (2 flagged `[PHOTO NEEDED]` for Yash/Piyush)

All committed to branch `ccr-1e875ebc-2tltlt` (this session's branch); `PLAN.md` ST2 and `PHASE3-PLAN.md` status table updated to match. PR to be opened this session.

**Still open, unchanged:** P4b, P7, P8, P9, P10 (pending.md) — all need Yash. Sprint 3 (weekly content engine) and the rest of Sprint 2 (actually claiming/submitting the off-site profiles, which needs Yash's identity/email to create accounts) are next.

### 2026-11-23 (continued) — P8/P9/P10 re-examined; P8 done live, P9 confirmed Editor-only, P10 closed

Yash asked to complete the remaining `pending.md` points. Rather than accept the "Editor-only" calls on P8/P9 at face value (they predated the W5/W6 proof that Velo can touch visible text/links on this site), re-tested each on the evidence:

- **P10 (CSP header):** Checked the Wix Help Center directly instead of just flagging "ask support." Confirmed: custom security headers (CSP included) are **Wix Studio Enterprise-only** — no code path, no support-ticket path on this site's Premium/Classic Editor plan. Closed as a spend decision (cost unknown, >$50/mo almost certainly), not a fix; parked for Yash's explicit go-ahead before pricing it.
- **P9 (social icons):** Yash confirmed no real Facebook/Instagram accounts exist (fix = unlink, don't fabricate a URL) and approved adding WhatsApp click-to-chat (`wa.me/918411000551`) as standard on peer forging sites — both recorded in `FACTS.md`. Dispatched an executor to test whether masterPage.js's existing element-rewrite pattern (the one that already fixes the footer email typo site-wide) could reach these icons. **Result: no.** Live diagnosis (Firecrawl rawHtml) showed Facebook/Instagram render as `<a>` tags and WhatsApp as a `<div>`, all inside Wix's native **Social Bar header widget** — a fixed component outside the page's own element tree that `$w('Image')`/`$w('VectorImage')`/`$w('Button')` never iterate over. One real attempt, shipped and verified live, found to have zero effect (harmless no-op, not an error). Per the fail-twice rule, reverted the dead code and closed this as genuinely Editor-only. `pending.md` now carries Yash's exact 2-minute fix.
- **P8 (visible date/byline):** Opposite result — this WAS Velo-reachable. Wired the existing W6 `{find, append}` SSR pattern into `/assembly-services`, `/forging-company-aurangabad`, and `/company-profile` (page id `unlvj`, confirmed via the Wix Pages API — not the homepage). Hit one real regression mid-flight: anchoring on the bare H1 text "Leadership" on `/company-profile` also prefix-matched the site footer's "Leadership Team" nav link, injecting the date line into the footer menu too. Self-caught before declaring done; fixed by adding an optional `requireTag` discriminator to the shared matcher in `w6content.js` (scoped to that one op; every other live op is unaffected). **Final live verification (independent, via Firecrawl, not just the executor's self-report):** "Last updated: 23 November 2026" renders correctly on all 3 pages; "· By Varsha Forgings" byline on `/assembly-services`; footer nav confirmed clean; H1 count unchanged (1) on every page. DONE.
- **Parallel-writer finding:** Mid-session, a GitHub PR-conflict notification revealed a second thread on this same account (session id matches this conversation, different client surface — likely Android) had been pushing German/Spanish blog posts, `ops/run.js` iterations, and a `GROWTH-RESEARCH.md`/`WEEKLY-RHYTHM.md` build-out to both repos concurrently with this session's work. Resolved the resulting merge conflict on PR #1 (`website` repo) by merging the base branch in — no data loss, no file-level collision with this session's own edits. Flagged in `NEXT-SESSION.md`: this broke the spirit of "one Wix writer at a time" even though nothing visibly broke this time; worth Yash's awareness if he's running Claude from two surfaces at once.
- **VflWebsite commits this round:** `08c0556` (P9 attempt, reverted), `8e094fb` (P8 wiring, had the footer regression), `fe5a394` (first P8 fix attempt — wrong anchor, self-caught as not actually matching), `efdc108` (revert of 08c0556), `0310034` (real P8 fix via `requireTag`). All auto-published; GitHub Action confirmed green on each.

**pending.md now:** only P4b (Yash, 5 min FAQ-app click), P7 (Yash, Editor Text elements for 3 empty-body pages), and P9 (Yash, 2 min — unlink FB/IG, add WhatsApp link) remain, each with exact steps. P10 is closed pending a cost decision, not an action item.

### 2026-11-26 — City rename "Chhatrapati Sambhajinagar (Aurangabad)", steps 1-4 (executor, owner GO 26 Nov)
Branch `rename-csn` on VflWebsite (not merged, main untouched). Commits: 6aa94e3 (step 1), 54b9338 (step 2), 70e16d6 / a7d4ae6 / 2590d03 (steps 3-4 job, apply, cleanup), plus bot "ops results" commits. Website repo: embeds, drafts, `corrections/rules-src/layer-3.js`, `scripts/build-embed-modules.js` (loads layer-3), `scripts/check-bare-aurangabad.js` (gate).
- **Step 1 (source):** replaced bare city name in `w6ops-*.js`, `embeds/corrected/*.html` (7 files, regenerated `src/backend/embeds`), `ops/run.js` constants (EN blog body, AKW9J_DESC cut to 196 chars so the shorten action is not re-triggered), `ops/payloads/blog-posts.json` (DE/ES), `content-drafts/*`. Wording fixes: "Aurangabad is open" to "The ... plant is open"; "Aurangabad (MIDC Waluj)" to "..., MIDC Waluj"; maharashtra diagram header re-padded; draft contact title uses the short form. `w6content.js` now accepts an array for `find` (dpizt anchor needs both the renamed and legacy text because the rule runs before the op). Plant-layout iframe `forging-company-aurangabad__1` is now served via Velo (INDEX.md row set to 1 change) so its title/heading are renamed too. Gate: 0 bare hits in 119 files; eslint clean.
- **Step 2 (server-side rule):** `layer-3.js`: a spacing before bracket, b spacing after bracket, c MIDC Waluj address forms, d bare name, e uppercase. No regex lookbehind (a SyntaxError would break the whole module in older Safari); the bare-name rule instead captures one preceding character and ignores a preceding "(" so it never double wraps. Limitation: a bare "(Aurangabad)" not preceded by "Sambhajinagar" or "MIDC Waluj" is not wrapped. Cross-element matches are written into the first element touched (engine behaviour), visible text is right. Test `tests/city-rename.test.cjs`: 25 cases PASS, idempotent.
- **Step 3 (SEO, content-ops):** preview run 2026-11-26T12-09-03Z, apply run 2026-11-26T12-11-00Z (results `ops/results/run-2026-11-26T12-11-00-412Z.json`, backup `rename-csn-backup-apply-2026-11-26T12-11-00-412Z.json`; the preview backup is the same pre-change state). 10/10 PATCHED, read-back 0 bare. Titles: short form on kihd6, dpizt, n1h72 (full form would exceed 65). **JSON-LD size trims (needed to stay under 3,600):** dpizt: Article.headline cut to the page name, duplicate dateModified removed from the Organization and LocalBusiness nodes (Article keeps it), FAQ answer "The flagship Aurangabad plant" to "The flagship plant" (question names the city); 3,595 chars. n1h72: LocalBusiness.geo removed (coordinates are not in FACTS.md and the Pune pair is not Markal); 3,531 chars. Live scrape already shows the new title/description tags.
- **Step 4:** FAQ v2: 500 entries, 0 contain the name, nothing to write; read-back 0. 6 live FAQ strings sit outside FAQ v2 (legacy widget) on /forging-company-aurangabad, /forging-company-maharashtra, /buying-forgings-from-india, /steering-suspension-components: `pending.md` P11 has exact text. Blog: 3 posts updated via draft-posts PATCH `UPDATE_PUBLISH` (matched by title; EN id 5892e82b, ES 03b5df72, DE c24f918c); read-back by Get Post: 0 bare, full form present, slugs unchanged. The 4th and 5th posts had 0 hits.
- **Housekeeping:** `ops/rename-csn.js` runs only while `ops/payloads/rename-csn-job.json` exists; the file was deleted after apply so the normal pipeline resumes (a normal run afterwards: ALREADY_EXISTS for all payload posts, FAQ 500 clean). Generator re-run rewrites `src/pages/*` wiring cosmetically (pre-existing); keep only intended page diffs.

**Correction to the entry above (checked via git, 26 Nov 2026):** the note "Branch `rename-csn` on VflWebsite (not merged, main untouched)" is stale — `rename-csn` (tip d07e5eb) is now an ancestor of `main` (tip 1d103cb), confirmed via `git merge-base --is-ancestor`. The city-rename work is merged and live. Noting this here since I (a second, concurrent session on this account) don't want to rewrite that entry's narrative — just flagging that "main untouched" no longer holds by the time this was read.
### 2026-11-26: City rename to Chhatrapati Sambhajinagar (Aurangabad)
Owner decisions are in FACTS.md: official spelling, short form for titles, URL kept. Audit: 510 live hits. Release VflWebsite d07e5eb covered source edits, the server-side rule (25/25 tests) and 3 blog posts; content-ops patched SEO on 10 items. Re-check after republish 78dd6ec: footer 0, body 0 (outside the FAQ widget), blogs 0. 49 hits remain: 31 SEO tags saved but not rendered (P14, parked after 2 publishes), 15 legacy FAQ widget items or their mirrored JSON-LD (P11, owner), 2 FAQ-widget "plant visit" answers, and the homepage addressLocality (part of P14).

### 2026-11-26 — Session continuity check: reviewed pending.md, re-verified P14/P11 live, refreshed NEXT-SESSION.md and handover

Picked back up after confirming with Yash that the parallel thread (city-rename work) is expected, not a conflict to avoid. Reviewed `pending.md` top to bottom against the live site rather than trusting the log at face value:

- **P14 re-confirmed live, unchanged:** `/forging-company-aurangabad` body text is fully renamed to "Chhatrapati Sambhajinagar (Aurangabad)" everywhere, but the SEO `<title>` and meta/og tags still serve the bare old "Forging Company in Aurangabad | Varsha Forgings..." — the content-ops apply run did not render. Still needs the diagnosis `pending.md` describes (check for a later overwriting run, or republish with a `src/` comment bump).
- **P11 re-confirmed live, unchanged:** same page, two items still bare — the FAQ answer "What primary forging equipment is installed at Varsha Forgings' Aurangabad facility?" and the FAQ category heading "FORGING COMPANY IN AURANGABAD". Both are legacy-FAQ-widget content (same store as P4b), not reachable by API — exact replacement text already in `pending.md` for Yash's next FAQ-app visit.
- **No new attempts made** on P11/P14 this pass — just an honest, independent read-back so the next session (whichever thread picks it up) isn't working from a stale assumption either way.
- Updated `NEXT-SESSION.md`: removed the stale "verify P8/P9 before trusting" caveat (now confirmed done), reordered the Yash/Claude queues to include P11–P14, and softened the "two threads" warning to reflect that it's expected, not a risk to flag every time.
- Refreshed the top HANDOVER block in this file to summarize both threads' work in one place (previously only reflected this thread's).

### 2026-11-26 (continued) — P14 investigated and ruled out, genuinely stuck; checked legacy FAQ app for a hidden Data Collection (P4b/P11)

**P4b/P11 re-investigated once more (Yash asked why these need him):** checked whether the legacy faq-builder widget's answers live in a Wix CMS Data Collection, which Velo could write to even without a public REST endpoint. Listed every data collection on the site via `GET /data/v2/collections` — no FAQ-related collection exists at all (only Blog, Forms, Members, Products and the page-content collections). Combined with the earlier confirmed 404s on `/faq/v1/...` write paths, there is no code path left; this is genuinely Editor-only. Not a case of giving up early — a second real path was checked and it isn't there either.

**P14 — both hypotheses from the previous entry tested and ruled out:**
- **H1 (a later run re-reverted the values):** ruled out. `GET /seo-metatags-server/v1/item-seo-tags/STATIC_PAGE/dpizt` directly, independent of any ops run, confirms the title and meta description are correctly stored as "Chhatrapati Sambhajinagar (Aurangabad)" / "Chh. Sambhajinagar (Aurangabad)". The data layer is correct.
- **H2 (CLI publish skips SEO re-bake when `src/` is unchanged):** tested directly — pushed a real `src/public/richtext.js` comment-line change (`4ae5a92`), the same technique that fixed W8 on 23 Nov. The GitHub Action ran and completed successfully (`wix publish --source remote -y`). Checked live immediately after, and again 3 minutes later with a fresh cache-bust query param: both times still served the old, pre-rename title/meta/og tags. Ruled out CDN propagation delay as well.
- **Status: genuinely stuck.** Two root-cause attempts exhausted per the fail-twice rule. Parked in `pending.md` with a suggested next diagnostic (one Editor-triggered publish from Yash, to test whether this is a CLI-publish-specific gap worth reporting to Wix) rather than a third blind guess.

No other files touched; `richtext.js`'s comment bump is harmless and left in place (it's accurate — it genuinely was pushed to test the re-bake).

### 2026-11-26 (continued) — P4b/P11 misdiagnosis found and fixed; FAQ v2 "500 clean" claim debunked

Yash asked why P4b/P11 needed him, pushed back, and asked for the FAQ app/widget migration to be scoped and built (Opus plans, Sonnet executes, Haiku reviews). Scoping the migration led to a bigger discovery: **there is no legacy-vs-current app split.** Inspected raw HTML on both the "stuck" Maharashtra page and a normal page — both use the identical `faq-ooi` Wix app (same artifactId, same bundle). The widget reads live from the FAQ v2 database; it always did. The actual bug: 6 specific FAQ v2 entries + 1 category title had sat with stale/banned content since **2026-08-0x**, never touched by any later "FAQ v2 clean" claim.

**Fixed via API (Sonnet executor, independently re-verified live via Firecrawl, not just self-report):**
- P4b: "forging processes" answer — banned warm/cold forging text replaced with FACTS-aligned hot-closed-die-only wording.
- P11 #1–5: all renamed to "Chhatrapati Sambhajinagar (Aurangabad)" (2 FAQ answers, 1 question+answer, 1 shared plant-visits answer rendering correctly on both pages that use it, 1 category heading).

**Independent full re-scan of all 256 FAQ v2 entries** (not 500 as previously claimed — that count itself was wrong) against every FACTS.md DO NOT PUBLISH / unconfirmed-claim rule. Found 6 more genuine violations sitting there since August, never caught by any earlier sweep: 2 duplicate warm/cold-forging claims, 1 EV warm-forging claim, 1 unconfirmed Charpy −40°C railway claim, 1 "open account terms" payment claim, 1 invented freight-cost figure. 4 near-duplicate "closed-die vs open-die, general explanation" entries were correctly identified as compliant (general engineering explanation, not a Varsha-specific claim) and left untouched. Dispatched a second executor pass to fix the 6 genuine violations — status to follow once it reports back.

**New open item (P15):** the /buying-forgings-from-india and /steering-suspension-components "India vs China" body-text comparison table (negative competitor claims + invented MOQ/freight numbers) was flagged in FACTS.md's correction queue back on 22 Nov but was never actually fixed — it's Editor-only body text inside an HTML embed, not FAQ v2. Logged in pending.md; replacement copy not yet drafted.

**Lesson for future sessions:** a prior session's "N entries, 0 hits, verified clean" claim is not self-evidently trustworthy — this session found it was wrong twice (wrong total count, and a live banned-content hit that should have been caught). Re-verify data-layer claims independently (direct API GET, not just trusting a logged scan result) before treating something as closed, especially before telling the owner an item needs their manual intervention.

### 2026-11-26 (continued) — All 6 additional FAQ v2 violations fixed; P4b/P11 fully closed

Second executor pass fixed the 6 genuine violations from the full re-scan, all independently re-verified live (not just self-report):
- 2× duplicate "warm or cold forging" tolerance claims (/steering-suspension-components) → rewritten around confirmed forging/machining tolerances (±0.5mm / ±0.02mm), no warm/cold forging assertion.
- 1× EV "warm forging" question (/forged-components-ev) → question rewritten to hot forging only; answer was already clean.
- 1× unconfirmed Charpy −40°C railway claim (/forged-components-railways) → rewritten around confirmed testing capability (Brinell/Rockwell/micro-Vickers hardness, ASTM E112 grain size, ultrasonic testing, 100% MPI).
- 1× "open account terms" payment claim (/buying-forgings-from-india) → rewritten to LC/advance payment only.
- 1× invented freight-cost figures (/buying-forgings-from-india) → rewritten to the confirmed logistics facts (JNPT port, ISPM-15 crating, GPS-tracked containers, air freight for samples), no invented pricing.

Independently re-verified the payment-terms and freight answers live myself via Firecrawl — both render correctly, old wording gone.

**P4b and P11 are now fully closed — no Yash action needed for either.** The FAQ-app-migration ask turned out not to need a migration at all: one existing app, bad data, now fixed.

**Two more body-text items found during verification, not yet actioned (both Editor-only, added to pending.md):**
- P15: `/steering-suspension-components` India-vs-China comparison section (negative competitor framing + invented MOQ/transit numbers) — flagged in FACTS.md since 22 Nov, never fixed.
- `/forged-components-railways`: separate unconfirmed railway claims in body/table text (axle loads >32t, 100% volumetric UT) plus a "Low-Temperature Impact Validation" section repeating the Charpy claim outside the one FAQ entry already fixed.

Both are visible body text (Editor-only), not reachable by any API channel — same category as P7/P9. Replacement copy not yet drafted for either.

### 2026-11-26 (continued) — P15 closed via embed swap; railway and rubber FAQ claims fixed; broader re-scan clean
- **P15 was not Editor-only.** The "India vs China" matrix on `/steering-suspension-components` is an HTML-embed iframe, the same filesusr file as `/buying-forgings-from-india` (already corrected in W5, 38 changes). The steering page was missed in the original W3 embed scan. Fix: added an INDEX row and the page-id mapping (`i5dze`) in `embeds/INDEX.md` and `scripts/build-embed-modules.js` (website `c75a253`), ran the generator on VflWebsite keeping only the intended `src/pages/Steering and suspension.i5dze.js` wiring (`0a2c2bd`, publish run 45853304309 green, ESLint clean). Independently verified live (Firecrawl, cache-busted): "China"/"Chinese" count 0, corrected Varsha-only section renders, H1 unchanged.
- **FAQ v2:** railway entries "100% Volumetric UT" (`661d0895`), "axle loads exceeding 32 metric tons" (`8b7fe718`, question reworded to mining/heavy industrial), "multi-decade service lives" (`b1c6655b`) fixed by the executor; broader re-scan of all 256 entries (axle load, volumetric, 100% UT, decade, 30+, service life, Charpy, -40, open-account, $ amounts, China, MOQ, warm/cold, stainless/aerospace/subsea, Managing Director, Ltd) found 2 more clear violations, both fixed: `9eaabdca` ("15+ year service life" bonded bush) and `6d8ce16d` (NR/SBR blends; fixed by me, read back revision 2). Re-scan now 0 violations. Note: Wix regenerates the entry slug and shareLink on every update (nothing on the site links to them).
- **Lesson:** Velo embed-swap is also the route for any HTML-embed text on pages missed by the W3 scan; check the page's rawHtml for `filesusr.com/html/` iframes before calling something Editor-only. Earlier pending.md guesses about "Editor-only" were wrong three times this session (P8, P4b/P11, P15); verify the channel before parking.

### 2026-11-26 (session 3) — P14 re-check, Sited 83, heading fix verified
- P14 re-scraped `/forging-company-aurangabad?nc=261126a` (Firecrawl maxAge 0): title still old. API GET item-seo-tags dpizt/kihd6/n1h72: renamed values in both `tags` and `resolvedTags`. Render gap confirmed, not a data problem. Next: Yash Editor Publish click.
- Owner sent Sited result 83/100; one issue (homepage H1->H6). Verified fixed in live served HTML (0 H3-H6 tags, H1 then H2s) by the existing Velo retag in `Company.plew4.js` + `masterPage.js`. Owner rule added to CLAUDE.md: never ask him to run Sited.
- Dispatched executor: P13 address strings + L1/L2 landing drafts.
- Executor delivered `content-drafts/P13-offsite-address-strings-DRAFT.md`, `L1-tie-rod-end-forgings-DRAFT.md` (955 words, JSON-LD 2,064 min), `L2-railway-forgings-rdso-DRAFT.md` (840 words, JSON-LD 2,170 min). Opus gate re-run: 0 bare "Aurangabad", 0 DNP terms (L1 has 4 "stainless" hits, all denials). Open fact gap: FACTS lists "tie rods", not "tie rod ends" (asked Yash). RDSO reference number still not supplied (L2 states approval without a number).
- Owner answered 26 Nov: tie rods are complete assemblies Varsha makes; tie rod ends are also forged and sold loose. Recorded in FACTS.md [Y]; L1 copy updated. L1/L2 ready to publish (route: blog channel like L3, or a static page once Yash adds a page in the Editor).
- **L1 + L2 published as blog posts (owner GO 26 Nov).** content-ops run-2026-11-26T18-44-36: both PUBLISHED_BARE_200; seoFixes all NO_CHANGE_NEEDED; 3 older posts ALREADY_EXISTS. Live check (Firecrawl maxAge 0, ?nc=261126c): both render full body; claims checked against FACTS (60% OEM, OEM list, RDSO, 100% MPI, tolerances, 48 h single drawing). Stainless denials removed for BLOG_BANNED. Live slugs: tie-rod-end-forgings-from-india-hot-closed-die-traceable-ppap-ready, rdso-approved-railway-forgings-from-india-hot-closed-die-fully-traceable.
- B1 draft committed (1,244 words, 0 DNP, all Varsha claims traced to FACTS).
- Noted: Spanish post live slug ends in "-2" (possible earlier duplicate/deleted original); social bar still links facebook.com/wix (P9, Yash).
- P14 closed via Velo SEO override (stage 1 dpizt, stage 2 nine more; lint clean, city-rename tests 25/25). Opus independently verified /forging-company-aurangabad and /contact-us-1 live. Note: /tool-manufactring meta says "CNC and VMC machining" (capability mention, no count) — allowed; counts stay banned.
- P12 + noindex release 9af45ca verified (agent table + Opus checks: /electric-mobility robots "follow, noindex", /quality og:url/og:type/twitter:card present). Regression caught and fixed in the same release: P14 setMetaTags had dropped og:url/og:site_name/og:type/twitter:card/twitter:image for ~1 hour.
- P16 closed: false positive (1 DOM H1; 2nd match is warmup JSON). B1 published + verified live (8 posts). B2-B10 drafted by 2 executors, Opus gate re-run (0 DNP, 0 bare Aurangabad; galvanizing/GPS/JNPT/ISPM-15 confirmed FACTS l.113/123); batch publish dispatched.
- **Lesson:** count headings as DOM elements; Wix rawHtml carries escaped copies in warmup JSON.
- **B2-B10 published (534d0e0), all 9 live 200 + first H2 verified by agent; Opus re-verified B4 + B9 live.** Blog template renders post title as the single H1. Live URLs:

| Post | URL |
|---|---|
| L1 | https://www.varshaforgings.com/post/tie-rod-end-forgings-from-india-hot-closed-die-traceable-ppap-ready |
| L2 | https://www.varshaforgings.com/post/rdso-approved-railway-forgings-from-india-hot-closed-die-fully-traceable |
| B1 | https://www.varshaforgings.com/post/forging-vs-casting-vs-machining-a-buyer-s-decision-guide |
| B2 | https://www.varshaforgings.com/post/ppap-levels-1-to-5-what-to-ask-a-forging-supplier |
| B3 | https://www.varshaforgings.com/post/en19-vs-en24-vs-42crmo4-steel-for-forged-steering-parts |
| B4 | https://www.varshaforgings.com/post/rdso-approval-a-buyer-s-checklist-for-indian-railway-forgings |
| B5 | https://www.varshaforgings.com/post/how-to-audit-an-indian-forging-supplier-a-checklist |
| B6 | https://www.varshaforgings.com/post/ev-suspension-and-steering-forgings-what-is-different |
| B7 | https://www.varshaforgings.com/post/5-questions-to-ask-before-an-rfq-to-an-indian-forging-company |
| B8 | https://www.varshaforgings.com/post/heat-treatment-for-forged-components-what-to-specify |
| B9 | https://www.varshaforgings.com/post/sourcing-forgings-from-india-to-europe-logistics-and-certificates |
| B10 | https://www.varshaforgings.com/post/why-safety-critical-steering-parts-are-forged-not-cast |
- L5-L8 published (7d42b45), agent verified 4/4 live 200 + first H2; Opus re-verified L8 live.
| L5 | https://www.varshaforgings.com/post/forged-steering-knuckles-from-india-hot-closed-die-traceable-ppap-ready |
| L6 | https://www.varshaforgings.com/post/prototype-and-low-volume-forgings-from-india-start-with-one-drawing |
| L7 | https://www.varshaforgings.com/post/agricultural-machinery-forgings-from-india-hot-closed-die-traceable-ppap-ready |
| L8 | https://www.varshaforgings.com/post/valve-body-and-flange-forgings-from-india-a105-lf2-f11-and-f22 |
- Session 3 end: owner flagged the model-rule breach (Opus verifying instead of Haiku reviewer). Gotcha added to CLAUDE.md. Internal-links job still running at session end (see HANDOVER).

## 27 Nov 2026 (02:15 run): C1-C4 live, links round 2, label removal
- Drafts C1-C4 edited per reviewer notes, website commit e6df43c (C1 lab sentence + quoted search phrase, C2 spectrometer sentence, C3 'Export markets', C4 B4 mention kept as plain text).
- content-ops: VflWebsite fd57fe0 'content-ops: publish C1-C4' (existing 18 entries byte-identical, no `language`, BLOG_BANNED 0, no bare Aurangabad; words 1130/920/915/928). Run `ops/results/run-2026-11-26T20-50-40-925Z.json`: all 4 PUBLISHED_BARE_200_VERIFY_BY_CURL. Live slugs (from inventoryAfter):

| Draft | Live URL |
|---|---|
| C1 | https://www.varshaforgings.com/post/how-to-choose-a-closed-die-forging-company-in-india-for-oems |
| C2 | https://www.varshaforgings.com/post/ppap-level-5-forging-supplier-in-india-a-capability-profile |
| C3 | https://www.varshaforgings.com/post/iatf-16949-forging-supplier-in-india-export-to-europe |
| C4 | https://www.varshaforgings.com/post/railway-bogie-component-forgings-from-india-buyer-guide |

- Velo release VflWebsite 7354946 'Links round 2 + remove Capability claims label' (+ f6989dd, test count fix). ESLint clean; tests guides (39 slugs), removeparas, city-rename pass. Both Publish runs: success.
  - Related buyer guides anchors: /about-1 (l95rc, after the W6 set element; 4 posts), /forging-manufacturer-india (q1c5f, 'Supported by advanced inspection systems'; 4), /forging-company-maharashtra (n1h72, h4 'Regional Supply Chain Synergy', the last native text element, rest is embeds; 4 incl. C3), /forging-company-aurangabad (dpizt, same anchor as the P8 date op; 4), /forging-manufacturer-pune (lgtlq, last paragraph; 4). Page code for a3evt, q1c5f, n1h72, lgtlq gained the W6 call. Skipped: none; /railway and /agriculture remain image-only from round 1.
  - Label removal: new op `removeParas` (w6content.js) deletes the whole `<p>` whose text is exactly 'Capability claims:'; registered for t6wcz, plew4, a3evt in w6ops-retag.js. Anchors taken from live DOM on /quality only; homepage and /forging assume the same standalone-paragraph structure (unverified until the reviewer checks).
- Not self-verified live; reviewer to confirm.

## 27 Nov 2026 (end of 02:15 run): blog meta descriptions verified, run closed
- Reviewer rv6 PASS: exactly 1 `<meta name="description">` on the tie-rod, railway-bogie and DE posts; FAQPage + BlogPosting JSON-LD parse; titles and first H2 OK. Closes pending.md row MD (25/25 via `ops/blog-meta.js`, VflWebsite b5ce3a7).
- Run state: QS1/P17/P18/CC closed, C1-C4 live (25 posts), links round 2 on 5 pages, FAQPage JSON-LD on 21 posts, meta description on all 25 posts, all reviewer-verified. HANDOVER, NEXT-SESSION.md and PHASE3-PLAN.md refreshed.

## 26 Nov 2026: Wave 2 reviewer-fix release (executor)
- Brief: 4 FACTS violations + 3 wording changes + internal links to /forging-manufacturer-india. Three commits on VflWebsite main, each Publish run green before the next: b895aa7 (embed row), d87a072 (wording ops), 5c23c76 (links).
- Route per item: 1,2,3,6 FAQ v2 data (Wix FAQ API, paginated 256 entries, PATCH + GET read-back, no repo change); 4 embed override (`EXTRA_EMBEDS["forged-components-railways__2"]`, same served key so no page-code swap needed); 5,7 Velo W6 ops (the older corrections-rules entry for the China paragraph never matched live); 8 Velo `xlink` op.
- Gates: `npx eslint src` clean; all `tests/*.cjs` 0 FAIL (new `tests/wave2.test.cjs`); Firecrawl maxAge 0: ZLD/PPAP text, new heading, RDSO wording and China-free intro confirmed; 7 pages each 1 `w6-xlink` and 1 DOM H1; target page returns 200.
- Not touched: FACTS.md, PLAN.md. Remaining PPAP Level 3 FAQ entries logged in pending.md (W2-1).

## 26 Nov 2026: Wave 2 follow-up, full FAQ v2 re-audit (executor)
- **Hard-won lesson: FAQ v2 queries MUST page via `pagingMetadata.cursors.next` (`cursorPaging`, limit 100) until `hasNext` is false.** An unpaged query returns a partial set (first 50) and produces a false all-clear. This invalidated two earlier "FAQ clean" claims ("256 entries, 0 hits" and "500 entries verified clean"); both missed the ZLD and PPAP Level 3 text.
- **True total: 256 unique entries** (3 pages). Scanned question + answer text of every entry against the coordinator's banned set (machine counts, old weights/tolerances, PPAP Level 3, EN/UIC/AAR railway standards, UT/axle/Charpy/life claims, ZLD, warm/cold/open-die, stainless, aerospace/CQI-9/ARAI/PED/AD 2000/solar/CIN/BMW/KTM/Corvette/subsea/RPM, Managing Director/slogan/year counts/1981/2013, bare Aurangabad, email typo, old press figures, rubber specs, China, numeric MOQ/freight).
- **Violations found: 4, all PPAP "Level 3" wording** (ids 163738ab, 25ab412d, f4a5114b, affc7440). Earlier this wave: ZLD x2 (3864f222, a0abdceb), PPAP Level 1 through 5/Level 3 (5b700a87), RDSO "strict adherence" (655f4204) = 4 more. All 8 fixed via PATCH and read back; final rescan: 0 ZLD / Level 3 / strict adherence in 256 entries.
- **Reviewed and left (general engineering, not Varsha claims):** 4 entries comparing closed-die with open-die forging; NR vs EPDM rubber explanation (no Shore/temperature spec); forging-vs-casting answer using "long service life" generically; MOQ and sea-freight questions (no numbers); "800 T to 2,500 T" press range (confirmed fact).
- FACTS.md: queue row added for ZLD on /forging-company-maharashtra (no fact values changed). pending.md W2-1 closed. No repo change, so no publish run.

## 26 Nov 2026: schema-layer audit and clean close of Wave 2 (executor)
- **Item SEO tags (STATIC_PAGE, `item-seo-tags`):** 50 of 55 ids read (j5a7q, x4qot, t4x9d, t4x9e, t4x9f return 404: not static SEO items); 49 carry FAQPage JSON-LD. Scanned full tag sets against the same banned set as the FAQ audit. Only hits: "800 T to 2,500 T" (confirmed press range, regex false positive) on l95rc, l2sru, n2uai. **0 violations; nothing patched.**
- **Blog seoData:** 25 posts, 23 with FAQPage JSON-LD. 2 hits for "Level 3" (761ed1bd, af789bb2): buyer-education Q&A comparing PPAP Level 3 and Level 5, not a claim about Varsha's capability, so left as is. **0 violations.**
- **Velo override (`src/public/seo-override.js`, 11 ids):** title and meta strings scanned; 0 hits, generator unchanged.
- **FAQ v2 layer:** clean (256 entries, see entry above), so FAQ store and schema now agree.
- **Publish:** no VflWebsite or SEO tag change in this step, so no publish needed. Last Publish runs (b895aa7, d87a072, 5c23c76) green.
- **Clean close of the session's live work:** Wave 1 + Wave 2 + FAQ re-audit + schema audit complete; nothing parked except what pending.md already lists (P19/P20, P9, P10, P13).

### 2026-11-27 - Final wave: award years, 'Verified' H1, multi-H1, repeated blocks (executor)
- **Method:** every H1 count verified in rawHtml (DOM `<h1>` tags, head and scripts stripped), not markdown. Before / after DOM h1: /automotive-steering-powertrain 1 / 1 (text changed); /rubber-bonded-components 7 / 1; /forging-presses-hammers 4 / 1; /forging 1 / 1 (re-verified at waitFor 1000; mid-session scrapes showed 0 because the slideshow slide holding the h1 was not mounted); /forged-components-ev 1 / 1; /about-1-1 1 / 1.
- **Item 1:** gallery-caption support in `corrections.js` (VflWebsite 6d60050). Live captions: Bronze 2018 x2, Gold 2015. Test `tests/sitewide-fixes.test.cjs` (gallery cases, idempotent, path-scoped).
- **Item 2:** rule `/Verified Tier 1 & OEM Sourcing/ -> Tier 1 & OEM Sourcing` scoped to `^/automotive-steering-powertrain`; live H1 verified.
- **Item 3:** `w6ops-retag.js` entries `pa6w8` (demote 6 h1 -> h2) and `n2uai` (intro h1 -> p, 2 h1 -> h2); page code for both pages wired to `applyW6Content`.
- **Item 4:** new W6 ops `dedupe`, `dedupeEmbeds`, `dedupeRepeater` (tests in `tests/removeparas.test.cjs`). Attempt 1 used `collapse()` only: live unchanged. Attempt 2 blanks html / swaps repeats to `/_functions/embed/blank` (added to `embeds-extra.js`): /forged-components-ev kept the copy under "NVH Optimization for EV Platforms", /about-1-1 kept the first block and first table, both verified in rawHtml. /forging repeater: both attempts failed, op unwired, P23.
- **Items 5-6:** pending.md P22 spec (with canonical/H1/word-count evidence for 9 URLs), P23-P26.
- **Owner decisions needed:** none blocking. Optional: reword "Verified Shop-Floor Equipment" (H2 on /forging-presses-hammers, P26); decide fate of noindex pages in the sitemap (P25).
- **Follow-up (same day):** orphan headings blanked via W6 `blank` op ('Quality Systems & EV Validation' on /forged-components-ev, 'Engine & Powertrain Components' on /about-1-1; headings that still have a table below were kept); 'Verified Shop-Floor Equipment' -> 'Shop-Floor Equipment'. Verified in rawHtml; DOM h1 = 1 on all three pages; Publish green.

## 27 Nov 2026: duplicate 'EV range optimization' line removed (VflWebsite 8d10eb4)
- Embed-source edit + regenerate via scripts/build-embed-modules.js (only the embed module kept; the script's rewrites of 29 page files were discarded as out of scope). Lint (`npx eslint`) clean. Live: line x1, DOM h1 x1.
- Diagnosed the '2 h1' discrepancy: second match is the escaped copy in `wix-warmup-data` JSON, not a DOM element; reviewer's single-H1 result was right.

## 27 Nov 2026: A10 schema wave written via Wix item-seo-tags (4 pages)
- Corrections applied before writing: (1) Person moved from /about-1 to /company-profile (`unlvj`; no other page carries a Person); (2) no second Organization: each page was read with GET, parsed, merged and resent as a full tag set. /about-1 kept only a BreadcrumbList ("Home > About Closed-Die Forging"): the page is a top-level closed-die explainer, so breadcrumbs are valid and low-risk, but nothing else was warranted. Person jobTitle is "CEO & Director" only; the presidency is carried in the description ("youngest president of AIFI") and affiliation, without years or a present-tense title.
- Results (JSON-LD raw chars / tag set chars): plew4 2,576 / 3,447; unlvj 1,732 / 2,561; tfegr 1,803 / 2,507; l95rc 842 / 1,516. All PATCH 200, GET equal to what was sent, live rawHtml parses on all four, 0 duplicate @id, 0 hits for CQI, ARAI, solar, RDSO, CIN.
- Size cap probe used draft-only writes (publish:false) on tfegr, then the real publish:true write replaced them; published tfegr was never in a probed state. Result: 12,000-char per-script limit (see HANDOVER).
- Note: the Corrections layer was not touched. No homepage visible text changed.

## 2026-11-27 - Owner's 16 answers recorded; planning files updated (executor, no Wix writes, no VflWebsite push)
- **FACTS.md:** new section "Owner answers 27 Nov 2026" (items 1-11, [Y]); Certifications line updated (RDSO now no reference number; CQI-9 and ARAI added); Sustainability rewritten (Pune rooftop 150 kW kept; 5 MW owned solar-park plant added); CSR bullet repointed; export priority cross-reference; 8 new DO NOT PUBLISH rows (CQI-9 dates, ARAI part names, RDSO reference, MOQ number, case-study names/metrics, group schema, PED/AD 2000).
- **Reconciliation:** FACTS previously attributed the 150 kW rooftop to no plant (deck line only), so there was no conflicting plant; Pune is now the recorded plant. Owner did not restate the kW for Pune, and did not supply the park name/location or output use; none published.
- **CLAUDE.md:** Wix API row: removed "≤3,600 chars"; cap 12,000 per JSON-LD script (probe 27 Nov), 4,096 as house policy (owner-approved edit).
- **pending.md:** P10 dropped; P25 decided lift noindex, pending identification; P26 authorised for code; P19/P23 one bounded attempt authorised (two-failure rule overridden), P20 expected Editor-only; RDSO and P13 rows updated; Apollo/Lusha deferred Q1 2027 (a third-party planning document wrongly said closed).
- **INTERNATIONAL-PLAN.md:** R4, R5, R6, R10 marked superseded/closed; A10 credential list extended; section 5 rewritten as fully closed with each answer against its question (PED/AD 2000 struck, Apollo noted); Wave 4 unblocked; new section 8 forward queue A-H.
- **PHASE3-PLAN.md** status row added; **NEXT-SESSION.md** rewritten (was stale, dated 26 Nov).
- No gate scripts apply (no content drafts). No Opus bulk reading.


## 27 Nov 2026, step A credential and Person wave (executor)
- Wrote plew4 and unlvj as in HANDOVER; GET before (4 tags each) and after equal; sizes 2,868 / 1,916. Firecrawl live check failed 4x (timeout), logged as P27. Not marked done.

## 27 Nov 2026, step B P23/P19/P20 (executor)
- Investigation order: (1) FAQ v2 paged to exhaustion (3 pages, 256 entries): 0 matches. (2) /_functions/embed iframes: none on /product, repeater is native DOM on /forging. (3) Velo reach: temporary diagnostic release f154a23, f25971f (x-diag meta) showed page-level $w('Repeater')=1 on /forging (repeater6, 4 items text14/text15) and 11 repeaters of 12 items on /product; `$item('Text')` returned all 57 page texts (not item-scoped), which is why attempts of 26-27 Nov failed. `$item('#id')` read per-item values correctly.
- Fix release 39007ae (itemBlank on a3evt, itemLabelSub on hd575, W6 block added to Product page file, diagnostics removed), then 88d58da (sweep button1..button80). Lint clean, 5 test files pass.
- Results: see HANDOVER above. P19 remaining: 6 button labels live. Next step for P19, if retried: log which button ids exist per repeater (diagnostic meta again) rather than sweeping.

## 27 Nov 2026, step B2 P19 attempt 2 / alt text / P26 (executor)
- P19 diagnostics (temporary x-diag, all removed): showed 11 repeaters on /product; ids button15-27; the same `$item('#button17')` sequence read in repeaters 4-11; typos only seen via button17 (items 9 and 10, the 2 already fixed). Repeaters 11, 12, 14 expose only the template label for buttons 24, 25, 27.
- Attempt 2 releases: itemLabelById (matching `_id`), first with truncated ids (no effect), then with full ids: it relabelled every item of the 3 repeaters (regression, caught by the live rawHtml check straight after publish). Revert 812babb. Final live read: typos exactly as before the attempt; 0 x-diag.
- Job 2 and Job 3 results: see HANDOVER above. Commits: VflWebsite 812babb (head); the website repo log commit follows.

## 27 Nov 2026, steps E and F content drafts (executor, drafting only)
- Wrote content-drafts/F1-esg-sustainability, F2-steel-equivalency-matrix, F3-anonymised-case-studies, F4-commercial-vehicle-forgings, E1-transmission-and-driveline, E2-electric-mobility (all *-DRAFT.md). check-wordcount.sh 550: all six PASS (750, 839, 637, 712, 647, 615). Grep for DNP terms (captive, CIN, machine counts, PED/AD 2000, Maxility/KCTR, BMW/KTM, MOQ number, ZLD, stainless claims) found no page-copy hits.
- Wording rules applied: solar = "owned"/"own asset" (never "captive"); ARAI only as the approved sentence with no part names; CQI-9 and RDSO with no dates or numbers; no MOQ number; EV pages state the exclusion of motor, gearbox and powertrain parts; PED/AD 2000 not mentioned; case studies anonymised with no metrics.
- No Wix writes, no VflWebsite push. Reviewer verification pending.


## 27 Nov 2026 step F accuracy fixes (F1 ESG, F2 steel matrix)
Applied seven review fixes to content-drafts/F1-esg-sustainability-DRAFT.md and F2-steel-equivalency-matrix-DRAFT.md (see HANDOVER). Drafts only; nothing published.
