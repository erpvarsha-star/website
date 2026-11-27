# P14 — Wix support ticket (ready to paste if the Editor Publish click does not fix it)

**Subject:** SEO tags saved via Item SEO Tags API not rendering on the live site after publish

**Site:** varshaforgings.com (Classic Editor, Premium plan, Velo + GitHub connected)

**What we did**
1. On 26 Nov 2026 we updated the SEO title, meta description, og/twitter tags and JSON-LD of 10 static pages with `PATCH /seo-metatags-server/v1/item-seo-tags/STATIC_PAGE/{pageId}` (`publish: true`, full tag set). HTTP 200 on all 10.
2. `GET` on the same endpoint (re-checked 26 Nov, later the same day) returns the new values in both `tags` and `resolvedTags`, `hasOverride: true`. Example page `dpizt` (`/forging-company-aurangabad`):
   - Stored title: `Forging Company in Chh. Sambhajinagar (Aurangabad) | Varsha Forgings | Heavy-Die Forging Plant India`
   - Live `<title>`: `Forging Company in Aurangabad | Varsha Forgings | Heavy-Die Forging Plant India` (old value)
3. We published the site 3 times since (Wix CLI `wix publish --source remote -y` via GitHub Actions, including a real `src/` code change). The live HTML still serves the old title, meta and JSON-LD, tested with cache-busting query strings.

**What worked before:** the same API + CLI publish flow rendered SEO changes on 5 pages on 23 Nov 2026.

**Question:** what makes a published site keep serving the earlier SEO tags when the API shows the new ones, and how do we force a re-bake?

**Other affected page IDs:** kihd6 (contact), n1h72 (Maharashtra), plus 7 more from the same 26 Nov batch.
