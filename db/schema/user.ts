import {
    real,
    pgEnum,
    serial,
    index,
    uniqueIndex,
    varchar,
} from "drizzle-orm/pg-core";
import { timestamps } from "../common";
import { pgTable } from "../table";
import { relations } from "drizzle-orm";
import { trainingPlans } from "./training-plan";

export const fitnessLevel = pgEnum("fitness_level", [
    "beginner",
    "intermediate",
    "advanced",
]);

export const users = pgTable(
    "user",
    {
        id: serial("id").primaryKey().unique(),
        authIdentifier: varchar({ length: 256 }),
        name: varchar({ length: 256 }).notNull(),
        email: varchar({ length: 256 }).notNull().unique(),
        weight: real(),
        height: real(),
        fitnessLevel: fitnessLevel("fitness_level"),
        ...timestamps,
    },
    (table) => [
        index("name_idx").on(table.name),
        uniqueIndex("email_idx").on(table.email),
        index("auth_idx").on(table.authIdentifier),
    ]
);

// relations
export const usersRelations = relations(users, ({ many }) => ({
    trainingPlans: many(trainingPlans),
}));
