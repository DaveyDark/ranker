import { IRanker, Ranker } from "@/database/schema/ranker.schema";
import { db } from "../drizzle";
import { eq } from "drizzle-orm";

export const getRanker = async (id: number): Promise<IRanker | undefined> => {
  try {
    const ranker = await db
      .select()
      .from(Ranker)
      .where(eq(Ranker.id, id))
      .limit(1);

    if (ranker.length === 0) throw new Error("Ranker not found");

    return ranker[0];
  } catch (error) {
    console.error(`Error getting ranker with id ${id}: ${error}`);
    return undefined;
  }
};
