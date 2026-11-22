# SSR check, before Velo pilot (22 Nov 2026)
Source: GitHub Actions run https://github.com/erpvarsha-star/website/actions/runs/45064870801 (job 137338669127), plain curl, browser UA, no JS. Raw HTML in artifact `ssr-html` (id 14770463226).

| Path | HTTP | bytes | varshaforging.com (typo) | varshaforgings.com | CNC Turning Centers | ×60 | htmlComp-iframe | filesusr html hashes | <h1 |
|---|---|---|---|---|---|---|---|---|---|
| / | 200 | 940,428 | 2 | 99 | 2 | 0 | 0 | none | 2 |
| /forging-manufacturer-pune | 200 | 1,511,176 | 2 | 122 | 4 | 0 | 0 | none | 9 |
| /contact-us-1 | 200 | 1,259,257 | 4 | 99 | 4 | 0 | 0 | none | 1 |

Findings
- The stored/SSR HTML still contains the email typo (2-4 per page), so non-JS crawlers see it today; the Velo masterPage fix is the right test.
- No `htmlComp-iframe` or filesusr embed URLs appear in the non-JS HTML: embeds are injected client-side. "CNC Turning Centers" appears 4 times on Pune in SSR, so some count text lives in native or inline markup, not only in the two embeds. `×60` is 0 (it exists only inside an embed, visible with JS).
- Implication: the collapse() stopgap hides the embeds for browsers; it does not change the SSR text above.
