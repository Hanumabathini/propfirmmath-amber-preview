/* Journal behavior checks. Uses jsdom and a fake Supabase client — no network.
   Run: node scripts/test-journal.js */
const fs = require("fs");
const path = require("path");
const { JSDOM, VirtualConsole } = require("jsdom");

const root = path.join(__dirname, "..");
let html = fs.readFileSync(path.join(root, "index.html"), "utf8");
html = html.replace(/src="data:image\/[^"]+"/g, 'src=""');
html = html.replace(
  '<script src="/site.config.js"></script>',
  "<script>\n" + fs.readFileSync(path.join(root, "site.config.js"), "utf8") + "\n</script>"
);
html = html.replace('<script src="/vendor/supabase.js"></script>', "");
html = html.replace(
  '<script src="/data/firms.js"></script>',
  "<script>\n" + fs.readFileSync(path.join(root, "data", "firms.js"), "utf8") + "\n</script>"
);

let pass = 0, fail = 0;
function ok(name, cond, got) {
  if (cond) pass++;
  else { fail++; console.log("FAIL", name, "->", got); }
}

function install(window, state) {
  const listeners = [];
  window.scrollTo = () => {};
  window.HTMLElement.prototype.scrollIntoView = () => {};
  window.matchMedia = window.matchMedia || (() => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} }));
  window.IntersectionObserver = window.IntersectionObserver || class { observe() {} unobserve() {} disconnect() {} };
  if (!window.URL.createObjectURL) window.URL.createObjectURL = () => "blob:test";
  window.URL.revokeObjectURL = window.URL.revokeObjectURL || (() => {});
  function builder(table) {
    const q = { filters: [], op: "select", payload: null, single: false, cols: "*", orderCol: null, asc: true };
    const b = {
      select(c) { q.cols = c; return b; },
      eq(col, val) { q.filters.push([col, val]); return b; },
      order(col, opts) { q.orderCol = col; q.asc = !(opts && opts.ascending === false); return b; },
      limit() { return b; },
      range(start,end) { q.range=[start,end]; return b; },
      insert(row) { q.op = "insert"; q.payload = Object.assign({}, row); return b; },
      update(row) { q.op = "update"; q.payload = Object.assign({}, row); return b; },
      delete() { q.op = "delete"; return b; },
      single() { q.single = true; return b; },
      then(resolve, reject) {
        let result;
        try { result = { data: run(), error: null }; }
        catch (e) { result = { data: null, error: { message: e.message } }; }
        return Promise.resolve(result).then(resolve, reject);
      }
    };
    function matching() {
      return state[table].filter(row => q.filters.every(([c, v]) => row[c] === v));
    }
    function run() {
      if (q.op === "select") {
        const list = matching().slice();
        if (q.orderCol) list.sort((a, c) => String(a[q.orderCol]).localeCompare(String(c[q.orderCol])) * (q.asc ? 1 : -1));
        return q.range ? list.slice(q.range[0],q.range[1]+1) : list;
      }
      if (q.op === "insert") {
        const row = Object.assign({ id: state.nextId() }, q.payload);
        state[table].push(row);
        state.inserts.push({ table, row });
        return q.single ? row : [row];
      }
      if (q.op === "update") {
        const list = matching();
        list.forEach(row => Object.assign(row, q.payload));
        if (q.single) return list[0] || null;
        return list;
      }
      const ids = new Set(matching().map(row => row.id));
      state[table] = state[table].filter(row => !ids.has(row.id));
      state.deletes.push({ table, ids: [...ids] });
      return null;
    }
    return b;
  }
  window.supabase = {
    createClient() {
      return {
        auth: {
          onAuthStateChange(cb) {
            listeners.push(cb);
            setTimeout(() => cb("INITIAL_SESSION", state.user ? { user: state.user } : null), 0);
            return { data: { subscription: { unsubscribe() {} } } };
          },
          getSession() {
            return Promise.resolve({ data: { session: state.user ? { user: state.user } : null } });
          },
          signUp(args) {
            state.signUps.push(args);
            return Promise.resolve({ data: { user: { identities: [{}] }, session: null }, error: null });
          },
          signInWithPassword() { return Promise.resolve({ data: {}, error: null }); },
          resetPasswordForEmail(email, opts) {
            state.resets.push({ email, opts });
            return Promise.resolve({ error: null });
          },
          updateUser() { return Promise.resolve({ data: {}, error: null }); },
          signOut() {
            state.user = null;
            listeners.slice().forEach(fn => fn("SIGNED_OUT", null));
            return Promise.resolve({ error: null });
          }
        },
        rpc(name,args){
          try {
            if(name==="journal_remove_account"){
              const a=state.trader_accounts.find(x=>x.id===args.p_account&&x.user_id===state.user.id);
              if(!a)throw Error("Account not found");
              const dest=args.p_destination,mode=args.p_mode;
              if(mode==="move"&&!state.trader_accounts.some(x=>x.id===dest&&x.user_id===state.user.id&&x.id!==a.id))throw Error("Invalid destination");
              const snapshot={account:{...a},trades:state.trades.filter(x=>x.account_id===a.id).map(x=>({...x})),payouts:[],mode,destination:dest};
              if(mode==="move")state.trades.filter(x=>x.account_id===a.id).forEach(x=>x.account_id=dest);else state.trades=state.trades.filter(x=>x.account_id!==a.id);
              state.trader_accounts=state.trader_accounts.filter(x=>x.id!==a.id);
              return Promise.resolve({data:snapshot,error:null});
            }
            if(name==="journal_restore_account"){
              const s=args.p_snapshot;if(s.account.user_id!==state.user.id)throw Error("Invalid restore");
              state.trader_accounts.push({...s.account});
              if(s.mode==="move")s.trades.forEach(x=>{const row=state.trades.find(y=>y.id===x.id);if(row)row.account_id=s.account.id;});else state.trades.push(...s.trades.map(x=>({...x})));
              return Promise.resolve({data:s.account.id,error:null});
            }
            throw Error("Unknown RPC");
          }catch(e){return Promise.resolve({data:null,error:{message:e.message}});}
        },
        from: builder
      };
    }
  };
}

function load(url, state) {
  const vc = new VirtualConsole();
  const errors = [];
  vc.on("jsdomError", e => errors.push(String(e.message || e)));
  const dom = new JSDOM(html, {
    url,
    runScripts: "dangerously",
    pretendToBeVisual: true,
    virtualConsole: vc,
    beforeParse(w) { install(w, state); }
  });
  dom.window.__jsdomErrors = errors;
  return dom;
}

function freshState(user) {
  let n = 0;
  return {
    user,
    trader_accounts: [],
    trades: [],
    inserts: [],
    deletes: [],
    signUps: [],
    resets: [],
    nextId() { n += 1; return "id-" + n; }
  };
}

async function waitFor(fn, label) {
  const start = Date.now();
  while (Date.now() - start < 4000) {
    const v = fn();
    if (v) return v;
    await new Promise(r => setTimeout(r, 20));
  }
  throw new Error("timed out waiting for " + label);
}

function submit(form) {
  form.dispatchEvent(new form.ownerDocument.defaultView.Event("submit", { bubbles: true, cancelable: true }));
}

(async () => {
  const user = { id: "user-1", email: "3rsj8cxh@mail.grokbot.com", app_metadata: { pfm_membership: "pro" }, user_metadata: { full_name: "Test Trader", country: "United States" } };
  const state = freshState(user);
  state.trader_accounts.push({ id: "a1", user_id: user.id, firm: "FTMO", plan: null, account_label: "Main journal", account_size: 0, stage: "evaluation", created_at: "2026-11-01T00:00:00Z" });
  const trades = [
    ["t-ym", "2026-11-01T12:00:00Z", -2, "YM"],
    ["t-si", "2026-11-02T12:00:00Z", 0, "SI"],
    ["t-rty", "2026-11-03T12:00:00Z", 5, "RTY"],
    ["t-gc", "2026-11-04T12:00:00Z", 10, "GC"],
    ["t-es", "2026-11-05T12:00:00Z", -40, "ES"],
    ["t-nq", "2026-11-06T12:00:00Z", 100, "NQ"],
    ["t-cl", "2026-11-07T12:00:00Z", 25, "CL"]
  ];
  trades.forEach(([id, traded_at, pnl, symbol]) => {
    state.trades.push({ id, user_id: user.id, account_id: "a1", traded_at, pnl, symbol, note: symbol === "CL" ? "#breakout" : null });
  });

  const dom = load("https://propfirmmath-amber-preview.pages.dev/journal", state);
  const w = dom.window;
  const d = w.document;
  try {
    await waitFor(() => d.getElementById("journalAddAccount"), "journal shell");
    ok("no jsdom errors", w.__jsdomErrors.length === 0, w.__jsdomErrors.join(" | "));

    ok("money negative", w.money(-120) === "-$120.00", w.money(-120));
    ok("money positive grouping", w.money(2052.45) === "$2,052.45", w.money(2052.45));
    ok("money zero", w.money(0) === "$0.00", w.money(0));
    ok("preview redirect", w.authRedirectTo("/login") === "https://propfirmmath-amber-preview.pages.dev/login", w.authRedirectTo("/login"));
    ok("preview reset redirect", w.authRedirectTo("/reset") === "https://propfirmmath-amber-preview.pages.dev/reset", w.authRedirectTo("/reset"));

    const rateRows = [];
    for (let i = 0; i < 7; i++) rateRows.push({ traded_at: "2026-11-" + String(i + 1).padStart(2, "0"), pnl: 1, symbol: "NQ" });
    for (let i = 0; i < 4; i++) rateRows.push({ traded_at: "2026-11-" + String(i + 8).padStart(2, "0"), pnl: -1, symbol: "ES" });
    rateRows.push({ traded_at: "2026-11-12", pnl: 0, symbol: "CL" });
    const stats = w.journalStats(rateRows);
    ok("win rate keeps breakeven in the denominator", stats.count === 12 && stats.win === 7 && stats.loss === 4 && w.journalWinRateText(stats.count, stats.win, stats.loss) === "58.3%", w.journalWinRateText(stats.count, stats.win, stats.loss));
    ok("breakeven win rate is blank", w.journalWinRateText(1, 0, 0) === "—", w.journalWinRateText(1, 0, 0));
    ok("empty win rate stays 0%", w.journalWinRateText(0, 0, 0) === "0%", w.journalWinRateText(0, 0, 0));
    const hand = w.journalStats([
      { traded_at: "2026-11-01", pnl: 100, symbol: "NQ" },
      { traded_at: "2026-11-02", pnl: -40, symbol: "ES" },
      { traded_at: "2026-11-03", pnl: 10, symbol: "NQ" },
      { traded_at: "2026-11-04", pnl: 0, symbol: "ES" }
    ]);
    ok("profit factor", hand.pf === 2.75, hand.pf);
    ok("max drawdown", hand.drawdown === 40, hand.drawdown);
    const emptyDash = w.journalDashboard([]);
    ok("empty drawdown is not red", emptyDash.includes("Max drawdown") && !/Max drawdown[\s\S]{0,160}#ff8585/.test(emptyDash), emptyDash.slice(emptyDash.indexOf("Max drawdown"), emptyDash.indexOf("Max drawdown") + 180));
    const lossDash = w.journalDashboard([{ traded_at: "2026-11-01", pnl: -120, symbol: "ES" }]);
    ok("dashboard negative money", lossDash.includes("-$120.00") && !lossDash.includes("$-120.00"), "missing signed money");
    const beDash = w.journalInsights([{ traded_at: "2026-11-01", pnl: 0, symbol: "ES" }]);
    ok("analytics breakeven label", beDash.includes("breakeven") && !beDash.includes("0% wins"), beDash);
    const ranked = w.journalInsights([
      { traded_at: "2026-11-01", pnl: 10, symbol: "NQ" },
      { traded_at: "2026-11-02", pnl: 50, symbol: "ES" },
      { traded_at: "2026-11-03", pnl: -5, symbol: "CL" }
    ]);
    ok("analytics sorted by P&L", ranked.indexOf(">ES<") !== -1 && ranked.indexOf(">ES<") < ranked.indexOf(">NQ<") && ranked.indexOf(">NQ<") < ranked.indexOf(">CL<"), "order");

    const shell = d.querySelector(".pfm-journal");
    ok("rendered negatives", shell.innerHTML.includes("-$40.00") && !shell.innerHTML.includes("$-"), "sign");
    ok("live win rate includes breakeven", shell.textContent.includes("57.1%") && shell.textContent.includes("4 wins / 2 losses"), shell.textContent.slice(0, 400));
    ok("dashboard has the curve, calendar, rules and inline trade edit", !!d.querySelector(".pfm-journal svg") && !!d.getElementById("journalDashCalNext") && shell.textContent.includes("Prop rules") && !!d.querySelector("[data-dash-edit]"), "missing dashboard piece");

    function sizesOf(slug) {
      const cat = w.journalFirmCatalog(w.firm(slug));
      return cat.map(p => p.name + ":" + p.sizes.join("/")).join(" | ");
    }
    ok("FTMO plan is 10k, not a forced 50k", w.journalFirmCatalog(w.firm("ftmo")).some(p=>p.name==="2-Step" && p.sizes.includes(10000)), sizesOf("ftmo"));
    ok("FTUK is listed from $9", w.firm("ftuk") && w.firm("ftuk").from === 9, w.firm("ftuk") && w.firm("ftuk").from);
    ok("Apex stays on the 25k plan", w.journalFirmCatalog(w.firm("apex-trader-funding")).some(p=>p.name==="Intraday Trail Std" && p.sizes.includes(25000)), sizesOf("apex-trader-funding"));
    ok("FundedNext lists the 5k plan", w.journalFirmCatalog(w.firm("fundednext")).some(p=>p.name==="Stellar Lite"&&p.sizes.includes(5000)&&p.sizes.includes(200000)), sizesOf("fundednext"));
    const mffu = w.journalFirmCatalog(w.firm("my-funded-futures"));
    ok("MFFU lists the Signature sizes", mffu.length === 1 && mffu[0].name === "Signature" && mffu[0].sizes.join() === "5000,10000,20000", mffu.map(p => p.name + ":" + p.sizes.join("/")).join(" | "));
    const structured = w.journalFirmCatalog({ plans: [{ name: "Pro", sizes: [25000, 50000] }] });
    ok("plans export is the source when present", structured.length === 1 && structured[0].sizes.join() === "25000,50000", structured);
    const ftmoRules = w.journalFirmRules(w.firm("ftmo"), "2-Step", 10000);
    ok("FTMO 2-Step 10k fills target, daily loss, drawdown and days", ftmoRules.target === 1000 && ftmoRules.daily === 500 && ftmoRules.drawdown === 1000 && ftmoRules.minDays === 4 && ftmoRules.consistency == null, JSON.stringify(ftmoRules));
    const mffuRules = w.journalFirmRules(w.firm("my-funded-futures"), "Signature", 10000);
    ok("MFFU Signature 10k uses $500 static loss and $1,000 target", mffuRules.target === 1000 && mffuRules.daily == null && mffuRules.drawdown === 500 && mffuRules.minDays == null && mffuRules.consistency == null, JSON.stringify(mffuRules));
    ok("unknown size never inherits another account's rules",w.journalFirmRules(w.firm("my-funded-futures"),"Signature",42000)===null,"unknown size");
    ok("funded accounts never show evaluation limits",w.journalFirmRules(w.firm("my-funded-futures"),"Signature",10000,"funded")===null,"funded stage");
    const sim=w.journalFirmRules(w.firm("my-funded-futures"),"Signature",10000,"sim_funded");
    ok("Signature sim funded uses separate rules",sim.target===null&&sim.drawdown===500&&sim.dailyProfitCap===5000,sim);
    ok("unknown live rules are not inferred",w.journalFirmRules(w.firm("my-funded-futures"),"Signature",10000,"live_funded")===null,"live");
    ok("Bootcamp advertised funded balance cannot drive evaluation rules",w.journalFirmRules(w.firm("the5ers"),"Bootcamp",20000,"evaluation")===null,"Bootcamp phase balance");
    ok("instant account cannot show evaluation targets",w.journalFirmRules(w.firm("fundingpips"),"Zero",25000,"evaluation")===null,"Zero");
    ok("Topstep platform and all core sizes in journal",w.journalPlatforms(w.firm("topstep"),"Trading Combine — Standard",50000).includes("TopstepX")&&w.journalFirmCatalog(w.firm("topstep")).some(p=>p.name==="Trading Combine — Standard"&&p.sizes.join()==="50000,100000,150000"),"Topstep");
    const all=w.journalFirmChoices();
    ok("all firms use shared plan names and sizes",all.every(f=>(f.plans||[]).every(p=>p.size==null||w.journalFirmCatalog(f).some(c=>c.name===(p.name||p.program)&&c.sizes.includes(Number(p.size))))),"all "+all.length+" firms");
    ok("missing catalog cannot synthesize rules",w.firmPlanList({slug:"test",plans:[],target:"10%",dd:"$500"})[0].target===null,"fallback");
    const legacyTop=w.journalFirmRules(w.firm("topstep"),"Trading Combine",50000,"evaluation");
    ok("legacy Topstep shows common core rules but not optional DLL",legacyTop.target===3000&&legacyTop.drawdown===2000&&legacyTop.daily===null&&legacyTop.minDays===2&&legacyTop.consistency===55,legacyTop);
    const growth=w.journalFirmRules(w.firm("tradeify"),"Growth",50000,"evaluation");
    ok("Tradeify Growth 50K basic rules populated",growth.target===3000&&growth.daily===1250&&growth.drawdown===2000&&growth.minDays===1&&growth.consistency===null,growth);
    ok("explicit no consistency displayed instead of missing",w.journalRuleCard({firm:"Tradeify",plan:"Growth",account_size:50000,stage:"evaluation"},[]).includes("None in evaluation"),"Growth display");
    ok("all firms show five basic rule rows even if missing",w.journalFirmChoices().every(f=>["Profit target","Daily loss","drawdown","Minimum days","Consistency"].every(k=>w.journalRuleCard({firm:f.name,plan:"Unknown legacy plan",account_size:50000,stage:"evaluation"},[]).toLowerCase().includes(k.toLowerCase()))),"all firms");
    const ambiguous=w.journalFirmRules({plans:[{name:"Test",size:10000,target:"Not yet verified",maxDD:"EOD trailing, $1000 (25K)",dailyLoss:"Applies; pending",minDays:"No minimum trading days",consistency:"No evaluation consistency; funded 35%"}]},"Test",10000);
    ok("unknown and wrong-size rules stay unknown",ambiguous.target===null&&ambiguous.drawdown===null&&ambiguous.daily===null&&ambiguous.minDays===null&&ambiguous.consistency===null,JSON.stringify(ambiguous));
    const apexRules = w.journalFirmRules(w.firm("apex-trader-funding"), "Intraday Trail Std", 25000);
    ok("Apex 25k uses the $1,000 drawdown and a 6% target", apexRules.drawdown === 1000 && apexRules.target === 1500 && apexRules.daily == null, JSON.stringify(apexRules));

    ok("approved journal has six labeled SVG side tabs", d.querySelectorAll(".journal-side [data-jtab] svg").length === 6 && Array.from(d.querySelectorAll(".journal-side [data-jtab]")).every(b=>b.getAttribute("aria-label")), "side navigation");
    ok("approved journal has four primary metrics", d.querySelectorAll(".jv14-overview-top .journal-kpi").length === 4, "metric count");
    ok("rules beside equity and top header trade button", !!d.querySelector(".journal-dashboard-top .jv14-rule-monitor") && !!d.querySelector(".jv14-header #journalQuickAdd"), "layout");
    d.querySelector('[data-jtab="settings"]').click();
    ok("settings is a dedicated side tab", !d.getElementById("journalSettings").hidden && d.getElementById("journalOverview").hidden, "settings");
    d.querySelector('[data-jtab="overview"]').click();
    const themeButton = d.getElementById("jv14ThemeTop"), workspace = d.querySelector(".pfm-journal");
    ok("theme in Overview and no manual motion setting", d.getElementById("journalOverview").contains(themeButton) && !d.getElementById("jv14Motion"), "appearance");
    ok("settings owns journal membership upgrades", d.getElementById("journalSettings").textContent.includes("Pro") && d.getElementById("journalSettings").textContent.includes("Journal membership & upgrades") && !d.querySelector('#journalSettings #memberships a[href="/account"]'), "membership");
    const membershipCards=d.querySelectorAll("#journalSettings .pfm-membership-card");
    ok("three memberships have clickable plan summaries",membershipCards.length===3&&Array.from(membershipCards).every(c=>!!c.querySelector("summary")&&!c.open),"membership cards");
    ok("trade log has ordered table and three summary metrics",d.querySelectorAll(".jv14-trade-table th").length===6&&d.querySelectorAll(".jv14-trade-summary>.card").length===3,"trade layout");
    const csv=w.journalCsv([{id:"1",account_id:"a",traded_at:"2026-11-01",pnl:-12.5,symbol:"NQ",note:'=1+1'},{id:"2",account_id:"a",traded_at:"2026-11-02",pnl:10,symbol:"ES",note:'a,"b"'}],[{id:"a",account_label:"Main",firm:"FTMO",plan:"2-Step",account_size:10000,platform:"MT5"}]);
    ok("CSV headers, ordering, negative PnL, quoting and formula defense",csv.startsWith('"Date","Account","Firm","Program","Account size","Platform","Instrument","Outcome","PnL","Note"')&&csv.indexOf("2026-11-02")<csv.indexOf("2026-11-01")&&csv.includes('"-12.50"')&&csv.includes('"a,""b"""')&&csv.includes("\"'=1+1\""),csv);
    ok("trade filters support account and breakeven",w.journalTradeMatches({symbol:"NQ",pnl:0,traded_at:"2026-11-01"},"main","flat",{account_label:"Main"})&&!w.journalTradeMatches({pnl:0},"","wins",null),"filters");
    ok("account caps and trusted metadata", w.pfmMembership({user_metadata:{pfm_membership:"elite"}}).limit===1 && w.pfmMembership({app_metadata:{pfm_membership:"pro"}}).limit===10 && w.pfmMembership({app_metadata:{pfm_membership:"elite"}}).limit===25, "limits");
    themeButton.click();
    ok("workspace theme changes without replacing journal data", workspace.classList.contains("jv14-light") && themeButton.getAttribute("aria-pressed") === "true", workspace.className);
    themeButton.click();
    ok("motion stays enabled by default", !workspace.classList.contains("jv14-no-motion"), workspace.className);
    const accounts = d.getElementById("journalAccounts");
    const tradesPanel = d.getElementById("journalTrades");
    ok("accounts panel is not inside the trade log", accounts && accounts.parentElement.classList.contains("journal-main") && !tradesPanel.contains(accounts), accounts && accounts.parentElement.className);
    d.querySelector('[data-jtab="accounts"]').click();
    ok("accounts tab opens with editor hidden", d.getElementById("journalAccountEditor").hidden && d.getElementById("journalAddAccount").getAttribute("aria-expanded")==="false", "closed by default");
    d.getElementById("journalAddAccount").click();
    ok("explicit add opens editor", !d.getElementById("journalAccountEditor").hidden && d.getElementById("journalAddAccount").getAttribute("aria-expanded")==="true", "open");
    d.getElementById("journalAccountCancel").click();
    ok("cancel closes add editor", d.getElementById("journalAccountEditor").hidden, "closed");
    d.getElementById("journalAddAccount").click();
    d.querySelector('[data-jtab="overview"]').click();
    d.querySelector('[data-jtab="accounts"]').click();
    ok("leaving accounts closes editor", d.getElementById("journalAccountEditor").hidden, "closed");
    d.getElementById("journalAddAccount").click();
    ok("add account shows the form", accounts.hidden === false && !accounts.closest("[hidden]") && d.getElementById("journalAccountForm") && d.getElementById("journalHeading").textContent === "Trading accounts", d.getElementById("journalHeading") && d.getElementById("journalHeading").textContent);

    function sizeOptions() {
      return Array.prototype.map.call(d.getElementById("newAccountSizePreset").options, o => o.value);
    }
    const filter = d.getElementById("journalAccountFilter");
    ok("dashboard lists only saved accounts", filter.innerHTML.includes("All my accounts") && filter.innerHTML.includes("Main journal") && !filter.innerHTML.includes("firm:") && !filter.innerHTML.includes("+ FTMO"), filter.innerHTML.slice(0, 240));
    d.getElementById("newFirm").value = "FTMO";
    d.getElementById("newFirm").dispatchEvent(new w.Event("change"));
    ok("FTMO defaults to its 10k plan", d.getElementById("newFirm").value === "FTMO" && d.getElementById("newPlan").value === "2-Step" && sizeOptions().includes("10000") && sizeOptions().includes("__custom__") && d.getElementById("newAccountSizePreset").value === "10000", sizeOptions().join());
    d.getElementById("newFirm").value = "My Funded Futures";
    d.getElementById("newFirm").dispatchEvent(new w.Event("change"));
    ok("MFFU offers every listed size", d.getElementById("newPlan").value === "Signature" && sizeOptions().join() === "5000,10000,20000,__custom__" && d.getElementById("newAccountSizePreset").value === "5000", sizeOptions().join());
    const allFirms = d.getElementById("newFirm");
    ok("every directory firm plus placeholder and manual option is selectable", allFirms.options.length === w.FIRMS.length + 2 && w.FIRMS.every(f => Array.from(allFirms.options).some(o => o.value === f.name)), allFirms.options.length);
    const search = d.getElementById("jv14FirmSearch");
    search.value = "FTMO"; search.dispatchEvent(new w.Event("input"));
    ok("firm search filters the list without losing the selected account firm", Array.from(allFirms.options).find(o => o.value === "FTMO").hidden === false && Array.from(allFirms.options).find(o => o.value === "My Funded Futures").hidden === false && Array.from(allFirms.options).some(o => o.hidden), "search");
    search.value = ""; search.dispatchEvent(new w.Event("input"));
    ok("clearing search restores every firm", Array.from(allFirms.options).every(o => !o.hidden), "clear");
    const preset = d.getElementById("newAccountSizePreset"), manual = d.getElementById("newAccountSize");
    preset.value = "__custom__"; preset.dispatchEvent(new w.Event("change"));
    ok("manual account size is visible and required", manual.style.display !== "none" && manual.required && manual.value === "", manual.style.display);
    manual.value = "42000";
    preset.value = "20000"; preset.dispatchEvent(new w.Event("change"));
    ok("return to a published size hides manual field and uses exact preset", manual.style.display === "none" && manual.value === "20000", manual.value);
    const planSelect = d.getElementById("newPlan");
    planSelect.value = "__custom__"; planSelect.dispatchEvent(new w.Event("change"));
    ok("manual plan and manual size are available", d.getElementById("newPlanOther").style.display !== "none" && manual.style.display !== "none", planSelect.value);
    planSelect.value = "Signature"; planSelect.dispatchEvent(new w.Event("change"));
    ok("return to Signature restores all published sizes", sizeOptions().join() === "5000,10000,20000,__custom__", sizeOptions().join());
    d.getElementById("newAccountSizePreset").value = "20000";
    d.getElementById("newAccountSizePreset").dispatchEvent(new w.Event("change"));
    ok("chosen size is not replaced by 5k", d.getElementById("newAccountSizePreset").value === "20000", d.getElementById("newAccountSizePreset").value);
    const platformSelect=d.getElementById("newPlatform");
    ok("Signature offers Hyperprop only",Array.from(platformSelect.options).map(o=>o.value).join()===",Hyperprop,__custom__",platformSelect.innerHTML);
    platformSelect.value="Hyperprop";platformSelect.dispatchEvent(new w.Event("change"));
    submit(d.getElementById("journalAccountForm"));
    await waitFor(() => state.trader_accounts[1] && d.getElementById("journalAccountFilter") && d.getElementById("journalAccountFilter").value === state.trader_accounts[1].id, "new account");
    ok("successful add closes editor", d.getElementById("journalAccountEditor").hidden, "closed");
    const created = state.trader_accounts[1];
    ok("platform persists with account",created.platform==="Hyperprop",created);
    ok("selected size saves with its plan", created.firm === "My Funded Futures" && created.plan === "Signature" && Number(created.account_size) === 20000 && created.account_label === "My Funded Futures Signature", created);
    ok("list, dashboard and trade form share plan and size", d.body.textContent.includes("My Funded Futures Signature · Signature · $20,000.00") && d.getElementById("journalAccountFilter").selectedOptions[0].textContent.includes("$20,000.00") && Array.prototype.some.call(d.getElementById("jAccount").options, o => o.textContent.includes("Signature") && o.textContent.includes("$20,000.00")), d.getElementById("journalAccountFilter").selectedOptions[0].textContent);
    ok("switched to the new account", w.journalState.selected === created.id && d.getElementById("journalAccountFilter").value === created.id, d.getElementById("journalAccountFilter").value);
    ok("new account dashboard is empty", d.getElementById("journalOverview").textContent.includes("0 recorded trades"), "overview");
    const live = w.journalState.accounts.find(a => a.id === created.id);
    live.account_size = 42000;
    w.journalState.tab = "accounts";
    w.renderJournal();
    d.querySelector('[data-edit-account="' + created.id + '"]').click();
    ok("editing keeps a saved size the plan does not list", d.getElementById("newAccountSizePreset").value === "42000" && sizeOptions().indexOf("42000") >= 0 && sizeOptions().indexOf("5000") >= 0, sizeOptions().join());
    submit(d.getElementById("journalAccountForm"));
    await waitFor(() => Number(state.trader_accounts.find(a => a.id === created.id).account_size) === 42000 && state.inserts.filter(x => x.table === "trader_accounts").length === 1, "edited account");
    ok("saved size is not rewritten to the plan default", Number(state.trader_accounts.find(a => a.id === created.id).account_size) === 42000, state.trader_accounts.find(a => a.id === created.id));

    const filterNow = d.getElementById("journalAccountFilter");
    filterNow.value = "all";
    filterNow.dispatchEvent(new w.Event("change"));
    await waitFor(() => d.getElementById("journalOverview") && d.getElementById("journalOverview").textContent.includes("7 recorded trades"), "all accounts");
    ok("all accounts combines trades", d.querySelectorAll(".journal-symbol").length === 5, d.querySelectorAll(".journal-symbol").length);
    const rulePicker = d.getElementById("journalRuleAccount");
    const ruleCards = Array.from(d.querySelectorAll("[data-rule-index]"));
    ok("all accounts retain rules but only one is visible", rulePicker && ruleCards.length === 2 && ruleCards.filter(c=>!c.hidden).length === 1, ruleCards.length);
    rulePicker.value = "1";
    rulePicker.dispatchEvent(new w.Event("change"));
    ok("rule account selector switches without changing dashboard scope", ruleCards[0].hidden && !ruleCards[1].hidden && w.journalState.selected === "all", rulePicker.value);
    ok("equity chart shows guides and real recorded metrics", !!d.querySelector(".jv14-equity-chart text") && d.querySelectorAll(".jv14-equity-stats>div").length === 3 && !!d.querySelector(".jv14-equity-dates"), "equity polish");
    ok("extra policy details stay closed by default", Array.from(d.querySelectorAll(".jv14-rule-details")).every(el=>!el.open), "collapsed");

    d.getElementById("journalSymbolsToggle").click();
    ok("show all symbols", d.querySelectorAll(".journal-symbol").length === 7 && d.getElementById("journalSymbolsToggle").textContent === "Show top 5", d.querySelectorAll(".journal-symbol").length);

    d.querySelector('[data-jtab="insights"]').click();
    const insightText = d.getElementById("journalInsights").textContent;
    ok("rendered analytics order and breakeven", insightText.indexOf("NQ") < insightText.indexOf("CL") && insightText.indexOf("SI") !== -1 && insightText.slice(insightText.indexOf("SI"), insightText.indexOf("SI") + 40).includes("breakeven"), insightText.slice(insightText.indexOf("SI"), insightText.indexOf("SI") + 40));

    d.querySelector('[data-jtab="calendar"]').click();
    const cal = d.getElementById("journalCalendar");
    const before = cal.querySelector("h3").textContent;
    d.getElementById("journalCalNext").click();
    const after = d.getElementById("journalCalendar").querySelector("h3").textContent;
    ok("calendar next month", after !== before, before + " -> " + after);
    d.getElementById("journalCalPrev").click();
    ok("calendar previous month", d.getElementById("journalCalendar").querySelector("h3").textContent === before, d.getElementById("journalCalendar").querySelector("h3").textContent);

    d.querySelector('[data-jtab="trades"]').click();
    ok("trade log stays put", d.getElementById("journalTrades").hidden === false && d.getElementById("journalOverview").hidden === true, "tabs");
    const edit = d.querySelector("[data-edit]");
    edit.click();
    ok("edit shows cancel", d.getElementById("jCancel").hidden === false && d.getElementById("jForm").querySelector("button[type=submit]").textContent === "Update trade", d.getElementById("jForm").querySelector("button[type=submit]").textContent);
    d.getElementById("jCancel").click();
    ok("cancel clears edit and stays on the trade log", d.getElementById("jCancel").hidden === true && d.getElementById("journalTrades").hidden === false && d.getElementById("journalOverview").hidden === true && d.getElementById("jForm").querySelector("button[type=submit]").textContent === "Save trade", "cancel");

    const del = d.querySelector('[data-del="t-es"]');
    del.click();
    ok("delete asks first", del.textContent === "Delete?" && state.trades.some(t => t.id === "t-es"), del.textContent);
    del.click();
    await waitFor(() => !state.trades.some(t => t.id === "t-es") && d.getElementById("journalTrades") && d.getElementById("journalTrades").hidden === false, "deleted");
    ok("delete confirms and stays on the trade log", d.getElementById("journalOverview").hidden === true && !d.querySelector('[data-del="t-es"]'), "deleted view");

    ok("instrument is not silently capped", d.getElementById("jInst").getAttribute("maxlength") == null, d.getElementById("jInst").outerHTML);
    d.getElementById("jInst").value = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    d.getElementById("jInst").dispatchEvent(new w.Event("input"));
    ok("instrument counter warns", d.getElementById("jInstCount").textContent === "36 / 32", d.getElementById("jInstCount").textContent);
    d.getElementById("jPnl").value = "10";
    submit(d.getElementById("jForm"));
    ok("long instrument rejected", d.getElementById("jMsg").textContent.includes("32 characters"), d.getElementById("jMsg").textContent);

    d.getElementById("jInst").value = "NQ";
    d.getElementById("jPnl").value = "-0.005";
    submit(d.getElementById("jForm"));
    ok("too many decimals", d.getElementById("jMsg").textContent.includes("at most 2 decimal places") && !d.getElementById("jMsg").textContent.includes("Enter a date, an instrument and a numeric"), d.getElementById("jMsg").textContent);

    d.getElementById("jPnl").value = "abc";
    submit(d.getElementById("jForm"));
    ok("text P&L", /digits/.test(d.getElementById("jMsg").textContent), d.getElementById("jMsg").textContent);

    d.getElementById("jPnl").value = "99999999999999";
    submit(d.getElementById("jForm"));
    ok("absurd P&L rejected", d.getElementById("jMsg").textContent.includes("$1,000,000.00"), d.getElementById("jMsg").textContent);

    d.getElementById("jPnl").value = "10";
    d.getElementById("jDate").value = "2027-06-01";
    submit(d.getElementById("jForm"));
    ok("future date rejected", d.getElementById("jMsg").textContent.includes("future"), d.getElementById("jMsg").textContent);

    d.getElementById("jDate").value = w.journalToday();
    d.getElementById("jInst").value = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    d.getElementById("jPnl").value = "15.5";
    d.getElementById("jAccount").value = created.id;
    const beforeInserts = state.inserts.length;
    submit(d.getElementById("jForm"));
    await waitFor(() => state.inserts.length > beforeInserts && d.getElementById("journalTrades").hidden === false, "saved trade");
    const saved = state.inserts[state.inserts.length - 1].row;
    ok("26-character instrument kept", saved.symbol === "ABCDEFGHIJKLMNOPQRSTUVWXYZ" && saved.symbol.length === 26, saved.symbol);
    ok("trade assigned to the selected account", saved.account_id === created.id && saved.pnl === 15.5 && !("position_size" in saved), saved);
    ok("still on the trade log after save", d.getElementById("journalTrades").hidden === false && d.getElementById("journalOverview").hidden === true, "tab");

    async function reloadJournal() {
      await w.journalLoad();
      w.renderJournal();
    }
    d.querySelector('[data-jtab="trades"]').click();
    d.querySelector('[data-edit="t-nq"]').click();
    ok("trade edit shows update and cancel", d.getElementById("jForm").querySelector("button[type=submit]").textContent === "Update trade" && d.getElementById("jCancel").hidden === false, d.getElementById("jForm").querySelector("button[type=submit]").textContent);
    d.getElementById("jPnl").value = "77";
    submit(d.getElementById("jForm"));
    await waitFor(() => state.trades.some(t => t.id === "t-nq" && Number(t.pnl) === 77), "trade update");
    await reloadJournal();
    ok("trade update persists after reload", state.trades.some(t => t.id === "t-nq" && Number(t.pnl) === 77), state.trades.find(t => t.id === "t-nq"));
    d.querySelector('[data-jtab="trades"]').click();
    d.querySelector('[data-edit="t-nq"]').click();
    d.getElementById("jPnl").value = "1";
    d.getElementById("jCancel").click();
    await reloadJournal();
    ok("trade cancel does not save", state.trades.some(t => t.id === "t-nq" && Number(t.pnl) === 77) && d.getElementById("jCancel").hidden === true, state.trades.find(t => t.id === "t-nq"));
    d.querySelector('[data-jtab="trades"]').click();
    const delNq = d.querySelector('[data-del="t-nq"]');
    delNq.click();
    ok("trade delete cancel is available", delNq.textContent === "Delete?" && state.trades.some(t => t.id === "t-nq"), delNq.textContent);
    delNq.nextElementSibling.click();
    ok("trade delete cancel leaves the trade", delNq.textContent === "Delete" && state.trades.some(t => t.id === "t-nq"), delNq.textContent);
    d.querySelector('[data-del="t-nq"]').click();
    d.querySelector('[data-del="t-nq"]').click();
    await waitFor(() => !state.trades.some(t => t.id === "t-nq"), "trade deleted");
    await reloadJournal();
    ok("trade delete persists after reload", !state.trades.some(t => t.id === "t-nq"), "still present");
    d.getElementById("toast").querySelector("button").click();
    await waitFor(() => state.trades.some(t => t.id === "t-nq" && Number(t.pnl) === 77), "trade undo");
    await reloadJournal();
    ok("trade undo persists after reload", state.trades.some(t => t.id === "t-nq" && Number(t.pnl) === 77), state.trades.find(t => t.id === "t-nq"));

    d.querySelector('[data-jtab="accounts"]').click();
    d.querySelector('[data-edit-account="a1"]').click();
    ok("account edit shows save and cancel", !d.getElementById("journalAccountEditor").hidden && d.getElementById("journalAccountSave").textContent === "Save changes" && d.getElementById("journalAccountCancel").hidden === false, d.getElementById("journalAccountSave").textContent);
    d.getElementById("newAccountLabel").value = "Renamed journal";
    d.getElementById("newAccountLabel").dataset.auto = "0";
    d.getElementById("newAccountStatus").value = "breached";
    d.getElementById("newAccountStage").value = "funded";
    submit(d.getElementById("journalAccountForm"));
    await waitFor(() => state.trader_accounts.some(a => a.id === "a1" && a.account_label === "Renamed journal" && a.status === "breached" && a.stage === "funded"), "account update");
    await reloadJournal();
    ok("account edit persists after reload", state.trader_accounts.some(a => a.id === "a1" && a.account_label === "Renamed journal" && a.status === "breached" && a.stage === "funded"), state.trader_accounts.find(a => a.id === "a1"));
    d.querySelector('[data-edit-account="a1"]').click();
    d.getElementById("newAccountLabel").value = "Nope";
    d.getElementById("journalAccountCancel").click();
    ok("cancel edit closes editor", d.getElementById("journalAccountEditor").hidden, "closed");
    await reloadJournal();
    ok("account cancel does not save", state.trader_accounts.some(a => a.id === "a1" && a.account_label === "Renamed journal"), state.trader_accounts.find(a => a.id === "a1"));
    const tradeCount = state.trades.filter(t => t.account_id === "a1").length;
    d.querySelector('[data-delete-account="a1"]').click();
    ok("delete dialog states the trade count", d.getElementById("journalAccountDelete").hidden === false && d.getElementById("journalDeleteText").textContent.includes(tradeCount + " trade"), d.getElementById("journalDeleteText").textContent);
    ok("move is offered when another account exists", d.getElementById("journalDeleteMoveBtn").hidden === false && d.getElementById("journalDeleteMove").options.length > 0, d.getElementById("journalDeleteMove").innerHTML);
    d.getElementById("journalDeleteCancel").click();
    ok("account delete cancel closes the dialog", d.getElementById("journalAccountDelete").hidden === true && state.trader_accounts.some(a => a.id === "a1"), "closed");
    d.querySelector('[data-delete-account="a1"]').click();
    const dest = d.getElementById("journalDeleteMove").value;
    d.getElementById("journalDeleteMoveBtn").click();
    await waitFor(() => !state.trader_accounts.some(a => a.id === "a1"), "account moved");
    await reloadJournal();
    const orphan = state.trades.filter(t => !state.trader_accounts.some(a => a.id === t.account_id));
    ok("moved trades stay attached and the account is gone", !state.trader_accounts.some(a => a.id === "a1") && state.trades.filter(t => t.account_id === dest).length >= tradeCount && orphan.length === 0, "orphans " + orphan.length);
    d.getElementById("toast").querySelector("button").click();
    await waitFor(() => state.trader_accounts.some(a => a.id === "a1") && state.trades.filter(t => t.account_id === "a1").length === tradeCount, "account undo");
    await reloadJournal();
    const back = state.trades.filter(t => t.account_id === "a1").map(t => t.id);
    ok("undo puts the account and its trades back", state.trader_accounts.some(a => a.id === "a1") && back.length === tradeCount, "wanted " + tradeCount + " got " + back.join(","));

    state.trader_accounts.push({ id: "a-temp", user_id: user.id, firm: "FTMO", plan: "2-Step", account_label: "Temp", account_size: 10000, stage: "evaluation", status: "active", created_at: "2026-11-20" });
    state.trades.push({ id: "t-temp", user_id: user.id, account_id: "a-temp", traded_at: "2026-11-20T12:00:00Z", pnl: 3, symbol: "ES", note: null });
    await reloadJournal();
    d.querySelector('[data-delete-account="a-temp"]').click();
    ok("single-trade delete names that one trade", d.getElementById("journalDeleteText").textContent.includes("1 trade"), d.getElementById("journalDeleteText").textContent);
    d.getElementById("journalDeleteAllBtn").click();
    await waitFor(() => !state.trader_accounts.some(a => a.id === "a-temp") && !state.trades.some(t => t.id === "t-temp"), "account and trade deleted");
    await reloadJournal();
    ok("delete with trades persists", !state.trader_accounts.some(a => a.id === "a-temp") && !state.trades.some(t => t.account_id === "a-temp"), "still there");
    d.getElementById("toast").querySelector("button").click();
    await waitFor(() => state.trader_accounts.some(a => a.id === "a-temp") && state.trades.some(t => t.id === "t-temp" && t.account_id === "a-temp"), "account undo with trades");
    const only = w.journalState.accounts.slice();
    w.journalState.accounts = [only[0]];
    w.renderJournal();
    d.querySelector("[data-delete-account]").click();
    ok("the only account cannot move trades off into nowhere", d.getElementById("journalDeleteMoveBtn").hidden === true && d.getElementById("journalDeleteText").textContent.includes("only account"), d.getElementById("journalDeleteText").textContent);
    d.getElementById("journalDeleteCancel").click();
    const savedAccounts = w.journalState.accounts.slice();
    const savedTrades = w.journalState.allRows.slice();
    w.journalState.accounts = [];
    w.journalState.allRows = [];
    w.journalState.rows = [];
    w.journalState.selected = "all";
    w.journalState.tab = "overview";
    w.renderJournal();
    const emptyFilter = d.getElementById("journalAccountFilter");
    ok("empty journal asks for the first account and hides the firm catalog", d.getElementById("journalEmptyAdd") && d.body.textContent.includes("Add your first account") && emptyFilter.innerHTML.includes("All my accounts") && !emptyFilter.innerHTML.includes("firm:") && !emptyFilter.innerHTML.includes("+ "), emptyFilter.innerHTML);
    d.getElementById("journalEmptyAdd").click();
    ok("empty-state button opens the firm catalog", !d.getElementById("journalAccountEditor").hidden && d.getElementById("journalAccountForm") && d.getElementById("newFirm").options.length > 40, d.getElementById("newFirm").options.length);
    w.journalState.accounts = savedAccounts;
    w.journalState.allRows = savedTrades;
    w.journalState.tab = "overview";
    w.renderJournal();

    w.history.pushState({}, "", "/account");
    w.route();
    ok("memberships are not rendered on the general account page", !d.querySelector("#memberships"), "account membership scope");
    ok("logged-in account page", d.getElementById("accountSignOut") && d.body.textContent.includes("3rsj8cxh@mail.grokbot.com") && d.body.textContent.includes("Test Trader") && !d.getElementById("regForm"), d.querySelector("h1") && d.querySelector("h1").textContent);
    const nav = d.getElementById("mainnav").textContent;
    ok("nav shows account and sign out", nav.includes("Account") && nav.includes("Sign out") && nav.includes("My Journal") && !nav.includes("Sign In"), nav);

    d.getElementById("navSignOut").click();
    await waitFor(() => w.location.pathname === "/" && d.getElementById("mainnav").textContent.includes("Sign In"), "signed out");
    ok("signed out nav", !d.getElementById("navSignOut") && d.getElementById("mainnav").textContent.includes("Sign In"), d.getElementById("mainnav").textContent);
    w.history.pushState({}, "", "/account");
    w.route();
    ok("free registration offers the journal without pricing cards", !d.querySelector("#memberships") && !!d.querySelector(".pfm-free-journal-intro"), "free signup");
    ok("logged-out account page is signup", !!d.getElementById("regForm") && !d.getElementById("accountSignOut"), d.querySelector("h1") && d.querySelector("h1").textContent);
    d.getElementById("regName").value = "Test Trader";
    d.getElementById("regEmail").value = "trader@example.com";
    d.getElementById("regPass").value = "password1";
    d.getElementById("regPass2").value = "password1";
    d.getElementById("regTerms").checked = true;
    submit(d.getElementById("regForm"));
    await waitFor(() => state.signUps.length === 1, "signup");
    ok("signup emailRedirectTo uses this site", state.signUps[0].options.emailRedirectTo === "https://propfirmmath-amber-preview.pages.dev/login", state.signUps[0].options.emailRedirectTo);
  } catch (e) {
    fail++;
    console.log("FAIL exception", e && e.stack || e);
    const app = d.getElementById("app");
    console.log("page:", app ? app.textContent.slice(0, 500) : "(no app)");
    console.log("jsdom:", w.__jsdomErrors.join(" | "));
  }
  dom.window.close();

  const local = freshState(null);
  const localDom = load("http://localhost:3000/account", local);
  try {
    ok("localhost redirect falls back to SITE_URL", localDom.window.authRedirectTo("/login") === "https://propfirmmath.com/login", localDom.window.authRedirectTo("/login"));
  } catch (e) {
    fail++;
    console.log("FAIL localhost", e && e.stack || e);
  }
  await new Promise(r => setTimeout(r, 40));
  localDom.window.close();

  console.log(pass + " passed, " + fail + " failed");
  process.exit(fail ? 1 : 0);
})();
