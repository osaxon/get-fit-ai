import { relations, InferSelectModel, InferInsertModel } from "drizzle-orm";
import { timestamps } from "../common";
import { pgTable } from "../table";
import { serial, varchar } from "drizzle-orm/pg-core";
import { exerciseEquipment } from "./exercise-equipment";

export const equipment = pgTable("equipment", {
    id: serial("id").primaryKey(),
    name: varchar().unique().notNull(),
    ...timestamps,
});

export const equipmentRelations = relations(equipment, ({ many }) => ({
    exerciseEquipment: many(exerciseEquipment),
}));

export type EquipmentReqModel = InferInsertModel<typeof equipment>;
export type EquipmentResModel = InferSelectModel<typeof equipment>;
