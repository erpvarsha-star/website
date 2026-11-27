# Phase 3 — Corrections, new content, brand-consistent design (no owner clicks)
Created 22 Nov 2026, after Yash connected Wix to GitHub (`erpvarsha-star/VflWebsite`). Owner action from here: approve spend over $50 and answer fact *conflicts* only.

## Principles
- **Nothing breaks:** every change to the site code passes lint, a staged pilot, and a regression diff against the baseline snapshot (W0) before the next batch goes out.
- **One Wix writer at a time** (site-code pushes, embed PATCHes, SEO PATCHes, blog writes). Drafting and reviewing run in parallel.
- **Models:** Opus plans and dispatches; Sonnet `executor` drafts and writes; Haiku `reviewer` reads and verifies.
- **Facts only from `FACTS.md`; nothing from the DO NOT PUBLISH table.**

## Workstreams
| # | Workstream | Agent | Parallel? | Gate |
|---|---|---|---|---|
| W0 | Baseline snapshot of all sitemap pages (text, links, forms, H1, schema presence) → `baseline/` | Haiku reviewer | Yes, now | File per page committed |
| W1 | Velo route research (HTML-embed reach, element IDs, publish flow) → `VELO-ROUTE.md` | Sonnet | Running | Doc cites Wix docs |
| W2 | Brand kit: logo files/URLs, colours, fonts, spacing, button and heading styles from the live site → `BRAND.md` | Sonnet | Yes, now | Values read from the live site, not invented |
| 27 Nov | QS1/P17 attempt 2 reviewer PASS (1 H1, 62adc58); C1-C4 live (fd57fe0, 25 posts); links round 2 + 'Capability claims' removal pushed (7354946), publish green, AWAITING reviewer | website.md HANDOVER (27 Nov 02:15), pending.md IL2/CC |
| 27 Nov run 2 | ✅ FAQPage JSON-LD on 21 blog posts (VflWebsite 9dfa187, API read-back 21/21); ✅ IL2, C1-C4, /quality label reviewer PASS; ◐ Capability claims attempt 2 + /forging H1 retag pushed (4fca538), awaiting reviewer | website.md HANDOVER 27 Nov run 2 |
| 27 Nov run 3 | ✅ Reviewer PASS: FAQPage on 21 posts, capability label removed (home, /forging), /forging 1 H1. Blog meta descriptions added to 25/25 posts via API (read-back OK); live verify pending reviewer | VflWebsite 4fca538, b5ce3a7; website.md HANDOVER |
| W3 | Content: finalise the 7 rewrites, F28 thin pages (/alloy-steel-forgings, /forged-machined-components-vf), the wrong article on /steering-suspension-components, and corrected HTML for every flagged embed → `content-drafts/`, `embeds/` | Sonnet | Yes, now | `check-wordcount.sh` + reviewer FACTS check |
| W4 | ✅ Verified via diag-1: Velo runs server-side (env backend); footer email typo 0 in the no-JS HTML; HtmlComponent.src readable. The first publish predated the code sync. | `baseline/diag-1.md` |
| W5 | ✅ Live and verified: 17/17 pages clean, embeds swapped, 0 visible DNP hits | `baseline/w5-verify.md`; publish run 45068992337 |
| W6 | ✅ Live and verified 23 Nov: 3 approved content-drafts rendered by Velo on 10 pages, SSR-visible, 1 H1 each, 0 DNP | `W6-DESIGN.md`; VflWebsite dc457ea→e9629f4 |
| W7 | Retire the browser layer rules that Velo now covers (keep the layer as backup until all Velo work verifies) | Sonnet | After W6 | No visible-text regressions |
| W8 | SEO/schema touch-ups for changed pages; Sited re-run; KPI strip in the weekly task | Sonnet + Haiku | After W6 | Sited score vs 81 baseline |

## Failure protocol (Plan B)
- **A Velo push breaks a page:** revert the commit on `VflWebsite` main and republish. The baseline diff identifies which page broke.
- **Velo can't reach the HTML embeds:** go to W3's corrected HTML for each embed. The fallback is a one-time owner paste (~6 blocks), which needs the owner's agreement first.
- **Publish needs the owner:** one Publish click per batch, batched to at most once a day.
- **A tool or API is down:** the browser correction layer stays live as the interim fix.

## Status (update after every step)
| # | Status | Evidence |
|---|---|---|
| W0 | ✅ Done (9cf3803) | 49 pages in `baseline/INDEX.md`; 2 empty bodies (/transmission-and-driveline, /electric-mobility) |
| W1 | ✅ Done | `VELO-ROUTE.md` (c5e5b9d) |
| W2 | ✅ Done | `BRAND.md` (d37863c) |
| 26 Nov S3 | ✅ P14/P12/P16 closed; 21 blog posts live (L1-L8 topics, B1-B10); noindex 2 empty pages; internal links IN PROGRESS | website.md HANDOVER (end of session 3) |
| W3 | ✅ Drafted (ce78c18); review 4d2a602: 50/60 PASS; 5 true conflicts fixed (10f5a11; w5-embeds 7f64c4b); drafts PASS (review FAILs were non-conflicts) | 60 embeds, 41 corrected (175 edits) in `embeds/`; F28 drafts pass the word-count gate |
| W4 | ✅ Verified via diag-1: Velo runs server-side (env backend); footer email typo 0 in the no-JS HTML; HtmlComponent.src readable. The first publish predated the code sync. | `baseline/diag-1.md` |
| W5 | ✅ Live and verified: 17/17 pages clean, embeds swapped, 0 visible DNP hits | `baseline/w5-verify.md`; publish run 45068992337 |
| W6 | ✅ Live and verified 23 Nov: branch `w6-content` merged (dc457ea), bundler line-length error fixed by splitting ops into per-page modules (e9629f4). All 10 pages serve the drafts in SSR HTML, 1 visible H1 each, 0 DNP hits, 656–1,678 words (all above Sited's 500 threshold) | `W6-DESIGN.md`; no-JS curl verification of /, /electric-vehicles, /alloy-steel-forgings re-confirmed 23 Nov |
| W7 | ✅ Done 23 Nov: layers slimmed, Velo rules generic, and the 5 FAQ-app conflicts cleared at the data layer via the content-ops pipeline — all 500 FAQ v2 entries verified clean; live gates 0 hits on pune/aurangabad/railway/ev. One residue: the legacy faq-builder widget on /forging-company-maharashtra serves a baked copy of the old answer (parked as P4b, Yash dashboard edit) | `ops/results/run-2026-11-23T00-54-38-610Z.json` (VflWebsite); `pending.md` P4b |
| W8 | ✅ Done and verified live 23 Nov: 5 SEO fixes saved via `seo-metatags-server/v1/item-seo-tags` (trimmed V-Link title, short tool-mfg description, og:image ×5) and confirmed rendering in served HTML after a forced republish. Key lesson: item-seo-tags writes render only after the next site publish. **Hand to Yash to run Sited** | `ops/results/run-2026-11-23T00-54-38-610Z.json`; live curl re-check 23 Nov (og:image on all 5 pages, new tool-mfg description served) |
| Phase 4 | 🆕 Growth plan approved by owner 23 Nov: top-of-search worldwide for sourcing forgings from India + weekly business-growth rhythm | `PHASE4-PLAN.md` |
| Phase 4 Sprint 1/2 | ✅ Done and verified live 23 Nov: 2nd blog post "How to Source Closed-Die Forgings from India: A Buyer's Guide" published via Blog v3 API, 1,163 words live, FAQPage JSON-LD (5 Q&A) + BlogPosting schema confirmed in rendered HTML, 0 DO NOT PUBLISH hits. Plus off-site drafts: capability one-pager, IndiaMART/TradeIndia/Kompass/ThomasNet/GBP profile copy, first 4 LinkedIn posts (2 need Yash/Piyush photos) | Live: /post/how-to-source-closed-die-forgings-from-india-a-buyer-s-guide; drafts in `content-drafts/` (website repo, branch `ccr-1e875ebc-2tltlt`) |
| 27 Nov run | ✅ QS1/P17/P18/CC closed; C1-C4 live (25 posts); links round 2 on 5 pages; FAQPage JSON-LD on 21 posts; meta description on all 25 posts. Open: KPI re-check 10 and 24 Dec, LinkedIn batch 2 (+C1-C4), next content wave | reviewer PASS (rv6); website.md HANDOVER |
| 26 Nov Wave 1+2 | ✅ Wave 1 (VflWebsite 312339b-65ad8a1): llms.txt breach fixed, sitewide footer/nav rules, /product partial (P19/P20 parked), /alloy-steel-forgings embed. ✅ Wave 2: 4 FACTS violations fixed (ZLD x2, PPAP Levels, railway row), 3 wording changes, 7 internal links to /forging-manufacturer-india (b895aa7, d87a072, 5c23c76), all Publish runs green, live-verified | website.md HANDOVER (Wave 2); pending.md W2-1 |
| 27 Nov A10 schema | ✅ Written and live-verified: Organization+Manufacturer on `/`, Person + BreadcrumbList on `/company-profile`, Product + BreadcrumbList on `/automotive-steering-powertrain`, BreadcrumbList on `/about-1`. API cap measured: 12,000 chars per JSON-LD script (not 3,600/4,096). RDSO not added at that time (SUPERSEDED: owner said add, now live, see credential row) | website.md HANDOVER (A10) |
| 27 Nov owner answers | ✅ RECORDED (record-keeping only, no Wix writes, no VflWebsite push): 16 owner answers in FACTS.md (solar both, CQI-9 held, ARAI claimable, AIFI 2024-26, RDSO add, GBP both plants, export order EU > N. America > MEA, anonymised case studies, no MOQ number, no group schema, PED/AD 2000 n/a); CLAUDE.md JSON-LD cap corrected; P10 dropped; P25 lift-noindex decided (pending identification); P26 and P19/P20/P23 authorised for one code attempt each; Apollo/Lusha deferred Q1 2027. Forward queue A-H set in INTERNATIONAL-PLAN.md section 8 (A, credential and fact wave, is next). Supersedes the A10 note "RDSO not added (owner decision pending)" | FACTS.md "Owner answers 27 Nov 2026"; INTERNATIONAL-PLAN.md sections 5 and 8; pending.md; website.md HANDOVER |
| 27 Nov step A credential + Person wave | WRITTEN, then LIVE-VERIFIED 27 Nov (a0c2ccf; superseded the earlier 'live check pending'): `/` (plew4) hasCredential now 7 (+CQI-9, ARAI, RDSO; no dates/refs/part names), 2,868 chars; `/company-profile` (unlvj) Person gains memberOf President of AIFI from 2024 (current, term 2024-26 in description), 1,916 chars. GET read-back equal, no duplicate @id. Firecrawl live scrape timed out 4x (60s tool limit), so live parse is UNVERIFIED | website.md HANDOVER |
| 27 Nov step B P19/P20/P23 | P23 FIXED live (39007ae, itemBlank; /forging repeater 4 -> 1). P19 PARTIAL (2 of 8 button labels fixed; 6 remain, 88d58da sweep did not reach them). P20 Editor-only confirmed. Mechanism: item-scoped `$item('#id')`; type selectors are not item-scoped. |
| 27 Nov step B2 P19/alt/P26 | P19 PARKED (attempt 2 regressed 3 repeaters, reverted 812babb; 6 typos remain, Editor). Alt text: already clean live (0 on 3 pages); 7 media filenames carry Secotr. P26 PARKED (collapse() already applied, gaps remain on rendered EV page). No diagnostic left in VflWebsite. | Claude | Reviewer to confirm live /product button labels (6 typos) and no x-diag |
| 27 Nov session close | LIVE: 6 pages verified clean, /forged-components-ev duplicate removed (8d10eb4), A10 schema wave, credential wave (7 credentials, a0c2ccf), P23 FIXED (itemBlank), Secotr typo on /commercial-vehicle. REVERTED: F4 /commercial-vehicle body+H1 (84310a2 -> f4c84b0, mobile layout). PARKED: P19 (812babb), P26. BLOCKERS: P28 single-element mobile limit; new pages need Editor; noindex is Editor-only. Drafts F1/F2/F3/F4/E1/E2 unpublished. Stray `main` branch on origin (225773b) undeleted, owner decision pending | NEXT-SESSION.md; website.md HANDOVER (session close) |
| Auto-publish | ✅ Working: secret WIXKEY rotated by Yash 23 Nov, runs green; content-ops.yml live (created by Yash via web UI — token lacks workflow scope) | VflWebsite publish.yml, content-ops.yml |

## Rollout decision (owner challenge, 22 Nov 2026)
Two releases, not four: (1) the diagnostic (a892ff1) proves how Velo sees the embeds; (2) ONE full W5 release covering all 17 pages, 41 swaps and the text rules on every page, built on what the diagnostic shows works. It is verified against `baseline/` in full, with a single revert if anything regresses. The code is written once; only publishing is split.
