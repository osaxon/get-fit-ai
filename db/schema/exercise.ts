import * as t from "drizzle-orm/pg-core";
import { timestamps } from "../common";
import { pgTable } from "../table";

export const exerciseLevel = t.pgEnum("exercise_level", [
    "beginner",
    "intermediate",
    "advanced",
]);

export const pushPull = t.pgEnum("push_pull", ["push", "pull", "none"]);

export const exerciseType = t.pgEnum("exercise_type", [
    "strength",
    "cardio",
    "balance",
    "stretching",
]);

export const measurementType = t.pgEnum("measurement_type", [
    "time",
    "reps",
    "distance",
    "weight",
]);

// Master exercise list which can be used accross multiple training plans
export const exercises = pgTable("exercises", {
    id: t.serial("id").primaryKey(),
    name: t.varchar(),
    description: t.text(),
    type: exerciseType(),
    measurement: measurementType(),
    level: exerciseLevel(),
    pushPull: pushPull("push_pull").default("none"),
    ...timestamps,
});
