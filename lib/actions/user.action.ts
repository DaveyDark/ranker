import { IUser, User } from "@/database/schema/user.schema";
import { db } from "../drizzle";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const getUsers = async () => {
  const selectResult = await db.select().from(User);
};

export const getUser = async (id: number): Promise<IUser | undefined> => {
  try {
    const selectResult = await db
      .select()
      .from(User)
      .where(eq(User.id, id))
      .limit(1);

    if (selectResult.length == 0) throw new Error(`User not found`);

    return selectResult[0];
  } catch (error) {
    console.error(`Error getting user with id ${id}: ${error}`);
  }
};

export const getUserByClerkId = async (
  clerkId: string,
): Promise<IUser | undefined> => {
  try {
    const selectResult = await db
      .select()
      .from(User)
      .where(eq(User.clerkId, clerkId))
      .limit(1);
    if (selectResult.length == 0) throw new Error(`User not found`);
    return selectResult[0];
  } catch (error) {
    console.error(`Error getting user with clerkId ${clerkId}: ${error}`);
  }
};

export const createUser = async (user: {
  clerkId: string;
  username: string;
  name: string;
  email: string;
  image_url?: string;
}) => {
  const insertResult = await db.insert(User).values(user).returning();
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

  revalidatePath(path);
  return updateResult;
};

export const deleteUser = async (clerkId: string) => {
  await db.delete(User).where(eq(User.clerkId, clerkId));
};
