# W5 deploy: corrected embeds and native text via Velo only

Prepared 22 Nov 2026. Code is on branch `w5-embeds` of `erpvarsha-star/vflwebsite` (NOT merged to `main`: Wix syncs `main` into the live site code, and the W4 pilot there is still waiting for the owner to publish). No Wix API writes were made. Nothing here is live until the branch is merged, synced and published.

Evidence tags: **[measured]** = run in this session; **[doc]** = Wix docs; **[unverified]** = needs a live test.

## 1. What was built

| File (repo `vflwebsite`) | Purpose |
|---|---|
| `src/backend/http-functions.js` | `get_embed(request)` serves corrected embed HTML at `https://www.varshaforgings.com/_functions/embed/<key>`. `ok()` for a known key, `notFound()` otherwise. `Content-Type: text/html; charset=utf-8`, `Cache-Control: public, max-age=300`. |
| `src/backend/embeds/<key>.js` x38 + `index.js` | One module per corrected embed (exports `html`), plus a static key-to-html table (Velo needs static imports). Generated. |
| `src/public/embedSwap.js` | `swapEmbeds($w, map)`: for each `$w('HtmlComponent')` whose `src` contains a mapped filesusr hash, sets `src` to the `_functions` URL. Skips components already swapped. |
| `src/public/corrections.js` | `applyTextCorrections($w)`: native `Text` (`.html`, edits text segments only, keeps markup), `Button` (`.label`, `.link`). Text, href and hideText rules. Writes only when a value changed. Each element in try/catch. |
| `src/public/corrections-rules.js` | 136 text rules, 11 hide rules, 1 href rule, extracted from `corrections/embed-layer.js` and `embed-layer-2.js`. Generated. |
| `src/pages/*.js` (all 56 incl. `masterPage.js`) | Each `$w.onReady` now calls `applyTextCorrections`; the 17 embed pages also call `swapEmbeds`. Blocks are marked `W5-BEGIN/W5-END` so the generator is idempotent. Existing code (footer fix in masterPage, Pune collapse) is kept. |

Generator (website repo): `scripts/build-embed-modules.js [veloRepoDir]`. Reads `embeds/INDEX.md` (41 rows with changes; about-1-1 x3 share one iframe src and `v-link-assemblies__2` / `forged-components-ev__2` share another, so 38 unique modules), `embeds/corrected/*.html`, `corrections/embed-layer*.js`. Re-run it whenever a corrected embed or rule changes, then commit the output.

Measured: `npx eslint src` exit 0, no errors, no warnings. Generator re-run is a no-op (idempotent). A mock run of `applyTextCorrections` on a split-span paragraph changed it once and wrote nothing on a second pass.

Pune fallback: the existing count-embed `collapse()` now skips any component that `swapEmbeds` swapped (`w5Swapped`). If the swap fails, the collapse still hides the two count embeds.

Size: largest module 17,179 bytes, all 38 modules 125,526 bytes in total. Wix docs consulted do not state a size limit for backend files or HTTP-function responses [doc: no figure found]. These sizes are far below anything the docs mention for page code, but treat as **[unverified]** until the first deploy builds.

## 2. Pages, hashes and keys (page file = `src/pages/<name>.<pageId>.js`)

pageId read from live rawHtml `Container<pageId>inlineContent` for all 17 pages (Firecrawl, maxAge 0) [measured].

| Page | pageId | Embed # | Original hash | Key | Edits |
|---|---|---|---|---|---|
| /forging-manufacturer-pune | `lgtlq` | 1 | `72f2bf_67e78ccd…` | `forging-manufacturer-pune__1` | 2 |
| /forging-manufacturer-pune | `lgtlq` | 2 | `72f2bf_59914523…` | `forging-manufacturer-pune__2` | 3 |
| /forging-manufacturer-pune | `lgtlq` | 3 | `72f2bf_cf353468…` | `forging-manufacturer-pune__3` | 7 |
| /forging-manufacturer-pune | `lgtlq` | 7 | `72f2bf_613d3382…` | `forging-manufacturer-pune__7` | 2 |
| /forging-manufacturer-india | `q1c5f` | 1 | `72f2bf_392e237b…` | `forging-manufacturer-india__1` | 4 |
| /forging-manufacturer-india | `q1c5f` | 2 | `72f2bf_d992c508…` | `forging-manufacturer-india__2` | 7 |
| /forging-company-maharashtra | `n1h72` | 1 | `72f2bf_7edffdcc…` | `forging-company-maharashtra__1` | 4 |
| /forging-company-maharashtra | `n1h72` | 2 | `72f2bf_71d1f1bf…` | `forging-company-maharashtra__2` | 3 |
| /forging-company-maharashtra | `n1h72` | 3 | `72f2bf_5d4ca8b0…` | `forging-company-maharashtra__3` | 1 |
| /suspension-components | `bz4vb` | 1 | `72f2bf_42c4a400…` | `suspension-components__1` | 10 |
| /forged-components-railways | `l2sru` | 1 | `72f2bf_2ded29a9…` | `forged-components-railways__1` | 4 |
| /forged-components-railways | `l2sru` | 2 | `72f2bf_d9913094…` | `forged-components-railways__2` | 1 |
| /forged-components-railways | `l2sru` | 3 | `72f2bf_02073a42…` | `forged-components-railways__3` | 2 |
| /forged-components-railways | `l2sru` | 4 | `72f2bf_6e0a302f…` | `forged-components-railways__4` | 5 |
| /forged-components-railways | `l2sru` | 6 | `72f2bf_82cc7ca5…` | `forged-components-railways__6` | 1 |
| /forged-components-railways | `l2sru` | 7 | `72f2bf_6d865dd2…` | `forged-components-railways__7` | 3 |
| /forged-components-railways | `l2sru` | 9 | `72f2bf_322e326c…` | `forged-components-railways__9` | 4 |
| /forged-components-railways | `l2sru` | 10 | `72f2bf_69b89584…` | `forged-components-railways__10` | 3 |
| /radius-rod-assemblies | `zwiw1` | 2 | `72f2bf_236a8b76…` | `radius-rod-assemblies__2` | 3 |
| /torque-rod-assemblies | `wu1va` | 2 | `72f2bf_21e75576…` | `torque-rod-assemblies__2` | 4 |
| /v-link-assemblies | `mfcwu` | 2 | `72f2bf_6fac8c22…` | `v-link-assemblies__2` | 4 |
| /forged-components-ev | `jq1y2` | 1 | `72f2bf_fceccef7…` | `forged-components-ev__1` | 3 |
| /forged-components-ev | `jq1y2` | 2 | `72f2bf_6fac8c22…` | `v-link-assemblies__2` | 4 |
| /forged-components-ev | `jq1y2` | 3 | `72f2bf_042e173f…` | `forged-components-ev__3` | 7 |
| /forged-components-ev | `jq1y2` | 4 | `72f2bf_6550445e…` | `forged-components-ev__4` | 5 |
| /forged-components-ev | `jq1y2` | 5 | `72f2bf_beda71e2…` | `forged-components-ev__5` | 1 |
| /forged-components-ev | `jq1y2` | 6 | `72f2bf_dafda806…` | `forged-components-ev__6` | 4 |
| /forged-components-ev | `jq1y2` | 8 | `72f2bf_b29a41be…` | `forged-components-ev__8` | 3 |
| /about-1 | `l95rc` | 1 | `72f2bf_da310a4f…` | `about-1__1` | 6 |
| /oil-and-gas | `xr827` | 1 | `72f2bf_eeb5e868…` | `oil-and-gas__1` | 4 |
| /forging-vs-casting | `cyo3l` | 2 | `72f2bf_7d4d7a11…` | `forging-vs-casting__2` | 4 |
| /about-1-1 | `slfrq` | 1 | `72f2bf_2cf71dfa…` | `about-1-1__1` | 3 |
| /about-1-1 | `slfrq` | 2 | `72f2bf_2cf71dfa…` | `about-1-1__1` | 3 |
| /about-1-1 | `slfrq` | 3 | `72f2bf_2cf71dfa…` | `about-1-1__1` | 3 |
| /forged-machined-components-vf | `owlox` | 1 | `72f2bf_bc179874…` | `forged-machined-components-vf__1` | 1 |
| /forged-machined-components-vf | `owlox` | 2 | `72f2bf_60c80a12…` | `forged-machined-components-vf__2` | 1 |
| /buying-forgings-from-india | `ztibo` | 1 | `72f2bf_b0690ef9…` | `buying-forgings-from-india__1` | 38 |
| /heat-treatment-metallurgy | `nwsbm` | 2 | `72f2bf_b4631705…` | `heat-treatment-metallurgy__2` | 3 |
| /forging-company-aurangabad | `dpizt` | 2 | `72f2bf_815d1cad…` | `forging-company-aurangabad__2` | 2 |
| /forging-company-aurangabad | `dpizt` | 7 | `72f2bf_adb3c9ef…` | `forging-company-aurangabad__7` | 1 |
| /forging-company-aurangabad | `dpizt` | 8 | `72f2bf_6d63e1f6…` | `forging-company-aurangabad__8` | 2 |

Native-text pages named by the coordinator (counts "60 CNC turning, 17 VMC, 2 HMC, 5 gear hobbing" in page text): /forging-manufacturer-india, /forging-manufacturer-pune, /forging-company-maharashtra, /suspension-components, /forged-components-railways. They are covered by `applyTextCorrections` (rules 1-12) on every page.

## 3. Assumptions NOT yet verified (each can fail)

1. **`src` setter on code-mode embeds.** Docs describe `HtmlComponent.src` for URL (site) mode; behaviour on an embed created with "Enter Code" is unknown. Also unknown: whether the `src` getter returns the filesusr URL for such embeds (matching depends on it). The Pune pilot code reads `c.src` the same way and has not been published yet, so there is no live evidence. Test with the LFull embed first (stage 1).
2. **Framing of `_functions` responses.** Wix may add `X-Frame-Options` / CSP `frame-ancestors` to `/_functions/*` responses, which would blank the iframe. Check in the browser console after stage 1. Velo docs also say HTTP functions are meant for server-to-server traffic [doc]; serving HTML to a browser iframe is off-label.
3. **iframe height.** The original embeds sit in a fixed-size Wix component; the corrected HTML is a copy of the original with text changes, so the layout should match, but wrapped or removed rows change content height. Check every swapped embed for scroll bars or clipping.
4. **Text setter reflow.** Setting `Text.html` can alter formatting (the Wix text-theme mapping). Compare before/after screenshots on the first pages.
5. **`wix-location.path`.** Used to evaluate page-specific rules (`^/suspension-components`, `history`, etc.). Not run on live.
6. **Rules that need the DOM have no native equivalent here:** the "Year Established 2013" cell-pair rule, `rows()` (hide capability-table rows in layer 2), and `img alt` rules. Those stay with the Custom Embed layer. hideText on a Text element removes the matching `p/li/h*` block, or collapses the whole element when the phrase is outside a block.
7. **SSR.** Whether `$w.onReady` text changes appear in the server HTML is documented as expected but not promised; verify with the workflow in section 4.
8. **Cache.** `max-age=300` on the embed response; browser/CDN caching may delay a corrected embed by up to 5 minutes (or more if Wix overrides it).

## 4. SSR / no-JS verification (after each publish)

Workflow `.github/workflows/ssr-check.yml` in the website repo (branch `ccr-6409486e-3vy613`): run via GitHub Actions "Run workflow" (workflow_dispatch) with the `paths` input, a space-separated list, e.g. `/forging-manufacturer-pune /forged-machined-components-vf`. It fetches each page with curl (no JS) and prints counts of `CNC Turning Centers`, `×60`, `varshaforging.com` (typo), `htmlComp-iframe`, `<h1`, and the filesusr html hashes, then uploads the raw HTML as artifact `ssr-html`.

Pass criteria per stage:
- Stage 1 (/forged-machined-components-vf): filesusr list no longer contains `bc179874…`; HTML contains `/_functions/embed/` only if the src swap is server-rendered (it may appear only client-side; absence in SSR is not a failure by itself, confirm in a JS browser or Firecrawl scrape).
- Pune: `CNC Turning Centers` count drops from 4 (W0 baseline) towards 0 if SSR applies the text setter; the filesusr list loses the swapped hashes. If the count stays 4 while the Firecrawl (JS) scrape shows corrected text, text corrections are client-side only; record that.
- Footer typo count `varshaforging.com` should be 0 if the masterPage fix is server-rendered.

## 5. Staged rollout

All steps need Yash to publish (Editor Publish; "Continue" in the modal). Wix syncs `main` into the site code; the W4 pilot commit is already on `main`.

**Stage 0, before anything:** do not merge `w5-embeds` until the W4 pilot is confirmed publishing cleanly (build check passes).

**Stage 1, one low-risk embed:** /forged-machined-components-vf, embed 1 ("LFull" to "Full"; 1 edit). Because the generator wires every page, for this stage create a throwaway branch from `w5-embeds` and, in its page files, leave the W5 blocks only in `Forged Machined Components.owlox.js` (revert all other `src/pages` files to `main`). Merge that to `main`, let Wix sync, publish.
  1. Open https://www.varshaforgings.com/_functions/embed/forged-machined-components-vf__1 in a browser: expect the corrected HTML (200, text/html). If 404, the site is not published with the new backend file.
  2. Open /forged-machined-components-vf: expect "Full" instead of "LFull", no scroll bars, no console error about frame-ancestors / X-Frame-Options.
  3. Firecrawl scrape (maxAge 0, waitFor 8000), then run ssr-check for the page.
  4. Note that this page's other embed (broaching, `__2`) is also in the page map; stage 1 may be limited to `__1` by deleting `__2` from that page's `W5_EMBEDS` constant. Native text rules also run on that page; they are lightweight but review the page once.
  If any check fails, stop and roll back (section 6). Assumptions 1-3 are answered here.

**Stage 2, Pune (highest risk first, DO NOT PUBLISH content):** merge the full `w5-embeds` branch (all page files), publish. Pune carries four swapped embeds (layout with machine counts, spec table, equipment table, lead-time) and the largest native-text rewrite. Verify: counts absent from embeds and from native text, `ssr-check` on `/forging-manufacturer-pune`, screenshots of each embed. The old collapse stays as the fallback.

**Stage 3, the rest:** the remaining 15 embed pages (India, Maharashtra, suspension-components, railways, radius/torque/V-link, EV, about-1, about-1-1, oil-and-gas, vs-casting, buying-from-India, heat-treatment, Aurangabad) plus native text on all other pages arrive with the same merge as stage 2. If staging is wanted, revert unwanted page files before the merge as in stage 1. After publish, run ssr-check for: `/forging-manufacturer-india /forging-company-maharashtra /suspension-components /forged-components-railways /buying-forgings-from-india /forged-components-ev /about-1 /about-1-1 /oil-and-gas`, and Firecrawl-scrape each for height and clipping.

**Stage 4, cleanup:** once the corrected embeds are confirmed live, remove the Pune stopgap collapse; update `website.md`, `FACTS`-linked logs, and retire the matching Custom Embed rules only after the native versions are verified.

## 6. Rollback

- Fastest, per page: in the repo, delete that page's `W5-BEGIN header` and `W5-BEGIN body` blocks (or `git checkout main -- "src/pages/<file>"`), push to `main`, publish. The page returns to its original embeds and text.
- Fastest, global: `git revert` the merge commit of `w5-embeds` on `main`, push, publish. This also restores the W4 state.
- A single bad embed: remove its hash from the page's `W5_EMBEDS` constant (the original filesusr embed shows again), push, publish.
- Emergency without code: the `_functions` URLs only affect embeds whose `src` was swapped; restoring the original embed from the Editor (Undo / site history) also works. The correction layer in Custom Embed is untouched by this work.
- If an embed shows blank: first suspect framing headers (assumption 2). The Pune collapse fallback does not help then (the embed was swapped); use the per-page rollback.
- Rolling back leaves the backend files harmless: `/_functions/embed/*` is only reachable by a direct URL.
