import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = `postgres://postgres.amvzfzmxakuvfgwmdlki:${process.env.DATABASE_PASSWORD}@aws-0-ap-southeast-2.pooler.supabase.com:5432/postgres`;
const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client);

export interface DatabaseUser {
  id: string;
  username: string;
  github_id: number;
}
