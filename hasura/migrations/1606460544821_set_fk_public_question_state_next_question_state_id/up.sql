alter table "public"."question_state"
           add constraint "question_state_next_question_state_id_fkey"
           foreign key ("next_question_state_id")
           references "public"."question_state"
           ("id") on update set null on delete set null;
