/* Terra 3D behavior checks: real catalog, no network or browser login. */
const fs=require("fs"),path=require("path"),assert=require("node:assert/strict");
const {JSDOM,VirtualConsole}=require("jsdom");
const root=path.join(__dirname,"..");
let html=fs.readFileSync(path.join(root,"index.html"),"utf8");
for(const file of ["site.config.js","data/firms.js"])html=html.replace('<script src="/'+file+'"></script>',()=>"<script>\n"+fs.readFileSync(path.join(root,file),"utf8")+"\n</script>");
html=html.replace('<script src="/vendor/supabase.js"></script>',"");
function run(route,fn,reduced=false){
 const errors=[];const vc=new VirtualConsole();vc.on("jsdomError",e=>{if(!/Could not parse CSS stylesheet/.test(e.message))errors.push(e.message)});
 const dom=new JSDOM(html,{url:"https://propfirmmath.com"+route,runScripts:"dangerously",pretendToBeVisual:true,virtualConsole:vc,beforeParse(w){w.scrollTo=()=>{};w.HTMLElement.prototype.scrollIntoView=()=>{};w.matchMedia=()=>({matches:reduced,addListener(){},removeListener(){},addEventListener(){},removeEventListener(){}});w.IntersectionObserver=class{observe(){} unobserve(){} disconnect(){}};}});
 try{fn(dom.window.document,dom.window);assert.deepEqual(errors,[],"runtime errors "+route);}finally{dom.window.close();}
}
run("/",(d,w)=>{
 const hero=d.querySelector(".hero");assert(hero&&hero.querySelector(".hero-bg img[src='/img/hero-960.webp']"),"original hero missing");
 const rows=[...d.querySelectorAll("#tc-original-marquee .mq")];assert.equal(rows.length,2);
 const firmLinks=[...d.querySelectorAll("#tc-original-marquee a:not([aria-hidden])")];assert(firmLinks.length>100);assert.equal(new Set(firmLinks.map(a=>a.href)).size,firmLinks.length);
 const pause=d.querySelector("#tc-marquee-pause");pause.click();assert.equal(pause.getAttribute("aria-pressed"),"true");pause.click();assert.equal(pause.getAttribute("aria-pressed"),"false");
 d.querySelector("#home-tabs [data-m=futures]").click();assert(d.querySelector("#home-tabs [data-m=futures]").classList.contains("on"));d.querySelector("#home-tabs [data-m=all]").click();assert(d.querySelector("#home-tabs [data-m=all]").classList.contains("on"));
});
run("/",(d)=>assert(d.querySelector("#tc-marquee-pause").disabled),true);
run("/",(d)=>{const form=d.querySelector(".tc-firm-search");assert.equal(form.getAttribute("action"),"/firms");assert.equal(form.querySelector("[name=view]").value,"directory");assert(d.querySelector("#mainnav a[href='/firms?view=plans']"));assert(d.querySelector("#mainnav a[href='/journal']"));assert(d.querySelector("#mainnav a[href='/login']"));});
run("/firms?view=directory&q=tradeify",(d)=>{assert.equal(d.querySelector("#dir-q").value,"tradeify");const cards=[...d.querySelectorAll("#dtable .firm-card")];assert(cards.length>0);assert(cards.every(c=>c.querySelector(".firm-head").textContent.toLowerCase().includes("tradeify")));assert(!d.querySelector(".tc-advanced-filters").open);assert(d.querySelector("#dir-platform"));assert(d.querySelector(".tc-view-switch a[href='/firms?view=plans']"));});
run("/firms",(d)=>{const markets=[...d.querySelectorAll(".market-landing-card")];assert.equal(markets.length,6);assert(markets.every(m=>m.querySelector(".terra-market-object svg")),"market artwork missing");});
run("/deals",(d)=>{
 const items=[...d.querySelectorAll(".terra-spot-ticket")];
 if(items.length>1){const pos=d.querySelector("#terra-ticket-position");assert.equal(pos.textContent,"1 / "+items.length);d.querySelector("#terra-ticket-next").click();assert.equal(pos.textContent,"2 / "+items.length);assert.equal(items[1].dataset.slot,"0");d.querySelector("#terra-ticket-prev").click();assert.equal(items[0].dataset.slot,"0");}
 const pause=d.querySelector("#terra-clock-toggle");assert(pause);pause.click();assert.equal(pause.getAttribute("aria-pressed"),"true");pause.click();assert.equal(pause.getAttribute("aria-pressed"),"false");
});
run("/tracker",(d)=>{const bars=[...d.querySelectorAll("[data-payout-row]")];assert(bars.length>0);assert(d.querySelector("#tc-payout-detail").textContent.length>0);if(bars.length>1){bars[1].click();assert.equal(bars[1].getAttribute("aria-pressed"),"true");assert.equal(bars[0].getAttribute("aria-pressed"),"false");assert(d.querySelector("#tc-payout-detail").textContent.includes(bars[1].querySelector("span").textContent));}});
run("/compare?add=tradeify",(d)=>{assert(d.querySelector(".tc-compare-dossier"));const risk=d.querySelector("[data-tc-field=risk]");assert(risk);risk.click();const rows=[...d.querySelectorAll(".comparison-table [data-field-group]")];assert(rows.length>0);assert(rows.every(row=>row.hidden===(row.dataset.fieldGroup!=="risk")));d.querySelector("[data-tc-field=all]").click();assert(rows.every(row=>!row.hidden));});
run("/firm/tradeify",(d)=>{assert(d.querySelector(".tc-firm-identity"));assert(d.querySelector("#plan-board"));});
run("/firms?view=plans",(d,w)=>{assert(d.querySelector(".tc-catalog-mast"));assert(d.querySelectorAll(".tc-account-tile").length>0);const save=d.querySelector("[data-save-plan]");save.click();assert.equal(save.getAttribute("aria-pressed"),"true");d.querySelector("#pc-saved").click();assert.equal(d.querySelectorAll(".tc-account-tile").length,1);d.querySelector("#pc-clear").click();const input=d.querySelector("#pc-q");input.value="tradeify";input.dispatchEvent(new w.Event("input"));assert([...d.querySelectorAll(".tc-account-brand")].every(x=>x.textContent.toLowerCase().includes("tradeify")));});
run("/compare?pick=tradeify&pick=ftmo",(d)=>{assert.equal(d.querySelectorAll(".tc-compare-dossier").length,2);const diff=d.querySelector("#tc-differences");diff.click();assert.equal(diff.getAttribute("aria-pressed"),"true");const rows=[...d.querySelectorAll(".comparison-table [data-field-group]")];assert(rows.every(row=>row.hidden===(new Set([...row.querySelectorAll("td")].slice(1).map(td=>td.textContent.trim())).size===1)));});
run("/compare?pick=tradeify&pick=ftmo",(d)=>{const fees=d.querySelector(".tc-fee-visual");assert(fees);assert.equal(fees.querySelectorAll(".tc-fee-column").length,2);});
run("/firms?view=plans",(d,w)=>{const input=d.querySelector("#pc-q");input.value="tradeify";input.dispatchEvent(new w.Event("input"));const link=d.querySelector(".tc-account-actions a[href*='#plan-board']");assert(link);assert(new URL(link.href).searchParams.get("plan"));});
run("/firm/my-funded-futures?plan=my-funded-futures-signature-10000",(d)=>{const active=d.querySelector("#plan-sizes [aria-pressed=true]");assert(active);assert.equal(active.getAttribute("data-plan"),"my-funded-futures-signature-10000");});
run("/rules",(d,w)=>{const q=d.querySelector("#tc-rules-q");assert(q);q.value="tradeify";q.dispatchEvent(new w.Event("input"));const shown=[...d.querySelectorAll(".tc-rules-table tbody tr:not([hidden])")];assert(shown.length>0&&shown.every(r=>r.textContent.toLowerCase().includes("tradeify")));q.value="static drawdown";q.dispatchEvent(new w.Event("input"));assert([...d.querySelectorAll(".tc-rules-table tbody tr:not([hidden])")].every(r=>["static","drawdown"].every(term=>r.textContent.toLowerCase().includes(term))));});
run("/faq",(d,w)=>{const q=d.querySelector("#tc-faq-q");assert(q);q.value="payout";q.dispatchEvent(new w.Event("input"));const shown=[...d.querySelectorAll("details.faq:not([hidden])")];assert(shown.length>0&&shown.every(el=>el.textContent.toLowerCase().includes("payout")));});
run("/statistics",(d)=>{assert.equal(d.querySelectorAll(".tc-stats-bars>a").length,6);});
run("/compare?pick=tradeify&pick=ftmo",(d,w)=>{const risk=d.querySelector("[data-tc-field=risk]");risk.click();const diff=d.querySelector("#tc-differences");diff.click();const select=d.querySelector("#cmp0");const candidate=[...select.options].find(o=>o.value&&o.value!=="tradeify"&&o.value!=="ftmo");assert(candidate);select.value=candidate.value;select.dispatchEvent(new w.Event("change"));assert.equal(d.querySelector("[data-tc-field=risk]").getAttribute("aria-pressed"),"true");assert.equal(d.querySelector("#tc-differences").getAttribute("aria-pressed"),"true");assert.equal(d.activeElement.id,"cmp0");});
run("/tools",(d)=>{
 const cards=[...d.querySelectorAll(".pfm-clickable-calculator")];assert.equal(cards.length,6);assert.equal(d.querySelectorAll(".pfm-tool-expanded").length,0);
 cards[1].click();assert.equal(cards[1].getAttribute("aria-expanded"),"true");assert(cards[1].querySelector(".card[id^=calc-]:not([hidden])"));
 cards[0].click();assert.equal(d.querySelectorAll(".pfm-tool-expanded").length,1);assert.equal(cards[1].getAttribute("aria-expanded"),"false");assert.equal(cards[0].getAttribute("aria-expanded"),"true");cards[0].click();assert.equal(d.querySelectorAll(".pfm-tool-expanded").length,0);
});
console.log("PASS: Terra orbit, reduced motion, market selection, deal deck, countdown controls and calculator expansion");
