/* Static build: pre-renders every route to its own HTML file (real titles, descriptions, canonical,
   and visible content for crawlers), plus a real 404 page.
   Canonical host is SITE_URL in site.config.js. Optional override: SITE_URL=https://yourdomain.com node scripts/build.js */
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const { JSDOM, VirtualConsole } = require('jsdom');
const root = path.join(__dirname, '..'), out = path.join(root, 'dist');
const SITE_CONFIG = require(path.join(root, 'site.config.js'));
const SITE = (process.env.SITE_URL || SITE_CONFIG.SITE_URL || '').replace(/\/$/, '');
if (!/^https?:\/\//.test(SITE)) {
  console.error('Set SITE_URL in site.config.js to an absolute http(s) origin, with no trailing slash.');
  process.exit(1);
}
let src = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
let configJs = fs.readFileSync(path.join(root, 'site.config.js'), 'utf8');
if (process.env.SITE_URL) {
  configJs = configJs.replace(/SITE_URL:\s*"(?:\\.|[^"\\])*"/, 'SITE_URL: ' + JSON.stringify(SITE));
}
const configTag = '<script src="/site.config.js"></script>';
if (!src.includes(configTag)) {
  console.error('index.html is missing the site.config.js script tag.');
  process.exit(1);
}
src = src.replace(configTag, '<script>\n' + configJs + '\n</script>');
const firmsTag = '<script src="/data/firms.js"></script>';
const firmsJs = fs.readFileSync(path.join(root, 'data', 'firms.js'), 'utf8');
if (!src.includes(firmsTag)) {
  console.error('index.html is missing the data/firms.js script tag.');
  process.exit(1);
}
src = src.replace(firmsTag, '<script>\n' + firmsJs + '\n</script>');
fs.rmSync(out, { recursive: true, force: true }); fs.mkdirSync(out, { recursive: true });

// Forge/derive route list from the firm data and the existing sitemap.
const old = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const routes = new Set([...old.matchAll(/<loc>https?:\/\/[^/]+([^<]*)<\/loc>/g)].map(m => m[1] || '/').filter(r => r !== '/quiz'));
['/account', '/login', '/reset', '/journal'].forEach(r => routes.add(r));

const noLib = src.replace('<script src="/vendor/supabase.js"></script>', '');
function render(route) {
  const vc = new VirtualConsole();
  if (route === '/') vc.on('jsdomError', e => console.error('JSDOM runtime:', e.message, e.stack));
  const dom = new JSDOM(noLib, { url: SITE + route, runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole: vc,
    beforeParse(w) { w.scrollTo = () => {}; w.HTMLElement.prototype.scrollIntoView = () => {}; w.matchMedia = w.matchMedia || (() => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} })); w.IntersectionObserver = w.IntersectionObserver || class { observe() {} unobserve() {} disconnect() {} }; } });
  const d = dom.window.document;
  const res = { title: d.title, desc: (d.querySelector('meta[name="description"]') || {}).content || '', seo: [...d.head.querySelectorAll('[data-seo]')].map(e => e.outerHTML).join(''), app: d.querySelector('#app').innerHTML, nav: d.querySelector('#mainnav').innerHTML, foot: (d.querySelector('footer') || {}).innerHTML || '', h1: d.querySelectorAll('#app h1').length };
  dom.window.close(); return res;
}
const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
function page(route, r, extraHead) {
  let h = src;
  h = h.replace(/<title>[\s\S]*?<\/title>/, '<title>' + esc(r.title) + '</title>');
  h = h.replace(/<meta name="description"[^>]*>/, '');
  h = h.replace('</head>', '<meta name="description" content="' + esc(r.desc) + '"><link rel="canonical" href="' + SITE + route + '">' + (extraHead || '') + (r.seo || '') + '</head>');
  h = h.replace(/(<nav[^>]*id="mainnav"[^>]*>)[\s\S]*?(<\/nav>)/, (m, a, b) => a + r.nav + b);
  h = h.replace(/(<main[^>]*id="app"[^>]*>)[\s\S]*?(<\/main>)/, (m, a, b) => a + r.app + b);
  if (r.foot) h = h.replace(/(<footer[^>]*>)[\s\S]*?(<\/footer>)/, (m, a, b) => a + r.foot + b);
  // Make market statistic cards robust even if an overlay or client-side handler
  // interferes: the entire card remains a native anchor with a real destination.
  if (['/futures', '/forex', '/crypto'].includes(route)) {
    h = h.replace(/<a class="stat pfm-stat-link" href="([^"]+)"/g,
      '<a class="stat pfm-stat-link" style="position:relative;z-index:2;pointer-events:auto;cursor:pointer" href="$1"');
  }
  return h;
}
// Large inline scripts are written once to /js and referenced from every page (keeps dist small and cacheable).
fs.mkdirSync(path.join(out, 'js'), { recursive: true });
let imgN = 0; const imgSeen = new Map();
function externaliseImages(html) {
  return html.replace(/data:image\/(webp|png|jpeg|jpg);base64,([A-Za-z0-9+\/=]{8000,})/g, (m, ext, b64) => {
    let f = imgSeen.get(b64);
    if (!f) { f = 'img/i' + (imgN++) + '.' + ext; imgSeen.set(b64, f); fs.mkdirSync(path.join(out, 'img'), { recursive: true }); fs.writeFileSync(path.join(out, f), Buffer.from(b64, 'base64')); }
    return '/' + f;
  });
}
let jsN = 0; const jsSeen = new Map();
function externalise(html) {
  return externaliseImages(html).replace(/<script>([\s\S]*?)<\/script>/g, (m, code) => {
    if (code.length < 5000) return m;
    let f = jsSeen.get(code);
    if (!f) { f = 'js/s' + (jsN++) + '-' + crypto.createHash('sha256').update(code).digest('hex').slice(0,12) + '.js'; jsSeen.set(code, f); fs.writeFileSync(path.join(out, f), code); }
    return '<script src="/' + f + '"></script>';
  });
}
let n = 0, bad = [], warn = [], bakedFoot = '';
const done = new Set(), queue = [...routes], listed = new Set(routes);
const hrefs = h => [...h.matchAll(/href="(\/[a-z0-9\-\/]*)"/g)].map(m => m[1].replace(/\/$/, '') || '/').filter(x => !x.startsWith('/vendor'));
hrefs(src).forEach(h => queue.push(h));
while (queue.length) {
  const route = queue.shift(); if (done.has(route) || route === '/quiz') continue; done.add(route);
  let r; try { r = render(route); } catch (e) { bad.push(route + ' ' + e.message); continue; }
  const missing = /page not found|something went wrong/i.test(r.app.slice(0, 600));
  if (r.h1 < 1 || r.app.length < 300 || missing) { (listed.has(route) ? bad : warn).push(route + (missing ? ' (not found / error)' : ' (empty render)')); continue; }
  routes.add(route);
  hrefs(r.app).forEach(h => { if (!done.has(h)) queue.push(h); });
  if (r.foot) bakedFoot = r.foot;
  const file = route === '/' ? 'index.html' : route.replace(/^\//, '') + '.html';
  fs.mkdirSync(path.dirname(path.join(out, file)), { recursive: true });
  fs.writeFileSync(path.join(out, file), externalise(page(route, r))); n++;
}
if (warn.length) console.warn('Linked but not renderable (check these links):\n' + warn.join('\n'));
// Real 404: unknown paths get status 404 from the host; the app shows its not-found page.
const shell404 = bakedFoot ? src.replace(/(<footer[^>]*>)[\s\S]*?(<\/footer>)/, (m, a, b) => a + bakedFoot + b) : src;
fs.writeFileSync(path.join(out, '404.html'), externalise(shell404.replace('</head>', '<meta name="robots" content="noindex"></head>')));
if (fs.existsSync(path.join(root, 'og.png'))) fs.copyFileSync(path.join(root, 'og.png'), path.join(out, 'og.png'));
if (fs.existsSync(path.join(root, 'img'))) fs.cpSync(path.join(root, 'img'), path.join(out, 'img'), { recursive: true });
fs.cpSync(path.join(root, 'vendor'), path.join(out, 'vendor'), { recursive: true });
// Prevent browsers and edge caches from retaining old pre-rendered calculator markup.
fs.writeFileSync(path.join(out, '_headers'), [
  '/*.html', '  Cache-Control: no-cache, must-revalidate',
  '/futures', '  Cache-Control: no-cache, must-revalidate',
  '/forex', '  Cache-Control: no-cache, must-revalidate',
  '/crypto', '  Cache-Control: no-cache, must-revalidate',
  '/tools', '  Cache-Control: no-cache, must-revalidate',
  '/tools.html', '  Cache-Control: no-cache, must-revalidate',
  '/js/*', '  Cache-Control: public, max-age=31536000, immutable',
  '/img/*', '  Cache-Control: public, max-age=604800',
  ''
].join('\n'));
fs.writeFileSync(path.join(out, '_redirects'), '/quiz /firms 301\n');
fs.writeFileSync(path.join(out, 'robots.txt'), 'User-agent: *\nAllow: /\nSitemap: ' + SITE + '/sitemap.xml\n');
fs.writeFileSync(path.join(out, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  [...routes].filter(r => !['/account', '/login', '/reset', '/journal'].includes(r)).sort().map(r => '  <url><loc>' + SITE + (r === '/' ? '/' : r) + '</loc></url>').join('\n') + '\n</urlset>\n');
console.log('pre-rendered', n, 'routes for', SITE);
if (bad.length) { console.error('FAILED:\n' + bad.join('\n')); process.exit(1); }
