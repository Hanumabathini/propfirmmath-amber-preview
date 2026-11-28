# Journal phase 1 — Nov 28, 2026

- Corrected Signature 5K/10K/20K using https://help.myfundedfutures.com/en/articles/18543937-signature-plans-a-comprehensive-guide; no trailing drawdown, no daily loss/consistency/minimum day requirements. Platform/checkout mapping remains incomplete.
- Journal uses unique plan-size record only, never firm-level inherited values, and excludes funded/personal stages from evaluation monitoring. Static loss uses recorded equity trough; other drawdown shown only as manual closed-trade estimate. Multi-phase targets show phase one only.
- Trade retrieval paginated to avoid silently omitting older records; offset pagination is not a transactional snapshot under concurrent edits.
- Supabase policies inspected: account ownership and related trade/payout account ownership checks present for authenticated users. No production data changed during inspection.
- Remaining: actual authenticated browser CRUD test, atomic account delete/undo with payouts, phase-specific funded rules, exact per-plan platform/region validation, and production deployment verification. No claim of official breach or payout eligibility.
- Membership and payment setup unchanged.