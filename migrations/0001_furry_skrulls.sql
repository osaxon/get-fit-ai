CREATE TYPE "public"."fitness_level" AS ENUM('beginner', 'intermediate', 'advanced');--> statement-breakpoint
CREATE TABLE "user" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"email" varchar(256) NOT NULL,
	"weight" real,
	"height" real,
	"fitness_level" "fitness_level",
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
