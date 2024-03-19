import type { Config } from "drizzle-kit";

export default {
  schema: "./database/schema/*.schema.ts",
  out: "./drizzle",
  driver: "pg",
} satisfies Config;
