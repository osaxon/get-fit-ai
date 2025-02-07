import { varchar, real, pgEnum, serial } from "drizzle-orm/pg-core";
import { timestamps } from "../common";
import { pgTable } from "../table";
import { relations } from "drizzle-orm";
import { trainingPlans } from "./training-plan";

export const fitnessLevel = pgEnum("fitness_level", [
    "beginner",
    "intermediate",
    "advanced",
]);

export const users = pgTable("user", {
    id: serial("id").primaryKey(),
    name: varchar({ length: 256 }).notNull(),
    email: varchar({ length: 256 }).notNull().unique(),
    weight: real(),
    height: real(),
    fitnessLevel: fitnessLevel("fitness_level"),
    ...timestamps,
});

// relations
export const usersRelations = relations(users, ({ many }) => ({
    trainingPlans: many(trainingPlans),
}));
