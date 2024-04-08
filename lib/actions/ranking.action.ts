import { Ranking } from "@/database/schema/ranking.schema";
import { db } from "../drizzle";
import { eq } from "drizzle-orm";
import { Ranker } from "@/database/schema/ranker.schema";

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

export async function getAverageRanking(
  id: number,
): Promise<{ ranks: string[]; responses: number } | undefined> {
  try {
    const rankings = await db
      .select()
      .from(Ranking)
      .where(eq(Ranking.ranker_id, id));

    const counts: { [weight: string]: number } = {};
    for (const ranking of rankings) {
      for (let i = 0; i < ranking.ranks.length; i++) {
        if (!counts[ranking.ranks[i]]) counts[ranking.ranks[i]] = 0;
        counts[ranking.ranks[i]] += ranking.ranks.length - i;
      }
    }

    const responses = rankings.length;

    const ranks = Object.keys(counts).sort(
      (a, b) => counts[b] - counts[a],
    ) as string[];

    return { ranks, responses };
  } catch (e) {
    console.error(`Error getting average ranking for ranker ${id}: ${e}`);
    return undefined;
  }
}
