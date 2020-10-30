CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."question_state"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "game_state_id" uuid NOT NULL, "state" text NOT NULL, "question_id" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("state") REFERENCES "public"."question_state_enum"("value") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("question_id") REFERENCES "public"."question"("id") ON UPDATE cascade ON DELETE cascade);
