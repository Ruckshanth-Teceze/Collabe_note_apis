import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema/index.js";

//Local development
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   max: 20,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
// });

// Unified local/Docker: Prefer DATABASE_URL if set (Docker provides), fallback to individuals/local.
const poolConfig: any = {
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
};

if (process.env.DATABASE_URL) {
  poolConfig.connectionString = process.env.DATABASE_URL;
} else {
  poolConfig.host = process.env.DB_HOST || "localhost";
  poolConfig.port = parseInt(process.env.DB_PORT || "5432");
  poolConfig.user = process.env.DB_USER;
  poolConfig.password = process.env.DB_PASSWORD;
  poolConfig.database = process.env.DB_NAME;
}

const pool = new Pool(poolConfig);

export const db = drizzle(pool, { schema });

export { pool };
