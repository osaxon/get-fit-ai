import {
    integer,
    text,
    boolean,
    pgTable,
    varchar,
    real,
    pgEnum,
} from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
    id: integer("id").primaryKey(),
    text: text("text").notNull(),
    done: boolean("done").default(false).notNull(),
});

export const fitnessLevel = pgEnum("fitness_level", [
    "beginner",
    "intermediate",
    "advanced",
]);

export const user = pgTable("user", {
    user_id: integer("id").primaryKey(),
    name: varchar({ length: 256 }).notNull(),
    email: varchar({ length: 256 }).notNull().unique(),
    weight: real(),
    height: real(),
    fitness_level: fitnessLevel(),
});
