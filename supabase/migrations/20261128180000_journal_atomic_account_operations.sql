create or replace function public.journal_remove_account(p_account uuid,p_mode text,p_destination uuid default null)
returns jsonb language plpgsql security invoker set search_path = '' as $$
declare u uuid := auth.uid(); a jsonb; ts jsonb; ps jsonb;
begin
 if u is null or p_mode not in ('move','delete') or p_mode is null then raise exception 'Invalid request'; end if;
 perform 1 from public.trader_accounts where user_id=u and (id=p_account or (p_mode='move' and id=p_destination)) order by id for update;
 select to_jsonb(x) into a from public.trader_accounts x where x.id=p_account and x.user_id=u;
 if a is null then raise exception 'Account not found'; end if;
 if p_mode='move' and (p_destination is null or p_destination=p_account or not exists(select 1 from public.trader_accounts where id=p_destination and user_id=u)) then raise exception 'Choose another account you own'; end if;
 perform 1 from public.trades where account_id=p_account and user_id=u for update;
 perform 1 from public.payouts where account_id=p_account and user_id=u for update;
 select coalesce(jsonb_agg(to_jsonb(x)),'[]'::jsonb) into ts from public.trades x where x.account_id=p_account and x.user_id=u;
 select coalesce(jsonb_agg(to_jsonb(x)),'[]'::jsonb) into ps from public.payouts x where x.account_id=p_account and x.user_id=u;
 if p_mode='move' then
  update public.trades set account_id=p_destination where account_id=p_account and user_id=u;
  update public.payouts set account_id=p_destination where account_id=p_account and user_id=u;
 end if;
 delete from public.trader_accounts where id=p_account and user_id=u;
 return jsonb_build_object('account',a,'trades',ts,'payouts',ps,'mode',p_mode,'destination',p_destination);
end $$;
revoke all on function public.journal_remove_account(uuid,text,uuid) from public,anon;
grant execute on function public.journal_remove_account(uuid,text,uuid) to authenticated;
create or replace function public.journal_restore_account(p_snapshot jsonb)
returns uuid language plpgsql security invoker set search_path = '' as $$
declare u uuid:=auth.uid(); a public.trader_accounts; t public.trades; p public.payouts; dest uuid; mode text; affected int;
begin
 if u is null then raise exception 'Sign in required'; end if;
 a:=jsonb_populate_record(null::public.trader_accounts,p_snapshot->'account');
 mode:=p_snapshot->>'mode'; dest:=(p_snapshot->>'destination')::uuid;
 if a.user_id is distinct from u or a.id is null or mode is null or mode not in ('move','delete') then raise exception 'Invalid restore'; end if;
 insert into public.trader_accounts select (a).*;
 for t in select * from jsonb_populate_recordset(null::public.trades,coalesce(p_snapshot->'trades','[]'::jsonb)) loop
  if t.user_id is distinct from u or t.account_id is distinct from a.id then raise exception 'Invalid trade snapshot'; end if;
  if mode='move' then
   update public.trades set account_id=a.id where id=t.id and user_id=u and account_id=dest and to_jsonb(trades)=to_jsonb(t)||jsonb_build_object('account_id',dest);
   get diagnostics affected=row_count; if affected<>1 then raise exception 'Trade changed after move; restore canceled'; end if;
  else insert into public.trades select (t).*; end if;
 end loop;
 for p in select * from jsonb_populate_recordset(null::public.payouts,coalesce(p_snapshot->'payouts','[]'::jsonb)) loop
  if p.user_id is distinct from u or p.account_id is distinct from a.id then raise exception 'Invalid payout snapshot'; end if;
  if mode='move' then
   update public.payouts set account_id=a.id where id=p.id and user_id=u and account_id=dest and to_jsonb(payouts)=to_jsonb(p)||jsonb_build_object('account_id',dest);
   get diagnostics affected=row_count; if affected<>1 then raise exception 'Payout changed after move; restore canceled'; end if;
  else insert into public.payouts select (p).*; end if;
 end loop;
 return a.id;
end $$;
revoke all on function public.journal_restore_account(jsonb) from public,anon;
grant execute on function public.journal_restore_account(jsonb) to authenticated;