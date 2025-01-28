import * as t from "drizzle-orm/pg-core";
import { timestamps } from "../common";
import { trainingPlan } from "./training-plan";
import { pgTable } from "../table";

export const sessionStatus = t.pgEnum("session_status", [
    "pending",
    "completed",
    "skipped",
]);

export const trainingSession = pgTable("training_session", {
    id: t.serial("id").primaryKey(),
    planId: t
        .serial("plan_id")
        .references((): t.AnyPgColumn => trainingPlan.id),
    date: t.date(),
    weekNumber: t.integer(),
    dayNumber: t.integer(),
    status: sessionStatus(),
    ...timestamps,
});
