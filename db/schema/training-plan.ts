import * as t from "drizzle-orm/pg-core";
import { user } from "./user";
import { timestamps } from "../common";
import { pgTable } from "../table";

export const planStatus = t.pgEnum("plan_status", [
    "active",
    "completed",
    "inactive",
]);

export const trainingPlan = pgTable("training_plan", {
    id: t.serial("id").primaryKey(),
    userId: t.serial("user_id").references((): t.AnyPgColumn => user.id),
    startDate: t.date(),
    endDate: t.date(),
    status: planStatus(),
    ...timestamps,
});
