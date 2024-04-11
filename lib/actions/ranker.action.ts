import { IRanker, Ranker } from "@/database/schema/ranker.schema";
import { db } from "../drizzle";
import { count, desc, eq, sql } from "drizzle-orm";
import { Ranking } from "@/database/schema/ranking.schema";
import { getUserByClerkId } from "./user.action";

export const createRanker = async ({
  name,
  options,
  userId,
}: {
  name: string;
  options: string[];
  userId: number;
}) => {
  try {
    const ranker = await db
      .insert(Ranker)
      .values({
        name,
        options,
        user_id: userId,
      })
      .returning();

    if (!ranker) throw new Error("Ranker not created");

    return ranker;
  } catch (error) {
    console.error(`Error creating ranker: ${error}`);
    return undefined;
  }
};

export const getRanker = async (id: number): Promise<IRanker | undefined> => {
  try {
    const ranker = await db
      .select()
      .from(Ranker)
      .where(eq(Ranker.id, id))
      .limit(1);

    if (ranker.length === 0) {
      console.error(`Ranker not found`);
      throw new Error("Ranker not found");
    }

    return ranker[0];
  } catch (error) {
    console.error(
      `Error getting ranker with id ${id}: ${JSON.stringify(error)}`,
    );
    return undefined;
  }
};

export const getUserRankers = async (
  clerkId: string,
): Promise<{ name: string; responses: number; id: number }[]> => {
  try {
    const user = await getUserByClerkId(clerkId);
    if (!user) throw new Error("User not found");
    const id = user.id;
    const rankers = await db
      .select({
        name: Ranker.name,
        id: Ranker.id,
        responses: count(Ranker.id),
      })
      .from(Ranker)
      .innerJoin(Ranking, eq(Ranker.id, Ranking.ranker_id))
      .groupBy(Ranker.id)
      .where(eq(Ranker.user_id, id));
    return rankers;
  } catch (error) {
    console.error(`Error getting rankers for user ${clerkId}: ${error}`);
    return [];
  }
};

export const getLatestRanker = async (
  clerkId: string,
): Promise<IRanker | undefined> => {
  try {
    const user = await getUserByClerkId(clerkId);
    if (!user) throw new Error("User not found");
    const id = user.id;
    const ranker = await db
      .select()
      .from(Ranker)
      .where(eq(Ranker.user_id, id))
      .orderBy(desc(Ranker.createdAt))
      .limit(1);

    return ranker[0];
  } catch (error) {
    console.error(`Error getting latest ranker for user ${clerkId}: ${error}`);
  }
};
