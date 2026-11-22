# W5 verification and W7 results (22 Nov 2026)

## W5 verification (Velo release, publish run 45068992337)
| Check | Result |
|---|---|
| Publish run 45068992337 (VflWebsite 272441f) | success |
| Pages checked | 17 of 17 |
| Flagged embeds | swapped to `/_functions/embed/<key>` on all 17 pages; unflagged embeds left as they were |
| Visible DNP / conflict hits | 0 on every page |
| Embed endpoints | 3 of 3 return the corrected content |
| H1 count vs baseline | about-1-1 6 -> 5, v-link 1 -> 2, ev raw 1 -> 2, maharashtra 3 -> 1, aurangabad 8 -> 1 (to review in W6) |
| No-JS check | had not yet run at the time of the W5 verdict (run below under W7) |

## W7: slim the browser layers (22 Nov 2026)
Text rules now live only in Velo (`src/public/corrections-rules.js`). The browser layers keep only what Velo cannot do. The full old rule source is kept for the Velo generator in `corrections/rules-src/layer-1.js` and `layer-2.js` (not served to browsers).

| Embed | Revision | Size (html chars) | Contents |
|---|---|---|---|
| VF Corrections Layer `546ea6cc-003e-41ef-a6f8-97e23f614e77` | 5 -> 6 | 13,429 -> 1,007 | img alt rules (4), mailto href backup |
| VF Corrections Layer 2 `8733abc0-12cc-47f5-bf5a-41d7ee045d64` | 5 -> 7 | 14,576 -> 2,726 | Year Established cell-pair rule, `rows()` row hiding, dnp iframe-hide stopgap |

Layer 2 went to revision 6 first, then to 7 because the first PATCH turned `\u` escapes into literal characters. Revision 7 read back with 0 non-ASCII characters and 8 `\u` escapes, and equals the local file wrapped in `<script>`. Both layers are enabled, BODY_END, loadOnce. Machine-count regex hits in both layers: 0.

Velo: the machine-count rules in `corrections-rules.js` now use `\d+` patterns, with no literal count. Old and new rules give identical output on the 9 live wordings tested, and the rule count is still 136. `grep` over `src/` for literal counts: 0 hits. `npx eslint src` exit 0. The generator leaves only that one file changed. VflWebsite commit `3a62db4`. Publish run 45069516062 succeeded.

## W7: no-JS check (ssr-check run 45069569237, website d77d034)
| Page | typo | x60 | 0.5 kg | vf-diag | "60 CNC" | "17 VMC" | h1 |
|---|---|---|---|---|---|---|---|
| / | 0 | 0 | 0 | 0 | 0 | 0 | 2 |
| /forging-manufacturer-pune | 0 | 0 | 0 | 0 | **1** | 0 | 1 |
| /contact-us-1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| /forged-machined-components-vf | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| /oil-and-gas | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| /forging-company-aurangabad | 0 | 0 | **1** | 0 | 0 | 0 | 1 |
| /about-1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |

## W7: Firecrawl (maxAge 0, waitFor 20000)
| Page | Result |
|---|---|
| /forging-manufacturer-pune | "CNC Turning Centers" 1, "60 CNC" 1, "17 VMC" 0, "2 HMC" 0, typo 0, x60 0, vf-diag 0, 4 `_functions/embed` refs. The 1 hit is the FAQ answer "The Pune (Markal, Khed) facility houses over 60 CNC turning centers, 17 Vertical Machining Centers ..." |
| /forging-company-aurangabad | "60 CNC" 0, "17 VMC" 0, typo 0, vf-diag 0, 3 `_functions/embed` refs; FAQ answer "ranging from lightweight 0.5 kg precision parts up to heavy-duty 50 kg" present (1) |

## Open finding
Both leftovers sit in Wix FAQ-app answers (Ricos `content-viewer` blocks), which neither the Velo Text rules nor the HTML-embed swap reach. They are in the server HTML, so crawlers read them.
- Pune FAQ "What machining capabilities are available at Varsha Forgings' Pune facility?" holds the DNP machine counts. It is the only remaining "60 CNC" hit in the 7 pages checked; the text reads "17 Vertical", so the "17 VMC" grep misses it.
- Aurangabad FAQ "What weight range of forged components can Varsha Forgings manufacture?" says 0.5 kg up to 50 kg and conflicts with FACTS (1-25 kg).
Fix path: Wix FAQ API Update Question Entry (not done in W7, outside its scope). The same FAQ text may be on other pages, so a site-wide FAQ query is needed.
