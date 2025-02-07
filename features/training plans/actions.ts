"user server";
import { add } from "date-fns";
import { db } from "@/db/db";
import { trainingPlans } from "@/db/schema";
import { getUser } from "../auth/getUser";

export async function setupTrainingPlan() {
    const user = await getUser();

    const splitId = await selectTrainingSplit();

    const plan = await db.insert(trainingPlans).values({
        userId: user?.id,
        splitId: splitId,
        equipmentPreference: "mixed",
        startDate: new Date().toDateString(),
        endDate: add(new Date(), { weeks: 12 }).toDateString(),
    });

    return plan;
}

export async function selectTrainingSplit() {
    // this method should select an approriate split from the database
    return 1;
}
