import { db } from "@/db/db";
import { users } from "@/db/schema";
import { DeletedObjectJSON, UserJSON, WebhookEvent } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { Webhook } from "svix";

export async function POST(req: Request) {
    const SIGNING_SECRET = process.env.SIGNING_SECRET;

    if (!SIGNING_SECRET) {
        throw new Error(
            "Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local"
        );
    }

    // Create new Svix instance with secret
    const wh = new Webhook(SIGNING_SECRET);

    // Get headers
    const headerPayload = await headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response("Error: Missing Svix headers", {
            status: 400,
        });
    }

    // Get body
    const payload = await req.json();
    const body = JSON.stringify(payload);

    let evt: WebhookEvent;

    // Verify payload with headers
    try {
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        }) as WebhookEvent;
    } catch (err) {
        console.error("Error: Could not verify webhook:", err);
        return new Response("Error: Verification error", {
            status: 400,
        });
    }

    if (evt.type === "session.created") {
        console.log("session created");
        // TODO make sure user exists in db.
        // if not create new user
    }

    if (evt.type === "user.created") {
        console.log("userId:", evt.data.id);
        const clerkUserData = evt.data;
        try {
            await createNewUserFromClerk(clerkUserData);
        } catch (error) {
            console.error(error)
            // TODO check the error type and return details
            // e.g. duplicate email constraint
            return new Response("Error creating user", { status: 500 })
        }
    }

    if (evt.type === "user.deleted") {
        console.log("delete user")
        console.log(evt.data)
        await deleteUser(evt.data)
    }

    return new Response("Webhook received", { status: 200 });
}

async function createNewUserFromClerk(clerkUser: UserJSON) {
    return await db.insert(users).values({
        authIdentifier: clerkUser.id,
        name: clerkUser.first_name + ' ' + clerkUser.last_name,
        email: clerkUser.email_addresses[0].email_address,
    })
}

async function deleteUser(clerkUser: DeletedObjectJSON) {
    if (clerkUser.id) return await db.delete(users).where(eq(users.authIdentifier, clerkUser.id))
    return
}