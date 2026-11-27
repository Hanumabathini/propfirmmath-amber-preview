# PropFirmMath — Obsidian Amber

This is the Obsidian Amber version of PropFirmMath — black/amber neumorphic design with the golden bull hero. Same 47-firm content, snapshot Nov 26, 2026. The site is the single file `index.html` at the root of this repository.

Live preview on Cloudflare Pages: https://propfirmmath-amber-preview.pages.dev

This design is separate from the teal main site and is never synced with it; only content is shared.

There is no reward, loyalty, or giveaway program.

## Build and launch

- Cloudflare Pages (build command `node scripts/build.js`, output `dist`, env NODE_VERSION=20; `vercel.json` kept as an alternative) runs the jsdom build and serves `dist/`: every route is pre-rendered to its own HTML file with its own title, description and canonical URL, and unknown URLs return a real HTTP 404.
- **Before launch, edit `site.config.js` only:**
  - `CONTACT_EMAIL` — TODO: the business inbox. Placeholder: `contact@propfirmmath.com`.
  - `SITE_URL` — TODO: the final public domain, with `https` and no trailing slash. Placeholder: `https://propfirmmath.com`. Canonical URLs, `og:url`, JSON-LD URLs, `sitemap.xml` and `robots.txt` are generated from it.
  - `OPERATOR` — the public operator name. Placeholder: `PropFirmMath`.
  - A `SITE_URL` environment variable on Cloudflare Pages or Vercel, if set, overrides `site.config.js` for that build. Update or clear it when you set the final domain, or the env value wins.
  - Also add the final domain in Supabase Auth, URL Configuration, once the domain is live.
- **Affiliate links:** none are active. Leave `AFFILIATE_LINKS_ACTIVE` false in `site.config.js`. When an approval arrives, add `"firm-slug": "https://referral-url"` to the `AFF` object near the top of the main script in `index.html` (no tracking parameters) and set `AFFILIATE_LINKS_ACTIVE` to `true`. That firm's outbound links then use the referral URL with `rel="sponsored"`, and the disclosure copy switches back to the affiliate wording.
- Local build: `npm install && npm run build`.
