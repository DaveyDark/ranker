import { IRanking, Ranking } from "@/database/schema/ranking.schema";
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

export async function getIndividualRankings(
  id: number,
): Promise<IRanking[] | undefined> {
  try {
    const rankings = await db
      .select()
      .from(Ranking)
      .where(eq(Ranking.ranker_id, id));
    return rankings;
  } catch (e) {
    console.error(`Error getting individual rankings for ranker ${id}: ${e}`);
    return undefined;
  }
}

export async function getRanking(id: number): Promise<IRanking | undefined> {
  try {
    const ranking = await db
      .select()
      .from(Ranking)
      .where(eq(Ranking.id, id))
      .limit(1);

    if (ranking.length == 0) throw new Error("Ranking not found");

    return ranking[0];
  } catch (e) {
    console.error(`Error getting ranking ${id}: ${e}`);
    return undefined;
  }
}
