DROP TRIGGER IF EXISTS "set_public_host_updated_at" ON "public"."host";
ALTER TABLE "public"."host" DROP COLUMN "updated_at";
