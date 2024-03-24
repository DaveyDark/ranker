import {
  AnyPgColumn,
  foreignKey,
  pgTable,
  text,
  timestamp,
  serial,
} from "drizzle-orm/pg-core";
import { User } from "./user.schema";

export const Ranker = pgTable(
  "rankers",
  {
    id: serial("id").primaryKey(),
    user_id: serial("user_id")
      .notNull()
      .references((): AnyPgColumn => User.id),
    name: text("name").notNull(),
    options: text("options").array().notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (rankers) => {
    return {
      user_id_fkey: foreignKey({
        columns: [rankers.user_id],
        foreignColumns: [User.id],
        name: "rankers_user_id_fkey",
      }),
    };
  },
);
