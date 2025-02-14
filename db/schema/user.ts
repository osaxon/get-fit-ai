import {
    real,
    pgEnum,
    serial,
    index,
    uniqueIndex,
    varchar,
    boolean,
} from "drizzle-orm/pg-core";
import { timestamps } from "../common";
import { pgTable } from "../table";
import { InferSelectModel, relations } from "drizzle-orm";
import { trainingPlans } from "./training-plan";
import { createSelectSchema, createUpdateSchema } from "drizzle-zod";
import { z } from "zod";

export const fitnessLevel = pgEnum("fitness_level", [
    "beginner",
    "intermediate",
    "advanced",
]);

export const users = pgTable(
    "user",
    {
        id: serial("id").primaryKey().unique(),
        authIdentifier: varchar("auth_identifier", { length: 256 }),
        name: varchar({ length: 256 }).notNull(),
        email: varchar({ length: 256 }).notNull().unique(),
        weight: real(),
        height: real(),
        fitnessLevel: fitnessLevel("fitness_level"),
        isActive: boolean("is_active").default(false),
        ...timestamps,
    },
    (table) => [
        index("name_idx").on(table.name),
        uniqueIndex("email_idx").on(table.email),
        index("auth_idx").on(table.authIdentifier),
    ]
);

export type UserReqModel = InferSelectModel<typeof users>;

// relations
export const usersRelations = relations(users, ({ many }) => ({
    training_plans: many(trainingPlans),
}));

export const userSelectSchema = createSelectSchema(users);
export const userUpdateSchema = createUpdateSchema(users, {
    height: z.coerce.number(),
    weight: z.coerce.number(),
    id: z.number(), // TODO fix these
});

export type UserUpdateModel = z.infer<typeof userUpdateSchema>;
export type UserSelectModel = z.infer<typeof userSelectSchema>;
