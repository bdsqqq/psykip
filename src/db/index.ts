import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const turso = createClient({
    url: process.env.TURSO_URL || "file:local.db",
    authToken: process.env.TURSO_AUTH_TOKEN || ""
});

export const db = drizzle(turso);