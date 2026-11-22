# Varsha Forgings — GEO/AI-Visibility Fix Log

> ## HANDOVER — live status (updated 22 Nov 2026, ~20:30 UTC). Read this first.
> Kept current after every step. Plan and status per workstream: `PHASE3-PLAN.md`.
>
> **Done and verified**
> - SEO tags and JSON-LD on all 49 pages match FACTS.md. sameAs, Article schema, og:image, homepage FAQ and title are in place. Plant hours in schema are verified on Pune and Aurangabad.
> - Redirects (F27) and the email-link typo (browser layer) are done.
> - Browser correction layer (slimmed in W7): embed 1 rev 6, embed 2 rev 7. DOM-only rules (alt, mailto, Year Established, row hiding, dnp stopgap). Text rules now live in Velo. OPEN: 2 Wix FAQ-app answers (Pune machine counts, Aurangabad 0.5-50 kg) sit outside Velo; fix via FAQ API.
> - Facts: all owner answers are recorded in FACTS.md. The rule is to ask Yash only on conflicts.
> - Wix ↔ GitHub connected: `erpvarsha-star/VflWebsite`, main.
> - W0 baseline done (9cf3803): 49 pages. Empty bodies: /transmission-and-driveline, /electric-mobility. Machine counts are in NATIVE text on 5 pages (india, pune, maharashtra, suspension, railways); W5 adds a Velo text-rules module for every page. Multiple H1s on /automotive-steering-powertrain (25), /forging-company-aurangabad (8) and /about-1-1 (6), queued for W6.
> - Research done: `VELO-ROUTE.md`. Brand kit: `BRAND.md`. No-JS crawler checker: `.github/workflows/ssr-check.yml`; baseline in `baseline/ssr-before.md`.
>
> **In progress**
> - **W5 full release is on VflWebsite main (be4d7bc), WAITING FOR PUBLISH** (Editor click; auto-publish secret still empty). Then: ssr-check + Firecrawl on all 17 pages vs baseline/. Rollback: main → bf6ed6c, then publish.
> - **W4 pilot is pushed to VflWebsite (`4ed2cab`) and is WAITING FOR YASH TO PUBLISH.** It covers the footer email fix (masterPage.js) and collapsing the 2 Pune machine-count embeds. After Publish: re-run ssr-check, Firecrawl the live pages, and diff against `baseline/`.
> - W3 drafted (ce78c18): 60 embeds on 17 pages, 41 corrected with 175 edits. F28 drafts and the re-checked drafts pass the gate. The Haiku review is running (`embeds/REVIEW.md`). Claims that don't conflict are kept as [L], with no owner questions.
> - W5 prepped on VflWebsite branch `w5-embeds` (9757629, lint clean, not merged). It contains http-functions serving the 38 corrected embeds, src swaps on 17 pages, and `applyTextCorrections` in all 56 page files. Rollout per `W5-DEPLOY.md`: one embed (vf LFull) plus Pune first. Untested risks: the src setter on code-mode embeds, frame headers on /_functions, iframe height, html reflow, SSR.
>
> **Next, in order**
> 1. Verify the W4 pilot.
> 2. W5: Velo corrections. Pune "CNC Turning Centers" still appears 4× in the no-JS HTML (outside the embeds). Then use the `src` swap to corrected embed HTML (host: Velo http-functions).
> 3. W6: new page content in the BRAND.md style.
> 4. W7: retire the browser-layer rules that Velo covers.
> 5. W8: SEO for changed pages, then re-run Sited.
> 6. Auto-publish: Yash will set it up (`SETUP-AUTO-PUBLISH.md`). Then add the publish workflow to VflWebsite.
> 7. Later: social icons (F10), privacy/terms (F22), CWV/IndexNow (F23), case studies (F19), capability sheet (F20), off-site profiles (F15). Open SEO items: dpizt legalName (at size cap) and leftover superlatives on a3evt, q1c5f, gfauz, odejn.
>
> **Owner rules in force:** ask only on conflicts, one multiple-choice question at a time. Opus plans, Sonnet executes, Haiku reviews. No CIN. No machine counts. No new sign-ups. Spend over $50 needs Yash's yes. One Wix writer at a time. Yash clicks Publish until auto-publish is set up. Weekly task: Monday 8:13 IST (`trig_01CcK6WNr29MzcPgQbkWaW9S`).

**Source:** Sited AI Visibility Report, analysed 2026-11-22 · GEO Readiness Score 81/100 at time of report
**Scope:** 10 crawled pages — homepage, /contact-us-1, /about-1, /assembly-services, /about-1-1, /product, /forging-company-aurangabad, /company-profile, /electric-vehicles, /tool-manufactring

This file is the single working log for this fix cycle. Every action taken is logged here with date, method (API vs Editor), and status. Read this before resuming work on the Sited findings in a future session.

---

## Prioritised Plan (from the report, in order)

| # | Finding | Impact | Fixable by | Status |
|---|---|---|---|---|
| 1 | No `sameAs` links on homepage Organization schema | High (30 pts) | Claude, API — **needs real profile URLs from Yash first** | ⏳ Blocked on input |
| 2 | 7 of 10 pages under 500 words | Medium (17 pts) | Editor (Yash pastes expanded copy) — Claude can draft the copy | ⏳ Drafting |
| 3 | 4 pages carry no structured data (`/about-1-1`, `/product`, `/electric-vehicles`, `/tool-manufactring`) | Medium (20 pts) | Claude, API | ✅ Done |
| 4 | No publication dates on 3 substantial pages | Medium (10 pts) | Schema-level: Claude, API. Visible on-page date: Editor (Yash) | ✅ Schema done / ⏳ visible date pending |
| 5 | Homepage title omits brand name | Medium (10 pts) | Claude, API | ✅ Done |
| 6 | No author byline on `/assembly-services` | Low (5 pts) | Schema-level: Claude, API. Visible byline: Editor (Yash) | ✅ Schema done / ⏳ visible byline pending |
| 7 | Missing `content-security-policy` header | Low (5 pts) | Wix-controlled on Classic Editor sites — likely not site-owner-adjustable | ⏳ Needs confirmation from Wix support |
| 8 | 2 pages (`/product`, `/electric-vehicles`) lack H1/H2 structure | Low (3 pts) | Editor only (page layout) | ⏳ Pending Yash |
| — | og:image missing on pages that lack one | Low | Claude, API | ✅ Homepage done this session; sweeping other 9 crawled pages now |
| — | Social icons on homepage link to Wix's own Facebook/Instagram, not Varsha's | Not scored, but a real bug | Editor only | ⏳ Flagged for Yash |

---

## Action Log

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
