# W3 gate review: corrected HTML embeds and F28 draft

Reviewer: Haiku 5.5 (read-only). Checked against `FACTS.md` (including DO NOT PUBLISH) and `PHASE3-PLAN.md`.
Scope: 60 pairs `embeds/original/X.html` to `embeds/corrected/X.html` on 17 pages, plus `content-drafts/f28-thin-pages-alloy-steel-machined-steering-DRAFT.md`.

Method:
- Visible text: scripts and styles removed, tags stripped, entities decoded, then compared word by word (difflib).
- Markup: tag sequence and attributes compared pair by pair; `<script>`/`<style>` blocks compared; tag balance checked on every corrected file; `<table>`/`<tr>`/`<td>` counts compared.
- Corrected text scanned for the owner's forbidden list (machine counts, weights, tolerances, stainless, ASME, EN/UIC/AAR, China/MOQ, EV motor/RPM, hours, 2013, Shore A, CIN, BMW/KTM, aerospace, subsea, warm/cold/open-die, superlatives) and read in full for claims not in FACTS.
- Per CLAUDE.md, pre-existing claims that are not in FACTS and do not conflict with it are listed as FLAG (owner yes/no batch), not FAIL. FAIL means a conflict with FACTS or DO NOT PUBLISH, an unbacked superlative or comparative, invented text, or a markup change beyond deleted rows.

## Totals

| Item | Count |
|---|---|
| Embed pairs reviewed | 60 (17 pages) |
| PASS | 50 |
| FAIL | 10 |
| Pairs with at least one edit (word-diff opcodes > 0) | 41 (19 unchanged) |
| FAIL-level issues in corrected pairs (in 10 pairs) | 17 |
| Draft: FAIL-level issues | 6 (in 3 sections) |
| Draft: word-count gate (`scripts/check-wordcount.sh 550`) | PASS on all 3 sections (909, 640, 718 words) |

Markup, measured across all 60 pairs:
- No unclosed or unmatched tags in any corrected file.
- `<script>`/`<style>` content identical in all 60 pairs.
- Tag attributes and non-deleted tags identical in 59 pairs. The only changes are deleted tags.
- `<tr>`/`<td>` deltas match the deleted rows in 7 pairs (about-1__1, forged-components-ev__2, __3, __8, forged-components-railways__7, oil-and-gas__1, v-link-assemblies__2). Each deleted row's cell count matches the td delta (for example, `forged-components-ev__3`: 3 rows of 5 cells, td 25 to 10).
- `buying-forgings-from-india__1`: fails the text-only rule. See the FAIL below.

Note: the word-level opcode count is 227 (the INDEX.md figure is 175 edit operations). Counting differs, and the per-pair counts agree with INDEX.md (41 with corrections, 19 without).

## Per-file results

Each row shows the page, the embed number, the word-diff opcodes, the result, and the main note. "flags" are pre-existing claims that are not in FACTS, for the owner's yes/no batch.

| File | Ops | Result | Note |
|---|---|---|---|
| about-1-1__1.html | 7 | PASS | Weight, tolerance and 2D/3D corrected. Flag: "Full CAD/CAM manufacturing design pipelines" |
| about-1-1__2.html | 7 | PASS | Same text as __1. Same flag |
| about-1-1__3.html | 7 | PASS | Same text as __1. Same flag |
| about-1__1.html | 10 | **FAIL** | Materials list conflicts with FACTS "all grades currently listed" (see F1) |
| buying-forgings-from-india__1.html | 35 | **FAIL** | Four issues, including markup (see F2) |
| forged-components-ev__1.html | 4 | PASS | Levels 1–5 and no motor parts. Flags: "[NVH-Optimized Bushing Integration]", "[EV CAD / FEA Optimization]" |
| forged-components-ev__2.html | 4 | PASS | RPM row removed. Flag: "Silent motor exposes road/chassis NVH" (general EV text, not a Varsha part claim). Flag: vehicle mass figures "Engine block ~150–300 kg", "Battery pack ~300–600 kg" |
| forged-components-ev__3.html | 7 | **FAIL** | "micro-alloyed steels" (see F3). Motor and gearbox rows removed, weights 1–25 kg correct |
| forged-components-ev__4.html | 7 | PASS | Vacuum carburizing and suspension/steering scope correct. Flag: hardness targets "Case: 58–64 HRC; Core: 30–45 HRC", "Quench & temper 30–36 HRC" |
| forged-components-ev__5.html | 2 | **FAIL** | "Micro-alloyed steel substitution" and "EV range optimization" (see F4) |
| forged-components-ev__6.html | 6 | **FAIL** | "Motor Harmonic Dampening" and "Antioxidant/Antiozonant formulations" (see F5) |
| forged-components-ev__7.html | 0 | PASS | Unchanged. Flag: "(including EV-specific annex requirements)" |
| forged-components-ev__8.html | 3 | PASS | RPM and micron rows removed. Flags: test acceptance criteria "-40°C to +150°C thermal shock, 500 cycles", "within ±10% of target", "Salt spray (ASTM B117) 500+ hours" |
| forged-components-railways__1.html | 5 | PASS | EN/UIC and Charpy removed, UT 100% removed. Flags: "[FEA Load Simulation]", "Protective Coating" |
| forged-components-railways__10.html | 5 | PASS | 15+/20+ year and Charpy removed. Flags: "Thick-Film Epoxy Primer", "Polyurethane Topcoat" |
| forged-components-railways__2.html | 1 | PASS | "30+ Year Operational" removed. Flag (general engineering, wording): "Zero Internal Porosity or Shrinkage Voids Compared with Cast Alternatives" |
| forged-components-railways__3.html | 3 | PASS | Weight 1–25 kg, warm forging removed, presses correct |
| forged-components-railways__4.html | 5 | PASS | Machine counts removed (capability only) |
| forged-components-railways__5.html | 0 | PASS | Unchanged. Flag: "Spherical Bearing Integration" |
| forged-components-railways__6.html | 1 | PASS | Charpy row relabelled. Flags: "Weldability Validation", "Pull Testing", "Tensile Testing, Fatigue Cycling" |
| forged-components-railways__7.html | 2 | PASS | UIC and AAR rows removed, "RDSO (approved)" correct |
| forged-components-railways__8.html | 0 | PASS | Unchanged. Flags: "High Dynamic Fracture Toughness", "Consistent Mechanical Properties Across Batch" |
| forged-components-railways__9.html | 4 | PASS | 100% volumetric UT and EN 1369, EN 12668 removed. Flags: "ASTM E1444", "ASTM E165" |
| forged-machined-components-vf__1.html | 1 | **FAIL** | "Lower logistics cost and faster lead time." (see F6) |
| forged-machined-components-vf__2.html | 1 | PASS | Broaching vendor label added. Flag: none significant |
| forging-company-aurangabad__1.html | 0 | PASS | Unchanged. Flags: "[Descaling]", "Flash Trimming" |
| forging-company-aurangabad__2.html | 3 | PASS | Weight 1–25 kg; hours "Saturday–Thursday (closed Friday), 09:00–18:00 IST" match FACTS |
| forging-company-aurangabad__3.html | 0 | PASS | Unchanged. Flag: "Induction furnaces with pyrometer-controlled zones" |
| forging-company-aurangabad__4.html | 0 | PASS | Unchanged. Presses 800 T–2,500 T correct. Flag: "High-speed CNC die-sinking VMCs" (capability label, no count) |
| forging-company-aurangabad__5.html | 0 | PASS | Unchanged. Software and die steels match FACTS |
| forging-company-aurangabad__6.html | 0 | PASS | Unchanged. Flag: heat-treatment temperature windows "850°C – 900°C, air cool" and similar, not in FACTS |
| forging-company-aurangabad__7.html | 1 | PASS | "100%" qualified. Flag: "Optical Emission Spectrometer" (FACTS names the Baird vacuum emission spectrometer) |
| forging-company-aurangabad__8.html | 3 | PASS | "100% on safety-critical parts" correct. Flags: "Microstructural grain flow analysis", "CMM dimensional layout on first-off and periodic samples" |
| forging-company-maharashtra__1.html | 6 | PASS | Machine counts removed. Flag: "VMC Machining (4/5-axis)" |
| forging-company-maharashtra__2.html | 6 | **FAIL** | "India's largest automotive ecosystem" (see F7). Flags: "High-Volume Heat Treatment", "Located in the heart of the Marathwada industrial belt" |
| forging-company-maharashtra__3.html | 1 | PASS | EV row limited to suspension and steering. Flag: "Industrial Engineering" |
| forging-manufacturer-india__1.html | 5 | PASS | RDSO-Approved, Levels 1–5, EV scope correct. Flags: "SAE/AISI Material Equivalency", "Direct Expressway Access", "Project-Based Custom Engineering" |
| forging-manufacturer-india__2.html | 13 | **FAIL** | Three issues (see F8). Flags: "~300 km from Aurangabad; ~150 km from Pune via Expressway", "Full Container Load (FCL) and Less-than-Container Load (LCL)", "Automated Shipping Notices (ASN), Digital Bill of Lading, Customs Integration", "Expertise in Forging to DIN, SAE, AISI, JIS, and BS Metallurgical Standards" |
| forging-manufacturer-pune__1.html | 5 | PASS | Machine counts removed. Flags: "[Ultrasonic Wash]", "[VCI Packaging]", "[Precision Boring]" |
| forging-manufacturer-pune__2.html | 4 | PASS | 2013 to 2007, ±0.02 mm, hours "Monday–Saturday (closed Sunday), 09:00–18:00 IST" match FACTS |
| forging-manufacturer-pune__3.html | 6 | PASS | Counts removed. Flag: "Ultrasonic Wash Systems" |
| forging-manufacturer-pune__4.html | 0 | PASS | Unchanged. Flags: "Surface Roughness Testers (Ra)", "Optical Profile Projectors" (not in FACTS equipment) |
| forging-manufacturer-pune__5.html | 0 | PASS | Unchanged. Flags: "Thread-Locking Application", "Volatile Corrosion Inhibitor (VCI) oil" |
| forging-manufacturer-pune__6.html | 0 | PASS | Unchanged. IATF 16949 and ISO 9001:2015 correct |
| forging-manufacturer-pune__7.html | 2 | PASS | "Feasibility Response Within 48 hours for a single drawing or part" correct. Flags: "Sequenced Line-Side Delivery", "VCI vacuum bags" |
| forging-vs-casting__1.html | 0 | PASS | Unchanged. General engineering diagram. Flag (wording): "no weak points" |
| forging-vs-casting__2.html | 6 | PASS | Forging ±0.5 mm and 1–25 kg correct. General comparison allowed. Flag: break-even figures "5,000 pieces" and "10 years" |
| heat-treatment-metallurgy__1.html | 0 | PASS | Unchanged. Flag: process temperatures "850–900°C", "820–880°C", "200–650°C" |
| heat-treatment-metallurgy__2.html | 4 | PASS | Charpy −40 °C and blanket 100% removed. Flags: "Charpy Impact ASTM E23 / EN ISO 148", "X-Ray Fluorescence (XRF)", "Wet Chemistry", "Tensile Test ASTM E8", "Bench-type fluorescent MPI", "ASTM E1382" |
| oil-and-gas__1.html | 7 | PASS | Stainless, ASME Class and EN 10243-1 removed; grades and weights correct. Flags: "Complete computer-monitored thermal tracking loops", "Ready for global midstream assembly integration" |
| radius-rod-assemblies__1.html | 0 | PASS | Unchanged. Flag: "Tire Life Extended" |
| radius-rod-assemblies__2.html | 5 | PASS | Weight 1–25 kg, MPI qualified. Flag: "Anti-Corrosion Primers, Protective Coatings" |
| radius-rod-assemblies__3.html | 0 | PASS | Unchanged. Application categories are general |
| suspension-components__1.html | 13 | **FAIL** | Competitor negative claim (see F9). Flags: "VCI Oil, Vacuum Bags, Export Crating", "Heavy Transport" |
| torque-rod-assemblies__1.html | 0 | PASS | Unchanged. Flag: "Elastomeric Bush" (in-house or vendor not stated) |
| torque-rod-assemblies__2.html | 6 | **FAIL** | NR bonding and phosphating (see F10). Flag: "Industrial Enamel" |
| torque-rod-assemblies__3.html | 0 | PASS | Unchanged. Flag: "Luxury Coaches" |
| v-link-assemblies__1.html | 0 | PASS | Unchanged. Flag: "Dual-Axis Axle Control in Single Compact Module" |
| v-link-assemblies__2.html | 4 | PASS | RPM row removed. Flag: "Silent motor exposes road/chassis NVH" |
| v-link-assemblies__3.html | 0 | PASS | Unchanged. Flag: "Compact V-Link" |

## FAIL issues, quoted verbatim

- **F1. about-1__1.html.** "Carbon Steel Grades EN8, EN9, SAE 1018, SAE 1045, C45". FACTS says "Carbon and alloy steels, all grades currently listed" and gives a different list. SAE 1018 and C45 are not listed. SAE 1045 is not listed either (FACTS has AISI 1045). The INDEX.md file had this as "flagged, not changed". It conflicts with FACTS, so it must be fixed now.
- **F2. buying-forgings-from-india__1.html.**
  - (a) "Forging + machining under one roof". Conflicts with FACTS: forging is at Aurangabad and machining and assembly at Pune, and machining is partly vendor-extended.
  - (b) "India's largest container port". Unbacked superlative, not in FACTS.
  - (c) Markup, not text-only. The comparison table was 27 rows of 3 cells (72 td). It is now 23 rows of 2 cells (40 td), a column was removed, and a new row boundary was inserted in one cell replacement. Only 4 rows were deleted, so the cell changes go beyond deleted rows. Must be re-done as a text-only change.
- **F3. forged-components-ev__3.html.** "EN19, 42CrMo4, micro-alloyed steels". This is a material outside FACTS' "all grades currently listed" list.
- **F4. forged-components-ev__5.html.**
  - "Micro-alloyed steel substitution replacing heavier cast iron or welded assemblies with high-strength forged alternatives." Material outside the FACTS list, and an unbacked comparison.
  - "Varsha Forgings supports EV range optimization through:". Unbacked performance claim about EV range, not in FACTS.
- **F5. forged-components-ev__6.html.**
  - "Motor Harmonic Dampening" with the solution "Bushes tuned for dynamic stiffness". This is an EV motor-area product claim. FACTS limits EV scope to suspension and steering parts and says no motor parts.
  - "Antioxidant/Antiozonant formulations with metal bonding". Rubber formulation claim, not in FACTS. Rubber bonding is a vendor process.
- **F6. forged-machined-components-vf__1.html.** "Lower logistics cost and faster lead time." Unbacked comparative claim, not in FACTS.
- **F7. forging-company-maharashtra__2.html.** "Positioned adjacent to India's largest automotive ecosystem". Unbacked superlative about the Pune plant.
- **F8. forging-manufacturer-india__2.html.**
  - (a) "Pan-India Manufacturing & Global Export Readiness". Conflicts with FACTS: there are two plants, both in Maharashtra.
  - (b) "Varsha Forgings acts as the primary Indian manufacturing node for highly specialized component families." Unbacked superlative.
  - (c) "IMDS Submissions for REACH and RoHS Compliance". Compliance claim with REACH and RoHS, not in FACTS certifications. FACTS says "Certifications [Y]" and lists what is held.
- **F9. suspension-components__1.html.** "Unlike suppliers that only provide individual components, Varsha Forgings supports complete assembly solutions under one quality system." Negative claim about competitors. DO NOT PUBLISH.
- **F10. torque-rod-assemblies__2.html.**
  - (a) "Natural Rubber (NR) / Polymer Bonded Steel Inner & Outer Sleeves, Press-Fitted to Target Interference". FACTS says NR/SBR is not confirmed and must be removed.
  - (b) "Anti-Corrosion Primers, Industrial Enamel, Zinc-Phosphate Conversion". FACTS lists phosphating as a vendor process. The page presents it as Varsha's surface treatment with no vendor label.

## FLAG items (not FAIL; CLAUDE.md owner yes/no batch)

These are pre-existing claims not in FACTS that do not conflict with it. They remain live until the owner decides.
- Test and process specifications: forged-components-ev__8 ("-40°C to +150°C thermal shock, 500 cycles", "within ±10% of target", "Salt spray (ASTM B117) 500+ hours"); forged-components-ev__4 (HRC targets); forging-company-aurangabad__6 and heat-treatment-metallurgy__1 and __2 (temperature windows); heat-treatment-metallurgy__2 ("Charpy Impact ASTM E23 / EN ISO 148", "X-Ray Fluorescence (XRF)", "Wet Chemistry", "Tensile Test ASTM E8").
- Coatings and finishes: forged-components-railways__10 ("Thick-Film Epoxy Primer", "Polyurethane Topcoat"); radius-rod-assemblies__2 ("Anti-Corrosion Primers, Protective Coatings"); torque-rod-assemblies__2 ("Industrial Enamel").
- Equipment and process steps: forging-manufacturer-pune__4 ("Surface Roughness Testers (Ra)", "Optical Profile Projectors"); forging-manufacturer-pune__1 and __3 ("Ultrasonic Wash"); forging-manufacturer-pune__5 ("Thread-Locking Application"); forging-manufacturer-pune__7 ("Sequenced Line-Side Delivery", "VCI vacuum bags"); forging-company-aurangabad__1 ("Descaling"); forging-company-maharashtra__1 ("VMC Machining (4/5-axis)").
- Logistics: forging-manufacturer-india__2 ("~300 km from Aurangabad; ~150 km from Pune via Expressway", "Full Container Load (FCL) and Less-than-Container Load (LCL)", "Automated Shipping Notices (ASN), Digital Bill of Lading, Customs Integration"); forging-manufacturer-india__1 ("Direct Expressway Access").
- Materials equivalency: forging-manufacturer-india__1 ("SAE/AISI Material Equivalency"); forging-manufacturer-india__2 ("Expertise in Forging to DIN, SAE, AISI, JIS, and BS Metallurgical Standards").
- Unverified performance wording: radius-rod-assemblies__1 ("Tire Life Extended"); v-link-assemblies__1 ("Dual-Axis Axle Control in Single Compact Module"); forged-components-railways__8 ("High Dynamic Fracture Toughness", "Consistent Mechanical Properties Across Batch").
- Customer and market: torque-rod-assemblies__3 ("Luxury Coaches"); forging-company-maharashtra__2 ("Located in the heart of the Marathwada industrial belt", "High-Volume Heat Treatment").
- EV scope: forged-components-ev__7 ("IATF 16949 — Automotive quality management (including EV-specific annex requirements)"); forged-components-ev__2 and v-link-assemblies__2 ("Silent motor exposes road/chassis NVH"; vehicle mass figures "Engine block ~150–300 kg", "Battery pack ~300–600 kg"); forged-components-ev__1 ("[NVH-Optimized Bushing Integration]").
- Other: about-1-1__1 to __3 ("Full CAD/CAM manufacturing design pipelines"); forging-company-aurangabad__7 ("Optical Emission Spectrometer", whereas FACTS names the Baird vacuum emission spectrometer); oil-and-gas__1 ("Complete computer-monitored thermal tracking loops", "Ready for global midstream assembly integration"); forged-components-railways__9 ("ASTM E1444", "ASTM E165"); buying-forgings-from-india__1 ("Fluent English; direct technical calls", "Time Zone to Europe +4.5 to +5.5 hours (business overlap)", "Strong legal framework; enforceable contracts", "Forgeable Material Range DIN / SAE / AISI / JIS / BS equivalency").
- General engineering, allowed under the owner rule: forging-vs-casting__1 ("no weak points"); forging-vs-casting__2 (break-even figures); forged-components-railways__2 ("Zero Internal Porosity or Shrinkage Voids Compared with Cast Alternatives"). The absolute wording should still be softened.

## Invented facts check (new text in corrected pairs)

No inserted text in any corrected pair is a new company claim absent from both FACTS and the original, with the exception of the wording listed under F2(a) and F8(a). Every inserted replacement was traced to FACTS (weights, tolerances, capacity, hours, press list, rubber bonding via partner, vendor processes, PPAP Levels 1–5, RDSO approved, 2D/3D drawings, 48 h single-drawing feasibility, JNPT, ISPM-15, GPS tracking, EN 10204, ASTM E112, MPI 100% on safety-critical parts). Everything else in the flags above was already in the original.

## F28 draft: content-drafts/f28-thin-pages-alloy-steel-machined-steering-DRAFT.md

Result: **FAIL** (6 issues). The word-count gate passes.

Quoted verbatim:
- **D1.** "SimuFact Forming 15.0 simulates metal flow before dies are cut." The process sequence "before dies are cut" is not in FACTS. FACTS says only "SimuFact Forming 15.0 (simulation)".
- **D2.** "Send your drawing, in 2D or 3D, with material grade and annual volume." (alloy steel page). Intake requirement not in FACTS. FACTS confirms only "2D and 3D drawings".
- **D3.** "Send a 2D or 3D drawing with material grade and annual volume through the Request for Quote page or marketing@varshaforgings.com." (forged-machined page). Same invented requirement, plus a "Request for Quote page" that is not in FACTS. The email address is in FACTS.
- **D4.** "Send a 2D or 3D drawing, material grade and annual volume." (steering page). Same invented requirement.
- **D5.** "Buyers deal with one company accountable for the finished part, instead of coordinating a forge, a heat treater and a machine shop separately." Company benefit claim not in FACTS.
- **D6.** "No. Broaching is carried out by vendor partners under Varsha Forgings' quality control." The "under Varsha's quality control" qualifier is confirmed in FACTS only for rubber bonding. Applying it to broaching is a new claim.

Flags in the draft (not FAIL):
- "Die design and programming use Creo 3.0, BricsCAD and Dell Cam 3D programming software". FACTS lists the software; the use per task is an inference.
- "Vendors support CNC, VMC and HMC machining". Capability labels with no counts. Passes the DO NOT PUBLISH rule.

Checked and correct: plant hours, 1–25 kg, ±0.5 mm and ±0.02 mm, 12,000 t and 3 million pieces, 800 T–2,500 T presses, 1–3 MT hammers, EN 10204 3.1/3.2, PPAP Levels 1–5, 48 h single-drawing feasibility, RDSO approved, no stainless, no ASME, no UIC/AAR, no Shore A, no CIN, no BMW/KTM, no 2013, no China or MOQ, no EV motor or RPM. General-engineering explanations are allowed under the owner rule and were not counted.

## Summary

- Embed pairs: 60 reviewed, 50 PASS, 10 FAIL (17 issues, quoted above).
- Draft: FAIL (6 issues). Word-count gate: PASS.
- Markup: all 60 pairs balanced and script/style identical; buying-forgings-from-india__1 fails the text-only rule.
- The 10 FAIL files: about-1__1, buying-forgings-from-india__1, forged-components-ev__3, forged-components-ev__5, forged-components-ev__6, forged-machined-components-vf__1, forging-company-maharashtra__2, forging-manufacturer-india__2, suspension-components__1, torque-rod-assemblies__2.
- Recommendation: fix the FAIL items and re-run this gate before W4/W5 uses these embeds. Batch the FLAG list to the owner for yes/no.

## Opus decision 22 Nov 2026

Rule: change only claims that conflict with FACTS or the DO NOT PUBLISH list. Fixed (text only, see INDEX.md): F2 (a, b), F5, F8 (a), F9, F10. Every other item below is left as is, marked [L].

- [L] F1 about-1__1 materials list
- [L] F2(c) buying-forgings-from-india__1 table markup (column removed; not reverted)
- [L] F3 forged-components-ev__3 "micro-alloyed steels"
- [L] F4 forged-components-ev__5 micro-alloyed substitution; "EV range optimization"
- [L] F6 forged-machined-components-vf__1 "Lower logistics cost and faster lead time."
- [L] F7 forging-company-maharashtra__2 "India's largest automotive ecosystem"
- [L] F8(b) "primary Indian manufacturing node"; F8(c) "IMDS Submissions for REACH and RoHS Compliance"
- [L] All FLAG items and draft issues D1 to D3 and the rest
