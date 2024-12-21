import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

const pool = new Pool({
  connectionString: "postgresql://postgres:password@localhost:5432/postgres",
});

export const db = drizzle(pool);
