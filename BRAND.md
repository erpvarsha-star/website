# BRAND.md - Varsha Forgings brand system as observed on the live site
Extracted 22 Nov 2026 (W2, PHASE3-PLAN.md). Read-only. No Wix writes.

**Sources (S-codes used below)**
- S1 = Firecrawl scrape (branding + rawHtml, maxAge 0, waitFor 8000) of `https://www.varshaforgings.com/`
- S2 = same, `/company-profile`
- S3 = same, `/forging-manufacturer-pune`
- S4 = Wix Media Manager list (`GET /site-media/v1/files`, first page of 100 files, siteId 4a42e2d8-...)
- "Theme var" = `:root` CSS variables in the rawHtml (`--font_N`, `--color_N`).

**Caveat on Firecrawl's `branding` object.** It reported fonts "Arial/Helvetica" and a link colour of #ED8019 / #960F70 / #DF3131 depending on the page. The rawHtml contradicts it: the real fonts are Rubik, Poppins and Helvetica (Wix web fonts), and #960F70 / #DF3131 appear only as a button border or disabled-state value, not as link colours. This file uses the rawHtml values and flags the branding-object values as unreliable (confidence 0.69 overall in S1).

## 1. Logo
| Asset | URL (static.wixstatic.com) | Observed use | Source |
|---|---|---|---|
| Header logo "logo (2).png" (alt "Varsha Forgings"), rendered 65x68 px, `object-fit: cover`, links to the home page | `https://static.wixstatic.com/media/72f2bf_6e37f49786ab4b5a8ebfc9113c90a2c8~mv2.png` | Header, on white. Served as `/v1/fill/w_65,h_68,al_c,q_85,.../logo%20(2).png` | S1, S2 |
| "3d_Logo_VFPL.png" (3D mark), 500x500 px original, 270,015 bytes. Rendered 101x101 px (alt "3d_Logo_VFPL.png") | `https://static.wixstatic.com/media/72f2bf_d68b5185cca041eda1106a0413b752b5~mv2.png` | Lower on the home page | S1 (render), S4 (size) |
| "3d_Logo_VFPL.png" duplicate upload, 500x500 px | `https://static.wixstatic.com/media/72f2bf_13deaee0c146451c94c508a2d6c8f60e~mv2.png` | In Media Manager; not seen rendered | S4 |
| Favicon and OG image (same source image) | `https://static.wixstatic.com/media/72f2bf_aab39c18b06549e2a84bcca908826d5a~mv2.png` (favicon served 192x192; OG served fit 2500x1330) | `<link rel=icon>`, `og:image` | S1 branding.images |

Variants: only one colour treatment was observed (full-colour, on a white header). No separate light/dark or reversed logo file was found in the first 100 Media Manager files or on the three pages. Do not invent a reversed version; place the logo on white or very light backgrounds. A search of the Media Manager first page for names containing "logo" returned only the two 3d_Logo_VFPL.png files; the header file "logo (2).png" was not in that page, so a full media listing (cursor paging) is still open if exact original dimensions are needed.

Not checked: whether any vector (SVG) logo exists.

## 2. Colour palette
| Role | Hex | Where used | Source |
|---|---|---|---|
| Brand orange (primary) | `#ED8019` (rgb 237,128,25) | H1 and H2 text colour (inline `color:#ED8019`), primary button fill, button hover-text on outline button. 14 occurrences on home, 13 on company-profile | S1, S2, S3 (inline styles / button CSS) |
| Page background | `#FFFFFF` | Page, cards, button label on orange | S1 (34 occurrences) |
| Dark text / outline | `#2F2E2E` (rgb 47,46,46) | 1px border on the outline button; 12 occurrences on company-profile | S1 button CSS, S2 |
| Body text grey | `rgb(89,89,89)` = `#595959` | Paragraphs (class `color_40`, theme var `--color_40: 89,89,89`) | S1 (theme var + `.color_40` rule) |
| Heading/UI dark | `rgb(51,51,51)` = `#333333` | Theme var `--color_15`, `--color_37`; button icon on hover | S1 theme var, button CSS |
| Light grey surfaces | `#FAFAFA`, `rgb(226,226,226)` `#E2E2E2` (disabled button fill), `rgb(143,143,143)` `#8F8F8F` (disabled label) | Phone/mail icon button icon fill `#FAFAFA`; disabled states | S1 button CSS |
| Hover fill (outline button) | `rgba(89,89,89,0.78)` | Background on hover of the "Discuss your..." outline button | S1 button CSS |
| Wix default blue | `#116DFF` | Wix editor default (appears 3 times); not a brand colour. Firecrawl listed it as "secondary" - ignore | S1, S2 |
| Wix default purple/red | `#960F70` (rgb 150,15,112) | Border colour on the phone icon button (width 0, so not visible). Firecrawl called it "accent"/"link" - not a brand colour | S1 button CSS |

Rule: the only brand colour is orange `#ED8019` on white with greys. Do not introduce blue, purple or red.

## 3. Fonts
| Use | Family and weight | Where it is set | Source |
|---|---|---|---|
| Headings H1/H2 | Wix style `font_0` / `font_2` = Helvetica W01 Bold (`helvetica-w01-bold`), overridden in the Editor to Rubik Medium (`rubik-medium`) for section H2s (e.g. "Expertise and Capabilities") or Poppins SemiBold (`poppins-semibold`) for the plant-division and footer-column H2s; letter-spacing 0.01em on Rubik Medium H2s | Inline spans in rich text | S1, S2, S3 |
| Body paragraphs | Wix style `font_8` = Helvetica W01 Roman 16px base, overridden inline to Rubik Light (`rubik-light`) 14px (justified) or Rubik Medium 14px (centred intro text) | Inline spans | S1 |
| Buttons | Rubik Medium, 16px, letter-spacing 0.01em (primary). Outline button: Helvetica W01 Roman 14px, letter-spacing 0.1em | Button CSS | S1 |
| Other fonts present | Poppins ExtraLight (`poppins-extralight`) and Poppins regular (menu/footer), DIN Next W01 Light (`font_1`, `font_10`), Assistant SemiBold (company-profile only) | CSS | S1, S2 |
| Fallback | `sans-serif` | Font stacks | S1 |

Sizes observed (px):
| Element | Home | /company-profile | /forging-manufacturer-pune | Source |
|---|---|---|---|---|
| H1 | 42, centred, `#ED8019` | 12 (page H1 "Leadership", small) | 32 (page H1), 24 (section H1s) | S1, S2, S3 |
| H2 | 15 (section titles); 17 (footer columns) | 15 and 17 | 15 and 17 | S1-S3 |
| Body | 14 (rich-text paragraphs); theme base 16 | 14 | 14 | S1-S3 |
| Theme heading sizes (`--font_0`..`--font_10`) | 60, 16, 40, 38, 35, 27, 25, 22, 16, 14, 12 (font_0 to font_10) | same | same | S1 theme var |

Note: Firecrawl reported H1 = 12px and body = 19px on /company-profile; that is a mis-read of small section text. The inline H1 on that page is `font-size:12px` for "Leadership", which is a real value on the page but not a template H1 size. Heading sizes are set inline per element, not by a consistent template, so new sections should copy the home page values.

## 4. Buttons, links, spacing, section pattern
**Primary button** (class `style-m2buys8m__root`, used for the "Commercial Vehicle / Agriculture / Electric Vehicle / Railway / Industrial" tiles): solid `#ED8019` fill, white label, Rubik Medium 16px, letter-spacing 0.01em, square corners (no border-radius observed), no shadow, 0.2s transition. Hover: border 1px `#ED8019`, label 18px white. Disabled: `#E2E2E2` fill, `#8F8F8F` label. Source: S1 button CSS.

**Outline button** (class `style-mu599con__root`, "Discuss your..." CTA to `/contact-us-1`): transparent fill, 1px `#2F2E2E` border, Helvetica Roman 14px, letter-spacing 0.1em, label `#FFFFFF` over a section image; arrow icon 12x12 white. Hover: background `rgba(89,89,89,0.78)`, label turns `#ED8019`. Source: S1.

**Icon buttons** (phone `tel:+91-8411000551`, mail `mailto:marketing@varshaforgings.com`): icon only, label hidden, icon fill `#FAFAFA`, 12-16 px, 7px radius on the phone button. Source: S1.

**Inline links**: standard rich-text anchors (`wixui-rich-text__text`) with no custom colour observed in the HTML source; the visible link colour on the live page was not verified in a browser. Treat as unconfirmed. Internal links use absolute URLs `https://www.varshaforgings.com/...`; phone links `tel:`; mail links `mailto:`. Source: S1.

**Spacing and shape**: Wix sections, absolute-positioned grid; no consistent CSS spacing scale exists. Firecrawl's estimates (base 12 or 4 px, radius 0 or 3 px) varied by page and are not reliable. Corners are square (`border-radius: 0` default `--rd`) except 7px on the phone icon button and 50% on circular social icons. Line-height 1.4em theme default, 1.6em on most body and plant H2 text. Source: S1, S2 CSS.

**Section pattern (home page, top to bottom, from the page text)**: header with logo and menu; centred orange H1 (42px) with a white-on-image intro paragraph and 3 bullet lines; outline CTA; five orange tile buttons for industries (Commercial Vehicle, Agriculture, Electric Vehicle, Railway, Industrial Application); H2 (15px orange, Rubik Medium) "Expertise and Capabilities" with justified 14px Rubik Light paragraph; H2 "Sustainability and Innovation"; plant addresses under orange Poppins SemiBold H2s ("Forging & Machining Division, Aurangabad Plant", "Auto component Division, Pune Plant"); 4-column footer with 17px orange H2s (Company, Capabilities, Product, Other), social icons (LinkedIn, WhatsApp, Facebook, Instagram), contact line. Source: S1.

## 5. Image style
- Product category tiles are cropped to roughly 220x215 px (`fill`, `crop`), `object-fit: cover`, lazy-loaded; filenames such as ComercialVehicle.png, Industrial.png, productrailway_edited.jpg, raipart.png show product-shot or part-photo style on light backgrounds. Source: S1.
- Hero/strip banners are wide crops served `fill` (e.g. 1018x265, 1905x134), quality 80-85, `enc_avif`. Source: S1.
- Image alt text is inconsistent: logo "Varsha Forgings", most others carry the file name (e.g. "ComercialVehicle.png"), some stock names ("Glass Bottle Production", "Car-making factory"). New images should use descriptive alt text, which is a correction relative to the site, not an observed pattern. Source: S1.
- Press and award images in Media Manager are mostly screenshots of articles and magazine pages (publication names, AIFI conference). Source: S4.
- No illustration or icon-set style observed other than Wix default social icons.

## 6. Tone of voice
Observed: formal, third-person-plural "we" corporate English; engineering and supply-chain nouns; relationship and customer-satisfaction language; practical rather than hyped.
Example lines taken verbatim from the live home page (S1):
1. "Closed-Die Forgings, Precision Machining and Assembly from India" (H1)
2. "Varsha Forgings is an India-based manufacturing partner for closed-die forgings, precision machining and assembly. From drawing review and tooling through manufacturing, inspection and agreed supply condition, we help customers define a practical route for cri..." (hero intro; text truncated in the scrape output I held)
3. "Our philosophy of "Forging Relations" extends beyond product quality. It defines our enduring relationships with our customers, stakeholders, and our team ensuring long-term success and mutual trust."

Also seen (S1): "Founded on a tradition of unwavering commitment to "Building Relations and Customer Satisfaction,"..." and bullet lines starting "Discuss design, tooling, forging, machining and assembly as one coordinated component route." These lines are not additions to FACTS.md; any new claim still needs a FACTS.md source.

## 7. Do / Don't for new sections
**Do**
- Use `#ED8019` for H1/H2 text and primary buttons, `#FFFFFF` backgrounds, `#595959` for body text, `#2F2E2E` for outlines.
- Match the home pattern: centred H1 42px on the top-level page, H2 15px in Rubik Medium (or Poppins SemiBold for location headings), body 14px Rubik Light, line-height 1.6em.
- Use square-cornered buttons; primary = orange fill with white Rubik Medium label; secondary = 1px `#2F2E2E` outline with 0.1em letter-spaced label.
- Keep headings short and noun-led; one H1 per page; use "we" and "our" sparingly, with engineering vocabulary (closed-die forging, drawing review, tooling, inspection, traceability).
- Write descriptive alt text and use cropped product photos with `object-fit: cover`.
- Link internally with absolute `https://www.varshaforgings.com/...` URLs, matching existing links.

**Don't**
- Don't add blue (`#116DFF`), purple (`#960F70`) or red (`#DF3131`): these are Wix defaults or Firecrawl mis-reads, not brand colours.
- Don't use rounded buttons, shadows, gradients or all-caps marketing slogans.
- Don't introduce a new font family; stay with Rubik, Poppins and Helvetica as already loaded.
- Don't copy the existing H1 sizes of 12px or the differing 24/32 px section H1s as a pattern; use the home 42px H1 for the page title and the 15/17px H2 pattern for sections.
- Don't use the image alt-text pattern of file names.
- Don't state machine counts, CIN or anything in the FACTS.md DO NOT PUBLISH table, and don't make claims that are not in FACTS.md.
- Don't assume a dark or reversed logo exists (none observed).

## 8. Open items (not verified)
- Visible link colour and hover state of inline links (not in the source CSS inspected).
- Header, hero and footer background colours (set by Wix section CSS vars not resolved here).
- Full Media Manager listing beyond the first 100 files, and whether an SVG logo exists.
- Mobile typography (only the desktop render was parsed).
