import { dbHttpInstance } from "./db";
import { exercises } from "./schema";
import { trainingSplits } from "./schema/training-split";
import { equipment } from "./schema/equipment";
import { getTableName } from "drizzle-orm";
import { PgTable, TableConfig } from "drizzle-orm/pg-core";
import { exerciseEquipment } from "./schema/exercise-equipment";
import {
    exerciseData,
    trainingSplitData,
    equipmentData,
    exerciseEquipmentData,
} from "./seed/data";

const seedData = async (table: PgTable<TableConfig>, values: object) => {
    const tableName = getTableName(table);

    console.log(`Checking ${tableName}...`);

    if (await isSeeded(table)) return;

    await dbHttpInstance.insert(table).values(values);

    console.log(`🌱${tableName} seeded successfully.`);
};

async function seedExercises() {
    await seedData(exercises, exerciseData);
}

async function seedSplits() {
    await seedData(trainingSplits, trainingSplitData);
}

async function seedEquipment() {
    await seedData(equipment, equipmentData);
}

async function seedExerciseEquipment() {
    await seedData(exerciseEquipment, exerciseEquipmentData);
}

const isSeeded = async (table: PgTable<TableConfig>) => {
    const data = await dbHttpInstance.select().from(table);

    if (data.length > 0) {
        console.log("Data already seeded. Stopping execution.");
        return true;
    }

    return false;
};

async function runSeeds() {
    try {
        await seedSplits();
    } catch (error) {
        console.error("Error seeding splits:", error);
    }

    try {
        await seedExercises();
    } catch (error) {
        console.error("Error seeding exercises:", error);
    }

    try {
        await seedEquipment();
    } catch (error) {
        console.error("Error seeding equipment:", error);
    }

    try {
        await seedExerciseEquipment();
    } catch (error) {
        console.error("Error seeding exercise equipment:", error);
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function truncateTables() {
    await dbHttpInstance.execute(
        'TRUNCATE TABLE "get-fit-ai_exercise_equipment" RESTART IDENTITY CASCADE'
    );
    await dbHttpInstance.execute(
        'TRUNCATE TABLE "get-fit-ai_equipment" RESTART IDENTITY CASCADE'
    );
    await dbHttpInstance.execute(
        'TRUNCATE TABLE "get-fit-ai_exercises" RESTART IDENTITY CASCADE'
    );
    await dbHttpInstance.execute(
        'TRUNCATE TABLE "get-fit-ai_training_splits" RESTART IDENTITY CASCADE'
    );
}

runSeeds();
