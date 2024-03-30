import {
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  serial,
} from "drizzle-orm/pg-core";

export interface IUser {
  id: number;
  clerkId: string;
  username: string;
  name: string;
  email: string;
  image_url: string;
  createdAt: Date;
}

export const User = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    clerkId: text("clerkId").notNull(),
    username: text("username").notNull(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    image_url: text("image_url").notNull().default("/img/default_avatar.png"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(users.clerkId),
    };
  },
);
