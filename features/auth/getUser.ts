"use server";

import { db } from "@/db/db";
import { auth } from "@clerk/nextjs/server";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getUser() {
  const { userId, redirectToSignIn } = await auth();
  console.log("userId:", userId);
  if (!userId) return redirectToSignIn();

  const dbUser = await db.query.users.findFirst({
    where: eq(users.authIdentifier, userId),
  });

  console.log("after: ", userId);

  if (!dbUser) throw new Error("User not found in database");

  return dbUser;
}
