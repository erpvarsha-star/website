# Directory Entity Cleanup: Exact Text for 9 Off-Site Platforms — DRAFT
**Status: DRAFT for Yash (owner work, needs account logins). Nothing here is live. No Wix writes, no site changes.**
Created 26 Nov 2026. Implements INTERNATIONAL-PLAN.md item A12 (cleanup), A13 (new registrations) and the Wave 5 off-site gate. Every value below is copied from FACTS.md (Identity, City name, Plants, Certifications, Products, Capability ranges, Industries served, Customers & markets). Anything FACTS.md does not hold is marked `[YASH TO SUPPLY]`.

**Why this matters.** AI search engines and procurement tools cross-reference directories against the website before citing a supplier. When Kompass says one thing, Justdial another and our site a third, the entity looks unreliable and is cited less or not at all. Wrong directory data actively weakens the entity graph. The fix is to make every third-party record say exactly what the website says.

**Rules for every paste below**
- City is always written **Chhatrapati Sambhajinagar (Aurangabad)**. Short form "Chh. Sambhajinagar (Aurangabad)" only if a field rejects the length.
- Email is **marketing@varshaforgings.com** (with the trailing s). A missing-s variant exists on the live site; never copy it.
- Say "since 1989", never a count of years.
- Weight 1-25 kg. Tolerances: forging +/-0.5 mm, machining +/-0.02 mm. Presses 800 T to 2,500 T, hammers 1 MT to 3 MT.
- Certifications are only: IATF 16949, ISO 9001:2015, ISO 45001:2018, ISO 14001:2015, PPAP Levels 1-5, RDSO approved. Do not enter issuing bodies or expiry dates.
- Do not enter any company registration number, any count of CNC, VMC or HMC machines, or any claim from the DO NOT PUBLISH table.
- Before editing each profile, take a screenshot of the current state and save the old text. If a platform needs the change reverted, the saved copy is the rollback (INTERNATIONAL-PLAN.md section 7, Wave 5).
- Overlap: GBP and city strings already exist in `content-drafts/P13-offsite-address-strings-DRAFT.md`; first-pass IndiaMART, TradeIndia, Kompass and ThomasNet text is in `content-drafts/offsite-profiles-DRAFT.md`. This file corrects the observed errors and supersedes those short forms where they differ (for example, it adds the employee count and the Europages and GlobalSpec profiles).

---

## 1. Kompass
Profile: https://in.kompass.com/c/varsha-forgings-limited/in756720/

**Errors observed**
| Field | Currently shows | Correct value |
|---|---|---|
| Company name | Varsha Forgings Limited (public limited company form) | Varsha Forgings Private Limited |
| Year founded | 1994 | 1989 |
| Category | Iron compounds, Pune | Closed-die forging, precision machining, assembly (see below) |
| Website link | http:// | https://www.varshaforgings.com |
| Pincode | 415105 | 412105 (Pune plant); Plant 1 is 431136 |
| Employees | 100-249 band | 500 (350 Aurangabad plant + 150 Pune plant, FACTS Plants) |

**Why it matters.** Kompass is a B2B directory with high crawl frequency and strong authority in Europe. It currently gives the wrong legal form, a founding year that contradicts our 1989, and a category that says we make chemicals. A European buyer or an AI tool matching "forging supplier India" will not find us under the right category.

**Exact text to paste**
- Company name: `Varsha Forgings Private Limited`
- Year of establishment: `1989`
- Website: `https://www.varshaforgings.com`
- Number of employees: `500` (if only bands are offered, choose the 500-999 band; if no such band exists, choose the nearest above 250 and tell me)
- Email: `marketing@varshaforgings.com`
- Phone: `+91 8411000551`
- Headquarters / main address: `Plot No. B-7, MIDC Waluj, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra 431136, India`
- Additional site (add as second establishment if the platform allows): `Gut No. 161, Mauje-Markal, Tal-Khed, Dist. Pune, Maharashtra 412105, India`
- Activity categories to select (choose the closest available in the Kompass tree; the exact labels vary): (1) Forging, closed-die, steel; (2) Precision machining / machined parts; (3) Assembly, mechanical sub-assembly. Remove "Iron compounds".
- Activity description:
```
Varsha Forgings Private Limited is a manufacturer of hot closed-die forgings, precision machined components and sub-assemblies, since 1989. Forging plant in Chhatrapati Sambhajinagar (Aurangabad) with presses from 800 T to 2,500 T and hammers from 1 MT to 3 MT; machining and assembly plant near Pune. Carbon and alloy steel components from 1 kg to 25 kg for automotive, agriculture, railway, electric vehicle, oil and gas, mining and construction customers. Forging tolerance +/-0.5 mm, machining tolerance +/-0.02 mm. IATF 16949, ISO 9001:2015, ISO 45001:2018 and ISO 14001:2015. PPAP Levels 1-5. RDSO approved. Exports to Germany, Spain, Italy, Portugal, Austria, the United States, Asia-Pacific, the Middle East and Africa.
```
- Certifications field: `IATF 16949, ISO 9001:2015, ISO 45001:2018, ISO 14001:2015`

**Click path.** Steps to be confirmed in the platform UI. Kompass normally requires claiming the company record first (a "claim this company" or "is this your company" prompt on the profile page) with a business email; the editing menu names after that vary, so confirm them once logged in. If the name and legal form fields are locked after claiming, use the platform's "report an error" or contact route and quote the table above. Do not enter the company registration number even if a legal-record field asks for one; leave it blank.

**Gate (Wave 5 reviewer).** Re-scrape the profile: legal name "Varsha Forgings Private Limited", 1989, https link, 412105, no "Iron compounds".

---

## 2. IndiaMART
Two competing profiles exist:
- https://www.indiamart.com/varsha-forgings/ (5.0 rating, employees shown 26-50). **Keep this one.**
- https://www.indiamart.com/varshaforgings/ (3.0 rating, obsolete "ISO 9001:2000", year 2017). **Deactivate or correct.**

**Errors observed.** Duplicate profiles split reviews and rank signals and give AI tools two different answers. The weaker one claims a standard that expired long ago (ISO 9001:2000) and a 2017 year, both contradicting FACTS. The stronger one shows 26-50 employees.

**Why it matters.** IndiaMART is the most crawled Indian B2B directory. Two profiles for one entity is the classic duplicate-entity signal that makes models hedge or skip the company.

**Recommended consolidation (decision for Yash, recommended option first)**
1. Keep and correct `/varsha-forgings/` (the 5.0 profile); ask IndiaMART support to merge or deactivate `/varshaforgings/` (recommended).
2. If IndiaMART will not deactivate it, correct every field on the weaker profile to the same text as below and remove the ISO 9001:2000 line, so that both profiles at least agree.
Steps to be confirmed in the platform UI. The usual routes are the seller dashboard profile editor for field edits, and IndiaMART seller support (by phone or ticket from the dashboard) for merging or deactivating a duplicate; confirm which route the account offers.

**Corrected profile fields (paste into the 5.0 profile; use identical text on the weaker one if it must stay)**
- Company name: `Varsha Forgings Private Limited`
- Year of establishment: `1989`
- Nature of business: `Manufacturer, Exporter`
- Number of employees: `500` (if only bands are offered: the 501-1000 or nearest band covering 500; replace "26 to 50")
- Address: `Plot No. B-7, MIDC Waluj, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra 431136`
- Phone: `+91 8411000551`; Email: `marketing@varshaforgings.com`; Website: `https://www.varshaforgings.com`
- Certifications (list these and nothing else): `IATF 16949`, `ISO 9001:2015`, `ISO 45001:2018`, `ISO 14001:2015`, `RDSO approved`. Delete "ISO 9001:2000" and any other certificate.
- Company description:
```
Varsha Forgings Private Limited is a Tier 1 and Tier 2 supplier of hot closed-die forgings, precision machined components and sub-assemblies, since 1989. Forging plant in Chhatrapati Sambhajinagar (Aurangabad) with presses from 800 T to 2,500 T; machining and assembly plant near Pune, operating since 2007. Carbon and alloy steel components from 1 kg to 25 kg. Annual capacity over 12,000 metric tons and over 3 million pieces. Over 60% of production serves OEMs. IATF 16949 and ISO 9001:2015 certified, PPAP Levels 1-5, RDSO approved.
```
- Product categories to list, each drawn from FACTS "Products" (one listing per category, with the short line shown):
  - `Closed-Die Forgings`: hot closed-die forged steel components, 1 kg to 25 kg.
  - `Steering Forgings`: idler arm, sector shaft, drop arm, steering levers, steering knuckles, tie rod ends.
  - `Suspension Forgings`: swing arm, spherical ball pin, eye end, torque rods, radius rods, V-links.
  - `Tie Rod Assemblies`: complete tie rod assemblies, and tie rod end forgings for buyers who want the forging only.
  - `Machined Components`: gear blanks, planet gear, helical gear, crown wheel and pinion, wheel carrier.
  - `Railway Forged Components`: bogie guide links, traction rods, brake levers, drawbar hooks, damper brackets (RDSO approved).
  - `Control Rod Assemblies`: adjustable and crimped control-rod assemblies.
  - `Rubber-Bonded Components`: engine mounts, vibration isolators and bonded housings, bonding through a dedicated partner under Varsha quality control.
  - `Forged Flanges and Valve Bodies`: for oil and gas customers.
- Do not list: EV motor shafts or any EV powertrain part, or any process or product not in FACTS.

**Gate (Wave 5 reviewer).** Search IndiaMART for the company name returns one profile; no "ISO 9001:2000"; year 1989; no 2017.

---

## 3. TradeIndia
Profile: https://www.tradeindia.com/varsha-forgings-pvt-ltd-3037285/

**Errors observed.** Founding year 1986 (correct: 1989). Business type "supplying & trading" (correct: Manufacturer / Exporter). Name shown as "Varsha Forgings Pvt Ltd" (use the full legal name).

**Why it matters.** "Supplying & trading" tells buyers and AI tools we are a reseller, which undercuts the direct-manufacturer signal that RFQ buyers filter on.

**Exact text to paste**
- Company name: `Varsha Forgings Private Limited`
- Business type: `Manufacturer, Exporter` (untick "Supplier" and "Trading" if shown)
- Year of establishment: `1989`
- Address, phone, email, website: see Master NAP block (section 13)
- Company overview: use the IndiaMART description above, word for word.
- Main products: `Closed-die forgings, precision machined components, steering and suspension forgings, railway forged components, sub-assemblies`

**Click path.** Steps to be confirmed in the platform UI (log in to the TradeIndia seller account, open the company profile edit area). The profile URL changes only if the company name is edited at slug level; do not rely on the URL staying identical, and send me the final URL.

**Gate.** Re-scrape: Manufacturer / Exporter, 1989.

---

## 4. Justdial
**Error observed.** A listing is advertised as "Varsha EV Motor Shaft Forging ... Use: Ev Traction Motors".

**Why it matters (highest priority).** FACTS is explicit: Varsha makes EV **suspension and steering parts only**. No motor shafts, no EV powertrain, no EV gearbox parts, no EV gear blanks. Justdial states the opposite of our own site and of the owner's confirmation. This is the most damaging off-site error because an AI tool that finds both will either cite the wrong capability or distrust both sources. It could also draw RFQs we cannot fulfil.

**Action.** Delete or rewrite the product entry. Steps to be confirmed in the platform UI. Justdial listings are normally managed through the Justdial free-listing / business login or via Justdial support; confirm which route this account uses. If the listing was created by Justdial from public data and Yash does not hold the login, claim the listing first (Justdial offers a "claim this business" flow; confirm the exact menu).

**Exact replacement product wording**
- Product title: `EV Suspension and Steering Forgings`
- Product description:
```
Hot closed-die forged steel suspension and steering components for electric vehicles, from 1 kg to 25 kg, from Varsha Forgings Private Limited, since 1989. Forging tolerance +/-0.5 mm, machining tolerance +/-0.02 mm. IATF 16949 and ISO 9001:2015 certified, PPAP Levels 1-5. Send a drawing to marketing@varshaforgings.com for a feasibility response within 48 hours for a single part.
```
- Use / application field: `Suspension and steering systems of electric vehicles`
- Material field: `Carbon and alloy steel`
- Delete these words from every Justdial product and keyword field: `Motor Shaft`, `Traction Motor`, `EV Traction Motors`, `EV powertrain`, `EV gearbox`.
- Also review the other Justdial product entries; each must match section 2 product categories only.
- Business details to check on the same listing: name `Varsha Forgings Private Limited`; phone `+91 8411000551`; address per Master NAP; year 1989.

**Gate.** Re-scrape the Justdial listing: 0 occurrences of "Motor Shaft" or "Traction Motor".

---

## 5. MESH Works
**Error observed.** Profile listed as basic and unaudited, with CNC, VMC and HMC machine descriptions.

**Why it matters.** MESH Works is used by procurement teams to shortlist Indian manufacturers. An unaudited profile ranks low, and machine-list descriptions (a) cannot be published because capacity is split between in-house and a dedicated vendor base, and (b) do not match the website.

**Action**
1. Claim the supplier profile. Steps to be confirmed in the platform UI (look for a "claim" or "manage this company" prompt on the profile, or the supplier registration route).
2. Upload the certificate documents for IATF 16949, ISO 9001:2015, ISO 45001:2018 and ISO 14001:2015 (PDF scans of the certificates Yash holds). Where the platform has a field for the RDSO approval, add it but do not upload or type an approval reference number (FACTS: reference not yet supplied).
3. Remove every machine-type list from the profile. Replace with the capability text below.

**Replacement text (paste; no machine counts)**
```
Varsha Forgings Private Limited, since 1989. Hot closed-die forging with presses from 800 T to 2,500 T and friction drop hammers from 1 MT to 3 MT. In-house die shop, induction billet heating, heat treatment, metallurgy laboratory and in-house machining and grinding, extended by a dedicated base of machining vendors for added capacity. Components from 1 kg to 25 kg in carbon and alloy steel. Forging tolerance +/-0.5 mm, machining tolerance +/-0.02 mm. Annual capacity over 12,000 metric tons and over 3 million pieces. Tier 1 and Tier 2 supplier to commercial vehicle, agriculture, railway, electric vehicle, oil and gas, mining and construction OEMs. IATF 16949, ISO 9001:2015, ISO 45001:2018, ISO 14001:2015, PPAP Levels 1-5, RDSO approved.
```
Process line (if a process field exists): `Closed-die forging, heat treatment (vacuum carburizing, induction hardening, normalizing, stress relieving, double quench and temper), machining, grinding, assembly`.

**Gate.** Profile shows audited/verified status and no machine-type list.

---

## 6. RocketReach and GraphIQ
**Errors observed.** Scraped or estimated data: founding 1994, employees 82 (RocketReach) and 74 (GraphIQ), "7 offices worldwide", an old fax number, an Aurangabad pincode of 431001, and a link to a non-existent /investor-relations URL.

**Why it matters.** These aggregators feed lead databases and some AI answers. They are not managed by us and are rebuilt from other crawls.

**Honest position.** These profiles mostly cannot be edited directly, so the fix is indirect:
1. **Correct the source data they scrape.** Fix Kompass, IndiaMART, TradeIndia and Justdial first (sections 1-4). Aggregators copy from those.
2. **Publish correct structured data on the website.** Organization/Manufacturer schema with legal name, 1989, both plant addresses, phone, email and LinkedIn sameAs (INTERNATIONAL-PLAN.md A10, Wave 2), plus a visible "Company Facts" block or page stating: legal name, founded 1989, employees 500 across two plants (350 Aurangabad, 150 Pune), two addresses, phone, email. Claude drafts this; it is a Wave 2 item and is not yet live.
3. **Submit a correction where the platform supports it.** Steps to be confirmed in the platform UI. RocketReach and GraphIQ each have a profile-owner or "update company information / suggest an edit" route in their help pages; check it once logged in or from the footer of the company page. Paste:
```
Company: Varsha Forgings Private Limited. Founded: 1989. Employees: 500 (two plants). Headquarters / forging plant: Plot No. B-7, MIDC Waluj, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra 431136, India. Second plant: Gut No. 161, Mauje-Markal, Tal-Khed, Dist. Pune 412105, India. Phone: +91 8411000551. Email: marketing@varshaforgings.com. Website: https://www.varshaforgings.com. Please remove: founding year 1994, "7 offices worldwide", the fax number, pincode 431001 and the /investor-relations link (Varsha Forgings is a privately held company with no such page).
```
4. Re-check both profiles in the Wave 5 KPI re-checks (10 Dec and 24 Dec, PHASE4-PLAN.md). If they still show the old values after the next crawl, leave them; do not spend on paid claim or "premium profile" upsells (over $50 needs Yash's explicit yes).

---

## 7. Maxility Group — ADVISORY until owner question (g) is answered
Page: https://maxilitygroup.com/contact.html

**Error observed.** Lists "Varsha Forging Pvt. Ltd." and "KCTR Varsha Automotive", with consumer Gmail addresses as commercial contacts (sales.maxility@gmail.com, crm.maxility@gmail.com).

**Why it matters.** A company page with free-mail addresses reads as untrustworthy, and "Varsha Forging Pvt. Ltd." is the wrong legal name. If an AI tool resolves Varsha Forgings to this page, the entity graph gets a second name and unprofessional contact points.

**Open question (INTERNATIONAL-PLAN.md section 5, question (g)).** Whether Maxility and KCTR Varsha Automotive should appear on varshaforgings.com at all (options: company profile mention only, separate group page, or no mention) is still unanswered. FACTS records Maxility as the name of Varsha's Suspension & Machining Division (2007) and KCTR as a 2013 JV in the leadership bio. Until Yash answers (g), this section is advisory only: do not email Maxility with changes, and do not link the two sites.

**Recommended text once Yash confirms the sites should be linked or the page is under group control**
- Replace the legal name line with: `Varsha Forgings Private Limited`
- Replace the Varsha contact email with: `marketing@varshaforgings.com`
- Replace the two Gmail addresses with corporate-domain addresses that Yash creates and controls. `[YASH TO SUPPLY]`: FACTS holds only one company mailbox (marketing@varshaforgings.com); no Maxility corporate-domain address is on record. Do not invent one.
- If Yash does not control the Maxility site, send the owner of that site a one-line request quoting the three replacements above.
- Phone: `+91 8411000551`. Address: use the Pune plant block from the Master NAP (section 13).

---

## 8. Thomasnet (new registration, North America)
**Why it matters.** Thomasnet is where North American sourcing engineers and procurement tools first look for custom forging suppliers. The United States is on our confirmed export list. We are absent, so AI tools answering "forging supplier India for North America" have no Thomasnet corroboration.

**Notes.** Free listing only. A paid "Premier" or advertising package that costs over $50 needs Yash's explicit yes.
**Click path.** Steps to be confirmed in the platform UI (supplier registration or "get listed" route on thomasnet.com).

**NAP and capability text.** Use the identical NAP block in section 11 and the capability description in section 11. Thomasnet-specific fields:
- Company type: `Manufacturer` (also `Exporter` if offered)
- Primary product category: `Forgings, Closed-Die` (choose the nearest available label)
- Secondary categories: `Machining, Precision`, `Assemblies, Mechanical`
- Certifications: `IATF 16949`, `ISO 9001:2015`, `ISO 45001:2018`, `ISO 14001:2015`
- Materials: carbon and alloy steel (EN8, EN9, EN19, EN24, EN31, 20MnCr5, 16MnCr5, 42CrMo4, SAE 8620, AISI 4140, AISI 1045).
- Quote/RFQ instruction: `Send a 2D or 3D drawing, material grade and annual volume to marketing@varshaforgings.com. Feasibility response within 48 hours for a single drawing or part. Prototype and low-volume enquiries accepted. Payment by Letter of Credit or advance payment. Material certificates EN 10204 3.1, 3.2 on request.`

---

## 9. Europages (new registration, Europe)
**Why it matters.** Europages is the main pan-European B2B supplier directory, and our named export markets are Germany, Spain, Italy, Portugal and Austria. European buyers and AI tools use it to confirm a non-European supplier is a real, established manufacturer.

**Notes.** Start with the free basic listing. Premium packages over $50 need Yash's explicit yes.
**Click path.** Steps to be confirmed in the platform UI (company registration / "add your company" on europages.com).

**NAP and capability text.** Identical NAP and description as section 11. Europages-specific fields:
- Company type: `Manufacturer`
- Activities: `Closed-die forging`, `Machining of forged steel parts`, `Mechanical sub-assembly`
- Languages: English (add German and Spanish only if Yash approves; ES and DE buyer guides exist in `content-drafts/ES-buyers-guide-DRAFT.md` and `DE-buyers-guide-DRAFT.md`, but a translated listing is a separate step)
- Export countries: `Germany, Spain, Italy, Portugal, Austria, United States, Asia-Pacific, Middle East and Africa`
- Year founded: `1989`; employees: `500`.

---

## 10. GlobalSpec / Engineering360 (new registration, global)
**Why it matters.** GlobalSpec (Engineering360) is used by design and sourcing engineers worldwide, and its supplier records are crawled into many engineering search results. A complete record gives machined-and-forged-component buyers an engineering-grade profile.

**Notes.** Free supplier record first. Any paid "Featured" or "Premium" tier over $50 needs Yash's explicit yes.
**Click path.** Steps to be confirmed in the platform UI (supplier or "list your company" route).

**NAP and capability text.** Identical to section 11. GlobalSpec-specific fields:
- Product families: `Forgings`, `Machined parts, custom`, `Assemblies`
- Process: `Closed-die forging`, `Heat treating`, `CNC machining`, `Grinding`
- Size/weight: `1 kg to 25 kg`
- Tolerance: `Forging +/-0.5 mm; machining +/-0.02 mm`
- Capacity: `Over 12,000 metric tons per annum; over 3 million pieces per year`
- Press range: `800 T to 2,500 T`
- Industries: `Automotive and commercial vehicle, agriculture, railway, electric vehicle, oil and gas, mining and off-highway, construction and infrastructure, defense`

---

## 11. Shared NAP and capability block for sections 8, 9 and 10 (paste identically on all three)
**Why NAP consistency is the point.** Name, Address and Phone must be character-for-character identical on all three portals, on the website schema and on every directory above. AI engines and search engines decide a company is "one entity" by matching these strings across sources; each variation (Pvt. Ltd. versus Private Limited, a different pincode, a different phone format) weakens that match and can split the company into several records.

```
Company name: Varsha Forgings Private Limited
Address (Plant 1, Forging): Plot No. B-7, MIDC Waluj, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra 431136, India
Address (Plant 2, Assembly): Gut No. 161, Mauje-Markal, Tal-Khed, Dist. Pune, Maharashtra 412105, India
Phone: +91 8411000551
Email: marketing@varshaforgings.com
Website: https://www.varshaforgings.com
LinkedIn: https://www.linkedin.com/company/varsha-forgings-private-limited/
Founded: 1989
```
Where a portal accepts only one address, enter Plant 1 as the main address and, if the portal has an "additional location" field, enter Plant 2 there. These match the Plants table in FACTS.md and the schema on the website.

**Capability description (paste identically, 600-700 characters; trim from the end if a field is shorter)**
```
Varsha Forgings Private Limited is a Tier 1 and Tier 2 manufacturer of hot closed-die forgings, precision machined components and sub-assemblies for commercial vehicle, automotive, agriculture, railway, electric vehicle, oil and gas, mining and construction customers, since 1989. Presses from 800 T to 2,500 T and friction drop hammers from 1 MT to 3 MT. Carbon and alloy steel components from 1 kg to 25 kg. Forging tolerance +/-0.5 mm, machining tolerance +/-0.02 mm. Over 12,000 metric tons and over 3 million pieces per year. IATF 16949, ISO 9001:2015, ISO 45001:2018, ISO 14001:2015, PPAP Levels 1-5, RDSO approved. Exports to Germany, Spain, Italy, Portugal, Austria, the United States, Asia-Pacific, the Middle East and Africa.
```

---

## 12. Google Business Profile
**Status.** We do not yet know whether a Google Business Profile exists for either plant (open question for Yash, in the website.md HANDOVER). **Do this check first:** search "Varsha Forgings" in Google Maps on a phone or in a browser; note any existing pins, including any with an old name or the old city name.

- If a profile exists and Yash can log in: edit it to the data below.
- If it exists and nobody holds the login: use the "Claim this business" route on the Maps listing. Google normally verifies by postcard, phone or video; confirm the available method in the UI.
- If none exists: create one profile per plant (steps to be confirmed in the Business Profile UI).

Full field-by-field paste text and the "city field rejects the brackets" fallback are already in `content-drafts/P13-offsite-address-strings-DRAFT.md` section 1 (1A and 1B); use that file for the long descriptions. The listing data below is the verified data to enter:

| Field | Plant 1 (Forging) | Plant 2 (Pune) |
|---|---|---|
| Business name | `Varsha Forgings Private Limited` | `Varsha Forgings Private Limited - Pune Plant` |
| Street address | `Plot No. B-7, MIDC Waluj` | `Gut No. 161, Mauje-Markal, Tal-Khed` |
| City | `Chhatrapati Sambhajinagar (Aurangabad)` | `Pune` |
| State | `Maharashtra` | `Maharashtra` |
| PIN | `431136` | `412105` |
| Country | `India` | `India` |
| Phone | `+91 8411000551` | `+91 8411000551` |
| Website | `https://www.varshaforgings.com` | `https://www.varshaforgings.com` |
| Hours | Sat-Thu 09:00-18:00, Friday closed | Mon-Sat 09:00-18:00, Sunday closed |
| Primary category | Forging company (else Manufacturer) | Manufacturer |
| Opened | 1989 | 2007 |

Because Plant 2 is listed under its own name, a customer-facing sign or document should match the name used here; if the Pune plant has a different signboard name, `[YASH TO CONFIRM]` before submitting.

---

## 13. Master NAP block (the single canonical record)
Use this everywhere, on every platform above and any future one. All values are verbatim from FACTS.md.

| | Plant 1: Forging | Plant 2: Assembly |
|---|---|---|
| Legal name | Varsha Forgings Private Limited | Varsha Forgings Private Limited |
| Address | Plot No. B-7, MIDC Waluj, Chhatrapati Sambhajinagar (Aurangabad) 431136 | Gut No. 161, Mauje-Markal, Tal-Khed, Dist. Pune 412105 |
| State, country | Maharashtra, India | Maharashtra, India |
| Phone | +91 8411000551 | +91 8411000551 |
| Established | 1989 | 2007 |
| Hours | 09:00-18:00, closed Friday | 09:00-18:00, closed Sunday |

- Email (both): **marketing@varshaforgings.com** (note the trailing **s** in "forgings"; a missing-s typo exists on the live site and must not be copied).
- Website: https://www.varshaforgings.com (always https, with www)
- LinkedIn: https://www.linkedin.com/company/varsha-forgings-private-limited/
- Founded: 1989. Say "since 1989" in prose; never a year count.
- City: always **Chhatrapati Sambhajinagar (Aurangabad)** (FACTS, City name, owner 26 Nov 2026). Short form "Chh. Sambhajinagar (Aurangabad)" only where space is tight.
- Employees: 500 (350 Plant 1, 150 Plant 2).
- Do not use: "Varsha Forgings Limited", "Varsha Forgings Ltd.", "Pvt. Ltd.", "Varsha Forging Pvt. Ltd." (no s), any 0240 landline, any fax number, any founding year other than 1989.
- Never enter: a company registration number, machine counts, or any item in the FACTS DO NOT PUBLISH table.

---

## 14. Priority order and time estimate
Ordered by entity-graph gain per minute. Active contradictions first, then duplicates, then new coverage.

| # | Platform | Why this position | Realistic time | Needs from Yash |
|---|---|---|---|---|
| 1 | Justdial (section 4) | Active contradiction of our own site on EV scope; fastest to fix | 20 min | Login or claim; may need OTP to the listed mobile |
| 2 | Kompass (section 1) | Wrong legal form, year, category, pincode on a high-authority directory | 30-45 min | Claim via business email |
| 3 | IndiaMART consolidation (section 2) | Duplicate entity plus obsolete ISO 9001:2000 | 30 min for edits; support ticket for the merge may take days | Seller login to both profiles |
| 4 | TradeIndia (section 3) | Simple field corrections | 15 min | Login |
| 5 | MESH Works (section 5) | Claim and certificate upload | 30 min plus time to gather certificate PDFs | Login or claim; four certificate PDFs |
| 6 | Thomasnet, Europages, GlobalSpec (sections 8-10) | New coverage in the Western markets; same pasted block, so the second and third go quickly | 40 min for the first, 20 min each for the other two | Email to register; free tiers only |
| 7 | Google Business Profile (section 12) | Check existence first; verification may take days | 10 min to check; 30-40 min per plant if creating | Phone or postcard for verification |
| 8 | RocketReach and GraphIQ (section 6) | Indirect; correction request only | 15 min total | None beyond the contact form |
| 9 | Maxility (section 7) | Advisory; blocked on owner question (g) | 0 min until answered | Answer to (g) and corporate mailboxes |

**Total.** About 4 to 5 hours of Yash's time across all platforms, best split into three sittings: (1) Justdial and Kompass, about 1 hour (the two active contradictions); (2) IndiaMART, TradeIndia and MESH Works, about 1.5 hours; (3) Thomasnet, Europages, GlobalSpec and the Google check, about 1.5 to 2 hours. The Wave 5 reviewer re-scrapes after each sitting (INTERNATIONAL-PLAN.md section 6).

**After each profile is live,** send Claude the URL so it can be added to the Organization schema sameAs list (via the Wix API or the Velo schema generator, one writer at a time). Only add URLs for pages that are confirmed to be Varsha's own.

---

## Gaps left as placeholders
- `[YASH TO SUPPLY]` corporate-domain emails for the Maxility page (only one company mailbox is on record in FACTS).
- `[YASH TO CONFIRM]` the Pune plant's signboard or trade name for its Google Business Profile.
- The employee band names on Kompass and IndiaMART are platform-defined; 500 is the FACTS total (350 + 150).
- RDSO approval reference number: not yet supplied; do not enter one anywhere.
- Platform-specific click paths: stated as "steps to be confirmed in the platform UI" where not reliably known.
