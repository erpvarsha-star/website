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

Group B (`/about-1-1`, `/tool-manufactring`, `/product`, homepage) is still running.

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

