# Brief for the next session (rewritten 27 Nov 2026, after the owner's 16 answers)

## RULE 0 first
Opus dispatches and decides; it does not read the repo, scrape, grep, verify or relay. Bulk reading goes to the `reviewer` (Haiku); edits, Wix writes, logs, commits and pushes go to the `executor` (Sonnet). Agents return verdicts of 15 lines or fewer and write detail to files. Full text: top of `CLAUDE.md`.

## Read order
`CLAUDE.md` -> `website.md` (HANDOVER) -> `pending.md` -> `INTERNATIONAL-PLAN.md` (section 8 is the queue) -> `FACTS.md` ("Owner answers 27 Nov 2026") -> `PHASE4-PLAN.md`.

## State at 27 Nov 2026
- The live site is unchanged by this record-keeping step. All earlier work (Waves 1-2, A10 schema, blog posts C1-C4, FAQPage and meta on posts, H1 fixes) is live and reviewer-verified; see website.md.
- **Owner answered 16 questions today and every one is recorded in FACTS.md as [Y] 27 Nov 2026.** They are NOT yet on the live site: CQI-9 held (no dates), ARAI claimable (no part names; wording "all safety-critical parts used in our assemblies have been ARAI certified"), RDSO (no reference number), AIFI presidency 2024-26, solar (Pune rooftop 150 kW + 5 MW owned plant in a solar park), export order EU > North America > Middle East/Africa, anonymised case studies, MOQ "project-dependent, discussed at enquiry", no group schema, PED/AD 2000 not applicable.
- Wix JSON-LD cap: 12,000 chars per script; keep 4,096 as house policy (CLAUDE.md).
- Dropped or deferred, do not re-raise: P10 (CSP/Enterprise) dropped; Apollo/Lusha deferred to Q1 2027; PED/AD 2000 closed.

## Do next, in order (INTERNATIONAL-PLAN.md section 8)
1. **A. Credential and fact wave** via Wix item-seo-tags API: CQI-9, ARAI, RDSO into hasCredential; AIFI years into Person; solar facts where they belong. One page per call, GET first, full tag set, publish:true, reviewer read-back and live check. Homepage plew4 and /company-profile unlvj first.
2. **B. P19, P20, P23:** one bounded code attempt each (owner overrode the two-failure rule for this one attempt). P20 expected to stay Editor-only.
3. **C. P26:** Velo collapse() attempt for blank boxes on /forged-components-ev and /about-1-1.
4. **D. P22:** scrape live header/footer for nav membership, produce a PROPOSED 301 map, get owner approval BEFORE creating any redirect.
5. **E. P25:** identify the two noindex pages, show Yash what is on them, THEN lift noindex (owner chose lift). Lift nothing before he has seen them.
6. **F. Wave 4 content:** steel equivalency matrix (DIN/EN + SAE/AISI first, JIS optional last), ESG page (unblocked), 3 anonymised case studies, commercial-vehicle vertical page. Run `scripts/check-wordcount.sh`.
7. **G. GBP cleanup list** for both plants (profiles exist), for Yash to action.
8. **H. KPI search re-check 10 Dec and 24 Dec** (queries in PHASE4-PLAN.md).

## Still on Yash
P9 social icons (Editor), P13 off-site text (paste from `content-drafts/`), LinkedIn batch 2 posting, P19/P20/P23 Editor steps only if the code attempts fail (pending.md). Never ask Yash to run Sited.

## Lessons to keep
- Before parking anything as Editor-only: check raw HTML for `filesusr.com/html/` iframes (embed swap), FAQ v2 data, and Velo `$w` reach.
- `collapse()` is not SSR-visible; blank `t.html` instead. Count DOM h1s only (warmup JSON carries escaped copies). /forging slideshow makes h1 counts vary with waitFor (use 1000).
- Paginate FAQ v2 queries before claiming 0 hits. item-seo-tags writes render only after the next publish; the 10 Velo-owned SEO pages are edited via `ops/tools/gen-seo-override.js`, not the API.
- Blog API: Wix ignores the requested slug (match by TITLE); never pass `language`; publish returns a bare 200.
