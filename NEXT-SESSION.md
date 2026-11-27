# Brief for the next session (rewritten 27 Nov 2026, session close)

## RULE 0 first
Opus dispatches and decides; it does not read the repo, scrape, grep, verify or relay. Bulk reading goes to the `reviewer` (Haiku); edits, Wix writes, logs, commits and pushes go to the `executor` (Sonnet). Agents return verdicts of 15 lines or fewer and write detail to files. Full text: top of `CLAUDE.md`.

## Read order
`CLAUDE.md` -> `website.md` (HANDOVER) -> `PHASE3-PLAN.md` (Status) -> `pending.md` -> `INTERNATIONAL-PLAN.md` (section 8) -> `FACTS.md` ("Owner answers 27 Nov 2026") -> `content-drafts/`.

## BRANCH WARNING
This repo has NO trunk. Work goes on the designated CCR branch `ccr-9150608e-4u9zne`. A stray `main` branch exists on origin at 225773b: an executor pushed to a NEW `refs/heads/main` that did not previously exist, then the work was pushed to the correct branch. It has NOT been deleted (owner decision pending, worklist item 6). Do NOT treat `main` as the trunk and do not push to it.

## OWNER WORKLIST (one combined ordered list for Yash)
1. **indianforging.org backlink** (5 min, free, highest return): he is AIFI President; that site ranks page 1 for "forging india" and links nowhere to the company.
2. **Justdial + Kompass corrections** (30 min, `content-drafts/directory-entity-cleanup-DRAFT.md`): Justdial advertises an EV motor shaft forging the site denies; Kompass has wrong legal name, year 1994, category and pincode.
3. **Decommission mail.varshaforgings.com** (15 min with the DNS holder): a 2012 site is live and indexed saying "30 Persons", "1 Kgs. to 20 Kgs.". Remove web files, keep MX, return 410 or 301.
4. **Editor visit:** (a) create 2 blank pages, /esg-sustainability and /steel-grade-equivalents, and send the page IDs (new pages cannot be created by API); (b) add an H1 Text element on /product (P20: the page has ZERO h1-h6); (c) fix 6 button typos on /product (P19): "Secotr Shaft" x4, "Steering Level" x1, "Swingram Mount" x1.
5. **Fill in the 32-field case-study input form** for 3 real cases (`content-drafts/F3-research-real-case-studies-and-input-form-INTERNAL.md`; 22 fields safe anonymised, 6 need customer permission, 4 never published).
6. **Decide:** delete the stray `main` branch on the website repo?
7. **Lift noindex on the two empty pages ONLY after their content lands** (Editor page-level setting, not API).

Still unanswered by the owner (block publishing): Pune rooftop kW figure (FACTS had 150 kW from a deck line with no plant attributed, so it is an INFERENCE); solar park name, location, metering and how plants use it (DO NOT PUBLISH); any ESG generation or share figures; three real case-study projects; the "E" in 20MoCr4E and the standards A105/LF2/F11/F22 are supplied under; keep or drop the "Housing Cover" and "Gear Primary Helical" labels; who cuts the gear teeth; what the 2024 EV supply actually was; which vehicle classes may be named.

## CLAUDE WORK QUEUE
1. **Internal link blocks for the 32 orphaned pages**, /request-for-quote first. 32 of 49 pages are in NEITHER nav nor footer (incl. /request-for-quote, /oil-and-gas, /commercial-vehicle, /railway, /buying-forgings-from-india, /forging-vs-casting, /automotive-steering-powertrain, /forged-components-ev). Nav carries 15 pages + home. Link blocks take priority over 301s because Wix redirects cannot be updated (delete then create, new ID).
2. **Restructure F4 (/commercial-vehicle) for mobile within the P28 constraint** (several short elements or shorter copy). Check phone width before every release.
3. **Publish F1 (ESG) and F2 (steel matrix)** once Yash supplies the page IDs. Reviewer re-checks first; F2 still needs metallurgist sign-off.
4. **P22 301 map** for owner approval (nav membership already measured, in website.md). Create no redirect before approval.
5. **KPI search re-check 10 Dec and 24 Dec** (queries in PHASE4-PLAN.md).
6. E1/E2 (/transmission-and-driveline, /electric-mobility) must respect P28 (no single-element long body). F3 stays unpublishable until the owner supplies real cases. Media dropdown mismatch (Awards -> /copy-of-articles holds awards content; Moments -> /copy-of-awards) and unidentified Wix item `nvtlm` (no title, no sitemap slug): investigate, low priority.

## WHAT WENT LIVE AND VERIFIED 27 NOV 2026
- Award captions on /copy-of-articles (2018/2015 trophy years); single correct H1 on /automotive-steering-powertrain, /rubber-bonded-components, /forging-presses-hammers, /about-1-1.
- /forged-components-ev: duplicate "supports EV range optimization through:" paragraph removed from embed 5 (h4 kept), vflwebsite 8d10eb4.
- A10 schema wave: `/` Organization+Manufacturer with both plant nodes; /company-profile Person + BreadcrumbList; /automotive-steering-powertrain Product + BreadcrumbList; /about-1 BreadcrumbList only.
- Credential wave live-verified (a0c2ccf): homepage hasCredential SEVEN (IATF 16949, ISO 9001:2015, ISO 45001:2018, ISO 14001:2015, CQI-9, ARAI, RDSO). CQI-9 and RDSO carry no dates or reference numbers; ARAI no part names. /company-profile Person: OrganizationRole President of AIFI, startDate 2024, no endDate, description "currently serving as AIFI president (term 2024-26)", jobTitle "CEO & Director".
- **P23 FIXED:** /forging repeater cut from 4 repeated bullet blocks to 1 via new W6 op `itemBlank`. **ROOT CAUSE of the two earlier failures: Velo `$item('Text')` and `$item('Button')` are NOT item-scoped (they return the whole page's elements); only `$item('#id')` is item-scoped.**
- /commercial-vehicle: "Secotr Shaft" typo fixed (0 occurrences) via text-match `itemLabelSub`; survived the revert below.

## REVERTED / PARKED SAME DAY
- **/commercial-vehicle F4 body copy and H1** published (84310a2), REVERTED (f4c84b0) for a phone-width layout regression: "Driveline engine" bullet overlapped another line, "Electric Buses and Electric Vehicles" collided with the line below, H1 "Suspension" clipped. Desktop was acceptable. `OPS_TOOF5` now loads with `.slice(1)`: op 0 unwired, typo op kept.
- **P19 PARKED** after four attempts and a live regression: an `itemLabelById` op overwrote every item in repeater11/12/14 (23 buttons read "Sector Shaft"), reverted in 812babb. Six typos remain on /product. Now Editor work.
- P26 PARKED (Wix Classic has no embed height setter; collapse() does not reflow the absolute layout). Owner fallback: leave it.

## CONSTRAINTS DISCOVERED (do not relearn)
- **P28:** a SINGLE Wix text element cannot carry long-form body copy at phone width (~946 words overlapped and clipped). Constrains every content draft aimed at a single element, including /transmission-and-driveline and /electric-mobility.
- **NEW PAGES cannot be created by API** on this Wix Classic site, and the Velo repo has no router (`src/pages` has no routers.js). Yash must create blank pages in the Editor.
- **NOINDEX is NOT in item SEO tags.** All 50 Wix items show zero robots tags, yet two pages serve "follow, noindex". It is set at Editor page level: the API cannot detect or change it. Only a live scrape detects it; only Yash can lift it. Only 2 pages are noindexed (/transmission-and-driveline, /electric-mobility), matching P25. An escalation that /commercial-vehicle was also noindexed did NOT reproduce.
- Real Wix API JSON-LD cap is 12,000 chars per script (8,000 accepted, 16,000 rejected MAX_TAG_BYTES_EXCEEDED). House policy stays 4,096. CLAUDE.md corrected.
- **P27 (Firecrawl):** times out at its 60s limit on `/` and `/company-profile`; light pages scrape in ~10s. Workaround that worked: maxAge of a few hours, confirming the cache postdates the write.
- /forging DOES have a STATIC_PAGE item (a3evt) and its stored override IS what is served. Wix's resolve-static-page-seo-tags returns a generic title for Classic sites and is NOT a live-page signal. An earlier "no managed SEO tags" escalation was wrong.
- Velo `$w('Repeater')` reaches every repeater; static-repeater button labels are editor overrides, so a write to `$item('#buttonN').label` is not item-scoped.

## DRAFTS READY in content-drafts/ (none published)
F1 ESG (CBAM corrected: 50-tonne importer threshold, 2028 downstream extension marked proposed-not-law, unverified CN code removed); F2 steel matrix (two fix passes; no row is an exact equivalence, global caveat at top, EN31/16MnCr5 BS cells "none confirmed", F11/F22 shown by nominal composition); F3 scaffolds UNPUBLISHABLE plus the INTERNAL research and input form; F4 commercial vehicle (reverted, needs mobile restructure); E1 transmission-and-driveline; E2 electric-mobility.

## OWNER ANSWERS RECORDED 27 NOV (all [Y] in FACTS.md)
Solar = Pune rooftop plus 5 MW owned outright in a solar park ("owned", NOT "captive"); CQI-9 held, no dates; ARAI claimable as safety-critical parts in our assemblies, no part names; AIFI currently serving 2024-26; GBP exists for both plants; RDSO added without reference number; export priority EU/Germany, then North America, then Middle East/Africa, Japan/Korea deprioritised; case studies anonymised only; MOQ project-dependent, no number; group brands only where relevant; PED/AD 2000 not applicable; P10 dropped; P25 write content then lift; P26 code attempt (parked); Apollo/Lusha deferred to Q1 2027.

## Rules to keep
- No Wix writes without GET first and the full tag set; one writer at a time; JSON-LD under 4,096 (house policy). Never ask Yash to run Sited. Do not re-raise P10, Apollo/Lusha, PED/AD 2000.
- Before parking anything as Editor-only: check raw HTML for `filesusr.com/html/` iframes, FAQ v2 data, and Velo `$w` reach.
- `collapse()` is not SSR-visible; blank `t.html` instead. Count DOM h1s only. /forging slideshow makes h1 counts vary with waitFor (use 1000). Paginate FAQ v2 queries before claiming 0 hits.
- item-seo-tags writes render only after the next publish; the 10 Velo-owned SEO pages are edited via `ops/tools/gen-seo-override.js`, not the API.
- Blog API: Wix ignores the requested slug (match by TITLE); never pass `language`; publish returns a bare 200.
