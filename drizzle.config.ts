import { defineConfig } from "drizzle-kit"
export default defineConfig({
  schema: "./src/lib/database/schema.ts",
  out: "./src/lib/database/drizzle",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
},
  verbose: true,
  strict: true,
})