CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."game"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "host_id" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("host_id") REFERENCES "public"."host"("id") ON UPDATE cascade ON DELETE cascade);
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_game_updated_at"
BEFORE UPDATE ON "public"."game"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_game_updated_at" ON "public"."game" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
