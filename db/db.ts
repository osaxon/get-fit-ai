import { env } from "@/data/env/server";
import { neon, Pool } from "@neondatabase/serverless";
import { drizzle as dbWebsocket } from "drizzle-orm/neon-serverless";
import { drizzle as dbHttp } from "drizzle-orm/neon-http";
import * as schema from "./schema/index";
import { DrizzleConfig } from "drizzle-orm";

const config = { schema, casing: "snake_case" } as DrizzleConfig<typeof schema>;

const pool = new Pool({ connectionString: env.DATABASE_URL });
export const db = dbWebsocket(pool, config);

const sql = neon(env.DATABASE_URL);
export const dbHttpInstance = dbHttp(sql, { schema, casing: "snake_case" });
