# W4 verification (after owner Publish), 22 Nov 2026

Scope: pilot commit VflWebsite `4ed2cab` (masterPage footer email fix; collapse of 2 Pune machine-count embeds).
Evidence sources: GitHub Actions `ssr-check` run 45066394428 (job 137343388768, head `fdcb472`, conclusion success), Firecrawl scrapes of the live site (maxAge 0, waitFor 15000, rawHtml + markdown), and `baseline/ssr-before.md` and `baseline/<slug>.md`.

## Verdict: NOT VERIFIED (1 hard FAIL on DO NOT PUBLISH, plus expected no-JS non-change)

| # | Check | Result | Evidence |
|---|---|---|---|
| 1a | ssr-check run completed for fdcb472 | PASS | Run 45066394428 `completed / success`, head_sha `fdcb4722811e`, job `check` success. |
| 1b | HTTP 200 on all 3 paths (no JS) | PASS | Log: `=== /  HTTP 200  bytes=951200`; `=== /forging-manufacturer-pune  HTTP 200  bytes=1506645`; `=== /contact-us-1  HTTP 200  bytes=1255271`. |
| 1c | "varshaforging.com" (typo) count lower in no-JS HTML | FAIL (no change) | Before → now: / 2 → 2; Pune 2 → 2; contact 4 → 4. The masterPage fix runs in the browser only (Velo `$w.onReady`), so non-JS HTML is unchanged. Expected for this channel; the no-JS test cannot pass until the Velo + GitHub channel (SETUP-VELO-GITHUB.md) is in place. |
| 1d | "CNC Turning Centers" unchanged (no-JS) | PASS for Pune and contact, NOTE for home | Pune 4 → 4; contact 4 → 4; home 2 → 4 in raw HTML. The home rise is not visible text: the rendered home markdown has 0 matches; the raw matches are in the correction-rule script text. |
| 1e | "×60" unchanged (no-JS) | PASS | `x60 (×60): 0` on all three pages, same as before. |
| 2a | Footer mailto links read varshaforgings.com (/) | PASS | rawHtml mailto values: `mailto:marketing@varshaforgings.com` ×4. Literal `varshaforging.com` count in rawHtml: 0. The two odd `mailto:marketing@varshaforging\.com` strings are regex text inside a script, not links. |
| 2b | Footer mailto links read varshaforgings.com (/contact-us-1) | PASS | rawHtml mailto values: `mailto:marketing@varshaforgings.com` ×6. Literal typo count: 0 (same script-only regex strings). |
| 2c | Pune: 2 embeds (72f2bf_67e7…, 72f2bf_cf35…) gone or collapsed; "×60" gone from rendered page | FAIL | Both `htmlComp-iframe` embeds are still in the rendered DOM with their full content. Wrappers `#comp-mscxleug` (CSS height 372px) and `#comp-mscxlevk` (height 357px) have no collapse style. "×60" still appears: rawHtml 1 match (`[CNC Turning Centers ×60] → [VMC ×17] → [HMC ×2]`) and markdown 1 match. The equipment table `CNC Turning Centers | 60` is also still rendered. The pilot's `c.collapse()` call did not take effect on the live page (either the Pune page's Velo code is not live, or it did not run). This is a DO NOT PUBLISH breach still visible to visitors. |
| 3a | H1s match baseline (/) | PASS | Rendered H1: "Closed-Die Forgings, Precision Machining and Assembly from India". Baseline: same. |
| 3b | H1s match baseline (/contact-us-1) | PASS, minor text diff | Rendered: "Contact Us > Enquiry". Baseline: "Contact Us >Enquiry" (spacing only). |
| 3c | H1s match baseline (/forging-manufacturer-pune) | PASS | Rendered: "Precision CNC Machining & Assembly Hub". Baseline: same. |
| 3d | Form / RFQ presence | PASS | /contact-us-1 has the enquiry form (`Upload Drawing`, `Submit` in markdown; baseline YES). / and Pune have no form (baseline: no). |
| 3e | Internal link count | NOTE (not comparable) | Rendered `<a>` to site paths: / 57, contact 54, Pune 51. Baseline counts were manual body-only (3, 1, 0), so this is not a like-for-like comparison. No regression can be concluded from it. |
| 3f | Page broken, blank or missing sections | PASS | All three pages return full content: rawHtml 975 KB / 1,422 KB / 1,614 KB; markdown 10 KB / 64 KB / 12 KB. No blank page. |
| 3g | SSR `<h1` count on Pune | NOTE (investigate) | ssr-check now `<h1: 1`; baseline `<h1` = 9. Rendered H1 text is unchanged (3c). The source of the drop is not known; check the no-JS HTML before W5. |

## Required follow-ups (not done here)
1. Pune page: confirm the Velo `Forging Manufacturer Pune.lgtlq.js` at `4ed2cab` is live (Publish of that page, and that `$w('HtmlComponent')` ran). If it ran, the collapse is not being applied. Until the embeds are actually removed or collapsed, the DO NOT PUBLISH machine counts remain visible to visitors. Owner Editor action may be the faster fix.
2. Re-run after the Velo channel is live: 1c (typo count in no-JS HTML) is expected to stay at 2/2/4 until then.
3. Investigate 3g (Pune `<h1` 9 → 1) before W5.

Live HTML is in the Firecrawl result files under `/root/.claude/projects/-home-user-website/11849b97-2450-5857-aa3b-af0b272fc430/tool-results/` (too large to inline).
