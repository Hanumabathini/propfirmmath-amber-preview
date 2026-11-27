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
      },
      {
        "id": "ftmo-2-step-25000",
        "program": "2-Step",
        "name": "2-Step",
        "size": 25000,
        "price": 250,
        "currency": "EUR",
        "monthly": false,
        "coverage": "verified",
        "note": "Global EUR reference list fee; promotions may differ. Not the US offering.",
        "target": "2-Step 10 then 5",
        "dailyLoss": "5% (2-Step)",
        "maxDD": "10% static (2-Step)",
        "ddType": "Static",
        "minDays": "2-Step 4 per phase",
        "split": "80-90%",
        "payout": "first payout day 14, then on demand",
        "platform": "MT4, MT5, cTrader, TradingView",
        "source": "https://ftmo.com/lp/how-to-choose-a-prop-firm/"
      },
      {
        "id": "ftmo-2-step-50000",
        "program": "2-Step",
        "name": "2-Step",
        "size": 50000,
        "price": 345,
        "currency": "EUR",
        "monthly": false,
        "coverage": "verified",
        "note": "Global EUR reference list fee; promotions may differ. Not the US offering.",
        "target": "2-Step 10 then 5",
        "dailyLoss": "5% (2-Step)",
        "maxDD": "10% static (2-Step)",
        "ddType": "Static",
        "minDays": "2-Step 4 per phase",
        "split": "80-90%",
        "payout": "first payout day 14, then on demand",
        "platform": "MT4, MT5, cTrader, TradingView",
        "source": "https://ftmo.com/lp/how-to-choose-a-prop-firm/"
      },
      {
        "id": "ftmo-2-step-100000",
        "program": "2-Step",
        "name": "2-Step",
        "size": 100000,
        "price": 540,
        "currency": "EUR",
        "monthly": false,
        "coverage": "verified",
        "note": "Global EUR reference list fee; promotions may differ. Not the US offering.",
        "target": "2-Step 10 then 5",
        "dailyLoss": "5% (2-Step)",
        "maxDD": "10% static (2-Step)",
        "ddType": "Static",
        "minDays": "2-Step 4 per phase",
        "split": "80-90%",
        "payout": "first payout day 14, then on demand",
        "platform": "MT4, MT5, cTrader, TradingView",
        "source": "https://ftmo.com/lp/how-to-choose-a-prop-firm/"
      },
      {
        "id": "ftmo-2-step-200000",
        "program": "2-Step",
        "name": "2-Step",
        "size": 200000,
        "price": 1080,
        "currency": "EUR",
        "monthly": false,
        "coverage": "verified",
        "note": "Global EUR reference list fee; promotions may differ. Not the US offering.",
        "target": "2-Step 10 then 5",
        "dailyLoss": "5% (2-Step)",
        "maxDD": "10% static (2-Step)",
        "ddType": "Static",
        "minDays": "2-Step 4 per phase",
        "split": "80-90%",
        "payout": "first payout day 14, then on demand",
        "platform": "MT4, MT5, cTrader, TradingView",
        "source": "https://ftmo.com/lp/how-to-choose-a-prop-firm/"
      },
      {
        "id": "ftmo-us-2-step-10000",
        "program": "US 2-Step",
        "name": "US 2-Step",
        "size": 10000,
        "price": 99,
        "currency": "USD",
        "monthly": false,
        "coverage": "verified",
        "note": "US offering; reference fee before promotions. Eligibility restrictions apply.",
        "target": "2-Step 10 then 5",
        "dailyLoss": "5% (2-Step)",
        "maxDD": "10% static (2-Step)",
        "ddType": "Static",
        "minDays": "2-Step 4 per phase",
        "split": "80-90%",
        "payout": "first payout day 14, then on demand",
        "platform": null,
        "source": "https://ftmo.oanda.com/2-step-challenge/"
      },
      {
        "id": "ftmo-us-2-step-25000",
        "program": "US 2-Step",
        "name": "US 2-Step",
        "size": 25000,
        "price": 289,
        "currency": "USD",
        "monthly": false,
        "coverage": "verified",
        "note": "US offering; reference fee before promotions. Eligibility restrictions apply.",
        "target": "2-Step 10 then 5",
        "dailyLoss": "5% (2-Step)",
        "maxDD": "10% static (2-Step)",
        "ddType": "Static",
        "minDays": "2-Step 4 per phase",
        "split": "80-90%",
        "payout": "first payout day 14, then on demand",
        "platform": null,
        "source": "https://ftmo.oanda.com/2-step-challenge/"
      },
      {
        "id": "ftmo-us-2-step-50000",
        "program": "US 2-Step",
        "name": "US 2-Step",
        "size": 50000,
        "price": 399,
        "currency": "USD",
        "monthly": false,
        "coverage": "verified",
        "note": "US offering; reference fee before promotions. Eligibility restrictions apply.",
        "target": "2-Step 10 then 5",
        "dailyLoss": "5% (2-Step)",
        "maxDD": "10% static (2-Step)",
        "ddType": "Static",
        "minDays": "2-Step 4 per phase",
        "split": "80-90%",
        "payout": "first payout day 14, then on demand",
        "platform": null,
        "source": "https://ftmo.oanda.com/2-step-challenge/"
      },
      {
        "id": "ftmo-us-2-step-100000",
        "program": "US 2-Step",
        "name": "US 2-Step",
        "size": 100000,
        "price": 619,
        "currency": "USD",
        "monthly": false,
        "coverage": "verified",
        "note": "US offering; reference fee before promotions. Eligibility restrictions apply.",
        "target": "2-Step 10 then 5",
        "dailyLoss": "5% (2-Step)",
        "maxDD": "10% static (2-Step)",
        "ddType": "Static",
        "minDays": "2-Step 4 per phase",
        "split": "80-90%",
        "payout": "first payout day 14, then on demand",
        "platform": null,
        "source": "https://ftmo.oanda.com/2-step-challenge/"
      },
      {
        "id": "ftmo-us-2-step-200000",
        "program": "US 2-Step",
        "name": "US 2-Step",
        "size": 200000,
        "price": 1249,
        "currency": "USD",
        "monthly": false,
        "coverage": "verified",
        "note": "US offering; reference fee before promotions. Eligibility restrictions apply.",
        "target": "2-Step 10 then 5",
        "dailyLoss": "5% (2-Step)",
        "maxDD": "10% static (2-Step)",
        "ddType": "Static",
        "minDays": "2-Step 4 per phase",
        "split": "80-90%",
        "payout": "first payout day 14, then on demand",
        "platform": null,
        "source": "https://ftmo.oanda.com/2-step-challenge/"
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
    "slug": "topstep",
    "name": "Topstep",
    "markets": [
      "futures"
    ],
    "rating": 3.7,
    "rsrc": "Trustpilot",
    "reviews": 15161,
    "ratingNote": "Read on trustpilot.com on Nov 26, 2026",
    "split": "100% of the Challenge fixed payout; 90% on the Combine",
    "splitMax": 100,
    "dd": "Challenge: static max loss. Combine: trailing maximum loss limit ($2,000 / $3,000 / $4,500 on 50K / 100K / 150K)",
    "ddTypes": [
      "Static",
      "Trailing"
    ],
    "payoutDays": 5,
    "payoutText": "Challenge: payouts up to $9,000 after the target is hit twice. Combine: first payout in as little as 5 trading days, up to $12,000",
    "from": 49,
    "fromCur": "USD",
    "fromPlan": "Challenge, from $49",
    "monthly": true,
    "code": "2BILLION25",
    "off": 25,
    "codes": [
      {
        "code": "2BILLION25",
        "off": 25,
        "detail": "25% off, terms apply (site banner, Nov 26, 2026)"
      }
    ],
    "consistencyText": "not stated",
    "consNone": false,
    "target": "not stated",
    "dailyDD": "not stated",
    "minDays": "not stated",
    "activation": "not stated",
    "instant": false,
    "instantText": "No",
    "scaling": "Live Funded Account path, up to a $150K live starting balance",
    "news": "not stated",
    "overnight": "not stated",
    "us": "yes",
    "site": "https://www.topstep.com",
    "sources": [
      "https://www.topstep.com/topstep-prop",
      "https://www.topstep.com/our-program",
      "https://help.topstep.com/en/articles/8284204-what-is-the-maximum-loss-limit",
      "https://www.trustpilot.com/review/topstep.com",
      "https://www.topstep.com"
    ],
    "verif": "partial (profit targets, minimum days and news rules not read this pass)",
    "verifLabel": "Partially verified",
    "affiliate": "not stated",
    "platforms": [
      "TopstepX"
    ],
    "payMethods": [
      "Not listed"
    ],
    "deal": "25% off with 2BILLION25 (banner, terms apply)",
    "tracked": false,
    "paid30": null,
    "payouts30": null,
    "largest": null,
    "note": "Checked 27 Nov 2026 on topstep.com. The $49 price is the Challenge, not the Trading Combine. Combine first payout is as little as 5 trading days, not 3. Profit target, minimum days and news rules were not re-read, so those fields stay as previously recorded.",
    "summary": "US futures firm. The $49 entry is the Challenge: keep 100% of a fixed payout, up to $9,000, after the target is hit twice, with a static max loss. The Trading Combine is separate: keep 90%, a trailing maximum loss limit, and a first payout in as little as 5 trading days, up to $12,000.",
    "verifiedOn": "Nov 27, 2026",
    "plans": [
      {
        "id": "topstep-challenge",
        "program": "Challenge",
        "name": "Challenge",
        "size": null,
        "price": 49,
        "currency": "USD",
        "monthly": true,
        "coverage": "verified",
        "note": "The $49 entry is this Challenge. Account size was not stated on the homepage.",
        "target": "not stated",
        "dailyLoss": "not stated",
        "maxDD": "Static max loss",
        "ddType": "Static",
        "minDays": "not stated",
        "split": "100% of the fixed payout",
        "payout": "Up to $9,000 after the target is hit twice",
        "platform": "TopstepX",
        "source": "https://www.topstep.com/topstep-prop"
      },
      {
        "id": "topstep-trading-combine-50000",
        "program": "Trading Combine",
        "name": "Trading Combine",
        "size": 50000,
        "price": null,
        "currency": "USD",
        "monthly": true,
        "coverage": "verified",
        "note": "Price for this size was not on the homepage.",
        "target": "not stated",
        "dailyLoss": "not stated",
        "maxDD": "$2,000 trailing maximum loss limit",
        "ddType": "Trailing",
        "minDays": "not stated",
        "split": "90%",
        "payout": "First payout in as little as 5 trading days, up to $12,000",
        "platform": "TopstepX",
        "source": "https://www.topstep.com/topstep-prop"
      },
      {
        "id": "topstep-trading-combine-100000",
        "program": "Trading Combine",
        "name": "Trading Combine",
        "size": 100000,
        "price": null,
        "currency": "USD",
        "monthly": true,
        "coverage": "verified",
        "note": "Price for this size was not on the homepage.",
        "target": "not stated",
        "dailyLoss": "not stated",
        "maxDD": "$3,000 trailing maximum loss limit",
        "ddType": "Trailing",
        "minDays": "not stated",
        "split": "90%",
        "payout": "First payout in as little as 5 trading days, up to $12,000",
        "platform": "TopstepX",
        "source": "https://www.topstep.com/topstep-prop"
      },
      {
        "id": "topstep-trading-combine-150000",
        "program": "Trading Combine",
        "name": "Trading Combine",
        "size": 150000,
        "price": null,
        "currency": "USD",
        "monthly": true,
        "coverage": "verified",
        "note": "Price for this size was not on the homepage.",
        "target": "not stated",
        "dailyLoss": "not stated",
        "maxDD": "$4,500 trailing maximum loss limit",
        "ddType": "Trailing",
        "minDays": "not stated",
        "split": "90%",
        "payout": "First payout in as little as 5 trading days, up to $12,000",
        "platform": "TopstepX",
        "source": "https://www.topstep.com/topstep-prop"
      }
    ]
  }
];
