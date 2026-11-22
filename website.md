# Varsha Forgings — GEO/AI-Visibility Fix Log
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
