/* Rendered browser QA: exercise real routes and capture actual screenshots. */
const http=require("node:http"),fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const {chromium}=require("playwright");
const root=path.resolve(__dirname,"../dist"),out=path.resolve(__dirname,"../visual-qa");
fs.mkdirSync(out,{recursive:true});
const types={".html":"text/html",".js":"text/javascript",".css":"text/css",".json":"application/json",".png":"image/png",".webp":"image/webp",".svg":"image/svg+xml"};
const server=http.createServer((req,res)=>{
 let pathname=new URL(req.url,"http://localhost").pathname;
 let f=path.resolve(root,"."+pathname);
 if(f!==root&&!f.startsWith(root+path.sep)){res.writeHead(403);return res.end();}
 if(pathname==="/")f=path.join(root,"index.html");
 else if(!fs.existsSync(f)&&fs.existsSync(f+".html"))f+=".html";
 if(!fs.existsSync(f)||!fs.statSync(f).isFile()){res.writeHead(404);return res.end();}
 res.writeHead(200,{"Content-Type":types[path.extname(f)]||"application/octet-stream"});fs.createReadStream(f).pipe(res);
});
(async()=>{
 await new Promise(resolve=>server.listen(0,"127.0.0.1",resolve));
 const base="http://127.0.0.1:"+server.address().port;
 const browser=await chromium.launch({headless:true});
 try{
 for(const profile of [{name:"desktop",width:1440,height:900},{name:"mobile",width:390,height:844,isMobile:true,hasTouch:true}]){
  const context=await browser.newContext({viewport:{width:profile.width,height:profile.height},isMobile:!!profile.isMobile,hasTouch:!!profile.hasTouch,deviceScaleFactor:1});
  // Authentication is not part of visual QA. Keep external login requests out of this test.
  await context.route("**/*.supabase.co/**",route=>route.abort());
  const page=await context.newPage();
  const errors=[];page.on("pageerror",e=>errors.push(e.message));
  for(const route of ["/","/firms","/firms?view=directory&q=tradeify","/firms?view=plans","/firm/tradeify","/deals","/compare","/tracker","/tools","/journal","/guides","/rules","/statistics","/faq","/glossary","/calendar","/login","/account","/methodology"]){
   await page.goto(base+route,{waitUntil:"domcontentloaded"});
   await page.locator("#app h1").first().waitFor({timeout:15000});
   await page.waitForTimeout(300);
   assert(await page.locator("#app h1").first().isVisible(),profile.name+" "+route+" heading not visible");
   const geometry=await page.evaluate(()=>({width:innerWidth,document:document.documentElement.scrollWidth,body:document.body.scrollWidth}));
   assert(geometry.document<=geometry.width+3&&geometry.body<=geometry.width+3,profile.name+" "+route+" horizontal overflow "+JSON.stringify(geometry));
   await page.screenshot({path:path.join(out,profile.name+"-"+(route==="/"?"home":route.slice(1).replace(/[^a-z0-9-]/gi,"-"))+".png"),timeout:15000});
   if(route==="/"){
    assert(await page.locator(".hero-bg img").isVisible());assert(await page.locator("#tc-original-marquee .mq").count()===2);
    const pause=page.locator("#tc-marquee-pause");await pause.click();assert.equal(await pause.getAttribute("aria-pressed"),"true");await pause.click();assert.equal(await pause.getAttribute("aria-pressed"),"false");
    const market=page.locator("#home-tabs [data-m=futures]");await market.click();assert((await market.getAttribute("class")).includes("on"));await page.locator("#home-tabs [data-m=all]").click();
   }
   if(route==="/compare"){
    const risk=page.locator("[data-tc-field=risk]");await risk.click();
    const select=page.locator("#cmp0");const options=await select.locator("option").evaluateAll(nodes=>nodes.map(o=>o.value).filter(Boolean));
    const occupied=await page.locator(".cmp").evaluateAll(nodes=>nodes.map(n=>n.value));
    const candidate=options.find(v=>!occupied.includes(v));assert(candidate);await select.selectOption(candidate);
    assert.equal(await risk.getAttribute("aria-pressed"),"true");assert.equal(await page.evaluate(()=>document.activeElement.id),"cmp0");
   }
   if(route==="/tracker"){const bars=page.locator("[data-payout-row]");assert(await bars.count()>1);await bars.nth(1).click();assert.equal(await bars.nth(1).getAttribute("aria-pressed"),"true");}
   if(route==="/firms?view=plans"){const tiles=page.locator(".tc-account-tile");assert(await tiles.count()>0);await page.locator("#pc-q").fill("tradeify");assert(await tiles.count()>0);}
   if(route==="/rules"){await page.locator("#tc-rules-q").fill("tradeify");assert(await page.locator(".tc-rules-table tbody tr:not([hidden])").count()>0);}
   if(route==="/deals"&&await page.locator("#terra-ticket-next").count()&&await page.locator(".terra-spot-ticket").count()>1){
    await page.locator("#terra-ticket-next").click();assert.equal(await page.locator(".terra-spot-ticket[data-slot='0']").getAttribute("data-spot-index"),"1");
   }
   if(route==="/tools"){const tools=page.locator(".pfm-clickable-calculator");assert.equal(await tools.count(),6);await tools.first().click();assert.equal(await tools.first().getAttribute("aria-expanded"),"true");}
  }
  assert.deepEqual(errors,[],profile.name+" uncaught browser exceptions");
  await context.close();
 }
 const reduced=await browser.newPage({viewport:{width:1280,height:800},reducedMotion:"reduce"});
 await reduced.goto(base,{waitUntil:"domcontentloaded"});await reduced.locator("#tc-marquee-pause").waitFor();assert(await reduced.locator("#tc-marquee-pause").isDisabled());assert.equal(await reduced.locator("#tc-original-marquee").getAttribute("data-paused"),"true");
 await reduced.close();
 console.log("PASS: Chromium desktop, mobile, route overflow, orbit motion, deals, calculators and reduced motion");
 }finally{await browser.close();server.close();}
})().catch(e=>{console.error(e);server.close();process.exitCode=1;});
