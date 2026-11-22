# Diagnostic run 1, verification (rerun on bf6ed6c and ssr-check 8704fd6)

Recorded 2026-11-22 by the verification agent. Quoted values are verbatim from the source named on each line.

## 1. Publish site workflow (erpvarsha-star/VflWebsite)

- Run: https://github.com/erpvarsha-star/VflWebsite/actions/runs/45067724253 (id 45067724253, run_number 2)
- Commit: bf6ed6c616615bf0d6e7a57a5892e37fd0909eb2 ("Publish workflow: fail fast if API key secret is missing")
- Status: completed. Conclusion: **failure**. Started 2026-11-22T20:40:10Z, finished about 20:40:32Z.
- Per-step result:
  - Secret check (`Run if [ -z "$WIX_CLI_API_KEY" ]`): **FAILED**. Quoted log lines:
    - `env:` / `WIX_CLI_API_KEY: ` (empty value in the job environment)
    - `##[error]Repository secret WIX_CLI_API_KEY is missing or empty`
    - `##[error]Process completed with exit code 1.`
  - Login (`npx wix login --api-key`): **not reached** (skipped after the secret check failed).
  - Publish: **not reached**.
- Earlier run a892ff1 (run 45067391428, run_number 1) failed at login with empty `WIX_CLI_API_KEY` and an Ink raw-mode error. Same root cause: the repository secret is not available to the run.
- Conclusion: the `WIX_CLI_API_KEY` secret is still missing or empty for erpvarsha-star/VflWebsite. The owner's manual Editor publish is the only publish that has happened.

## 2. Firecrawl live checks (maxAge 0, waitFor 20000)

### https://www.varshaforgings.com/

- `<meta name="vf-diag"` (verbatim, from metadata):
  `{"v":"diag-1","s":"master","env":"backend","html":[],"btn":{"n":4,"vf":0},"txt":{"n":46,"vf":0},"kept":15}`
- `<meta name="vf-diag-pune"`: **absent** on the home page (expected, only the Pune page carries it).
- `7edffdcc5c` in rawHtml: **yes**, but only inside an inline script array (`var DH=['7edffdcc5c', '71d1f1bfef', ...]`), not as a served embed element. Not in the markdown.
- `×60` in markdown: not checked on the home page (not in the brief).
- `#comp-mscxleug` / `#comp-mscxlevk`: **no element** with those ids in the home-page rawHtml. The ids appear only inside script text.

### https://www.varshaforgings.com/forging-manufacturer-pune

- `<meta name="vf-diag"` (verbatim, from metadata):
  `{"v":"diag-1","s":"master","env":"backend","html":[{"id":"html2","src":"https://www-varshaforgings-com.filesusr.com/html/72f2bf_67e78ccdca212a0b2190ce8f","type":"$w.HtmlComponent"},{"id":"html1","src":"https://www-varshaforgings-com.filesusr.com/html/72f2bf_5991452384d1b9015baa8524","type":"$w.HtmlComponent"},{"id":"html3","src":"https://www-varshaforgings-com.filesusr.com/html/72f2bf_cf35346801ce140403d76fe7","type":"$w.HtmlComponent"},{"id":"html4","src":"https://www-varshaforgings-com.filesusr.com/html/72f2bf_a610bbc9c560eba3df27f469","type":"$w.HtmlComponent"},{"id":"html5","src":"https://www-varshaforgings-com.filesusr.com/html/72f2bf_aeec7f3bba61bbbed0beed35","type":"$w.HtmlComponent"},{"id":"html6","src":"https://www-varshaforgings-com.filesusr.com/html/72f2bf_b1f36bf257301ad906a5b7c9","type":"$w.HtmlComponent"},{"id":"html7","src":"https://www-varshaforgings-com.filesusr.com/html/72f2bf_613d3382ee456f48db8164a5","type":"$w.HtmlComponent"}],"btn":{"n":2,"vf":0},"txt":{"n":49,"vf":0},"kept":11}`
- `<meta name="vf-diag-pune"` (verbatim, from metadata):
  `{"v":"diag-1","s":"pune","env":"backend","html":[{"id":"html2","src":"https://www-varshaforgings-com.filesusr.com/html/72f2bf_67e78ccdca212a0b2190ce8f","type":"$w.HtmlComponent"},{"id":"html1","src":"https://www-varshaforgings-com.filesusr.com/html/72f2bf_5991452384d1b9015baa8524","type":"$w.HtmlComponent"},{"id":"html3","src":"https://www-varshaforgings-com.filesusr.com/html/72f2bf_cf35346801ce140403d76fe7","type":"$w.HtmlComponent"},{"id":"html4","src":"https://www-varshaforgings-com.filesusr.com/html/72f2bf_a610bbc9c560eba3df27f469","type":"$w.HtmlComponent"},{"id":"html5","src":"https://www-varshaforgings-com.filesusr.com/html/72f2bf_aeec7f3bba61bbbed0beed35","type":"$w.HtmlComponent"},{"id":"html6","src":"https://www-varshaforgings-com.filesusr.com/html/72f2bf_b1f36bf257301ad906a5b7c9","type":"$w.HtmlComponent"},{"id":"html7","src":"https://www-varshaforgings-com.filesusr.com/html/72f2bf_613d3382ee456f48db8164a5","type":"$w.HtmlComponent"}],"btn":{"n":2,"vf":0},"txt":{"n":49,"vf":0},"kept":12}`
- `7edffdcc5c` in rawHtml: **yes**, same inline script array as the home page. Not in the markdown.
- `×60` in markdown: **yes**. Rendered line: `[CNC Turning Centers ×60] → [VMC ×17] → [HMC ×2]`. `×60` is also in rawHtml.
- `#comp-mscxleug`: `<div id="comp-mscxleug" class="O5G82F comp-mscxleug" style="display: none !important;">` (hidden).
- `#comp-mscxlevk`: `<div id="comp-mscxlevk" class="O5G82F comp-mscxlevk" style="display: none !important;">` (hidden).

### Owner-rule flag (DO NOT PUBLISH)

- The rendered Pune page shows the machine counts `CNC Turning Centers ×60`, `VMC ×17`, `HMC ×2`. FACTS.md DO NOT PUBLISH covers CNC/VMC/HMC machine counts. This is a **conflict**, not a new claim from this run. Not fixed here (verification only). Needs a correction-layer rule and a decision by the owner.

## 3. ssr-check (erpvarsha-star/website, branch ccr-6409486e-3vy613)

- Trigger commit: 8704fd6f52504d900aa61efe8d1c73c977ed9427 ("Trigger SSR check for diagnostic verification run"). `.github/ssr-trigger` set to `Sun Nov 22 20:41:19 UTC 2026`.
- Push: the first push went through (9698c74..8704fd6), no rejection, no pull needed.
- Run: https://github.com/erpvarsha-star/website/actions/runs/45067844229 (run_number 3). Conclusion: **success**. Job `check`, all steps success.
- Pages fetched by curl in the workflow (no JS):

| Path | HTTP | bytes | varshaforging.com (typo) | varshaforgings.com | CNC Turning Centers | ×60 | htmlComp-iframe | `<h1` |
|---|---|---|---|---|---|---|---|---|
| / | 200 | 984122 | 0 | 110 | 4 | 0 | 0 | 2 |
| /forging-manufacturer-pune | 200 | 1543604 | 0 | 128 | 4 | 0 | 0 | 1 |
| /contact-us-1 | 200 | 1298042 | 0 | 113 | 4 | 0 | 0 | 1 |

- Typo counts: `varshaforging.com` = **0** on all three pages.
- Filesusr html hashes on the Pune page (no-JS): 72f2bf_5991452384d1b9015baa8524, 72f2bf_613d3382ee456f48db8164a5, 72f2bf_67e78ccdca212a0b2190ce8f, 72f2bf_a610bbc9c560eba3df27f469, 72f2bf_aeec7f3bba61bbbed0beed35, 72f2bf_b1f36bf257301ad906a5b7c9, 72f2bf_cf35346801ce140403d76fe7. The home page printed none.
- Artifact: `ssr-html`, artifact id 14771943295, 688013 bytes. Download from the verification environment was **blocked** by the agent proxy (blob storage host, 403), so the file contents were not inspected directly.
- **Is vf-diag present in the no-JS HTML?** **Not verified.** The ssr-check job does not grep for `vf-diag`, and the artifact could not be downloaded. The rendered (JS) pages do carry `vf-diag` in metadata (section 2), which is not the same test. Next step: add `grep -c 'vf-diag'` to the ssr-check step, or allow the blob host so the artifact can be read.

## 4. DNP stopgap state

- The correction layer applies in the browser, so the rendered page is the only place the stopgap shows. Rendered Pune page still shows `CNC Turning Centers ×60 / VMC ×17 / HMC ×2` (conflict above). The two hidden wrapper elements `comp-mscxleug` and `comp-mscxlevk` are `display: none !important` on the Pune page, so they are hiding something in the Pune page at least.
- Home page: the same two ids are not present as elements in the rendered HTML.
- No Wix write was made in this run. The Publish workflow failed before any publish step.

## Not done / blockers

- Publish cannot run until `WIX_CLI_API_KEY` is set in erpvarsha-star/VflWebsite (Settings, Secrets and variables, Actions). Owner action.
- No-JS `vf-diag` check needs either a workflow grep change or access to the blob host.
