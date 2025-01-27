import { integer, pgTable, varchar, real, pgEnum } from "drizzle-orm/pg-core";

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
