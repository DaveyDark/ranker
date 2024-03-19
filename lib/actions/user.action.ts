import { User } from "@/database/schema/user.schema";
import { db } from "../drizzle";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const getUsers = async () => {
  const selectResult = await db.select().from(User);
  console.log("Results", selectResult);
};

export const createUser = async (user: {
  clerkId: string;
  username: string;
  name: string;
  email: string;
  image_url?: string;
}) => {
  const insertResult = await db.insert(User).values(user).returning();
  console.log("Results", insertResult);
  return insertResult;
};

export const updateUser = async (
  user: {
    clerkId: string;
    username: string;
    name: string;
    email: string;
    image_url?: string;
  },
  path: string,
) => {
  const updateResult = await db
    .update(User)
    .set(user)
    .where(eq(User.clerkId, user.clerkId))
    .returning();
  console.log("Results", updateResult);

  revalidatePath(path);
  return updateResult;
};

export const deleteUser = async (clerkId: string) => {
  await db.delete(User).where(eq(User.clerkId, clerkId));
};
