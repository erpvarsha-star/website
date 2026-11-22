# Varsha Forgings GEO/SEO — Master Plan
**Created:** 2026-11-22 · Supersedes ad-hoc execution. This is the Blueprint Session deliverable: Logic, Data, Process, Phases, and the multi-agent execution model. `website.md` remains the dated action log; this file is the standing plan.

---

## 1. Objective

Make Varsha Forgings the most cited, most trusted answer when AI engines (ChatGPT, Gemini, Perplexity, Copilot, Google AI Overviews) and human search are asked who supplies closed-die forgings, precision machining and assembly from India — and capture the enquiries that follow.

## 2. Data Sources Consolidated (so no finding is lost or duplicated)

| Source | What it contributed |
|---|---|
| `VarshaForgings_MASTER_LOG_22NOV2026.md` | Site facts, roles, prior work history, original pending list |
| `GEO_Consultant_Plan_Review_22NOV2026.md` | 9-page build plan reviewed, facts held pending confirmation |
| `PrecisionForgingCost_Page_Draft_22NOV2026.md` | Content for the one genuinely new page — published as a blog post |
| `Certifications_Page_Draft_22NOV2026.md` | Final certifications copy — body-paste still pending |
| Varsha's own company presentation (PPTX) | Source-verified founding year (1989), 2011 patent, 2014/2025 awards — corrected consultant's wrong dates |
| Live site audit (this session) | Phone number correction, existing schema inventory on 5+ pages |
| Sited AI Visibility Report (22 Nov 2026) | GEO Readiness Score 81/100, 8 numbered findings, full fix list |

## 3. Master Findings Register

Every open item, from every source, in one table. This is the single backlog — nothing gets worked outside of it.

| ID | Finding | Source | Impact | Fix type | Owner | Status |
|---|---|---|---|---|---|---|
| F1 | No `sameAs` links on homepage Organization schema | Sited #1 | High (30 pts) | API, once URLs supplied | Claude + **Yash input** | Blocked |
| F2 | 7 pages under 500 words | Sited #2 | Medium (17 pts) | Draft copy (Claude) → paste (Yash) | Claude draft, Yash paste | **Phase 2 — starting now** |
| F3 | 4 pages lacked Organization/Service schema | Sited #3 | Medium (20 pts) | API | Claude | ✅ Done |
| F4 | No publication dates, 3 pages | Sited #4 | Medium (10 pts) | Schema: API. Visible: Editor | Claude (schema) / Yash (visible) | Schema ✅ / Visible pending |
| F5 | Homepage title omits brand name | Sited #5 | Medium (10 pts) | API | Claude | ✅ Done |
| F6 | No author byline, `/assembly-services` | Sited #6 | Low (5 pts) | Schema: API. Visible: Editor | Claude (schema) / Yash (visible) | Schema ✅ / Visible pending |
| F7 | Missing content-security-policy header | Sited #7 | Low (5 pts) | Server/CDN config | **Not owner-adjustable on Wix Classic — needs Wix support confirmation** | Blocked, low priority |
| F8 | No H1/2+ H2 on `/product`, `/electric-vehicles` | Sited #8 | Low (3 pts) | Editor (page layout) | Yash | Pending |
| F9 | og:image missing site-wide sweep | Sited (common problem) | Low | API | Claude | ✅ Done (10/10 crawled pages) |
| F10 | Social icons link to Wix's own FB/IG, not Varsha's | Found this session, not in report | Not scored, real bug | Editor | Yash | Pending |
| F11 | CIN number for Organization schema | Master Log #3 | Blocks sitewide Organization schema | Data only | **Yash input** | Blocked |
| F12 | Editor-only typos/fixes (certifications body paste, footer email typo, 2 body typos, Awards publish+nav) | Master Log #5 | — | Editor | Yash | Pending |
| F13 | GBP ownership conflict + Windsor.ai connection | Master Log #8/9 | — | External account action | Yash | Pending |
| F14 | Dynamic CMS Page Template (permanent fix for page-creation bottleneck) | Agreed this session | — | One Editor session, then API forever | Yash (one-time) + Claude | Not scheduled |
| F15 | Off-site brand presence (LinkedIn, Wikidata, directories) | Sited Strategic Initiatives | Caps Brand Authority at 80 until done | Account creation + verification | Yash | Not started |
| F16 | Topical authority content calendar | Sited Strategic Initiatives | Ongoing | Content | Claude draft, Yash paste | Not started |
| F17 | AI-visibility ongoing tracking tool | This session's decision | — | Subscription | Yash signs up | Not started — tool TBD (Rankscale/visibility.ai pending your call) |

## 4. Process Flow (how a finding moves through the system)

```
Identify (audit/report/consultant) 
   → Verify against live site / source documents (never invent facts)
   → Classify: API-fixable | Draft-then-paste | Editor-only | Blocked-on-input | Not-actionable
   → Route:
       API-fixable        → Claude executes directly, logs in website.md
       Draft-then-paste   → Claude drafts (fork agent) → user reviews → Yash pastes → Claude sets SEO/schema after
       Editor-only        → Claude writes exact click-path instructions → Yash executes → Claude verifies live
       Blocked-on-input   → Claude asks once, states exactly what's needed, parks until answered
       Not-actionable     → Claude states why, removes from active work, revisits only if conditions change
   → Verify live (re-fetch, re-audit where possible)
   → Log in website.md with date + outcome
```

## 5. Implementation Phases

| Phase | Scope | Status |
|---|---|---|
| **Phase 0** | Precision-forging-cost blog post, consultant-plan fold-in (5 pages), homepage og:image + FAQ, Sited Quick Wins (F3, F4-schema, F5, F6-schema, F9) | ✅ Complete |
| **Phase 1** | Draft expanded copy for the 7 thin pages (F2) | **→ Launching now, as parallel agents, below** |
| **Phase 2** | Yash executes the consolidated Editor click-list: paste Phase 1 copy, fix H1/H2 on 2 pages (F8), add visible dates/byline (F4/F6), fix social icon links (F10), certifications/typo cleanup (F12) | Blocked on Phase 1 output + Yash availability |
| **Phase 3** | Input-blocked items: sameAs URLs (F1), CIN (F11), AI-visibility tool choice (F17) | **Waiting on you** |
| **Phase 4** | Strategic: off-site presence build-out (F15), topical content calendar (F16), Dynamic CMS Page Template (F14) | Not started — scheduled after Phase 2/3 close |

## 6. Multi-Agent Execution Plan

Why split now: drafting 7 independent page-content pieces is parallelizable and doesn't touch the live site (no write conflicts), unlike the API work which must stay sequential in this session to avoid concurrent-write races on the same Wix site.

| Agent | Task | Mode |
|---|---|---|
| **Fork A** | Draft 500+ word, fact-grounded copy for `/electric-vehicles`, `/about-1`, `/contact-us-1` (the 3 thinnest pages) | Background fork, inherits full session context and verified facts |
| **Fork B** | Draft 500+ word copy for `/about-1-1`, `/tool-manufactring`, `/product`, plus the homepage expansion | Background fork, same constraints |
| **Main session** | Stays free for Wix API work, your questions, and Phase 3 input as it arrives — does not draft content itself, to avoid duplicating Fork A/B's work | Foreground |

Both forks are told explicitly: use only facts already verified in this conversation and the source documents (company presentation, confirmed OEM/export/award facts, live schema already on the site) — never invent customer names, numbers, or claims. Output: ready-to-paste Markdown per page, same format as the existing `PrecisionForgingCost_Page_Draft` file.
