import AverageResponse from "@/components/AverageResponse";
import IndividualList from "@/components/IndividualList";
import ShareStoryButton from "@/components/ShareStoryButton";
import { getRanker } from "@/lib/actions/ranker.action";
import {
  getAverageRanking,
  getIndividualRankings,
} from "@/lib/actions/ranking.action";
import { getUserByClerkId } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import Link from "next/link";

const Page = async ({ params }: { params: { id: number } }) => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  const ranker = await getRanker(params.id);
  if (!ranker) {
    console.log("Ranker not found");
    redirect("/");
  }
  const averageRanking = await getAverageRanking(ranker.id);
  if (!averageRanking) {
    console.log("Average ranking not found");
    redirect("/");
  }

  const user = await getUserByClerkId(userId);
  if (!user) {
    console.log("User not found");
    redirect("/");
  }
  if (ranker.user_id !== user.id) {
    console.log("User does not own ranker");
    redirect("/");
  }

  const individualRanking = await getIndividualRankings(ranker.id);

  if (!individualRanking) {
    console.log("Individual ranking not found");
    redirect("/");
  }

  return (
    <>
      <div className="bg-white m-8 p-6 rounded-3xl max-w-lg sm:mx-auto">
        <div
          className="bg-secondary p-4 rounded-3xl text-white "
          id="canvasTarget"
        >
          <h1 className="font-semibold text-2xl mt-4 mb-8 text-center">
            {ranker.name}
          </h1>
          <AverageResponse
            responses={averageRanking.responses}
            ranks={averageRanking.ranks}
          />
        </div>
        <div className="flex w-full justify-center mt-6">
          <ShareStoryButton
            shareTitle={ranker.name}
            shareText="Rank now"
            rankerId={ranker.id}
            targetId="canvasTarget"
            listId="canvasTarget2"
          />
        </div>
      </div>
      <div className="bg-white m-8 p-6 rounded-3xl max-w-lg sm:mx-auto">
        <div
          className="bg-secondary p-4 rounded-3xl text-white flex flex-col gap-4"
          id="canvasTarget"
        >
          {/* <h1 className="font-semibold text-2xl mt-4 mb-8 text-center"> */}
          {/*   {ranker.name} */}
          {/* </h1> */}
          <h2 className="font-semibold text-xl my-4 text-center">
            Individual Responses
          </h2>
          {individualRanking.map((ranking, index) => (
            <Link key={index} href={`/rankings/${ranking.id}`}>
              <IndividualList ranks={ranking.ranks} index={index} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
