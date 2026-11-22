# Brief for the next session (written 22 Nov 2026, ~21:15 UTC)

## Start
1. Run Opus as the main session (`/model opus`) and set the mode dropdown to **Auto**.
2. Repos:
   - `erpvarsha-star/website`, branch `ccr-6409486e-3vy613`: plans, facts, logs, drafts and scripts.
   - `erpvarsha-star/VflWebsite`, branch `main`: live site code. **A push to main auto-publishes the live site.** Attach it with `add_repo` (owner erpvarsha-star, repo VflWebsite, access push) and clone it to /home/user/vflwebsite.
3. Read, in this order: `CLAUDE.md` → `website.md` (HANDOVER) → `PHASE3-PLAN.md` (Status table) → `FACTS.md` → `BRAND.md` → `W5-DEPLOY.md` → `baseline/w5-verify.md`.

## Where things stand
- The corrections are live through Velo:
  - 41 corrected embeds on 17 pages.
  - Text rules run server-side on all 56 pages.
  - The footer email is fixed.
  - Verified on 17 of 17 pages.
- The browser layers are slimmed to the rules Velo can't apply.
- The site source contains no machine counts, except in 2 FAQ-app answers.
- Auto-publish works: the workflow uses the secret `WIXKEY`.

## Do next, in order. Each step is dispatched to an agent and checked against its gate.
1. **FAQ-app conflicts.** Executor (Sonnet), the sole Wix writer:
   - Query ALL Wix FAQ question entries.
   - Fix every conflict with FACTS.md or DO NOT PUBLISH. Known hits:
     - Pune: "over 60 CNC turning centers, 17 VMCs…"
     - Aurangabad: "0.5 kg … up to 50 kg" should read 1–25 kg.
   - Update one entry per call and read each one back.
   - Gate: ssr-check reports "60 CNC" 0 and "0.5 kg" 0.
2. **W6 new content.**
   - Executor on a VflWebsite branch `w6-content`, then merge to main, which publishes.
   - Put the drafts in `content-drafts/` (3 files) live through Velo `$w('Text').html` (SSR proven), styled per BRAND.md.
   - Map element IDs either via a CI `wix sync-types` job (login with `--api-key` from `secrets.WIXKEY`) or by position. Write `W6-DESIGN.md`.
   - Cover these pages:
     - the 7 rewrites
     - the homepage additions
     - /alloy-steel-forgings, /forged-machined-components-vf and /steering-suspension-components
     - drafts for /transmission-and-driveline and /electric-mobility, which are empty
   - Fix multiple H1s, keeping one per page.
   - Gate: a Haiku reviewer checks against FACTS.md and `baseline/`, plus ssr-check.
3. **W8.** Set SEO titles, meta and schema for the changed pages via the SEO tags API, one page per call, ≤3,600 characters of JSON-LD.
4. **Tell Yash to run the Sited report.** This is his explicit instruction. Wait for his results.

## Tools and gates
- Use Firecrawl scrape with maxAge 0 and waitFor 20000; curl to the site is blocked here.
- For the no-JS check, commit `.github/ssr-trigger` on the website branch, then read the `ssr-check` Actions log.
- Embed content is generated with `scripts/build-embed-modules.js`, which is idempotent; its rule source is `corrections/rules-src/`.
- Rollback: reset VflWebsite main to the previous commit and push. That auto-publishes the rollback.
