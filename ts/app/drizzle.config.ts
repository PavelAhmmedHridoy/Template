import 'dotenv/config'; // auto-loads .env
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./database/db/schema.ts",
    out: "./database/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!, // now it will be defined
    },
});
