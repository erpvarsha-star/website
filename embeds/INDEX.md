# Corrected HTML-embed index (W3)

Source: each page's `rawHtml` (Firecrawl, maxAge 0, waitFor 8000) contains every embed's source inline inside the iframe wrapper (`title="Embedded Content"`). One iframe URL (`/suspension-components` embed 1) was also scraped directly from filesusr.com and returned the same source. Files are saved exactly as served: markup and inline styles are unchanged except the edited text.

- `embeds/original/<page>__<n>.html`: source as served. `embeds/corrected/<page>__<n>.html`: corrected copy.
- A "change" is one edit operation (a replaced phrase, cell, list item or deleted table row). Edits follow FACTS.md only; nothing was added that FACTS does not back.
- `about-1-1__1`, `__2`, `__3` are the same iframe src used three times on the page.

| Page | # | iframe src | Changes | Summary |
|---|---|---|---|---|
| /forging-manufacturer-pune | 1 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_67e78ccdca212a0b2190ce8f60a915e2.html | 2 | Machine counts replaced by capability labels; broaching marked as vendor process |
| /forging-manufacturer-pune | 2 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_5991452384d1b9015baa852473fdcd24.html | 3 | Pune established 2013 to 2007; machining tolerance to ±0.02 mm; hours to 09:00–18:00, closed Sunday |
| /forging-manufacturer-pune | 3 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_cf35346801ce140403d76fe7f1fd6dcc.html | 7 | Quantity column (60/17/2/5) replaced by in-house / vendor-partner capability; broaching shown as vendor process |
| /forging-manufacturer-pune | 4 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_a610bbc9c560eba3df27f46963972008.html | 0 | No FACTS conflicts found; unchanged |
| /forging-manufacturer-pune | 5 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_aeec7f3bba61bbbed0beed350866d1a9.html | 0 | No FACTS conflicts found; unchanged |
| /forging-manufacturer-pune | 6 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_b1f36bf257301ad906a5b7c973a5e80c.html | 0 | No FACTS conflicts found; unchanged |
| /forging-manufacturer-pune | 7 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_613d3382ee456f48db8164a5d143e507.html | 2 | Unqualified 24–48 h lead-time promise replaced by FACTS 48 h feasibility response (single drawing/part) |
| /forging-manufacturer-india | 1 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_392e237bff657f531d848442eae12d16.html | 4 | EV motor shafts/gear blanks removed; RDSO wording; PPAP Levels 1–5; unsupported EN-standard and JIT shipping wording replaced |
| /forging-manufacturer-india | 2 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_d992c508cc40d51b88281b2aed22d5a2.html | 7 | Capacity per FACTS; weight 1–25 kg; machine counts removed; PPAP Levels 1–5; in-house vulcanization to rubber-bonding partner; EV driveline gear blanks removed |
| /forging-company-maharashtra | 1 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_7edffdcc5cf367d5eb7fa8f0e4694fa4.html | 4 | Machine counts in plant diagram replaced by capability labels |
| /forging-company-maharashtra | 2 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_71d1f1bfef94d8cf335f2c0b66a417de.html | 3 | Pune 2013 to 2007; machine counts to capability wording; in-house vulcanization claim to rubber-bonding partner |
| /forging-company-maharashtra | 3 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_5d4ca8b0fd7bb80eec5e5c48ee61be34.html | 1 | EV row limited to suspension and steering (no EV drivetrain parts per FACTS) |
| /suspension-components | 1 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_42c4a400cf66a23961212513b3795a02.html | 10 | Machine counts to capability; weight 1–25 kg; tolerance ±0.02 mm; HMC via vendor; EPDM/in-house bonding wording removed |
| /forged-components-railways | 1 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_2ded29a9cd25540bf7ebd2f6da4a365a.html | 4 | EN/UIC drawing review, 100% UT and Charpy -40 °C steps removed |
| /forged-components-railways | 2 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_d99130940c6f8c1ea27fa4d74876dc48.html | 1 | Unconfirmed 30+ year life removed |
| /forged-components-railways | 3 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_02073a429587b1d34066be037406ef40.html | 2 | Warm forging removed; weight 1–25 kg |
| /forged-components-railways | 4 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_6e0a302f0bf9ca7e285876de78a946df.html | 5 | Machine counts replaced by in-house / vendor-partner capability |
| /forged-components-railways | 5 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_2e16589661e0644907e2bf43014f9b70.html | 0 | No FACTS conflicts found; unchanged |
| /forged-components-railways | 6 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_82cc7ca5fa68bc0cf1aba2be01611dee.html | 1 | Charpy validation removed |
| /forged-components-railways | 7 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_6d865dd288f8eadf297646288d813c89.html | 3 | UIC and AAR rows removed (not held); RDSO shown as approved |
| /forged-components-railways | 8 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_4fde56e6262fcec5141445c41685e44a.html | 0 | No FACTS conflicts found; unchanged |
| /forged-components-railways | 9 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_322e326c7e4acf6657173eee09d043ec.html | 4 | 100% volumetric UT and EN standards removed; MPI 100% limited to safety-critical parts |
| /forged-components-railways | 10 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_69b89584b9f548927674ac4caaf6099d.html | 3 | Charpy -40 °C paragraph replaced with FACTS testing; unconfirmed 15+/20+ year durability claims removed |
| /radius-rod-assemblies | 1 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_7fccc84bada64ee844dab104524b994d.html | 0 | No FACTS conflicts found; unchanged |
| /radius-rod-assemblies | 2 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_236a8b7676cbae89fbc45c6ddc2a1cf9.html | 3 | Thread rolling to vendor; weight 1–25 kg; MPI 100% qualified |
| /radius-rod-assemblies | 3 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_f2a0314b83b9225ea58ec8e36f0bc605.html | 0 | No FACTS conflicts found; unchanged |
| /torque-rod-assemblies | 1 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_15a7e8af33d70df1d9ce6d2545f36b8f.html | 0 | No FACTS conflicts found; unchanged |
| /torque-rod-assemblies | 2 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_21e75576bd4bb8267ffd72038e35792c.html | 4 | Broaching to vendor; weight 1–25 kg; Shore A removed; MPI 100% qualified |
| /torque-rod-assemblies | 3 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_ae2cc88cd8704eeeca5b488bcb57e908.html | 0 | No FACTS conflicts found; unchanged |
| /v-link-assemblies | 1 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_81544659ee101b4b55e5be3d68a317be.html | 0 | No FACTS conflicts found; unchanged |
| /v-link-assemblies | 2 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_6fac8c229475165a3b7129085bc75eb5.html | 4 | Motor-speed/RPM row and torsional-shock/hollow-forging claims removed |
| /v-link-assemblies | 3 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_9c3d2e0b9453577c3b67a4b7fb92dc73.html | 0 | No FACTS conflicts found; unchanged |
| /forged-components-ev | 1 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_fceccef7aceaa8945caca730506c3e87.html | 3 | Hollow forging and gear hobbing steps removed; PPAP Levels 1–5 |
| /forged-components-ev | 2 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_6fac8c229475165a3b7129085bc75eb5.html | 4 | Motor-speed/RPM row and torsional-shock/hollow-forging claims removed |
| /forged-components-ev | 3 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_042e173f10157450fb9870e69c8a4976.html | 7 | Motor shaft, gear blank and structural rows removed (not offered); weights 1–25 kg |
| /forged-components-ev | 4 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_6550445ec02f647090091cbc536ef8e2.html | 5 | EV gear blank, gearbox shaft and motor/rotor shaft applications replaced with suspension and steering parts |
| /forged-components-ev | 5 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_beda71e271fea26b3429ce3efa2cfdda.html | 1 | Hollow forging and 15–30% mass claim replaced by FACTS simulation software |
| /forged-components-ev | 6 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_dafda806c2826a99eed05d33573437b6.html | 4 | Shore A and NR/SBR specs removed; motor harmonic and 15-year/300,000 km claims removed |
| /forged-components-ev | 7 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_5ccac1271333a85e0dc67e70a8afcceb.html | 0 | No FACTS conflicts found; unchanged |
| /forged-components-ev | 8 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_b29a41be4bf4d0f713437f2463ac821f.html | 3 | 12,000 RPM gear-blank row removed; drive-shaft fatigue row reworded |
| /about-1 | 1 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_da310a4f3a4d318bc2ca14d93692cde9.html | 6 | Weight, press range, tolerances per FACTS; stainless row removed; broaching to vendor; zero-defect superlative removed |
| /oil-and-gas | 1 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_eeb5e86883296e4d6c1ebe50055a4ed0.html | 4 | Stainless grades, ASME Class 150–2500 row and EN 10243-1 removed; weight 1–25 kg |
| /forging-vs-casting | 1 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_1a4434661b5c8b76e23dde0da1e205c5.html | 0 | No FACTS conflicts found; unchanged |
| /forging-vs-casting | 2 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_7d4d7a113f546025a026307097b4b664.html | 4 | Forging tolerance ±0.5 mm; weight 1–25 kg; 30+ year life removed |
| /about-1-1 | 1 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_2cf71dfa6b222f0ebb6b443ea6ba294d.html | 3 | Weight 1–25 kg; EN 10243-1 Grade F replaced by FACTS tolerances; STEP/IGES/Parasolid to 2D and 3D drawings (all 3 instances are identical) |
| /about-1-1 | 2 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_2cf71dfa6b222f0ebb6b443ea6ba294d.html | 3 | Identical to about-1-1__1 (same iframe src) |
| /about-1-1 | 3 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_2cf71dfa6b222f0ebb6b443ea6ba294d.html | 3 | Identical to about-1-1__1 (same iframe src) |
| /forged-machined-components-vf | 1 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_bc179874446f1380b2fea320e0512c20.html | 1 | Typo LFull to Full |
| /forged-machined-components-vf | 2 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_60c80a12d568ab8c77046b9cd6edf8a8.html | 1 | Broaching marked as vendor process |
| /buying-forgings-from-india | 1 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_b0690ef9ff92162af2867790a5648e6d.html | 38 | China comparison column, MOQ, lead times, freight days, tariff/currency claims removed; rewritten as Varsha strengths from FACTS |
| /heat-treatment-metallurgy | 1 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_e3881114786b55b77006a4a456f6b3f7.html | 0 | No FACTS conflicts found; unchanged |
| /heat-treatment-metallurgy | 2 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_b4631705d3fd6b5aecfaf145eaf5f48b.html | 3 | Charpy -40 °C and blanket 100% claims removed |
| /forging-company-aurangabad | 1 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_311c6f7c78757586d5299469d031eab5.html | 0 | No FACTS conflicts found; unchanged |
| /forging-company-aurangabad | 2 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_815d1cad9a978c1e52331625961c6167.html | 2 | Weight 1–25 kg; hours to 09:00–18:00, closed Friday |
| /forging-company-aurangabad | 3 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_00f33c5bca1de0ea4dc9ac61a346eeac.html | 0 | No FACTS conflicts found; unchanged |
| /forging-company-aurangabad | 4 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_2b516425ead2c189e4c36514951f3c13.html | 0 | No FACTS conflicts found; unchanged |
| /forging-company-aurangabad | 5 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_8738fde483d6e6cb0b13e99362d6ed92.html | 0 | No FACTS conflicts found; unchanged |
| /forging-company-aurangabad | 6 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_0ece39aaf9d8ba1d6906d9e6283477ae.html | 0 | No FACTS conflicts found; unchanged |
| /forging-company-aurangabad | 7 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_adb3c9ef87f66b3ce798a8bd24d948d0.html | 1 | Blanket 100% claim removed |
| /forging-company-aurangabad | 8 | https://www-varshaforgings-com.filesusr.com/html/72f2bf_6d63e1f65e388dbd1fee8e1907d15da8.html | 2 | Blanket 100% claims limited per FACTS |

**Totals:** 60 embeds on 17 pages, 41 with corrections, 19 with no FACTS conflict found, 175 edit operations.

## Flagged, not changed (not in FACTS but not in conflict; for owner yes/no per CLAUDE.md)
- `about-1__1`: carbon grades SAE 1018 and C45 (FACTS lists EN8, EN9, AISI 1045 and others).
- `forging-manufacturer-india__2`: ~300 km / ~150 km distance to JNPT; ASN, digital bill of lading, customs integration; FCL/LCL.
- `forging-manufacturer-pune__4`, `__5`, `__1`: surface roughness testers, VCI packaging, ultrasonic wash (not in FACTS equipment list).
- `forged-components-ev__4`: hardness targets (HRC values); `__8`: thermal-cycle, salt-spray, stiffness acceptance criteria.
- `forged-components-railways__9`: Liquid Penetrant Inspection row; `__6`: tensile/fatigue/pull testing columns.
- `heat-treatment-metallurgy__2`: XRF, wet chemistry, tensile, Charpy, fatigue and DPI rows; temperature ranges.
- `buying-forgings-from-india__1`: time-zone offsets, DIN/SAE/AISI/JIS/BS equivalency row.
- `forging-vs-casting__2`: forging vs casting percentages (general engineering) and break-even figures (5,000 pieces, 10 years).
- `forged-machined-components-vf__1`: "Lower logistics cost and faster lead time".
