# Phase 3 W0 baseline: index of live sitemap pages

Snapshot taken 2026-11-22 via Firecrawl scrape (maxAge 0, waitFor 8000) of https://www.varshaforgings.com/pages-sitemap.xml (49 entries).

## Method and limits (read first)
- Pages were scraped live. Each per-page file holds the URL, title, H1 text(s), word count, internal links, form presence and the first ~300 visible words.
- **Word counts are manual estimates** by the reviewer from the scraped markdown, labelled "~" in each file. They are not script-measured. The sandbox cannot receive Firecrawl output as a file, so a `wc` measurement of the raw page was not possible. Use the counts for before/after comparison only with the same method, and treat differences under ~10% as noise.
- Two scrapes exceeded the tool size limit in-context (contact-us-1 twice, then a markdown-only retry). contact-us-1 was measured from the saved scrape on disk.
- `forged-machined-components` redirects to `forged-machined-components-vf` (same content). It is counted once as a redirect, so there are 48 distinct live pages plus one alias.
- FACTS.md cross-check: done for the claim families listed in the "FACTS.md conflicts" section below. Other claims are marked "needs FACTS match" in each file and were not checked in this pass.
- Redirects: no Wix Redirects API change was made. Read-only.

## Status legend
- **ok**: body text present and above ~200 words
- **thin**: body present but under ~200 words (or links/labels only)
- **image-only / label-only**: under ~60 visible words, mostly images or product labels
- **EMPTY BODY**: 0 visible words
- **redirect**: resolves to another page's content

## Index (one row per sitemap page)

| Slug | Status | Words (est.) | H1 count | Key flag |
|---|---|---|---|---|
| home | ok | ~460 | 1 | none |
| company-profile | ok | ~880 | 1 | none |
| request-for-quote | ok, has RFQ form | ~75 | 0 | H2 only |
| alloy-steel-forgings | thin | ~130 | 0 | weight 0.5-20 kg vs 1-25 kg elsewhere; meta describes assembly |
| transmission-and-driveline | **EMPTY BODY** | 0 | 0 | meta promises content; no body |
| copy-of-articles | thin (awards) | ~110 | 1 | slug says articles; content is awards |
| rubber-bonded-components | ok | ~900 | 7 | FACTS: rubber temps and Shore A to remove; 15+ yr life unverified |
| assembly | ok | ~195 | 1 | 4 identical "Indian Forging" link labels |
| forging | ok | ~190 | 1 | 1-25 kg vs other weight claims |
| media | thin | ~40 | 1 | H1 "Latest Articles" vs title "Technical Articles"; press logos only |
| forging-manufacturer-india | ok | ~850 | 1 | **DO NOT PUBLISH: CNC/VMC/HMC counts**; "PPAP Level 3" stale |
| steering-suspension-components | ok | ~1,250 | 1 | **WRONG ARTICLE**: body is heat-treatment/India-vs-China; title/meta say steering |
| torque-rod-assemblies | ok | ~1,100 | 1 | Shore A 55-75 (FACTS: remove); 0.5-50 kg vs 1-25 kg |
| customer | image-only | ~5 | 1 | logos only; customer names in alt text |
| electric-vehicles | thin | ~15 | 0 | product names only; "Forging company" link label |
| railway | image-only | ~5 | 0 | meta copies tool-manufacturing description |
| certifications | ok | ~170 | 1 | ISO 9001 caption absent; cert captions duplicated |
| quality | ok | ~220 | 1 | meta description is broken text |
| v-link-assemblies | ok | ~900 | 1 | "12,000 RPM"-type motor claims on EV pages (FACTS remove list) |
| history | ok | ~700 | 1 | timeline duplicated; date conflicts (2009 entry text) |
| machining | ok | ~190 | 1 | "+/-0.02 mm" title (FACTS: keep 0.02, but check consistency) |
| assembly-services | ok | ~1,000 | 1 | bolt grades 10.9/12.9 (FACTS remove list); Shore/temps |
| forging-manufacturer-pune | ok | ~1,050 | 1 | **DO NOT PUBLISH: CNC/VMC/HMC counts**; "Year Established 2013" (FACTS: 2007) |
| forging-presses-hammers | ok, has RFQ form | ~430 | **2** | two H1 tags; escaped pipe in H1 |
| forged-machined-components-vf | thin | ~70 | 0 | H2 only; "LFull" typo |
| forged-machined-components | **redirect** | ~70 | 0 | redirects to -vf (alias) |
| forging-company-maharashtra | ok | ~1,000 | 3 | **DO NOT PUBLISH: CNC/VMC/HMC counts**; Pune 2013 year |
| product | label-only | ~180 | 0 | product names only, no copy |
| about-1-1 | ok (duplicated) | ~450 | **6** | "STEP, IGES, Parasolid" (FACTS remove); 12,000 t claim; sections duplicated |
| electric-mobility | **EMPTY BODY** | 0 | 0 | meta promises EV content; no body |
| tool-manufactring | ok | ~250 | 1 | slug typo ("manufactring") |
| design | ok | ~260 | 1 | link label "Forging company" points to /electric-vehicles |
| automotive-steering-powertrain | thin (link block) | ~115 | **25** | 24 H1 tags whose text is "forged" linking to 22 pages |
| suspension-components | ok | ~750 | 1 | **DO NOT PUBLISH: CNC/VMC/HMC counts**; "0.5-50 kg"; "AI search" wording |
| heat-treatment | ok | ~280 | 1 | copy errors ("controls by:"); "VFL" undefined |
| about-1 | ok | ~200 | 1 | **FACTS conflict**: "1,000 to 5,000 tons" press (FACTS: 800 T-2,500 T); tolerance +/-0.2 mm |
| forging-company-aurangabad | ok | ~1,400 | **8** | duplicate H1s; 20-page-name block in FAQ |
| oil-and-gas | thin | ~180 | 1 | ASME Class 150-2500 (FACTS remove list); +/-0.02 mm |
| buying-forgings-from-india | ok | ~900 | 1 | **FACTS conflict**: competitor claims (MOQ, lead time, freight) and China negatives; same matrix as steering page |
| contact-us-1 | ok, has form | ~150 | 1 | publishes shared phone for both plants; contact details need owner sign-off |
| agriculture | label-only | ~60 | 0 | no agriculture copy |
| industrial-application | label-only | ~60 | 0 | "forging Company" link points to /railway |
| radius-rod-assemblies | ok | ~900 | 1 | "Typical 2-20 kg" vs 1-25 kg; +/-0.02 mm |
| commercial-vehicle | label-only | ~50 | 0 | no copy; meta names OEM customers |
| heat-treatment-metallurgy | ok | ~1,300 | 1 | **H1 identical to /steering-suspension-components** (duplicate title) |
| forged-components-ev | ok | ~1,500 | 1 | filler repeated ~5 times; "12,000 RPM" motor claim; PPAP Level 3 (FACTS: Levels 1-5) |
| forged-components-railways | ok | ~1,000 | 1 | **DO NOT PUBLISH: CNC/VMC/HMC counts**; **FACTS conflict**: UIC/AAR, Charpy -40 C, 30+ yr life, 100% UT |
| forging-vs-casting | ok | ~900 | 1 | "outside our range above 25 kg" conflicts with 0.5-50 kg; general-engineering claims need a label |
| copy-of-awards | image-only | ~25 | 1 | H1 "AIFI's 2nd Annual Conference 2026"; title "Company Milestones" |

Count: 49 rows (48 distinct live pages plus the redirect alias).

## Empty or near-empty pages (flag for owner)
- **EMPTY BODY (0 words):** transmission-and-driveline, electric-mobility
- **Image-only / label-only (under 60 words):** customer, railway, electric-vehicles, copy-of-awards, agriculture, industrial-application, commercial-vehicle, forged-machined-components-vf (text, but very short), forging-company-maharashtra is not thin (see above)
- **Redirect:** forged-machined-components -> forged-machined-components-vf

## Pages with H1 count other than 1
- 0 H1 (11 pages): transmission-and-driveline, request-for-quote, electric-vehicles, railway, forged-machined-components-vf, forged-machined-components, product, electric-mobility, agriculture, industrial-application, commercial-vehicle. Several of these use H2 headings only. Two are EMPTY BODY.
- 2+ H1: rubber-bonded-components (7), automotive-steering-powertrain (25), about-1-1 (6), forging-company-aurangabad (8), forging-company-maharashtra (3), forging-presses-hammers (2)

## Pages with forms or RFQ fields
- contact-us-1: enquiry form (Name, Company, Address, Phone, Email, Upload Drawing, Upload File, Message, Submit)
- forging-presses-hammers: RFQ form (Name, Work Email, Company, Country, weight, material, volume, upload blueprint, message, Submit RFQ)
- request-for-quote: RFQ form (Name, Company, Address, Phone, Email, Upload Drawing, Upload File, Message, Submit)
- All other pages: no form; RFQ is a text or button link to /contact-us-1 or an email address.

## Internal link count
- Pages with 0 captured internal content links: most pages (scrape captured only social links). Notable: automotive-steering-powertrain (22 links, a "forged" link block), forging-company-aurangabad (FAQ name block, no links captured), industrial-application (1), electric-vehicles (3), design (3), tool-manufactring (2), forging (2), assembly (5), contact-us-1 (self), forging-presses (0).
- Per-page lists are in each file.

## FACTS.md conflicts and DO NOT PUBLISH hits (found in this pass)
These are confirmed against FACTS.md text. They are not fixed here (W0 is read-only).

1. **DO NOT PUBLISH (machine counts), FACTS.md line 178:** forging-manufacturer-india, forging-manufacturer-pune, forging-company-maharashtra, suspension-components, forged-components-railways. Counts seen: 60 CNC turning, 17 VMC, 2 HMC, 5 gear hobbing.
2. **Pune founding year (FACTS line 85: "Pune since 2007"; line 15):** shows "2013" on forging-manufacturer-pune and forging-company-maharashtra.
3. **Competitor claims (FACTS line 69: "No competitor claims"):** buying-forgings-from-india and steering-suspension-components (China-vs-India matrix with MOQ 1,000-5,000, lead times, freight).
4. **Railway standards and performance (FACTS lines 44, 68, 111):** forged-components-railways (UIC/AAR, Charpy at -40 C, 30+ year life, 100% UT) and buying-forgings-from-india.
5. **Tolerances (FACTS line 67, 90):** +/-0.01 mm, +/-0.2 mm, +/-5 microns, "EN 10243-1 Grade F" appear on machining, forging-manufacturer-pune, suspension-components, about-1, about-1-1, forged-components-ev, oil-and-gas, radius-rod-assemblies. FACTS: forging +/-0.5 mm, machining +/-0.02 mm.
6. **Press range (FACTS line 65):** about-1 says "1,000 to 5,000 tons". FACTS range is 800 T to 2,500 T (plus 1,000 T added).
7. **Rubber temperatures and durometer (FACTS lines 76, 101):** rubber-bonded-components, torque-rod-assemblies, assembly-services, forged-components-ev ("NR/SBR", Shore A 55-65).
8. **Remove list (FACTS line 119):** oil-and-gas (ASME Class 150-2500); forged-components-ev and v-link-assemblies (motor speed 12,000 RPM / EV motor shafts); about-1-1 (STEP/IGES/Parasolid); assembly-services (bolt grades 10.9/12.9).
9. **PPAP wording (FACTS line 43: PPAP Levels 1-5 supersede "Level 3"):** "PPAP Level 3" on buying-forgings-from-india, steering-suspension-components, forging-manufacturer-india, forged-components-ev.
10. **Weight range (FACTS does not set one in the reviewed lines; pages disagree):** 0.5-20 kg (alloy-steel-forgings), 1-25 kg (forging, assembly, oil-and-gas, forging-company-aurangabad, forging-presses-hammers, v-link, radius-rod meta), 0.5-50 kg (forging-manufacturer-india, torque-rod, suspension-components, about-1, about-1-1, forging-company-aurangabad table, forging-vs-casting table), "above 25 kg outside range" (forging-vs-casting). Owner to confirm one range (FACTS).
11. **Customer names (FACTS status not checked):** customer page (logos and alt text), commercial-vehicle meta, suspension page. Owner permission needed before later use.
12. **Shared phone number (not in FACTS):** contact-us-1 lists +91 84110 00551 for both plants.

## Not measured in this pass (do not treat as checked)
- Schema (JSON-LD) on each page was not read (Firecrawl text only). Schema-presence checks belong to a later read via the Wix SEO read-back.
- Visible-text claims not listed above: each needs a FACTS.md check in the W3/W5 review.
- No Wix API calls were made. No pages were edited.
