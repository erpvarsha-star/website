# Pending — failed twice or blocked, do not retry without the listed unblock

Rule (owner instruction, 23 Nov 2026): **if a task fails more than once, stop, log it here, and move to the next task.** Review this file at the start of every session; retry an item only when its unblock condition is met.

## Blocked on a Wix API key with broader permissions
The current key (`WIXKEY` GitHub secret) covers only CLI publish. These need a key with **FAQ app + SEO tags** permissions, or a Yash click-list.

| # | Item | Exact change ready? | Unblock |
|---|---|---|---|
| P1 | FAQ: Pune answer "over 60 CNC turning centers, 17 VMCs" | Yes — replace with "a large in-house CNC machining capacity with turning, milling and drilling across shifts" | FAQ-permission key or 5-min FAQ-app edit |
| P2 | FAQ: Aurangabad "0.5 kg … up to 50 kg" | Yes — "1 kg to 25 kg" | same |
| P3 | FAQ: railways "Charpy … −40 °C" | Yes — delete sentence, keep "tested per customer specification" | same |
| P4 | FAQ: maharashtra "hot forging, warm forging, cold forging" | Yes — "hot closed-die forging" | same |
| P5 | FAQ: electric-vehicles "closed-die hot and warm forging" | Yes — "closed-die hot forging" | same |
| P6 | W8 SEO: titles/meta refresh for the 10 W6 pages; schema re-confirm on /about-1-1, /product, /electric-vehicles, /tool-manufactring | Page list ready in W6-DESIGN.md | SEO-tags-permission key |

## Blocked on Yash in the Wix Editor (no API/Velo path exists)

| # | Item | Why blocked |
|---|---|---|
| P7 | /product (hd575), /transmission-and-driveline (dqw97), /electric-mobility (jo7nt) body content | No body Text elements on these pages — Velo cannot inject. Add one Text element per page in the Editor; then Velo can fill it (drafts ready in content-drafts/) |
| P8 | Visible publication date on /assembly-services, /forging-company-aurangabad, /company-profile; visible byline on /assembly-services | Schema-level done 22 Nov; visible text is Editor-only |
| P9 | Homepage social icons point to facebook.com/wix and instagram.com/wix (template default) | Editor link swap |
| P10 | CSP header (Sited finding 7) | Wix platform-level on Classic sites — raise with Wix support |

## Key creation steps (for Yash, 5 minutes)
1. https://manage.wix.com/account/api-keys → Generate API Key, name it `Site content API`.
2. Site: varshaforgings.com. Permissions: **FAQ** (read/write) and **SEO** (read/write). Nothing else.
3. Store it as a GitHub secret named `WIX_CONTENT_KEY` in `erpvarsha-star/VflWebsite` (Settings → Secrets → Actions) and tell Claude it is there. **Never paste the key into chat.** Claude applies P1–P6 immediately and verifies with the ssr-check gates: "60 CNC" 0, "0.5 kg" 0, "Charpy" 0, "warm forging" 0, "cold forging" 0.
