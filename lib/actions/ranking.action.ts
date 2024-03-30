import { Ranking } from "@/database/schema/ranking.schema";
import { db } from "../drizzle";

export async function addRanking({
  id,
  ranks,
}: {
  id: number;
  ranks: string[];
}) {
  try {
    await db.insert(Ranking).values({ ranker_id: id, ranks });
  } catch (e) {
    console.error(`Error adding ranking(id = ${id}, ranks=${ranks}): ${e}`);
  }
}
