//import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";
import { env } from "./data/env/server";
import { siteConfig } from "./config/site";

// config({ path: ".env.local" });

export default defineConfig({
    schema: "./db/schema",
    out: "./migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: env.DATABASE_URL,
    },
    introspect: {
        casing: "preserve",
    },
    tablesFilter: [`${siteConfig.name}_*`],
});
