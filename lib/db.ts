import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = `postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.PGBOUNCER_PORT}/postgres`;
const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client);

export interface DatabaseUser {
  id: string;
  username: string;
  github_id: number;
}
