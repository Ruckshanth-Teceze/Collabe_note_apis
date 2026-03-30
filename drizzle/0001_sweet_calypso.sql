CREATE TYPE "public"."note_permission_role" AS ENUM('OWNER', 'EDITOR', 'VIEWER');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('OWNER', 'EDITOR', 'VIEWER');--> statement-breakpoint
CREATE TABLE "attachments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"note_id" uuid NOT NULL,
	"filename" varchar(500) NOT NULL,
	"mime_type" varchar(100) NOT NULL,
	"size" integer NOT NULL,
	"s3_key" text NOT NULL,
	"s3_bucket" text NOT NULL,
	"uploaded_by" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "note_versions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"note_id" uuid NOT NULL,
	"title" varchar(500) NOT NULL,
	"content" text,
	"version" integer NOT NULL,
	"created_by" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "notes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(500) DEFAULT 'Untitled' NOT NULL,
	"content" text,
	"owner_id" uuid NOT NULL,
	"current_version" integer DEFAULT 1 NOT NULL,
	"is_deleted" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "permissions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"note_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	"role" "note_permission_role" DEFAULT 'VIEWER' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "attachments" ADD CONSTRAINT "attachments_note_id_notes_id_fk" FOREIGN KEY ("note_id") REFERENCES "public"."notes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "attachments" ADD CONSTRAINT "attachments_uploaded_by_users_id_fk" FOREIGN KEY ("uploaded_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "note_versions" ADD CONSTRAINT "note_versions_note_id_notes_id_fk" FOREIGN KEY ("note_id") REFERENCES "public"."notes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "note_versions" ADD CONSTRAINT "note_versions_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notes" ADD CONSTRAINT "notes_owner_id_users_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "permissions" ADD CONSTRAINT "permissions_note_id_notes_id_fk" FOREIGN KEY ("note_id") REFERENCES "public"."notes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "permissions" ADD CONSTRAINT "permissions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "attachments_note_id_idx" ON "attachments" USING btree ("note_id");--> statement-breakpoint
CREATE INDEX "attachments_uploaded_by_idx" ON "attachments" USING btree ("uploaded_by");--> statement-breakpoint
CREATE INDEX "note_versions_note_id_idx" ON "note_versions" USING btree ("note_id");--> statement-breakpoint
CREATE INDEX "note_versions_version_idx" ON "note_versions" USING btree ("note_id","version");--> statement-breakpoint
CREATE INDEX "note_versions_created_at_idx" ON "note_versions" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "notes_owner_id_idx" ON "notes" USING btree ("owner_id");--> statement-breakpoint
CREATE INDEX "notes_updated_at_idx" ON "notes" USING btree ("updated_at");--> statement-breakpoint
CREATE INDEX "notes_is_deleted_idx" ON "notes" USING btree ("is_deleted");--> statement-breakpoint
CREATE UNIQUE INDEX "permissions_note_user_idx" ON "permissions" USING btree ("note_id","user_id");--> statement-breakpoint
CREATE INDEX "permissions_user_id_idx" ON "permissions" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "permissions_note_id_idx" ON "permissions" USING btree ("note_id");