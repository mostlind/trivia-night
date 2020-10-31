alter table "public"."team"
           add constraint "team_game_state_id_fkey"
           foreign key ("game_state_id")
           references "public"."game_state"
           ("id") on update cascade on delete cascade;
