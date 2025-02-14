"use server";

import { db } from "@/db/db";
import { users, UserUpdateModel } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function updateUser(user: UserUpdateModel) {
    await db
        .update(users)
        .set({
            fitnessLevel: user.fitnessLevel,
            height: user.height,
            weight: user.weight,
            isActive: user.isActive,
        })
        .where(eq(users.id, user.id));
    if (!user.isActive) {
        await activateUser(user.id);
    }
}

export async function activateUser(userId: number) {
    await db
        .update(users)
        .set({
            isActive: true,
        })
        .where(eq(users.id, userId));
}
