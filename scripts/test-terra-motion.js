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
 const coins=[...d.querySelectorAll(".terra-medallion")];assert(coins.length>=6,"firm medallions missing");assert(coins.every(c=>c.querySelector(".terra-coin-front")&&c.querySelector(".terra-coin-back")&&c.querySelector(".terra-coin-rim")),"dimensional coin faces missing");assert.equal(new Set(coins.map(c=>c.getAttribute("href"))).size,coins.length);assert(coins.every(c=>c.getAttribute("href").startsWith("/firm/")));
 const pause=d.querySelector("#terra-motion-toggle");pause.click();assert.equal(pause.getAttribute("aria-pressed"),"true");assert(d.querySelector("#terra-orbit-scene").classList.contains("terra-orbit-paused"));pause.click();assert.equal(pause.getAttribute("aria-pressed"),"false");
 const market=d.querySelector("[data-terra-market=futures]");market.click();assert.equal(d.querySelector("#terra-total").textContent,market.dataset.count);assert.equal(d.querySelector("#terra-market-link").getAttribute("href"),"/futures");assert(d.querySelector("#home-tabs [data-m=futures]").classList.contains("on"));assert.equal(market.getAttribute("aria-pressed"),"true");
 d.querySelector("#terra-reset").click();assert.equal(d.querySelector("#terra-market-link").getAttribute("href"),"/firms");assert(d.querySelector("#home-tabs [data-m=all]").classList.contains("on"));
});
run("/",(d)=>assert(d.querySelector("#terra-motion-toggle").disabled),true);
run("/firms",(d)=>{const markets=[...d.querySelectorAll(".market-landing-card")];assert.equal(markets.length,6);assert(markets.every(m=>m.querySelector(".terra-market-object svg")),"market artwork missing");});
run("/deals",(d)=>{
 const items=[...d.querySelectorAll(".terra-spot-ticket")];
 if(items.length>1){const pos=d.querySelector("#terra-ticket-position");assert.equal(pos.textContent,"1 / "+items.length);d.querySelector("#terra-ticket-next").click();assert.equal(pos.textContent,"2 / "+items.length);assert.equal(items[1].dataset.slot,"0");d.querySelector("#terra-ticket-prev").click();assert.equal(items[0].dataset.slot,"0");}
 const pause=d.querySelector("#terra-clock-toggle");assert(pause);pause.click();assert.equal(pause.getAttribute("aria-pressed"),"true");pause.click();assert.equal(pause.getAttribute("aria-pressed"),"false");
});
run("/tools",(d)=>{
 const cards=[...d.querySelectorAll(".pfm-clickable-calculator")];assert.equal(cards.length,6);assert.equal(d.querySelectorAll(".pfm-tool-expanded").length,0);
 cards[1].click();assert.equal(cards[1].getAttribute("aria-expanded"),"true");assert(cards[1].querySelector(".card[id^=calc-]:not([hidden])"));
 cards[0].click();assert.equal(d.querySelectorAll(".pfm-tool-expanded").length,1);assert.equal(cards[1].getAttribute("aria-expanded"),"false");assert.equal(cards[0].getAttribute("aria-expanded"),"true");cards[0].click();assert.equal(d.querySelectorAll(".pfm-tool-expanded").length,0);
});
console.log("PASS: Terra orbit, reduced motion, market selection, deal deck, countdown controls and calculator expansion");
