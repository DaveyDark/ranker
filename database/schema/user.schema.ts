import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const User = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    clerkId: text("clerkId").notNull(),
    username: text("username").notNull(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    image_url: text("image_url"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(users.clerkId),
    };
  },
);
