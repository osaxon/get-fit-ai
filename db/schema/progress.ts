import * as t from "drizzle-orm/pg-core";
import { user } from "./user";
import { exercises } from "./exercise";
import { pgTable } from "../table";

export const progress = pgTable("progress", {
    id: t.serial("id").primaryKey(),
    userId: t.serial("user_id").references(() => user.id),
    exerciseId: t.serial("exercise_id").references(() => exercises.id),
    completedAt: t.timestamp(),
});
