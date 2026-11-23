# Handover addendum — 23 Nov 2026 (late): German page LIVE + new Sited baseline 83/100

## New Sited scorecard (Yash ran Sited, 23 Nov 2026)
- **Score: 83/100 — Status: Strong** (up 13 points since 22 Nov 2026; higher than 83% of 349 audited sites). **This replaces 81/100 as the working baseline.**
- Breakdown: Content clarity 13/15 · Brand & entity signals 15/15 · Structured data 14/15 · AI crawler access 15/15 · Technical discoverability 10/10 · Citation readiness 13/15 · **First-party evidence 3/5 (the gap to close — needs off-site profiles, reviews, case-study proof points; Sprint-2 profiles work directly feeds this)**.
- Live AI check (OpenAI web search, 23 Nov): Varsha Forgings **was named** when asked "Who provides closed-die forgings, precision machining and assembly in India?" Also recommended: SK Forgings, Ramkrishna Forgings Limited, Valveworks Forge — these are the AI-answer competitors to displace.
- Only on-page issue found: heading order skipped H1 → H6 on the homepage. **Fixed same-day (below).**

## German buyer's-guide page — LIVE
- Yash confirmed the German draft passed review ("reviewed german and good to go").
- Published via the content-ops payload channel (commit 1df641c on VflWebsite main; run `run-2026-11-23T06-31-51-197Z.json`, status PUBLISHED_BARE_200_VERIFY_BY_CURL).
- **Live URL:** https://www.varshaforgings.com/post/stanzschmiedeteile-aus-indien-beziehen-der-leitfaden-f%C3%BCr-eink%C3%A4ufer (HTTP 200, verified).
- Verified with headless-chromium render: full German body present (Gesenkschmiede ×4, EN 10204 ×4, IATF ×4, RDSO ×1, JNPT ×1); 0 banned terms in content (the only "CIN/spacing" hits are inside platform JS/CSS, not copy).
- Blog now holds exactly **5 posts**: EN cost, EN buyer's guide, EN Europe (L3), ES guide, DE guide.
- `content-drafts/DE-buyers-guide-DRAFT.md` status updated to LIVE.

## Heading-order fix (Sited's only flagged issue) — LIVE
- Root cause: Wix template used `<h6>` purely for styling. Footer nav + header contact items were h6 (not headings at all), and 4 real homepage section headings ("A Leader in Precision Forging and Machining", "Delivering Excellence Since 1989", "Our Product Line", "Making a Positive Impact") were also h6.
- Fix (Velo, SSR-effective, visual look unchanged — inline styles carry the styling):
  - `src/pages/masterPage.js` (commit 8591bfc): every header/footer Text element — h6 → p (also merged into the existing email-typo rewrite loop).
  - `src/pages/Company.plew4.js` (commit ada6f1b): the 4 homepage section elements (#comp-m21u3f5x, #comp-m21u3fxd, #comp-m1bxp6p6, #comp-m195gvsa) — h6 → h2.
- Verified live after auto-publish: served homepage HTML now contains **only h1 (×1) and h2 (×10) — zero h3–h6 tags, no skipped levels** on any level.
- Note: the same footer h6→p fix applies site-wide (footer is on masterPage), so every page's heading order improved, not just the homepage.

## Updated KPI baseline table (for PHASE4-PLAN.md tracking)
| Metric | 22 Nov | 23 Nov |
|---|---|---|
| Sited GEO score | 81/100 | **83/100 (Strong)** |
| AI names Varsha for "closed-die forgings India" | 0% prompt visibility | **Named in live ChatGPT check** |
| On-page issues open | several | **1 → 0 (heading order fixed)** |

## Next session starts from
`NEXT-SESSION.md` remains the master start note. Additions from this entry:
1. L1 /tie-rod-end-forgings and L2 /railway-forgings-rdso static landing pages (Editor batch with Yash, or Velo if Text elements exist).
2. First-party evidence 3/5 is now the biggest scored gap: Sprint-2 off-site profiles + case-study/proof content directly target it.
3. hreflang pairing between EN/ES/DE posts is still open — needed now that three language versions are live (Blog API SEO fields per post, or accept Wix defaults and monitor).
4. Next Sited run should confirm the heading fix and (hopefully) reflect the new pages.
