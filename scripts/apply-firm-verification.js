/* Apply a firm-verification JSON onto data/firms.js.
   Only fields marked changed are written. not_rechecked, ok, and unverifiable stay as they are.
   Usage: node scripts/apply-firm-verification.js path/to/firm-verification.json
   The first run also lifts var FIRMS out of index.html into data/firms.js. */
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const htmlPath = path.join(root, "index.html");
const firmsPath = path.join(root, "data", "firms.js");
const jsonPath = process.argv[2];
if (!jsonPath) {
  console.error("Pass the verification JSON path.");
  process.exit(1);
}
const report = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
let html = fs.readFileSync(htmlPath, "utf8");

function loadFirms() {
  if (fs.existsSync(firmsPath)) {
    const src = fs.readFileSync(firmsPath, "utf8");
    const m = src.match(/var FIRMS = (\[[\s\S]*\]);/);
    if (!m) throw new Error("data/firms.js has no FIRMS array");
    return eval(m[1]);
  }
  const m = html.match(/var FIRMS = (\[[\s\S]*?\]);\n/);
  if (!m) throw new Error("index.html has no FIRMS array");
  return eval(m[1]);
}

const firms = loadFirms();
const bySlug = Object.fromEntries(firms.map((f) => [f.slug, f]));

function addSource(f, url) {
  if (!url || /propdesknews\.com/i.test(url)) return;
  const clean = String(url).trim();
  f.sources = f.sources || [];
  const key = clean.replace(/\/$/, "");
  if (!f.sources.some((s) => s.replace(/\/$/, "") === key)) f.sources.push(clean);
}

function applyTrustpilot(f, text) {
  const withheld = /withheld/i.test(text);
  const rev = text.match(/([\d,]+)\s+reviews/);
  const reviews = rev ? parseInt(rev[1].replace(/,/g, ""), 10) : null;
  const score = text.match(/(\d(?:\.\d+)?)\/5/);
  if (withheld || !score) {
    f.rating = null;
    f.rsrc = null;
    f.reviews = reviews;
    f.ratingNote = "Rating withheld by Trustpilot (breach of guidelines; fake reviews removed)" +
      (reviews ? ". " + reviews.toLocaleString("en-US") + " reviews on the profile" : "") +
      ". Checked 27 Nov 2026.";
    return;
  }
  f.rating = Number(score[1]);
  f.reviews = reviews;
  f.rsrc = "Trustpilot";
  f.ratingNote = "Trustpilot " + score[1] + "/5" +
    (reviews ? ", " + reviews.toLocaleString("en-US") + " reviews" : "") +
    ". Checked 27 Nov 2026.";
}

function setCodes(f, list, deal) {
  f.codes = list;
  f.code = list.length ? list[0].code : null;
  const offs = list.map((c) => c.off).filter((n) => n != null);
  f.off = offs.length ? Math.max.apply(null, offs) : null;
  f.deal = deal || (list[0] ? list[0].detail : null);
}

function stripStrayPercent(s) {
  s = String(s == null ? "" : s).trim();
  if (/%$/.test(s) && !/\d%$/.test(s)) return s.replace(/%$/, "").trim();
  return s;
}

const PLATFORMS = {
  "alpha-capital": ["MT5", "cTrader", "DXtrade", "TradeLocker"],
  "apex-trader-funding": ["Rithmic", "Tradovate", "WealthCharts"],
  "aquafunded": ["MT5", "cTrader", "Match-Trader", "TradeLocker", "Tradovate", "NinjaTrader"],
  "blue-guardian": ["MT5", "Match-Trader", "TradeLocker", "Tradovate", "NinjaTrader", "TradingView", "DeepCharts"],
  "for-traders": ["MT5", "cTrader", "TradeLocker"],
  "fxify": ["MT4", "MT5", "DXtrade", "TradingView"],
  "goat-funded-futures": ["Tradovate", "NinjaTrader", "Rithmic", "Quantower", "TradingView", "WealthCharts", "DeepCharts", "ATAS"],
  "ment-funding": ["cTrader", "DXtrade", "Match-Trader", "Rithmic", "ATAS"],
  "my-funded-futures": ["Tradovate", "NinjaTrader", "Quantower"],
  "phidias-prop-firm": ["Rithmic", "Tradovate", "NinjaTrader", "TradingView", "DeepCharts", "R/Trader"],
  "pinex-capital": ["MT5"],
  "take-profit-trader": ["Tradovate", "NinjaTrader", "Rithmic"],
  "top-one-trader": ["Match-Trader", "MetaTrader", "TradeLocker"],
  "tradeify": ["Tradovate", "NinjaTrader"]
};

const PRICES = {
  "darwinex-zero": { from: 45, fromCur: "EUR", monthly: true, fromPlan: "From €45/month" },
  "earn2trade": { from: 75, fromCur: "USD", fromPlan: "From $75 (TCP 25K–100K, homepage Black Week price)" },
  "elite-trader-funding": { from: 47, fromCur: "USD", monthly: false, fromPlan: "As low as $47, paid once" },
  "funded-trading-plus": { from: 4, fromCur: "USD", monthly: false, fromPlan: "Pay-later start, 2% target" },
  "my-funded-futures": { from: 75, fromCur: "USD", monthly: false, fromPlan: "Signature 5K, one-time" },
  "next-level-funded": { from: 7.92, fromCur: "USD", fromPlan: "Instant Flex 10K with BOGO60 (list $19.80)" }
};

function code(name, off, detail) { return { code: name, off: off, detail: detail }; }

const DEALS = {
  "aquafunded": {
    deal: "BLACKFRIDAY — 40% off every account, plus buy 2 get a 3rd free. The homepage calls it a Black Friday weekend offer and does not name an end time.",
    codes: [code("BLACKFRIDAY", 40, "40% off every account, plus buy 2 get a 3rd free (Black Friday weekend). End date not stated on the homepage.")]
  },
  "atlas-funded": {
    deal: "BLACKFRIDAY — 55% off. The homepage says limited time and does not name an end date.",
    codes: [code("BLACKFRIDAY", 55, "55% off. Homepage says limited time; no end date stated.")]
  },
  "blue-guardian": {
    deal: "BLACK — 35% off everything. The homepage calls it a 24-hour flash sale for Nov 27 only.",
    codes: [code("BLACK", 35, "35% off everything. Homepage labels it a 24-hour flash sale — ends Nov 27, 2026")]
  },
  "blueberry-funded": {
    deal: "PRIMEBF 40% off Prime 2-Step; INSTANTBF 50% off Instant Lite; BF1 25% off Prime plus a free reset; FLEX30 and PRIME30 still 30% off.",
    codes: [
      code("INSTANTBF", 50, "50% off Instant Lite"),
      code("PRIMEBF", 40, "40% off Prime 2-Step"),
      code("FLEX30", 30, "30% off Flex"),
      code("PRIME30", 30, "30% off Prime"),
      code("BF1", 25, "25% off Prime, plus a free reset")
    ]
  },
  "crypto-fund-trader": {
    deal: "BLACK — 30% off any evaluation on any platform. No end date was stated on the homepage.",
    codes: [code("BLACK", 30, "30% off any evaluation on any platform. End date not stated on the homepage.")]
  },
  "earn2trade": {
    deal: "Black Week: up to 70% off, plus reset savings. The code sits behind a Get the Code button and the name was not readable. Countdown points at about Nov 30, 2026.",
    codes: []
  },
  "elite-trader-funding": {
    deal: "GOBBLE90 — 90% off the first month, 80% the second, 70% after. Excludes Fast Track and DTF. Through Nov 30, 2026, 11:59 PM ET.",
    codes: [code("GOBBLE90", 90, "90% off the first month, 80% the second, 70% after (excludes Fast Track and DTF) — ends Nov 30, 2026, 11:59 PM ET")]
  },
  "for-traders": {
    deal: "BLACKFRIDAY — 25% off everything, plus a free reset on Fast challenges. No end date was stated on the homepage.",
    codes: [code("BLACKFRIDAY", 25, "25% off everything, plus a free reset on Fast challenges. End date not stated on the homepage.")]
  },
  "ftmo": {
    deal: "Black Friday: up to 30% off FTMO Challenges (10K shown at €62, list €89). No code is required on the CFD side.",
    codes: []
  },
  "funded-trading-plus": {
    deal: "BF375 37.5% off $5K–$10K, BF35 35% off $25K–$50K, BF325 32.5% off $100K–$200K.",
    codes: [
      code("BF375", 37.5, "37.5% off $5K–$10K accounts"),
      code("BF35", 35, "35% off $25K–$50K accounts"),
      code("BF325", 32.5, "32.5% off $100K–$200K accounts")
    ]
  },
  "fundingpips": {
    deal: "BF22 — 22% off all accounts (homepage banner, checked 27 Nov 2026).",
    codes: [code("BF22", 22, "22% off all accounts (homepage banner, checked 27 Nov 2026)")]
  },
  "fxify": {
    deal: "BLACK35 — 35% off all programs except Instant Lite. No end date was stated on the homepage.",
    codes: [code("BLACK35", 35, "35% off all programs except Instant Lite. End date not stated on the homepage.")]
  },
  "get-leveraged": {
    deal: "GREEN — 20% off all programs. No end date was stated on the homepage.",
    codes: [code("GREEN", 20, "20% off all programs. End date not stated on the homepage.")]
  },
  "ment-funding": {
    deal: "EXCITEMENT — 40% off all evaluations, and all add-ons free. Ends Nov 30, 2026.",
    codes: [code("EXCITEMENT", 40, "40% off all evaluations, and all add-ons free — ends Nov 30, 2026")]
  },
  "next-level-funded": {
    deal: "BOGO60 — 60% off plus buy 1 get 1 free. Instant Flex 10K is $19.80 list and $7.92 with the code.",
    codes: [code("BOGO60", 60, "60% off plus buy 1 get 1 free. Instant Flex 10K is $19.80 list, $7.92 with this code.")]
  },
  "nys-markets": {
    deal: "Black Friday: the homepage says claim 70% off (One Rule Instant shown at 50%). The code was not visible on the page.",
    codes: []
  },
  "onefunded": {
    deal: "BLACK40 — 40% off. BLACK30 is also shown. No end date was stated on the homepage.",
    codes: [
      code("BLACK40", 40, "40% off. End date not stated on the homepage."),
      code("BLACK30", 30, "30% off. Also shown on the homepage. End date not stated.")
    ]
  },
  "phidias-prop-firm": {
    deal: "BLACK90 — up to 90% off. The homepage says Black Friday ends Nov 27, 2026 at 5 PM ET.",
    codes: [code("BLACK90", 90, "Up to 90% off — ends Nov 27, 2026, 5 PM ET")]
  },
  "pinex-capital": {
    deal: "BLACKFRIDAY — 50% off every challenge, plus 10% on every payout.",
    codes: [code("BLACKFRIDAY", 50, "50% off every challenge, plus 10% on every payout")]
  },
  "tradeify": {
    deal: "NOV — 30% off, and 45% off 25K accounts excluding Miami. Ends Nov 30, 2026, 11:59 PM EST.",
    codes: [code("NOV", 30, "30% off, and 45% off 25K accounts excluding Miami — ends Nov 30, 2026, 11:59 PM EST")]
  }
};

let touched = 0;
for (const row of report) {
  const f = bySlug[row.slug];
  if (!f) throw new Error("Unknown slug " + row.slug);
  f.verifiedOn = "Nov 27, 2026";
  const status = row.field_status || {};
  (row.sources || []).forEach((url) => addSource(f, url));
  if (row.official_url) addSource(f, row.official_url);

  if (status.trustpilot === "changed") applyTrustpilot(f, row.verified.trustpilot);
  if (status.Platforms === "changed") {
    if (!PLATFORMS[row.slug]) throw new Error("No platform list for " + row.slug);
    f.platforms = PLATFORMS[row.slug].slice();
  }
  if (status["Entry price"] === "changed") {
    const p = PRICES[row.slug];
    if (!p) throw new Error("No price for " + row.slug);
    if (p.from != null) f.from = p.from;
    if (p.fromCur) f.fromCur = p.fromCur;
    if (p.fromPlan) f.fromPlan = p.fromPlan;
    if (p.monthly != null) f.monthly = p.monthly;
  }
  if (status.deal === "changed") {
    const d = DEALS[row.slug];
    if (!d) throw new Error("No deal for " + row.slug);
    setCodes(f, d.codes, d.deal);
  }
  if (status.split_display === "changed") f.split = stripStrayPercent(f.split);
  if (status.split === "changed" && row.slug === "goat-funded-futures") {
    f.split = "90/10";
    f.splitMax = 90;
  }
  if (status["Activation fee"] === "changed" && row.slug === "goat-funded-futures") f.activation = "0";
  if (row.slug === "topstep") {
    if (status["Payout cycle"] === "changed") {
      f.payoutDays = 5;
      f.payoutText = "Challenge: payouts up to $9,000 after the target is hit twice. Combine: first payout in as little as 5 trading days, up to $12,000";
    }
    if (status.split === "changed") {
      f.split = "100% of the Challenge fixed payout; 90% on the Combine";
      f.splitMax = 100;
    }
    if (status["Max drawdown"] === "changed") {
      f.dd = "Challenge: static max loss. Combine: trailing maximum loss limit ($2,000 / $3,000 / $4,500 on 50K / 100K / 150K)";
      f.ddTypes = ["Static", "Trailing"];
    }
    f.fromPlan = "Challenge, from $49";
    f.summary = "US futures firm. The $49 entry is the Challenge: keep 100% of a fixed payout, up to $9,000, after the target is hit twice, with a static max loss. The Trading Combine is separate: keep 90%, a trailing maximum loss limit, and a first payout in as little as 5 trading days, up to $12,000.";
    f.note = "Checked 27 Nov 2026 on topstep.com. The $49 price is the Challenge, not the Trading Combine. Combine first payout is as little as 5 trading days, not 3. Profit target, minimum days and news rules were not re-read, so those fields stay as previously recorded.";
  }
  if (Object.values(status).some((v) => v === "changed")) touched++;
}

fs.mkdirSync(path.dirname(firmsPath), { recursive: true });
const body = "/* Firm records for PropFirmMath.\n" +
  "   Edit this file when a figure changes. Each firm has verifiedOn.\n" +
  "   The 27 Nov 2026 pass updated only fields re-checked on the firm's site or Trustpilot.\n" +
  "   Fields left from 26 Nov 2026 were not re-checked and were not guessed.\n" +
  "   Re-apply a verification file with: node scripts/apply-firm-verification.js <file.json>\n" +
  "*/\nvar FIRMS = " + JSON.stringify(firms, null, 2) + ";\n";
fs.writeFileSync(firmsPath, body);

const tag = '<script src="/data/firms.js"></script>';
if (!html.includes(tag)) {
  html = html.replace('<script src="/site.config.js"></script>', '<script src="/site.config.js"></script>\n' + tag);
}
html = html.replace(/var FIRMS = \[[\s\S]*?\];\n/, "/* Firm records live in /data/firms.js so a figure can be updated without editing the page script. */\n");
fs.writeFileSync(htmlPath, html);
console.log("firms", firms.length, "records with a changed field", touched);
console.log("wrote", firmsPath);
