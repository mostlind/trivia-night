CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."team"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "game_id" uuid NOT NULL, "name" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("game_id") REFERENCES "public"."game"("id") ON UPDATE cascade ON DELETE cascade); COMMENT ON TABLE "public"."team" IS E'A team for a game';
