# Membership activation checklist — Obsidian Amber

Basic (free): 1 saved account. Pro ($9.99 USD/month): 10. Elite ($19.99 USD/month): 25. Until payment setup and backend tests are finished, all existing accounts stay accessible and new purchases are disabled.

## Required before activation
- Create recurring Stripe test-mode prices, then live prices after acceptance; store actual price IDs server-side only. Never accept amount or entitlement from client input.
- Authenticated server creates Checkout Session, maps fixed server-side price IDs and verified Supabase user ID. Use hosted customer portal for upgrades/downgrades/cancellation.
- Verify Stripe webhook signatures from raw request body, deduplicate event IDs, reconcile subscription state against provider API, and store server-managed entitlement with validity period. No client writes to entitlement records. Failed payment, cancellation, and refund behavior must be tested.
- Enforce account creation on database side, serialized by user, with 1/10/25 limits, ownership RLS, and service-role isolation. Test concurrent inserts, direct REST calls, upgrades and downgrades. Do not delete existing accounts on downgrade; block new accounts when above limit. Define restore/undo behavior before rollout.
- No live charges until checkout, billing portal, and webhook tests pass. No secrets in GitHub or static site. Configure production origin and redirect allowlist.
- Confirm owner business/processor eligibility, legal terms, refund policy, and tax setup before live payment activation.

Current status: pricing display only; no subscription entitlement enforcement or real checkout. Platform field exists in Supabase and is used by the journal.