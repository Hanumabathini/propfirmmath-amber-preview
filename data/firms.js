/* Firm records for PropFirmMath.
   Edit this file when a figure changes. Each firm has verifiedOn.
   The 27 Nov 2026 pass updated only fields re-checked on the firm's site or Trustpilot.
   Fields left from 26 Nov 2026 were not re-checked and were not guessed.
   Re-apply a verification file with: node scripts/apply-firm-verification.js <file.json>
*/
var FIRMS = [
  {
    "slug": "my-funded-futures",
    "name": "My Funded Futures",
    "markets": [
      "futures"
    ],
    "rating": 4.9,
    "rsrc": "Trustpilot",
    "reviews": 23241,
    "ratingNote": "Trustpilot 4.9/5, 23,241 reviews. Checked 27 Nov 2026.",
    "split": "80-90%",
    "splitMax": 90,
    "dd": "EOD trailing, $1000 (25K)",
    "ddTypes": [
      "EOD"
    ],
    "payoutDays": 1,
    "payoutText": "Rapid daily / Builder 48h / Pro 14d",
    "from": 75,
    "fromCur": "USD",
    "fromPlan": "Signature 5K, one-time",
    "monthly": false,
    "code": "CLUB",
    "off": 40,
    "codes": [
      {
        "code": "CLUB",
        "off": 40,
        "detail": "40% off any plan (firm's own coupons page)"
      }
    ],
    "consistencyText": "Rapid 50 eval / Rapid EOD 30 / Builder 50 at payout",
    "consNone": false,
    "target": "6",
    "dailyDD": "Builder soft pause only",
    "minDays": "Builder 1 / Rapid 2 / Rapid EOD 4 / Pro 2",
    "activation": "0",
    "instant": false,
    "instantText": "No",
    "scaling": "not stated",
    "news": "not allowed on funded Rapid/Pro; permitted on Builder",
    "overnight": "no",
    "us": "yes",
    "site": "https://myfundedfutures.com",
    "sources": [
      "https://myfundedfutures.com",
      "https://www.trustpilot.com/review/myfundedfutures.com"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "not stated",
    "platforms": [
      "Tradovate",
      "NinjaTrader",
      "Quantower"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "40% off any plan (firm's own coupons page)",
    "tracked": true,
    "paid30": 21730000,
    "payouts30": null,
    "largest": null,
    "note": null,
    "summary": "Futures-only firm (CME group). Four evaluation lines — Builder, Rapid, Rapid EOD and Pro, $25K–$150K — plus the small static-drawdown Signature accounts. Rapid pays daily; Pro pays every 14 days. No activation fee on any plan.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "my-funded-futures-signature-5000",
        "program": "Signature",
        "name": "Signature",
        "size": 5000,
        "price": 75,
        "currency": "USD",
        "monthly": false,
        "coverage": "verified",
        "note": "One-time. Homepage Signature prices checked 27 Nov 2026.",
        "target": "6",
        "dailyLoss": "Builder soft pause only",
        "maxDD": "EOD trailing, $1000 (25K)",
        "ddType": "EOD",
        "minDays": "Builder 1 / Rapid 2 / Rapid EOD 4 / Pro 2",
        "split": "80-90%",
        "payout": "Rapid daily / Builder 48h / Pro 14d",
        "platform": "Tradovate, NinjaTrader, Quantower",
        "source": "https://myfundedfutures.com"
      },
      {
        "id": "my-funded-futures-signature-10000",
        "program": "Signature",
        "name": "Signature",
        "size": 10000,
        "price": 140,
        "currency": "USD",
        "monthly": false,
        "coverage": "verified",
        "note": null,
        "target": "6",
        "dailyLoss": "Builder soft pause only",
        "maxDD": "EOD trailing, $1000 (25K)",
        "ddType": "EOD",
        "minDays": "Builder 1 / Rapid 2 / Rapid EOD 4 / Pro 2",
        "split": "80-90%",
        "payout": "Rapid daily / Builder 48h / Pro 14d",
        "platform": "Tradovate, NinjaTrader, Quantower",
        "source": "https://myfundedfutures.com"
      },
      {
        "id": "my-funded-futures-signature-20000",
        "program": "Signature",
        "name": "Signature",
        "size": 20000,
        "price": 280,
        "currency": "USD",
        "monthly": false,
        "coverage": "verified",
        "note": null,
        "target": "6",
        "dailyLoss": "Builder soft pause only",
        "maxDD": "EOD trailing, $1000 (25K)",
        "ddType": "EOD",
        "minDays": "Builder 1 / Rapid 2 / Rapid EOD 4 / Pro 2",
        "split": "80-90%",
        "payout": "Rapid daily / Builder 48h / Pro 14d",
        "platform": "Tradovate, NinjaTrader, Quantower",
        "source": "https://myfundedfutures.com"
      }
    ]
  },
  {
    "slug": "next-level-funded",
    "name": "Next Level Funded",
    "markets": [
      "forex"
    ],
    "rating": 3,
    "rsrc": "Trustpilot",
    "reviews": 255,
    "ratingNote": "Trustpilot 3/5, 255 reviews. Checked 27 Nov 2026.",
    "split": "80 std (100% paid add-on)",
    "splitMax": 100,
    "dd": "7% static (1-Step)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 1,
    "payoutText": "on-demand",
    "from": 7.92,
    "fromCur": "USD",
    "fromPlan": "Instant Flex 10K with BOGO60 (list $19.80)",
    "monthly": false,
    "code": "BOGO60",
    "off": 60,
    "codes": [
      {
        "code": "BOGO60",
        "off": 60,
        "detail": "60% off plus buy 1 get 1 free. Instant Flex 10K is $19.80 list, $7.92 with this code."
      }
    ],
    "consistencyText": "15% live (Instant)",
    "consNone": false,
    "target": "1-Step 8 / 2-Step 8 then 6",
    "dailyDD": "3%",
    "minDays": "none",
    "activation": "none stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "to $1,000,000",
    "news": "allowed",
    "overnight": "allowed (Instant Pro weekend is add-on)",
    "us": "not stated",
    "site": "https://www.nextlevelfunded.com",
    "sources": [
      "https://www.nextlevelfunded.com/evaluations",
      "https://www.nextlevelfunded.com",
      "https://www.trustpilot.com/review/nextlevelfunded.com"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes, up to 20%",
    "platforms": [
      "Not listed"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "BOGO60 — 60% off plus buy 1 get 1 free. Instant Flex 10K is $19.80 list and $7.92 with the code.",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": null,
    "summary": "Forex/CFD firm — not a futures firm. Step evaluations and three instant lines (Flex, Pro, Crown) from $5K to $500K, on Match-Trader, Platform 5 and TradeLocker. Cards advertise '100%*' splits; the default is 80%, with 100% only as a paid add-on.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "next-level-funded-instant-flex-10000",
        "program": "Instant Flex",
        "name": "Instant Flex",
        "size": 10000,
        "price": 7.92,
        "currency": "USD",
        "monthly": false,
        "coverage": "verified",
        "note": "List $19.80. $7.92 with BOGO60, checked 27 Nov 2026.",
        "target": "1-Step 8 / 2-Step 8 then 6",
        "dailyLoss": "3%",
        "maxDD": "7% static (1-Step)",
        "ddType": "Static",
        "minDays": "none",
        "split": "80 std (100% paid add-on)",
        "payout": "on-demand",
        "platform": null,
        "source": "https://www.nextlevelfunded.com/evaluations"
      }
    ]
  },
  {
    "slug": "ftmo",
    "name": "FTMO",
    "markets": [
      "forex",
      "futures"
    ],
    "rating": 4.8,
    "rsrc": "Trustpilot",
    "reviews": null,
    "ratingNote": "Score shown on the ftmo.com homepage; review count not shown there",
    "split": "80-90%",
    "splitMax": 90,
    "dd": "10% static (2-Step)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 14,
    "payoutText": "first payout day 14, then on demand",
    "from": 89,
    "fromCur": "EUR",
    "fromPlan": "2-Step 10K (1-Step EUR 79); FTMO US USD 99",
    "monthly": false,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "1-Step 50 / Instant 30 / 2-Step none",
    "consNone": false,
    "target": "2-Step 10 then 5",
    "dailyDD": "5% (2-Step)",
    "minDays": "2-Step 4 per phase",
    "activation": "none",
    "instant": true,
    "instantText": "Yes",
    "scaling": "to $2,000,000",
    "news": "restricted on Standard funded; Swing unrestricted",
    "overnight": "restricted on Standard funded; Swing unrestricted",
    "us": "yes via ftmo.oanda.com, except AR/DE/LA/MT/SC",
    "site": "https://ftmo.com",
    "sources": [
      "https://ftmo.com",
      "https://www.trustpilot.com/review/ftmo.com"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes",
    "platforms": [
      "MT4",
      "MT5",
      "cTrader",
      "TradingView"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "Black Friday: up to 30% off FTMO Challenges (10K shown at €62, list €89). No code is required on the CFD side.",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Global ftmo.com prices are in EUR and US residents cannot buy there — US clients are served by FTMO US at ftmo.oanda.com (USD, 2-Step from $99), except AR, DE, LA, MT, SC. The Instant Account (launched Oct 2026) is a CFD product, not a futures product.",
    "summary": "The longest-running firm in this directory. Main product is forex/CFD (2-Step, 1-Step and, since Oct 2026, an Instant Account), priced in EUR on ftmo.com, plus a separate monthly-subscription FTMO Futures line. US clients are served only through FTMO US at ftmo.oanda.com, in USD, except in AR, DE, LA, MT and SC.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "ftmo-2-step-10000",
        "program": "2-Step",
        "name": "2-Step",
        "size": 10000,
        "price": 89,
        "currency": "EUR",
        "monthly": false,
        "coverage": "verified",
        "note": "List price. The 27 Nov 2026 homepage showed this 10K challenge at €62 during the Black Friday sale.",
        "target": "2-Step 10 then 5",
        "dailyLoss": "5% (2-Step)",
        "maxDD": "10% static (2-Step)",
        "ddType": "Static",
        "minDays": "2-Step 4 per phase",
        "split": "80-90%",
        "payout": "first payout day 14, then on demand",
        "platform": "MT4, MT5, cTrader, TradingView",
        "source": "https://ftmo.com"
      }
    ]
  },
  {
    "slug": "top-one-futures",
    "name": "Top One Futures",
    "markets": [
      "futures"
    ],
    "rating": 4.8,
    "rsrc": "Trustpilot",
    "reviews": 5595,
    "ratingNote": "Trustpilot 4.8/5, 5,595 reviews. Checked 27 Nov 2026.",
    "split": "90 sim / 80 live",
    "splitMax": 90,
    "dd": "EOD trailing",
    "ddTypes": [
      "EOD"
    ],
    "payoutDays": 1,
    "payoutText": "Elite Daily daily / Elite Access every 5 profitable days",
    "from": 39,
    "fromCur": "USD",
    "fromPlan": "Elite Access entry, one-time",
    "monthly": false,
    "code": "BLACKFRIDAY",
    "off": null,
    "codes": [
      {
        "code": "BLACKFRIDAY",
        "off": null,
        "detail": "Black November offers: 55% off Elite Daily, 70% off Ignite bundles, 30% off Instant Sim Funded, 25% off Elite Access activation fees"
      }
    ],
    "consistencyText": "Elite Daily 40 eval / Elite Access 40 funded / Instant 20 / Ignite 15",
    "consNone": false,
    "target": "Elite Daily 6 / Elite Access 4",
    "dailyDD": "Elite Daily $500 (25K)",
    "minDays": "Elite Access 1",
    "activation": "Elite Access $139-$359 by size",
    "instant": true,
    "instantText": "Yes",
    "scaling": "not stated",
    "news": "not stated",
    "overnight": "not stated",
    "us": "yes",
    "site": "https://toponefutures.com",
    "sources": [
      "https://toponefutures.com",
      "https://www.trustpilot.com/review/toponefutures.com"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "not stated",
    "platforms": [
      "Tradovate",
      "NinjaTrader",
      "BlackArrow",
      "WealthCharts"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "Black November offers: 55% off Elite Daily, 70% off Ignite bundles, 30% off Instant Sim Funded, 25% off Elite Access activation fees",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "The $39 figure is the Elite Access entry fee. An activation fee of $139–$359 by size is charged after passing.",
    "summary": "US futures firm (CME via Tradovate, NinjaTrader, BlackArrow, WealthCharts). Elite Access has a flat $39 entry fee at every size, with an activation fee after passing; Elite Daily and Instant Sim Funded pay daily or at payout targets.",
    "verifiedOn": "Nov 27, 2026"
  },
  {
    "slug": "ment-funding",
    "name": "Ment Funding",
    "markets": [
      "forex",
      "futures",
      "stocks"
    ],
    "rating": 4.6,
    "rsrc": "Trustpilot",
    "reviews": 238,
    "ratingNote": "Trustpilot 4.6/5, 238 reviews. Checked 27 Nov 2026.",
    "split": "75 (90% add-on)",
    "splitMax": 90,
    "dd": "6% static",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 1,
    "payoutText": "first withdrawal day 1, then every 30d",
    "from": 220,
    "fromCur": "USD",
    "fromPlan": "Equities 5K (Forex 25K $325 list)",
    "monthly": false,
    "code": "EXCITEMENT",
    "off": 40,
    "codes": [
      {
        "code": "EXCITEMENT",
        "off": 40,
        "detail": "40% off all evaluations, and all add-ons free — ends Nov 30, 2026"
      }
    ],
    "consistencyText": "none under $1M; 35% funded over $1M",
    "consNone": true,
    "target": "10",
    "dailyDD": "5%",
    "minDays": "none",
    "activation": "none stated",
    "instant": false,
    "instantText": "No",
    "scaling": "doubling to $5M cap",
    "news": "allowed, no open within 3 min of news",
    "overnight": "close by 3:45 PM EST Fri; weekend add-on",
    "us": "yes",
    "site": "https://mentfunding.com",
    "sources": [
      "https://mentfunding.com",
      "https://www.trustpilot.com/review/mentfunding.com"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "not stated",
    "platforms": [
      "cTrader",
      "DXtrade",
      "Match-Trader",
      "Rithmic",
      "ATAS"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "EXCITEMENT — 40% off all evaluations, and all add-ons free. Ends Nov 30, 2026.",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "One research read reports a 33% consistency rule on the futures program, which conflicts with the homepage's 'no consistency' position for accounts under $1M. Unresolved on the firm's own pages.",
    "summary": "US firm running a single 1-step evaluation across forex/CFD, CME futures and S&P 100 equities, up to $2M. 10% target, 6% static drawdown, 75% split (90% add-on), first withdrawal from day 1, then every 30 days.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "ment-funding-equities-5000",
        "program": "Equities",
        "name": "Equities",
        "size": 5000,
        "price": 220,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "10",
        "dailyLoss": "5%",
        "maxDD": "6% static",
        "ddType": "Static",
        "minDays": "none",
        "split": "75 (90% add-on)",
        "payout": "first withdrawal day 1, then every 30d",
        "platform": "cTrader, DXtrade, Match-Trader, Rithmic, ATAS",
        "source": "https://mentfunding.com"
      },
      {
        "id": "ment-funding-forex-25000",
        "program": "Forex",
        "name": "Forex",
        "size": 25000,
        "price": 325,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Named in the recorded starting-offer line. Not a full catalog.",
        "target": "10",
        "dailyLoss": "5%",
        "maxDD": "6% static",
        "ddType": "Static",
        "minDays": "none",
        "split": "75 (90% add-on)",
        "payout": "first withdrawal day 1, then every 30d",
        "platform": "cTrader, DXtrade, Match-Trader, Rithmic, ATAS",
        "source": "https://mentfunding.com"
      }
    ]
  },
  {
    "slug": "tradeify",
    "name": "Tradeify",
    "markets": [
      "futures"
    ],
    "rating": 4.6,
    "rsrc": "Trustpilot",
    "reviews": 7828,
    "ratingNote": "Trustpilot 4.6/5, 7,828 reviews. Checked 27 Nov 2026.",
    "split": "90 sim / 80 live",
    "splitMax": 90,
    "dd": "EOD trailing, $1000 (25K)",
    "ddTypes": [
      "EOD"
    ],
    "payoutDays": null,
    "payoutText": "Growth after 5 profitable days / Select Daily daily",
    "from": 99,
    "fromCur": "USD",
    "fromPlan": "Growth 25K, one-time",
    "monthly": false,
    "code": "NOV",
    "off": 30,
    "codes": [
      {
        "code": "NOV",
        "off": 30,
        "detail": "30% off, and 45% off 25K accounts excluding Miami — ends Nov 30, 2026, 11:59 PM EST"
      }
    ],
    "consistencyText": "Growth 35 funded / Select 40 eval / Lightning 20-30",
    "consNone": false,
    "target": "6",
    "dailyDD": "Growth soft DLL $600 (25K)",
    "minDays": "Growth 1 / Select 3",
    "activation": "none",
    "instant": true,
    "instantText": "Yes",
    "scaling": "not stated",
    "news": "allowed",
    "overnight": "no",
    "us": "yes",
    "site": "https://tradeify.co",
    "sources": [
      "https://tradeify.co",
      "https://help.tradeify.co/en/articles/14369021-tradeify-pricing-reference",
      "https://www.trustpilot.com/review/tradeify.co"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "not stated",
    "platforms": [
      "Tradovate",
      "NinjaTrader"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "NOV — 30% off, and 45% off 25K accounts excluding Miami. Ends Nov 30, 2026, 11:59 PM EST.",
    "tracked": true,
    "paid30": 53400000,
    "payouts30": 34376,
    "largest": 400000,
    "note": "The firm's homepage crawl on Nov 26, 2026 rendered $359 / $251 for every size, which conflicts with its own Pricing Reference ($99 list for Growth 25K). This page uses the documented Pricing Reference; the checkout price is the final word.",
    "summary": "US futures-only firm. Growth, Select and Lightning (instant) lines, $25K–$150K plus a 300K Select. 90% split on sim-funded accounts, 80% on Elite Live. Prices here are the firm's documented Pricing Reference list.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "tradeify-growth-25000",
        "program": "Growth",
        "name": "Growth",
        "size": 25000,
        "price": 99,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "6",
        "dailyLoss": "Growth soft DLL $600 (25K)",
        "maxDD": "EOD trailing, $1000 (25K)",
        "ddType": "EOD",
        "minDays": "Growth 1 / Select 3",
        "split": "90 sim / 80 live",
        "payout": "Growth after 5 profitable days / Select Daily daily",
        "platform": "Tradovate, NinjaTrader",
        "source": "https://tradeify.co"
      }
    ]
  },
  {
    "slug": "apex-trader-funding",
    "name": "Apex Trader Funding",
    "markets": [
      "futures"
    ],
    "rating": 4.2,
    "rsrc": "Trustpilot",
    "reviews": 22000,
    "ratingNote": "Shown on the firm's homepage",
    "split": "100% of approved payouts",
    "splitMax": 100,
    "dd": "Intraday or EOD trailing, $1000 (25K)",
    "ddTypes": [
      "Intraday"
    ],
    "payoutDays": 5,
    "payoutText": "5 trading days between payouts",
    "from": 167,
    "fromCur": "USD",
    "fromPlan": "Intraday Trail Std 25K list ($16.70 with SAVENOW)",
    "monthly": false,
    "code": "SAVENOW",
    "off": 90,
    "codes": [
      {
        "code": "SAVENOW",
        "off": 90,
        "detail": "90% off all evaluations — ends Nov 30, 2026 (countdown on the firm's homepage on Nov 26, 2026)"
      }
    ],
    "consistencyText": "none eval; 50% at payout",
    "consNone": false,
    "target": "6",
    "dailyDD": "Intraday none; EOD $500 (25K)",
    "minDays": "none",
    "activation": "Std $89-$149 Intraday / $109-$159 EOD",
    "instant": true,
    "instantText": "partial (Instant Sim offer; Instant PAs coming soon)",
    "scaling": "Built In Scaling claimed, terms not stated",
    "news": "not stated",
    "overnight": "no",
    "us": "yes",
    "site": "https://apextraderfunding.com",
    "sources": [
      "https://apextraderfunding.com",
      "https://www.trustpilot.com/review/apextraderfunding.com"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "not stated",
    "platforms": [
      "Rithmic",
      "Tradovate",
      "WealthCharts"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "90% off all evaluations (homepage banner with countdown; ends Nov 30, 2026)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "List price is shown. With code SAVENOW (90% off) the 25K Intraday Trail Standard was $16.70 on Nov 26, 2026. Instant funding is only partial: a limited-time $50K Instant Sim offer, with 'Instant PAs (coming soon)'.",
    "summary": "US futures firm built around running several accounts at once. Intraday Trail and EOD Trail evaluations, each in Standard and No-Activation-Fee versions. Pays 100% of each approved payout in the sim-funded Performance Account, with a 50% consistency gate at payout.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "apex-trader-funding-intraday-trail-std-25000",
        "program": "Intraday Trail Std",
        "name": "Intraday Trail Std",
        "size": 25000,
        "price": 167,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "6",
        "dailyLoss": "Intraday none; EOD $500 (25K)",
        "maxDD": "Intraday or EOD trailing, $1000 (25K)",
        "ddType": "Intraday",
        "minDays": "none",
        "split": "100% of approved payouts",
        "payout": "5 trading days between payouts",
        "platform": "Rithmic, Tradovate, WealthCharts",
        "source": "https://apextraderfunding.com"
      }
    ]
  },
  {
    "slug": "bulenox",
    "name": "Bulenox",
    "markets": [
      "futures"
    ],
    "rating": 4.6,
    "rsrc": "Trustpilot",
    "reviews": 1841,
    "ratingNote": "Read on trustpilot.com",
    "split": "100% of first $10K, then 90%",
    "splitMax": 100,
    "dd": "Intraday or EOD trailing, $1000 (25K Momentum)",
    "ddTypes": [
      "Intraday"
    ],
    "payoutDays": 1,
    "payoutText": "daily (Fast Track/Momentum)",
    "from": 94,
    "fromCur": "USD",
    "fromPlan": "Momentum 25K, one-time",
    "monthly": false,
    "code": "BULENOX",
    "off": null,
    "codes": [
      {
        "code": "BULENOX",
        "off": null,
        "detail": "Advertised on the official site; percentage not stated"
      }
    ],
    "consistencyText": "Qualification 40 / Momentum 35 / Fast Track 20-30",
    "consNone": false,
    "target": "6",
    "dailyDD": "Option 2 only",
    "minDays": "none to pass Qualification",
    "activation": "Qualification Master $143-$498; Momentum $0; Fast Track $0",
    "instant": true,
    "instantText": "Yes",
    "scaling": "up to $750,000 claimed",
    "news": "allowed, no blackout",
    "overnight": "no",
    "us": "yes",
    "site": "https://bulenox.com",
    "sources": [
      "https://bulenox.com",
      "https://www.trustpilot.com/review/bulenox.com"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "not stated",
    "platforms": [
      "Not listed"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "Advertised on the official site; percentage not stated",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "One research read listed Momentum drawdowns for larger sizes as $2,000 / $3,000 / $4,500 where another listed $2,250 / $4,000 / $5,500. The 25K figure ($1,000) agrees in both; treat larger sizes as checkout-verified only.",
    "summary": "US futures firm with three lines — Qualification, Momentum and Fast Track (instant). Traders keep 100% of the first $10,000 of payouts, then 90%. Two drawdown models (intraday or EOD trailing); the choice is locked for the life of the account.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "bulenox-momentum-25000",
        "program": "Momentum",
        "name": "Momentum",
        "size": 25000,
        "price": 94,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "6",
        "dailyLoss": "Option 2 only",
        "maxDD": "Intraday or EOD trailing, $1000 (25K Momentum)",
        "ddType": "Intraday",
        "minDays": "none to pass Qualification",
        "split": "100% of first $10K, then 90%",
        "payout": "daily (Fast Track/Momentum)",
        "platform": null,
        "source": "https://bulenox.com"
      }
    ]
  },
  {
    "slug": "fundednext",
    "name": "FundedNext",
    "markets": [
      "forex",
      "futures"
    ],
    "rating": 4.5,
    "rsrc": "Trustpilot",
    "reviews": 85011,
    "ratingNote": "Trustpilot 4.5/5, 85,011 reviews. Checked 27 Nov 2026.",
    "split": "80 (90 scale-up, 95 add-on)",
    "splitMax": 95,
    "dd": "10% static (2-Step)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 14,
    "payoutText": "Std first 21d then 14d / 3-Day every 3d / On-Demand anytime",
    "from": 32.99,
    "fromCur": "USD",
    "fromPlan": "Stellar Lite 5K",
    "monthly": false,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "2-Step Std none / On-Demand 40 / Flex 40 challenge only",
    "consNone": false,
    "target": "2-Step 8 then 5",
    "dailyDD": "5% (2-Step)",
    "minDays": "5 per phase",
    "activation": "none stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "to 90% split; Instant to $2,000,000",
    "news": "allowed, 40% profit counts in 10-min window",
    "overnight": "Instant allowed; weekend not separately stated",
    "us": "yes (US price list; 15% payout not for US)",
    "site": "https://fundednext.com",
    "sources": [
      "https://fundednext.com/blog/fundednext-cfds-stellar-2-step-explained",
      "https://fundednext.com/partners",
      "https://fundednext.com",
      "https://www.trustpilot.com/review/fundednext.com"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes, 8-15%",
    "platforms": [
      "MT4",
      "MT5",
      "cTrader",
      "Tradovate (Futures)"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": null,
    "tracked": true,
    "paid30": 16690000,
    "payouts30": null,
    "largest": null,
    "note": null,
    "summary": "CFD line (Stellar Lite, 2-Step, 1-Step, Instant) plus a separate Futures Flex line on Tradovate. Payout structure is chosen at checkout for the life of the account: Standard (21 days, then 14), 3-Day, or On-Demand with a 40% best-day rule.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "fundednext-stellar-lite-5000",
        "program": "Stellar Lite",
        "name": "Stellar Lite",
        "size": 5000,
        "price": 32.99,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "2-Step 8 then 5",
        "dailyLoss": "5% (2-Step)",
        "maxDD": "10% static (2-Step)",
        "ddType": "Static",
        "minDays": "5 per phase",
        "split": "80 (90 scale-up, 95 add-on)",
        "payout": "Std first 21d then 14d / 3-Day every 3d / On-Demand anytime",
        "platform": "MT4, MT5, cTrader, Tradovate (Futures)",
        "source": "https://fundednext.com/blog/fundednext-cfds-stellar-2-step-explained"
      }
    ]
  },
  {
    "slug": "fundingpips",
    "name": "FundingPips",
    "markets": [
      "forex"
    ],
    "rating": 4.5,
    "rsrc": "Trustpilot",
    "reviews": 76765,
    "ratingNote": "Read on trustpilot.com on Nov 26, 2026",
    "split": "60-100 by cycle",
    "splitMax": 100,
    "dd": "10% static (2-Step Std)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 7,
    "payoutText": "weekly / bi-weekly / on demand",
    "from": 29,
    "fromCur": "USD",
    "fromPlan": "2-Step Pro 5K",
    "monthly": false,
    "code": "BF22",
    "off": 22,
    "codes": [
      {
        "code": "BF22",
        "off": 22,
        "detail": "22% off all accounts (homepage banner, checked 27 Nov 2026)"
      }
    ],
    "consistencyText": "evals none; Zero 15%",
    "consNone": false,
    "target": "2-Step Std 8 then 5",
    "dailyDD": "3% or 5% (2-Step Std)",
    "minDays": "2-Step Std 3 per phase",
    "activation": "none stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "up to $400K total",
    "news": "profit deducted within 5 min of high-impact news (Master)",
    "overnight": "allowed in eval; Zero no weekend holding",
    "us": "not confirmed on fundingpips.com",
    "site": "https://fundingpips.com",
    "sources": [
      "https://fundingpips.com/blog/fundingpips-vs-breakout-challenge-costs",
      "https://help.fundingpips.com/hc/en-us/articles/34501809112081-2-Step-Standard",
      "https://www.trustpilot.com/review/fundingpips.com",
      "https://fundingpips.com"
    ],
    "verif": "partial (US eligibility unconfirmed)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, 6-10%",
    "platforms": [
      "MT5",
      "cTrader",
      "Match-Trader"
    ],
    "payMethods": [
      "Card",
      "Crypto (USDT/USDC)",
      "Rise",
      "Bank transfer"
    ],
    "deal": "BF22 — 22% off all accounts (homepage banner, checked 27 Nov 2026).",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "US eligibility is NOT confirmed on fundingpips.com. A different domain, fundingpips.net (FundingPips Corp, a different entity), states it does not accept US residents — do not mix the two sites' answers.",
    "summary": "Forex/CFD firm — no futures program was stated on the pages read. 2-Step Standard lets you pick the payout cycle at checkout and the split follows it: weekly 60%, bi-weekly 80%, on demand 100%. Zero is the instant line, at 95% every 14 days.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "fundingpips-2-step-pro-5000",
        "program": "2-Step Pro",
        "name": "2-Step Pro",
        "size": 5000,
        "price": 29,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "2-Step Std 8 then 5",
        "dailyLoss": "3% or 5% (2-Step Std)",
        "maxDD": "10% static (2-Step Std)",
        "ddType": "Static",
        "minDays": "2-Step Std 3 per phase",
        "split": "60-100 by cycle",
        "payout": "weekly / bi-weekly / on demand",
        "platform": "MT5, cTrader, Match-Trader",
        "source": "https://fundingpips.com/blog/fundingpips-vs-breakout-challenge-costs"
      }
    ]
  },
  {
    "slug": "fxify",
    "name": "FXIFY",
    "markets": [
      "forex",
      "crypto",
      "futures"
    ],
    "rating": 4.3,
    "rsrc": "Trustpilot",
    "reviews": 6741,
    "ratingNote": "Read on trustpilot.com on Nov 26, 2026",
    "split": "80 std (90% add-on)",
    "splitMax": 90,
    "dd": "5% static (Three Phase)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 14,
    "payoutText": "Instant bi-weekly",
    "from": 39,
    "fromCur": "USD",
    "fromPlan": "Three Phase 5K",
    "monthly": false,
    "code": "BLACK35",
    "off": 35,
    "codes": [
      {
        "code": "BLACK35",
        "off": 35,
        "detail": "35% off all programs except Instant Lite. End date not stated on the homepage."
      }
    ],
    "consistencyText": "Lightning 30 / Three Phase none",
    "consNone": false,
    "target": "Three Phase 5% per phase",
    "dailyDD": "Lightning 3%",
    "minDays": "Lightning 5",
    "activation": "not stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "not stated",
    "news": "Instant blackout 5 min around news",
    "overnight": "not stated",
    "us": "not stated",
    "site": "https://fxify.com",
    "sources": [
      "https://fxify.com/blog/cheapest-path-funded-50k-fxify/",
      "https://www.trustpilot.com/review/fxify.com",
      "https://fxify.com"
    ],
    "verif": "partial",
    "verifLabel": "Partially verified",
    "affiliate": "not verified",
    "platforms": [
      "MT4",
      "MT5",
      "DXtrade",
      "TradingView"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "BLACK35 — 35% off all programs except Instant Lite. No end date was stated on the homepage.",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": null,
    "summary": "Forex/CFD evaluations (One, Two and Three Phase) plus separate crypto and futures programs. Three Phase is the cheapest entry at $39 for 5K with a 5% static drawdown; instant funding runs from a $19 Lite account to a $1,749 Standard 50K.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "fxify-three-phase-5000",
        "program": "Three Phase",
        "name": "Three Phase",
        "size": 5000,
        "price": 39,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "Three Phase 5% per phase",
        "dailyLoss": "Lightning 3%",
        "maxDD": "5% static (Three Phase)",
        "ddType": "Static",
        "minDays": "Lightning 5",
        "split": "80 std (90% add-on)",
        "payout": "Instant bi-weekly",
        "platform": "MT4, MT5, DXtrade, TradingView",
        "source": "https://fxify.com/blog/cheapest-path-funded-50k-fxify/"
      }
    ]
  },
  {
    "slug": "goat-funded-trader",
    "name": "Goat Funded Trader",
    "markets": [
      "forex",
      "crypto"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": 4388,
    "ratingNote": "Rating withheld by Trustpilot (breach of guidelines; fake reviews removed). 4,388 reviews on the profile. Checked 27 Nov 2026.",
    "split": "80 (100% add-on)",
    "splitMax": 100,
    "dd": "10% static (2-Step)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 14,
    "payoutText": "bi-weekly 14d",
    "from": 17,
    "fromCur": "USD",
    "fromPlan": "2-Step GOAT / Instant HERO 5K",
    "monthly": false,
    "code": "BLACKFRIDAY55",
    "off": 55,
    "codes": [
      {
        "code": "BLACKFRIDAY55",
        "off": 55,
        "detail": "55% off all accounts (Black Friday banner; no end date stated)"
      },
      {
        "code": "firstGFT",
        "off": 50,
        "detail": "50% off for new customers (homepage)"
      }
    ],
    "consistencyText": "none eval; Instant GOAT 15%",
    "consNone": false,
    "target": "2-Step 10 then 5",
    "dailyDD": "5% (2-Step Std)",
    "minDays": "3 profitable days eval",
    "activation": "Pay Later only, $78-$998 after passing",
    "instant": true,
    "instantText": "Yes",
    "scaling": "to $2,000,000",
    "news": "permitted",
    "overnight": "permitted",
    "us": "yes (US not on restricted list)",
    "site": "https://www.goatfundedtrader.com",
    "sources": [
      "https://www.goatfundedtrader.com/blog/goat-funded-trader-vs-the-5ers",
      "https://www.goatfundedtrader.com",
      "https://www.trustpilot.com/review/goatfundedtrader.com"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes",
    "platforms": [
      "MT5",
      "cTrader",
      "MatchTrader",
      "TradeLocker"
    ],
    "payMethods": [
      "Rise",
      "Crypto",
      "Skrill",
      "Bank transfer"
    ],
    "deal": "55% off all accounts (Black Friday banner)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Do not mix with GOAT Funded Futures (goatfundedfutures.com), the futures sister brand — different rules, prices and programs.",
    "summary": "Forex/CFD firm (futures are the separate GOAT Funded Futures brand). 1-Step and 2-Step GOAT evaluations plus Instant HERO, GOAT and PREMIUM lines. 80% split from the first funded payout on every route; news, overnight and weekend holding are permitted.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "goat-funded-trader-2-step-goat-instant-hero-5000",
        "program": "2-Step GOAT / Instant HERO",
        "name": "2-Step GOAT / Instant HERO",
        "size": 5000,
        "price": 17,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "2-Step 10 then 5",
        "dailyLoss": "5% (2-Step Std)",
        "maxDD": "10% static (2-Step)",
        "ddType": "Static",
        "minDays": "3 profitable days eval",
        "split": "80 (100% add-on)",
        "payout": "bi-weekly 14d",
        "platform": "MT5, cTrader, MatchTrader, TradeLocker",
        "source": "https://www.goatfundedtrader.com/blog/goat-funded-trader-vs-the-5ers"
      }
    ]
  },
  {
    "slug": "e8-perpetuals",
    "name": "E8 Perpetuals",
    "markets": [
      "perps"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot withholds this firm's score (rating unavailable due to a breach of Trustpilot's guidelines; 'Warning' label) — checked Nov 26, 2026",
    "split": "80% on E8 One; Classic not stated",
    "splitMax": null,
    "dd": "5% static, never trails (e.g. $2,500 on 50K Classic)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": null,
    "payoutText": "Daily payouts, $100 minimum (E8 Classic)",
    "from": 27,
    "fromCur": "USD",
    "fromPlan": "E8 Classic 2K (list price, before code)",
    "monthly": false,
    "code": "E8BF",
    "off": 10,
    "codes": [
      {
        "code": "E8BF",
        "off": 10,
        "detail": "10% off E8 Classic (30% off E8 One on the compare page), Black Friday; end date not stated"
      }
    ],
    "consistencyText": "None on E8 Classic; 40% on E8 One",
    "consNone": true,
    "target": "8% ($4,000 on 50K Classic)",
    "dailyDD": "2% daily limit ($1,000 on 50K Classic)",
    "minDays": "not stated",
    "activation": "none stated (E8 One: no activation fee)",
    "instant": false,
    "instantText": "No",
    "scaling": "Hold up to $100K across Classic accounts",
    "news": "not stated",
    "overnight": "not stated",
    "us": "not stated (site describes itself as US-based)",
    "site": "https://e8markets.com",
    "sources": [
      "https://trade.e8markets.com/docs/05_markets_and_instruments.html",
      "https://www.trustpilot.com/review/e8markets.com",
      "https://e8markets.com/perpetual-futures?market=perpetual",
      "https://e8markets.com/compare-simfi-funded-accounts",
      "https://e8markets.com"
    ],
    "verif": "partial (products beyond E8 Classic and E8 One not read)",
    "verifLabel": "Partially verified",
    "affiliate": "not verified",
    "platforms": [
      "E8 Terminal"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "E8BF: 10% off E8 Classic, 30% off E8 One (Black Friday)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": 216000,
    "note": "Read from e8markets.com on Nov 26, 2026 (perpetuals page and account configurator). Figures shown are for E8 Classic unless stated. The firm also sells Classic Markets (forex, futures) on MT5, TradeLocker, cTrader and MatchTrader; those were not reviewed here. Trustpilot shows no score for E8.",
    "summary": "Perpetual futures on crypto, stocks, indices and metals traded on the E8 Terminal. E8 Classic starts at $27 for 2K: 8% target, 5% static loss floor that never trails, 2% daily limit, no consistency rule, daily payouts from $100.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "e8-perpetuals-e8-classic-2000",
        "program": "E8 Classic",
        "name": "E8 Classic",
        "size": 2000,
        "price": 27,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "8% ($4,000 on 50K Classic)",
        "dailyLoss": "2% daily limit ($1,000 on 50K Classic)",
        "maxDD": "5% static, never trails (e.g. $2,500 on 50K Classic)",
        "ddType": "Static",
        "minDays": "not stated",
        "split": "80% on E8 One; Classic not stated",
        "payout": "Daily payouts, $100 minimum (E8 Classic)",
        "platform": "E8 Terminal",
        "source": "https://trade.e8markets.com/docs/05_markets_and_instruments.html"
      }
    ]
  },
  {
    "slug": "the5ers",
    "name": "The5ers",
    "markets": [
      "forex"
    ],
    "rating": 4.7,
    "rsrc": "Trustpilot",
    "reviews": 45045,
    "ratingNote": "Read on trustpilot.com on Nov 26, 2026",
    "split": "80 rising to 100%",
    "splitMax": 100,
    "dd": "10% (partially verified)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 14,
    "payoutText": "first 14d, then bi-weekly",
    "from": 19,
    "fromCur": "USD",
    "fromPlan": "High Stakes 2.5K (100K $405 New / $455 Classic; FAQ example $545 — conflict)",
    "monthly": false,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "none published",
    "consNone": false,
    "target": "High Stakes 10 then 5",
    "dailyDD": "5% (partially verified)",
    "minDays": "3 profitable days per phase",
    "activation": "none stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "to $500,000",
    "news": "no orders 2 min before/after high-impact news",
    "overnight": "allowed",
    "us": "not stated",
    "site": "https://the5ers.com",
    "sources": [
      "https://the5ers.com/high-stakes/",
      "https://www.trustpilot.com/review/the5ers.com",
      "https://the5ers.com"
    ],
    "verif": "partial",
    "verifLabel": "Partially verified",
    "affiliate": "not verified",
    "platforms": [
      "MT5"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": null,
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Internal conflict on the firm's own pages: the $100K High Stakes account is $405 (New) / $455 (Classic) on the program page, but a payout FAQ example prices it at $545. Re-check at checkout. The 10% max drawdown and 5% daily figures are partially verified.",
    "summary": "Forex/CFD firm known for scaling: the High Stakes split starts at 80% and rises with account growth to 100% plus fixed payouts at the top tiers. First payout 14 days after the funded account starts, then bi-weekly.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "the5ers-high-stakes-2500",
        "program": "High Stakes",
        "name": "High Stakes",
        "size": 2500,
        "price": 19,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "High Stakes 10 then 5",
        "dailyLoss": "5% (partially verified)",
        "maxDD": "10% (partially verified)",
        "ddType": "Static",
        "minDays": "3 profitable days per phase",
        "split": "80 rising to 100%",
        "payout": "first 14d, then bi-weekly",
        "platform": "MT5",
        "source": "https://the5ers.com/high-stakes/"
      }
    ]
  },
  {
    "slug": "alpha-capital",
    "name": "Alpha Capital",
    "markets": [
      "forex"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": 22363,
    "ratingNote": "Rating withheld by Trustpilot (breach of guidelines; fake reviews removed). 22,363 reviews on the profile. Checked 27 Nov 2026.",
    "split": "80 (90% add-on / Direct)",
    "splitMax": 90,
    "dd": "6% static (Pro 6%)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 14,
    "payoutText": "bi-weekly or on-demand",
    "from": 27,
    "fromCur": "USD",
    "fromPlan": "Alpha Pro 6% 5K",
    "monthly": false,
    "code": "FUNDED40",
    "off": 40,
    "codes": [
      {
        "code": "FUNDED40",
        "off": 40,
        "detail": "Black Friday: 40% off — ends Nov 30, 2026 (countdown on the firm's homepage on Nov 26, 2026)"
      }
    ],
    "consistencyText": "on-demand 40 / Direct 15",
    "consNone": false,
    "target": "Pro 6% 6 then 6",
    "dailyDD": "3-5% by variant",
    "minDays": "Pro 3 per phase",
    "activation": "none stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "not stated",
    "news": "10-min window on Qualified; Direct 5-min window",
    "overnight": "varies by plan; Direct no weekend",
    "us": "not stated",
    "site": "https://alphacapitalgroup.uk",
    "sources": [
      "https://alphacapitalgroup.uk/resources/alpha-capital-2026-plan-pricing-update",
      "https://alphacapitalgroup.uk",
      "https://www.trustpilot.com/review/alphacapitalgroup.uk"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "not verified",
    "platforms": [
      "MT5",
      "cTrader",
      "DXtrade",
      "TradeLocker"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "40% off (Black Friday banner; ends Nov 30, 2026)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": null,
    "summary": "Forex/CFD firm with Alpha One, Alpha Pro (6%, 8% and 10% variants), Alpha Swing and Alpha Direct (instant, 90% split). Payout cycle — bi-weekly or on-demand — is chosen at checkout and changes both the price and the consistency rule.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "alpha-capital-alpha-pro-6-5000",
        "program": "Alpha Pro 6%",
        "name": "Alpha Pro 6%",
        "size": 5000,
        "price": 27,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "Pro 6% 6 then 6",
        "dailyLoss": "3-5% by variant",
        "maxDD": "6% static (Pro 6%)",
        "ddType": "Static",
        "minDays": "Pro 3 per phase",
        "split": "80 (90% add-on / Direct)",
        "payout": "bi-weekly or on-demand",
        "platform": "MT5, cTrader, DXtrade, TradeLocker",
        "source": "https://alphacapitalgroup.uk/resources/alpha-capital-2026-plan-pricing-update"
      }
    ]
  },
  {
    "slug": "funded-trading-plus",
    "name": "Funded Trading Plus",
    "markets": [
      "forex"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot withholds this firm's score (rating unavailable due to a breach of Trustpilot's guidelines; 'Warning' label) — checked Nov 26, 2026",
    "split": "not stated",
    "splitMax": null,
    "dd": "Max drawdown 6% trailing (1-Step, Instant), 8% static (2-Step), 6% static (Pass Now Pay Later)",
    "ddTypes": [
      "Trailing",
      "Static"
    ],
    "payoutDays": 7,
    "payoutText": "7-day reward cycle (10 days on 2-Step)",
    "from": 4,
    "fromCur": "USD",
    "fromPlan": "Pay-later start, 2% target",
    "monthly": false,
    "code": "BF375",
    "off": 37.5,
    "codes": [
      {
        "code": "BF375",
        "off": 37.5,
        "detail": "37.5% off $5K–$10K accounts"
      },
      {
        "code": "BF35",
        "off": 35,
        "detail": "35% off $25K–$50K accounts"
      },
      {
        "code": "BF325",
        "off": 32.5,
        "detail": "32.5% off $100K–$200K accounts"
      }
    ],
    "consistencyText": "not stated",
    "consNone": false,
    "target": "10% (1-Step), 7% + 7% (2-Step), 2% (Pass Now Pay Later), none on Instant",
    "dailyDD": "4% (6% on Instant)",
    "minDays": "not stated",
    "activation": "not stated",
    "instant": true,
    "instantText": "Yes — Instant Funding, $4,499 for 100K",
    "scaling": "Scaling plans advertised",
    "news": "allowed",
    "overnight": "weekend holding allowed (not on Instant)",
    "us": "not stated (MT5 unavailable in the USA; Match-Trader offered)",
    "site": "https://www.fundedtradingplus.com",
    "sources": [
      "https://www.fundedtradingplus.com/affiliates",
      "https://www.trustpilot.com/review/fundedtradingplus.com",
      "https://www.fundedtradingplus.com/prop-trading-challenges/compare-challenges",
      "https://www.fundedtradingplus.com"
    ],
    "verif": "partial (profit split and smaller-size prices not read)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, 15% new / 5% repeat",
    "platforms": [
      "MT5",
      "Match-Trader"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "BF375 37.5% off $5K–$10K, BF35 35% off $25K–$50K, BF325 32.5% off $100K–$200K.",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Read from fundedtradingplus.com compare-challenges page on Nov 26, 2026; prices are the $100K list prices. The profit split page is an accordion that did not render its figures, so the split is not stated. Trustpilot shows no score for this firm.",
    "summary": "UK-based forex/CFD firm offering Instant Funding, 1-Step Express, 2-Step Classic and Pass Now Pay Later (start for $4). News trading allowed on every path; 7-day reward cycle.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "funded-trading-plus-1-step-express-100000",
        "program": "1-Step Express",
        "name": "1-Step Express",
        "size": 100000,
        "price": 549,
        "currency": "USD",
        "monthly": false,
        "coverage": "verified",
        "note": "List $549. $370.58 with code BF325, checked 27 Nov 2026. A separate pay-later start at $4 is the recorded from-price and is not a sized plan.",
        "target": "10% (1-Step), 7% + 7% (2-Step), 2% (Pass Now Pay Later), none on Instant",
        "dailyLoss": "4% (6% on Instant)",
        "maxDD": "Max drawdown 6% trailing (1-Step, Instant), 8% static (2-Step), 6% static (Pass Now Pay Later)",
        "ddType": "Trailing, Static",
        "minDays": "not stated",
        "split": "not stated",
        "payout": "7-day reward cycle (10 days on 2-Step)",
        "platform": "MT5, Match-Trader",
        "source": "https://www.fundedtradingplus.com/affiliates"
      }
    ]
  },
  {
    "slug": "blue-guardian",
    "name": "Blue Guardian",
    "markets": [
      "forex",
      "futures"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot withholds this firm's score (rating unavailable due to a breach of Trustpilot's guidelines; 'Warning' label) — checked Nov 26, 2026",
    "split": "85 std (90% add-on)",
    "splitMax": 90,
    "dd": "8% static (2-Step Std)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 14,
    "payoutText": "every 14d (7d add-on)",
    "from": 32,
    "fromCur": "USD",
    "fromPlan": "2-Step Std 5K list ($463 for 100K)",
    "monthly": false,
    "code": "BLACK",
    "off": 35,
    "codes": [
      {
        "code": "BLACK",
        "off": 35,
        "detail": "35% off everything. Homepage labels it a 24-hour flash sale — ends Nov 27, 2026"
      }
    ],
    "consistencyText": "2-Step Std none / Instant 20",
    "consNone": true,
    "target": "2-Step 8 then 4",
    "dailyDD": "4%",
    "minDays": "3 profitable days per phase",
    "activation": "none stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "not stated (third-party reads cite $4M)",
    "news": "restricted on Instant Std (+/-5 min)",
    "overnight": "not stated",
    "us": "yes, CFD on Match-Trader/TradeLocker only",
    "site": "https://blueguardian.com",
    "sources": [
      "https://blueguardian.com/",
      "https://blueguardian.com/affiliates",
      "https://www.trustpilot.com/review/blueguardian.com"
    ],
    "verif": "partial",
    "verifLabel": "Partially verified",
    "affiliate": "yes, up to 15%",
    "platforms": [
      "MT5",
      "Match-Trader",
      "TradeLocker",
      "Tradovate",
      "NinjaTrader",
      "TradingView",
      "DeepCharts"
    ],
    "payMethods": [
      "Crypto",
      "Rise"
    ],
    "deal": "BLACK — 35% off everything. The homepage calls it a 24-hour flash sale for Nov 27 only.",
    "tracked": true,
    "paid30": 4190000,
    "payouts30": null,
    "largest": null,
    "note": null,
    "summary": "Two markets: CFD evaluations and instant accounts to $400K, plus a newer futures model. 2-Step Standard is 85% (90% add-on) with an 8% static drawdown and payouts every 14 days. Note the Guardian Shield: at 2% floating loss on a funded account, trades close and the split drops to 50% permanently.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "blue-guardian-2-step-std-5000",
        "program": "2-Step Std",
        "name": "2-Step Std",
        "size": 5000,
        "price": 32,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "2-Step 8 then 4",
        "dailyLoss": "4%",
        "maxDD": "8% static (2-Step Std)",
        "ddType": "Static",
        "minDays": "3 profitable days per phase",
        "split": "85 std (90% add-on)",
        "payout": "every 14d (7d add-on)",
        "platform": "MT5, Match-Trader, TradeLocker, Tradovate, NinjaTrader, TradingView, DeepCharts",
        "source": "https://blueguardian.com/"
      },
      {
        "id": "blue-guardian-2-step-std-100000",
        "program": "2-Step Std",
        "name": "2-Step Std",
        "size": 100000,
        "price": 463,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Second size named in the recorded starting-offer line. Not re-checked as its own plan on 27 Nov 2026.",
        "target": "2-Step 8 then 4",
        "dailyLoss": "4%",
        "maxDD": "8% static (2-Step Std)",
        "ddType": "Static",
        "minDays": "3 profitable days per phase",
        "split": "85 std (90% add-on)",
        "payout": "every 14d (7d add-on)",
        "platform": "MT5, Match-Trader, TradeLocker, Tradovate, NinjaTrader, TradingView, DeepCharts",
        "source": "https://blueguardian.com/"
      }
    ]
  },
  {
    "slug": "aquafunded",
    "name": "AquaFunded",
    "markets": [
      "forex",
      "futures",
      "perps"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": 1223,
    "ratingNote": "Rating withheld by Trustpilot (breach of guidelines; fake reviews removed). 1,223 reviews on the profile. Checked 27 Nov 2026.",
    "split": "90 (100% add-on)",
    "splitMax": 100,
    "dd": "8% static",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 14,
    "payoutText": "bi-weekly",
    "from": 14,
    "fromCur": "USD",
    "fromPlan": "5K",
    "monthly": false,
    "code": "BLACKFRIDAY",
    "off": 40,
    "codes": [
      {
        "code": "BLACKFRIDAY",
        "off": 40,
        "detail": "40% off every account, plus buy 2 get a 3rd free (Black Friday weekend). End date not stated on the homepage."
      }
    ],
    "consistencyText": "20% (Pro Instant)",
    "consNone": false,
    "target": "2-Step 8 then 5",
    "dailyDD": "4%",
    "minDays": "5 (Pro Instant); 3 profitable (One-Step)",
    "activation": "none stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "to $4,000,000",
    "news": "allowed, profit capped 0.5% in +/-5 min window",
    "overnight": "yes, no restrictions",
    "us": "yes (US not on restricted list)",
    "site": "https://aquafunded.com",
    "sources": [
      "https://aquafunded.com/",
      "https://www.aquafunded.com/forex-rules",
      "https://www.trustpilot.com/review/aquafunded.com"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes",
    "platforms": [
      "MT5",
      "cTrader",
      "Match-Trader",
      "TradeLocker",
      "Tradovate",
      "NinjaTrader"
    ],
    "payMethods": [
      "Rise",
      "Crypto"
    ],
    "deal": "BLACKFRIDAY — 40% off every account, plus buy 2 get a 3rd free. The homepage calls it a Black Friday weekend offer and does not name an end time.",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": null,
    "summary": "CFD, futures and perps firm with Instant, One-Step, Two-Step, Three-Step and Flex models, from a $14 5K account. 90% standard split, 8% static drawdown, bi-weekly payouts, and scaling to $4,000,000.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "aquafunded-starting-offer-5000",
        "program": "Starting offer",
        "name": "Starting offer",
        "size": 5000,
        "price": 14,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "2-Step 8 then 5",
        "dailyLoss": "4%",
        "maxDD": "8% static",
        "ddType": "Static",
        "minDays": "5 (Pro Instant); 3 profitable (One-Step)",
        "split": "90 (100% add-on)",
        "payout": "bi-weekly",
        "platform": "MT5, cTrader, Match-Trader, TradeLocker, Tradovate, NinjaTrader",
        "source": "https://aquafunded.com/"
      }
    ]
  },
  {
    "slug": "tradeday",
    "name": "TradeDay",
    "markets": [
      "futures"
    ],
    "rating": 4.6,
    "rsrc": "Trustpilot",
    "reviews": 1457,
    "ratingNote": "Trustpilot 4.6/5, 1,457 reviews. Checked 27 Nov 2026.",
    "split": "50/50 below $4K profit, 80/20 above (Quick Pay Sim)",
    "splitMax": 90,
    "dd": "trailing, $1000 (25K)",
    "ddTypes": [
      "EOD"
    ],
    "payoutDays": 1,
    "payoutText": "Quick Pay day-one payouts",
    "from": 99,
    "fromCur": "USD",
    "fromPlan": "25K Quick Pay Intraday list ($39 with SALE60)",
    "monthly": false,
    "code": "SALE60",
    "off": 60,
    "codes": [
      {
        "code": "SALE60",
        "off": 60,
        "detail": "60% off + no activation fee — ends Dec 1, 2026 (official homepage banner)"
      }
    ],
    "consistencyText": "Quick Pay 30 eval / Fast Pass 45",
    "consNone": false,
    "target": "6",
    "dailyDD": "none",
    "minDays": "Quick Pay 5 / Fast Pass 3 (FAQ says none — conflict)",
    "activation": "none",
    "instant": false,
    "instantText": "No",
    "scaling": "to Funded Live at $10K profit / 5th payout",
    "news": "not stated",
    "overnight": "not stated",
    "us": "yes (US firm; ~83 barred)",
    "site": "https://tradeday.com",
    "sources": [
      "https://tradeday.com/",
      "https://www.tradeday.com/affiliate-program",
      "https://www.trustpilot.com/review/tradeday.com"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes, up to 22.5%",
    "platforms": [
      "Not listed"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "60% off + no activation fee — ends Dec 1, 2026 (official homepage banner)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Internal conflict on the firm's own pages: the homepage FAQ says Fast Pass has no minimum trading day requirement, while the plan cards say 'Min Trading Days 3'. Unresolved — check before buying.",
    "summary": "US futures firm (CME) with two programs: Quick Pay (day-one payouts, 50/50 split below $4,000 of current profit, 80/20 above) and Fast Pass (80/20). No activation fee and no subscription since Nov 12, 2026.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "tradeday-quick-pay-intraday-25000",
        "program": "Quick Pay Intraday",
        "name": "Quick Pay Intraday",
        "size": 25000,
        "price": 99,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "6",
        "dailyLoss": "none",
        "maxDD": "trailing, $1000 (25K)",
        "ddType": "EOD",
        "minDays": "Quick Pay 5 / Fast Pass 3 (FAQ says none — conflict)",
        "split": "50/50 below $4K profit, 80/20 above (Quick Pay Sim)",
        "payout": "Quick Pay day-one payouts",
        "platform": null,
        "source": "https://tradeday.com/"
      }
    ]
  },
  {
    "slug": "qt-funded",
    "name": "QT Funded",
    "markets": [
      "forex"
    ],
    "rating": 3.4,
    "rsrc": "Trustpilot",
    "reviews": 13422,
    "ratingNote": "Trustpilot 3.4/5, 13,422 reviews. Checked 27 Nov 2026.",
    "split": "70 (ONE) / 80 (TWO) / 100 (Instant)",
    "splitMax": 100,
    "dd": "6% trailing (ONE)",
    "ddTypes": [
      "EOD"
    ],
    "payoutDays": 4,
    "payoutText": "ONE every 4 trading days; TWO/Instant 14d (Instant cycle conflicts 4/7/14d)",
    "from": 5,
    "fromCur": "USD",
    "fromPlan": "headline 'Starts at $5' (what-is-prop page says from $26 — conflict)",
    "monthly": false,
    "code": "BLACK75",
    "off": 75,
    "codes": [
      {
        "code": "BLACK75",
        "off": 75,
        "detail": "75% off (Black Friday banner)"
      },
      {
        "code": "BLACK60",
        "off": 60,
        "detail": "60% off + a free same-size account (Black Friday banner)"
      }
    ],
    "consistencyText": "ONE/TWO none; Instant 30",
    "consNone": false,
    "target": "ONE 6 / TWO 8 then 5",
    "dailyDD": "3% (dated reads of official rules)",
    "minDays": "ONE 0",
    "activation": "not stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "up to $300K total",
    "news": "allowed (ONE)",
    "overnight": "weekend allowed (dated reads)",
    "us": "yes, TradeLocker only (MT5/cTrader barred)",
    "site": "https://qtfunded.quanttekel.com",
    "sources": [
      "https://qtfunded.quanttekel.com/",
      "https://www.trustpilot.com/review/quanttekel.com"
    ],
    "verif": "partial",
    "verifLabel": "Partially verified",
    "affiliate": "yes",
    "platforms": [
      "MT5",
      "TradeLocker"
    ],
    "payMethods": [
      "Crypto (USDC)",
      "Wire transfer"
    ],
    "deal": "75% off (Black Friday banner)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Open questions on the firm's own pages: the homepage says prices 'start at $5' while its what-is-prop page says 'from $26'; and QT Instant's payout cycle appears as 4 days on the plan card, 7 days in the FAQ and 14 days in the help centre. Do not treat $5 as the full price without checking checkout.",
    "summary": "Forex/CFD firm (Quant Tekel) on MT5 and TradeLocker; its futures section is marked 'Coming Soon'. QT ONE pays every 4 trading days at 70%, QT TWO at 80%, QT Instant at 100%. Its own pages conflict on the entry price — see the caveat on this page.",
    "verifiedOn": "Nov 27, 2026"
  },
  {
    "slug": "earn2trade",
    "name": "Earn2Trade",
    "markets": [
      "futures"
    ],
    "rating": 4.5,
    "rsrc": "Trustpilot",
    "reviews": 5000,
    "ratingNote": "Stated on the firm's own affiliates page ('over 5,000 Trustpilot reviews, TrustScore 4.5')",
    "split": "80% at/above thresholds, 50% below",
    "splitMax": 80,
    "dd": "EOD trailing, $1500 (25K)",
    "ddTypes": [
      "EOD"
    ],
    "payoutDays": 7,
    "payoutText": "weekly, Wednesdays",
    "from": 75,
    "fromCur": "USD",
    "fromPlan": "From $75 (TCP 25K–100K, homepage Black Week price)",
    "monthly": true,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "30% eval; none funded",
    "consNone": false,
    "target": "TCP25 7% ($1750)",
    "dailyDD": "$550 (25K), hard fail",
    "minDays": "none",
    "activation": "$139 deducted from first LiveSim withdrawal",
    "instant": false,
    "instantText": "No",
    "scaling": "TCP growth to $400K",
    "news": "allowed, no restrictions",
    "overnight": "not stated",
    "us": "yes",
    "site": "https://earn2trade.com",
    "sources": [
      "https://earn2trade.com/",
      "https://www.earn2trade.com/affiliates",
      "https://www.trustpilot.com/review/earn2trade.com"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes, 20%",
    "platforms": [
      "Not listed"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "Black Week: up to 70% off, plus reset savings. The code sits behind a Get the Code button and the name was not readable. Countdown points at about Nov 30, 2026.",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": null,
    "summary": "US futures firm with monthly-subscription evaluations: Trader Career Path ($25K–$100K) and Gauntlet Mini (to $200K). Passers are forwarded to partner prop firms for LiveSim/Live accounts. The split is 80% on withdrawals at or above set thresholds, 50% below them.",
    "verifiedOn": "Nov 27, 2026"
  },
  {
    "slug": "elite-trader-funding",
    "name": "Elite Trader Funding",
    "markets": [
      "futures"
    ],
    "rating": 3.7,
    "rsrc": "Trustpilot",
    "reviews": 1180,
    "ratingNote": "Trustpilot 3.7/5, 1,180 reviews. Checked 27 Nov 2026.",
    "split": "up to 100% sim",
    "splitMax": 100,
    "dd": "live trailing, $2000 (1-Step 50K)",
    "ddTypes": [
      "EOD"
    ],
    "payoutDays": null,
    "payoutText": "same-day approval; 8 ATDs first cycle",
    "from": 47,
    "fromCur": "USD",
    "fromPlan": "As low as $47, paid once",
    "monthly": false,
    "code": "GOBBLE90",
    "off": 90,
    "codes": [
      {
        "code": "GOBBLE90",
        "off": 90,
        "detail": "90% off the first month, 80% the second, 70% after (excludes Fast Track and DTF) — ends Nov 30, 2026, 11:59 PM ET"
      }
    ],
    "consistencyText": "no P&L consistency; ATD requirement instead",
    "consNone": false,
    "target": "1-Step 50K 6% ($3000)",
    "dailyDD": "none on 1-Step; EOD $1100-$2200",
    "minDays": "5 (1-Step); Fast Track 3",
    "activation": "$87/month or $177-$307 one-time after passing",
    "instant": true,
    "instantText": "Yes",
    "scaling": "up to 20 sim accounts; LIVE ELITE path",
    "news": "not stated",
    "overnight": "only Diamond Hands / Direct to Funded",
    "us": "not stated (US firm)",
    "site": "https://elitetraderfunding.app",
    "sources": [
      "https://elitetraderfunding.app/",
      "https://www.trustpilot.com/review/elitetraderfunding.com"
    ],
    "verif": "partial",
    "verifLabel": "Partially verified",
    "affiliate": "yes, up to 15%",
    "platforms": [
      "Rithmic",
      "Tradovate"
    ],
    "payMethods": [
      "Rise (ACH / crypto)"
    ],
    "deal": "GOBBLE90 — 90% off the first month, 80% the second, 70% after. Excludes Fast Track and DTF. Through Nov 30, 2026, 11:59 PM ET.",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": null,
    "summary": "US futures firm with six evaluations — 1-Step, Static, End of Day, Diamond Hands, Fast Track and Direct to Funded (instant). Instead of a P&L consistency rule it uses Active Trading Days: 8 to the first payout, 10 after.",
    "verifiedOn": "Nov 27, 2026"
  },
  {
    "slug": "nys-markets",
    "name": "NYS Markets",
    "markets": [
      "futures",
      "stocks",
      "forex",
      "crypto"
    ],
    "rating": 3.6,
    "rsrc": "Trustpilot",
    "reviews": 2988,
    "ratingNote": "Read on the firm's Trustpilot profile",
    "split": "80/20 (help centre; site claims up to 100%)",
    "splitMax": 80,
    "dd": "10% static (2-Step)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 1,
    "payoutText": "on demand, max 2% of balance per payout",
    "from": 19,
    "fromCur": "USD",
    "fromPlan": "Flash 10K entry (+ $50 activation)",
    "monthly": false,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "2-Step none; Instant 15%",
    "consNone": false,
    "target": "2-Step 8 then 5",
    "dailyDD": "5% (2-Step)",
    "minDays": "none",
    "activation": "Flash only $50-$409",
    "instant": true,
    "instantText": "Yes",
    "scaling": "invitation-only NYS Live Scale",
    "news": "restricted +/-10 min high-impact",
    "overnight": "permitted",
    "us": "not stated",
    "site": "https://nysmarkets.com",
    "sources": [
      "https://nysmarkets.com/",
      "https://help.nysmarkets.com/en/articles/16089441-cfds-pricing-plans",
      "https://www.trustpilot.com/review/nysmarkets.com"
    ],
    "verif": "partial",
    "verifLabel": "Partially verified",
    "affiliate": "yes (terms not found)",
    "platforms": [
      "MT5 (CFD)",
      "dxFeed (Futures)",
      "DeepCharts (Stocks)"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "Black Friday: the homepage says claim 70% off (One Rule Instant shown at 50%). The code was not visible on the page.",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Internal conflict: the firm's help centre states a flat 80/20 split, while the main site advertises 'up to 100%'. This page uses the help-centre figure. Prices also differ between the help-centre table and a newer 'Two Step Classic' list — checkout is the deciding price. The $19 Flash price is an entry fee; a $50 activation fee applies on passing at 10K ($269 at $100K).",
    "summary": "Multi-market firm (futures, stocks, CFDs, crypto) run from Saint Lucia. CFD programs include Instant, One Trade, 2-Step, Flash and One Rule. Payouts are on demand but capped at 2% of the initial balance per request.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "nys-markets-flash-10000",
        "program": "Flash",
        "name": "Flash",
        "size": 10000,
        "price": 19,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "2-Step 8 then 5",
        "dailyLoss": "5% (2-Step)",
        "maxDD": "10% static (2-Step)",
        "ddType": "Static",
        "minDays": "none",
        "split": "80/20 (help centre; site claims up to 100%)",
        "payout": "on demand, max 2% of balance per payout",
        "platform": "MT5 (CFD), dxFeed (Futures), DeepCharts (Stocks)",
        "source": "https://nysmarkets.com/"
      }
    ]
  },
  {
    "slug": "top-one-trader",
    "name": "Top One Trader",
    "markets": [
      "forex"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot withholds this firm's score (rating unavailable due to a breach of Trustpilot's guidelines; 'Warning' label) — checked Nov 26, 2026",
    "split": "up to 90% (1-Step) / 100% (2-Step PRO)",
    "splitMax": 100,
    "dd": "7% trailing (1-Step)",
    "ddTypes": [
      "EOD"
    ],
    "payoutDays": 14,
    "payoutText": "first 14d, then 14d",
    "from": 64,
    "fromCur": "USD",
    "fromPlan": "1-Step FLASH 5K list ($19 with BLACKFRIDAY)",
    "monthly": false,
    "code": "BLACKFRIDAY",
    "off": null,
    "codes": [
      {
        "code": "BLACKFRIDAY",
        "off": null,
        "detail": "Up to 80% off sitewide (official homepage)"
      }
    ],
    "consistencyText": "none eval; Instant 15%; Nova funded 20%",
    "consNone": false,
    "target": "1-Step 10 / 2-Step 8 then 5",
    "dailyDD": "4% (1-Step/2-Step)",
    "minDays": "1-Step 3 profitable days",
    "activation": "Nova only $59-$1247",
    "instant": true,
    "instantText": "Yes",
    "scaling": "up to $600K",
    "news": "allowed on challenges",
    "overnight": "yes (add-on on Instant/Prime)",
    "us": "not stated",
    "site": "https://www.toponetrader.com",
    "sources": [
      "https://www.toponetrader.com/",
      "https://www.trustpilot.com/review/toponetrader.com"
    ],
    "verif": "partial",
    "verifLabel": "Partially verified",
    "affiliate": "not verified",
    "platforms": [
      "Match-Trader",
      "MetaTrader",
      "TradeLocker"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "Up to 80% off sitewide (official homepage)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": null,
    "summary": "Forex/CFD firm (the futures side is the separate Top One Futures brand). 1-Step FLASH, 2-Step PRO, Instant Funding, Instant Prime and Nova lines from $5K to $1M. First payout 14 days after funding, then every 14 days.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "top-one-trader-1-step-flash-5000",
        "program": "1-Step FLASH",
        "name": "1-Step FLASH",
        "size": 5000,
        "price": 64,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "1-Step 10 / 2-Step 8 then 5",
        "dailyLoss": "4% (1-Step/2-Step)",
        "maxDD": "7% trailing (1-Step)",
        "ddType": "EOD",
        "minDays": "1-Step 3 profitable days",
        "split": "up to 90% (1-Step) / 100% (2-Step PRO)",
        "payout": "first 14d, then 14d",
        "platform": "Match-Trader, MetaTrader, TradeLocker",
        "source": "https://www.toponetrader.com/"
      }
    ]
  },
  {
    "slug": "blueberry-futures",
    "name": "Blueberry Futures",
    "markets": [
      "futures"
    ],
    "rating": 3.4,
    "rsrc": "Trustpilot",
    "reviews": 8,
    "ratingNote": "Verified against Trustpilot — only 8 reviews, so treat the score as thin evidence",
    "split": "90%",
    "splitMax": 90,
    "dd": "4% trailing (EOD Ascent / intraday Accelerated)",
    "ddTypes": [
      "Intraday"
    ],
    "payoutDays": 1,
    "payoutText": "on demand, 5 profitable days $200+",
    "from": 110.4,
    "fromCur": "USD",
    "fromPlan": "Accelerated 25K per month, monthly subscription",
    "monthly": true,
    "code": "FUTURES60",
    "off": 60,
    "codes": [
      {
        "code": "FUTURES60",
        "off": 60,
        "detail": "60% off every plan (shown on the firm's site)"
      }
    ],
    "consistencyText": "none eval; funded 35% Ascent / 20% Accelerated",
    "consNone": false,
    "target": "6",
    "dailyDD": "none",
    "minDays": "Ascent 2 / Accelerated 1",
    "activation": "none",
    "instant": false,
    "instantText": "No",
    "scaling": "max $450K across 3 accounts",
    "news": "restricted +/-3 min high-impact",
    "overnight": "no",
    "us": "UNRESOLVED — conflicting official checks",
    "site": "https://blueberryfutures.com",
    "sources": [
      "https://blueberryfutures.com",
      "https://help.blueberryfutures.com/en/articles/11196038",
      "https://www.trustpilot.com/review/blueberryfutures.com"
    ],
    "verif": "partial (US eligibility unresolved)",
    "verifLabel": "Partially verified",
    "affiliate": "none verified",
    "platforms": [
      "BlackArrow"
    ],
    "payMethods": [
      "Rise",
      "Crypto (USDT)"
    ],
    "deal": "60% off every plan (shown on the firm's site)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "US eligibility is UNRESOLVED: two checks of the firm's own restricted list disagree (one includes the US, one does not). Re-verify on the live help centre before buying. Separately: this is not Blueberry Funded.",
    "summary": "Futures-only firm (CME via BlackArrow) with two monthly-subscription evaluations: Ascent (EOD trailing) and Accelerated (intraday trailing). 90% split, 6% target, no activation fee, and a 'Road to Live' path after 7 payout cycles. Not Blueberry Funded.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "blueberry-futures-accelerated-25000",
        "program": "Accelerated",
        "name": "Accelerated",
        "size": 25000,
        "price": 110.4,
        "currency": "USD",
        "monthly": true,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "6",
        "dailyLoss": "none",
        "maxDD": "4% trailing (EOD Ascent / intraday Accelerated)",
        "ddType": "Intraday",
        "minDays": "Ascent 2 / Accelerated 1",
        "split": "90%",
        "payout": "on demand, 5 profitable days $200+",
        "platform": "BlackArrow",
        "source": "https://blueberryfutures.com"
      }
    ]
  },
  {
    "slug": "get-leveraged",
    "name": "Get Leveraged",
    "markets": [
      "forex",
      "crypto"
    ],
    "rating": 4.5,
    "rsrc": "Trustpilot",
    "reviews": 1330,
    "ratingNote": "Trustpilot 4.5/5, 1,330 reviews. Checked 27 Nov 2026.",
    "split": "80 (95% add-on)",
    "splitMax": 95,
    "dd": "6% trailing",
    "ddTypes": [
      "EOD"
    ],
    "payoutDays": 14,
    "payoutText": "every 14d (5d add-on)",
    "from": 8.88,
    "fromCur": "USD",
    "fromPlan": "Turbo 10K entry (total $85); cheapest full one-time $29 ONE 10K",
    "monthly": false,
    "code": "GREEN",
    "off": 20,
    "codes": [
      {
        "code": "GREEN",
        "off": 20,
        "detail": "20% off all programs. End date not stated on the homepage."
      }
    ],
    "consistencyText": "20% funded; none eval",
    "consNone": false,
    "target": "6",
    "dailyDD": "3%",
    "minDays": "3 profitable days funded",
    "activation": "Turbo $76.12-$1089.12 after passing",
    "instant": true,
    "instantText": "Yes",
    "scaling": "none (official FAQ)",
    "news": "restricted +/-5 min high-impact",
    "overnight": "allowed",
    "us": "no (US on restricted list)",
    "site": "https://getleveraged.com",
    "sources": [
      "https://getleveraged.com",
      "https://www.trustpilot.com/review/getleveraged.com"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes, 15-30%",
    "platforms": [
      "MT5",
      "cTrader"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "GREEN — 20% off all programs. No end date was stated on the homepage.",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "$8.88 is an entry fee, not the full price: the Turbo 10K total is $85 ($8.88 now + $76.12 activation after passing). The cheapest full one-time price is $29 (ONE 10K). US traders are not eligible.",
    "summary": "Forex/CFD and crypto firm. The $8.88 headline is an entry fee for Pay After You Pass, not the full price — a Turbo 10K costs $85 in total. US traders are on the restricted list and cannot join.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "get-leveraged-turbo-10000",
        "program": "Turbo",
        "name": "Turbo",
        "size": 10000,
        "price": 8.88,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "6",
        "dailyLoss": "3%",
        "maxDD": "6% trailing",
        "ddType": "EOD",
        "minDays": "3 profitable days funded",
        "split": "80 (95% add-on)",
        "payout": "every 14d (5d add-on)",
        "platform": "MT5, cTrader",
        "source": "https://getleveraged.com"
      }
    ]
  },
  {
    "slug": "goat-funded-futures",
    "name": "GOAT Funded Futures",
    "markets": [
      "futures"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": 185,
    "ratingNote": "Rating withheld by Trustpilot (breach of guidelines; fake reviews removed). 185 reviews on the profile. Checked 27 Nov 2026.",
    "split": "90/10",
    "splitMax": 90,
    "dd": "EOD trailing, 4% (25K/50K)",
    "ddTypes": [
      "EOD"
    ],
    "payoutDays": null,
    "payoutText": "twice monthly windows; GOAT Daily 24h",
    "from": 39,
    "fromCur": "USD",
    "fromPlan": "GOAT Access 50K (+ $99 activation)",
    "monthly": false,
    "code": "BLACKFRIDAY60",
    "off": 60,
    "codes": [
      {
        "code": "BLACKFRIDAY60",
        "off": 60,
        "detail": "60% off every plan except GOAT Access"
      }
    ],
    "consistencyText": "GOAT Daily 40 eval / EOD 50 eval / Instant 20 funded",
    "consNone": false,
    "target": "6",
    "dailyDD": "EOD none eval / 2.5% funded",
    "minDays": "GOAT Daily 3 / EOD 2 / Flex 2",
    "activation": "0",
    "instant": true,
    "instantText": "Yes",
    "scaling": "none",
    "news": "no limit in evals; funded +/-2 min",
    "overnight": "no",
    "us": "yes (US not on restricted list)",
    "site": "https://goatfundedfutures.com",
    "sources": [
      "https://goatfundedfutures.com/goat-access",
      "https://help.goatfundedfutures.com/get-started.html",
      "https://goatfundedfutures.com",
      "https://www.trustpilot.com/review/goatfundedfutures.com"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "none verified for GFF",
    "platforms": [
      "Tradovate",
      "NinjaTrader",
      "Rithmic",
      "Quantower",
      "TradingView",
      "WealthCharts",
      "DeepCharts",
      "ATAS"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "60% off every plan except GOAT Access",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Do not mix with Goat Funded Trader (goatfundedtrader.com), the CFD sister brand — different rules, prices and programs. The $39 GOAT Access price also carries a $99 activation fee after passing ($138 total); the cheapest standard plan is the $138 EOD 50K.",
    "summary": "Futures-only firm (CME group) — a different firm from Goat Funded Trader, the CFD brand. Lines include GOAT Daily (24-hour payouts), Flex, EOD Challenge, 1-Day Pass, Instant Classic/Lite and GOAT Access (50K, $39 plus a $99 activation fee after passing).",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "goat-funded-futures-goat-access-50000",
        "program": "GOAT Access",
        "name": "GOAT Access",
        "size": 50000,
        "price": 39,
        "currency": "USD",
        "monthly": false,
        "coverage": "verified",
        "note": "Homepage on 27 Nov 2026: default 90/10 split and $0 activation on all plans. The $39 figure is the recorded GOAT Access price.",
        "target": "6",
        "dailyLoss": "EOD none eval / 2.5% funded",
        "maxDD": "EOD trailing, 4% (25K/50K)",
        "ddType": "EOD",
        "minDays": "GOAT Daily 3 / EOD 2 / Flex 2",
        "split": "90/10",
        "payout": "twice monthly windows; GOAT Daily 24h",
        "platform": "Tradovate, NinjaTrader, Rithmic, Quantower, TradingView, WealthCharts, DeepCharts, ATAS",
        "source": "https://goatfundedfutures.com/goat-access"
      }
    ]
  },
  {
    "slug": "atlas-funded",
    "name": "Atlas Funded",
    "markets": [
      "forex",
      "futures"
    ],
    "rating": 3.9,
    "rsrc": "Trustpilot",
    "reviews": 2294,
    "ratingNote": "Read on Trustpilot. The firm's own site claims 4.8 — this page uses the Trustpilot figure, 3.9",
    "split": "90 (100% add-on)",
    "splitMax": 100,
    "dd": "EOD trailing (Futures); 10% static (CFD 2-Step Std)",
    "ddTypes": [
      "Static",
      "EOD"
    ],
    "payoutDays": 1,
    "payoutText": "24h payout guarantee claimed",
    "from": 43,
    "fromCur": "USD",
    "fromPlan": "CFD 2-Step Std 5K (Futures Daily 25K $85)",
    "monthly": false,
    "code": "BLACKFRIDAY",
    "off": 55,
    "codes": [
      {
        "code": "BLACKFRIDAY",
        "off": 55,
        "detail": "55% off. Homepage says limited time; no end date stated."
      }
    ],
    "consistencyText": "Futures Std 50 eval / 40 funded; CFD Instant 20",
    "consNone": false,
    "target": "Futures evals 6",
    "dailyDD": "Futures Std $600 (25K) lockout",
    "minDays": "Futures 2; CFD 3 per phase",
    "activation": "none",
    "instant": true,
    "instantText": "Yes",
    "scaling": "no published plan",
    "news": "Futures no restrictions; CFD funded +/-5 min deduction",
    "overnight": "Futures no; CFD yes",
    "us": "Futures: no country restrictions stated; CFD: MT5 not for US citizens",
    "site": "https://atlasfunded.com",
    "sources": [
      "https://atlasfunded.com",
      "https://docs.atlasfunded.com/trading-rules",
      "https://www.trustpilot.com/review/atlasfunded.com"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes, 12.5-22.5%",
    "platforms": [
      "TradeLocker",
      "Match-Trader",
      "MT5",
      "Volumetrica / Tradara / HyperProp (Futures)"
    ],
    "payMethods": [
      "Rise",
      "USDT"
    ],
    "deal": "BLACKFRIDAY — 55% off. The homepage says limited time and does not name an end date.",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "The firm's own site claims a 4.8 rating; Trustpilot shows 3.9/5 (~2,294 reviews). This page uses the Trustpilot figure. CFD note: the firm's terms say MT5 services are not intended for US citizens or residents; TradeLocker/Match-Trader are not restricted that way — confirm with support in writing.",
    "summary": "Two lines under one brand: forex/CFD (to $400K) and CME futures (to $150K), both at a 90% standard split with a claimed 24-hour payout guarantee. This is atlasfunded.com — not myatlasfund.com ('Atlas'), a separate futures-only firm.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "atlas-funded-cfd-2-step-std-5000",
        "program": "CFD 2-Step Std",
        "name": "CFD 2-Step Std",
        "size": 5000,
        "price": 43,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "Futures evals 6",
        "dailyLoss": "Futures Std $600 (25K) lockout",
        "maxDD": "EOD trailing (Futures); 10% static (CFD 2-Step Std)",
        "ddType": "Static, EOD",
        "minDays": "Futures 2; CFD 3 per phase",
        "split": "90 (100% add-on)",
        "payout": "24h payout guarantee claimed",
        "platform": "TradeLocker, Match-Trader, MT5, Volumetrica / Tradara / HyperProp (Futures)",
        "source": "https://atlasfunded.com"
      },
      {
        "id": "atlas-funded-daily-25000",
        "program": "Daily",
        "name": "Daily",
        "size": 25000,
        "price": 85,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Named in the recorded starting-offer line. Not a full catalog.",
        "target": "Futures evals 6",
        "dailyLoss": "Futures Std $600 (25K) lockout",
        "maxDD": "EOD trailing (Futures); 10% static (CFD 2-Step Std)",
        "ddType": "Static, EOD",
        "minDays": "Futures 2; CFD 3 per phase",
        "split": "90 (100% add-on)",
        "payout": "24h payout guarantee claimed",
        "platform": "TradeLocker, Match-Trader, MT5, Volumetrica / Tradara / HyperProp (Futures)",
        "source": "https://atlasfunded.com"
      }
    ]
  },
  {
    "slug": "blueberry-funded",
    "name": "Blueberry Funded",
    "markets": [
      "forex"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot rating withheld — breach-of-guidelines notice, fake reviews removed; no score is shown",
    "split": "80 (85% Flex)",
    "splitMax": 85,
    "dd": "6% static (1-Step)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 14,
    "payoutText": "14d cycle",
    "from": 44,
    "fromCur": "USD",
    "fromPlan": "1-Step 5K",
    "monthly": false,
    "code": "INSTANTBF",
    "off": 50,
    "codes": [
      {
        "code": "INSTANTBF",
        "off": 50,
        "detail": "50% off Instant Lite"
      },
      {
        "code": "PRIMEBF",
        "off": 40,
        "detail": "40% off Prime 2-Step"
      },
      {
        "code": "FLEX30",
        "off": 30,
        "detail": "30% off Flex"
      },
      {
        "code": "PRIME30",
        "off": 30,
        "detail": "30% off Prime"
      },
      {
        "code": "BF1",
        "off": 25,
        "detail": "25% off Prime, plus a free reset"
      }
    ],
    "consistencyText": "none challenges; Instant Lite rule, % not stated",
    "consNone": true,
    "target": "1-Step 10 / Flex 12",
    "dailyDD": "4% (1-Step)",
    "minDays": "3 per phase",
    "activation": "not clearly published",
    "instant": true,
    "instantText": "Yes",
    "scaling": "+25% every 3 months to $2,000,000",
    "news": "restricted +/-5 min high-impact",
    "overnight": "overnight yes; weekend yes except Flex",
    "us": "no (US and Australia restricted)",
    "site": "https://blueberryfunded.com",
    "sources": [
      "https://blueberryfunded.com",
      "https://blueberryfunded.com/best-discount-code-invest/",
      "https://www.trustpilot.com/review/blueberryfunded.com"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes, 12.5-20% + 10% recurring",
    "platforms": [
      "MT5",
      "TradeLocker"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "PRIMEBF 40% off Prime 2-Step; INSTANTBF 50% off Instant Lite; BF1 25% off Prime plus a free reset; FLEX30 and PRIME30 still 30% off.",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Do not mix with Blueberry Futures (blueberryfutures.com) — a futures firm on a monthly subscription, with different prices and rules.",
    "summary": "Forex/CFD firm (MT5, TradeLocker) with Flex 1-Step, 1-Step and Prime 2-Step challenges plus Instant Elite and Instant Lite. US and Australian residents are restricted. Not Blueberry Futures, the monthly-subscription futures firm.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "blueberry-funded-1-step-5000",
        "program": "1-Step",
        "name": "1-Step",
        "size": 5000,
        "price": 44,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "1-Step 10 / Flex 12",
        "dailyLoss": "4% (1-Step)",
        "maxDD": "6% static (1-Step)",
        "ddType": "Static",
        "minDays": "3 per phase",
        "split": "80 (85% Flex)",
        "payout": "14d cycle",
        "platform": "MT5, TradeLocker",
        "source": "https://blueberryfunded.com"
      }
    ]
  },
  {
    "slug": "core-funded",
    "name": "Core Funded",
    "markets": [
      "forex"
    ],
    "rating": 4.3,
    "rsrc": "Trustpilot",
    "reviews": 162,
    "ratingNote": "Profile still filed under the former domain swissfunded.io",
    "split": "80 (95% upgrade)",
    "splitMax": 95,
    "dd": "8% static (2-Step)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 1,
    "payoutText": "on demand",
    "from": 45,
    "fromCur": "EUR",
    "fromPlan": "2-Step 5K (prices in EUR)",
    "monthly": false,
    "code": "WELCOME",
    "off": 50,
    "codes": [
      {
        "code": "WELCOME",
        "off": 50,
        "detail": "50% off your first account (official homepage)"
      }
    ],
    "consistencyText": "15% Instant / 30% 1-Step and 2-Step at payout",
    "consNone": false,
    "target": "1-Step 10 / 2-Step 10 then 5",
    "dailyDD": "5% (2-Step)",
    "minDays": "not documented for evals",
    "activation": "none",
    "instant": true,
    "instantText": "Yes",
    "scaling": "+25% per 12% profit to $10,000,000",
    "news": "allowed eval; funded blocked +/-5 min",
    "overnight": "allowed",
    "us": "yes (US not on restricted list)",
    "site": "https://www.corefunded.io",
    "sources": [
      "https://www.corefunded.io/en/funded-account",
      "https://docs.corefunded.io/legal-information/terms-of-service",
      "https://www.corefunded.io",
      "https://www.trustpilot.com/review/www.corefunded.io"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes, $30/referral + 20% lifetime",
    "platforms": [
      "Match-Trader"
    ],
    "payMethods": [
      "Bank transfer",
      "Crypto"
    ],
    "deal": "50% off your first account (official homepage)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Formerly 'Swiss Funded' (swissfunded.io now redirects here). Do not mix with FundedCore (fundedcore.uk), a different firm. All prices on the official site are in euros.",
    "summary": "Forex/CFD firm on Match-Trader, formerly called Swiss Funded. Prices are in euros, not dollars. Instant, 1-Step, 2-Step, 2-Step Flex and Pay After Pass programs, payouts on demand, and scaling up to $10,000,000 of total capital. Not FundedCore, a different firm.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "core-funded-2-step-5000",
        "program": "2-Step",
        "name": "2-Step",
        "size": 5000,
        "price": 45,
        "currency": "EUR",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "1-Step 10 / 2-Step 10 then 5",
        "dailyLoss": "5% (2-Step)",
        "maxDD": "8% static (2-Step)",
        "ddType": "Static",
        "minDays": "not documented for evals",
        "split": "80 (95% upgrade)",
        "payout": "on demand",
        "platform": "Match-Trader",
        "source": "https://www.corefunded.io/en/funded-account"
      }
    ]
  },
  {
    "slug": "for-traders",
    "name": "For Traders",
    "markets": [
      "forex",
      "futures",
      "crypto"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot rating withheld — breach-of-guidelines notice. The firm cites Prop Firm Match 4.5/5 (263 reviews) instead",
    "split": "80 mostly",
    "splitMax": 80,
    "dd": "6% trailing (Forex Fast)",
    "ddTypes": [
      "EOD"
    ],
    "payoutDays": 14,
    "payoutText": "every 14d / on demand (Pay After Pass, Futures)",
    "from": 9,
    "fromCur": "USD",
    "fromPlan": "Pay After Pass entry (standard from $49)",
    "monthly": false,
    "code": "BLACKFRIDAY",
    "off": 25,
    "codes": [
      {
        "code": "BLACKFRIDAY",
        "off": 25,
        "detail": "25% off everything, plus a free reset on Fast challenges. End date not stated on the homepage."
      }
    ],
    "consistencyText": "not publicly disclosed",
    "consNone": false,
    "target": "Forex Fast 9",
    "dailyDD": "3% (Forex Fast)",
    "minDays": "3 profitable days",
    "activation": "Pay After Pass only, amount not published",
    "instant": true,
    "instantText": "Yes",
    "scaling": "not stated",
    "news": "allowed eval; funded +/-5 min",
    "overnight": "allowed",
    "us": "yes (US not on restricted list)",
    "site": "https://fortraders.com",
    "sources": [
      "https://fortraders.com/faq",
      "https://help.fortraders.com/en/articles/9259446-list-of-restricted-countries",
      "https://fortraders.com",
      "https://www.trustpilot.com/review/fortraders.com"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes, 15% first purchase",
    "platforms": [
      "MT5",
      "cTrader",
      "TradeLocker"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "BLACKFRIDAY — 25% off everything, plus a free reset on Fast challenges. No end date was stated on the homepage.",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "The $9 figure is the Pay After Pass entry fee; the activation fee due after passing is not published on the official site. Standard challenges start at $49.",
    "summary": "Forex, futures and crypto firm, including 24/7 perps. The $9 headline is the Pay After Pass entry fee (the activation fee is due only after passing, and its amount is not published); standard challenges start at $49.",
    "verifiedOn": "Nov 27, 2026"
  },
  {
    "slug": "propr",
    "name": "Propr",
    "markets": [
      "perps"
    ],
    "rating": 4.4,
    "rsrc": "Trustpilot",
    "reviews": 68,
    "ratingNote": "Verified against Trustpilot",
    "split": "80%",
    "splitMax": 80,
    "dd": "3% static (Turbo) / 6% (Classic 1-Step)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 1,
    "payoutText": "on demand, USDC on-chain",
    "from": 25,
    "fromCur": "USD",
    "fromPlan": "Turbo 1-Step 5K",
    "monthly": false,
    "code": "BF20",
    "off": 20,
    "codes": [
      {
        "code": "BF20",
        "off": 20,
        "detail": "20% off every challenge — ends Nov 30, 2026, 23:59 UTC (banner on propr.xyz)"
      }
    ],
    "consistencyText": "none",
    "consNone": true,
    "target": "Turbo 9 / Classic 1-Step 10",
    "dailyDD": "3% (1-Step) / 5% (2-Step)",
    "minDays": "none",
    "activation": "none",
    "instant": false,
    "instantText": "No",
    "scaling": "no fixed plan",
    "news": "allowed",
    "overnight": "allowed (24/7)",
    "us": "yes (US not on restricted list)",
    "site": "https://propr.xyz",
    "sources": [
      "https://propr.xyz",
      "https://propr.xyz/rules",
      "https://www.trustpilot.com/review/propr.xyz"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes (rates not stated)",
    "platforms": [
      "Hyperliquid"
    ],
    "payMethods": [
      "USDC on-chain (Ethereum)"
    ],
    "deal": "20% off every challenge (ends Nov 30, 2026, 23:59 UTC)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "The BF20 code was reported on the firm's channels; it was not confirmed on the propr.xyz homepage on Nov 26, 2026. Confirm at checkout.",
    "summary": "Perpetual futures on Hyperliquid — 140+ crypto, stock, index, commodity and FX perps, trading 24/7. Classic, Turbo and Pro evaluations at a flat 80% split, no consistency rule, payouts on demand in USDC, and every payout published with its transaction hash.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "propr-turbo-1-step-5000",
        "program": "Turbo 1-Step",
        "name": "Turbo 1-Step",
        "size": 5000,
        "price": 25,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "Turbo 9 / Classic 1-Step 10",
        "dailyLoss": "3% (1-Step) / 5% (2-Step)",
        "maxDD": "3% static (Turbo) / 6% (Classic 1-Step)",
        "ddType": "Static",
        "minDays": "none",
        "split": "80%",
        "payout": "on demand, USDC on-chain",
        "platform": "Hyperliquid",
        "source": "https://propr.xyz"
      }
    ]
  },
  {
    "slug": "crypto-fund-trader",
    "name": "Crypto Fund Trader",
    "markets": [
      "crypto",
      "forex"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot rating withheld — breach-of-guidelines notice, ~1,113 reviews, no score",
    "split": "80 (90% add-on)",
    "splitMax": 90,
    "dd": "5% (1-Phase) / 10% (2-Phase)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 7,
    "payoutText": "1-Step every 7 traded days",
    "from": 25,
    "fromCur": "USD",
    "fromPlan": "1-Step Turbo 5K",
    "monthly": false,
    "code": "BLACK",
    "off": 30,
    "codes": [
      {
        "code": "BLACK",
        "off": 30,
        "detail": "30% off any evaluation on any platform. End date not stated on the homepage."
      }
    ],
    "consistencyText": "none std; 40% Break funded",
    "consNone": true,
    "target": "1-Phase 12 / 2-Phase 8 then 5",
    "dailyDD": "3% (1-Phase) / 5% (2-Phase)",
    "minDays": "0",
    "activation": "none std; Break $138-$328 after passing",
    "instant": true,
    "instantText": "Yes",
    "scaling": "Instant doubles per 10% profit to $1,280,000",
    "news": "allowed, no restrictions",
    "overnight": "yes (crypto 24/7)",
    "us": "partial — US on Bybit/Match-Trader, MT5 not for US",
    "site": "https://cryptofundtrader.com",
    "sources": [
      "https://cryptofundtrader.com/",
      "https://cryptofundtrader.com/affiliate-terms/",
      "https://www.trustpilot.com/review/cryptofundtrader.com"
    ],
    "verif": "partial (1-Phase vs 1-Step conflict)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, up to $150/referral, 10-15%",
    "platforms": [
      "Bybit",
      "MT5",
      "Match-Trader"
    ],
    "payMethods": [
      "Crypto"
    ],
    "deal": "BLACK — 30% off any evaluation on any platform. No end date was stated on the homepage.",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Internal conflict: the homepage shows a single '1-Phase' program (12% target, 5% max loss), while the firm's FAQ/pricing pages list three 1-Step variants (Classic, Pro, Turbo) with different targets and drawdowns. The two versions do not reconcile — verify at checkout.",
    "summary": "Crypto-first firm (715+ pairs) that also runs forex/CFD, on Bybit, MT5 and Match-Trader. 1-Step and 2-Phase evaluations plus instant accounts. US residents can use Bybit/Match-Trader, but MT5 is not offered to them.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "crypto-fund-trader-1-step-turbo-5000",
        "program": "1-Step Turbo",
        "name": "1-Step Turbo",
        "size": 5000,
        "price": 25,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "1-Phase 12 / 2-Phase 8 then 5",
        "dailyLoss": "3% (1-Phase) / 5% (2-Phase)",
        "maxDD": "5% (1-Phase) / 10% (2-Phase)",
        "ddType": "Static",
        "minDays": "0",
        "split": "80 (90% add-on)",
        "payout": "1-Step every 7 traded days",
        "platform": "Bybit, MT5, Match-Trader",
        "source": "https://cryptofundtrader.com/"
      }
    ]
  },
  {
    "slug": "upscale",
    "name": "Upscale",
    "markets": [
      "crypto",
      "perps"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot rating withheld — breach-of-guidelines notice, 13 reviews, no score",
    "split": "80 (90% upgrade)",
    "splitMax": 90,
    "dd": "10% static (Basic)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 14,
    "payoutText": "every 14d",
    "from": 59,
    "fromCur": "USD",
    "fromPlan": "Basic RWA 5K",
    "monthly": false,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "none Basic/Accelerated; 30% Turbo",
    "consNone": false,
    "target": "Basic 5 then 8",
    "dailyDD": "5% (Basic)",
    "minDays": "3 profit days 0.5%+",
    "activation": "none stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "up to $400,000",
    "news": "allowed; close-only 5 min around US macro (stocks/forex)",
    "overnight": "allowed, except late-Friday index positions closed",
    "us": "no (US excluded per Terms of Use)",
    "site": "https://upscale.trade",
    "sources": [
      "https://upscale.trade/",
      "https://docs.upscale.trade/how-upscale-works/account_setup",
      "https://www.trustpilot.com/review/upscale.trade"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes, 10-15%",
    "platforms": [
      "Own TradingView-based terminal"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": null,
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Internal conflict on the firm's own site: the Terms of Use exclude US residents while the FAQ says 'available worldwide' — the terms govern. The terms also require passport KYC before withdrawal, despite 'no KYC' marketing.",
    "summary": "Crypto perps and real-world-asset markets (forex, commodities, indices, stocks) on its own TradingView-based terminal. Basic, Accelerated and Turbo (instant) lines, USDT payouts. US residents are excluded under the Terms of Use.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "upscale-basic-rwa-5000",
        "program": "Basic RWA",
        "name": "Basic RWA",
        "size": 5000,
        "price": 59,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "Basic 5 then 8",
        "dailyLoss": "5% (Basic)",
        "maxDD": "10% static (Basic)",
        "ddType": "Static",
        "minDays": "3 profit days 0.5%+",
        "split": "80 (90% upgrade)",
        "payout": "every 14d",
        "platform": "Own TradingView-based terminal",
        "source": "https://upscale.trade/"
      }
    ]
  },
  {
    "slug": "hyrotrader",
    "name": "HyroTrader",
    "markets": [
      "crypto"
    ],
    "rating": 4,
    "rsrc": "Trustpilot",
    "reviews": 251,
    "ratingNote": "Read on trustpilot.com",
    "split": "80 (90% as you scale)",
    "splitMax": 90,
    "dd": "5% static (Core)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 1,
    "payoutText": "on demand",
    "from": 9,
    "fromCur": "USD",
    "fromPlan": "Hyro Core 2.5K",
    "monthly": false,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "40% of target (Core/One/Two-Step); none Instant",
    "consNone": false,
    "target": "Core 10 / One-Step 10 / Two-Step 10 then 5",
    "dailyDD": "3% (Core)",
    "minDays": "Core 4 / One-Step 3",
    "activation": "none",
    "instant": true,
    "instantText": "Yes",
    "scaling": "split to 90%; scale to $1M claimed",
    "news": "allowed, except news-only strategies",
    "overnight": "yes (crypto 24/7)",
    "us": "not stated",
    "site": "https://www.hyrotrader.com",
    "sources": [
      "https://www.hyrotrader.com/",
      "https://www.hyrotrader.com/affiliates/",
      "https://www.trustpilot.com/review/hyrotrader.com"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes, up to 40%",
    "platforms": [
      "Hyro terminal",
      "Bybit / BloFin via API"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": null,
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "One figure conflicts between sources: the per-payout cap is 5% of starting balance per the firm, 4% per one tracker. Unresolved.",
    "summary": "Crypto-only firm: 700+ USDT perpetual pairs. Core, One-Step, Two-Step and Instant lines from a $9 Core 2.5K account. One-Step and Two-Step fees are refundable deposits returned with the first payout; Core and Instant fees are not.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "hyrotrader-hyro-core-2500",
        "program": "Hyro Core",
        "name": "Hyro Core",
        "size": 2500,
        "price": 9,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "Core 10 / One-Step 10 / Two-Step 10 then 5",
        "dailyLoss": "3% (Core)",
        "maxDD": "5% static (Core)",
        "ddType": "Static",
        "minDays": "Core 4 / One-Step 3",
        "split": "80 (90% as you scale)",
        "payout": "on demand",
        "platform": "Hyro terminal, Bybit / BloFin via API",
        "source": "https://www.hyrotrader.com/"
      }
    ]
  },
  {
    "slug": "kraken-prop",
    "name": "Kraken Prop",
    "markets": [
      "crypto",
      "perps"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "No Prop-specific Trustpilot score exists. The 3.1/5 (~9,663 reviews) figure is for the Kraken exchange generally, not Kraken Prop",
    "split": "80 (90% upgrade)",
    "splitMax": 90,
    "dd": "3% static (Advanced)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 1,
    "payoutText": "on demand",
    "from": 20,
    "fromCur": "USD",
    "fromPlan": "Advanced 5K",
    "monthly": false,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "none",
    "consNone": true,
    "target": "Advanced 9 / Starter 10 / Intermediate 12",
    "dailyDD": "3% all plans",
    "minDays": "not stated",
    "activation": "none stated",
    "instant": false,
    "instantText": "No",
    "scaling": "not stated",
    "news": "not stated",
    "overnight": "yes",
    "us": "not excluded (India/Canada excluded)",
    "site": "https://www.kraken.com/gb/pro/prop",
    "sources": [
      "https://support.kraken.com/articles/what-is-kraken-prop",
      "https://www.kraken.com/gb/pro/prop",
      "https://www.trustpilot.com/review/kraken.com"
    ],
    "verif": "partial",
    "verifLabel": "Partially verified",
    "affiliate": "not stated for Prop",
    "platforms": [
      "Kraken Pro"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": null,
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Kraken describes Prop as an unregulated service run by Payward Oceanic Ltd. The Trustpilot figure for kraken.com covers the exchange generally; there is no Prop-specific score.",
    "summary": "Kraken's prop service: crypto plus Nasdaq 100, S&P 500, metals and oil perpetuals on Kraken Pro. Starter, Intermediate and Advanced evaluations at 80% (90% upgrade), payouts on demand to a Kraken wallet. Kraken itself describes the service as unregulated, run by Payward Oceanic Ltd.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "kraken-prop-advanced-5000",
        "program": "Advanced",
        "name": "Advanced",
        "size": 5000,
        "price": 20,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "Advanced 9 / Starter 10 / Intermediate 12",
        "dailyLoss": "3% all plans",
        "maxDD": "3% static (Advanced)",
        "ddType": "Static",
        "minDays": "not stated",
        "split": "80 (90% upgrade)",
        "payout": "on demand",
        "platform": "Kraken Pro",
        "source": "https://support.kraken.com/articles/what-is-kraken-prop"
      }
    ]
  },
  {
    "slug": "hola-prime",
    "name": "Hola Prime",
    "markets": [
      "forex",
      "futures",
      "crypto"
    ],
    "rating": 4.6,
    "rsrc": "Trustpilot",
    "reviews": 4422,
    "ratingNote": "Read on trustpilot.com",
    "split": "80 (95% monthly cycle)",
    "splitMax": 95,
    "dd": "6% static (1-Step Prime)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 14,
    "payoutText": "bi-weekly / monthly / on-demand",
    "from": 49,
    "fromCur": "USD",
    "fromPlan": "1-Step Prime Forex 5K",
    "monthly": false,
    "code": "BLACK20",
    "off": 20,
    "codes": [
      {
        "code": "BLACK20",
        "off": 20,
        "detail": "20% off every Fly account (official homepage banner)"
      }
    ],
    "consistencyText": "none Prime/Pro bi-weekly; 40% on-demand; 20% Direct",
    "consNone": true,
    "target": "1-Step Prime 10",
    "dailyDD": "3% (1-Step Prime)",
    "minDays": "2 (1-Step Prime)",
    "activation": "not stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "to $4,000,000",
    "news": "allowed Prime/Pro; restricted Fly challenge",
    "overnight": "allowed Prime/Pro; not allowed Fly",
    "us": "not stated",
    "site": "https://holaprime.com",
    "sources": [
      "https://holaprime.com/",
      "https://www.trustpilot.com/review/holaprime.com"
    ],
    "verif": "partial",
    "verifLabel": "Partially verified",
    "affiliate": "yes (not confirmed on homepage)",
    "platforms": [
      "MT5",
      "cTrader",
      "TradeLocker",
      "Match-Trader",
      "DXtrade"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "20% off every Fly account (official homepage banner)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": null,
    "summary": "Forex and futures firm (plus crypto CFDs) on MT5, cTrader, TradeLocker, Match-Trader and DXtrade. Prime and Pro challenges pay 80% bi-weekly or 95% on a monthly cycle; Direct accounts are instant. Futures fees are monthly, not one-time.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "hola-prime-1-step-prime-forex-5000",
        "program": "1-Step Prime Forex",
        "name": "1-Step Prime Forex",
        "size": 5000,
        "price": 49,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "1-Step Prime 10",
        "dailyLoss": "3% (1-Step Prime)",
        "maxDD": "6% static (1-Step Prime)",
        "ddType": "Static",
        "minDays": "2 (1-Step Prime)",
        "split": "80 (95% monthly cycle)",
        "payout": "bi-weekly / monthly / on-demand",
        "platform": "MT5, cTrader, TradeLocker, Match-Trader, DXtrade",
        "source": "https://holaprime.com/"
      }
    ]
  },
  {
    "slug": "instant-funding",
    "name": "Instant Funding",
    "markets": [
      "forex"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot withholds this firm's score (rating unavailable due to a breach of Trustpilot's guidelines; 'Warning' label) — checked Nov 26, 2026",
    "split": "80 (90% add-on)",
    "splitMax": 90,
    "dd": "10% Smart Drawdown (PRO)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 7,
    "payoutText": "PRO first 14d, then every 7d",
    "from": 44,
    "fromCur": "USD",
    "fromPlan": "PRO 625",
    "monthly": false,
    "code": "IF30",
    "off": 30,
    "codes": [
      {
        "code": "IF30",
        "off": 30,
        "detail": "30% off Pro & Lite (official site banner)"
      }
    ],
    "consistencyText": "none PRO; 25% IF Evolve",
    "consNone": true,
    "target": "PRO none",
    "dailyDD": "PRO none",
    "minDays": "PRO none",
    "activation": "none stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "PRO doubles per 10% profit to $1,280,000",
    "news": "PRO not allowed unless add-on",
    "overnight": "overnight yes; weekend PRO add-on only",
    "us": "not stated",
    "site": "https://instantfunding.com",
    "sources": [
      "https://instantfunding.com/",
      "https://www.trustpilot.com/review/instantfunding.com"
    ],
    "verif": "partial (prices via re-checks, not widget read)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, up to 17.5% (not confirmed on homepage)",
    "platforms": [
      "MT5",
      "cTrader",
      "Match-Trader"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "30% off Pro & Lite (official site banner)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": null,
    "summary": "Forex/CFD firm whose flagship PRO line is instant funding with a 10% 'Smart Drawdown' that locks at 5% once you are 5% in profit. First payout 14 days after the first trade, then every 7 days. Also runs IF Micro, One-Phase, Two-Phase and IF Starter lines.",
    "verifiedOn": "Nov 27, 2026"
  },
  {
    "slug": "onefunded",
    "name": "OneFunded",
    "markets": [
      "forex"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot rating withheld — breach-of-guidelines notice; no score is shown",
    "split": "80 (90% add-on)",
    "splitMax": 90,
    "dd": "8% (Value)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 14,
    "payoutText": "14d cycle (7d add-on)",
    "from": 29,
    "fromCur": "USD",
    "fromPlan": "Value 5K",
    "monthly": false,
    "code": "BLACK40",
    "off": 40,
    "codes": [
      {
        "code": "BLACK40",
        "off": 40,
        "detail": "40% off. End date not stated on the homepage."
      },
      {
        "code": "BLACK30",
        "off": 30,
        "detail": "30% off. Also shown on the homepage. End date not stated."
      }
    ],
    "consistencyText": "none eval Core/Value; 50% Flash eval; funded 50/30/15",
    "consNone": false,
    "target": "Value 8 then 6",
    "dailyDD": "4% (Value)",
    "minDays": "none stated on homepage",
    "activation": "none",
    "instant": true,
    "instantText": "Yes",
    "scaling": "to $1,000,000",
    "news": "allowed, monitored",
    "overnight": "allowed",
    "us": "not stated (MT5 unavailable in USA)",
    "site": "https://onefunded.com",
    "sources": [
      "https://onefunded.com/",
      "https://onefunded.com/blog/prop-trading/prop-firm-black-friday-2026-deals-and-discount-codes/",
      "https://www.trustpilot.com/review/onefunded.com"
    ],
    "verif": "partial",
    "verifLabel": "Partially verified",
    "affiliate": "yes",
    "platforms": [
      "MT5",
      "cTrader",
      "TradeLocker"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "BLACK40 — 40% off. BLACK30 is also shown. No end date was stated on the homepage.",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Open questions: the plan tables run to $100K while the homepage FAQ says simulated accounts go up to $200K; and the firm's 40% Black Friday code (Nov 26–29) had not been published as a code string when we checked, so no code is listed for this firm.",
    "summary": "Forex/CFD firm with Value, Core, Flash and Instant plans, $5K–$100K in the plan tables. 80% base split, 14-day payout cycle, fee refunded with the third payout (not on Instant). MT5 is not available to clients in the USA or Turkey.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "onefunded-value-5000",
        "program": "Value",
        "name": "Value",
        "size": 5000,
        "price": 29,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "Value 8 then 6",
        "dailyLoss": "4% (Value)",
        "maxDD": "8% (Value)",
        "ddType": "Static",
        "minDays": "none stated on homepage",
        "split": "80 (90% add-on)",
        "payout": "14d cycle (7d add-on)",
        "platform": "MT5, cTrader, TradeLocker",
        "source": "https://onefunded.com/"
      }
    ]
  },
  {
    "slug": "brightfunded",
    "name": "BrightFunded",
    "markets": [
      "forex",
      "futures"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot rating withheld — breach-of-guidelines notice; no score is shown",
    "split": "80 (90% add-on)",
    "splitMax": 90,
    "dd": "8% static (2-Step Bright)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 14,
    "payoutText": "14d / on demand (Instant)",
    "from": 47,
    "fromCur": "EUR",
    "fromPlan": "2-Step Bright 5K (prices in EUR)",
    "monthly": false,
    "code": "BF35",
    "off": 35,
    "codes": [
      {
        "code": "BF35",
        "off": 35,
        "detail": "35% off CFD challenges"
      },
      {
        "code": "FBF50",
        "off": 50,
        "detail": "50% off futures evaluations"
      }
    ],
    "consistencyText": "none 1-Step/2-Step; 15% Instant",
    "consNone": true,
    "target": "2-Step Bright 8 then 5",
    "dailyDD": "4% (2-Step Bright)",
    "minDays": "none (1-Step); 3 profitable per phase (2-Step)",
    "activation": "none stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "+30% every 4 months to 100% split",
    "news": "no limits eval; funded +/-5 min",
    "overnight": "weekend yes 1-Step/2-Step; no Instant",
    "us": "not stated",
    "site": "https://brightfunded.com",
    "sources": [
      "https://brightfunded.com/",
      "https://brightfunded.com/affiliate",
      "https://www.trustpilot.com/review/brightfunded.com"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes, up to 15%",
    "platforms": [
      "MT5",
      "cTrader",
      "DXtrade"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "35% off CFD challenges",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": null,
    "summary": "Forex/CFD firm (plus a futures line sold through its US company). Account balances are in USD but prices are billed in euros. All three CFD plans were revamped on Nov 16, 2026; accounts bought before that keep their original rules.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "brightfunded-2-step-bright-5000",
        "program": "2-Step Bright",
        "name": "2-Step Bright",
        "size": 5000,
        "price": 47,
        "currency": "EUR",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "2-Step Bright 8 then 5",
        "dailyLoss": "4% (2-Step Bright)",
        "maxDD": "8% static (2-Step Bright)",
        "ddType": "Static",
        "minDays": "none (1-Step); 3 profitable per phase (2-Step)",
        "split": "80 (90% add-on)",
        "payout": "14d / on demand (Instant)",
        "platform": "MT5, cTrader, DXtrade",
        "source": "https://brightfunded.com/"
      }
    ]
  },
  {
    "slug": "darwinex-zero",
    "name": "Darwinex Zero",
    "markets": [
      "forex",
      "futures",
      "crypto"
    ],
    "rating": 4.2,
    "rsrc": "Trustpilot",
    "reviews": 393,
    "ratingNote": "Read on trustpilot.com on Nov 26, 2026",
    "split": "15% performance fee to trader",
    "splitMax": 15,
    "dd": "no fixed max drawdown stated",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 90,
    "payoutText": "quarterly (monthly option)",
    "from": 45,
    "fromCur": "EUR",
    "fromPlan": "From €45/month",
    "monthly": true,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "not stated",
    "consNone": false,
    "target": "none",
    "dailyDD": "not stated",
    "minDays": "not verified",
    "activation": "none (subscription only)",
    "instant": false,
    "instantText": "No",
    "scaling": "via DarwinIA allocations",
    "news": "not stated",
    "overnight": "not stated",
    "us": "not stated",
    "site": "https://www.darwinexzero.com",
    "sources": [
      "https://www.darwinexzero.com",
      "https://darwinexzero.document360.io/docs/pricing",
      "https://www.trustpilot.com/review/darwinexzero.com"
    ],
    "verif": "partial",
    "verifLabel": "Partially verified",
    "affiliate": "yes",
    "platforms": [
      "MT4",
      "MT5",
      "TradingView"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": null,
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "This is not a conventional funded account and the 15% figure is a performance fee paid to the trader, not a profit split. Do not use the Darwinex broker's Trustpilot score (4.1/301) — that is a different entity.",
    "summary": "A different model from every other firm here: no evaluation and no funded account. You pay a monthly subscription, build a track record, and earn a 15% performance fee on investor allocations through DarwinIA. No profit target and no fixed maximum drawdown are stated.",
    "verifiedOn": "Nov 27, 2026"
  },
  {
    "slug": "city-traders-imperium",
    "name": "City Traders Imperium",
    "markets": [
      "forex"
    ],
    "rating": 4.3,
    "rsrc": "Trustpilot",
    "reviews": 1646,
    "ratingNote": "Trustpilot 4.3/5, 1,646 reviews. Checked 27 Nov 2026.",
    "split": "80 (up to 100% VIP)",
    "splitMax": 100,
    "dd": "5% trailing (1-Step)",
    "ddTypes": [
      "EOD"
    ],
    "payoutDays": 7,
    "payoutText": "first 7d, then monthly",
    "from": 29,
    "fromCur": "USD",
    "fromPlan": "1-Step 2.5K one-time",
    "monthly": false,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "none to get paid; 20% scaling only",
    "consNone": true,
    "target": "1-Step 8 / 2-Step 10 then 5",
    "dailyDD": "1-Step none; 2-Step 5%",
    "minDays": "3 profitable days",
    "activation": "not stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "to $200K per account / $400K total; Instant to $2M/$4M",
    "news": "yes, all programs",
    "overnight": "yes, all programs",
    "us": "yes (US welcome, Match-Trader)",
    "site": "https://citytradersimperium.com",
    "sources": [
      "https://citytradersimperium.com/choosing-your-funding-program/",
      "https://citytradersimperium.com",
      "https://www.trustpilot.com/review/citytradersimperium.com"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes, 20%",
    "platforms": [
      "Match-Trader",
      "MT5 (not available to US traders)"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": null,
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": null,
    "summary": "Forex/CFD firm founded in 2018. 1-Step and 2-Step challenges plus Instant and Direct Funding, with US traders welcome on Match-Trader. Every program allows news trading, overnight and weekend holding, and there is no consistency rule to get paid.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "city-traders-imperium-1-step-2500",
        "program": "1-Step",
        "name": "1-Step",
        "size": 2500,
        "price": 29,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "1-Step 8 / 2-Step 10 then 5",
        "dailyLoss": "1-Step none; 2-Step 5%",
        "maxDD": "5% trailing (1-Step)",
        "ddType": "EOD",
        "minDays": "3 profitable days",
        "split": "80 (up to 100% VIP)",
        "payout": "first 7d, then monthly",
        "platform": "Match-Trader, MT5 (not available to US traders)",
        "source": "https://citytradersimperium.com/choosing-your-funding-program/"
      }
    ]
  },
  {
    "slug": "maven-trading",
    "name": "Maven Trading",
    "markets": [
      "forex"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": 5240,
    "ratingNote": "Rating withheld by Trustpilot (breach of guidelines; fake reviews removed). 5,240 reviews on the profile. Checked 27 Nov 2026.",
    "split": "80 Standard (70% some plans)",
    "splitMax": 80,
    "dd": "5% (1-Step)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": null,
    "payoutText": "every 10 business days (Standard)",
    "from": 13,
    "fromCur": "USD",
    "fromPlan": "Standard 3-Step 2K list",
    "monthly": false,
    "code": "OMO",
    "off": null,
    "codes": [
      {
        "code": "OMO",
        "off": null,
        "detail": "40% off Omo challenges, or $10 off the $2K Omo account / $17 off the $5K Omo account (homepage banner and pricing page)"
      },
      {
        "code": "DIAMOND",
        "off": 5,
        "detail": "5% off Standard, Instant, Static, Minis and 1-Step (checkout links on the homepage)"
      }
    ],
    "consistencyText": "none Standard; yes Instant (% not stated)",
    "consNone": false,
    "target": "1-Step 8 / 2-Step 8 then 5 / 3-Step 3x3",
    "dailyDD": "3% (1-Step)",
    "minDays": "not stated",
    "activation": "Buy Now Pay Later only ($5 now, $40-$69 after passing)",
    "instant": true,
    "instantText": "Yes",
    "scaling": "not stated",
    "news": "restricted +/-2 min Red Folder (Standard)",
    "overnight": "yes",
    "us": "not stated",
    "site": "https://maventrading.com",
    "sources": [
      "https://maventrading.com/pricing",
      "https://maventrading.com/faqs",
      "https://maventrading.com",
      "https://www.trustpilot.com/review/maventrading.com"
    ],
    "verif": "partial",
    "verifLabel": "Partially verified",
    "affiliate": "not stated",
    "platforms": [
      "MT5",
      "Match-Trader"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "40% off Omo challenges (OMO); 5% off other plans (DIAMOND)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": null,
    "summary": "Forex/CFD firm (plus prediction markets; no futures or options). Standard 1-Step, 2-Step and 3-Step challenges from a $13 2K account, plus Instant and Instant Mini. Funded payouts run every 10 business days on Standard plans.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "maven-trading-standard-3-step-2000",
        "program": "Standard 3-Step",
        "name": "Standard 3-Step",
        "size": 2000,
        "price": 13,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "1-Step 8 / 2-Step 8 then 5 / 3-Step 3x3",
        "dailyLoss": "3% (1-Step)",
        "maxDD": "5% (1-Step)",
        "ddType": "Static",
        "minDays": "not stated",
        "split": "80 Standard (70% some plans)",
        "payout": "every 10 business days (Standard)",
        "platform": "MT5, Match-Trader",
        "source": "https://maventrading.com/pricing"
      }
    ]
  },
  {
    "slug": "pinex-capital",
    "name": "PineX Capital",
    "markets": [
      "forex"
    ],
    "rating": 4.1,
    "rsrc": "Trustpilot",
    "reviews": 150,
    "ratingNote": "Trustpilot 4.1/5, 150 reviews. Checked 27 Nov 2026.",
    "split": "80 (100% add-on)",
    "splitMax": 100,
    "dd": "6% static (1-Step)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 21,
    "payoutText": "every 21 exchange days (14d add-on)",
    "from": 79,
    "fromCur": "EUR",
    "fromPlan": "1-Step 5K (prices in EUR)",
    "monthly": false,
    "code": "BLACKFRIDAY",
    "off": 50,
    "codes": [
      {
        "code": "BLACKFRIDAY",
        "off": 50,
        "detail": "50% off every challenge, plus 10% on every payout"
      }
    ],
    "consistencyText": "none 1-Step; 20% Instant",
    "consNone": true,
    "target": "1-Step 9",
    "dailyDD": "3% static (1-Step)",
    "minDays": "not stated for passing",
    "activation": "Pay Later only (EUR 207-$941 after passing)",
    "instant": true,
    "instantText": "Yes",
    "scaling": "up to $2,000,000",
    "news": "allowed, profit capped 1% in window (from 2 Nov 2026)",
    "overnight": "yes (from 2 Nov 2026)",
    "us": "not stated",
    "site": "https://pinexcapital.com",
    "sources": [
      "https://pinexcapital.com/en/1-step-challenge",
      "https://pinexcapital.com/en/black-friday",
      "https://pinexcapital.com",
      "https://www.trustpilot.com/review/pinexcapital.com"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "not stated",
    "platforms": [
      "MT5"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "BLACKFRIDAY — 50% off every challenge, plus 10% on every payout.",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": null,
    "summary": "Forex/CFD firm pricing in euros, not dollars. 1-Step and 2-Step challenges, Instant Funding (to $300K), Instant Funding Elite and Direct Funding. Standard payout cycle is every 21 exchange days; weekend holding has been allowed on every program since Nov 2, 2026.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "pinex-capital-1-step-5000",
        "program": "1-Step",
        "name": "1-Step",
        "size": 5000,
        "price": 79,
        "currency": "EUR",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "1-Step 9",
        "dailyLoss": "3% static (1-Step)",
        "maxDD": "6% static (1-Step)",
        "ddType": "Static",
        "minDays": "not stated for passing",
        "split": "80 (100% add-on)",
        "payout": "every 21 exchange days (14d add-on)",
        "platform": "MT5",
        "source": "https://pinexcapital.com/en/1-step-challenge"
      }
    ]
  },
  {
    "slug": "trade-the-pool",
    "name": "Trade The Pool",
    "markets": [
      "stocks"
    ],
    "rating": 4.5,
    "rsrc": "Trustpilot",
    "reviews": 1021,
    "ratingNote": "Read on trustpilot.com on Nov 26, 2026",
    "split": "70/30 (Flex/Max); 80/20 Edge Pro",
    "splitMax": 80,
    "dd": "4% static (Flex Day)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 14,
    "payoutText": "min withdrawal period 14d",
    "from": 47,
    "fromCur": "USD",
    "fromPlan": "Max Day 5K one-time",
    "monthly": false,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "Flex Day 50 / Max Day 30",
    "consNone": false,
    "target": "Day 6 / Swing 15 / Edge 6",
    "dailyDD": "Daily Pause 2% (Flex Day) — pause, not loss limit",
    "minDays": "3 days 0.5%+ (Flex Day cash-out)",
    "activation": "not stated",
    "instant": false,
    "instantText": "No",
    "scaling": "buying power +5% per 10% profit",
    "news": "not stated (secondary: permitted, earnings restriction)",
    "overnight": "Day no; Swing yes",
    "us": "not stated",
    "site": "https://tradethepool.com",
    "sources": [
      "https://tradethepool.com/the-program/",
      "https://www.trustpilot.com/review/tradethepool.com",
      "https://tradethepool.com"
    ],
    "verif": "partial",
    "verifLabel": "Partially verified",
    "affiliate": "not stated",
    "platforms": [
      "Not listed"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": null,
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": null,
    "summary": "US stocks and ETFs only — over 12,000 symbols, no futures, forex or crypto. Day Trading, Swing Trading and Edge programs. Day accounts are liquidated 10 minutes before the close; Swing accounts may hold overnight and over the weekend.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "trade-the-pool-max-day-5000",
        "program": "Max Day",
        "name": "Max Day",
        "size": 5000,
        "price": 47,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "Day 6 / Swing 15 / Edge 6",
        "dailyLoss": "Daily Pause 2% (Flex Day) — pause, not loss limit",
        "maxDD": "4% static (Flex Day)",
        "ddType": "Static",
        "minDays": "3 days 0.5%+ (Flex Day cash-out)",
        "split": "70/30 (Flex/Max); 80/20 Edge Pro",
        "payout": "min withdrawal period 14d",
        "platform": null,
        "source": "https://tradethepool.com/the-program/"
      }
    ]
  },
  {
    "slug": "phidias-prop-firm",
    "name": "Phidias Prop Firm",
    "markets": [
      "futures"
    ],
    "rating": 3,
    "rsrc": "Trustpilot",
    "reviews": 340,
    "ratingNote": "Trustpilot 3/5, 340 reviews. Checked 27 Nov 2026.",
    "split": "80 (Premium up to 100% from payout 5)",
    "splitMax": 100,
    "dd": "$500 static (Express 25K)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 10,
    "payoutText": "Fundamental every 10 trading days; Premium every 5 days",
    "from": 277,
    "fromCur": "USD",
    "fromPlan": "Express to Live 25K list ($138.50 with 50% off)",
    "monthly": false,
    "code": "BLACK90",
    "off": 90,
    "codes": [
      {
        "code": "BLACK90",
        "off": 90,
        "detail": "Up to 90% off — ends Nov 27, 2026, 5 PM ET"
      }
    ],
    "consistencyText": "none eval; 30% funded (Fundamental/Premium)",
    "consNone": false,
    "target": "Express 25K $1500",
    "dailyDD": "none",
    "minDays": "Fundamental 3 / Premium 1 / Express 0",
    "activation": "$0 one-time path; $83-$169 monthly path after passing",
    "instant": false,
    "instantText": "No",
    "scaling": "no plan stated; switch to LIVE after 3 payouts or $75K",
    "news": "allowed",
    "overnight": "Premium yes; Fundamental/Express no",
    "us": "yes (US traders on payout boards)",
    "site": "https://phidiaspropfirm.com",
    "sources": [
      "https://member.phidiaspropfirm.com/?_lang=en",
      "https://phidiaspropfirm.com/education/prop-firm-no-activation-fee",
      "https://phidiaspropfirm.com",
      "https://www.trustpilot.com/review/phidiaspropfirm.com"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "not stated",
    "platforms": [
      "Rithmic",
      "Tradovate",
      "NinjaTrader",
      "TradingView",
      "DeepCharts",
      "R/Trader"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "BLACK90 — up to 90% off. The homepage says Black Friday ends Nov 27, 2026 at 5 PM ET.",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Do not use the $88 from-price seen in secondary sources — that is the monthly-subscription path. The one-time from-price is $277 list. Secondary sources also conflict on the switch to LIVE (3 payouts / $75K vs 5 payouts / $100K).",
    "summary": "Futures-only firm (NQ, ES, YM, MNQ, CL, GC and 70+ instruments) on Rithmic and dxFeed. Express to Live, Fundamental and Premium lines, all 1-phase, with no daily loss limit. Premium's split climbs from 75% to 100% by the fifth payout.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "phidias-prop-firm-express-to-live-25000",
        "program": "Express to Live",
        "name": "Express to Live",
        "size": 25000,
        "price": 277,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "Express 25K $1500",
        "dailyLoss": "none",
        "maxDD": "$500 static (Express 25K)",
        "ddType": "Static",
        "minDays": "Fundamental 3 / Premium 1 / Express 0",
        "split": "80 (Premium up to 100% from payout 5)",
        "payout": "Fundamental every 10 trading days; Premium every 5 days",
        "platform": "Rithmic, Tradovate, NinjaTrader, TradingView, DeepCharts, R/Trader",
        "source": "https://member.phidiaspropfirm.com/?_lang=en"
      }
    ]
  },
  {
    "slug": "take-profit-trader",
    "name": "Take Profit Trader",
    "markets": [
      "futures"
    ],
    "rating": 4.4,
    "rsrc": "Trustpilot",
    "reviews": 11423,
    "ratingNote": "Trustpilot 4.4/5, 11,423 reviews. Checked 27 Nov 2026.",
    "split": "80/20 PRO; 90/10 PRO+",
    "splitMax": 90,
    "dd": "trailing, $1000 (25K)",
    "ddTypes": [
      "EOD"
    ],
    "payoutDays": 1,
    "payoutText": "daily payouts from day 1 in PRO",
    "from": 110,
    "fromCur": "USD",
    "fromPlan": "INTRADAY Test 25K per month ($66 with NOFEE40)",
    "monthly": true,
    "code": "NOFEE40",
    "off": 40,
    "codes": [
      {
        "code": "NOFEE40",
        "off": 40,
        "detail": "40% off Test subscriptions for life + $130 PRO activation fee waived"
      }
    ],
    "consistencyText": "50% Test only",
    "consNone": false,
    "target": "6% all sizes",
    "dailyDD": "INTRADAY/CLASSIC none; EOD $500 (25K)",
    "minDays": "3 to pass Test",
    "activation": "$130 PRO, waived with NOFEE40",
    "instant": false,
    "instantText": "No",
    "scaling": "none",
    "news": "not stated (secondary: flat +/-1 min FOMC/NFP/CPI in PRO)",
    "overnight": "no",
    "us": "not stated (US-based firm)",
    "site": "https://takeprofittrader.com",
    "sources": [
      "https://takeprofittrader.com/blog/plans",
      "https://takeprofittrader.com",
      "https://www.trustpilot.com/review/takeprofittrader.com"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "not stated",
    "platforms": [
      "Tradovate",
      "NinjaTrader",
      "Rithmic"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "40% off Test subscriptions for life + $130 PRO activation fee waived",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": null,
    "summary": "US futures firm (Tradovate) with three monthly-subscription Test plans — Intraday, Classic and EOD — repriced on Nov 23, 2026. Pass the Test and PRO pays daily from day one at 80/20; PRO+ (live, by invitation) pays 90/10.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "take-profit-trader-intraday-test-25000",
        "program": "INTRADAY Test",
        "name": "INTRADAY Test",
        "size": 25000,
        "price": 110,
        "currency": "USD",
        "monthly": true,
        "coverage": "starting",
        "note": "Recorded starting offer from the firm's research record. Other sizes were not re-checked on 27 Nov 2026.",
        "target": "6% all sizes",
        "dailyLoss": "INTRADAY/CLASSIC none; EOD $500 (25K)",
        "maxDD": "trailing, $1000 (25K)",
        "ddType": "EOD",
        "minDays": "3 to pass Test",
        "split": "80/20 PRO; 90/10 PRO+",
        "payout": "daily payouts from day 1 in PRO",
        "platform": "Tradovate, NinjaTrader, Rithmic",
        "source": "https://takeprofittrader.com/blog/plans"
      }
    ]
  },
  {
    "slug": "alpha-futures",
    "name": "Alpha Futures",
    "markets": [
      "futures"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "not stated",
    "splitMax": null,
    "dd": "not stated",
    "ddTypes": [],
    "payoutDays": null,
    "payoutText": "not stated",
    "from": 89,
    "fromCur": "USD",
    "fromPlan": "Entry plan (name not in status PDF)",
    "monthly": true,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "not stated",
    "consNone": false,
    "target": "not stated",
    "dailyDD": "not stated",
    "minDays": "not stated",
    "activation": "not stated",
    "instant": false,
    "instantText": "not stated",
    "scaling": "not stated",
    "news": "not stated",
    "overnight": "not stated",
    "us": "yes (US not on restricted list)",
    "site": "https://alpha-futures.com",
    "sources": [
      "https://alpha-futures.com"
    ],
    "verif": "partial (from status PDF only; split/drawdown/payout not carried in the PDF)",
    "verifLabel": "Partially verified",
    "affiliate": "not verified",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": null,
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from the 100-firm status PDF (Tier B, 13 plans recorded). Split, drawdown, payout cycle, targets and per-size prices were not carried in the PDF and are recorded as not stated — a full official-site pass is still needed for this firm.",
    "summary": "Futures firm. Starts at $89/mo. Affiliate: not verified. US traders: yes (US not on restricted list).",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "alpha-futures-entry",
        "program": "Entry plan (name not in status PDF)",
        "name": "Entry plan (name not in status PDF)",
        "size": null,
        "price": 89,
        "currency": "USD",
        "monthly": true,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "not stated",
        "dailyLoss": "not stated",
        "maxDD": "not stated",
        "ddType": null,
        "minDays": "not stated",
        "split": "not stated",
        "payout": "not stated",
        "platform": "Not stated",
        "source": "https://alpha-futures.com"
      }
    ]
  },
  {
    "slug": "daytraders-com",
    "name": "DayTraders.com",
    "markets": [
      "futures"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "not stated",
    "splitMax": null,
    "dd": "not stated",
    "ddTypes": [],
    "payoutDays": null,
    "payoutText": "not stated",
    "from": 40,
    "fromCur": "USD",
    "fromPlan": "Entry plan (name not in status PDF)",
    "monthly": false,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "not stated",
    "consNone": false,
    "target": "not stated",
    "dailyDD": "not stated",
    "minDays": "not stated",
    "activation": "not stated",
    "instant": false,
    "instantText": "not stated",
    "scaling": "not stated",
    "news": "not stated",
    "overnight": "not stated",
    "us": "yes (US firm; SSN required)",
    "site": "https://daytraders.com",
    "sources": [
      "https://daytraders.com"
    ],
    "verif": "partial (from status PDF only; split/drawdown/payout not carried in the PDF)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, 20% lifetime recurring",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": null,
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from the 100-firm status PDF (Tier A, 18 plans recorded). Split, drawdown, payout cycle, targets and per-size prices were not carried in the PDF and are recorded as not stated — a full official-site pass is still needed for this firm.",
    "summary": "Futures firm. Starts at $40. Affiliate: yes, 20% lifetime recurring. US traders: yes (US firm; SSN required).",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "daytraders-com-entry",
        "program": "Entry plan (name not in status PDF)",
        "name": "Entry plan (name not in status PDF)",
        "size": null,
        "price": 40,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "not stated",
        "dailyLoss": "not stated",
        "maxDD": "not stated",
        "ddType": null,
        "minDays": "not stated",
        "split": "not stated",
        "payout": "not stated",
        "platform": "Not stated",
        "source": "https://daytraders.com"
      }
    ]
  },
  {
    "slug": "funded-futures-network",
    "name": "Funded Futures Network",
    "markets": [
      "futures"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "not stated",
    "splitMax": null,
    "dd": "not stated",
    "ddTypes": [],
    "payoutDays": null,
    "payoutText": "not stated",
    "from": 148,
    "fromCur": "USD",
    "fromPlan": "Entry plan (name not in status PDF)",
    "monthly": false,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "not stated",
    "consNone": false,
    "target": "not stated",
    "dailyDD": "not stated",
    "minDays": "not stated",
    "activation": "not stated",
    "instant": false,
    "instantText": "not stated",
    "scaling": "not stated",
    "news": "not stated",
    "overnight": "not stated",
    "us": "yes (US not restricted)",
    "site": "https://fundedfuturesnetwork.com",
    "sources": [
      "https://fundedfuturesnetwork.com"
    ],
    "verif": "partial (from status PDF only; split/drawdown/payout not carried in the PDF)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, 15% per account purchase",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": null,
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from the 100-firm status PDF (Tier B, 20 plans recorded). Split, drawdown, payout cycle, targets and per-size prices were not carried in the PDF and are recorded as not stated — a full official-site pass is still needed for this firm.",
    "summary": "Futures firm. Starts at $148. Affiliate: yes, 15% per account purchase. US traders: yes (US not restricted).",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "funded-futures-network-entry",
        "program": "Entry plan (name not in status PDF)",
        "name": "Entry plan (name not in status PDF)",
        "size": null,
        "price": 148,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "not stated",
        "dailyLoss": "not stated",
        "maxDD": "not stated",
        "ddType": null,
        "minDays": "not stated",
        "split": "not stated",
        "payout": "not stated",
        "platform": "Not stated",
        "source": "https://fundedfuturesnetwork.com"
      }
    ]
  },
  {
    "slug": "purdia-capital",
    "name": "Purdia Capital",
    "markets": [
      "futures"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "not stated",
    "splitMax": null,
    "dd": "not stated",
    "ddTypes": [],
    "payoutDays": null,
    "payoutText": "not stated",
    "from": 179,
    "fromCur": "USD",
    "fromPlan": "Entry plan (name not in status PDF)",
    "monthly": true,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "not stated",
    "consNone": false,
    "target": "not stated",
    "dailyDD": "not stated",
    "minDays": "not stated",
    "activation": "not stated",
    "instant": false,
    "instantText": "not stated",
    "scaling": "not stated",
    "news": "not stated",
    "overnight": "not stated",
    "us": "yes (US traders completed)",
    "site": "https://purdia.com",
    "sources": [
      "https://purdia.com"
    ],
    "verif": "partial (from status PDF only; split/drawdown/payout not carried in the PDF)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, 7.5-15% tiered recurring",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": null,
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from the 100-firm status PDF (Tier C, 8 plans recorded). Split, drawdown, payout cycle, targets and per-size prices were not carried in the PDF and are recorded as not stated — a full official-site pass is still needed for this firm.",
    "summary": "Futures firm. Starts at $179/mo. Affiliate: yes, 7.5-15% tiered recurring. US traders: yes (US traders completed).",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "purdia-capital-entry",
        "program": "Entry plan (name not in status PDF)",
        "name": "Entry plan (name not in status PDF)",
        "size": null,
        "price": 179,
        "currency": "USD",
        "monthly": true,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "not stated",
        "dailyLoss": "not stated",
        "maxDD": "not stated",
        "ddType": null,
        "minDays": "not stated",
        "split": "not stated",
        "payout": "not stated",
        "platform": "Not stated",
        "source": "https://purdia.com"
      }
    ]
  },
  {
    "slug": "swissfirmup",
    "name": "SwissFirmup",
    "markets": [
      "futures"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "not stated",
    "splitMax": null,
    "dd": "not stated",
    "ddTypes": [],
    "payoutDays": null,
    "payoutText": "not stated",
    "from": 49,
    "fromCur": "USD",
    "fromPlan": "Entry plan (name not in status PDF)",
    "monthly": false,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "not stated",
    "consNone": false,
    "target": "not stated",
    "dailyDD": "not stated",
    "minDays": "not stated",
    "activation": "not stated",
    "instant": false,
    "instantText": "not stated",
    "scaling": "not stated",
    "news": "not stated",
    "overnight": "not stated",
    "us": "yes (FAQ addresses US traders)",
    "site": "https://swissfirmup.com",
    "sources": [
      "https://swissfirmup.com"
    ],
    "verif": "partial (from status PDF only; split/drawdown/payout not carried in the PDF)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, tiered 10-25%",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": null,
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from the 100-firm status PDF (Tier B, 9 plans recorded). Split, drawdown, payout cycle, targets and per-size prices were not carried in the PDF and are recorded as not stated — a full official-site pass is still needed for this firm.",
    "summary": "Futures firm. Starts at $49. Affiliate: yes, tiered 10-25%. US traders: yes (FAQ addresses US traders).",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "swissfirmup-entry",
        "program": "Entry plan (name not in status PDF)",
        "name": "Entry plan (name not in status PDF)",
        "size": null,
        "price": 49,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "not stated",
        "dailyLoss": "not stated",
        "maxDD": "not stated",
        "ddType": null,
        "minDays": "not stated",
        "split": "not stated",
        "payout": "not stated",
        "platform": "Not stated",
        "source": "https://swissfirmup.com"
      }
    ]
  },
  {
    "slug": "uprofit",
    "name": "UProfit",
    "markets": [
      "futures"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "not stated",
    "splitMax": null,
    "dd": "not stated",
    "ddTypes": [],
    "payoutDays": null,
    "payoutText": "not stated",
    "from": 49,
    "fromCur": "USD",
    "fromPlan": "Entry plan (name not in status PDF)",
    "monthly": true,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "not stated",
    "consNone": false,
    "target": "not stated",
    "dailyDD": "not stated",
    "minDays": "not stated",
    "activation": "not stated",
    "instant": false,
    "instantText": "not stated",
    "scaling": "not stated",
    "news": "not stated",
    "overnight": "not stated",
    "us": "yes (Delaware LLC; US traders)",
    "site": "https://uprofit.com",
    "sources": [
      "https://uprofit.com"
    ],
    "verif": "partial (from status PDF only; split/drawdown/payout not carried in the PDF)",
    "verifLabel": "Partially verified",
    "affiliate": "none found",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": null,
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from the 100-firm status PDF (Tier C, 12 plans recorded). Split, drawdown, payout cycle, targets and per-size prices were not carried in the PDF and are recorded as not stated — a full official-site pass is still needed for this firm.",
    "summary": "Futures firm. Starts at $49/mo. Affiliate: none found. US traders: yes (Delaware LLC; US traders).",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "uprofit-entry",
        "program": "Entry plan (name not in status PDF)",
        "name": "Entry plan (name not in status PDF)",
        "size": null,
        "price": 49,
        "currency": "USD",
        "monthly": true,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "not stated",
        "dailyLoss": "not stated",
        "maxDD": "not stated",
        "ddType": null,
        "minDays": "not stated",
        "split": "not stated",
        "payout": "not stated",
        "platform": "Not stated",
        "source": "https://uprofit.com"
      }
    ]
  },
  {
    "slug": "funderpro",
    "name": "FunderPro",
    "markets": [
      "forex",
      "crypto"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "not stated",
    "splitMax": null,
    "dd": "not stated",
    "ddTypes": [],
    "payoutDays": null,
    "payoutText": "not stated",
    "from": 29,
    "fromCur": "USD",
    "fromPlan": "Entry plan (name not in status PDF)",
    "monthly": false,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "not stated",
    "consNone": false,
    "target": "not stated",
    "dailyDD": "not stated",
    "minDays": "not stated",
    "activation": "not stated",
    "instant": false,
    "instantText": "not stated",
    "scaling": "not stated",
    "news": "not stated",
    "overnight": "not stated",
    "us": "partial (details truncated in status PDF)",
    "site": "https://funderpro.com",
    "sources": [
      "https://funderpro.com"
    ],
    "verif": "partial (from status PDF only; split/drawdown/payout not carried in the PDF)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, up to 20% (tiered by sales)",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": null,
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from the 100-firm status PDF (Tier B, 34 plans recorded). Split, drawdown, payout cycle, targets and per-size prices were not carried in the PDF and are recorded as not stated — a full official-site pass is still needed for this firm.",
    "summary": "Forex, Crypto firm. Starts at $29. Affiliate: yes, up to 20% (tiered by sales). US traders: partial (details truncated in status PDF).",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "funderpro-entry",
        "program": "Entry plan (name not in status PDF)",
        "name": "Entry plan (name not in status PDF)",
        "size": null,
        "price": 29,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "not stated",
        "dailyLoss": "not stated",
        "maxDD": "not stated",
        "ddType": null,
        "minDays": "not stated",
        "split": "not stated",
        "payout": "not stated",
        "platform": "Not stated",
        "source": "https://funderpro.com"
      }
    ]
  },
  {
    "slug": "fintokei",
    "name": "Fintokei",
    "markets": [
      "forex"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "not stated",
    "splitMax": null,
    "dd": "not stated",
    "ddTypes": [],
    "payoutDays": null,
    "payoutText": "not stated",
    "from": 34,
    "fromCur": "USD",
    "fromPlan": "Entry plan (name not in status PDF)",
    "monthly": false,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "not stated",
    "consNone": false,
    "target": "not stated",
    "dailyDD": "not stated",
    "minDays": "not stated",
    "activation": "not stated",
    "instant": false,
    "instantText": "not stated",
    "scaling": "not stated",
    "news": "not stated",
    "overnight": "not stated",
    "us": "no (USA restricted)",
    "site": "https://fintokei.com",
    "sources": [
      "https://fintokei.com"
    ],
    "verif": "partial (from status PDF only; split/drawdown/payout not carried in the PDF)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, tiered up to 10%",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": null,
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from the 100-firm status PDF (Tier B, 27 plans recorded). Split, drawdown, payout cycle, targets and per-size prices were not carried in the PDF and are recorded as not stated — a full official-site pass is still needed for this firm.",
    "summary": "Forex firm. Starts at $34. Affiliate: yes, tiered up to 10%. US traders: no (USA restricted).",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "fintokei-entry",
        "program": "Entry plan (name not in status PDF)",
        "name": "Entry plan (name not in status PDF)",
        "size": null,
        "price": 34,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "not stated",
        "dailyLoss": "not stated",
        "maxDD": "not stated",
        "ddType": null,
        "minDays": "not stated",
        "split": "not stated",
        "payout": "not stated",
        "platform": "Not stated",
        "source": "https://fintokei.com"
      }
    ]
  },
  {
    "slug": "ftuk",
    "name": "FTUK",
    "markets": [
      "forex",
      "futures"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "not stated",
    "splitMax": null,
    "dd": "not stated",
    "ddTypes": [],
    "payoutDays": null,
    "payoutText": "not stated",
    "from": 9,
    "fromCur": "USD",
    "fromPlan": "Entry plan (name not in status PDF)",
    "monthly": false,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "not stated",
    "consNone": false,
    "target": "not stated",
    "dailyDD": "not stated",
    "minDays": "not stated",
    "activation": "not stated",
    "instant": false,
    "instantText": "not stated",
    "scaling": "not stated",
    "news": "not stated",
    "overnight": "not stated",
    "us": "yes (FAQ: no restrictions)",
    "site": "https://ftuk.com",
    "sources": [
      "https://ftuk.com"
    ],
    "verif": "partial (from status PDF only; split/drawdown/payout not carried in the PDF)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, 10-20% tiered",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": null,
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from the 100-firm status PDF (Tier A, 26 plans recorded). Split, drawdown, payout cycle, targets and per-size prices were not carried in the PDF and are recorded as not stated — a full official-site pass is still needed for this firm.",
    "summary": "Forex, Futures firm. Starts at $9. Affiliate: yes, 10-20% tiered. US traders: yes (FAQ: no restrictions).",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "ftuk-entry",
        "program": "Entry plan (name not in status PDF)",
        "name": "Entry plan (name not in status PDF)",
        "size": null,
        "price": 9,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "not stated",
        "dailyLoss": "not stated",
        "maxDD": "not stated",
        "ddType": null,
        "minDays": "not stated",
        "split": "not stated",
        "payout": "not stated",
        "platform": "Not stated",
        "source": "https://ftuk.com"
      }
    ]
  },
  {
    "slug": "nordic-funder",
    "name": "Nordic Funder",
    "markets": [
      "forex",
      "crypto",
      "stocks"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "not stated",
    "splitMax": null,
    "dd": "not stated",
    "ddTypes": [],
    "payoutDays": null,
    "payoutText": "not stated",
    "from": 25,
    "fromCur": "USD",
    "fromPlan": "Entry plan (name not in status PDF)",
    "monthly": false,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "not stated",
    "consNone": false,
    "target": "not stated",
    "dailyDD": "not stated",
    "minDays": "not stated",
    "activation": "not stated",
    "instant": false,
    "instantText": "not stated",
    "scaling": "not stated",
    "news": "not stated",
    "overnight": "not stated",
    "us": "not stated",
    "site": "https://nordicfunder.com",
    "sources": [
      "https://nordicfunder.com"
    ],
    "verif": "partial (from status PDF only; split/drawdown/payout not carried in the PDF)",
    "verifLabel": "Partially verified",
    "affiliate": "application required",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": null,
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from the 100-firm status PDF (Tier C, 60 plans recorded). Split, drawdown, payout cycle, targets and per-size prices were not carried in the PDF and are recorded as not stated — a full official-site pass is still needed for this firm.",
    "summary": "Forex, Crypto, Stocks firm. Starts at $25. Affiliate: application required. US traders: not stated.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "nordic-funder-entry",
        "program": "Entry plan (name not in status PDF)",
        "name": "Entry plan (name not in status PDF)",
        "size": null,
        "price": 25,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "not stated",
        "dailyLoss": "not stated",
        "maxDD": "not stated",
        "ddType": null,
        "minDays": "not stated",
        "split": "not stated",
        "payout": "not stated",
        "platform": "Not stated",
        "source": "https://nordicfunder.com"
      }
    ]
  },
  {
    "slug": "finotive-funding",
    "name": "Finotive Funding",
    "markets": [
      "forex"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "not stated",
    "splitMax": null,
    "dd": "not stated",
    "ddTypes": [],
    "payoutDays": null,
    "payoutText": "not stated",
    "from": 12.5,
    "fromCur": "USD",
    "fromPlan": "Entry plan (name not in status PDF)",
    "monthly": false,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "not stated",
    "consNone": false,
    "target": "not stated",
    "dailyDD": "not stated",
    "minDays": "not stated",
    "activation": "not stated",
    "instant": false,
    "instantText": "not stated",
    "scaling": "not stated",
    "news": "not stated",
    "overnight": "not stated",
    "us": "not stated",
    "site": "https://finotivefunding.com",
    "sources": [
      "https://finotivefunding.com"
    ],
    "verif": "partial (from status PDF only; split/drawdown/payout not carried in the PDF)",
    "verifLabel": "Partially verified",
    "affiliate": "invitation only (15-25% tiers)",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": null,
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from the 100-firm status PDF (Tier B, 39 plans recorded). Split, drawdown, payout cycle, targets and per-size prices were not carried in the PDF and are recorded as not stated — a full official-site pass is still needed for this firm.",
    "summary": "Forex firm. Starts at $12.5. Affiliate: invitation only (15-25% tiers). US traders: not stated.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "finotive-funding-entry",
        "program": "Entry plan (name not in status PDF)",
        "name": "Entry plan (name not in status PDF)",
        "size": null,
        "price": 12.5,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "not stated",
        "dailyLoss": "not stated",
        "maxDD": "not stated",
        "ddType": null,
        "minDays": "not stated",
        "split": "not stated",
        "payout": "not stated",
        "platform": "Not stated",
        "source": "https://finotivefunding.com"
      }
    ]
  },
  {
    "slug": "fundedelite",
    "name": "FundedElite",
    "markets": [
      "forex"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "not stated",
    "splitMax": null,
    "dd": "not stated",
    "ddTypes": [],
    "payoutDays": null,
    "payoutText": "not stated",
    "from": 5,
    "fromCur": "USD",
    "fromPlan": "Entry plan (name not in status PDF)",
    "monthly": false,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "not stated",
    "consNone": false,
    "target": "not stated",
    "dailyDD": "not stated",
    "minDays": "not stated",
    "activation": "not stated",
    "instant": false,
    "instantText": "not stated",
    "scaling": "not stated",
    "news": "not stated",
    "overnight": "not stated",
    "us": "yes on Match-Trader",
    "site": "https://fundedelite.com",
    "sources": [
      "https://fundedelite.com"
    ],
    "verif": "partial (from status PDF only; split/drawdown/payout not carried in the PDF)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, 10-14% recurring",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": null,
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from the 100-firm status PDF (Tier A, 55 plans recorded). Split, drawdown, payout cycle, targets and per-size prices were not carried in the PDF and are recorded as not stated — a full official-site pass is still needed for this firm.",
    "summary": "Forex firm. Starts at $5. Affiliate: yes, 10-14% recurring. US traders: yes on Match-Trader.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "fundedelite-entry",
        "program": "Entry plan (name not in status PDF)",
        "name": "Entry plan (name not in status PDF)",
        "size": null,
        "price": 5,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "not stated",
        "dailyLoss": "not stated",
        "maxDD": "not stated",
        "ddType": null,
        "minDays": "not stated",
        "split": "not stated",
        "payout": "not stated",
        "platform": "Not stated",
        "source": "https://fundedelite.com"
      }
    ]
  },
  {
    "slug": "mubite",
    "name": "Mubite",
    "markets": [
      "crypto",
      "perps"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "not stated",
    "splitMax": null,
    "dd": "not stated",
    "ddTypes": [],
    "payoutDays": null,
    "payoutText": "not stated",
    "from": 19.9,
    "fromCur": "USD",
    "fromPlan": "Entry plan (name not in status PDF)",
    "monthly": false,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "not stated",
    "consNone": false,
    "target": "not stated",
    "dailyDD": "not stated",
    "minDays": "not stated",
    "activation": "not stated",
    "instant": false,
    "instantText": "not stated",
    "scaling": "not stated",
    "news": "not stated",
    "overnight": "not stated",
    "us": "yes (FAQ says US traders accepted)",
    "site": "https://mubite.com",
    "sources": [
      "https://mubite.com"
    ],
    "verif": "partial (from status PDF only; split/drawdown/payout not carried in the PDF)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, commission % not published",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": null,
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from the 100-firm status PDF (Tier B, 32 plans recorded). Split, drawdown, payout cycle, targets and per-size prices were not carried in the PDF and are recorded as not stated — a full official-site pass is still needed for this firm.",
    "summary": "Crypto, Perps firm. Starts at $19.9. Affiliate: yes, commission % not published. US traders: yes (FAQ says US traders accepted).",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "mubite-entry",
        "program": "Entry plan (name not in status PDF)",
        "name": "Entry plan (name not in status PDF)",
        "size": null,
        "price": 19.9,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "not stated",
        "dailyLoss": "not stated",
        "maxDD": "not stated",
        "ddType": null,
        "minDays": "not stated",
        "split": "not stated",
        "payout": "not stated",
        "platform": "Not stated",
        "source": "https://mubite.com"
      }
    ]
  },
  {
    "slug": "hash-hedge",
    "name": "Hash Hedge",
    "markets": [
      "crypto",
      "perps",
      "stocks"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "not stated",
    "splitMax": null,
    "dd": "not stated",
    "ddTypes": [],
    "payoutDays": null,
    "payoutText": "not stated",
    "from": 79,
    "fromCur": "USD",
    "fromPlan": "Entry plan (name not in status PDF)",
    "monthly": false,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "not stated",
    "consNone": false,
    "target": "not stated",
    "dailyDD": "not stated",
    "minDays": "not stated",
    "activation": "not stated",
    "instant": false,
    "instantText": "not stated",
    "scaling": "not stated",
    "news": "not stated",
    "overnight": "not stated",
    "us": "not stated",
    "site": "https://hashhedge.com",
    "sources": [
      "https://hashhedge.com"
    ],
    "verif": "partial (from status PDF only; split/drawdown/payout not carried in the PDF)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, 50-80% revenue share",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": null,
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from the 100-firm status PDF (Tier A, 18 plans recorded). Split, drawdown, payout cycle, targets and per-size prices were not carried in the PDF and are recorded as not stated — a full official-site pass is still needed for this firm.",
    "summary": "Crypto, Perps, Stocks firm. Starts at $79. Affiliate: yes, 50-80% revenue share. US traders: not stated.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "hash-hedge-entry",
        "program": "Entry plan (name not in status PDF)",
        "name": "Entry plan (name not in status PDF)",
        "size": null,
        "price": 79,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "not stated",
        "dailyLoss": "not stated",
        "maxDD": "not stated",
        "ddType": null,
        "minDays": "not stated",
        "split": "not stated",
        "payout": "not stated",
        "platform": "Not stated",
        "source": "https://hashhedge.com"
      }
    ]
  },
  {
    "slug": "bitfunded",
    "name": "Bitfunded",
    "markets": [
      "crypto",
      "perps"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "not stated",
    "splitMax": null,
    "dd": "not stated",
    "ddTypes": [],
    "payoutDays": null,
    "payoutText": "not stated",
    "from": 39,
    "fromCur": "USD",
    "fromPlan": "Entry plan (name not in status PDF)",
    "monthly": false,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "not stated",
    "consNone": false,
    "target": "not stated",
    "dailyDD": "not stated",
    "minDays": "not stated",
    "activation": "not stated",
    "instant": false,
    "instantText": "not stated",
    "scaling": "not stated",
    "news": "not stated",
    "overnight": "not stated",
    "us": "not stated",
    "site": "https://bitfunded.com",
    "sources": [
      "https://bitfunded.com"
    ],
    "verif": "partial (from status PDF only; split/drawdown/payout not carried in the PDF)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, 15% first purchase + 3% repeat",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": null,
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from the 100-firm status PDF (Tier B, 30 plans recorded). Split, drawdown, payout cycle, targets and per-size prices were not carried in the PDF and are recorded as not stated — a full official-site pass is still needed for this firm.",
    "summary": "Crypto, Perps firm. Starts at $39. Affiliate: yes, 15% first purchase + 3% repeat. US traders: not stated.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "bitfunded-entry",
        "program": "Entry plan (name not in status PDF)",
        "name": "Entry plan (name not in status PDF)",
        "size": null,
        "price": 39,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "not stated",
        "dailyLoss": "not stated",
        "maxDD": "not stated",
        "ddType": null,
        "minDays": "not stated",
        "split": "not stated",
        "payout": "not stated",
        "platform": "Not stated",
        "source": "https://bitfunded.com"
      }
    ]
  },
  {
    "slug": "the-trading-pit",
    "name": "The Trading Pit",
    "markets": [
      "forex",
      "futures",
      "stocks",
      "crypto"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "not stated",
    "splitMax": null,
    "dd": "not stated",
    "ddTypes": [],
    "payoutDays": null,
    "payoutText": "not stated",
    "from": 32,
    "fromCur": "USD",
    "fromPlan": "Entry plan (name not in status PDF)",
    "monthly": false,
    "code": null,
    "off": null,
    "codes": [],
    "consistencyText": "not stated",
    "consNone": false,
    "target": "not stated",
    "dailyDD": "not stated",
    "minDays": "not stated",
    "activation": "not stated",
    "instant": false,
    "instantText": "not stated",
    "scaling": "not stated",
    "news": "not stated",
    "overnight": "not stated",
    "us": "partial (details truncated in status PDF)",
    "site": "https://thetradingpit.com",
    "sources": [
      "https://thetradingpit.com"
    ],
    "verif": "partial (from status PDF only; split/drawdown/payout not carried in the PDF)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, 10% + MLM 5/3/2%",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": null,
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from the 100-firm status PDF (Tier A, 23 plans recorded). Split, drawdown, payout cycle, targets and per-size prices were not carried in the PDF and are recorded as not stated — a full official-site pass is still needed for this firm.",
    "summary": "Forex, Futures, Stocks, Crypto firm. Starts at $32. Affiliate: yes, 10% + MLM 5/3/2%. US traders: partial (details truncated in status PDF).",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "the-trading-pit-entry",
        "program": "Entry plan (name not in status PDF)",
        "name": "Entry plan (name not in status PDF)",
        "size": null,
        "price": 32,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "not stated",
        "dailyLoss": "not stated",
        "maxDD": "not stated",
        "ddType": null,
        "minDays": "not stated",
        "split": "not stated",
        "payout": "not stated",
        "platform": "Not stated",
        "source": "https://thetradingpit.com"
      }
    ]
  },
  {
    "slug": "atmos-funded",
    "name": "Atmos Funded",
    "markets": [
      "forex",
      "crypto"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "up to 90%",
    "splitMax": 90,
    "dd": "Nova 8% trailing / 2-Step 10% static / Instant 5% trailing",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 1,
    "payoutText": "2-Step and Instant every 14 days; Nova on demand after 7 profitable funded days",
    "from": 5,
    "fromCur": "USD",
    "fromPlan": "1-Step Nova, $5 to start any size (funded fee $79-$1,029 due after passing)",
    "monthly": false,
    "code": "WELCOME",
    "off": null,
    "codes": [
      {
        "code": "WELCOME",
        "off": null,
        "detail": "35% off first purchase); NOV (12% off 2-Step & Instant, Nov 3-30"
      }
    ],
    "consistencyText": "Nova none / 2-Step none / Instant 20%",
    "consNone": true,
    "target": "Nova 5 / 2-Step 10 then 5 / Instant none",
    "dailyDD": "Nova 4% / 2-Step 5% / Instant 3%",
    "minDays": "Nova none in eval; 7 profitable days (0.5%+ each) on funded account per payout; 2-Step not stated on homepage",
    "activation": "Nova funded fee $79 (10K) to $1,029 (200K) after passing; none stated for 2-Step/Instant",
    "instant": true,
    "instantText": "Yes",
    "scaling": "to $400K",
    "news": "not stated",
    "overnight": "not stated",
    "us": "not stated",
    "site": "https://atmosfunded.com",
    "sources": [
      "https://atmosfunded.com",
      "https://help.atmosfunded.com/en/articles/12380559-2-step-standard-challenge",
      "https://help.atmosfunded.com/en/articles/12380563-instant-funding",
      "https://help.atmosfunded.com/en/articles/13959447-nova-challenge",
      "https://atmosfunded.com/promotions/",
      "https://atmosfunded.com/affiliate-program/"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes, tiered commission ranks (% not stated on affiliate page)",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "WELCOME (35% off first purchase); NOV (12% off 2-Step & Instant, Nov 3-30)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: full.",
    "summary": "Forex, Cfd, Crypto firm. Starts at USD 5 (1-Step Nova, $5 to start any size (funded fee $79-$1,029 due after passing)). Split up to 90%; payout 2-Step and Instant every 14 days; Nova on demand after 7 profitable funded days.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "atmos-funded-entry",
        "program": "1-Step Nova, $5 to start any size (funded fee $79-$1,029 due after passing)",
        "name": "1-Step Nova, $5 to start any size (funded fee $79-$1,029 due after passing)",
        "size": null,
        "price": 5,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "Nova 5 / 2-Step 10 then 5 / Instant none",
        "dailyLoss": "Nova 4% / 2-Step 5% / Instant 3%",
        "maxDD": "Nova 8% trailing / 2-Step 10% static / Instant 5% trailing",
        "ddType": "Static",
        "minDays": "Nova none in eval; 7 profitable days (0.5%+ each) on funded account per payout; 2-Step not stated on homepage",
        "split": "up to 90%",
        "payout": "2-Step and Instant every 14 days; Nova on demand after 7 profitable funded days",
        "platform": "Not stated",
        "source": "https://atmosfunded.com"
      }
    ]
  },
  {
    "slug": "audacity-capital",
    "name": "Audacity Capital",
    "markets": [
      "forex",
      "crypto"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "75% start, up to 90% via scaling%",
    "splitMax": 90,
    "dd": "Ability Challenge 15% then 10% static / Ability One 6% static / FTP 10%",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 14,
    "payoutText": "bi-weekly, first payout 14 days after first live trade",
    "from": 49,
    "fromCur": "USD",
    "fromPlan": "Ability Challenge 5K, one-time, refundable with first payout",
    "monthly": false,
    "code": "FLASH25",
    "off": null,
    "codes": [
      {
        "code": "FLASH25",
        "off": null,
        "detail": "25% off all programs"
      }
    ],
    "consistencyText": "none (consistency rule removed)",
    "consNone": true,
    "target": "Ability Challenge 10 then 5 / Ability One 10 / FTP 10% aim",
    "dailyDD": "Ability Challenge 7.5% then 5% / Ability One 3% / FTP 5%",
    "minDays": "Ability Challenge 4 per phase; Ability One none; FTP none",
    "activation": "none stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "account doubles to over $2,000,000",
    "news": "allowed, no open/close/add within 3 min of high-impact news",
    "overnight": "allowed",
    "us": "yes via DXTrade where permitted",
    "site": "https://audacity.capital",
    "sources": [
      "https://audacity.capital",
      "https://audacity.capital/funded-trader-program/",
      "https://audacity.capital/two-step-prop-firm-ability-challenge/",
      "https://audacity.capital/trading-guides/how-to-get-your-first-funded-trader-payout/",
      "https://audacity.capital/trading-guides/earn-without-trading-audacity-capital-partnership-programme/"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes, 10% flat recurring, up to 15% (Partnership Programme blog)",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "FLASH25 (25% off all programs)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: full.",
    "summary": "Forex, Cfd, Crypto firm. Starts at USD 49 (Ability Challenge 5K, one-time, refundable with first payout). Split 75% start, up to 90% via scaling%; payout bi-weekly, first payout 14 days after first live trade.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "audacity-capital-entry",
        "program": "Ability Challenge 5K, one-time, refundable with first payout",
        "name": "Ability Challenge 5K, one-time, refundable with first payout",
        "size": null,
        "price": 49,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "Ability Challenge 10 then 5 / Ability One 10 / FTP 10% aim",
        "dailyLoss": "Ability Challenge 7.5% then 5% / Ability One 3% / FTP 5%",
        "maxDD": "Ability Challenge 15% then 10% static / Ability One 6% static / FTP 10%",
        "ddType": "Static",
        "minDays": "Ability Challenge 4 per phase; Ability One none; FTP none",
        "split": "75% start, up to 90% via scaling%",
        "payout": "bi-weekly, first payout 14 days after first live trade",
        "platform": "Not stated",
        "source": "https://audacity.capital"
      }
    ]
  },
  {
    "slug": "fundedsquad",
    "name": "FundedSquad",
    "markets": [
      "forex"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "up to 100%",
    "splitMax": 100,
    "dd": "6-12% static by model; Instant Lite 6% trailing",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 1,
    "payoutText": "On Demand / Daily / Every 5 Days / Weekly / Biweekly by model; processed within 48h",
    "from": 69,
    "fromCur": "USD",
    "fromPlan": "Instant Lite / Instant Flex 2.5K, one-time",
    "monthly": false,
    "code": "BF65",
    "off": null,
    "codes": [
      {
        "code": "BF65",
        "off": null,
        "detail": "65% off everything + Buy 1 Get 1, 24h only"
      }
    ],
    "consistencyText": "none on any model",
    "consNone": true,
    "target": "1 Step Lite 8 / 1 Step Flex 9-10 / 2 Step Lite 6 per phase / 2 Step Flex 8-6 / Instant none",
    "dailyDD": "3-5% by model",
    "minDays": "1-3 by model",
    "activation": "none stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "not stated (max allocation $800K)",
    "news": "allowed on Instant Flex; not stated for other models",
    "overnight": "not stated",
    "us": "not stated (US traders appear in on-site reviews; no eligibility statement read)",
    "site": "https://fundedsquad.com",
    "sources": [
      "https://fundedsquad.com",
      "https://fundedsquad.com/partner",
      "https://intercom.help/fundedsquad/en/"
    ],
    "verif": "partial (models, from-price and rules verified on official homepage/FAQ; per-size price list is a JS widget and could not be fully re-read)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, 8-15% recurring (Starter 8% to Legendary 15%)",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "BF65 (65% off everything + Buy 1 Get 1, 24h only)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: partial (models, from-price and rules verified on official homepage/FAQ; per-size price list is a JS widget and could not be fully re-read).",
    "summary": "Forex, Cfd firm. Starts at USD 69 (Instant Lite / Instant Flex 2.5K, one-time). Split up to 100%; payout On Demand / Daily / Every 5 Days / Weekly / Biweekly by model; processed within 48h.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "fundedsquad-entry",
        "program": "Instant Lite / Instant Flex 2.5K, one-time",
        "name": "Instant Lite / Instant Flex 2.5K, one-time",
        "size": null,
        "price": 69,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "1 Step Lite 8 / 1 Step Flex 9-10 / 2 Step Lite 6 per phase / 2 Step Flex 8-6 / Instant none",
        "dailyLoss": "3-5% by model",
        "maxDD": "6-12% static by model; Instant Lite 6% trailing",
        "ddType": "Static",
        "minDays": "1-3 by model",
        "split": "up to 100%",
        "payout": "On Demand / Daily / Every 5 Days / Weekly / Biweekly by model; processed within 48h",
        "platform": "Not stated",
        "source": "https://fundedsquad.com"
      }
    ]
  },
  {
    "slug": "funded-trader-markets",
    "name": "Funded Trader Markets",
    "markets": [
      "forex",
      "crypto"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "Nitro 90% of first $10K then 80% / 2-Step Plus 70% (90% with Shield add-on) / Instant 50% scaling to 80%",
    "splitMax": 90,
    "dd": "Nitro 6% trailing lock / 2-Step Plus 10% static / Instant Standard 5% trailing / Instant Pro 3% trailing / Instant Plus 6% trailing lock",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 1,
    "payoutText": "on-demand",
    "from": 43,
    "fromCur": "USD",
    "fromPlan": "Instant Pro 5K list",
    "monthly": false,
    "code": "none verified",
    "off": null,
    "codes": [
      {
        "code": "none verified",
        "off": null,
        "detail": "Discount code from official site"
      }
    ],
    "consistencyText": "Nitro eval 50% / funded 45%; 2-Step Plus none; Instant 15%",
    "consNone": true,
    "target": "Nitro 10 / 2-Step Plus 8 then 5 / Instant none",
    "dailyDD": "Nitro 4% (3% on 300K) / 2-Step Plus 4% / Instant 3%",
    "minDays": "Nitro eval none; 2-Step Plus 3 per phase; funded 5 days (0.5%+) for payout eligibility",
    "activation": "none stated (core programs)",
    "instant": true,
    "instantText": "Yes",
    "scaling": "max allocation $1,000,000 total ($600K evaluations + $400K instant)",
    "news": "allowed",
    "overnight": "allowed (weekend holding allowed)",
    "us": "yes, Match-Trader/TradeLocker only (MT5 and cTrader not available for US residents)",
    "site": "https://fundedtradermarkets.com",
    "sources": [
      "https://fundedtradermarkets.com",
      "https://www.fundedtradermarkets.com/programs",
      "https://www.fundedtradermarkets.com/affiliates",
      "https://fundedtradermarkets.com/faq/is-there-a-requirement-for-a-minimum-number-of-trading-days",
      "https://fundedtradermarkets.com/variations?category=instant&program=instant-pro&accountSize=$5K"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes, up to 20%",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "none verified",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: full.",
    "summary": "Forex, Cfd, Crypto firm. Starts at USD 43 (Instant Pro 5K list). Split Nitro 90% of first $10K then 80% / 2-Step Plus 70% (90% with Shield add-on) / Instant 50% scaling to 80%; payout on-demand.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "funded-trader-markets-entry",
        "program": "Instant Pro 5K list",
        "name": "Instant Pro 5K list",
        "size": null,
        "price": 43,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "Nitro 10 / 2-Step Plus 8 then 5 / Instant none",
        "dailyLoss": "Nitro 4% (3% on 300K) / 2-Step Plus 4% / Instant 3%",
        "maxDD": "Nitro 6% trailing lock / 2-Step Plus 10% static / Instant Standard 5% trailing / Instant Pro 3% trailing / Instant Plus 6% trailing lock",
        "ddType": "Static",
        "minDays": "Nitro eval none; 2-Step Plus 3 per phase; funded 5 days (0.5%+) for payout eligibility",
        "split": "Nitro 90% of first $10K then 80% / 2-Step Plus 70% (90% with Shield add-on) / Instant 50% scaling to 80%",
        "payout": "on-demand",
        "platform": "Not stated",
        "source": "https://fundedtradermarkets.com"
      }
    ]
  },
  {
    "slug": "fundingtraders",
    "name": "FundingTraders",
    "markets": [
      "forex",
      "crypto"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "80-90% default (100% add-on); Instant 90% default%",
    "splitMax": 90,
    "dd": "1-Step Pro 10% trailing / 2-Step Pro10 10% static / 2-Step Pro6 6% static / Day & Swing 10% static / Instant 6%",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 14,
    "payoutText": "1-Step/2-Step every 21 days (14-day add-on); Instant every 14 days",
    "from": 59,
    "fromCur": "USD",
    "fromPlan": "1-Step Pro 5K list, one-time, refundable with qualifying payout",
    "monthly": false,
    "code": "TRYFT",
    "off": null,
    "codes": [
      {
        "code": "TRYFT",
        "off": null,
        "detail": "50% off first challenge); BLACKFRIDAY (75% off every challenge"
      }
    ],
    "consistencyText": "Instant 15% / 1-Step Pro 50% funded / 2-Step Pro6 and Pro10 none",
    "consNone": true,
    "target": "1-Step Pro 10 / 2-Step Pro10 10 then 5 / 2-Step Day & Swing 10 then 5 (8 then 4 under Black Friday rule upgrade) / Instant none",
    "dailyDD": "1-Step Pro 3% / 2-Step Pro10 5% / Day & Swing 5% / Instant 3%",
    "minDays": "2-Step 4 per phase; 1-Step none (was 4, per Black Friday rule upgrade); Instant none",
    "activation": "none stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "to $2,000,000",
    "news": "Instant not allowed; evals unrestricted in challenge, funded +/-2 min with 30% news-profit cap",
    "overnight": "allowed on 2-Step Pro10/Swing; Day closes positions daily; Instant not stated",
    "us": "not stated",
    "site": "https://fundingtraders.com",
    "sources": [
      "https://fundingtraders.com/",
      "https://fundingtraders.com/prop-trading-partners",
      "https://fundingtraders.com/help/en/articles/14489635-your-earnings-explained",
      "https://fundingtraders.com/blog/cheapest-prop-firms-2/",
      "https://fundingtraders.com/blog/best-prop-firm-for-gold-xauusd/",
      "https://fundingtraders.com/prop-firm-markets",
      "https://fundingtraders.com/black-friday-2026"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes, 15-25% on first purchase (Starter 15%, Ambassador 20%, Verified Partner 25%) + 10-15% repeat",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "TRYFT (50% off first challenge); BLACKFRIDAY (75% off every challenge)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: full.",
    "summary": "Forex, Cfd, Crypto firm. Starts at USD 59 (1-Step Pro 5K list, one-time, refundable with qualifying payout). Split 80-90% default (100% add-on); Instant 90% default%; payout 1-Step/2-Step every 21 days (14-day add-on); Instant every 14 days.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "fundingtraders-entry",
        "program": "1-Step Pro 5K list, one-time, refundable with qualifying payout",
        "name": "1-Step Pro 5K list, one-time, refundable with qualifying payout",
        "size": null,
        "price": 59,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "1-Step Pro 10 / 2-Step Pro10 10 then 5 / 2-Step Day & Swing 10 then 5 (8 then 4 under Black Friday rule upgrade) / Instant none",
        "dailyLoss": "1-Step Pro 3% / 2-Step Pro10 5% / Day & Swing 5% / Instant 3%",
        "maxDD": "1-Step Pro 10% trailing / 2-Step Pro10 10% static / 2-Step Pro6 6% static / Day & Swing 10% static / Instant 6%",
        "ddType": "Static",
        "minDays": "2-Step 4 per phase; 1-Step none (was 4, per Black Friday rule upgrade); Instant none",
        "split": "80-90% default (100% add-on); Instant 90% default%",
        "payout": "1-Step/2-Step every 21 days (14-day add-on); Instant every 14 days",
        "platform": "Not stated",
        "source": "https://fundingtraders.com"
      }
    ]
  },
  {
    "slug": "monevis",
    "name": "Monevis",
    "markets": [
      "forex",
      "crypto"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "75% starting, up to 90%; 1-Step 85%",
    "splitMax": 90,
    "dd": "1-Step 6% overall (other programs not stated on readable official pages)",
    "ddTypes": [],
    "payoutDays": 7,
    "payoutText": "weekly (1-Step, per official blog)",
    "from": null,
    "fromCur": "USD",
    "fromPlan": "Entry plan (name not recorded)",
    "monthly": false,
    "code": "1STEP10",
    "off": null,
    "codes": [
      {
        "code": "1STEP10",
        "off": null,
        "detail": "10% off 1-Step Challenge, official blog"
      }
    ],
    "consistencyText": "not stated",
    "consNone": false,
    "target": "1-Step 10 (other programs not stated on readable official pages)",
    "dailyDD": "1-Step 3% (other programs not stated on readable official pages)",
    "minDays": "1-Step 2 profitable days",
    "activation": "not stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "not stated",
    "news": "not stated",
    "overnight": "not stated",
    "us": "not stated",
    "site": "https://monevis.com",
    "sources": [
      "https://monevis.com/",
      "https://blog.monevis.com/%f0%9f%9a%80-monevis-launches-the-1-step-challenge-the-fastest-way-to-get-funded-in-2025/",
      "https://blog.monevis.com/monevis-brokers-new-mt5-prop-trading-firm-with-own-mq-license/"
    ],
    "verif": "partial (official homepage is JS-only — only a legal disclaimer renders in text fetch; rules verified from official blog only; no prices verifiable on official site)",
    "verifLabel": "Partially verified",
    "affiliate": "not verified on official site",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "1STEP10 (10% off 1-Step Challenge, official blog)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: partial (official homepage is JS-only — only a legal disclaimer renders in text fetch; rules verified from official blog only; no prices verifiable on official site).",
    "summary": "Forex, Cfd, Crypto firm. Starts at USD None (Entry plan (name not recorded)). Split 75% starting, up to 90%; 1-Step 85%; payout weekly (1-Step, per official blog).",
    "verifiedOn": "Nov 27, 2026",
    "plans": []
  },
  {
    "slug": "rebelsfunding",
    "name": "RebelsFunding",
    "markets": [
      "forex",
      "crypto"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "75-90% by program (Copper/Bronze 80-90%; Silver/Gold 75-90%; Diamond 75%)%",
    "splitMax": 90,
    "dd": "Copper/Bronze/Silver 10% / Gold 6% / Diamond 6%",
    "ddTypes": [],
    "payoutDays": 14,
    "payoutText": "bi-weekly (RCF reward cycle)",
    "from": 9,
    "fromCur": "USD",
    "fromPlan": "Copper 4-Phase $1K ($6 for new users)",
    "monthly": false,
    "code": "none verified",
    "off": null,
    "codes": [
      {
        "code": "none verified",
        "off": null,
        "detail": "Discount code from official site"
      }
    ],
    "consistencyText": "none",
    "consNone": true,
    "target": "Copper 5% per phase / Bronze 5% per phase / Silver 8 then 5 / Gold 10 / Diamond 10% per level",
    "dailyDD": "Copper/Bronze/Silver 5% / Gold none in eval, 4% on RCF / Diamond none",
    "minDays": "not stated",
    "activation": "not stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "to $640,000 max allocation",
    "news": "allowed",
    "overnight": "allowed (weekend holding yes, per homepage FAQ)",
    "us": "yes (listed among best prop firms for US traders on official site)",
    "site": "https://rebelsfunding.com",
    "sources": [
      "https://rebelsfunding.com",
      "https://www.rebelsfunding.com/best-funded-trading-accounts/",
      "https://www.rebelsfunding.com/partnership-program-ads/",
      "https://www.rebelsfunding.com/best-prop-firms-for-us-traders/"
    ],
    "verif": "partial (programs, entry price, rules and affiliate verified on official pages; per-size list prices are a JS pricing widget and could not be re-read)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, 15-25% (Level 1 15%, Level 2 20%, Level 3 25%, Custom 25%+)",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "none verified",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: partial (programs, entry price, rules and affiliate verified on official pages; per-size list prices are a JS pricing widget and could not be re-read).",
    "summary": "Forex, Cfd, Crypto firm. Starts at USD 9 (Copper 4-Phase $1K ($6 for new users)). Split 75-90% by program (Copper/Bronze 80-90%; Silver/Gold 75-90%; Diamond 75%)%; payout bi-weekly (RCF reward cycle).",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "rebelsfunding-entry",
        "program": "Copper 4-Phase $1K ($6 for new users)",
        "name": "Copper 4-Phase $1K ($6 for new users)",
        "size": null,
        "price": 9,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "Copper 5% per phase / Bronze 5% per phase / Silver 8 then 5 / Gold 10 / Diamond 10% per level",
        "dailyLoss": "Copper/Bronze/Silver 5% / Gold none in eval, 4% on RCF / Diamond none",
        "maxDD": "Copper/Bronze/Silver 10% / Gold 6% / Diamond 6%",
        "ddType": null,
        "minDays": "not stated",
        "split": "75-90% by program (Copper/Bronze 80-90%; Silver/Gold 75-90%; Diamond 75%)%",
        "payout": "bi-weekly (RCF reward cycle)",
        "platform": "Not stated",
        "source": "https://rebelsfunding.com"
      }
    ]
  },
  {
    "slug": "sabiotrade",
    "name": "SabioTrade",
    "markets": [
      "forex",
      "crypto",
      "stocks"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "80-90%",
    "splitMax": 90,
    "dd": "6% trailing",
    "ddTypes": [
      "Trailing"
    ],
    "payoutDays": null,
    "payoutText": "every 7 days; processed within 24h",
    "from": 10,
    "fromCur": "USD",
    "fromPlan": "Sabio Go 1K, one-time",
    "monthly": false,
    "code": "BFRETRY",
    "off": null,
    "codes": [
      {
        "code": "BFRETRY",
        "off": null,
        "detail": "free second attempt); Black Friday personal codes (no public code"
      }
    ],
    "consistencyText": "55% (no single day or single trade over 55% of total profit)",
    "consNone": false,
    "target": "10",
    "dailyDD": "5%",
    "minDays": "none (no time limit; 5-7 comparable-size trades required for payout)",
    "activation": "none stated",
    "instant": false,
    "instantText": "No",
    "scaling": "not stated (no scaling plans per FAQ)",
    "news": "not stated",
    "overnight": "overnight allowed; weekend plan-dependent (close by Fri 3:45 PM EST if not permitted)",
    "us": "yes (Sabio Go plan marketed for US traders; sabiotrade.us is the US site)",
    "site": "https://sabiotrade.us",
    "sources": [
      "https://sabiotrade.us",
      "https://sabiotrade.us/blog/introducing-sabio-go-a-1000-evaluation-account-for-just-10",
      "https://int.sabiotrade.us/options"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "not stated (no affiliate program found on official site)",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "BFRETRY (free second attempt); Black Friday personal codes (no public code)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: full.",
    "summary": "Forex, Cfd, Crypto, Equities firm. Starts at USD 10 (Sabio Go 1K, one-time). Split 80-90%; payout every 7 days; processed within 24h.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "sabiotrade-entry",
        "program": "Sabio Go 1K, one-time",
        "name": "Sabio Go 1K, one-time",
        "size": null,
        "price": 10,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "10",
        "dailyLoss": "5%",
        "maxDD": "6% trailing",
        "ddType": "Trailing",
        "minDays": "none (no time limit; 5-7 comparable-size trades required for payout)",
        "split": "80-90%",
        "payout": "every 7 days; processed within 24h",
        "platform": "Not stated",
        "source": "https://sabiotrade.us"
      }
    ]
  },
  {
    "slug": "sway-funded",
    "name": "Sway Funded",
    "markets": [
      "forex",
      "crypto",
      "stocks"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "up to 90%",
    "splitMax": 90,
    "dd": "10%/20%",
    "ddTypes": [],
    "payoutDays": null,
    "payoutText": "rewards paid within 24 hours",
    "from": 13,
    "fromCur": "USD",
    "fromPlan": "Rapid 1K, one-time (homepage selector default)",
    "monthly": false,
    "code": "FIRST",
    "off": null,
    "codes": [
      {
        "code": "FIRST",
        "off": null,
        "detail": "50% off first challenge"
      }
    ],
    "consistencyText": "none",
    "consNone": true,
    "target": "15%/30% (Phase 1; homepage shows both figures, variants not labelled)",
    "dailyDD": "5%/10%",
    "minDays": 4,
    "activation": "none stated (challenge fee refunded on passing)",
    "instant": true,
    "instantText": "Yes",
    "scaling": "not stated",
    "news": "allowed",
    "overnight": "allowed",
    "us": "yes (US not on restricted-countries list in official Terms)",
    "site": "https://swayfunded.com",
    "sources": [
      "https://swayfunded.com",
      "https://www.swayfunded.com/affiliates",
      "https://www.swayfunded.com/terms",
      "https://www.swayfunded.com/terms?document=affiliate-terms-and-conditions"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes, 20% direct (10-tier: 20/10/5/2/1/0.5/0.25/0.1/0.1/0.05%)",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "FIRST (50% off first challenge)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: full.",
    "summary": "Forex, Cfd, Crypto, Equities firm. Starts at USD 13 (Rapid 1K, one-time (homepage selector default)). Split up to 90%; payout rewards paid within 24 hours.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "sway-funded-entry",
        "program": "Rapid 1K, one-time (homepage selector default)",
        "name": "Rapid 1K, one-time (homepage selector default)",
        "size": null,
        "price": 13,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "15%/30% (Phase 1; homepage shows both figures, variants not labelled)",
        "dailyLoss": "5%/10%",
        "maxDD": "10%/20%",
        "ddType": null,
        "minDays": 4,
        "split": "up to 90%",
        "payout": "rewards paid within 24 hours",
        "platform": "Not stated",
        "source": "https://swayfunded.com"
      }
    ]
  },
  {
    "slug": "tx3-funding",
    "name": "TX3 Funding",
    "markets": [
      "forex",
      "futures"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "1 Phase 85 / Flex 80 / Pro 80 (90% with add-on)%",
    "splitMax": 90,
    "dd": "1 Phase 6% trailing / Flex 5% static / Core futures 3-4% EOD trailing",
    "ddTypes": [
      "EOD"
    ],
    "payoutDays": 1,
    "payoutText": "1 Phase first payout 3d after first trade, then every 3d / Flex first 10d, then every 7d / Pro on-demand after 2% profit",
    "from": null,
    "fromCur": "USD",
    "fromPlan": "Entry plan (name not recorded)",
    "monthly": false,
    "code": "BF50",
    "off": null,
    "codes": [
      {
        "code": "BF50",
        "off": null,
        "detail": "50% off seen on official checkout links"
      }
    ],
    "consistencyText": "funded-stage only; % not stated on official FAQ pages (1 Phase rule links out to toptiertrader.com)",
    "consNone": false,
    "target": "1 Phase 10 / Flex 10 then 5 / Pro not stated on fetched FAQ pages",
    "dailyDD": "1 Phase 3% / Flex none in eval, 2.5% funded / Pro not stated on fetched FAQ pages",
    "minDays": "Pro 3 / Core futures 5 eval, 3 funded / 1 Phase not stated on official FAQ pages",
    "activation": "not stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "not stated",
    "news": "1 Phase allowed under specific conditions; Pro add-on only",
    "overnight": "weekend allowed under specific conditions (1 Phase)",
    "us": "yes (US traders accepted; Rise payouts restricted in some US regions per official FAQ)",
    "site": "https://tx3funding.com",
    "sources": [
      "https://tx3funding.com",
      "https://faq.tx3funding.com/help/tx3-funding/introduction-to-the-1-phase-challenge",
      "https://faq.tx3funding.com/help/tx3-funding/rules-and-objectives-1-phase-challenge",
      "https://faq.tx3funding.com/help/tx3-funding/introduction-to-the-pro-challenge",
      "https://faq.tx3funding.com/help/tx3-funding/challenge-rules-objectives-flex-challenge",
      "https://faq.tx3funding.com/help/tx3-funding/payout-requests",
      "https://faq.tx3funding.com/help/tx3-funding/commission-structure-and-tiers",
      "https://app.tx3funding.com/checkout"
    ],
    "verif": "partial (forex challenge list prices sit in a JS checkout widget and are not readable in text fetch; official checkout showed Core futures 50K $178.30 / 150K $428.30 with BF50 promo applied)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, 10% base rising to 20% Elite (Silver 12.5% / Gold 15% / Diamond 17.5%)",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "BF50 (50% off seen on official checkout links)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: partial (forex challenge list prices sit in a JS checkout widget and are not readable in text fetch; official checkout showed Core futures 50K $178.30 / 150K $428.30 with BF50 promo applied).",
    "summary": "Forex, Cfd, Futures firm. Starts at USD None (Entry plan (name not recorded)). Split 1 Phase 85 / Flex 80 / Pro 80 (90% with add-on)%; payout 1 Phase first payout 3d after first trade, then every 3d / Flex first 10d, then every 7d / Pro on-demand after 2% profit.",
    "verifiedOn": "Nov 27, 2026",
    "plans": []
  },
  {
    "slug": "tradefundrr",
    "name": "TradeFundrr",
    "markets": [
      "stocks",
      "futures",
      "crypto"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "80%",
    "splitMax": 80,
    "dd": "Stock Pre-Prop $3,000 EOD trailing; Futures Growth Plus 50K $2,000 trailing EOD (futures page states $3,000 - conflict); Crypto 50K $3,000",
    "ddTypes": [
      "EOD"
    ],
    "payoutDays": 7,
    "payoutText": "weekly, processed every Friday; futures weekly via Rise; first payout as fast as 5 days",
    "from": 199,
    "fromCur": "USD",
    "fromPlan": "Crypto Growth 50K, one-time",
    "monthly": false,
    "code": "CYBER2026",
    "off": null,
    "codes": [
      {
        "code": "CYBER2026",
        "off": null,
        "detail": "30% off Pre-Prop, 40% off Prop, ends Nov 30, 2026"
      }
    ],
    "consistencyText": "Futures Growth Plus 40% eval + funded; Express 30% funded; stock/options Prop consistency rules apply, % not stated",
    "consNone": false,
    "target": "Stock Pre-Prop: 5 profitable days $250+ each (no % target); Futures Growth Plus 50K $3,000 (6%); Crypto 50K $4,000 (8%)",
    "dailyDD": "Stock Pre-Prop $1,000 (session pause); Futures Growth Plus 50K $1,000; Crypto 50K none",
    "minDays": "Futures Growth Plus 1 eval / 3 funded; Stock Pre-Prop 5 profitable days (need not be consecutive)",
    "activation": "none (futures Growth Plus); stocks/options carry a $99/month subscription instead",
    "instant": true,
    "instantText": "Yes",
    "scaling": "stocks/options to $20M+ at Pro level; futures not stated",
    "news": "allowed (futures); not stated (stocks/options)",
    "overnight": "not stated (stocks: intraday only, no swing positions; Mon-Fri 4 AM-4 PM ET)",
    "us": "yes (US-based firm; US-listed stocks/options; US traders in homepage reviews)",
    "site": "https://tradefundrr.com",
    "sources": [
      "https://tradefundrr.com",
      "https://tradefundrr.com/stock-trader-funding/pre-prop/",
      "https://tradefundrr.com/options-trader-funding/",
      "https://bryce.tradefundrr.com/pages/futures",
      "https://bryce.tradefundrr.com/blog/prop-firm-evaluation-what-it-actually-tests",
      "https://tradefundrr.com/blog/funded-trading-for-beginners"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "not stated (no affiliate program found on official site)",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "CYBER2026 (30% off Pre-Prop, 40% off Prop, ends Nov 30, 2026)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: full.",
    "summary": "Stocks, Options, Futures, Crypto firm. Starts at USD 199 (Crypto Growth 50K, one-time). Split 80%; payout weekly, processed every Friday; futures weekly via Rise; first payout as fast as 5 days.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "tradefundrr-entry",
        "program": "Crypto Growth 50K, one-time",
        "name": "Crypto Growth 50K, one-time",
        "size": null,
        "price": 199,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "Stock Pre-Prop: 5 profitable days $250+ each (no % target); Futures Growth Plus 50K $3,000 (6%); Crypto 50K $4,000 (8%)",
        "dailyLoss": "Stock Pre-Prop $1,000 (session pause); Futures Growth Plus 50K $1,000; Crypto 50K none",
        "maxDD": "Stock Pre-Prop $3,000 EOD trailing; Futures Growth Plus 50K $2,000 trailing EOD (futures page states $3,000 - conflict); Crypto 50K $3,000",
        "ddType": "EOD",
        "minDays": "Futures Growth Plus 1 eval / 3 funded; Stock Pre-Prop 5 profitable days (need not be consecutive)",
        "split": "80%",
        "payout": "weekly, processed every Friday; futures weekly via Rise; first payout as fast as 5 days",
        "platform": "Not stated",
        "source": "https://tradefundrr.com"
      }
    ]
  },
  {
    "slug": "wall-street-funded",
    "name": "Wall Street Funded",
    "markets": [
      "forex",
      "stocks"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "80 std (PRIME 90%)%",
    "splitMax": 90,
    "dd": "POWER 6% trailing (funded) / Stellar 12% static / PRIME 3% trailing / FLASH 1% static",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 30,
    "payoutText": "Stellar first 30d then every 15d; PRIME instant; FLASH first instant (2% cap) then 15d; POWER 3 profitable days 0.5%+ (funded)",
    "from": 9.99,
    "fromCur": "USD",
    "fromPlan": "POWER 5K initial ($48 funded price billed at funding)",
    "monthly": false,
    "code": "none verified (Black Friday promo on-site, no code captured)",
    "off": null,
    "codes": [
      {
        "code": "none verified (Black Friday promo on-site, no code captured)",
        "off": null,
        "detail": "Discount code from official site"
      }
    ],
    "consistencyText": "POWER 20% funded only / PRIME none / others not stated",
    "consNone": true,
    "target": "POWER 6 / Stellar 8 then 5 / PRIME 5 / FLASH 2",
    "dailyDD": "POWER 3% / Stellar 4% / PRIME 1% / FLASH 1%",
    "minDays": "4 (POWER/Stellar/FLASH); PRIME none",
    "activation": "POWER funded price $48-$540 billed at funding (after $9.99 initial)",
    "instant": false,
    "instantText": "No",
    "scaling": "to $400,000",
    "news": "PRIME: Phase 1 only, not in funded phase; others not stated",
    "overnight": "swing trading allowed",
    "us": "no (US on restricted list in official site footer)",
    "site": "https://wsfunded.com",
    "sources": [
      "https://wsfunded.com",
      "https://wsfunded.com/en/affiliates",
      "https://faq.wsfunded.com/en/articles/16859382-1-phase-wall-street-power",
      "https://faq.wsfunded.com/en/articles/15691317-1-phase-wall-street-stellar",
      "https://faq.wsfunded.com/en/articles/17660303-1-phase-wall-street-prime",
      "https://faq.wsfunded.com/en/articles/17276534-1-phase-wall-street-flash",
      "https://wsfunded.com/en/contact"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes, up to 15% (Beginner 10% / Advance 12.5% / Elite 15%), paid every 14 days",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "none verified (Black Friday promo on-site, no code captured)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: full.",
    "summary": "Forex, Cfd, Equities firm. Starts at USD 9.99 (POWER 5K initial ($48 funded price billed at funding)). Split 80 std (PRIME 90%)%; payout Stellar first 30d then every 15d; PRIME instant; FLASH first instant (2% cap) then 15d; POWER 3 profitable days 0.5%+ (funded).",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "wall-street-funded-entry",
        "program": "POWER 5K initial ($48 funded price billed at funding)",
        "name": "POWER 5K initial ($48 funded price billed at funding)",
        "size": null,
        "price": 9.99,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "POWER 6 / Stellar 8 then 5 / PRIME 5 / FLASH 2",
        "dailyLoss": "POWER 3% / Stellar 4% / PRIME 1% / FLASH 1%",
        "maxDD": "POWER 6% trailing (funded) / Stellar 12% static / PRIME 3% trailing / FLASH 1% static",
        "ddType": "Static",
        "minDays": "4 (POWER/Stellar/FLASH); PRIME none",
        "split": "80 std (PRIME 90%)%",
        "payout": "Stellar first 30d then every 15d; PRIME instant; FLASH first instant (2% cap) then 15d; POWER 3 profitable days 0.5%+ (funded)",
        "platform": "Not stated",
        "source": "https://wsfunded.com"
      }
    ]
  },
  {
    "slug": "wemastertrade",
    "name": "WeMasterTrade",
    "markets": [
      "forex"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "up to 90%",
    "splitMax": 90,
    "dd": "10% static (Instant 51010)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 1,
    "payoutText": "daily payouts; avg 6h, typically within 24h",
    "from": 44,
    "fromCur": "USD",
    "fromPlan": "Instant 51010 5K, one-time (20% off $55 list)",
    "monthly": false,
    "code": "FRIYAY30",
    "off": null,
    "codes": [
      {
        "code": "FRIYAY30",
        "off": null,
        "detail": "up to 30% off, Nov 26-30, 2026"
      }
    ],
    "consistencyText": "not stated",
    "consNone": false,
    "target": "6-10% by package (Instant 51010: 10%)",
    "dailyDD": "5% (Instant 51010)",
    "minDays": "not stated",
    "activation": "none stated (one-time setup fee = package price)",
    "instant": true,
    "instantText": "Yes",
    "scaling": "not stated",
    "news": "allowed",
    "overnight": "allowed, no restrictions; swap-free",
    "us": "no (USA listed as not served on official affiliate page; MT5 also excludes USA residents)",
    "site": "https://wemastertrade.com",
    "sources": [
      "https://wemastertrade.com",
      "https://wemastertrade.com/instant/",
      "https://wemastertrade.com/promotions/",
      "https://faq.wemastertrade.com/what-are-the-challenge-programme-fees/",
      "https://wemastertrade.com/ca/affiliate-partners/",
      "https://faq.wemastertrade.com/terms-and-conditions-of-affiliate-partner/"
    ],
    "verif": "partial (1-Phase package prices are image-only in the official FAQ and not readable in text; US exclusion confirmed on official site)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, 20% direct (Level 2: 10%, Level 3: 1%; upsell 5% Silver / 7.5% Gold / 10% Platinum)",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "FRIYAY30 (up to 30% off, Nov 26-30, 2026)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: partial (1-Phase package prices are image-only in the official FAQ and not readable in text; US exclusion confirmed on official site).",
    "summary": "Forex, Cfd firm. Starts at USD 44 (Instant 51010 5K, one-time (20% off $55 list)). Split up to 90%; payout daily payouts; avg 6h, typically within 24h.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "wemastertrade-entry",
        "program": "Instant 51010 5K, one-time (20% off $55 list)",
        "name": "Instant 51010 5K, one-time (20% off $55 list)",
        "size": null,
        "price": 44,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "6-10% by package (Instant 51010: 10%)",
        "dailyLoss": "5% (Instant 51010)",
        "maxDD": "10% static (Instant 51010)",
        "ddType": "Static",
        "minDays": "not stated",
        "split": "up to 90%",
        "payout": "daily payouts; avg 6h, typically within 24h",
        "platform": "Not stated",
        "source": "https://wemastertrade.com"
      }
    ]
  },
  {
    "slug": "axi-select",
    "name": "Axi Select",
    "markets": [
      "forex"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "0% Seed; 40% Incubation rising to 80% Pro M%",
    "splitMax": 80,
    "dd": "10% (per Axi support article)",
    "ddTypes": [],
    "payoutDays": 30,
    "payoutText": "monthly, on the 1st",
    "from": 0,
    "fromCur": "USD",
    "fromPlan": "Free to join; $500 min live deposit",
    "monthly": false,
    "code": "none verified",
    "off": null,
    "codes": [
      {
        "code": "none verified",
        "off": null,
        "detail": "Discount code from official site"
      }
    ],
    "consistencyText": "Edge Score includes a consistency component; no % stated",
    "consNone": false,
    "target": "7% (Seed-Pro 500); 10% (Pro M)",
    "dailyDD": "not stated",
    "minDays": "30-day min stage duration (Seed to Incubation); min trades per stage in client portal only",
    "activation": "none",
    "instant": false,
    "instantText": "No",
    "scaling": "to $1,000,000",
    "news": "not stated (unrestrictive trading conditions claimed)",
    "overnight": "not stated",
    "us": "no (US residents not eligible per Axi's own promotion T&Cs; Axi Select only for AxiTrader Ltd clients)",
    "site": "https://axi.com",
    "sources": [
      "https://www.axi.com/select",
      "https://help.axi.com/en-US/axiv2--axicorp-prod/article/8Zjs9f7o-axi-select-",
      "https://www.axi.com/int/blog/education/proprietary-trading-firms",
      "https://www.axi.com/int/blog/education/cheap-prop-firms",
      "https://assets.axitrader.com/pdf/svg/TnC_Q1_FY27_AXI100.pdf"
    ],
    "verif": "partial (stage-by-stage requirements table lives in the client portal only; US exclusion per official Axi T&Cs)",
    "verifLabel": "Partially verified",
    "affiliate": "not stated for Axi Select (Axi runs a separate IB program for brokerage)",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "none verified",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: partial (stage-by-stage requirements table lives in the client portal only; US exclusion per official Axi T&Cs).",
    "summary": "Forex, Cfd firm. Starts at USD 0 (Free to join; $500 min live deposit). Split 0% Seed; 40% Incubation rising to 80% Pro M%; payout monthly, on the 1st.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "axi-select-entry",
        "program": "Free to join; $500 min live deposit",
        "name": "Free to join; $500 min live deposit",
        "size": null,
        "price": 0,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "7% (Seed-Pro 500); 10% (Pro M)",
        "dailyLoss": "not stated",
        "maxDD": "10% (per Axi support article)",
        "ddType": null,
        "minDays": "30-day min stage duration (Seed to Incubation); min trades per stage in client portal only",
        "split": "0% Seed; 40% Incubation rising to 80% Pro M%",
        "payout": "monthly, on the 1st",
        "platform": "Not stated",
        "source": "https://axi.com"
      }
    ]
  },
  {
    "slug": "blusky-trading",
    "name": "BluSky Trading",
    "markets": [
      "futures",
      "stocks"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "90 (Instant Sim Funded 80; Direct to Funded 50 first 30 trading days then 80)%",
    "splitMax": null,
    "dd": "EOD trailing $2,000 (50K); Propel 25K $1,200 EOD trailing; 150K-300K static $1,000-$5,000",
    "ddTypes": [
      "EOD"
    ],
    "payoutDays": 1,
    "payoutText": "daily, Mon-Fri (min $500; 7-day cap $1,500 25K / $2,500 50K / $3,000 100K)",
    "from": 59,
    "fromCur": "USD",
    "fromPlan": "Launch 50K per 30 days (list; $29.50 with Welcome26)",
    "monthly": false,
    "code": "Welcome26",
    "off": null,
    "codes": [
      {
        "code": "Welcome26",
        "off": null,
        "detail": "50% off first Launch); 30OFF (30% off Propel"
      }
    ],
    "consistencyText": "Launch 55 eval / 34 Buffer; Propel 55 eval (25K-100K) / 34 Buffer; 300K 21 Buffer; Orbit none",
    "consNone": true,
    "target": "Launch/Propel 6 (50K $3,000; 25K $1,500)",
    "dailyDD": "none (eval)",
    "minDays": "not stated",
    "activation": "Launch $99 (50K) / $149 (100K) / $179 (200K) due on passing; Propel/Orbit none",
    "instant": true,
    "instantText": "Yes",
    "scaling": "additional contracts/capital if consistently performing; Live Brokerage review at $10,000 total profit",
    "news": "not stated",
    "overnight": "not stated",
    "us": "not stated (US firm, St. Petersburg, FL)",
    "site": "https://blusky.pro",
    "sources": [
      "https://blusky.pro",
      "https://blusky.pro/how-blusky-compares/",
      "https://help.blusky.pro/en/articles/12434108-billing",
      "https://help.blusky.pro/en/articles/16300862-propel-plans-phases-rules-and-costs",
      "https://help.blusky.pro/en/articles/12434429-payouts"
    ],
    "verif": "partial (plan prices live only in JS configurator; list prices confirmed on official compares page)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, tiered (rate not stated)",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "Welcome26 (50% off first Launch); 30OFF (30% off Propel)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: partial (plan prices live only in JS configurator; list prices confirmed on official compares page).",
    "summary": "Futures, Stocks firm. Starts at USD 59 (Launch 50K per 30 days (list; $29.50 with Welcome26)). Split 90 (Instant Sim Funded 80; Direct to Funded 50 first 30 trading days then 80)%; payout daily, Mon-Fri (min $500; 7-day cap $1,500 25K / $2,500 50K / $3,000 100K).",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "blusky-trading-entry",
        "program": "Launch 50K per 30 days (list; $29.50 with Welcome26)",
        "name": "Launch 50K per 30 days (list; $29.50 with Welcome26)",
        "size": null,
        "price": 59,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "Launch/Propel 6 (50K $3,000; 25K $1,500)",
        "dailyLoss": "none (eval)",
        "maxDD": "EOD trailing $2,000 (50K); Propel 25K $1,200 EOD trailing; 150K-300K static $1,000-$5,000",
        "ddType": "EOD",
        "minDays": "not stated",
        "split": "90 (Instant Sim Funded 80; Direct to Funded 50 first 30 trading days then 80)%",
        "payout": "daily, Mon-Fri (min $500; 7-day cap $1,500 25K / $2,500 50K / $3,000 100K)",
        "platform": "Not stated",
        "source": "https://blusky.pro"
      }
    ]
  },
  {
    "slug": "lark-funding",
    "name": "Lark Funding",
    "markets": [
      "forex",
      "crypto"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "80 (Instant 90)%",
    "splitMax": null,
    "dd": "7% static (1-Step); 12% static (1-Step Max); 5% static (3-Step)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 14,
    "payoutText": "bi-weekly (14d)",
    "from": 99,
    "fromCur": "USD",
    "fromPlan": "1-Step Max 10K, one-time",
    "monthly": false,
    "code": "none verified (DOUBLELARK ended Nov 21; Black Friday buy-1-get-3 bundle live, no code)",
    "off": null,
    "codes": [
      {
        "code": "none verified (DOUBLELARK ended Nov 21; Black Friday buy-1-get-3 bundle live, no code)",
        "off": null,
        "detail": "Discount code from official site"
      }
    ],
    "consistencyText": "none",
    "consNone": true,
    "target": "1-Step 10 / 1-Step Max 12 / 3-Step 5 then 4 then 3",
    "dailyDD": "5% (1-Step/1-Step Max); none (3-Step)",
    "minDays": "0",
    "activation": "none stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "Lark Base monthly base reward up to $1,000/mo claimed; no account-size scaling stated",
    "news": "allowed (no news restrictions)",
    "overnight": "not stated",
    "us": "not stated",
    "site": "https://larkfunding.com",
    "sources": [
      "https://larkfunding.com/",
      "https://larkfunding.com/1stepmax",
      "https://larkfunding.com/black-friday",
      "https://helpdesk.larkfunding.com/en/articles/17319722-1-step-max-evaluation-details",
      "https://helpdesk.larkfunding.com/en/articles/12853883-1-step-career-evaluation-details",
      "https://helpdesk.larkfunding.com/en/articles/10336809-instant-master-account-details"
    ],
    "verif": "partial (3-Step 10K price and Instant prices not captured; US eligibility not stated)",
    "verifLabel": "Partially verified",
    "affiliate": "yes (rate not stated)",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "none verified (DOUBLELARK ended Nov 21; Black Friday buy-1-get-3 bundle live, no code)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: partial (3-Step 10K price and Instant prices not captured; US eligibility not stated).",
    "summary": "Forex, Cfd, Crypto firm. Starts at USD 99 (1-Step Max 10K, one-time). Split 80 (Instant 90)%; payout bi-weekly (14d).",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "lark-funding-entry",
        "program": "1-Step Max 10K, one-time",
        "name": "1-Step Max 10K, one-time",
        "size": null,
        "price": 99,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "1-Step 10 / 1-Step Max 12 / 3-Step 5 then 4 then 3",
        "dailyLoss": "5% (1-Step/1-Step Max); none (3-Step)",
        "maxDD": "7% static (1-Step); 12% static (1-Step Max); 5% static (3-Step)",
        "ddType": "Static",
        "minDays": "0",
        "split": "80 (Instant 90)%",
        "payout": "bi-weekly (14d)",
        "platform": "Not stated",
        "source": "https://larkfunding.com"
      }
    ]
  },
  {
    "slug": "thinkcapital",
    "name": "ThinkCapital",
    "markets": [
      "forex"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "80 (up to 90%)%",
    "splitMax": 90,
    "dd": "Lightning 6% trailing; Dual Step 7% challenge / 8% funded",
    "ddTypes": [
      "Trailing"
    ],
    "payoutDays": 1,
    "payoutText": "14d (7d add-on); Bolt 14d std, on-demand add-on",
    "from": 39,
    "fromCur": "USD",
    "fromPlan": "Bolt instant 2.5K",
    "monthly": false,
    "code": "none verified",
    "off": null,
    "codes": [
      {
        "code": "none verified",
        "off": null,
        "detail": "Discount code from official site"
      }
    ],
    "consistencyText": "not stated",
    "consNone": false,
    "target": "Lightning 10 / Dual Step 9 then 5 / Nexus 7 then 6 then 5",
    "dailyDD": "Lightning 3%; Dual Step 4%",
    "minDays": "3",
    "activation": "none stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "to $600K managed (homepage); Lightning page claims scaling to $1,500,000",
    "news": "restricted 4-min window (Lightning); allowed on Dual Step Swing",
    "overnight": "weekend holding on Dual Step Swing; Bolt Weekend Holding add-on",
    "us": "not stated",
    "site": "https://thinkcapital.com",
    "sources": [
      "https://thinkcapital.com/",
      "https://thinkcapital.com/lightning",
      "https://www.thinkcapital.com/dual-step/",
      "https://www.thinkcapital.com/instant-funding/",
      "https://www.thinkcapital.com/partners/"
    ],
    "verif": "partial (US eligibility, Nexus sizes, consistency not stated; Dual Step phase-1 target 9% homepage vs 8% review page)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, 5-15% tiered (Starter 5% to Master 15%)",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "none verified",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: partial (US eligibility, Nexus sizes, consistency not stated; Dual Step phase-1 target 9% homepage vs 8% review page).",
    "summary": "Forex, Cfd firm. Starts at USD 39 (Bolt instant 2.5K). Split 80 (up to 90%)%; payout 14d (7d add-on); Bolt 14d std, on-demand add-on.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "thinkcapital-entry",
        "program": "Bolt instant 2.5K",
        "name": "Bolt instant 2.5K",
        "size": null,
        "price": 39,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "Lightning 10 / Dual Step 9 then 5 / Nexus 7 then 6 then 5",
        "dailyLoss": "Lightning 3%; Dual Step 4%",
        "maxDD": "Lightning 6% trailing; Dual Step 7% challenge / 8% funded",
        "ddType": "Trailing",
        "minDays": "3",
        "split": "80 (up to 90%)%",
        "payout": "14d (7d add-on); Bolt 14d std, on-demand add-on",
        "platform": "Not stated",
        "source": "https://thinkcapital.com"
      }
    ]
  },
  {
    "slug": "traders-launch",
    "name": "Traders Launch",
    "markets": [
      "futures",
      "crypto"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "60 or 80 (futures std); 90 Premium/Static; 80 crypto; Rapid 60/80/90%",
    "splitMax": 90,
    "dd": "EOD $1,000 (100K futures); Crypto EOD $200 (5K); Rapid $500 EOD trailing",
    "ddTypes": [
      "EOD"
    ],
    "payoutDays": 1,
    "payoutText": "daily (one request per 24h; futures eligible above +1%; crypto any day after buffer)",
    "from": 20,
    "fromCur": "USD",
    "fromPlan": "Crypto 5K, one-time",
    "monthly": false,
    "code": "TL30",
    "off": null,
    "codes": [
      {
        "code": "TL30",
        "off": null,
        "detail": "30% off, auto-applied"
      }
    ],
    "consistencyText": "none funded; 40% session profit cap in eval (50% static); crypto best day <25% of profit",
    "consNone": true,
    "target": "Futures 2 ($2,000/100K); Crypto 5K 4 / 10K 5 / 20K 7.5; Rapid 25K $1,250 (5%)",
    "dailyDD": "none (futures); crypto EOD drawdown resets daily 4pm EST",
    "minDays": "none (futures); 4 (crypto)",
    "activation": "$0",
    "instant": false,
    "instantText": "No",
    "scaling": "not stated (max 5 futures + 5 crypto accounts)",
    "news": "not stated",
    "overnight": "not stated (futures hours 6pm-4pm ET; crypto 24/7)",
    "us": "yes (US not on restricted list)",
    "site": "https://traderslaunch.com",
    "sources": [
      "https://traderslaunch.com",
      "https://traderslaunch.com/pricing",
      "https://www.traderslaunch.com/crypto",
      "https://www.traderslaunch.com/faq",
      "https://www.traderslaunch.com/early-access"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes, 5%",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "TL30 (30% off, auto-applied)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: full.",
    "summary": "Futures, Crypto firm. Starts at USD 20 (Crypto 5K, one-time). Split 60 or 80 (futures std); 90 Premium/Static; 80 crypto; Rapid 60/80/90%; payout daily (one request per 24h; futures eligible above +1%; crypto any day after buffer).",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "traders-launch-entry",
        "program": "Crypto 5K, one-time",
        "name": "Crypto 5K, one-time",
        "size": null,
        "price": 20,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "Futures 2 ($2,000/100K); Crypto 5K 4 / 10K 5 / 20K 7.5; Rapid 25K $1,250 (5%)",
        "dailyLoss": "none (futures); crypto EOD drawdown resets daily 4pm EST",
        "maxDD": "EOD $1,000 (100K futures); Crypto EOD $200 (5K); Rapid $500 EOD trailing",
        "ddType": "EOD",
        "minDays": "none (futures); 4 (crypto)",
        "split": "60 or 80 (futures std); 90 Premium/Static; 80 crypto; Rapid 60/80/90%",
        "payout": "daily (one request per 24h; futures eligible above +1%; crypto any day after buffer)",
        "platform": "Not stated",
        "source": "https://traderslaunch.com"
      }
    ]
  },
  {
    "slug": "funded-family-one",
    "name": "Funded Family One",
    "markets": [
      "futures",
      "perps"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "90%",
    "splitMax": 90,
    "dd": "EOD trailing $1,000 (25K Prime); Premier+ EOD $750 / intraday $1,000 (25K); Velocity trailing $1,250 (25K); S2F $1,000 EOD trailing (25K)",
    "ddTypes": [
      "EOD"
    ],
    "payoutDays": null,
    "payoutText": "every business day; Prime every 3 trading days; Premier+ every 5 trading days; S2F after 7 trading days",
    "from": 17.9,
    "fromCur": "USD",
    "fromPlan": "Velocity 25K per month with code FFONE (list $179)",
    "monthly": true,
    "code": "FFONE",
    "off": null,
    "codes": [
      {
        "code": "FFONE",
        "off": null,
        "detail": "Discount code from official site"
      }
    ],
    "consistencyText": "Prime none eval / 40 funded; Premier+ none eval (40 funded, accounts from Sep 9 2026); Velocity 40 eval; S2F 25 to get paid",
    "consNone": true,
    "target": "Prime 25K 5 ($1,250) / 50K 6 ($3,000); Premier+ 25K 6 ($1,500); Velocity 25K 10 ($2,500); S2F none",
    "dailyDD": "none (most plans)",
    "minDays": "Prime 1 / Premier+ 1 (Fast Pass) or 2 / S2F 7 to payout",
    "activation": "$0",
    "instant": true,
    "instantText": "Yes",
    "scaling": "not stated",
    "news": "allowed on most plans",
    "overnight": "not stated",
    "us": "yes (US firm, Temecula CA; US not on restricted list)",
    "site": "https://fundedfamilyone.com",
    "sources": [
      "https://fundedfamilyone.com",
      "https://fundedfamilyone.com/plans",
      "https://fundedfamilyone.com/affiliate/",
      "https://intercom.help/funded-futures-family/en/articles/15657092-prime-evaluation-account",
      "https://intercom.help/funded-futures-family/en/articles/15809232-premier-evaluation",
      "https://intercom.help/funded-futures-family/en/articles/15850710-velocity-evaluation"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes, 10% Tier 1 / 15% Tier 2 / custom Tier 3",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "FFONE",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: full.",
    "summary": "Futures, Perps firm. Starts at USD 17.9 (Velocity 25K per month with code FFONE (list $179)). Split 90%; payout every business day; Prime every 3 trading days; Premier+ every 5 trading days; S2F after 7 trading days.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "funded-family-one-entry",
        "program": "Velocity 25K per month with code FFONE (list $179)",
        "name": "Velocity 25K per month with code FFONE (list $179)",
        "size": null,
        "price": 17.9,
        "currency": "USD",
        "monthly": true,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "Prime 25K 5 ($1,250) / 50K 6 ($3,000); Premier+ 25K 6 ($1,500); Velocity 25K 10 ($2,500); S2F none",
        "dailyLoss": "none (most plans)",
        "maxDD": "EOD trailing $1,000 (25K Prime); Premier+ EOD $750 / intraday $1,000 (25K); Velocity trailing $1,250 (25K); S2F $1,000 EOD trailing (25K)",
        "ddType": "EOD",
        "minDays": "Prime 1 / Premier+ 1 (Fast Pass) or 2 / S2F 7 to payout",
        "split": "90%",
        "payout": "every business day; Prime every 3 trading days; Premier+ every 5 trading days; S2F after 7 trading days",
        "platform": "Not stated",
        "source": "https://fundedfamilyone.com"
      }
    ]
  },
  {
    "slug": "proped-capital",
    "name": "PropEd Capital",
    "markets": [
      "futures"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "80 (90% add-on, +20% of base price)%",
    "splitMax": 90,
    "dd": "EOD $1,000 (25K Standard); Instant $1,250 EOD (25K)",
    "ddTypes": [
      "EOD"
    ],
    "payoutDays": 14,
    "payoutText": "bi-weekly (weekly add-on); min payout $500; caps $1,000 (25K) to $3,300 (150K)",
    "from": 109,
    "fromCur": "USD",
    "fromPlan": "Standard Eval 25K (list; $43.60 with 60% off)",
    "monthly": false,
    "code": "none verified (60% off all accounts on-site, no code)",
    "off": null,
    "codes": [
      {
        "code": "none verified (60% off all accounts on-site, no code)",
        "off": null,
        "detail": "Discount code from official site"
      }
    ],
    "consistencyText": "Standard 40 eval/funded; Instant 20 eval/funded",
    "consNone": false,
    "target": "6 (Standard Eval 25K $1,500); Instant none",
    "dailyDD": "not stated",
    "minDays": "not stated",
    "activation": "none stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "path to live Ironbeam sub-account (up to $10,000) after risk review",
    "news": "not stated",
    "overnight": "weekend holds add-on (default no)",
    "us": "not stated (US firm, Lansing, MI)",
    "site": "https://propedcapital.com",
    "sources": [
      "https://propedcapital.com/",
      "https://propedcapital.com/faq/plan-comparison",
      "https://propedcapital.com/faq/payouts-profit-splits",
      "https://propedcapital.com/plans/instant-funded",
      "https://propedcapital.com/affiliates"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes, 20% lifetime revenue share",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "none verified (60% off all accounts on-site, no code)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: full.",
    "summary": "Futures firm. Starts at USD 109 (Standard Eval 25K (list; $43.60 with 60% off)). Split 80 (90% add-on, +20% of base price)%; payout bi-weekly (weekly add-on); min payout $500; caps $1,000 (25K) to $3,300 (150K).",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "proped-capital-entry",
        "program": "Standard Eval 25K (list; $43.60 with 60% off)",
        "name": "Standard Eval 25K (list; $43.60 with 60% off)",
        "size": null,
        "price": 109,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "6 (Standard Eval 25K $1,500); Instant none",
        "dailyLoss": "not stated",
        "maxDD": "EOD $1,000 (25K Standard); Instant $1,250 EOD (25K)",
        "ddType": "EOD",
        "minDays": "not stated",
        "split": "80 (90% add-on, +20% of base price)%",
        "payout": "bi-weekly (weekly add-on); min payout $500; caps $1,000 (25K) to $3,300 (150K)",
        "platform": "Not stated",
        "source": "https://propedcapital.com"
      }
    ]
  },
  {
    "slug": "coinprop",
    "name": "CoinProp",
    "markets": [
      "crypto",
      "perps"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "80 (up to 95% with Reward Split add-on: Signature 95%, Booster 90%)%",
    "splitMax": 95,
    "dd": "6% static (Signature); 3% static (Booster); Instant 3% until first payout",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 1,
    "payoutText": "daily from day one, USDC, $50 minimum after split, one request/day",
    "from": 22,
    "fromCur": "USD",
    "fromPlan": "cheapest evaluation, one-time (homepage 'from $22'; size not itemised)",
    "monthly": false,
    "code": "none verified (affiliates may offer up to 15% off)",
    "off": null,
    "codes": [
      {
        "code": "none verified (affiliates may offer up to 15% off)",
        "off": null,
        "detail": "Discount code from official site"
      }
    ],
    "consistencyText": "none",
    "consNone": true,
    "target": "Signature 10 / Booster 9",
    "dailyDD": "3%",
    "minDays": "none",
    "activation": "none stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "not stated",
    "news": "not stated",
    "overnight": "yes (24/7 crypto)",
    "us": "yes (US not on restricted list; worldwide except Afghanistan, Cuba, Iran, Myanmar, North Korea + regions)",
    "site": "https://coinprop.io",
    "sources": [
      "https://coinprop.io/",
      "https://coinprop.io/affiliates",
      "https://help.coinprop.io/en/getting-started/who-can-join-coinprop",
      "https://help.coinprop.io/en/coin-prop-evaluation/what-are-instant-accounts",
      "https://coinprop.io/terms-conditions"
    ],
    "verif": "partial (cheapest-plan size not itemised; news/scaling not stated)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, 15% standard / 20% growth; Refer & Earn 10% store credit",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "none verified (affiliates may offer up to 15% off)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: partial (cheapest-plan size not itemised; news/scaling not stated).",
    "summary": "Crypto, Perps firm. Starts at USD 22 (cheapest evaluation, one-time (homepage 'from $22'; size not itemised)). Split 80 (up to 95% with Reward Split add-on: Signature 95%, Booster 90%)%; payout daily from day one, USDC, $50 minimum after split, one request/day.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "coinprop-entry",
        "program": "cheapest evaluation, one-time (homepage 'from $22'; size not itemised)",
        "name": "cheapest evaluation, one-time (homepage 'from $22'; size not itemised)",
        "size": null,
        "price": 22,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "Signature 10 / Booster 9",
        "dailyLoss": "3%",
        "maxDD": "6% static (Signature); 3% static (Booster); Instant 3% until first payout",
        "ddType": "Static",
        "minDays": "none",
        "split": "80 (up to 95% with Reward Split add-on: Signature 95%, Booster 90%)%",
        "payout": "daily from day one, USDC, $50 minimum after split, one request/day",
        "platform": "Not stated",
        "source": "https://coinprop.io"
      }
    ]
  },
  {
    "slug": "fundyourfx",
    "name": "FundYourFX",
    "markets": [
      "forex"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "80-95%",
    "splitMax": 95,
    "dd": "6% static (1-Step Classic / Instant Classic); 8% static (2-Step Classic); 10% static (2-Step Pro)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 14,
    "payoutText": "weekly, processed within 24h; min payout $150; Instant Classic bi-weekly",
    "from": null,
    "fromCur": "USD",
    "fromPlan": "Entry plan (name not recorded)",
    "monthly": false,
    "code": "Black Friday 70% off on-site (no code shown on homepage)",
    "off": null,
    "codes": [
      {
        "code": "Black Friday 70% off on-site (no code shown on homepage)",
        "off": null,
        "detail": "Discount code from official site"
      }
    ],
    "consistencyText": "none (1-Step Classic); Profit Balance Rule: total profit must be 4x best day to unlock payout",
    "consNone": true,
    "target": "1-Step Classic 10 / 2-Step Classic 8 then 5 / 2-Step Pro 6 then 4 / Instant Classic 10 before first payout",
    "dailyDD": "4% (Classic); 5% (Pro)",
    "minDays": "5 eval (1-Step Classic); 5 per phase (2-Step Classic)",
    "activation": "none stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "Growth Plan to $6M",
    "news": "allowed, no opens ±5 min high-impact news",
    "overnight": "allowed",
    "us": "yes (only Hong Kong, North Korea, Iran prohibited)",
    "site": "https://fundyourfx.com",
    "sources": [
      "https://fundyourfx.com",
      "https://help.fundyourfx.com",
      "https://help.fundyourfx.com/trading-rules-guide/1-step-evaluation-classic-complete-faq",
      "https://help.fundyourfx.com/trading-rules-guide/general-trading-rules",
      "https://help.fundyourfx.com/affiliate-program"
    ],
    "verif": "partial (smallest-size list price not readable in official text fetch; homepage configurator rendered only the 50K Instant Classic default, $829 list / $248.70 with 70% Black Friday sale)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, 15-35% direct + up to 6% multi-level",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "Black Friday 70% off on-site (no code shown on homepage)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: partial (smallest-size list price not readable in official text fetch; homepage configurator rendered only the 50K Instant Classic default, $829 list / $248.70 with 70% Black Friday sale).",
    "summary": "Forex firm. Starts at USD None (Entry plan (name not recorded)). Split 80-95%; payout weekly, processed within 24h; min payout $150; Instant Classic bi-weekly.",
    "verifiedOn": "Nov 27, 2026",
    "plans": []
  },
  {
    "slug": "ic-funded",
    "name": "IC Funded",
    "markets": [
      "forex",
      "crypto"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "80 std, up to 90% with add-ons%",
    "splitMax": 90,
    "dd": "10% static (2-Step); 6% static (1-Step); 5% trailing EOD equity (Instant)",
    "ddTypes": [
      "EOD"
    ],
    "payoutDays": 14,
    "payoutText": "bi-weekly (14d cycles); challenge fee refunded after 3rd payout",
    "from": 74,
    "fromCur": "USD",
    "fromPlan": "2-Step Professional 5K, one-time",
    "monthly": false,
    "code": "none verified",
    "off": null,
    "codes": [
      {
        "code": "none verified",
        "off": null,
        "detail": "Discount code from official site"
      }
    ],
    "consistencyText": "not stated on official pricing/FAQ pages",
    "consNone": false,
    "target": "2-Step 10 then 5 / 1-Step 10 / Instant none",
    "dailyDD": "5% (2-Step); 3% (1-Step / Instant)",
    "minDays": "3 active days per phase (2-Step / 1-Step); 5 profitable days before first payout",
    "activation": "none stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "up to $500,000 total allocation per trader",
    "news": "allowed (2-Step / 1-Step); restricted ±3 min (Instant)",
    "overnight": "no (weekend holding not allowed on any programme)",
    "us": "not stated (FAQ cites restricted jurisdictions without naming them)",
    "site": "https://icfunded.com",
    "sources": [
      "https://icfunded.com",
      "https://icfunded.com/pricing",
      "https://icfunded.com/faqs",
      "https://icfunded.com/affiliates"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes, up to 15% (Bronze 10 / Silver 12.5 / Gold 14 / Platinum 15) + 2% recurring",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "none verified",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: full.",
    "summary": "Forex, Cfd, Crypto firm. Starts at USD 74 (2-Step Professional 5K, one-time). Split 80 std, up to 90% with add-ons%; payout bi-weekly (14d cycles); challenge fee refunded after 3rd payout.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "ic-funded-entry",
        "program": "2-Step Professional 5K, one-time",
        "name": "2-Step Professional 5K, one-time",
        "size": null,
        "price": 74,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "2-Step 10 then 5 / 1-Step 10 / Instant none",
        "dailyLoss": "5% (2-Step); 3% (1-Step / Instant)",
        "maxDD": "10% static (2-Step); 6% static (1-Step); 5% trailing EOD equity (Instant)",
        "ddType": "EOD",
        "minDays": "3 active days per phase (2-Step / 1-Step); 5 profitable days before first payout",
        "split": "80 std, up to 90% with add-ons%",
        "payout": "bi-weekly (14d cycles); challenge fee refunded after 3rd payout",
        "platform": "Not stated",
        "source": "https://icfunded.com"
      }
    ]
  },
  {
    "slug": "rzr-funded",
    "name": "RZR Funded",
    "markets": [
      "forex",
      "crypto"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "80 (95% with add-on)%",
    "splitMax": 95,
    "dd": "Express 6% trailing / Enhanced 10% static / EnhancedX 8% static / Endurance 8% static / Instant 3-6% trailing",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 14,
    "payoutText": "first reward 14d after first trade, then every 14d (7d with add-on); Instant24 once 24h window ends; 24h reward guarantee (approval or reward doubled up to $1,000)",
    "from": 13,
    "fromCur": "USD",
    "fromPlan": "Instant24 (smallest size), one-time",
    "monthly": false,
    "code": "none verified",
    "off": null,
    "codes": [
      {
        "code": "none verified",
        "off": null,
        "detail": "Discount code from official site"
      }
    ],
    "consistencyText": "EnhancedX 35 / Instant Lite 20 / Instant24 15 (single-trade cap) / Express, Enhanced, Endurance, Instant Funding none",
    "consNone": true,
    "target": "Express 10 / Enhanced 10 then 5 / EnhancedX 8 then 4 / Endurance 6 per stage / Instant none",
    "dailyDD": "Express/Enhanced 5% / EnhancedX/Endurance 4% / Instant24 2% / Instant Lite 3% / Instant Funding 6%",
    "minDays": "Express none / Enhanced 3 profitable days per stage / Endurance 3 per stage / Instant Lite 5 profitable days per payout cycle",
    "activation": "none stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "free step-up to next size to $200K, $400K combined cap (evals only)",
    "news": "allowed in challenge; funded ±3 min red-folder news (Instant24 allowed throughout; Instant Lite/Funding restricted from first trade)",
    "overnight": "weekend allowed on eval challenges; not on Instant (auto-close Fri 23:45); crypto weekend trading allowed",
    "us": "no (US, Germany, Australia restricted per official guide)",
    "site": "https://rzrfunded.com",
    "sources": [
      "https://rzrfunded.com",
      "https://rzrfunded.com/forex",
      "https://rzrfunded.com/blog/how-funded-trading-works-at-rzr-funded/",
      "https://rzrfunded.com/partners"
    ],
    "verif": "full",
    "verifLabel": "Fully verified",
    "affiliate": "yes (Silver/Gold/Platinum tiers + multi-level commissions; rates not stated on partners page)",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "none verified",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: full.",
    "summary": "Forex, Cfd, Crypto firm. Starts at USD 13 (Instant24 (smallest size), one-time). Split 80 (95% with add-on)%; payout first reward 14d after first trade, then every 14d (7d with add-on); Instant24 once 24h window ends; 24h reward guarantee (approval or reward doubled up to $1,000).",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "rzr-funded-entry",
        "program": "Instant24 (smallest size), one-time",
        "name": "Instant24 (smallest size), one-time",
        "size": null,
        "price": 13,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "Express 10 / Enhanced 10 then 5 / EnhancedX 8 then 4 / Endurance 6 per stage / Instant none",
        "dailyLoss": "Express/Enhanced 5% / EnhancedX/Endurance 4% / Instant24 2% / Instant Lite 3% / Instant Funding 6%",
        "maxDD": "Express 6% trailing / Enhanced 10% static / EnhancedX 8% static / Endurance 8% static / Instant 3-6% trailing",
        "ddType": "Static",
        "minDays": "Express none / Enhanced 3 profitable days per stage / Endurance 3 per stage / Instant Lite 5 profitable days per payout cycle",
        "split": "80 (95% with add-on)%",
        "payout": "first reward 14d after first trade, then every 14d (7d with add-on); Instant24 once 24h window ends; 24h reward guarantee (approval or reward doubled up to $1,000)",
        "platform": "Not stated",
        "source": "https://rzrfunded.com"
      }
    ]
  },
  {
    "slug": "rev-one-trading",
    "name": "Rev One Trading",
    "markets": [
      "futures"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "up to 90 (set by 6-factor behaviour score)%",
    "splitMax": null,
    "dd": "4% EOD trailing (challenge); 8% funded (split drops past 4%, no breach until 8%)",
    "ddTypes": [
      "EOD"
    ],
    "payoutDays": null,
    "payoutText": "anytime once eligible (5 profitable days, $500 min); 50% of profit per period capped $1,000-$3,000 by size",
    "from": null,
    "fromCur": "USD",
    "fromPlan": "Entry plan (name not recorded)",
    "monthly": false,
    "code": "none verified (launch pricing referenced, no code shown)",
    "off": null,
    "codes": [
      {
        "code": "none verified (launch pricing referenced, no code shown)",
        "off": null,
        "detail": "Discount code from official site"
      }
    ],
    "consistencyText": "challenge best day max 50% of total profit; funded none",
    "consNone": true,
    "target": "5",
    "dailyDD": "none",
    "minDays": "2 (challenge); 5 profitable days before payout",
    "activation": "$0",
    "instant": false,
    "instantText": "No",
    "scaling": "Rev One Live (real capital) after 5 payouts",
    "news": "allowed",
    "overnight": "overnight allowed (close 4 PM CT, resume 6 PM CT); weekend not allowed (auto-close Fri 4 PM CT)",
    "us": "yes (US firm; traders in 102 countries; no US restriction stated)",
    "site": "https://revonetrading.com",
    "sources": [
      "https://revonetrading.com",
      "https://revonetrading.com/rules"
    ],
    "verif": "partial (prices not readable on official site in text fetch; rules page fully verified)",
    "verifLabel": "Partially verified",
    "affiliate": "not stated",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "none verified (launch pricing referenced, no code shown)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: partial (prices not readable on official site in text fetch; rules page fully verified).",
    "summary": "Futures firm. Starts at USD None (Entry plan (name not recorded)). Split up to 90 (set by 6-factor behaviour score)%; payout anytime once eligible (5 profitable days, $500 min); 50% of profit per period capped $1,000-$3,000 by size.",
    "verifiedOn": "Nov 27, 2026",
    "plans": []
  },
  {
    "slug": "iq-capital",
    "name": "IQ Capital",
    "markets": [
      "futures",
      "forex",
      "crypto"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "90 (Core/Instant); 80 (Rapid)%",
    "splitMax": null,
    "dd": "EOD trailing, $3,000 (50K Core) / $5,000 (100K Core, post-Oct 2026; $6,000 on 100K pre-Oct 22, 2026)",
    "ddTypes": [
      "EOD"
    ],
    "payoutDays": 1,
    "payoutText": "Core every 10 active days; Rapid 1D daily / 3D every 3 days; Flex every 5 days; within 48h, 3h avg; no minimum",
    "from": 9,
    "fromCur": "USD",
    "fromPlan": "from $9 lowest entry (official futures page; plan/size behind configurator)",
    "monthly": false,
    "code": "none verified",
    "off": null,
    "codes": [
      {
        "code": "none verified",
        "off": null,
        "detail": "Discount code from official site"
      }
    ],
    "consistencyText": "none in Core challenge; 30% funded (Core/Instant); 40% Rapid 3D",
    "consNone": true,
    "target": "6 (futures)",
    "dailyDD": "Core none (1% max position loss instead); Rapid 1D $1,000 (50K) / $1,500 (100K)",
    "minDays": "none to pass (Core); 10 active days before first Core payout",
    "activation": "applies after passing Core (amount not stated in help centre)",
    "instant": true,
    "instantText": "Yes",
    "scaling": "up to 10 accounts; up to $1,000,000 claimed on futures page (homepage says $200,000 — conflict); IQ Elite top 5% trade real capital",
    "news": "allowed",
    "overnight": "futures no (auto-close 4:45 PM ET); CFD/crypto yes",
    "us": "not stated",
    "site": "https://iqcapital.io",
    "sources": [
      "https://iqcapital.io",
      "https://iqcapital.io/futures",
      "https://support.iqcapital.io/en/articles/14964304-core-futures-challenge",
      "https://support.iqcapital.io/en/articles/16987970-performance-rewards-rapid-futures",
      "https://support.iqcapital.io/en/articles/15001521-prohibited-trading-practices",
      "https://support.iqcapital.io/en/articles/15001540-allowed-trading-practices",
      "https://www.iqcapital.io/become-a-partner"
    ],
    "verif": "partial (list prices behind on-site configurator, not readable in text fetch; rules verified via official help centre)",
    "verifLabel": "Partially verified",
    "affiliate": "yes (partner programme; commission % not stated on partner page)",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "none verified",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: partial (list prices behind on-site configurator, not readable in text fetch; rules verified via official help centre).",
    "summary": "Futures, Forex, Crypto firm. Starts at USD 9 (from $9 lowest entry (official futures page; plan/size behind configurator)). Split 90 (Core/Instant); 80 (Rapid)%; payout Core every 10 active days; Rapid 1D daily / 3D every 3 days; Flex every 5 days; within 48h, 3h avg; no minimum.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "iq-capital-entry",
        "program": "from $9 lowest entry (official futures page; plan/size behind configurator)",
        "name": "from $9 lowest entry (official futures page; plan/size behind configurator)",
        "size": null,
        "price": 9,
        "currency": "USD",
        "monthly": false,
        "coverage": "starting",
        "note": "Recorded starting offer only. Other sizes/program details were not in the source record for this pass.",
        "target": "6 (futures)",
        "dailyLoss": "Core none (1% max position loss instead); Rapid 1D $1,000 (50K) / $1,500 (100K)",
        "maxDD": "EOD trailing, $3,000 (50K Core) / $5,000 (100K Core, post-Oct 2026; $6,000 on 100K pre-Oct 22, 2026)",
        "ddType": "EOD",
        "minDays": "none to pass (Core); 10 active days before first Core payout",
        "split": "90 (Core/Instant); 80 (Rapid)%",
        "payout": "Core every 10 active days; Rapid 1D daily / 3D every 3 days; Flex every 5 days; within 48h, 3h avg; no minimum",
        "platform": "Not stated",
        "source": "https://iqcapital.io"
      }
    ]
  },
  {
    "slug": "the-concept-trading",
    "name": "The Concept Trading",
    "markets": [
      "forex",
      "crypto"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "50 (all levels) rising to 90 top level / 90% Lock Rule; Foundation 65/70/85/90 by level%",
    "splitMax": 90,
    "dd": "static; Foundation 6% (other models vary, % not stated on FAQ page)",
    "ddTypes": [
      "Static"
    ],
    "payoutDays": 7,
    "payoutText": "monthly withdrawals; weekly at top level / 90% Lock; paid on hitting scaling target",
    "from": null,
    "fromCur": "USD",
    "fromPlan": "Entry plan (name not recorded)",
    "monthly": false,
    "code": "none verified (Free Retry on selected promo coupons)",
    "off": null,
    "codes": [
      {
        "code": "none verified (Free Retry on selected promo coupons)",
        "off": null,
        "detail": "Discount code from official site"
      }
    ],
    "consistencyText": "not stated",
    "consNone": false,
    "target": "Foundation 10 then 5 (then 10% per funded level); Traditional 6 / Premier 7 / Xtreme 6 / Empire 10",
    "dailyDD": "not stated on FAQ page",
    "minDays": "Foundation 3 profitable days per stage; other models none stated",
    "activation": "not stated",
    "instant": true,
    "instantText": "Yes",
    "scaling": "via levels to higher capital; no cap stated on FAQ page",
    "news": "not stated (EAs, algorithms, scalpers accepted without restriction)",
    "overnight": "not stated",
    "us": "yes (non-MetaQuotes platforms only; USA not permitted on MetaQuotes)",
    "site": "https://prop.theconcepttrader.com",
    "sources": [
      "https://prop.theconcepttrader.com"
    ],
    "verif": "partial (official pricing page unreachable — linked tctv2.darylldelfin.com failed DNS on 2026-11-27; prices not verified)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, up to 15%",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "none verified (Free Retry on selected promo coupons)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: partial (official pricing page unreachable — linked tctv2.darylldelfin.com failed DNS on 2026-11-27; prices not verified).",
    "summary": "Forex, Cfd, Crypto firm. Starts at USD None (Entry plan (name not recorded)). Split 50 (all levels) rising to 90 top level / 90% Lock Rule; Foundation 65/70/85/90 by level%; payout monthly withdrawals; weekly at top level / 90% Lock; paid on hitting scaling target.",
    "verifiedOn": "Nov 27, 2026",
    "plans": []
  },
  {
    "slug": "lifeup-trading",
    "name": "LifeUp Trading",
    "markets": [
      "futures"
    ],
    "rating": null,
    "rsrc": null,
    "reviews": null,
    "ratingNote": "Trustpilot pending — to be added from owner-supplied figures.",
    "split": "not stated — no split published; rewards capped per request by cycle",
    "splitMax": null,
    "dd": "EOD trailing (amounts not stated in official text)",
    "ddTypes": [
      "EOD"
    ],
    "payoutDays": null,
    "payoutText": "reward request decided within 2 business days",
    "from": null,
    "fromCur": "USD",
    "fromPlan": "Entry plan (name not recorded)",
    "monthly": false,
    "code": "none verified (community discount codes mentioned)",
    "off": null,
    "codes": [
      {
        "code": "none verified (community discount codes mentioned)",
        "off": null,
        "detail": "Discount code from official site"
      }
    ],
    "consistencyText": "none in challenge; 40% on reward account",
    "consNone": true,
    "target": "not stated in official text",
    "dailyDD": "Basic has daily loss limit (pauses account, resumes next session); Expert none",
    "minDays": "challenge 1; reward account 7 profitable days",
    "activation": "Basic only (amount not stated in official text); Expert none",
    "instant": false,
    "instantText": "No",
    "scaling": "not stated (max 5 reward accounts at once)",
    "news": "not stated",
    "overnight": "not stated",
    "us": "yes (US not on restricted list)",
    "site": "https://lifeuptrading.com",
    "sources": [
      "https://lifeuptrading.com",
      "https://guide.lifeuptrading.com",
      "https://guide.lifeuptrading.com/ko/articles/quick-start-8435c85d",
      "https://guide.lifeuptrading.com/ko/articles/restricted-countries-825064e9"
    ],
    "verif": "partial (prices, target % and drawdown amounts are image-based on official site/guide and not readable in text fetch)",
    "verifLabel": "Partially verified",
    "affiliate": "yes, 10-14% by volume (15% fixed main-partner track)",
    "platforms": [
      "Not stated"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "none verified (community discount codes mentioned)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Added 27 Nov 2026 from official-site research (100-firm expansion pass). Verification: partial (prices, target % and drawdown amounts are image-based on official site/guide and not readable in text fetch).",
    "summary": "Futures firm. Starts at USD None (Entry plan (name not recorded)). Split not stated — no split published; rewards capped per request by cycle; payout reward request decided within 2 business days.",
    "verifiedOn": "Nov 27, 2026",
    "plans": []
  }
];
