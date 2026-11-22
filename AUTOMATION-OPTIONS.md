# Automating visible-text edits on a Wix Classic site — research and recommendation
**22 Nov 2026 · Goal:** agents, not Yash, apply Block 3–6 text corrections (visible page text, headings, links, nav) on varshaforgings.com.

## The constraint
varshaforgings.com is a **Wix Editor (Classic)** site. Wix's REST APIs and MCP can change SEO tags, structured data, CMS, blog, media and settings, **but not the text inside the page layout**. That text lives in the Editor document, and no API writes to it on Classic sites. So a direct "edit page text" API is not available.

## Options researched
| # | Option | How it works | Agent-run? | Cost | Verdict |
|---|---|---|---|---|---|
| **A** | **Velo code layer via GitHub (recommended)** | The site already has Velo enabled. Wix Editor sites support **Git integration and the CLI for Sites**, so the site's code lives in a GitHub repo ([Wix developer tools](https://dev.wix.com/docs/overview/platform-overview/developer-tools)). A `masterPage.js` correction layer runs on every page in `$w.onReady`. It rewrites text element HTML (find → replace), fixes link URLs, heading levels (`<h2>` → `<h1>`) and menu items. Page code runs **server-side on first load** ([rendering env docs](https://dev.wix.com/docs/sdk/frontend-modules/window/rendering/env)), so Google and AI crawlers see the corrected text. All corrections live in one data file in the repo; agents edit the file, commit, publish. | **Yes, fully** after a ~15-min one-time setup | $0 (Velo and GitHub included) | **Primary** |
| B | Claude in Chrome on Yash's desktop | The Claude browser extension drives the real Wix Editor in Yash's logged-in Chrome and executes the click-list. | Mostly; Yash's PC must be on, light supervision | Included in a paid Claude plan | **Fallback** for what code can't reach (e.g. social-bar icons) |
| C | Wix's own AI agents (Aria) | Aria edits page content only in the **Wix Harmony** editor. On Classic sites the AI tool is per-text-box, not a batch agent. | No, on this site | — | Not viable without migrating editors |
| D | Migrate the site to Wix Harmony | Aria and the Wix MCP can then edit pages directly. | Yes, afterwards | $0, but a full redesign/migration | Too big for now; revisit with the Headless/CMS decision |
| E | Freelance Wix VA executes the list | A human runs the click-list. | No | ~$50–150 one-time | Not agent-based; only as last resort |

## Option A design
- **One-time setup (Yash, ~15 min, owner-only clicks):**
  1. Editor → Dev Mode → **Git integration** → connect a new GitHub repo (e.g. `erpvarsha-star/VflWebsite`).
  2. Add that repo to Claude's GitHub access.
  3. Authorize the Wix CLI login once if the publish step needs it.
- **Correction file** `src/public/corrections.js`: rules of 4 kinds:
  - `replace` (text/HTML find → replace, optionally per page)
  - `replaceElementStartingWith` (swap a whole paragraph with the new draft copy)
  - `link` (e.g. the mailto typo)
  - `heading` (promote a title to H1)
  - plus nav labels and links via the menu `menuItems` API
- **`src/pages/masterPage.js`:** applies the rules to every Text, Button and Menu element on load, server and browser.
- **Flow per batch:**
  1. Opus writes the rules from `FACTS.md`.
  2. A Sonnet executor commits and publishes.
  3. A Haiku reviewer fetches the live pages and confirms the old text is gone and the new text is present.
- **Pilot first:** fix only the footer mailto typo, then verify live. If it shows in the server-rendered HTML, roll out Blocks 2–6.

## Honest limits of Option A
- The Editor still shows the old text underneath. The live site, Google and AI tools see the corrected version. Anyone editing in the Editor later must know the layer exists; it's documented in `CLAUDE.md`.
- Social-bar icons (Facebook/Instagram → Wix's accounts) may not be reachable from code. That's one small Editor fix, or Option B.
- Adding brand-new sections or layout still needs the Editor. Replacing text inside existing boxes, including the 7 page rewrites, does not.
