import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema.js";
export const pg = postgres(process.env.DATABASE_URL);
export const database = drizzle(pg, {
    schema,
    logger: true
});

//# sourceMappingURL=drizzle.js.map