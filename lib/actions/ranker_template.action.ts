import {
  IRankerTemplate,
  RankerTemplate,
} from "@/database/schema/ranker_template.schema";
import { db } from "../drizzle";
import { sql } from "drizzle-orm";

export async function getRandomRankerTemplate(): Promise<
  IRankerTemplate | undefined
> {
  try {
    const selectResult = await db
      .select()
      .from(RankerTemplate)
      .orderBy(sql`RANDOM()`)
      .limit(1);
    if (selectResult.length == 0) throw new Error(`RankerTemplate not found`);
    return selectResult[0];
  } catch (error) {
    console.error(`Error getting random RankerTemplate: ${error}`);
  }
}
