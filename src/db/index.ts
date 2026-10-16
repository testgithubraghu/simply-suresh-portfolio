import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const globalForDb = globalThis as typeof globalThis & {
  __simplySureshPool?: Pool;
  __simplySureshDb?: NodePgDatabase;
};

export function getPool(): Pool {
  if (!globalForDb.__simplySureshPool) {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      throw new Error("DATABASE_URL is required");
    }
    globalForDb.__simplySureshPool = new Pool({
      connectionString: databaseUrl,
      max: 5,
    });
  }
  return globalForDb.__simplySureshPool;
}

function getDb(): NodePgDatabase {
  if (!globalForDb.__simplySureshDb) {
    globalForDb.__simplySureshDb = drizzle(getPool());
  }
  return globalForDb.__simplySureshDb;
}

// Lazy proxy: nothing connects (or throws) until a query is actually made.
export const db = new Proxy({} as NodePgDatabase, {
  get(_target, prop) {
    const real = getDb() as unknown as Record<string | symbol, unknown>;
    const value = real[prop];
    return typeof value === "function" ? value.bind(real) : value;
  },
});