import { env } from "@/data/env/server";
import { Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import * as schema from "./schema/user";

const pool = new Pool({ connectionString: env.DATABASE_URL });
export const db = drizzle(pool, { schema, casing: "snake_case" });
