import type { Config } from "drizzle-kit";

export default {
    schema: "./src/drizzle/schema.ts",
    out: "./src/drizzle/migrations",
    driver: "turso",
    dbCredentials: {
        url: process.env.TURSO_URL || "http://127.0.0.1:8080",
        authToken: process.env.TURSO_AUTH_TOKEN || "",
    }
} satisfies Config