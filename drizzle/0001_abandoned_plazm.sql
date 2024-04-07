CREATE TABLE IF NOT EXISTS "ranker_templates" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"options" text[] NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "image_url" SET DEFAULT '/img/default_avatar.png';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "image_url" SET NOT NULL;