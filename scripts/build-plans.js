/* Fill firm.plans from the recorded starting offer, plus the 27 Nov 2026
   sizes and prices that were actually stated. Does not invent a size ladder.
   Run: node scripts/build-plans.js */
const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "..", "data", "firms.js");
const src = fs.readFileSync(file, "utf8");
const firms = eval(src.match(/var FIRMS = (\[[\s\S]*\]);/)[1]);

function slugPart(s) {
  return String(s || "plan").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "plan";
}
function sizeFromK(n) { return Math.round(Number(n) * 1000); }
function listedPlatforms(f) {
  return (f.platforms || []).filter((p) => String(p).toLowerCase() !== "not listed").join(", ");
}
function baseRules(f) {
  return {
    target: f.target || null,
    dailyLoss: f.dailyDD || null,
    maxDD: f.dd || null,
    ddType: (f.ddTypes || []).join(", ") || null,
    minDays: f.minDays || null,
    split: f.split || null,
    payout: f.payoutText || null,
    platform: listedPlatforms(f) || null,
    source: (f.sources && f.sources[0]) || f.site || null
  };
}
function makePlan(f, spec) {
  const program = spec.program || "Starting offer";
  const size = spec.size == null ? null : spec.size;
  const id = f.slug + "-" + slugPart(program) + (size ? "-" + size : "");
  const plan = Object.assign({
    id: id,
    program: program,
    name: program,
    size: size,
    price: spec.price == null ? null : spec.price,
    currency: spec.currency || f.fromCur || "USD",
    monthly: spec.monthly != null ? spec.monthly : !!f.monthly,
    coverage: spec.coverage || "starting",
    note: spec.note || null
  }, baseRules(f));
  ["target", "dailyLoss", "maxDD", "ddType", "minDays", "split", "payout", "platform", "source"].forEach((k) => {
    if (spec[k] != null) plan[k] = spec[k];
  });
  return plan;
}

const VERIFIED = {
  "my-funded-futures": [
    { program: "Signature", size: 5000, price: 75, currency: "USD", monthly: false, coverage: "verified", note: "One-time. Homepage Signature prices checked 27 Nov 2026." },
    { program: "Signature", size: 10000, price: 140, currency: "USD", monthly: false, coverage: "verified" },
    { program: "Signature", size: 20000, price: 280, currency: "USD", monthly: false, coverage: "verified" }
  ],
  "next-level-funded": [
    { program: "Instant Flex", size: 10000, price: 7.92, currency: "USD", coverage: "verified", note: "List $19.80. $7.92 with BOGO60, checked 27 Nov 2026." }
  ],
  "ftmo": [
    { program: "2-Step", size: 10000, price: 89, currency: "EUR", monthly: false, coverage: "verified", note: "List price. The 27 Nov 2026 homepage showed this 10K challenge at €62 during the Black Friday sale." }
  ],
  "topstep": [
    { program: "Challenge", size: null, price: 49, currency: "USD", monthly: true, coverage: "verified", split: "100% of the fixed payout", maxDD: "Static max loss", ddType: "Static", payout: "Up to $9,000 after the target is hit twice", note: "The $49 entry is this Challenge. Account size was not stated on the homepage." },
    { program: "Trading Combine", size: 50000, price: null, currency: "USD", coverage: "verified", split: "90%", maxDD: "$2,000 trailing maximum loss limit", ddType: "Trailing", payout: "First payout in as little as 5 trading days, up to $12,000", note: "Price for this size was not on the homepage." },
    { program: "Trading Combine", size: 100000, price: null, currency: "USD", coverage: "verified", split: "90%", maxDD: "$3,000 trailing maximum loss limit", ddType: "Trailing", payout: "First payout in as little as 5 trading days, up to $12,000", note: "Price for this size was not on the homepage." },
    { program: "Trading Combine", size: 150000, price: null, currency: "USD", coverage: "verified", split: "90%", maxDD: "$4,500 trailing maximum loss limit", ddType: "Trailing", payout: "First payout in as little as 5 trading days, up to $12,000", note: "Price for this size was not on the homepage." }
  ],
  "funded-trading-plus": [
    { program: "1-Step Express", size: 100000, price: 549, currency: "USD", coverage: "verified", note: "List $549. $370.58 with code BF325, checked 27 Nov 2026. A separate pay-later start at $4 is the recorded from-price and is not a sized plan." }
  ],
  "goat-funded-futures": [
    { program: "GOAT Access", size: 50000, price: 39, currency: "USD", monthly: false, coverage: "verified", note: "Homepage on 27 Nov 2026: default 90/10 split and $0 activation on all plans. The $39 figure is the recorded GOAT Access price." , split: "90/10", activation: "0" }
  ]
};

function startingFromText(f) {
  const text = String(f.fromPlan || "");
  const plans = [];
  const first = /(\d+(?:\.\d+)?)\s*K\b/i.exec(text);
  const range = first && /^\s*[–-]\s*\d/.test(text.slice(first.index + first[0].length));
  if (first && !range) {
    const size = sizeFromK(first[1]);
    let program = text.slice(0, first.index).replace(/[,(].*$/, "").trim();
    if (!program) {
      program = text.slice(first.index + first[0].length).replace(/^[\s,]+/, "").split(/[,(]/)[0].replace(/\s+list$/i, "").trim();
    }
    program = program.replace(/\s+list$/i, "").trim();
    if (!program || program.length > 42 || /^list$/i.test(program)) program = "Starting offer";
    plans.push(makePlan(f, {
      program: program,
      size: size,
      price: f.from,
      coverage: "starting",
      note: "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026."
    }));
  }
  const extra = /\$(\d+(?:\.\d+)?)\s+(?:for|on)\s+(\d+(?:\.\d+)?)\s*K\b/gi;
  let m;
  while ((m = extra.exec(text))) {
    const size = sizeFromK(m[2]);
    if (plans.some((p) => p.size === size && p.price === Number(m[1]))) continue;
    plans.push(makePlan(f, {
      program: plans[0] ? plans[0].program : "Starting offer",
      size: size,
      price: Number(m[1]),
      coverage: "starting",
      note: "Second size named in the recorded starting-offer line. Not re-checked as its own plan on 27 Nov 2026."
    }));
  }
  const named = /(\b[A-Za-z][A-Za-z0-9/+-]{1,24})\s+(\d+(?:\.\d+)?)\s*K\s+\$(\d+(?:\.\d+)?)/g;
  while ((m = named.exec(text))) {
    const size = sizeFromK(m[2]);
    const price = Number(m[3]);
    if (plans.some((p) => p.size === size && p.price === price)) continue;
    plans.push(makePlan(f, {
      program: m[1],
      size: size,
      price: price,
      coverage: "starting",
      note: "Named in the recorded starting-offer line. Not a full catalog."
    }));
  }
  return plans;
}

for (const f of firms) {
  if (VERIFIED[f.slug]) {
    f.plans = VERIFIED[f.slug].map((spec) => makePlan(f, spec));
    continue;
  }
  const derived = startingFromText(f);
  if (derived.length) f.plans = derived;
  else delete f.plans;
}

const header = src.slice(0, src.indexOf("var FIRMS"));
fs.writeFileSync(file, header + "var FIRMS = " + JSON.stringify(firms, null, 2) + ";\n");
firms.forEach((f) => {
  const plans = f.plans || [];
  console.log(f.slug.padEnd(24), plans.map((p) => p.program + " " + (p.size ? p.size / 1000 + "K" : "—") + " " + (p.price == null ? "no price" : p.price) + " " + p.coverage).join(" | ") || "(no sized plan; page shows the starting price)");
});
