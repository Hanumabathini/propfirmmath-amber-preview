/* Static build: pre-renders every route to its own HTML file (real titles, descriptions, canonical,
   and visible content for crawlers), plus a real 404 page. Run: SITE_URL=https://yourdomain.com node scripts/build.js */
const fs = require('fs'), path = require('path');
const { JSDOM, VirtualConsole } = require('jsdom');
const SITE = (process.env.SITE_URL || 'https://propfirmmath-amber-preview.vercel.app').replace(/\/$/, '');
const root = path.join(__dirname, '..'), out = path.join(root, 'dist');
const src = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
fs.rmSync(out, { recursive: true, force: true }); fs.mkdirSync(out, { recursive: true });

// Forge/derive route list from the firm data and the existing sitemap.
const old = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const routes = new Set([...old.matchAll(/<loc>https?:\/\/[^/]+([^<]*)<\/loc>/g)].map(m => m[1] || '/'));
['/account', '/login', '/reset', '/journal'].forEach(r => routes.add(r));

const noLib = src.replace('<script src="/vendor/supabase.js"></script>', '');
function render(route) {
  const vc = new VirtualConsole();
  const dom = new JSDOM(noLib, { url: SITE + route, runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole: vc,
    beforeParse(w) { w.scrollTo = () => {}; w.matchMedia = w.matchMedia || (() => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} })); w.IntersectionObserver = w.IntersectionObserver || class { observe() {} unobserve() {} disconnect() {} }; } });
  const d = dom.window.document;
  const res = { title: d.title, desc: (d.querySelector('meta[name="description"]') || {}).content || '', app: d.querySelector('#app').innerHTML, nav: d.querySelector('#mainnav').innerHTML, h1: d.querySelectorAll('#app h1').length };
  dom.window.close(); return res;
}
const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
function page(route, r, extraHead) {
  let h = src;
  h = h.replace(/<title>[\s\S]*?<\/title>/, '<title>' + esc(r.title) + '</title>');
  h = h.replace(/<meta name="description"[^>]*>/, '');
  h = h.replace('</head>', '<meta name="description" content="' + esc(r.desc) + '"><link rel="canonical" href="' + SITE + route + '">' + (extraHead || '') + '</head>');
  h = h.replace(/(<nav[^>]*id="mainnav"[^>]*>)[\s\S]*?(<\/nav>)/, (m, a, b) => a + r.nav + b);
  h = h.replace(/(<main[^>]*id="app"[^>]*>)[\s\S]*?(<\/main>)/, (m, a, b) => a + r.app + b);
  return h;
}
let n = 0, bad = [];
for (const route of routes) {
  let r; try { r = render(route); } catch (e) { bad.push(route + ' ' + e.message); continue; }
  if (r.h1 < 1 || r.app.length < 300) { bad.push(route + ' (empty render)'); continue; }
  const file = route === '/' ? 'index.html' : route.replace(/^\//, '') + '.html';
  fs.mkdirSync(path.dirname(path.join(out, file)), { recursive: true });
  fs.writeFileSync(path.join(out, file), page(route, r)); n++;
}
// Real 404: unknown paths get status 404 from the host; the app shows its not-found page.
fs.writeFileSync(path.join(out, '404.html'), src.replace('</head>', '<meta name="robots" content="noindex"></head>'));
fs.cpSync(path.join(root, 'vendor'), path.join(out, 'vendor'), { recursive: true });
fs.writeFileSync(path.join(out, 'robots.txt'), 'User-agent: *\nAllow: /\nSitemap: ' + SITE + '/sitemap.xml\n');
fs.writeFileSync(path.join(out, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  [...routes].filter(r => !['/account', '/login', '/reset', '/journal'].includes(r)).sort().map(r => '  <url><loc>' + SITE + (r === '/' ? '/' : r) + '</loc></url>').join('\n') + '\n</urlset>\n');
console.log('pre-rendered', n, 'routes for', SITE);
if (bad.length) { console.error('FAILED:\n' + bad.join('\n')); process.exit(1); }
