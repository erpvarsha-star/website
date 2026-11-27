# Review: "Decision-Status Audit" (802b1e97-Decision-Status-Audit.docx)

Reviewer: Haiku reviewer (read-only). Date of review: 2026-11-26.
Reference state: FACTS.md (incl. DO NOT PUBLISH), website.md HANDOVER, pending.md, INTERNATIONAL-PLAN.md. Also checked for existence: PHASE3-PLAN.md, PHASE4-PLAN.md, GROWTH-RESEARCH.md, NEXT-SESSION.md, AURANGABAD-RENAME-PLAN.md, WEEKLY-RHYTHM.md, content-drafts/ (all exist).
Not verified live: this review did not run Firecrawl scrapes. Live-status claims are marked UNVERIFIED where our files cannot settle them.

## 0. What kind of document this is

- **Type:** a status and decision-audit sheet (a "verified status" table with bucket legend). It is not a consultant deliverable and not a decision log. Its stated purpose is to separate "repeating" from "new" items.
- **Producer:** an AI-assistant planning session that read repo files in part. It writes in first person ("my International-Goal items", "the five content drafts I wrote") and refers to "Claude Code" in the third person. It is not a repo executor's log.
- **Date:** the header says "Produced 27 Nov 2026". Today is 26 Nov 2026. Its evidence cites "27 Nov" checks. It is dated after today, so either the date is wrong or it reflects a future state that our files cannot confirm. Several of our own files also carry 27 Nov entries, so the date problem sits partly in our handover too (see section 5).
- **Internal consistency:** weak. The sheet claims to have read INTERNATIONAL-PLAN.md's sources but does not list it. Its "genuinely new" verdicts for A1, A3b and A4 are contradicted by INTERNATIONAL-PLAN.md, which was built from the same external audit on 26 Nov. Its "FAQ 500/500 clean" claim repeats a count that pending.md later showed was false (256 entries, with live violations). Its "5 live posts" and "L/B planned" statements contradict website.md and INTERNATIONAL-PLAN section 4.
- **Probable root cause:** the sheet did not read INTERNATIONAL-PLAN.md, so it re-discovered items already accepted and planned on 26 Nov.

## 1. Counts

| Bucket | Count | Notes |
|---|---|---|
| A. Conflicts with FACTS.md / DO NOT PUBLISH | 3 | CQI-9, ARAI, 5 MW solar (all inside item A4) |
| B. Status stale | 19 | Mostly items shown open that closed 23–27 Nov, plus a few "done" claims that are wrong |
| C. Already captured | 11 | INTERNATIONAL-PLAN.md, pending.md, website.md or PHASE4 |
| D. New and valid | 3 | Items the sheet does not know about, plus one pending verification |
| E. Owner decision | 3 | Apollo/Lusha, the CSN abbreviation, and the hreflang hold |

Counts are per row; some rows fall into two buckets and are listed in both.

## 2. Bucket A: conflicts with FACTS.md

| # | Document claim | FACTS.md / DO NOT PUBLISH line | Action |
|---|---|---|---|
| A-1 | Section A4, "proof migration (CQI-9/ARAI/5MW/patent/AIFI)": a plan to migrate these as on-site proof points | Certifications [Y]: held list is IATF 16949, ISO 9001, ISO 45001, ISO 14001, PPAP L1-5, APQP, IMDS, RDSO. CQI-9 is absent. INTERNATIONAL-PLAN R4 rejects it and question (b) is open. | Do not publish. Owner question (b) stays open. |
| A-2 | Same item: ARAI | ARAI is not in FACTS. INTERNATIONAL-PLAN R5 rejects it; question (c). | Do not publish. Owner question (c) stays open. |
| A-3 | Same item: 5 MW solar (metered) | Sustainability [P]: 150 kW rooftop only. INTERNATIONAL-PLAN R10; question (a). | Do not publish 5 MW. Question (a) is open. |

Note on the patent item: the sheet does not name a patent subject, so it is not a conflict. FACTS.md DO NOT PUBLISH says the subject ("seven-groove torque rod") is unconfirmed. Any patent text must say only "design patent, 2011". Not counted as A.

## 3. Bucket B: status stale (sheet says open or wrong; our files say otherwise)

| # | Document claim | Current true status (evidence) |
|---|---|---|
| B-1 | A1 "Not in any plan file" (legacy mail. subdomain) | Accepted as INTERNATIONAL-PLAN A1, P1, owner DNS-Yash. Captured, see C-1. |
| B-2 | A3 "23 H1 on /automotive-steering-powertrain" as current | CLOSED: exactly 1 H1 (pending P17, reviewer PASS, VflWebsite 62adc58). |
| B-3 | A3 "4 H1 on /forging-presses-hammers" and "7 on /rubber-bonded" as current | Not found in website.md or pending.md. Unverified. Needs reviewer scrape (see D-3). |
| B-4 | "/forging ... 2 H1" in section B (deepen table) | CLOSED: P18, exactly 1 H1 (4fca538). |
| B-5 | "/quality 2 H1" | CLOSED: QS1, exactly 1 H1 (62adc58 / 4fca538). |
| B-6 | "Homepage H1→H6 heading fix, verified live 23 Nov (W8)" | The H1→H6 issue was re-found by the 26 Nov Sited run; fixed 26 Nov (plew4 retag), verified at /?nc=261126b. Date wrong, status done. |
| B-7 | "FAQ DB 500/500 clean" (pending P1–P5) | Wrong count and wrong status. The FAQ v2 set is 256 entries. Six violations existed and were fixed 26 Nov. Wave 2 then found ZLD and "PPAP Level 3" entries missed by the earlier scan. Re-audit of all 256 clean 26 Nov (W2-1). Use "256 entries, clean after 26 Nov re-audit". |
| B-8 | "Blog engine, 5 live posts (EN×2, EN-Europe, ES, DE)" | Stale. 25 blog posts live (INTERNATIONAL-PLAN section 4; website.md 27 Nov block). |
| B-9 | "Machine-count purge sitewide ... 0 DNP hits" | Partly wrong. /llms.txt carried machine counts, BMW and the 2013 Pune date until fixed 26 Nov (llms.txt DO NOT PUBLISH breach, via Wix Llms Txt API). Fixed; the sitewide claim was true only after that. |
| B-10 | "P4b legacy FAQ widget sentence (Yash 5-min edit)" as open | CLOSED 26 Nov via FAQ v2 API. Pending.md: "No Yash action needed". |
| B-11 | "P7 empty pages /product, /transmission-and-driveline, /electric-mobility (need Text element)" as open | DECIDED 26 Nov by Opus under owner delegation: /product kept; the other two get noindex via Velo SEO; 301 later once Yash deletes them. No Text element needed. |
| B-12 | "P8 visible dates/byline" as open | DONE 23 Nov, verified live on 3 pages. |
| B-13 | "P11 legacy-FAQ city strings", "P12 long titles", "P14 renamed SEO tags not rendering" as open | P11 CLOSED 26 Nov (6 FAQ items via API). P12 CLOSED 26 Nov (VflWebsite 9af45ca). P14 CLOSED 26 Nov (Velo seo-override.js, 10 pages). Only P13 remains open, with Yash. |
| B-14 | "P13 off-site/GBP/LinkedIn" listed as Claude-owned | Yash-owned (off-site paste; does a GBP exist, Yash to say). |
| B-15 | "L1–L8 landing pages, B1–B10 blog ... planned (GROWTH-RESEARCH)" | Mostly live: 25 posts live include L1, L2, L5–L8, B1–B10, C1–C4, plus L3, ES, DE and 2 older (INTERNATIONAL-PLAN section 4). L4 not confirmed in our files. |
| B-16 | "/machining deepen ... Live = 365 words, not individually built" | Probably stale. The W6 set of 10 deep pages includes a "machined" page at 781 words (website.md W6 line). Confirm which URL the sheet means before acting. UNVERIFIED mapping. |
| B-17 | "hreflang pairing for EN/ES/DE posts" presented as planned | INTERNATIONAL-PLAN A20 says HOLD until genuinely translated page sets exist (revisit day 90). Status conflicts with our plan; see E-3. |
| B-18 | "City rename ... steps 1–4 done, step 5 pending; Claude owns" | Rename is largely done (P11, P12, P14 closed 26 Nov). Step 5 is the browser-layer contact-page attributes and off-site strings, which pending P13 assigns to Yash. |
| B-19 | "Schema on all 49 pages ... crawl confirms FAQPage on all 49" | Partly unverified. website.md confirms schema on all 49 pages and FAQPage on 21 blog posts (27 Nov). FAQPage on all 49 pages is not supported by our files. UNVERIFIED. |

B-1 is listed here and again in C-1 (the same item, two findings). Row count in B: 19.

## 4. Bucket C: already captured (name where)

| # | Document item | Where it is already captured |
|---|---|---|
| C-1 | A1 legacy mail. subdomain | INTERNATIONAL-PLAN A1 (P1, DNS-Yash). Sheet says "not in any plan file": wrong. |
| C-2 | A2 nav rewire (hub-and-spoke, Product dropdown) | INTERNATIONAL-PLAN A7 (Velo "Related buyer guides" blocks live on 12 pages; nav change Editor-Yash, optional) and A8 (nav labels, Editor-Yash). Partly new in detail only. |
| C-3 | A3 heading defects, 0-H1 pages | INTERNATIONAL-PLAN A19 (heading hierarchy, remaining cases). Closed sub-cases in INTERNATIONAL-PLAN section 4 and pending QS1/P17/P18/CC. |
| C-4 | A3b duplicate-URL 301s: /tool-manufactring, /copy-of-articles, /copy-of-awards | INTERNATIONAL-PLAN A8 (Redirects API, delete then create). The sheet's extra clusters are in D-1. |
| C-5 | A4 proof items: CQI-9, ARAI, 5 MW, AIFI | Rejected R4, R5, R10 and owner questions (a), (b), (c) in INTERNATIONAL-PLAN. AIFI is already on file (leadership bio, FACTS). |
| C-6 | Directory profiles: IndiaMART, TradeIndia, Kompass, ThomasNet, GBP | INTERNATIONAL-PLAN A12, A13 (off-site-Yash, Wave 5); PHASE4 Sprint 2; website.md. |
| C-7 | Weight 1–25 kg, ±0.02 / ±0.5 mm, no machine counts, no CIN, closed-die only, EV steering/suspension only | FACTS.md capability ranges, products, DO NOT PUBLISH. Sheet marks these DECIDED: agreed. |
| C-8 | Machine-count purge / removal of banned weights and tolerances | INTERNATIONAL-PLAN R1–R3; pending P1–P5. |
| C-9 | Schema expansion (Person, Service, Product, BreadcrumbList, hasCredential) | INTERNATIONAL-PLAN A10 (seo-override generator and Wix SEO API). |
| C-10 | /llms.txt | INTERNATIONAL-PLAN A9; pending LLMS (done 26 Nov). |
| C-11 | Off-site Sprint-2 and LinkedIn batch 2 | pending.md LI, P13; content-drafts/linkedin-posts-batch2-DRAFT.md; PHASE4 Sprint 2. |

## 5. Bucket D: new and valid (candidate actions)

| # | Item | Why it is new and consistent with FACTS | Channel | Action and gate |
|---|---|---|---|---|
| D-1 | Duplicate-cluster consolidation beyond A8: /assembly vs /assembly-services; /about-1-1 vs /about-1 (plus the -1-1 tool-manufacturing variant); /heat-treatment vs /heat-treatment-metallurgy; a machined-components twin. The EV cluster is covered by P7 for /electric-mobility. | Not listed in INTERNATIONAL-PLAN A8. Consistent with FACTS. Slugs appear in website.md. | Wix Redirects API (delete then create, one writer); Velo noindex for the loser where a 301 is not wanted | Reviewer verifies each slug resolves and the duplicate pair before any 301. Gate: each retired slug returns 301 to its target. Slugs not yet verified live. |
| D-2 | Exact H1 audit of pages not yet checked: /rubber-bonded-components, /forging-presses-hammers, and any 0-H1 page in the 49 | INTERNATIONAL-PLAN A19 covers the category but names no pages. | Velo w6content (retag h1→h2; text rules) | Reviewer scrape of all 49 pages, DOM H1 count, not raw-string count (P16 lesson). Gate: exactly 1 H1 per page. |
| D-3 | Railway depth: /railway at 141 words, 0 H1 (sheet's crawl) | Consistent with FACTS (RDSO only). Sits under GROWTH-RESEARCH L2 (planned). | content-ops blog or Velo w6content, then reviewer | Verify live word count and H1 first. Keep the rewrite to FACTS (RDSO only, no EN/UIC/AAR, no 100% UT, no 30+ year life). |

## 6. Bucket E: owner decisions

| # | Item | Why it needs Yash | Note |
|---|---|---|---|
| E-1 | Apollo / Lusha "CLOSED — none until mid-2027" (sheet says owner ruled 27 Nov) | Spend over $50 per month needs explicit yes. Our files record a Claude recommendation "NOT NOW, re-evaluate Q1 2027" (pending.md, 26 Nov) and "needs his explicit approval" (website.md). No owner ruling is recorded in our files. | Confirm with Yash before treating as closed. The sheet's "mid-2027" differs from our "Q1 2027". |
| E-2 | City short form "CSN" (sheet: "City rename to CSN") | CSN is not in FACTS. FACTS says "Chhatrapati Sambhajinagar (Aurangabad)", short form "Chh. Sambhajinagar (Aurangabad)". Grep found no "CSN" in our files. | Not a claim. Do not use "CSN" on the site unless Yash approves it. Flag to Yash. |
| E-3 | hreflang pairing for EN/ES/DE posts (sheet: planned) | INTERNATIONAL-PLAN A20 says HOLD until genuinely translated page sets exist. Adding it now is a positioning and SEO decision. | Owner or Opus to decide; default is hold. |

Also owner-level and already logged (not new): P9 social icons (Yash, Editor), P13 off-site strings (Yash), P10 CSP Enterprise upgrade cost (Yash), RDSO approval reference (Yash, optional).

## 7. Items verified as consistent with FACTS (no action)

- Weights 1–25 kg; tolerances ±0.5 mm forging, ±0.02 mm machining; no machine counts; no CIN; hot closed-die only; EV steering and suspension only; "Under Promise, Over Delivery" removed (/quality).
- AIFI presidency and the 2011 design patent (as "design patent, 2011") are on file.
- Pune founded 2007; Aurangabad founded 1989 (sheet does not state a conflicting year).
- No 1988 founding, no 2013 Pune founding, no stainless, no aerospace, no EN/UIC/AAR, no 100% UT, no axle-load or 30+ year claims in the sheet itself.

## 8. Watch-list check (recurring false claims)

Scanned the sheet for each banned item. Matches found only as bucket A (CQI-9, ARAI, 5 MW). No 0.5–50 kg, 2–20 kg, 0.5–20 kg, CNC/VMC/HMC count, ±0.01 mm, PED, AD 2000, EN/UIC/AAR, 100% UT, 32 MT, 30+ year, CIN, MCA number, 1988, Pune 2013, BMW, KTM, Corvette, stainless, aerospace, warm/cold/open-die, "35 years", TS-16949 as current, Chinese-supplier negatives, or numeric MOQ/freight/lead-time figures appear in the sheet as claims. The sheet does mention "Apollo/Lusha" and "15+ export markets"-type items only via the audit it cites (not present in the sheet itself).

## 9. Notes for the main session

- Date conflict: the sheet says 27 Nov; today is 26 Nov. Several website.md and pending.md entries are also dated 27 Nov. Confirm the actual date before trusting any "27 Nov" evidence line, in the sheet or in our handover.
- The sheet's author did not read INTERNATIONAL-PLAN.md. Use INTERNATIONAL-PLAN.md as the authority for audit-item status.
- Nothing in the sheet is a build instruction. None of its items should be executed until it is reconciled with INTERNATIONAL-PLAN.md and pending.md.
- Not verified live in this review: D-1 slugs, D-2 H1 counts, D-3 word count, B-16 mapping, B-19 FAQPage on all 49. Reviewer scrape (Firecrawl maxAge 0) needed before any of these become tasks.
- Memory: no memory content was used in this review.
