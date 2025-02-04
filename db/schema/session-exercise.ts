import * as t from "drizzle-orm/pg-core";
import { pgTable } from "../table";
import { trainingSessions } from "./training-session";
import { exercises } from "./exercise";
import { timestamps } from "../common";
import { relations } from "drizzle-orm";

export const exerciseStatus = t.pgEnum("exercise_status", [
    "completed",
    "skipped",
]);

export const sessionExercises = pgTable("session_exercises", {
    id: t.serial("id").primaryKey(),
    sessionId: t
        .serial("session_id")
        .references(() => trainingSessions.id, { onDelete: "cascade" }),
    exerciseId: t
        .serial("exercise_id")
        .references(() => exercises.id, { onDelete: "cascade" }),
    sets: t.integer(),
    reps: t.integer(),
    weight: t.real(),
    duration: t.integer(),
    distance: t.real(),
    rpe: t.integer(),
    status: exerciseStatus(),
    ...timestamps,
});

export const sessionExerciseRelations = relations(
    sessionExercises,
    ({ one }) => ({
        exercise: one(exercises, {
            fields: [sessionExercises.id],
            references: [exercises.id],
        }),
        session: one(trainingSessions, {
            fields: [sessionExercises.id],
            references: [trainingSessions.id],
        }),
    })
);
