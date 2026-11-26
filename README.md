# PropFirmMath — Obsidian Amber

This is the Obsidian Amber version of PropFirmMath — black/amber neumorphic design with the golden bull hero. Same 47-firm content, snapshot Nov 26, 2026. The site is the single file `index.html` at the root of this repository.

Live on Vercel: https://propfirmmath-amber-preview.vercel.app

This repository is separate from the teal main site at https://hanumabathini.github.io/propfirmmath/ (repository: Hanumabathini/propfirmmath). The designs are separate and never synced; only content is shared.

There is no reward, loyalty, or giveaway program.

## Build and launch

- `vercel.json` runs `node scripts/build.js` (jsdom) and serves `dist/`: every route is pre-rendered to its own HTML file with its own title, description and canonical URL, and unknown URLs return a real HTTP 404.
- **Custom domain:** set the `SITE_URL` environment variable in Vercel (for example `https://yourdomain.com`) and redeploy. Canonical URLs, `sitemap.xml` and `robots.txt` are generated from it. Also add the domain in Supabase Auth, URL Configuration.
- **Affiliate links:** when an approval arrives, add `"firm-slug": "https://referral-url"` to the `AFF` object near the top of the main script in `index.html`. That firm's outbound links switch to the referral URL with `rel="sponsored"`.
- Local build: `npm install && npm run build`.
