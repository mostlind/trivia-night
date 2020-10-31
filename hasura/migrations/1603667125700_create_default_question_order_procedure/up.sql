create or replace function create_default_question_order()
  returns trigger
as
$$
begin
    select coalesce(max(question_order), 0) + 1 
        into new.question_order
        from question 
        where game_id = new.game_id;
  return new;
end;
$$
language plpgsql;
