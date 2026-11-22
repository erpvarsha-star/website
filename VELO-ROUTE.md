# VELO-ROUTE: fixing text inside HTML embeds via Velo + GitHub

Research and design only (22 Nov 2026). Nothing pushed to `VflWebsite`, nothing written to Wix.
Evidence tags: **[doc]** = read in Wix docs (URL given), **[measured]** = Firecrawl rawHtml (maxAge 0) or local CLI run, **[unverified]** = needs a test before we rely on it.

## 1. Answers

### Q1. Can Velo page code change what an HTML embed shows?
- **`src` setter: yes, by docs.** `$w('#id').src = 'https://...'` "sets the website that's displayed in the HTML Component"; must be HTTPS. [doc] https://dev.wix.com/docs/velo/velo-only-apis/$w/html-component/src
- **No API reads or edits the embedded code itself.** The HTML Component is "a sandboxed environment (an iframe) that doesn't have direct access to the other elements on your page". [doc] https://dev.wix.com/docs/velo/velo-only-apis/$w/html-component/introduction
- **`postMessage` / `onMessage`:** exist, but only help if the embedded HTML has a `window.onmessage` listener. Ours do not, and we cannot edit them. Not usable. [doc] https://dev.wix.com/docs/velo/velo-only-apis/$w/html-component/on-message
- **Hide / collapse:** `hide()`, `collapse()`, `show()`, `expand()`, `delete()` exist on HtmlComponent. [doc] https://dev.wix.com/docs/velo/velo-only-apis/$w/html-component (member list). Removes the embed, does not correct it.
- Note the sibling type `IFrame` has no `src`; only `HtmlComponent` does. [doc] https://dev.wix.com/docs/velo/velo-only-apis/$w/iframe
- **[unverified] whether `src` setter works on an embed in "code" mode** (docs describe it for "site" mode). Needs one pilot on one embed.
- **Practical consequence:** the route is "swap `src` to a corrected HTML file we host", not "edit in place".

### Q2. Is the embed source in the repo or readable/writable via CLI?
- **No.** Repo layout is `src/pages`, `src/backend`, `src/public`, `wix.config.json` (+ `velo.dependencies.json`). Design/UI (including embed code) is not in git; `wix.config.json` only pins a `uiVersion`. [doc] https://support.wix.com/en/article/velo-understanding-your-sites-github-repository (also seen in `/home/user/vflwebsite`, 1 commit, no UI files). [measured]
- Embed code lives in Wix static storage: the live iframes point at `https://www-varshaforgings-com.filesusr.com/html/72f2bf_<hash>.html`. [measured]
- CLI (`@wix/cli` 1.2.15, installed in scratchpad, `wix --help` run inside the repo dir): commands are `dev, install, login, logout, preview, publish, uninstall, whoami, token, account` plus `sync-types`. Nothing reads/writes embed HTML. [measured]
- Only the **Local Editor** (`wix dev`) can change design/embed code, and it is a browser editor, so it is the same click-work as the normal Editor. [doc] https://support.wix.com/en/article/velo-working-with-the-local-editor-beta ("The Local Editor allows you to make changes to your site's design")

### Q3. How do we get the Velo element IDs without the Editor?
- **Rendered HTML does not carry them.** Each embed wrapper is `<div id="comp-XXXX"><wix-iframe><div class="..." title="Embedded Content" name="htmlComp-iframe" src="https://...filesusr.com/html/72f2bf_<hash>.html">`. `comp-XXXX` is the render id, not the Velo nickname (`#html1`). [measured] Pune example: `comp-mscxleug` -> `72f2bf_67e78ccd...html`. No `data-` attribute with the Velo id appeared.
- **Page id is in the DOM**, so we can map URL to code file: CSS names like `ContainerlgtlqinlineContent` give the page id. [measured]
- **Best route: `wix sync-types`.** `package.json` already runs it on `postinstall`. Reading the CLI source: it fetches the page data for the repo's `uiVersion` and writes per-page declarations under `.wix/types/<pageId>/` (gitignored). [measured: CLI bundle `chunk-GVWZOIK3.js` `syncRevisionTypes`/`syncTypesForPages`]. Needs login (see Q4). I could not run it: `wix login` device-code request failed from this sandbox ("Failed to issue a login device code"). **[unverified]** what those `.d.ts` files list for each embed (expected: id + type `HtmlComponent`).
- **Do not depend on IDs at all.** `$w('HtmlComponent')` selects by type and returns an array; each element exposes `id` and (for HtmlComponent) `src`. [doc] https://dev.wix.com/docs/velo/velo-only-apis/$w/$w. So page code can match each embed by its current `src` hash, which we already have from rawHtml. **[unverified]** that the `src` getter returns the filesusr URL for code-mode embeds; fallback is a one-off diagnostic publish that logs `id` + `src` to site logs.
- Docs routes (`wix dev` local editor) all need the owner's login/browser.

### Q4. After a push to `main`, what does publishing need?
- Push to the default branch syncs code into the Editor ("There may be a delay"). It does **not** publish. [doc] https://dev.wix.com/docs/develop-websites/articles/workspace-tools/developer-tools/git-integration-wix-cli-for-sites/publishing-a-site-with-git-integration-wix-cli-for-sites
- Two publish options: **Editor Publish button** (code = default branch, UI = latest UI version; a modal may ask to Continue), or **`wix publish`** (needs `wix login`).
- `wix login` is an interactive **device-code** flow (owner approves in a browser). [measured: CLI tried to issue a device code]
- **Automation option:** `wix login --api-key <token>` for CI. [measured: `wix login --help`] A GitHub Actions workflow can run `npm run wix publish` on push to main. [doc] https://dev.wix.com/docs/develop-websites/articles/workspace-tools/developer-tools/git-integration-wix-cli-for-sites/set-up-git-hub-actions-to-work-with-the-wix-cli-for-sites . One-time owner work: create an API key (API Keys Manager, permission "Wix CLI for Sites - Git Integration") and store it as a repo secret. Needs the owner's yes before use; no spend involved.
- `wix publish` flags: `--source local|remote`, `-y` (approve preview), `-f`. [measured]
- Publishing code with errors triggers a build check. [doc] https://support.wix.com/en/article/publishing-a-site-with-code

### Q5. Does `$w` text replacement render server-side (non-JS crawlers)?
- Docs: rendering is split in two; "The first cycle ... happens server-side and the second cycle happens client-side. When not possible, all rendering happens client-side." [doc] https://dev.wix.com/docs/sdk/frontend-modules/window/rendering/introduction
- Warmup-data doc adds: SSR happens when a visitor **initially enters** the site, not on page-to-page navigation, and **never in Preview**. [doc] https://dev.wix.com/docs/sdk/frontend-modules/window/warmup-data/set
- So `$w.onReady` changes to native elements (`text`, `html`, `link`) are *expected* in the SSR HTML, but the docs do not promise it. **[unverified].** Test: publish the pilot, then fetch the live URL **without JS** and grep. This sandbox's proxy blocks direct curl and Firecrawl runs JS, so run the check from a GitHub Actions job (curl) or ask the owner for "view-source".
- **Important limit:** SSR only helps native elements. Text inside an embed is a separate document, so non-JS crawlers see only the `<iframe src=...>`, not the text, in either state. The embed text is mainly a human-visitor and Google-render problem. [measured: embed text is not in the page DOM, it is a cross-origin iframe document] (Firecrawl's output inlines iframe content, which a plain HTML fetch would not.)

## 2. Affected embeds (measured 22 Nov 2026, Firecrawl rawHtml, maxAge 0)

URL -> page id -> code file. Page id read from DOM class names. "Candidate" = embed text contains one of: LFull, 0.5, CNC Turning Centers, VMC, Hobbing, Stainless, 2500, 08:00, Monday. Keyword hit only; each needs a content review before we call it wrong.

| URL | Code file in `src/pages/` | Embeds | Candidates |
|---|---|---|---|
| /forging-manufacturer-pune | `Forging Manufacturer Pune.lgtlq.js` | 7 | 3: layout `comp-mscxleug`, spec `comp-mscxlev8` (08:00, Monday), equipment `comp-mscxlevk` |
| /forged-machined-components-vf | `Forged Machined Components.owlox.js` | 2 | 2: `comp-mnmtf25j` (LFull), `comp-mnmtn5gw` |
| /oil-and-gas | `Oil, Gas, & Industrial Infrastructure .xr827.js` | 1 | 1: `comp-ms8ywwcd` |
| /about-1 | `Closed Die Forging.l95rc.js` | 1 | 1: `comp-ms8uwirq` |
| /about-1-1 | `Automotive Forgings Supplier Hub.slfrq.js` | 3 | 3, **all the same source file** `72f2bf_2cf71dfa...` |
| /forging-company-aurangabad | `Forging Company in Aurangabad.dpizt.js` | 8 | 3: `comp-msa2ffri`, `comp-msa2785r`, `comp-msa6lzgh` |
| /torque-rod-assemblies | `Torque Rod Assemblies.wu1va.js` | 3 | 1: `comp-msd80hor` |
| **Total** | | **25** | **14 candidate embeds** |

Caution: slug-to-file mapping is from DOM page ids and file names, not from the Editor. Confirm with one diagnostic publish.

## 3. Routes, ranked (cheapest reliable first)

### (a) Velo-only: swap `src` to corrected HTML we host. Recommended.
How: for each candidate embed, we author corrected HTML (from FACTS.md only), host it at an HTTPS URL, and page code sets `c.src = <url>` (match by current `src` hash via `$w('HtmlComponent')`). Hosting options for the corrected HTML (must be HTTPS and frameable):
1. GitHub Pages on a repo we control (free, already in our toolchain). **[unverified]** frames cleanly in Wix.
2. A Velo `http-functions.js` endpoint on the site returning `text/html`. **[unverified]** headers/CSP behaviour.
(Wix Media cannot host HTML for this.) Future corrections = edit a file, push, publish. No more embed pasting ever.
- Owner clicks: **one-time ~2** (approve device code, or ~8 to set up an API key + repo secret for 0 per release); **per release 3** (open Editor, Publish, Continue). Zero per-embed clicks.
- Risks: `src` setter on code-mode embeds unverified (pilot one embed first); iframe height/styling must match (we copy the original HTML and edit text only); SSR unverified.

### (a-lite) Velo-only stopgap: `collapse()` the DO-NOT-PUBLISH embeds. No hosting needed.
Pune layout + equipment, vf x2, about-1, Aurangabad `msa6lzgh`: `c.collapse()` removes machine counts from view at once. Costs: the whole embed (useful content) disappears. Good as an emergency measure while (a) is built. Clicks same as (a): 3 per release. **[unverified]** whether collapsed iframe markup is still emitted in HTML.

### (b) Velo + one-time owner paste of a thin loader into each embed
Owner pastes a tiny shim into each of the 14 candidate embeds (Enter Code, select all, paste, Apply = about 5 clicks each, so about 70) + 3 to publish. The shim `fetch()`es or re-frames corrected content from our host, so later fixes need no clicks. Strictly worse than (a) unless the `src` setter fails on code-mode embeds. If we do (b), prepare the exact HTML per embed so the owner only pastes.
Fallback variant: paste corrected full HTML directly into each embed (same ~70 clicks, but every future fix costs clicks again).

### (c) Other
- Rebuild the tables as native Wix elements in the Editor (largest owner effort, best for SEO, text would be in page DOM and SSR). Many clicks; only if (a) is blocked and we want crawler-visible text.
- Embed-layer (browser JS) cannot reach these iframes (cross-origin). Already established in `corrections/RULES.md` Round 2 limits.

### Click summary

| Route | One-time owner clicks | Per release | Per embed | Total for 14 embeds, first release |
|---|---|---|---|---|
| (a) src swap | 2 (device code) or ~8 (API key, then 0 per release) | 3 (or 0 with CI) | 0 | 5 |
| (a-lite) collapse | same as (a) | same | 0 | 5 |
| (b) loader paste | same as (a) | 3 | ~5 | ~75 |
| (c) rebuild native | 0 | 3 | tens | far higher |

## 4. Pilot draft: footer email href typo (NOT committed, NOT pushed)

Target file when approved: `/home/user/vflwebsite/src/pages/masterPage.js` (footer is global, so it belongs in masterPage). Evidence the footer has both a Button and rich-text link: rawHtml shows `<a data-testid="linkElement" href="mailto:marketing@varshaforgings.com" ... aria-label="Mail">` (a Stylable Button) and `<a href="mailto:..." class="wixui-rich-text__text">` (a Text). The live page currently shows the correct address only because the browser embed layer rewrites it; the stored source still has the typo per `corrections/RULES.md` href rule 1. [measured]

```js
// masterPage.js (DRAFT, pilot). Fixes marketing@varshaforging.com -> marketing@varshaforgings.com.
// Matches by element TYPE, so no Editor-assigned IDs are needed.
const BAD = /marketing(@|%40)varshaforging\.com/i;
const GOOD = 'marketing@varshaforgings.com';

$w.onReady(function () {
  // Buttons: setting .link before any onClick handler runs.
  $w('Button').forEach((b) => {
    try {
      const l = b.link;
      if (l && BAD.test(l)) {
        b.link = l.replace(new RegExp(BAD.source, 'ig'), GOOD);
      }
    } catch (e) { /* element has no link: ignore */ }
  });

  // Text elements: fix the mailto href and any visible typo, keep other markup.
  $w('Text').forEach((t) => {
    try {
      const h = t.html;
      if (h && BAD.test(h)) {
        t.html = h.replace(new RegExp(BAD.source, 'ig'), GOOD);
      }
    } catch (e) { /* ignore */ }
  });
});
```

APIs confirmed to exist in docs:
- `$w.onReady()` and `$w('Type')` array-by-type selection: https://dev.wix.com/docs/velo/velo-only-apis/$w/$w
- Button `link` getter/setter, mailto supported: https://dev.wix.com/docs/velo/velo-only-apis/$w/button/link
- Text `html` getter/setter: https://dev.wix.com/docs/velo/velo-only-apis/$w/text/html

Pilot checks before trusting it:
1. [unverified] `$w('Button')` matches Stylable Buttons in the footer, and `$w('Text')` the rich-text link. Check via Firecrawl scrape of the published home page after Publish.
2. Setting `html` can reflow formatting ("maps the Editor's built-in text themes to HTML and CSS"); compare a screenshot before/after.
3. Getter returns an *encoded* URL, so the regex accepts `@` or `%40`.
4. SSR check per Q5 (curl from a GitHub Actions job).
5. The HtmlComponent `src` swaps are page-specific, so they go in each page's own code file (list in section 2), not in masterPage.js.

## 5. Next steps (for the orchestrator)
1. Owner: approve one-time Wix CLI login (device code), or create an API key for CI (his yes needed).
2. Run `wix sync-types` in a session with login, read `.wix/types/<pageId>/` to confirm what IDs/types are listed.
3. Pilot on one low-risk embed (Pune "Logistics" or Aurangabad) to prove the `src` setter on code-mode embeds, then the DO-NOT-PUBLISH ones.
4. Per candidate embed, content-review the text against FACTS.md, then author corrected HTML and choose host.
