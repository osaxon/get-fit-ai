import * as t from "drizzle-orm/pg-core";
import { timestamps } from "../common";
import { trainingPlans } from "./training-plan";
import { pgTable } from "../table";
import { relations } from "drizzle-orm";

export const sessionStatus = t.pgEnum("session_status", [
    "pending",
    "completed",
    "skipped",
]);

export const sessionFocus = t.pgEnum("session_focus", [
    "push",
    "pull",
    "mixed",
    "none",
]);

export const trainingSessions = pgTable("training_sessions", {
    id: t.serial("id").primaryKey(),
    planId: t
        .serial("plan_id")
        .references((): t.AnyPgColumn => trainingPlans.id, {
            onDelete: "cascade",
        }),
    date: t.date(),
    weekNum: t.integer("week_num"),
    dayNum: t.integer("day_num"),
    status: sessionStatus(),
    focus: sessionFocus().default("none"),
    ...timestamps,
});

export const trainingSessionRelations = relations(
    trainingSessions,
    ({ one }) => ({
        plan: one(trainingPlans, {
            fields: [trainingSessions.id],
            references: [trainingPlans.id],
        }),
    })
);
