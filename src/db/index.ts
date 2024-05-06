import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const turso = createClient({
    url: "file:local.db",
    authToken: ""
});

export const db = drizzle(turso);