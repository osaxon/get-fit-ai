CREATE TYPE "public"."exercise_status" AS ENUM('completed', 'skipped');--> statement-breakpoint
CREATE TYPE "public"."plan_status" AS ENUM('active', 'completed', 'inactive');--> statement-breakpoint
CREATE TYPE "public"."session_status" AS ENUM('pending', 'completed', 'skipped');--> statement-breakpoint
CREATE TYPE "public"."fitness_level" AS ENUM('beginner', 'intermediate', 'advanced');--> statement-breakpoint
CREATE TABLE "get-fit-ai_exercises" (
	"id" serial PRIMARY KEY NOT NULL,
	"session_id" serial NOT NULL,
	"name" varchar,
	"description" text,
	"sets" integer,
	"reps" integer,
	"rpe" integer,
	"status" "exercise_status",
	"updated_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp (3) with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "get-fit-ai_progress" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" serial NOT NULL,
	"exercise_id" serial NOT NULL,
	"completedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE "get-fit-ai_training_plan" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" serial NOT NULL,
	"startDate" date,
	"endDate" date,
	"status" "plan_status",
	"updated_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp (3) with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "get-fit-ai_training_session" (
	"id" serial PRIMARY KEY NOT NULL,
	"plan_id" serial NOT NULL,
	"date" date,
	"weekNumber" integer,
	"dayNumber" integer,
	"status" "session_status",
	"updated_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp (3) with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "get-fit-ai_user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"email" varchar(256) NOT NULL,
	"weight" real,
	"height" real,
	"fitnessLevel" "fitness_level",
	"updated_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp (3) with time zone DEFAULT now(),
	CONSTRAINT "get-fit-ai_user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "get-fit-ai_exercises" ADD CONSTRAINT "get-fit-ai_exercises_session_id_get-fit-ai_training_session_id_fk" FOREIGN KEY ("session_id") REFERENCES "public"."get-fit-ai_training_session"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "get-fit-ai_progress" ADD CONSTRAINT "get-fit-ai_progress_user_id_get-fit-ai_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."get-fit-ai_user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "get-fit-ai_progress" ADD CONSTRAINT "get-fit-ai_progress_exercise_id_get-fit-ai_exercises_id_fk" FOREIGN KEY ("exercise_id") REFERENCES "public"."get-fit-ai_exercises"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "get-fit-ai_training_plan" ADD CONSTRAINT "get-fit-ai_training_plan_user_id_get-fit-ai_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."get-fit-ai_user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "get-fit-ai_training_session" ADD CONSTRAINT "get-fit-ai_training_session_plan_id_get-fit-ai_training_plan_id_fk" FOREIGN KEY ("plan_id") REFERENCES "public"."get-fit-ai_training_plan"("id") ON DELETE no action ON UPDATE no action;