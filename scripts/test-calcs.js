/* Numeric tests for the /tools calculators. Needs Playwright available (e.g. NODE_PATH=$(npm root -g)).
   Run: node scripts/build.js && node scripts/test-calcs.js */
const http=require('http'),fs=require('fs'),path=require('path');
const {chromium}=require('playwright');
const DIST=path.join(__dirname,'..','dist');
const srv=http.createServer((q,r)=>{let u=q.url.split('?')[0];let f=path.join(DIST,u==='/'?'index.html':u);
 if(!fs.existsSync(f)||fs.statSync(f).isDirectory())f=fs.existsSync(f+'.html')?f+'.html':path.join(DIST,'404.html');
 const ct=f.endsWith('.js')?'application/javascript':f.endsWith('.html')?'text/html; charset=utf-8':'text/plain';
 r.writeHead(200,{'Content-Type':ct});r.end(fs.readFileSync(f));});
let pass=0,fail=0;
function ok(name,cond,got){ if(cond){pass++;} else {fail++;console.log('FAIL',name,'->',got);} }
(async()=>{await new Promise(r=>srv.listen(0,r));const base='http://localhost:'+srv.address().port;
 const b=await chromium.launch();const ctx=await b.newContext();
 async function open(randomValue){const p=await ctx.newPage();if(randomValue!==undefined)await p.addInitScript(v=>{Math.random=()=>v},randomValue);
  await p.goto(base+'/tools',{waitUntil:'domcontentloaded'});await p.waitForSelector('[data-calculator]');await p.waitForTimeout(400);return p;}
 const tile=async(p,id)=>{await p.click('[data-calculator="'+id+'"]');await p.waitForTimeout(250);};
 const set=async(p,id,v)=>{await p.fill('#'+id,String(v));};
 const txt=(p,id)=>p.textContent('#'+id);
 let p=await open();
 /* Consistency */
 await tile(p,'calc-consistency');
 let t=await txt(p,'consOut');ok('cons default pass',/37\.50%/.test(t)&&/PASS/.test(t),t);
 await set(p,'consBig',1700);t=await txt(p,'consOut');ok('cons over limit',/42\.50%/.test(t)&&/OVER LIMIT/.test(t)&&/\$250\.00/.test(t),t);
 await set(p,'consTotal',0);t=await txt(p,'consOut');ok('cons zero total rejected',/Enter total profit above/.test(t),t);
 await set(p,'consTotal',-500);t=await txt(p,'consOut');ok('cons negative total rejected',/Enter total profit above/.test(t),t);
 await set(p,'consTotal',4000);await set(p,'consBig',5000);t=await txt(p,'consOut');ok('cons big>total rejected',/Enter total profit above/.test(t),t);
 await set(p,'consBig',1500);await set(p,'consRule',101);t=await txt(p,'consOut');ok('cons rule>100 rejected',/Enter total profit above/.test(t),t);
 await set(p,'consRule',40);await set(p,'consBig',0);t=await txt(p,'consOut');ok('cons zero big day passes',/0\.00%/.test(t)&&/PASS/.test(t),t);
 /* Tick */
 await tile(p,'calc-tick');
 await set(p,'tickDollars',100);await set(p,'tickContracts',1);t=await txt(p,'tickOut');ok('tick NQ $100 1c = 20',/20\.00 theoretical ticks/.test(t)&&/Whole tradable ticks: 20/.test(t),t);
 await set(p,'tickContracts',2);t=await txt(p,'tickOut');ok('tick 2 contracts = 10',/10\.00 theoretical ticks/.test(t),t);
 await set(p,'tickDollars',12);await set(p,'tickContracts',1);t=await txt(p,'tickOut');ok('tick $12 = 2.40, whole 2',/2\.40 theoretical/.test(t)&&/Whole tradable ticks: 2\b/.test(t),t);
 await set(p,'tickContracts',0);t=await txt(p,'tickOut');ok('tick 0 contracts rejected',/whole number of contracts/.test(t),t);
 await set(p,'tickContracts',1.5);t=await txt(p,'tickOut');ok('tick fractional contracts rejected',/whole number of contracts/.test(t),t);
 await set(p,'tickContracts',1);await set(p,'tickDollars',-5);t=await txt(p,'tickOut');ok('tick negative dollars rejected',/non-negative/.test(t),t);
 /* Forex */
 await tile(p,'calc-fx');
 await set(p,'fxLots',2);await set(p,'fxPips',10);t=await txt(p,'fxOut');ok('fx EURUSD 2 lots 10 pips = $200',/\$200\.00/.test(t),t);
 await p.selectOption('#fxPair','jpy');await set(p,'fxRate',150);await set(p,'fxLots',1);await set(p,'fxPips',10);t=await txt(p,'fxOut');ok('fx JPY @150: $6.67/pip, $66.67',/\$6\.67/.test(t)&&/\$66\.67/.test(t),t);
 await set(p,'fxRate',0);t=await txt(p,'fxOut');ok('fx JPY rate 0 rejected',/positive/.test(t),t);
 await set(p,'fxRate',150);await set(p,'fxLots',0);t=await txt(p,'fxOut');ok('fx zero lots rejected',/positive lot size/.test(t),t);
 /* Savings */
 await tile(p,'calc-savings');
 const f=await p.evaluate(()=>{const x=firm(document.getElementById('savFirm').value),c=savingsCodes(x).find(c=>c.code===document.getElementById('savCode').value),o=firmPlanList(x).find(p=>p.id===document.getElementById('savOffer').value);return{off:c.off,code:c.code,currency:o.currency}});
 await set(p,'savPrice',100);t=await txt(p,'savOut');const exp=(100*(1-f.off/100)).toFixed(2);ok('savings selected offer math',t.includes(exp)&&t.includes(f.code)&&t.includes('If code'),t+' exp '+exp);
 await set(p,'savPrice',-1);t=await txt(p,'savOut');ok('savings negative rejected',/non-negative/.test(t),t);
 const listed=await p.$$eval('#savFirm option',o=>o.length);const wanted=await p.evaluate(()=>FIRMS.filter(f=>savingsCodes(f).length).length);ok('savings lists non-expired percentage-code firms',listed===wanted,listed+' vs '+wanted);
 const exact=await p.evaluate(()=>{const f=firm(document.getElementById('savFirm').value),record=firmPlanList(f).find(p=>p.id===document.getElementById('savOffer').value);return !!record&&catalogProgram(record)===document.getElementById('savProgram').value&&catalogSizeKey(record)===document.getElementById('savSize').value});
 ok('savings record belongs to selected firm, program and size',exact,exact);
 /* Cost to get funded */
 await tile(p,'calc-cost');
 await set(p,'cstFee',150);await set(p,'cstPass',20);await set(p,'cstAct',0);await set(p,'cstPay',1500);await set(p,'cstSurv',40);t=await txt(p,'cstOut');
 ok('cost default',/5\.0/.test(t)&&/\$750\.00/.test(t)&&/\$600\.00/.test(t)&&/-\$150\.00/.test(t),t);
 await set(p,'cstPass',100);await set(p,'cstFee',100);await set(p,'cstAct',50);t=await txt(p,'cstOut');ok('cost 100% pass',/1\.0/.test(t)&&/\$150\.00/.test(t),t);
 await set(p,'cstPass',0);t=await txt(p,'cstOut');ok('cost pass 0 rejected',/pass rate above 0%/.test(t),t);
 await set(p,'cstPass',20);await set(p,'cstSurv',101);t=await txt(p,'cstOut');ok('cost survival>100 rejected',/payout rate from 0%/.test(t),t);
 await p.close();
 /* Simulator: Math.random pinned so outcomes are exact */
 p=await open(0);await tile(p,'calc-sim');t=await txt(p,'simOut');ok('sim always-win passes 100%',/Pass: 100\.0%/.test(t),t);await p.close();
 p=await open(0.999);await tile(p,'calc-sim');t=await txt(p,'simOut');ok('sim always-lose hits drawdown 100%',/Hit drawdown: 100\.0%/.test(t),t);
 await set(p,'simWin',0);t=await txt(p,'simOut');ok('sim win rate 0 rejected',/win rate between 0 and 100/.test(t),t);
 await set(p,'simWin',45);await set(p,'simTrades',1.5);t=await txt(p,'simOut');ok('sim fractional trades rejected',/whole number of trades/.test(t),t);
 await set(p,'simTrades',3000);t=await txt(p,'simOut');ok('sim 3000 trades rejected',/up to 2,000/.test(t),t);
 await p.close();
 p=await open(0);await tile(p,'calc-sim');await set(p,'simTrades',1);await set(p,'simTarget',50);t=await txt(p,'simOut');ok('sim runs out of trades',/Ran out of trades: 100\.0%/.test(t),t);await p.close();
 const cp=await ctx.newPage();await cp.goto(base+'/compare',{waitUntil:'domcontentloaded'});await cp.waitForSelector('#cmp0');
 await cp.selectOption('#cmp0','tradeify');await cp.selectOption('#cmp1','tradeify');
 await cp.selectOption('#cmpProgram0','Growth');await cp.selectOption('#cmpSize0','50000');
 await cp.selectOption('#cmpProgram1','Select 30%');await cp.selectOption('#cmpSize1','50000');
 const independent=await cp.evaluate(()=>({a:selectedPlan(firm('tradeify'),0).id,b:selectedPlan(firm('tradeify'),1).id,slots:document.querySelectorAll('.compare-selectors .cmp').length}));
 ok('same firm different programs remain independent',independent.a==='tradeify-growth-50000'&&independent.b==='tradeify-select-30-50000'&&independent.slots===2,independent);
 await cp.selectOption('#cmp0','leeloo-trading');await cp.selectOption('#cmpProgram0','Express');await cp.selectOption('#cmpPlatform0','Tradovate');
 const leeloo=await cp.evaluate(()=>selectedPlan(firm('leeloo-trading'),0).id);
 ok('platform-specific unknown-size offer stays exact',leeloo==='leeloo-trading-express-tradovate-pending',leeloo);
 await cp.close();
 await b.close();srv.close();console.log(pass+' passed, '+fail+' failed');process.exit(fail?1:0);
})();
