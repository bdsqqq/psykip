import type { Config } from "drizzle-kit";

export default {
    schema: "./src/drizzle/schema.ts",
    out: "./src/drizzle/migrations",
    driver: "turso",
    dbCredentials: {
        url: "http://127.0.0.1:8080",
        authToken: "",
    }
} satisfies Config