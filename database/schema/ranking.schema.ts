import {
  AnyPgColumn,
  foreignKey,
  text,
  pgTable,
  serial,
  timestamp,
} from "drizzle-orm/pg-core";
import { Ranker } from "./ranker.schema";

interface IRanking {
  id: number;
  ranker_id: number;
  ranks: string[];
  createdAt: Date;
}

export const Ranking = pgTable(
  "rankings",
  {
    id: serial("id").primaryKey(),
    ranker_id: serial("ranker_id")
      .notNull()
      .references((): AnyPgColumn => Ranker.id),
    ranks: text("ranks").array().notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (rankings) => {
    return {
      ranker_id_fkey: foreignKey({
        columns: [rankings.ranker_id],
        foreignColumns: [Ranker.id],
        name: "rankings_ranker_id_fkey",
      }),
    };
  },
);
