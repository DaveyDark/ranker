import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import dotenv from "dotenv";

async function main() {
  dotenv.config({ path: `.env.local` });
  const db = drizzle(sql);
  await migrate(db, { migrationsFolder: "./drizzle" });
}

main();
