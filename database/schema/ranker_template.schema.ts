import { pgTable, serial, text } from "drizzle-orm/pg-core";

export interface IRankerTemplate {
  id: number;
  name: string;
  options: string[];
}

export const RankerTemplate = pgTable("ranker_templates", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  options: text("options").array().notNull(),
});
