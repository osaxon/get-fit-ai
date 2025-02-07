import * as t from "drizzle-orm/pg-core";
import { pgTable } from "../table";

export const trainingSplits = pgTable("training_splits", {
    id: t.serial("id").primaryKey(),
    name: t.varchar().unique(),
    description: t.text(),
    sessionsPerWeek: t.integer("sessions_per_week"),
});
