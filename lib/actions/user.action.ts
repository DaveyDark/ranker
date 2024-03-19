import { User } from "@/database/schema/user.schema";
import { db } from "../drizzle";

export const getUsers = async () => {
  const selectResult = await db.select().from(User);
  console.log("Results", selectResult);
};
