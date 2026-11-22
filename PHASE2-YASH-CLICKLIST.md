# Phase 2 — Yash's Editor click-list
**One sitting, top to bottom. Highest priority first.** Built from the 49-page audit (22 Nov 2026). Everything here is visible page text or layout, which the API can't change. Claude handles all SEO and schema work separately.

Editor: `https://editor.wix.com/html/editor/web/renderer/edit/c27ae6f7-9963-4102-b1dd-70873a201ee3?metaSiteId=4a42e2d8-8fd2-43d7-95a8-1c319f041137`
After each block: **Save**. At the end: **Publish** once, then tell Claude, who re-verifies the live site.

---

## 🔴 Block 1 — Lead-critical (do first, ~10 min)
1. **Footer email link (every page):** click the footer "Mail" / "Mail Us" link → Link settings → change `marketing@varshaforging.com` to **`marketing@varshaforgings.com`** (it's missing the "s"). The footer is shared, so one fix covers all pages.
2. **/contact-us-1:** the Plant 1 and Plant 2 e-mail links have the same typo; fix both. Also fix "Pune pune -412105" → "Pune 412105".
3. **Header social icons (every page):** LinkedIn → `https://www.linkedin.com/company/varsha-forgings-private-limited/`. Facebook → `facebook.com/wix` and Instagram → `instagram.com/wix`: **delete these two icons** unless Varsha has real accounts (send Claude the URLs if so).

## 🔴 Block 2 — Owner rule: remove machine counts (7 pages, ~15 min)
Replace every number attached to CNC / VMC / HMC / hobbing machines with capability wording, e.g. *"CNC turning, VMC machining and gear hobbing in-house, extended by a dedicated base of machining vendors."*
4. **/forging-manufacturer-pune:** body and FAQ ("over 60 CNC turning centers, 17 VMCs…").
5. **/forging-company-maharashtra:** FAQ ("60 CNC machines, 17 VMCs, 2 HMCs…").
6. **/suspension-components:** body and the capacity table ("60 CNC Turning Centers", "17 VMCs", "2 HMCs", "5 Gear Hobbing Machines"). Delete the count column.
7. **/forged-components-railways:** capacity table and FAQ.
8. **/radius-rod-assemblies**, 9. **/v-link-assemblies**, 10. **/torque-rod-assemblies:** the same FAQ sentence on each ("The Pune facility houses 60 CNC…").

## 🟠 Block 3 — Corrections from OWNER-CONFIRM.md
**Wait for the owner's reply to `OWNER-CONFIRM.md`.** Claude will append the exact text changes here as Block 3, page by page.

## 🟡 Block 4 — Paste the new page copy (Sited Finding 2, ~45 min)
Source: `content-drafts/` in GitHub. For each page, replace the existing body text with the draft's **Body copy** and **FAQ** sections (the SEO title and meta are set by Claude via API, so skip those).
11. /electric-vehicles · 12. /about-1 · 13. /contact-us-1 → file `electric-vehicles-about-1-contact-us-1-DRAFT.md`
14. /about-1-1 · 15. /tool-manufactring · 16. /product → file `about-1-1-tool-manufacturing-product-homepage-DRAFT.md`
17. **Homepage:** add the two new sections from the "Homepage expansion" part of that file *below* the existing content. Don't remove anything.
**Headings:** each draft's first heading is the page **H1** (Heading 1 style); the section headings are **H2** (Heading 2).

## 🟡 Block 5 — Headings, dates, byline (Sited Findings 4, 6, 8)
18. **H1 missing** on /product, /electric-vehicles (fixed by Block 4), /agriculture, /railway, /industrial-application: set each page's main title text box to **Heading 1**.
19. **Visible date:** add a small text line "Last updated: 22 November 2026" under the title on /assembly-services, /forging-company-aurangabad, /company-profile.
20. **Byline** on /assembly-services: add "By Varsha Forgings Engineering Team" under the title.

## 🟢 Block 6 — Cleanup and typos
21. **/suspension-components:** delete the visible text "topical authority hub … for procurement teams and AI search engines" (SEO notes accidentally shown to visitors).
22. **/forged-components-ev:** the paragraph "EV suspension linkages integrate specially formulated low-durometer…" appears **4 times**. Keep one.
23. **/steering-suspension-components:** the body shows the wrong article ("Heat Treatment and Metallurgical Validation / India vs China"). Flag it to Claude; new copy will be drafted.
24. **Typos:** /product "Secotr Shaft" → "Sector Shaft"; "Steering Level" → "Steering Lever"; "Swingram Mount" → "Swing Arm Mount". /agriculture heading "Agriculutre" → "Agriculture". /forged-machined-components-vf "LFull" → "Full". /forging "Keep feature on forging year over year" → delete the garbled line.
25. **Navigation:** the menu label "Awards" links to `/copy-of-articles` and "Moments" to `/copy-of-awards`, so the labels are crossed. Check that each label opens the right page; swap the links if not.
26. **Certifications page body:** paste the final copy from `Certifications_Page_Draft_22NOV2026.md` (from the earlier session).

---
**When done:** tell Claude "Phase 2 published". Claude then (1) re-scans all 49 pages, (2) sets SEO titles and meta for the pasted pages, (3) runs the Sited free scorecard to measure the change.
