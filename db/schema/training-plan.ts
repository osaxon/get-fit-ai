import * as t from "drizzle-orm/pg-core";
import { users } from "./user";
import { timestamps } from "../common";
import { pgTable } from "../table";
import { trainingSplits } from "./training-split";
import { relations } from "drizzle-orm";
import { trainingSessions } from "./training-session";

export const planStatus = t.pgEnum("plan_status", [
  "active",
  "completed",
  "inactive",
]);

export const progressionType = t.pgEnum("progression_type", [
  "linear",
  "repetition",
  "time",
  "rpe",
  "wave_loading",
]);

export const equipmentPreference = t.pgEnum("equipment_preference", [
  "equipment",
  "mixed",
  "none",
]);

export const trainingPlans = pgTable("training_plans", {
  id: t.serial("id").primaryKey(),
  userId: t
    .integer("user_id")
    .references((): t.AnyPgColumn => users.id, { onDelete: "cascade" }),
  startDate: t.date("start_date"),
  endDate: t.date("end_date"),
  status: planStatus(),
  splitId: t
    .integer("split_id")
    .references((): t.AnyPgColumn => trainingSplits.id),
  progressionType: progressionType("progression_type").default("rpe"),
  equipmentPreference: equipmentPreference("equipment_preference").default(
    "mixed"
  ),
  ...timestamps,
});

export const trainingPlanRelations = relations(
  trainingPlans,
  ({ one, many }) => ({
    sessions: many(trainingSessions),
    user: one(users, {
      fields: [trainingPlans.userId],
      references: [users.id],
    }),
    split: one(trainingSplits, {
      fields: [trainingPlans.splitId],
      references: [trainingSplits.id],
    }),
  })
);
