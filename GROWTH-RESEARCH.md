# Growth Research — Landing Pages & Prompts (23 Nov 2026)

Deep research against `FACTS.md`, competitor scraping, and buyer-intent search landscape. Every recommendation is filtered through the FACTS gates: hot closed-die only, 1–25 kg, 800–2,500 T presses, IATF 16949 + RDSO, Since 1989, no CIN, no machine counts, no warm/cold forging, no stainless, no aerospace.

---

## Part 1 — New landing pages (highest value first)

These target search intents competitors rank for and Varsha does not. Each maps to verified FACTS only.

| # | Page slug | Target query | Why | FACTS basis |
|---|---|---|---|---|
| L1 | /tie-rod-end-forgings | "tie rod end forging manufacturer India" | Shivam Forge ranks with a dedicated deep page (applications by vehicle type, grades EN8/EN19T/EN24T, 100% MPI, PPAP). Varsha makes tie rods, drag links, ball joints — no dedicated page. | Products [Y]: tie rods, drag links, ball joints, steering levers; grades EN8–EN24; 100% MPI on safety-critical; PPAP L1–5 |
| L2 | /railway-forgings-rdso | "RDSO approved forging supplier India" | RDSO approval is a hard differentiator few rivals can claim; buyers search the vendor list. Current /railway is generic. | Certifications [Y]: RDSO approved; products: bogie guide links, traction rods, brake levers, drawbar hooks, damper brackets |
| L3 | /forging-supplier-germany-europe | "forging supplier India for Germany / Europe OEM" | Shivam Forge ranks with country-specific export pages (Germany). Varsha exports to Germany, Spain, Italy, Portugal, Austria. | Export markets [Y]; EN 10204 3.1/3.2 certs; LC/advance terms; JNPT port; ISPM-15 |
| L4 | /truck-trailer-suspension-forgings | "truck suspension forgings India / V-link torque rod manufacturer" | Hendrickson-style heavy suspension content; Varsha already has V-link/torque-rod/radius-rod pages but no umbrella commercial-vehicle suspension page. | Products [Y]: V-links, torque rods, radius rods, axle mounts; customers Daimler/Ashok Leyland/MAN/Scania |
| L5 | /forged-steering-knuckles | "forged steering knuckle manufacturer India" | High-value safety-critical part buyers search by part name; no Varsha page targets it. | Products [Y]: steering knuckles, idler arm, sector shaft, drop arm |
| L6 | /prototype-low-volume-forgings | "low volume forging supplier India / prototype forgings" | Most Indian forges demand high MOQ; Varsha accepts prototype and low-volume enquiries — a real wedge for overseas buyers testing India sourcing. | RFQ [Y]: prototype and low-volume accepted; 48 h feasibility per single drawing |
| L7 | /agricultural-machinery-forgings | "tractor / agriculture forgings India" | John Deere, TAFE, Escorts are customers; agriculture is a named industry with no dedicated landing page. | Industries [Y]; customers [L]; products: gear blanks, shafts, linkage parts |
| L8 | /oil-gas-valve-flange-forgings | "valve body flange forging India A105 LF2" | A105/LF2/F11/F22 grades confirmed; oil & gas named industry; buyers search by ASTM grade. | Materials [Y]: A105, LF2, F11, F22; products: flanges, valve bodies |

**L1 + L2 STATUS — LIVE 26 Nov (blog channel):** https://www.varshaforgings.com/post/tie-rod-end-forgings-from-india-hot-closed-die-traceable-ppap-ready · https://www.varshaforgings.com/post/rdso-approved-railway-forgings-from-india-hot-closed-die-fully-traceable. Static-page versions still need Editor-created pages (P7 pattern).

**Build note:** L1, L2, L3, L6 first — biggest gap vs. competitors, strongest FACTS backing. All need one Text element if the page is new (P7 lesson); build via the W6 pattern.

**L3 STATUS — LIVE 23 Nov (blog channel):** owner waived review ("you're the expert"), full line-by-line FACTS audit passed and logged. Published via content-ops blog publish as a blog post (static-page version still needs an Editor-created page, queued with P7): https://www.varshaforgings.com/post/a-proven-indian-forging-partner-for-german-and-european-manufacturers — verified live: 0 banned terms, all key claims present. Lesson: blog v3 draft-posts requires `memberId` (resolve from an existing post); publish endpoint returns 200 without a `post` object — verify by curl, not by response shape. German version drafted (`content-drafts/DE-buyers-guide-DRAFT.md`), held for native-speaker review before publishing; hreflang pairing when it goes live.

## Part 2 — Blog posts (buyer-intent prompts to own)

Live posts already: /post/precision-forging-cost-what-drives-the-price, /post/how-to-source-closed-die-forgings-from-india-a-buyer-s-guide, /post/a-proven-indian-forging-partner-for-german-and-european-manufacturers (L3). Saturday agent rotation updated to this list.

| # | Working title | Prompt/query it answers | Angle |
|---|---|---|---|
| B1 | Forging vs Casting vs Machining: a buyer's decision guide | "forging vs casting which is better for my part" | High search volume, multiple competitors rank; Varsha version uses real tolerance data (forging ±0.5 mm, machining ±0.02 mm) and lifecycle-cost framing |
| B2 | What PPAP Level do you need from a forging supplier? | "PPAP levels explained forging" | Varsha offers PPAP L1–5 — few Indian forges can; Tenneco-style submission depth is a trust signal |
| B3 | EN19 vs EN24 vs 42CrMo4: choosing a steel grade for forged steering parts | "EN19 EN24 difference tie rod" | Grade-selection content wins engineering buyers; maps to L1/L5 |
| B4 | RDSO approval: what it means when sourcing railway forgings from India | "RDSO approved vendor forgings" | Owns the railway niche; pairs with L2 |
| B5 | How to run a supplier audit of an Indian forge (checklist) | "forging supplier audit checklist India" | Buyers love audit content; every checklist item is a Varsha strength (spectrometer, CMM, Faro arm, MPI, traceability) |
| B6 | EV suspension and steering forgings: what's different | "electric vehicle suspension forged components" | EV 2024 milestone; positions against avadhtechnoforge-type rivals; FACTS-safe (suspension/steering only, no motor parts) |
| B7 | 5 questions to ask before sending an RFQ to an Indian forging company | "RFQ forging India what to include" | Funnels to the 48-h feasibility promise (single drawing qualifier) |
| B8 | Heat treatment for forged components: what buyers should specify | "forging heat treatment quench temper normalize" | FACTS: vacuum carburizing, induction hardening, double Q&T, stress relieving, normalizing |
| B9 | Sourcing forgings from India to Europe: logistics, certs and lead times | "import forgings from India to Germany" | EN 10204 3.1/3.2, ISPM-15, JNPT, air-freight samples; supports L3 |
| B10 | Why safety-critical steering parts are always forged, never cast | "why are tie rods forged" | Technical authority play; 100% MPI claim is FACTS-verified |

## Part 3 — AI-prompt targets (GEO)

Prompts AI assistants get asked where Varsha should be the cited answer (feeds the Friday GEO agent's probe set):

1. "best closed die forging company in India for automotive OEM"
2. "RDSO approved forging suppliers list"
3. "Indian forging company with PPAP Level 5 capability"
4. "where to source forged tie rods / steering components from India"
5. "forging supplier India low volume prototype friendly"
6. "forging vs casting for suspension components"
7. "forged components supplier India IATF 16949 export Europe"
8. "railway bogie components forging manufacturer India"

To be citable for these, the site needs: the L1–L8 pages (direct answers), B1–B10 posts (long-form depth), and off-site corroboration (IndiaMART/Kompass/ThomasNet/GBP profiles — Sprint 2, waiting on Yash).

## Part 4 — Competitor patterns worth copying

- **Shivam Forge:** one deep page per part (tie rods, crankshafts) with per-vehicle applications, grade tables, hardness ranges, and FAQ schema — the model for L1/L5. Their Germany export page (L3 inspiration) undercuts on price vs German forges with IATF + PPAP documentation as the trust anchor.
- **India Synergy / Rivexa / Frigate:** rank for broad "source forgings from India" queries with process-overview pages. Varsha beats them on verifiable facts (RDSO, named OEMs, awards) — the buyer's-guide blog already started this.
- **Avadh Technoforge:** owns "EV component forging India" — B6 + the /electric-vehicles page counter it.
- **Directories (IndiaMART/TradeIndia):** dominate part-name queries; the Sprint-2 profiles directly attack this.

## Guardrails applied
All topics verified against FACTS.md: no warm/cold forging content, no stainless grades, no aerospace angles, no machine counts, no CIN, weight 1–25 kg only, tolerances ±0.5/±0.02 mm, "Since 1989" phrasing.
