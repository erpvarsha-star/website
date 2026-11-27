# Audit Fix Plan: Ahrefs Site Audit + AI Prompt Visibility (27 Nov 2026)

**Status: PLAN ONLY. Nothing executes until Yash says GO.**
**Inputs:** (1) Ahrefs Site Audit "All issues", 27 Nov 2026, compared with 20 Nov: 32 open issue types, 17 new. (2) AI-visibility prompt scan CSV, 27 Nov 2026: 10 buyer prompts.
**Goal (owner, 27 Nov):** every item ticked off *for good*, with nothing coming back on the next audit, so the site is strong and stable.

---

## 1. What "done for good" means (the exit test)

The plan is finished only when all five hold:

| # | Exit condition | Measured by |
|---|---|---|
| E1 | **0 Errors** in Ahrefs (orphan page, noindex page in sitemap, 3XX redirect in sitemap) on **2 consecutive weekly crawls** | Ahrefs Site Audit |
| E2 | **0 Warnings**, except items formally logged in `ACCEPTED-EXCEPTIONS.md` with a reason (e.g., a Wix platform floor). Every exception is also switched off in Ahrefs so it stops showing as "open" | Ahrefs + register |
| E3 | Our own **site-health check is green after every publish and every Monday for 4 weeks in a row** | GitHub Actions `site-health` results |
| E4 | Every Ahrefs "changed" notice maps to a change logged in `website.md` (no unexplained drift) | Reconciliation step in the weekly run |
| E5 | Prompt visibility: **≥4 of 10 prompts above 0% by week 4; average ≥20% by week 8** (PHASE4 target) | Prompt scan CSV re-run |

---

## 2. Honest review of my first answer

The first answer covered the important items but was **not complete**. Gaps it had:
- It skipped 7 Ahrefs rows: HTTP→HTTPS redirect, 3XX redirect pages, page/SERP title mismatch, the 3 "not indexable" content rows (meta too long 19, H1 missing 2, title too long 1), and the 4 "changed" notices (it called them "no action"; they now get a reconciliation check, see E4).
- It treated "Page in multiple sitemaps" and "Category page missing ItemList" only in passing.
- It did not use the CSV's competitor and citation numbers to prioritise. Prompts #10, #7 and #8 have the fewest competitors, which makes them the quickest wins.
- **Most important: it had no mechanism to stop the same gaps coming back.** That's section 3 below.
- It missed one stability risk: the legacy FAQ widget's API shuts down on **31 Dec 2026** (from `pending.md` P4b), and that widget is a likely source of the rich-result errors.

---

## 3. Why gaps keep coming back (root causes) and the permanent fix for each

| # | Root cause | Evidence | Permanent guardrail |
|---|---|---|---|
| R1 | **No single source of truth for SEO tags.** Tags are written one page at a time across sessions, and the Wix API PATCH *replaces the full tag list*, so a missed field is silently dropped | P14 (renamed tags not rendering); 62 pages with incomplete OG; 2 pages newly noindex | **G1 SEO manifest:** one file (`seo/manifest.json` in VflWebsite) holding every URL's title, description, full OG set, robots, canonical and JSON-LD. content-ops applies **only** from the manifest and always sends the complete set |
| R2 | **No validation before a write.** Lengths, OG completeness, robots and schema validity are checked by eye | 35+19 long metas, 25+1 long titles, 24 schema.org errors | **G2 lint in CI:** `ops/lint-seo.js` blocks any merge to main if a title is over 60 characters, a description falls outside 120–155, OG is incomplete, a robots noindex appears on a URL not in the allow-list, or JSON-LD uses properties that aren't valid for the type / misses Google's required fields |
| R3 | **Verification checks only the page we changed, never the whole site**, so side effects show up only in an outside audit a week later | 17 new issues between 20 and 27 Nov, during W5–W8 and the rename | **G3 `site-health` workflow:** a free GitHub Action that crawls the sitemap plus internal links after **every publish** and **every Monday**. It replicates the Ahrefs checks we can (status, robots, canonical, sitemap membership, links to 3xx, orphans, incoming-link count, title/meta/H1/OG, JSON-LD parse + rules, response time), writes `ops/results/site-health-<date>.json`, and goes red on failure (GitHub emails on a failed run, so no new tool) |
| R4 | **New pages and posts ship without a definition of done** | 3 new orphan pages; 1 new page missing a meta description | **G4 New-page Definition of Done**, enforced by G3: ≥3 incoming internal links, in the sitemap, 1 H1, title/meta within limits, full OG, valid schema, IndexNow ping sent |
| R5 | **Patch layers sit over wrong source text** (browser embed + server-side Velo corrections). Each layer adds load time and a drift risk | 61 more slow pages since 20 Nov. The server-side corrections went live 22–23 Nov, i.e., after the 20 Nov crawl | **G8 Retire patches:** each correction rule gets a status in `corrections/RULES.md`. As the source text is fixed in the Editor, the rule is deleted. The layer shrinks over time instead of growing |
| R6 | **Platform-owned items are never formally accepted**, so they come back on every audit as "open" | HTTP→HTTPS redirect, possibly "page in multiple sitemaps" and part of "slow page" | **G5 `ACCEPTED-EXCEPTIONS.md`:** item, reason, date and re-check date. Each one is switched off in Ahrefs (the "Turned off" tab) so the dashboard shows only real work |
| R7 | **Off-site presence has no owner or cadence**, while AI answers cite directories, listicles and Google Business Profiles | 18–78 sources cited per prompt; 11–39 competitors named; Varsha in 1 of 10 | **G6 Weekly rhythm:** Monday KPI strip adds Ahrefs, site-health and the monthly prompt scan. Off-site profiles are tracked as tasks with dates |
| R8 | **Unexplained changes go unnoticed** | 33 meta / 24 H1 / 17 title "changed" notices, not yet reconciled | **G7 Reconciliation:** each weekly run diffs "changed" URLs against the `website.md` log. A change nobody logged gets investigated (Wix-side drift, an app, or a regression) |

---

## 4. Coverage matrix: all 32 Ahrefs rows

Severity follows Ahrefs: **E** = Error (red), **W** = Warning (yellow), **N** = Notice (blue). Counts are "crawled (change vs 20 Nov)".
"Probable cause" is a **hypothesis until Phase 0 confirms it with per-URL data.** Nothing is fixed on a guess.

### 4.1 Indexability and sitemaps (highest risk: pages can drop out of Google)

| # | Issue | Count | Sev | Probable cause | Fix | Channel | Done-gate | Guard |
|---|---|---|---|---|---|---|---|---|
| 1 | Noindex page | 2 (+2, new) | W | (a) a full-replace SEO write (the 26 Nov rename wrote 10 items) carried a robots noindex or dropped Wix's default; (b) a blog post's state changed (the ES "-2" duplicate or a draft purge) | If the page should rank: remove noindex in the manifest and re-apply. If it should stay hidden: use Wix's own "hide from search", which also removes it from the sitemap | SEO API via content-ops; Editor fallback | site-health: 0 unexpected noindex URLs; Ahrefs row = 0 | G1, G2 robots allow-list |
| 2 | Indexable page became non-indexable | 2 (+2) | N | Same 2 pages as #1 | Same as #1 | — | Same | Same |
| 3 | Noindex follow page | 2 (+2) | N | Same 2 pages | Same | — | Same | Same |
| 28 | Noindex page in sitemap | 2 (+2) | **E** | Noindex set as a custom meta tag, so Wix's sitemap still lists the page | Resolved by #1 (index it, or hide it properly) | — | 0 sitemap URLs with noindex | G3 sitemap check |
| 29 | 3XX redirect in sitemap | 1 | **E** | A live page shadowed by a redirect rule, or a blog post whose slug changed | Delete or hide the shadowed page, or remove the redirect if it's wrong. Wix sitemaps aren't hand-editable, so the fix sits at the page/redirect level | Redirects API + page settings | 0 sitemap URLs returning 3xx | G3 |
| 30 | Page in multiple sitemaps | 1 (new) | N | The same URL appears in two Wix sitemaps (e.g., pages + blog, or a language sitemap) | Remove the duplicate source if we created it. If Wix generates it and it's harmless, add it to the exceptions register | API / Exception | Ahrefs 0 or logged exception | G5 |

### 4.2 Links and redirects

| # | Issue | Count | Sev | Probable cause | Fix | Channel | Done-gate | Guard |
|---|---|---|---|---|---|---|---|---|
| 8 | Indexable pages with links to redirect | 72 (+24) | W | 72 of ~80 pages means **a sitewide header, footer or menu link** points at an old or redirecting URL. The +24 lines up with the rename footer change | Find the link(s). A menu/footer link: Yash edits it once in the Editor (1 min) or a server-side link rewrite. Body links: fix in source (VflWebsite embeds/drafts, blog posts via API) | Velo / Editor / Blog API | 0 internal links to any 3xx URL | G3 link check; G2 lint on embed/draft hrefs |
| 10 | Non-indexable pages with links to redirect | 19 (+19) | N | Same sitewide link, seen on 19 non-indexable URLs (canonicalised/blog list pages) | Resolved by #8 | — | Same | Same |
| 11 | 3XX redirect (pages that redirect) | 2 | W | The targets of #8/#10 | **Keep** the redirects (old backlinks need them); make sure nothing internal links to them | — | 0 internal links in; no chains | G3 chain check |
| 12 | HTTP→HTTPS redirect | 1 | N | Something links to an `http://` URL (JSON-LD, an embed or a blog post) | Change the link to https. The redirect itself is normal, so it goes in the exceptions register | Source fix + exception | 0 internal `http://` links | G2 lint rejects `http://` |
| 13 | Redirect target changed | 1 (new) | N | A redirect deleted and recreated (Wix has no update method), probably during the rename | Confirm the target is intended and there's no chain (A→B→C). Record the redirect inventory in `REDIRECTS.md` | Redirects API (read) | Inventory matches live; 0 chains | Inventory diffed weekly by G3 |
| 7 | Orphan page (no incoming internal links) | 4 (+3) | **E** | New blog/landing pages (DE/ES/L3) not linked from hubs, or legacy `copy-of-*` pages | Per page, **Yash decides (D4)**: link it (≥3 links from relevant hubs), or noindex, or delete + 301 | Velo "Related pages" block / Blog API / Editor | 0 orphans | G4 (≥3 incoming links) |
| 9 | Only one dofollow incoming internal link | 9 (+2) | N | Thin internal linking to deep pages | Add a "Related capabilities" block (server-side, from a link map in the repo) to every capability, industry and product page | Velo | Every indexable page has ≥3 incoming links | G4 |

### 4.3 Content tags (titles, descriptions, H1)

| # | Issue | Count | Sev | Probable cause | Fix | Channel | Done-gate | Guard |
|---|---|---|---|---|---|---|---|---|
| 14 | Meta description too long (indexable) | 35 (+3) | W | Written without a length gate; the rename added ~28 characters to several (P12) | Rewrite to 120–155 characters in the manifest; one batch apply | content-ops from manifest | 0 over 155 | G2 |
| 23 | Meta description too long (not indexable) | 19 (new) | N | Same, on canonicalised/blog list pages | Same batch; blog list/category pages via the Blog API | content-ops + Blog API | Same | G2 |
| 15 | Title too long (indexable) | 25 (+6) | W | Same; includes the 3 P12 titles | Rewrite to ≤60 characters: primary keyword first, brand last | content-ops | 0 over 60 | G2 |
| 25 | Title too long (not indexable) | 1 (new) | N | Same | Same | Same | Same | G2 |
| 22 | Page and SERP titles don't match | 2 | N | Google rewrote titles that were too long or didn't match the H1 | Align title with the H1, ≤60 characters. Google decides the final SERP title, so the gate is our rule being met | content-ops | Rule met; recheck after Google recrawls | G2 title↔H1 similarity check |
| 16 | H1 missing or empty (indexable) | 6 (−5, improving) | W | Pages with no body Text element (P7: /product, /transmission-and-driveline, /electric-mobility) plus others to identify | Where a Text element exists: inject the H1 server-side (W6 pattern). Where none exists: Yash adds one Text element in the Editor, then the server-side code fills it | Velo + Editor (P7) | Exactly 1 H1 on every indexable page | G3 H1 count |
| 24 | H1 missing or empty (not indexable) | 2 (new) | N | Blog list/category or canonicalised pages | Fix if the template allows; otherwise add to the exceptions register | Blog settings / Exception | 0 or logged | G5 |
| 17 | Meta description missing or empty | 1 (new) | W | A new page or post shipped without one | Add it in the manifest (or Blog API for a post) | content-ops | 0 missing | G4 |
| 18 | Meta description changed | 33 (new) | N | Our own W8 and rename writes | **Reconcile** against the `website.md` log; investigate anything unlogged | — | 100% reconciled | G7 |
| 19 | H1 tag changed | 24 (new) | N | W6 + rename | Reconcile | — | Same | G7 |
| 20 | Title tag changed | 17 (new) | N | W8 + rename | Reconcile | — | Same | G7 |
| 21 | Word count changed | 9 (new) | N | W6 content + rename | Reconcile | — | Same | G7 |

### 4.4 Structured data and AI discoverability

| # | Issue | Count | Sev | Probable cause | Fix | Channel | Done-gate | Guard |
|---|---|---|---|---|---|---|---|---|
| 31 | schema.org validation error | 24 (+24) | N | **Strong hypothesis:** on 22 Nov we put `dateModified` and `author` on **Organization/Service** nodes, where schema.org doesn't allow them (they belong to WebPage/CreativeWork) | Restructure each page's `@graph`: a **WebPage** node carries `dateModified`/`author`/`about`, and Organization/Service stay clean. One template, applied from the manifest | content-ops | 0 schema.org errors (validator run on every URL) | G2 schema lint |
| 32 | Google rich-results validation error | 7 | N | **Strong hypothesis:** pages carry **two FAQPage blocks** (one from the legacy FAQ widget, one from our JSON-LD), or FAQ items have missing fields | One FAQPage per page. Where the widget emits one, ours is removed (or the widget is migrated, see S1) | content-ops | 0 rich-result errors | G2 "one FAQPage per URL" |
| 4 | Article page missing Article schema | 2 (+1) | N | Long guide pages or posts that Ahrefs classes as articles without Article/BlogPosting markup | Add Article (headline, author Organization, datePublished, dateModified, image, publisher) | content-ops / Blog API | 0 | G4 |
| 5 | Category page missing ItemList schema | 1 | N | A blog category page or a product-listing page | Add ItemList (the category's posts/products in order) | Blog category SEO API / content-ops | 0 | G4 |
| 6 | Changed pages not submitted to IndexNow | 72 (new) | N | No IndexNow ping on publish (planned as F23, not built) | Step 1: check whether Wix pings IndexNow natively (Bing Webmaster Tools → IndexNow report). If it doesn't, the publish workflow submits changed URLs to Bing's free URL Submission API (IndexNow needs a key file at the site root, which Wix Classic can't host) | GitHub Actions | Every publish submits its changed URLs; Bing shows them | Built into the publish workflow |

### 4.5 Social and performance

| # | Issue | Count | Sev | Probable cause | Fix | Channel | Done-gate | Guard |
|---|---|---|---|---|---|---|---|---|
| 26 | Open Graph tags incomplete | 62 (+14) | W | og:image / og:description / og:url / og:type missing on most static pages, and full-replace writes dropping fields | The manifest carries the **full OG + Twitter set** for every URL; blog posts get a cover image via the Blog API | content-ops + Blog API | 0 incomplete | G1 + G2 |
| 27 | Slow page | 80 (+61) | W | **Hypothesis:** server-side corrections (all pages) + 41 embeds served from a backend function, both live after the 20 Nov crawl. Wix's own baseline speed is the other part | **Measure first:** response time + PageSpeed (free API) on (a) a page with many rules, (b) one with few, (c) a blog post with none. Then **Yash decides D1**: optimise the layer (cache rules, no per-request backend calls, pass data server→client once), and/or retire rules as source text is fixed (G8), and accept whatever floor Wix itself sets | Velo + measurement | Ahrefs slow pages <10, or the remainder logged as a Wix floor with numbers | G3 response-time budget per page; G8 |

**Count check: 32 of 32 rows covered** (rows 1–32 above).

---

## 5. Coverage matrix: all 10 AI buyer prompts

How to read the CSV: *visibility* = share of AI answers that name Varsha; *citations* = sources the AI cited; *competitors* = companies named. **The fewer competitors, the faster the win.** AI engines name a supplier when (a) a page answers the prompt directly in its first 100 words, with FAQ + schema and a date, and (b) third-party sources (directories, listicles, Google Business Profile) back it up.

Baseline word counts are from the 22 Nov baseline (agriculture 154, certifications 249, commercial-vehicle 136, automotive-steering-powertrain 313). Phase 0 re-measures them.

| # | Prompt | Intent | Now | Comp. / Cit. | Gap | On-site asset | Off-site asset | Priority |
|---|---|---|---|---|---|---|---|---|
| P10 | metal forging for automotive parts | Commercial | 0% | **11** / 29 | Automotive content is split across thin pages | **Automotive forgings hub** (deepen /automotive-steering-powertrain to 800+ words): products, materials, IATF 16949, PPAP L1–5, OEM list from FACTS, FAQ, links to steering/suspension/CV pages | ACMA membership listing; directory categories "automotive forgings" | **1 (quick win)** |
| P7 | forge parts for heavy machinery | Commercial | 0% | **16** / 18 | No page for mining/off-highway/construction (all in FACTS) | **New page or post: "Forgings for heavy machinery: mining, off-highway, construction"** | Directory categories | **1 (quick win)** |
| P8 | place order forged metal components today | Transactional | 0% | **18** / 18 | No ordering/RFQ path, no stated response time | **/request-a-quote** (D3) + "How to order forgings from Varsha: what to send" section; response time only if D2 confirms | IndiaMART/TradeIndia "Get quote" buttons | **1** |
| P5 | request forging quote online | Transactional | 0% | 39 / 55 | Same | Same page; RFQ form with drawing upload; FAQ "What do I need to send for a forging quote?"; ContactPoint schema | Same | **1** |
| P6 | certified forging manufacturer ISO approved | Commercial | **14%** (1 mention) | 35 / 42 | Working; /certifications is thin (249 words) | Deepen /certifications: IATF 16949, ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, PPAP L1–5, APQP, IMDS, RDSO (all FACTS), certificate images, `hasCredential` schema | Same certifications on every directory profile | 2 (protect + grow) |
| P4 | agricultural equipment forging suppliers | Commercial | 0% | 39 / 49 | /agriculture is thin (154 words) | Deepen to the planned agricultural-machinery landing page (GROWTH-RESEARCH L7): parts, tractor/implement applications, customers as FACTS allows, FAQ | Agri directory categories | 2 |
| P3 | custom forging solutions in India | Commercial | 0% | 33 / 30 | No "custom / to-drawing" framing | Section + FAQ on /forging-manufacturer-india ("forgings made to your drawing, 1–25 kg, die design in-house"); Service schema "Custom closed-die forging" | — | 2 |
| P9 | affordable precision forging services | Commercial (budget) | 0% | 25 / 44 | Cost post exists but nothing frames India's cost advantage | Strengthen the cost blog post + an "India cost advantage" FAQ on the sourcing guide (general engineering/economics only, **no prices unless in FACTS**) | Listicles | 3 |
| P2 | top-rated industrial forging manufacturers | Commercial (quality) | 0% | 38 / 36 | No ratings; awards not marked up | Awards page (`copy-of-awards`) given proper title/H1, Award schema; awards list from FACTS | **Google Business Profile reviews from genuine customers**; listicle submissions | 3 |
| P1 | best metal forging companies near me | Commercial (local) | 0% | 30 / 78 | "Near me" answers come from local signals | LocalBusiness schema per plant (both addresses in FACTS) on contact + city pages; consistent name/address/phone | **Google Business Profile for both plants** (P13); IndiaMART, Justdial-type local listings | 3 (depends on GBP) |

**Count check: 10 of 10 prompts covered.**

Every new or deepened page follows the W6 pattern and the G4 Definition of Done: question-led H1, direct answer in the first 100 words, H2 sections, 3–5 question FAQ, dateModified, ≥3 incoming links, full OG, IndexNow ping, facts only from FACTS.md.

---

## 6. Phased execution plan (after GO)

Flow per step, unchanged: Opus briefs → Sonnet executor does it → Haiku reviewer checks the gate → Opus logs, commits and pushes. One Wix writer at a time. A task that fails twice goes to `pending.md`.

### Phase 0: Freeze and baseline (day 1)
| Step | What | Who | Gate |
|---|---|---|---|
| 0.1 | **Freeze SEO writes** until the manifest and lint exist (no more one-off PATCHes) | Opus | — |
| 0.2 | Get per-URL issue lists: reconnect the Ahrefs connector (D5), **or** Yash exports each issue's CSV (click the count → Export) | Yash / Claude | URL list for all 32 rows |
| 0.3 | Build `site-health` (read-only crawler) in VflWebsite: sitemap + link crawl, all checks in G3 | Sonnet | Reproduces the Ahrefs counts within ±10% on each row it covers |
| 0.4 | Read **all** current SEO tags (49 static pages + blog posts + categories) into the first `seo/manifest.json` — a snapshot of live, not new values | Sonnet | Manifest = live read-back, 100% of URLs |
| 0.5 | Confirm or reject every "probable cause" in section 4 with the per-URL data; update this plan | Opus + Haiku | Each row has a confirmed cause |
| 0.6 | Speed measurement (3 page types, PageSpeed API + response time) | Sonnet | Numbers recorded in `baseline/speed-27nov.md` |

### Phase 1: Stop the bleeding (days 1–2): all 3 Ahrefs Errors + indexability
Rows 1, 2, 3, 28, 29, 30, 7, 13, and P14.
| Step | What | Gate |
|---|---|---|
| 1.1 | Fix the 2 noindex pages (index or hide properly) | site-health: 0 noindex in sitemap |
| 1.2 | Resolve the 3XX URL in the sitemap; resolve or log the multiple-sitemaps item | 0 sitemap 3xx |
| 1.3 | Redirect inventory `REDIRECTS.md`; confirm the changed target; no chains | Inventory = live |
| 1.4 | Orphans: apply Yash's D4 decision per page | 0 orphans |
| 1.5 | Close P14 (rename tags not rendering) through the manifest apply + republish | Live HTML = manifest |

### Phase 2: Single source of truth + lint (days 2–3)
| Step | What | Gate |
|---|---|---|
| 2.1 | `ops/lint-seo.js` (G2) wired into CI on VflWebsite; **Yash pastes 1 workflow file** via GitHub web UI (our token can't push workflow files) | Lint fails on a deliberately bad test record, passes on clean |
| 2.2 | content-ops `apply` rewritten to read only from the manifest and always send the full tag set | A dry run shows a 0-field diff on unchanged pages |
| 2.3 | `site-health` runs after every publish and every Monday (same workflow-file paste) | First scheduled run green or red with a correct list |

### Phase 3: Fix through the manifest (days 3–4)
Rows 14, 15, 17, 22, 23, 25, 26, 31, 32, 4, 5.
| Step | What | Gate |
|---|---|---|
| 3.1 | Rewrite titles (≤60) and descriptions (120–155) for all flagged URLs; P12 included | Lint passes |
| 3.2 | Full OG + Twitter set on every URL; blog cover images | 0 incomplete OG |
| 3.3 | JSON-LD template: WebPage node holds dateModified/author; one FAQPage per page; Article on guide pages; ItemList on the category page | 0 schema.org + 0 rich-result errors (validator on every URL) |
| 3.4 | One batch apply, publish, live verify (Firecrawl maxAge 0 + site-health) | Live = manifest on 100% of URLs |

### Phase 4: Links and architecture (days 4–5)
Rows 8, 9, 10, 11, 12.
| Step | What | Gate |
|---|---|---|
| 4.1 | Fix the sitewide link to the redirect (server-side, or 1 menu edit by Yash) | 0 internal links to 3xx |
| 4.2 | Fix body links and `http://` links in source (embeds, drafts, blog posts) | 0 `http://` internal links |
| 4.3 | Link map `seo/link-map.json` + server-side "Related capabilities" block on capability, industry and product pages | Every indexable page ≥3 incoming links |

### Phase 5: Speed (week 2)
Row 27.
| Step | What | Gate |
|---|---|---|
| 5.1 | Apply D1: optimise the correction layer (cache rules in memory, no per-request backend fetch, pass data server→client once) | Response time down vs the Phase 0 numbers |
| 5.2 | Start G8: list the rules whose source text Yash can fix in the Editor, so they can be retired | Rule count trending down |
| 5.3 | Whatever remains at Wix's floor goes into the exceptions register with numbers | Ahrefs slow <10 or logged |

### Phase 6: Prompt programme (weeks 2–8)
| Week | On-site (Claude via server-side code/Blog API; Editor only where unavoidable) | Off-site (Yash) |
|---|---|---|
| 2 | P10 automotive hub; P7 heavy-machinery page/post; /request-a-quote (D3) for P5/P8 | Google Business Profile, both plants (create/verify) |
| 3 | P6 certifications deepened; P4 agriculture landing | IndiaMART + TradeIndia free profiles (from `offsite-profiles-DRAFT.md`) |
| 4 | P3 custom-forging section; P9 cost-advantage FAQ; **prompt re-scan** (target ≥4/10 above 0%) | Kompass + ThomasNet; ask 3–5 genuine customers for GBP reviews |
| 5–8 | P2 awards markup; P1 LocalBusiness per plant; one blog post a week from the B1–B10 list, each tied to a prompt | Listicle submissions (Moglix, Tofler, trade blogs); LinkedIn cadence per PHASE4 |
| 8 | **Prompt re-scan** (target average ≥20%) | — |

### Phase 7: Lock-in (end of week 2, then ongoing)
| Step | What |
|---|---|
| 7.1 | `ACCEPTED-EXCEPTIONS.md` written; each exception switched off in Ahrefs |
| 7.2 | G4 Definition of Done added to `CLAUDE.md` (rule text in section 10 below, for your approval) |
| 7.3 | Weekly Monday run: Ahrefs + site-health + G7 reconciliation + pending.md review, all logged in `website.md` |
| 7.4 | Exit test (section 1) checked each Monday until all five pass |

### Stability items (S): not in the two files, but needed for "strong and stable"
| # | Item | Why | When |
|---|---|---|---|
| S1 | **Migrate the legacy FAQ widget to the current Wix FAQ app before 31 Dec 2026** | Its API shuts down at the end of 2026; it serves stale baked text (P4b/P11) and probably duplicate FAQPage schema (row 32) | Week 2–3 (Yash replaces the widget in the Editor, ~20 min; Claude fills content via the FAQ v2 API) |
| S2 | Rollback drill for auto-publish (revert the commit on main → auto-republish) documented and tested once | Every push to main is live | Phase 2 |
| S3 | Publish → site-health → automatic red email | A bad release gets caught within minutes, not at the next audit | Phase 2 |

---

## 7. Decisions needed from Yash
Asked **one at a time, multiple choice, recommended option first**, after you approve this plan. Answers go into `FACTS.md`/this plan immediately.

| # | Decision | Options (recommended first) |
|---|---|---|
| D1 | Speed vs correction layer | (a) Optimise the layer now, retire rules as you fix source text · (b) Optimise only · (c) Accept Wix's speed as is |
| D2 | Quote response time we may publish | 24 h · 48 h · 72 h · don't publish a time |
| D3 | RFQ page | (a) You create a /request-a-quote page in the Editor with a Wix Form + file upload (~15 min; Claude supplies all copy) · (b) Rework /contact-us-1 as the RFQ page (no Editor work, weaker for P5/P8) |
| D4 | Each orphan page (after Phase 0 names them) | Link it · noindex it · delete + 301 |
| D5 | Per-URL data source | (a) Reconnect the Ahrefs connector (it failed to connect this session) · (b) You export the issue CSVs · (c) Rely on our own crawler only |
| D6 | Paid directory listings (IndiaMART/TradeIndia paid plans are over $50) | Free profiles first, review in 4 weeks · approve paid now |

---

## 8. Yash's single ordered worklist (whole plan)

| Order | Task | Time | Phase |
|---|---|---|---|
| 1 | Answer D1–D6 (one question at a time) | 10 min | Before Phase 0 |
| 2 | Reconnect the Ahrefs connector, or export issue CSVs (D5) | 5–15 min | 0 |
| 3 | Paste 1 workflow file (lint + site-health) in GitHub web UI | 3 min | 2 |
| 4 | Editor batch, one visit: sitewide menu/footer link (if needed) · H1 Text elements on /product, /transmission-and-driveline, /electric-mobility (P7) · visible dates/byline (P8) · social icons (P9) · legacy FAQ edits P4b + P11 · **replace the legacy FAQ widget (S1)** · /request-a-quote page (if D3a) | ~60 min | 3–5 |
| 5 | Google Business Profile, both plants (create/verify) | 30 min + postcard/video wait | 6 |
| 6 | Free directory profiles (IndiaMART, TradeIndia, Kompass, ThomasNet) from the drafted copy | 2 h over 2 weeks | 6 |
| 7 | Ask 3–5 genuine customers for GBP reviews | 15 min | 6 |
| 8 | Fix source text in the Editor for rules marked "retire" (G8), in small weekly batches | 15 min/week | 5+ |

---

## 9. Timeline, cost, and the 48-hour / 80% check

**Challenge (Rule #3):** "everything ticked for good" can't all happen in 48 hours. The site-health items can; prompt visibility depends on off-site signals and AI re-crawls, which take weeks.

| Path | What you get | When |
|---|---|---|
| **Architect's path (recommended)** | Phase 0 + 1 + 2 first (crawler, manifest, lint), then fix everything *through* them. Slower by ~1 day, but fixes stay fixed | All 3 Errors cleared in 48 h of GO; all site rows by end of week 2; exit test from week 4; prompts week 8 |
| **Owner's path** | Fix the 32 rows directly via the API now, add guardrails later | Most rows in 48 h, **but this repeats the pattern that caused this week's 17 new issues** |

**Cost:** $0. GitHub Actions, the Wix API, the PageSpeed API, Bing Webmaster Tools, Google Business Profile and free directory profiles are all free. Firecrawl credits for live verification stay well under $50. Paid directory plans (D6) are the only item that could go over $50, and that needs your explicit yes.

---

## 10. Failure protocol (Plan B per phase)

| Phase | If it fails | Plan B |
|---|---|---|
| 0 | Ahrefs connector won't connect / no exports | Our crawler alone; Ahrefs used only as the weekly referee |
| 0 | Crawler can't reach the site from GitHub runners | Run the same checks through Firecrawl batch scrape (credits stay under $50) |
| 1 | A noindex or sitemap fix doesn't hold via API | Yash sets the page's SEO toggle in the Editor (2 min); logged in pending.md |
| 2 | Workflow-file paste blocked | Lint runs inside the existing content-ops workflow as a pre-step (no new workflow file) |
| 3 | Tags saved but not rendering (P14 pattern) | `src/` comment bump to force a republish (known W8 fix); if it fails twice → pending.md + Wix support ticket |
| 4 | Sitewide link isn't reachable by server-side code | Yash's Editor menu edit (1 min) |
| 5 | Layer optimisation doesn't move speed | Accept Wix's floor with numbers (exceptions register); speed up retiring rules |
| 6 | GBP verification delayed | Directory profiles + LocalBusiness schema carry P1 meanwhile |
| Any | Any task fails twice | Stop, log in `pending.md` with its unblock condition, move on (CLAUDE.md rule) |

---

## 11. Master Status Ledger

| Type | Item | Status |
|---|---|---|
| Realized concept | This plan (32/32 rows, 10/10 prompts, 8 root causes, 8 guardrails, 3 stability items) | **Drafted 27 Nov, awaiting Yash's approval** |
| Realized concept | Decisions D1–D6 | Open, to be asked one at a time |
| Build payload | `site-health` crawler (VflWebsite `ops/site-health.js` + workflow) | Not started (Phase 0) |
| Build payload | `seo/manifest.json` + `ops/lint-seo.js` | Not started (Phase 0/2) |
| Build payload | JSON-LD WebPage template; link map; Related-capabilities block | Not started (Phase 3/4) |
| Build payload | `REDIRECTS.md`, `ACCEPTED-EXCEPTIONS.md` | Not started (Phase 1/7) |
| Build payload | Prompt pages: automotive hub, heavy machinery, request-a-quote, certifications, agriculture, custom, cost FAQ, awards, LocalBusiness | Not started (Phase 6) |

---

## 12. Proposed rule update for `CLAUDE.md` (Rule #11: for your approval, not applied)

**Reason:** this week's 17 new issues came from changes that were verified one page at a time. This rule makes the whole-site check mandatory, so the same gaps can't come back.

**Where to paste:** project `CLAUDE.md`, under "Hard rules".

```
- **Whole-site gate (owner, 27 Nov 2026):** SEO tags are written ONLY from `seo/manifest.json` via content-ops, always as the full tag set; `ops/lint-seo.js` must pass before any merge to main. After every publish the `site-health` workflow must be green before the step is logged as done. Every new page or post meets the Definition of Done: ≥3 incoming internal links, in sitemap, 1 H1, title ≤60, description 120–155, full OG, valid schema (one FAQPage max), IndexNow/Bing submission sent. Platform-owned issues go in `ACCEPTED-EXCEPTIONS.md`, never left "open".
```
