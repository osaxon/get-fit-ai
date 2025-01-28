import { varchar, real, pgEnum, serial } from "drizzle-orm/pg-core";
import { timestamps } from "../common";
import { pgTable } from "../table";

export const fitnessLevel = pgEnum("fitness_level", [
    "beginner",
    "intermediate",
    "advanced",
]);

export const user = pgTable("user", {
    id: serial("id").primaryKey(),
    name: varchar({ length: 256 }).notNull(),
    email: varchar({ length: 256 }).notNull().unique(),
    weight: real(),
    height: real(),
    fitnessLevel: fitnessLevel(),
    ...timestamps,
});
