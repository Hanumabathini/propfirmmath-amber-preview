# Terra Capital motion and UX contract
Material: existing catalog, dated offers, plan records, tracked payouts, private journal data. No synthetic prices, logos, returns or proof. Audience: new and experienced prop traders. Goal: make research and account decisions easier. Custom Earthy Minimal brand, calm editorial surfaces and brisk instrument controls.
Sources inspected: Hanumabathini/hallmark, skills/hallmark/SKILL.md and references craft, microinteractions, interaction-and-states, redesign, gates and scroll-choreography. Folio BookObject and HeroRing are engineering references, not copied assets or source. Cloudflare web-perf skill informs the performance constraints.
## Route contract
| Route | Job | Motion and composition |
|---|---|---|
| / | Discover and search | Spatial firm gallery, pointer drag with damped momentum, manual buttons, pause and static reduced-motion state. Direct search precedes the gallery. |
| /firms | Choose market | Custom market objects, editorial directory, market/account switches. |
| /firms?view=directory | Filter firms | Progressive disclosure, explicit comparison selections. |
| /firms?view=plans | Find account | Search and filters, saved-state feedback, paginated results; direct link to exact recorded plan. |
| /firm/:slug | Review terms | Layered branded mark, selection-driven plan-sheet reveal. |
| /compare | Compare account terms | Selected-plan dossiers, category/differences filters, same-currency same-billing proportional fee bars; no cross-currency winner. |
| /vs/:pair | Read two-firm comparison | Stable table; no cheaper mark on incomparable fees. |
| /deals | Find a promotion | Spatial swipeable ticket stack and genuine published-deadline clocks with pause. |
| /tracker | Inspect dated payout evidence | Beveled proportional bars; click to inspect captured figures; no fake live feed. |
| /tools | Calculate | One calculator opens at a time; controlled panel entry, feedback from computed results. |
| /journal | Manage own accounts | Private portfolio workspace, actual equity curve, trade-by-trade scrubber; no mock trades. |
| /statistics | Understand catalog | Proportional market coverage bars; counts overlap. |
| /rules | Find rules | Search by firm or rule, result count. Stable table. |
| /faq | Learn | Search and disclosure with short answer entrance. |
| /glossary | Find terminology | Alphabetic editorial index and search. |
| /guides, /best-for | Explore editorial | Asymmetric article index, meaningful links. |
| /guide/:slug, /methodology, /privacy, /terms | Read | Stable text; optional scroll-linked reading line where supported. |
| /calendar | Check events | Stable live widget; no ornamental animations. |
| /login, /account, /reset | Account access | Clear focus, readable form, restrained styling; auth unchanged. |
| /disclosure, /cookies, /delisted, /list-your-firm, 404 | Read / act | Keep content stable; no invented decoration. |
## Guardrails
- Motion must clarify an action or state. Prefer transform and opacity; avoid layout animation. One principal spatial scene per route; no general tilt on every tile.
- 120/220/420 ms timing tokens. Hover and focus pause ambient motion, visible pause control; off-screen and reduced-motion states stop ambient work. No motion necessary to access facts.
- Use native keyboard controls and visible focus, avoid implying figures are live when they are snapshots.
- Preserve firm data and plan sources; no comparisons across incompatible billing/currencies.
- Build and journal tests plus Chromium route checks. The full Hallmark rendered sloplint and independent design review are not yet certified. Legacy monolithic styles remain and need a dedicated consolidation pass.
