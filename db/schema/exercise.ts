import * as t from "drizzle-orm/pg-core";
import { timestamps } from "../common";
import { trainingSession } from "./training-session";
import { pgTable } from "../table";

export const exerciseStatus = t.pgEnum("exercise_status", [
    "completed",
    "skipped",
]);

export const exercises = pgTable("exercises", {
    id: t.serial("id").primaryKey(),
    sessionId: t.serial("session_id").references(() => trainingSession.id),
    name: t.varchar(),
    description: t.text(),
    sets: t.integer(),
    reps: t.integer(),
    rpe: t.integer(),
    status: exerciseStatus(),
    ...timestamps,
});
