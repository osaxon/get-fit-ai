import * as t from "drizzle-orm/pg-core";
import { pgTable } from "../table";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export const trainingSplits = pgTable("training_splits", {
    id: t.serial("id").primaryKey().unique(),
    name: t.varchar().unique(),
    description: t.text(),
    sessionsPerWeek: t.integer("sessions_per_week"),
});

export type TrainingSplitReqModel = InferInsertModel<typeof trainingSplits>;
export type TrainingSplitResModel = InferSelectModel<typeof trainingSplits>;
