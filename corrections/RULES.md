# Corrections layer rules (batch 1)

Deployed in two Wix custom embeds (Wix limits embed html to 15,000 characters):
- **VF Corrections Layer** `546ea6cc-003e-41ef-a6f8-97e23f614e77`, revision 2, source `corrections/embed-layer.js` (rules 1-76 of the text table, all hide and alt rules, mailto href fix)
- **VF Corrections Layer 2** `8733abc0-12cc-47f5-bf5a-41d7ee045d64`, revision 1, source `corrections/embed-layer-2.js` (remaining text rules)

Rule types: **text** = find/replace on text nodes, matched across inline spans within the nearest block element; **hideText** = hide the closest li/tr/p/heading containing the phrase; **attr** = img alt rewrite; **href** = mailto typo fix (pilot). "Page" is a pathname regex; blank means every page. Finds are regular expressions (spaces match any whitespace incl. nbsp).

## Text rules

| # | Page | Before (find) | After | Type |
|---|---|---|---|---|
| 1 | all | `/(?:over )?60 CNC turning centers, 17 Vertical Machining Centers \(VMCs\), Horizontal Machining Centers \(HMCs\), gear hobbing machines, and broaching units/` | CNC turning, VMC machining and gear hobbing in-house, extended by a dedicated base of machining vendors, including broaching | text |
| 2 | all | `/(?:over )?60 CNC turning centers, 17 Vertical Machining Centers \(VMCs\), Horizontal Machining Centers \(HMCs\), gear hobbing machines/` | CNC turning, VMC machining and gear hobbing in-house, extended by a dedicated base of machining vendors | text |
| 3 | all | `/houses (?:over )?60 CNC turning centers, 17 VMCs, 2 HMCs, and 5 gear hobbing machines/` | offers CNC turning, VMC machining and gear hobbing in-house, extended by a dedicated base of machining vendors | text |
| 4 | all | `/operates 60 CNC machines, 17 VMCs, 2 HMCs, and gear hobbing facilities at its Pune plant/` | offers CNC turning, VMC machining and gear hobbing in-house, extended by a dedicated base of machining vendors, at its Pune plant | text |
| 5 | `^/suspension-components` | `/60 CNC Turning Centers/` | CNC Turning | text |
| 6 | `^/suspension-components` | `/17 VMCs \(4\/5-Axis\)/` | VMC Machining (4/5-Axis) | text |
| 7 | `^/suspension-components` | `/^2 HMCs/` | HMC machining through vendor partners | text |
| 8 | `^/suspension-components` | `/5 Gear Hobbing Machines/` | Gear Hobbing | text |
| 9 | `^/suspension-components` | `/60 CNCs, 17 VMCs, 2 HMCs/` | CNC, VMC; HMC via vendor partners | text |
| 10 | `^/suspension-components` | `/^5 Machines$/` | In-house gear hobbing | text |
| 11 | all | `/Multi-axis VMCs and HMCs machine/` | Multi-axis VMCs (HMC work via vendor partners) machine | text |
| 12 | all | `/\b(?:over )?\d+ (CNC(?: Turning)?(?: Centers\| machines\|s)?\|VMCs?\|HMCs?)\b/i` | $1 | text |
| 13 | all | `/\b(?:0\.5\|2)\s?(?:kg\s)?(?:to\|–\|-)\s?(?:50(?:\.0)?\|20)\s?kg/` | 1–25 kg | text |
| 14 | all | `/0\.5 kg precision parts (?:to\|up to heavy-duty) 50 kg/` | 1 kg precision parts to 25 kg | text |
| 15 | all | `/1\.1 lbs to 110 lbs/` | 2.2 lbs to 55 lbs | text |
| 16 | all | `/Forgings exceeding 50 kg may require open-die forging or casting depending on geometry\./` | Forgings heavier than 25 kg are outside our current component range. | text |
| 17 | all | `/±\s?0\.01 mm(?: \(±10 microns\))?/` | ±0.02 mm | text |
| 18 | all | `/Holding tolerances down to ±0\.2 mm/` | Forging tolerance ±0.5 mm; machining tolerance ±0.02 mm | text |
| 19 | all | `/Strict compliance with EN 10243-1 Grade F dimensional limits to minimize finish-machining cycle times\./` | Forging tolerance ±0.5 mm; machining tolerance ±0.02 mm. | text |
| 20 | all | `/ASTM, ASME, EN 10243-1 Quality Standards/` | ASTM Quality Standards | text |
| 21 | all | `/1,000 Tons to 5,000 Tons/` | 800 T to 2,500 T (including 1,000 T) | text |
| 22 | all | `/\(\.PDF, \.DXF, \.STEP\)/` | (2D or 3D drawings) | text |
| 23 | all | `/supporting STEP, IGES, and Parasolid files/` | accepting 2D and 3D drawings | text |
| 24 | all | `/BricksCAD V13/` | BricsCAD | text |
| 25 | all | `/operational since 2013/` | operational since 2007 | text |
| 26 | all | `/Pune, established in 2013/` | Pune, established in 2007 | text |
| 27 | `history` | `/Division Founded/` | Division Milestone | text |
| 28 | `history` | `/The company established its Suspension & Machining Division in Pune, India, marking a significant expansion/` | Milestone at the Suspension & Machining Division in Pune, India, operating since 2007 | text |
| 29 | `history` | `/(2009 Quality Certification )The company is acquired by Munot Enterprises, leading to expansion and diversification/` | $1The company achieves TS-16949 Quality Certification, demonstrating its commitment to excellence | text |
| 30 | all | `/PPAP \(Level 1 through 5 as required, standardizing on Level 3\)/` | PPAP (Levels 1–5 as required) | text |
| 31 | all | `/PPAP Level 3/` | PPAP Levels 1–5 | text |
| 32 | all | `/35 Years of Forging Excellence/i` | Forging Excellence Since 1989 | text |
| 33 | all | `/Varsha Forgings (?:Pvt\.?\s?Ltd\.?\|Ltd\.?\|Limited)/` | Varsha Forgings Private Limited | text |
| 34 | all | `/joining as Managing Director/` | joining as Director | text |
| 35 | `certifications` | `/(IATF- 16949 Quality Certification \()2024\)/` | $12017) | text |
| 36 | `certifications` | `/Best Leadership Award/` | Brand Leadership Award | text |
| 37 | `certifications` | `/Best Employer Award/` | Best Employer Brand Award | text |
| 38 | `copy-of-articles` | `/Productivity Improvement Bronze Trophy from ACMA 2016/` | Productivity Improvement Bronze Trophy from ACMA 2018 | text |
| 39 | `copy-of-articles` | `/Excellence in Manufacturing Gold Trophy 2016/` | Excellence in Manufacturing Gold Trophy 2015 | text |
| 40 | all | `/Varsha Forgings manufactures the forged metal components, machines the housings, executes precision rubber vulcanization bonding, and conducts 100% functional validation under one supplier framework\./` | Varsha Forgings manufactures the forged metal components and machines the housings, with rubber bonding carried out through a dedicated rubber-bonding partner under Varsha's quality control, all under one supplier framework. | text |
| 41 | all | `/In-house CNC Turning, VMC Milling, Broaching/` | In-house CNC Turning, VMC Milling; broaching through vendor partners | text |
| 42 | all | `/^Broaching$/` | Broaching (vendor partners) | text |
| 43 | `rubber-bonded` | `/^(?:55\|60\|65\|70\|75)(?:–\d\d)? Shore A$/` | Application-tuned | text |
| 44 | `rubber-bonded` | `/55 Shore A to 75 Shore A \(Application-Tuned\)/` | Application-tuned | text |
| 45 | `rubber-bonded` | `/Durometer values typically range from 55 Shore A to 75 Shore A, optimized/` | Hardness is tuned to the application, optimized | text |
| 46 | `rubber-bonded` | `/What elastomeric durometer hardness \(Shore A\) ranges are typical for truck suspension bushes\?/` | How is elastomer hardness selected for truck suspension bushes? | text |
| 47 | `rubber-bonded` | `/Higher stiffness \(70–75 Shore A\) improves/` | Higher stiffness improves | text |
| 48 | `rubber-bonded` | `/Lower stiffness \(55–60 Shore A\) maximizes/` | Lower stiffness maximizes | text |
| 49 | `rubber-bonded` | `/^NR \/ NR-SBR Blend$/` | NR | text |
| 50 | `rubber-bonded` | `/, or NR\/SBR blends engineered for oil, ozone, and thermal resistance/` | (removed) | text |
| 51 | all | `/aerospace, /` | (removed) | text |
| 52 | all | `/, subsea extraction operations/` | (removed) | text |
| 53 | all | `/subsea extraction operations, /` | (removed) | text |
| 54 | all | `/closed-die and open-die press capabilities/` | closed-die press capabilities | text |
| 55 | all | `/Stainless Steel \(304L, 316L\), /` | (removed) | text |
| 56 | all | `/hot forging, warm forging, cold forging, closed-die forging, and precision forging solutions/` | hot closed-die forging solutions | text |
| 57 | all | `/hot forging, warm forging, and precision cold forging/` | hot closed-die forging | text |
| 58 | all | `/Near-Net-Shape Forging: Hot, Warm, and Precision Cold Processes/` | Near-Net-Shape Hot Closed-Die Forging | text |
| 59 | all | `/ Warm Forging works at an intermediate temperature.*?components\./` | (removed) | text |
| 60 | all | `/closed-die hot and warm forging/` | closed-die hot forging | text |
| 61 | all | `/zero-liquid discharge \(ZLD\) effluent treatment, /` | (removed) | text |
| 62 | all | `/\s?Our commitment to quality is encapsulated in our motto:\s?["“”]?UNDER PROMISE, OVER DELIVERY\.?["“”]?/i` | (removed) | text |
| 63 | all | `/Indian Railways \(RDSO\), European \(EN\), and international \(UIC\/AAR\) standards/` | Indian Railways (RDSO) standards | text |
| 64 | all | `/Indian Railways \(RDSO\) specifications, EN 10204 3\.1\/3\.2 material certification, and international UIC\/AAR rail safety standards/` | Indian Railways (RDSO) specifications | text |
| 65 | all | `/additional compliance to RDSO, EN, UIC, and AAR standards as required/` | RDSO approval for Indian Railways | text |
| 66 | all | `/additionally comply with RDSO, EN, UIC, and AAR standards/` | are RDSO approved for Indian Railways | text |
| 67 | all | `/multi-decade service lives/` | long service lives | text |
| 68 | all | `/How are low-temperature impact properties validated for cold-climate railway applications\?/` | What impact and hardness testing supports railway forgings? | text |
| 69 | all | `/Charpy V-notch impact testing is conducted at temperatures down to -40°C to verify that alloy steel forgings maintain ductile fracture resistance in sub-zero operational environments\./` | Railway forgings are verified through Brinell and Rockwell hardness testing and ASTM E112 grain size checks, with 100% Magnetic Particle Inspection (MPI) on safety-critical parts. | text |
| 70 | all | `/100% Volumetric Ultrasonic Testing \(UT\) for internal flaw detection and 100% Magnetic Particle Inspection \(MPI\) for surface linear indications/` | ultrasonic testing (UT) for internal flaw detection and 100% Magnetic Particle Inspection (MPI) on safety-critical parts for surface linear indications | text |
| 71 | all | `/Can Varsha Forgings manufacture custom forgings for heavy haul industrial and mining rail lines\?/` | Can Varsha Forgings manufacture custom railway forgings to customer drawings? | text |
| 72 | all | `/Yes\. Heavy-duty press infrastructure supports high-tonnage forgings engineered to withstand axle loads exceeding 32 metric tons typical in heavy-haul freight and mining rail corridors\./` | Yes. Press capacity from 800 T to 2,500 T supports forgings from 1 kg to 25 kg made to customer drawings and specifications. | text |
| 73 | all | `/include 100% Magnetic Particle Inspection \(MPI\) for surface crack detection/` | include Magnetic Particle Inspection (MPI), 100% on safety-critical parts, for surface crack detection | text |
| 74 | all | `/undergo 100% chemical verification/` | undergo chemical verification | text |
| 75 | all | `/100% functional validation/` | functional validation | text |
| 76 | all | `/\b100% UT\b/` | UT | text |
| 77 | all | `/Global sourcing strategies for forged components are undergoing a structural shift\. While China has historically dominated low-cost forging production, an increasing number of North American, European, and Japanese OEMs are dual-sourcing or transitioning forging procurement to India — particularly for safety-critical, IATF 16949-governed automotive, railway, and commercial vehicle components\./` | Varsha Forgings supplies IATF 16949-governed forged and machined automotive, railway and commercial vehicle components to OEMs in India and export markets. | text |
| 78 | all | `/This shift is not driven by price alone\. It is driven by total cost of ownership, intellectual property security, quality system maturity, English-language engineering communication, geopolitical risk mitigation, and time-zone alignment with European and Middle Eastern markets\./` | Buyers choose India for total cost of ownership, intellectual property security, quality system maturity, English-language engineering communication and time-zone alignment with European and Middle Eastern markets. | text |
| 79 | all | `/Why are global OEMs shifting forging procurement from China to India\?/` | Why source forgings from India? | text |
| 80 | all | `/OEMs are shifting to India for IATF 16949 quality maturity, English-language engineering communication, shorter lead times to Europe, intellectual property protection, geopolitical risk diversification, and total cost of ownership advantages\./` | OEMs source forgings from India for IATF 16949 quality systems, English-language engineering communication, intellectual property protection and total cost of ownership advantages. | text |
| 81 | all | `/Custom tooled samples from Varsha Forgings typically require 4–6 weeks from drawing approval, compared to 6–10 weeks from typical Chinese suppliers\./` | Sample timing depends on part complexity and tooling. We give a feasibility response within 48 hours for a single drawing or part. | text |
| 82 | all | `/MOQs vary by component complexity and tooling investment, but Varsha Forgings offers feasibility for annual volumes starting at 1,000–5,000 pieces — significantly lower than typical Chinese MOQs of 10,000\+\./` | Prototype and low-volume enquiries are accepted alongside series production. Share your drawing and annual volume for a feasibility review. | text |
| 83 | all | `/What logistics advantages does India offer over China for European buyers\?/` | What export logistics does Varsha Forgings offer? | text |
| 84 | all | `/JNPT \(Nhava Sheva\) Port offers 18–22 day transit to Rotterdam vs\. 28–35 days from Shanghai\./` | JNPT (Nhava Sheva) port access, ISPM-15 export crates and GPS-tracked containers support export shipments. | text |
| 85 | all | `/Are Indian forging suppliers cost-competitive with Chinese suppliers\?/` | Is sourcing forgings from India cost-competitive? | text |
| 86 | all | `/^On a per-piece basis, China may offer lower labor costs\..*$/` | When total cost of ownership is calculated, including quality failure costs, inventory carrying costs, logistics time and engineering communication efficiency, India is a cost-competitive source. | text |
| 87 | all | `/\s?Varsha Forgings supports established OEMs with open account terms after credit verification\./` | (removed) | text |
| 88 | all | `/Can I visit the manufacturing plants before placing an order\?/` | Can I visit the manufacturing plants after an RFQ? | text |
| 89 | all | `/welcomes customer audits and plant visits at both/` | welcomes plant visits after an RFQ at both | text |
| 90 | all | `/Virtual video tours/` | Virtual plant tours | text |
| 91 | all | `/What is the typical sea freight cost from India to Europe or North America\?/` | How are export shipments handled? | text |
| 92 | all | `/Full container load \(FCL\) shipping from JNPT to Rotterdam ranges from \$800–\$1,500 per 20-foot container depending on seasonality\. To US East Coast \(New York\), \$1,200–\$2,200 per 20-foot container\./` | Export shipments use ISPM-15 crates and GPS-tracked containers through JNPT (Nhava Sheva) port. | text |
| 93 | all | `/For time-critical requirements, Varsha Forgings offers air freight options \(Mumbai\/BOM airport\) and can expedite sample production through dedicated tooling slots\. Premium logistics coordination is available\./` | Varsha Forgings offers air freight for samples and urgent customer needs. | text |
| 94 | all | `/Powertrains & Structural Platforms/` | Suspension & Steering Platforms | text |
| 95 | all | `/, while the instantaneous torque delivery of electric motors subjects drivetrain components to severe torsional shock loads\./` | . | text |
| 96 | all | `/specifically engineered for EV powertrains, suspension systems, and structural platforms/` | specifically engineered for EV suspension and steering systems | text |
| 97 | all | `/forged motor shafts, differential gear blanks, steering knuckles, and lightweight suspension linkages/` | forged axle mounts, steering levers and lightweight suspension linkages | text |
| 98 | all | `/Core EV components include high-torque electric motor drive shafts, rotor shafts, differential gear blanks, steering knuckles, and lightweight suspension linkage arms\./` | EV components include axle mounts, steering levers and lightweight suspension linkage arms. | text |
| 99 | all | `/, and precision gear blanks capable of operating under instantaneous high-torque dynamic inputs/` | (removed) | text |
| 100 | all | `/Closed-die forging ensures continuous, unbroken metallurgical grain flow along shaft journals and spline transitions\. This prevents rotational shear fatigue during sudden acceleration shocks — a critical failure mode in EV drivetrains where peak torque is delivered instantaneously without the damping effect of a torque converter or clutch slip\./` | Closed-die forging ensures continuous, unbroken metallurgical grain flow along load paths, improving fatigue resistance under cyclic loads. | text |
| 101 | all | `/along the shaft journal and spline transitions, preventing rotational shear fatigue during sudden acceleration shocks\./` | along load paths, improving fatigue resistance under cyclic loads. | text |
| 102 | all | `/How does forging improve the fatigue life of EV drive shafts under instant peak torque\?/` | How does forging improve the fatigue life of EV suspension and steering parts? | text |
| 103 | all | `/Material Grades for High-Speed EV Gear Blanks/` | Material Grades for EV Suspension & Steering Forgings | text |
| 104 | all | `/What material grades are preferred for high-speed EV gearbox forgings\?/` | What material grades are used for EV suspension and steering forgings? | text |
| 105 | all | `/Case-hardening alloy steels such as 20MnCr5, 16MnCr5, and 20MoCr4E are used to achieve extreme core toughness with high surface hardness following vacuum carburizing\./` | Case-hardening and alloy steels such as 20MnCr5, 42CrMo4 and 20MoCr4E are used, with vacuum carburizing where specified. | text |
| 106 | all | `/What dimensional tolerances are required for high-RPM EV gear blanks\?/` | What dimensional tolerances apply to EV components? | text |
| 107 | all | `/EV gear blanks are machined to near-zero face runout.*?12,000 RPM\./` | Forging tolerance is ±0.5 mm; machining tolerance is ±0.02 mm. | text |
| 108 | all | `/How does hot forging prevent hydrogen embrittlement in high-tensile EV fasteners and studs\?/` | What surface and heat treatments are available for EV components? | text |
| 109 | all | `/Controlled post-forging thermal cycles and low-hydrogen electroplating\/e-coating processes prevent hydrogen entrapment in tensile strength grades exceeding 10\.9 and 12\.9\./` | Surface and heat treatments include vacuum carburizing, induction hardening, hot-dip galvanizing, double quench and temper, and stress relieving. | text |
| 110 | all | `/What proto-typing capabilities exist for fast-turnaround EV development cycles\?/` | Are prototype and low-volume EV enquiries accepted? | text |
| 111 | all | `/Rapid prototyping utilizes 3D-printed sand\/investment patterns.*?accelerated timelines\./` | Yes. Prototype and low-volume enquiries are accepted alongside series production, with a feasibility response within 48 hours for a single drawing or part. | text |
| 112 | all | `/What inspection methods validate EV gear blank precision\?/` | What inspection methods validate EV component precision? | text |
| 113 | all | `/Inspection facilities utilize Faro Arm CMMs, Zeiss contour measuring systems, surface roughness testers, and gear roll testers to verify dimensional accuracy and tooth profile conformance\./` | Inspection facilities utilize Faro Arm CMMs, Zeiss contour measuring systems and surface roughness testers to verify dimensional accuracy. | text |
| 114 | all | `/Secotr/` | Sector | text |
| 115 | all | `/Steering Level\b/` | Steering Lever | text |
| 116 | all | `/Swingram Mount/` | Swing Arm Mount | text |
| 117 | all | `/Agriculutre\|Agrecluture/` | Agriculture | text |
| 118 | all | `/Applicatin\b/` | Application | text |
| 119 | all | `/\bLFull/` | Full | text |
| 120 | all | `/Pune pune/` | Pune | text |
| 121 | all | `/•?Keep feature on forging year over year/` | (removed) | text |
| 122 | all | `/^We a leading/` | We are a leading | text |

## hideText rules

| # | Page | Phrase | Behaviour | Type |
|---|---|---|---|---|
| 1 | all | topical authority hub | hide every occurrence | hideText |
| 2 | `forged-components-ev` | EV suspension linkages integrate specially formulated low-durometer | hide all but the first occurrence | hideText |
| 3 | `rubber-bonded` | Shore A: 55–75 (Tuned) | hide every occurrence | hideText |
| 4 | `about-1$` | Dual-Phase Stainless Steel | hide every occurrence | hideText |
| 5 | `about-1$` | In-House Material Stainless Steel Grades | hide every occurrence | hideText |
| 6 | `about-1$` | Corrosion-resistant valve bodies, flanges | hide every occurrence | hideText |
| 7 | `oil-and-gas` | ASME Class 150 | hide every occurrence | hideText |
| 8 | `oil-and-gas` | Pressure Class Compliance | hide every occurrence | hideText |
| 9 | `oil-and-gas` | Engineered for high-stress pipeline environments | hide every occurrence | hideText |
| 10 | `railways` | Sub-zero operational environments | hide every occurrence | hideText |
| 11 | `railways` | Low-Temperature Impact Validation | hide every occurrence | hideText |

## attr rules (img alt)

| # | Page | Before | After | Type |
|---|---|---|---|---|
| 1 | all | `/corvtte[^]*/i` | (alt emptied) | attr |
| 2 | all | `/Secotr/` | Sector | attr |
| 3 | all | `/Steering Level\b/` | Steering Lever | attr |
| 4 | all | `/Swingram Mount/` | Swing Arm Mount | attr |

## href rule (pilot, kept)

| 1 | all | `mailto:marketing@varshaforging.com` | `mailto:marketing@varshaforgings.com` | href |

## Known limits

- The layer applies late on heavy pages (a snapshot at 6 s showed original text; at 12-25 s it showed corrected text). Early crawlers and non-JS AI crawlers see the original text.
- Content inside Wix HTML-embed iframes (capacity tables, bullet lists on /suspension-components and /forging-manufacturer-pune, the India-vs-China tables on /buying-forgings-from-india, EV component table) is not reachable by page script. These need an Editor edit or Velo.
