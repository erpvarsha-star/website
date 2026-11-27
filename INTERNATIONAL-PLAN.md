# International Plan: consultant audit reconciled against FACTS.md
Created 26 Nov 2026. Source: external consultant audit "Website, International SEO, and AI Visibility Audit for Varsha Forgings" (received 26 Nov 2026). Reconciled against the verified state (FACTS.md, website.md HANDOVER 27 Nov 02:15, PHASE4-PLAN.md, GROWTH-RESEARCH.md, pending.md).

Rules that govern this plan: facts only from FACTS.md; no CIN; no machine counts; one Wix writer at a time; a task that fails twice goes to pending.md; every gate is measured (script or read-back by the Haiku reviewer), never self-report.

---

## 1. Verdict

The audit's architecture, off-site entity and conversion findings are valuable and largely new to us: the orphaned landing pages, the live 2012 legacy site on a mail. subdomain, duplicate and misspelled slugs, the wrong or duplicated directory profiles, the missing B2B registrations (Thomasnet, Europages, GlobalSpec) and the absence of a structured RFQ are real, actionable and adopted below. Its engineering-spec layer is unusable: it was built by reading the OLD live site and third-party aggregators, not our verified fact base, so it repeats exactly the weights, tolerances, machine counts, standards and claims that we removed on 22-23 Nov. Nothing in the spec layer is published; the rejected items are listed in section 2 so no future agent re-introduces them.

---

## 2. Fact conflicts: REJECTED

| # | Audit claim | What FACTS.md says | Source tag | Why rejected |
|---|---|---|---|---|
| R1 | Weight envelope 0.5-50 kg | 1-25 kg | [Y] 22 Nov | Owner-confirmed range; 0.5-50 kg is on the correction queue as wrong text |
| R2 | 60+ CNC turning centers, 17 VMCs, 2 HMCs, 5 gear hobbers, broaching as in-house | No machine counts, ever. Broaching is a vendor process; capacity is split between in-house and a vendor base | DO NOT PUBLISH [Y] 22 Nov | Owner decision: describe capability, not numbers |
| R3 | Machining tolerance +/-0.01 mm | Forging +/-0.5 mm, machining +/-0.02 mm | [Y] 22 Nov | +/-0.01 mm is on the correction queue |
| R4 | CQI-9 heat-treatment compliance | **SUPERSEDED 27 Nov 2026:** owner confirms CQI-9 HELD; publish as held with no dates or revision numbers [Y] | [Y] | Was rejected as unconfirmed; now owner-confirmed. Not a conflict any more |
| R5 | ARAI-certified sealed ball joints | **SUPERSEDED 27 Nov 2026 in part:** ARAI claim approved as "all safety-critical parts used in our assemblies have been ARAI certified", WITHOUT part names [Y] | [Y] | The general claim is now published-eligible; the specific "sealed ball joints" wording stays rejected because it names a part |
| R6 | PED 2014/68/EU and AD 2000-Merkblatt W0 | **CLOSED 27 Nov 2026: NOT APPLICABLE, Varsha is automotive only [Y].** ASME flange ratings remain on the not-confirmed list | [Y] | Closed question; never raise again |
| R7 | EN / UIC / AAR railway standards | "Not held, never claim." Railway claim is RDSO only | [Y] | Direct conflict |
| R8 | 100% UT coverage | Only 100% MPI on safety-critical parts is confirmed; UT is a test method used, not a 100% claim | [Y] | "100% UT" is on the correction queue |
| R9 | 32 MT axle loads, 30+ year life | Unconfirmed, remove | [Y] | On the correction queue and in the Processes "Not confirmed" list |
| R10 | 5 MW metered solar | **SUPERSEDED 27 Nov 2026:** Varsha owns a 5 MW plant in a solar park outright (own asset), plus rooftop solar at Pune (150 kW as FACTS records) [Y] | [Y] | No longer a conflict. "Metered" and any generation figures remain unpublished until the owner supplies them |
| R11 | Publish the CIN / MCA record | CIN is never published anywhere | DO NOT PUBLISH [Y] 22 Nov | Owner decision. MCA data also gave the wrong founding year (see R12) |
| R12 | Founding year 1988 (from MCA) | 1989, Aurangabad | [P][Y] | "Founding year 1988" is on DO NOT PUBLISH |
| R13 | 91% schedule compliance | Not in FACTS | none | Unsourced metric |
| R14 | 15+ export markets | Germany, Spain, Italy, Portugal, Austria, United States, Asia-Pacific, Middle East & Africa | [Y] | Count not confirmed; list only the named markets |
| R15 | 12-year dispute-free Korean JV | Not in FACTS. The confirmed JV is KCTR (2013, for Tata Motors and Mahindra) per the leadership bio | [Y] | Unsourced and conflicts with the bio |
| R16 | Stainless / AISI 304 / 316 (where it appears) | No stainless steel. Carbon and alloy grades only | [Y] | Direct conflict |
| R17 | Aerospace (where it appears) | Not aerospace; remove the claim | [Y] | Direct conflict |

**Closing note:** several of these (R1, R2, R3, R7, R8, R9, R16, R17) are the exact strings Yash had us remove on 22 Nov. The auditor read the pre-correction site and third-party copies of it. Re-running the audit against the live site today would not reproduce them.

---

## 3. ACCEPTED: adopted into the plan

Channels: Velo corrections layer (`src/public` rules) | Velo w6content | seo-override generator (`ops/tools/gen-seo-override.js`) | content-ops blog | Editor-Yash | off-site-Yash | DNS/hosting-Yash.

| # | Finding | Why it matters | Channel | Owner | Priority |
|---|---|---|---|---|---|
| A1 | Legacy mail.varshaforgings.com 2012 site (company_profile.html, infrastructure.html) still live and indexed with stale facts and dead contacts | Indexed contradiction of our entity; AI crawlers can quote it | DNS/hosting-Yash (remove or 301 to the main domain) | Yash, Claude drafts the instruction | P1 |
| A2 | Sitewide typos ("Customer's", "Industrial Applicatin", "Secotr Shaft", "Steering Level", "Swingram Mount", "Comercial Vehicle's", "We a leading...") | Credibility on first read | Velo corrections layer (text rules), unit-tested | Claude | P1 |
| A3 | Stale "Copyrights 2024" footer | Looks abandoned | Velo corrections layer | Claude | P1 |
| A4 | Footer email marketing@varshaforging.com (missing s) on /copy-of-articles and /assembly | Enquiries lost. FACTS email is marketing@varshaforgings.com | Velo corrections layer | Claude | P1 |
| A5 | http:// footer link | Mixed-content and trust signal | Velo corrections layer | Claude | P2 |
| A6 | /forging, /machining, /quality returned inaccessible or no retrievable detail to the auditor | Crawlers may see no compliance detail on the pages that matter most | Velo w6content (server-side text), then reviewer fetch test | Claude | P1 |
| A7 | Orphaned landing pages (/forging-manufacturer-india, /forged-components-railways, /forging-company-aurangabad, /forging-manufacturer-pune, /forging-company-maharashtra, /heat-treatment-metallurgy, /assembly-services, /alloy-steel-forgings, /forging-presses-hammers, /forging-vs-casting, /steering-suspension-components, /transmission-and-driveline, /agriculture) not reachable from nav or footer | Link equity and crawl depth. Nav is Editor-only, so hub-and-spoke is simulated with Velo "Related buyer guides" link blocks (pattern proven on 12 pages) | Velo w6content link blocks (nav-level change stays Editor-Yash, optional) | Claude | P1 |
| A8 | Duplicate and misspelled slugs (/tool-manufactring, /copy-of-articles, /copy-of-awards; Product dropdown all to /product; CSR loops to home; Enquiry/Careers/Location all to /contact-us-1) | Duplicate signals and broken navigation. Redirect API has no update method: delete then create | Wix Redirects API (301), one writer at a time; link targets via Velo | Claude (nav labels and CSR link: Editor-Yash) | P2 |
| A9 | /llms.txt index file | Cheap AI-crawler guidance | Velo HTTP function or static route, content from FACTS only | Claude | P2 |
| A10 | Schema expansion: Organization to ["Organization","Manufacturer"]; two plant location nodes; hasCredential for IATF 16949, ISO 9001, ISO 45001, ISO 14001 (no issuing body or expiry) **plus, as of 27 Nov 2026, CQI-9, ARAI and RDSO (no dates, revision numbers, part names or reference numbers)**; Person schema for Yash J. Munot incl. AIFI presidency **with years 2024-26 now owner-confirmed**; Service with areaServed (named export markets only); Product per component family with FACTS-only grades, forging +/-0.5 mm, machining +/-0.02 mm, presses 800-2,500 T; BreadcrumbList on secondary routes; FAQPage on de-duplicated Q&As | Entity clarity for AI engines. Each JSON-LD block under 4,096 bytes | seo-override generator (Velo) for the 10 pages it owns; Wix SEO API for the rest | Claude | P2 |
| A11 | Structured RFQ form (drawing upload, quantity, target country and Incoterm, material grade, NDA toggle) on /contact-us-1 | Conversion for international buyers. Follows the FACTS RFQ sequence: drawing, feasibility within 48 h for a single drawing, quotation, PPAP | Editor-Yash (form is a Wix Forms element); Claude writes field spec and copy | Yash + Claude | P2 |
| A12 | Directory entity cleanup: Kompass (old legal name, wrong year, wrong category, wrong pincode, http link, employee band); IndiaMART two competing profiles; TradeIndia founding year and "supplying & trading"; Justdial "EV Motor Shaft" wording (FACTS: no motor parts, suspension and steering only); MESH Works unaudited listing; RocketReach/GraphIQ scraped data; Maxility contact page gmail addresses | Wrong third-party data feeds AI answers. Correct values from FACTS: Varsha Forgings Private Limited, 1989, Pune 412105, marketing@varshaforgings.com, +91 8411000551. Builds on P13 strings in `content-drafts/` | off-site-Yash with Claude-written paste text | Yash + Claude | P1 |
| A13 | Register on Thomasnet, Europages, GlobalSpec/Engineering360 | Where overseas buyers shortlist suppliers. Free tiers only; any paid listing over $50 needs owner approval | off-site-Yash, Claude drafts profile text | Yash + Claude | P2 |
| A14 | Link yashmunot.com and AIFI trade press (The Machine Maker) via sameAs and a Leadership page | Corroboration for the Person entity. Link only after confirming each page is Yash's own and FACTS-consistent | seo-override generator + Velo; new page via Editor-Yash | Claude (Yash confirms the pages) | P3 |
| A15 | Raw image filenames and missing alt text (unnamed (1)_edited.png, ComercialVehicle.png, raipart.png) | Accessibility and image search | Velo corrections layer (alt text) | Claude | P3 |
| A16 | Steel equivalency matrix (EN8/EN9/EN19/EN24/EN31, 20MnCr5, 16MnCr5, 42CrMo4, SAE/AISI/ASTM equivalents) | High-value engineer content. Only the FACTS grade list; equivalents are general engineering explanation, not Varsha claims | content-ops blog | Claude | P3 |
| A17 | 10-15 component-family and vertical pages (including a commercial-vehicle vertical) | Fixes "AI groups us with weaker suppliers because Tier-1 depth is hidden" | content-ops blog (live channel for new pages) and Velo w6content | Claude | P3 |
| A18 | Placeholder Facebook/Instagram links (point to Wix's own accounts) | Already owner-decided: remove. Open as P9 | Editor-Yash (Social Bar is outside Velo reach) | Yash | P1 |
| A19 | Heading hierarchy and nav-vs-footer label conflicts (remaining cases) | Consistency | Velo w6content; labels Editor-Yash | Claude | P3 |
| A20 | Hold hreflang until genuinely translated pages exist | Correct advice. ES and DE blog posts exist but are single posts, not mirrored page sets | none now | Claude (revisit at day 90) | Hold |

---

## 4. ALREADY DONE: the audit is out of date

| Finding in audit | What we did | When | Evidence |
|---|---|---|---|
| Heading hierarchy errors / multiple H1 | QS1, P17, P18 closed. Exactly 1 H1 on /quality, /automotive-steering-powertrain, /forging; 'Capability claims:' label removed on /quality, homepage, /forging | 27 Nov | VflWebsite 62adc58, 4fca538; reviewer PASS (pending.md QS1, P17, P18, CC) |
| Thin pages | W6: 10 pages rewritten, 656-1,678 words each, 1 visible H1, 0 DNP hits | 23 Nov | website.md W6; served no-JS HTML check |
| Missing meta descriptions | Meta description on 25/25 blog posts | 27 Nov | `ops/blog-meta.js`, VflWebsite b5ce3a7; reviewer rv6 PASS; pending.md MD |
| Missing FAQPage schema | FAQPage JSON-LD on 21 posts (the ES and DE posts have no FAQ section) | 27 Nov | VflWebsite 9dfa187; `ops/results/run-2026-11-26T21-00-49-647Z.json`; reviewer PASS |
| Aurangabad naming | Renamed to Chhatrapati Sambhajinagar (Aurangabad) across visible text, SEO tags and blogs; URL kept | 26 Nov | AURANGABAD-RENAME-PLAN.md; P11, P12, P14 closed |
| Weights, tolerances, machine counts, railway standards, stainless, aerospace | Corrected at SEO/schema, Velo server-side and FAQ data layers (256 FAQ entries re-scanned) | 22-26 Nov | FACTS correction queue; pending.md P1-P5, P11, P15 |
| Few landing pages and blog posts | 25 blog posts live including L1, L2, L5-L8, B1-B10, C1-C4 (plus L3, ES, DE, 2 older) | 23-27 Nov | website.md 26 and 27 Nov logs; reviewer PASS |
| No LinkedIn entity link | LinkedIn sameAs live in homepage schema | 22 Nov | FACTS Identity table [Y]; website.md |
| Weak og:image coverage | og:image sweep; og/twitter tags restored by P12 | 23 and 26 Nov | W8; P12 close |
| Orphaned content (partial) | "Related buyer guides" internal link blocks on 12 pages, reviewer PASS 7/7 and 5/5 | 26-27 Nov | pending.md IL, IL2 |
| Overall AI-readiness | Sited 83/100; its H1 to H6 issue already fixed | 26 Nov | website.md session 3 |

---

## 5. Owner questions: FULLY CLOSED 27 Nov 2026

Every question below was answered by Yash on 27 Nov 2026 and recorded in FACTS.md ("Owner answers 27 Nov 2026", source [Y]). Nothing in this section is open; do not re-ask.

**Previously answered in FACTS.md (22-26 Nov):**

| Audit question | Answer on record |
|---|---|
| Weight envelope | 1-25 kg [Y] |
| EV commercial scope | Suspension and steering parts only. No motor shafts, EV gearbox or powertrain parts [Y] |
| Simulation software stack | Creo 3.0, SimuFact Forming 15.0, BricsCAD, Dell Cam [Y] |
| Wix vs migration | Stay on Wix. The Velo + GitHub pipeline makes it productive (CLAUDE.md channels) |

**Answered 27 Nov 2026 (each answer against its question):**

| Q | Question | Owner answer [Y] 27 Nov 2026 | Effect |
|---|---|---|---|
| (a) | Solar: 150 kW rooftop or 5 MW? | **Both are Varsha's.** Rooftop solar at the Pune plant (150 kW as FACTS records) AND a 5 MW solar plant in a solar park, owned outright (own asset) | ESG page UNBLOCKED; CBAM/ESG position upgraded; no generation figures until supplied |
| (b) | CQI-9 | **Held.** Publish without dates or revision numbers (owner declined to supply them) | Add to hasCredential and copy (queue A) |
| (c) | ARAI | **Claimable.** Certification obtained by conducting tests at ARAI for various parts used in assemblies made by VFL and its JVs; may be published WITHOUT part names. Wording: "all safety-critical parts used in our assemblies have been ARAI certified" | Add to hasCredential and copy (queue A); JV framing is a place where Maxility/KCTR may be mentioned |
| (d) | Priority export geographies | **1 Europe/EU incl. Germany, 2 North America (US, Mexico), 3 Middle East and Africa.** Southeast Asia, Japan, Korea deprioritised | Equivalency matrix leads DIN/EN and SAE/AISI; JIS optional, last |
| (e) | OEM logos and named case studies | **Anonymised only**: no customer names, no metrics; no permissions needed | 3 anonymised case studies in Wave 4 |
| (f) | International MOQ wording | **No number published.** "Project-dependent, discussed at enquiry" | Use that wording wherever MOQ arises |
| (g) | Group branding (Maxility, KCTR) | **Mention only where genuinely relevant** (e.g. JV framing in the ARAI claim). No parentOrganization/subOrganization schema, no group umbrella | No group page; Maxility directory cleanup unaffected |
| (h) | PED / AD 2000 | **STRUCK: not applicable, automotive only.** Closed | Remove valve and pressure positioning from any listing; never raise again |

**Also closed 27 Nov 2026:**
- **Apollo / Lusha: DEFERRED to Q1 2027** (as originally recommended). A third-party planning document wrongly recorded it as closed by the owner; the owner has now confirmed the deferral. Not an open question; revisit Q1 2027 only.
- **Owner-confirmed additions:** AIFI presidency currently served, term 2024-26 (years publishable); RDSO added with no reference number; Google Business Profile exists for both plants.

## 6. Execution waves

One Wix writer at a time across every wave; waves run in order. Flow per wave: Opus briefs, Sonnet executor builds, Haiku reviewer gates, executor logs, commits and pushes (CLAUDE.md model rule).

| Wave | Scope | Owner | Channel | Measured gate (reviewer, Firecrawl maxAge 0) |
|---|---|---|---|---|
| 1. Credibility repair | A2 typos, A3 copyright, A4 email, A5 http link, A15 alt text, A6 retrievability fixes | Claude (executor) | Velo corrections layer, VflWebsite staged release | Reviewer scrape: 0 occurrences of each typo string, email and "2024" footer; 0 DNP hits; lint and unit tests green; Publish workflow green |
| 2. /llms.txt and schema | A9, A10 | Claude | Velo route; seo-override generator; Wix SEO API for non-owned pages | /llms.txt returns 200 with FACTS-only content; every JSON-LD block parses, under 4,096 bytes; read-back of tags on each page; Rich Results style parse of 3 pages |
| 3. Architecture | A7 link blocks, A8 301s, A19, A1 (mail. decommission, Yash) | Claude; Yash for DNS | Velo w6content; Redirects API (delete then create); DNS/hosting-Yash | Every orphaned page has at least 1 inbound internal link in served HTML; each retired slug returns 301 to its target; mail. host returns redirect or gone; 1 H1 per page unchanged |
| 4. Content | A16 equivalency matrix (DIN/EN and SAE/AISI lead), A17 component and vertical pages (incl. commercial vehicle), ESG page and 3 anonymised case studies (questions (a) and (e) now answered, UNBLOCKED), A11 RFQ form spec | Claude; Yash for the form element | content-ops blog; Velo; Editor-Yash | `scripts/check-wordcount.sh` pass; FACTS audit with 0 DNP hits; live URL 200; meta description and 1 H1 present |
| 5. Off-site entity | A12 cleanup, A13 registrations, A14 sameAs links, A18 social icons | Yash (Claude writes all paste text) | off-site-Yash | Reviewer re-scrapes each profile: correct legal name, 1989, 412105, email and phone match FACTS; no duplicate IndiaMART profile; KPI re-check 10 Dec and 24 Dec (PHASE4-PLAN.md) |

Timing against the audit's 90-day frame: Waves 1-2 map to days 1-45, Wave 3 to days 15-45, Waves 4-5 to days 46-90. Phase 4 platform and localization (day 90 onward) is not scheduled; A20 is revisited then. Spend over $50 on any listing or tool needs Yash's explicit yes.

---

## 7. Failure protocol

| Wave | Revert | Cleanup and backups |
|---|---|---|
| 1 (Velo) | `git revert` the VflWebsite commit on main, push, wait for the Publish run to go green, reviewer re-scrapes to confirm the old state | Executor keeps the pre-change rule file in the commit history |
| 2 (schema and /llms.txt) | Revert the VflWebsite commit and republish. For Wix SEO API writes, restore the pre-write tag set saved in `ops/results/` | Take the tag read-back before every write, one page per call, full tag set |
| 3 (301s and links) | Revert the link-block commit. Redirects: delete the new redirect (new ID on re-create) and recreate the original if one existed | Record the redirect IDs and old targets in `ops/results/` before changing |
| 4 (content) | Remove the content-ops job file from the repo so it cannot re-run, then unpublish or delete the post through the Posts API | Drafts stay in `content-drafts/`; results in `ops/results/` |
| 5 (off-site) | Yash restores the previous listing text from the saved copy | Claude keeps the before-and-after strings in `content-drafts/` |

Any task that fails twice is stopped and logged in pending.md with its unblock condition (CLAUDE.md task-failure rule). After each wave the executor refreshes the website.md HANDOVER block, PHASE3-PLAN.md status, NEXT-SESSION.md and pending.md.

---

## 8. Forward queue (set 27 Nov 2026, after the owner's 16 answers)

Ordered. One Wix writer at a time; one page per Wix API call, full tag set replacement; every gate measured by the reviewer (Firecrawl maxAge 0), never self-report. Facts only from FACTS.md "Owner answers 27 Nov 2026". Keep JSON-LD per script at or under the 4,096-character house policy (API cap is 12,000).

| Step | Work | Channel | Notes and gate |
|---|---|---|---|
| A | **Credential and fact wave.** Add CQI-9, ARAI and RDSO to hasCredential (no dates, revision numbers, part names or reference numbers); add AIFI years (2024-26) to Person; add the solar facts (rooftop at Pune; 5 MW owned plant in a solar park) where they belong | Wix item-seo-tags API, STATIC_PAGE, one page per call, full tag set, publish:true; GET before and after | Homepage plew4 (Organization hasCredential) and /company-profile unlvj (Person) first; read-back equal to payload; live JSON-LD parses; 0 duplicate @id; 0 DNP hits; no group parentOrganization/subOrganization |
| B | **P19 / P20 / P23, one bounded code attempt each** (owner-authorised; two-failure rule overridden for this one attempt). P23 /forging repeater and P19 /product button labels via the W6 mechanism; P19 re-test of Velo reach. P20 needs a Text element that does not exist and Velo cannot create elements, so expected to stay Editor-only | Velo W6 (VflWebsite) | Each attempt measured live; on failure, back to pending.md for Yash (Editor) |
| C | **P26 code fix attempt:** collapse the blank boxes on /forged-components-ev and /about-1-1 and the spare space under the EV embed (owner authorised) | Velo collapse() route | Note collapse() is not SSR-visible; verify rendered layout, H1 counts unchanged |
| D | **P22:** derive nav membership from the live header/footer by scrape; produce a PROPOSED 301 map for owner approval BEFORE creating any redirect | Firecrawl scrape, then Wix Redirects API after approval | Merge content first, redirect last; /copy-of-awards is not a duplicate; /tool-manufactring slug stays; record redirect IDs |
| E | **P25:** identify the two noindex pages, report to the owner what is on them, then lift noindex (owner chose lift) | seo-override generator | Do not lift before the owner has seen the pages; both pages are 0-word, so content likely needed first |
| F | **Wave 4 content:** steel equivalency matrix (DIN/EN + SAE/AISI lead, JIS optional last), ESG page (UNBLOCKED by the solar answer), 3 anonymised case studies (no names, no metrics), commercial-vehicle vertical page | content-ops blog / Velo | `scripts/check-wordcount.sh` pass; 0 DNP hits; live URL 200; meta description and 1 H1; no group umbrella |
| G | **GBP cleanup list for both plants** (profiles exist), for the owner to action | content-drafts, owner pastes | Strings from FACTS; builds on P13 draft |
| H | **KPI search re-check 10 Dec and 24 Dec** | PHASE4-PLAN.md queries | Reviewer-measured |
