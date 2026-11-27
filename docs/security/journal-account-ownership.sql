-- Reference SQL for the already-applied phase1_enforce_journal_account_ownership migration.
-- Requires existing journal tables and policies. No data changes.
alter policy trades_insert on public.trades with check ((select auth.uid()) = user_id and exists (select 1 from public.trader_accounts a where a.id = trades.account_id and a.user_id = (select auth.uid())));
alter policy trades_update on public.trades with check ((select auth.uid()) = user_id and exists (select 1 from public.trader_accounts a where a.id = trades.account_id and a.user_id = (select auth.uid())));
alter policy payouts_insert on public.payouts with check ((select auth.uid()) = user_id and exists (select 1 from public.trader_accounts a where a.id = payouts.account_id and a.user_id = (select auth.uid())));
alter policy payouts_update on public.payouts with check ((select auth.uid()) = user_id and exists (select 1 from public.trader_accounts a where a.id = payouts.account_id and a.user_id = (select auth.uid())));
