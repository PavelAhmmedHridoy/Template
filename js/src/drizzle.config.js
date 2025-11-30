import 'dotenv/config';
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./database/db/schema.js",
  out: "./database/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
