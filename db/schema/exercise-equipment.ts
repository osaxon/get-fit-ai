import { pgTable } from "../table";
import { serial } from "drizzle-orm/pg-core";
import { exercises } from "./exercise";
import { equipment } from "./equipment";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";

export const exerciseEquipment = pgTable("exercise_equipment", {
    id: serial("id").primaryKey(),
    exerciseId: serial("exercise_id").references(() => exercises.id, {
        onDelete: "cascade",
    }),
    equipmentId: serial("equipment_id").references(() => equipment.id, {
        onDelete: "cascade",
    }),
});

export const exerciseEquipmentRelations = relations(
    exerciseEquipment,
    ({ one }) => ({
        exercise: one(exercises, {
            fields: [exerciseEquipment.exerciseId],
            references: [exercises.id],
        }),
        equipment: one(equipment, {
            fields: [exerciseEquipment.equipmentId],
            references: [equipment.id],
        }),
    })
);

export type ExerciseEquipmentReqModel = InferInsertModel<
    typeof exerciseEquipment
>;
export type ExerciseEquipmentResModel = InferSelectModel<
    typeof exerciseEquipment
>;
