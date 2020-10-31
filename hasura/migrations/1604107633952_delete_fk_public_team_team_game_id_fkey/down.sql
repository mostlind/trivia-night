alter table "public"."team" add foreign key ("game_id") references "public"."game"("id") on update cascade on delete cascade;
