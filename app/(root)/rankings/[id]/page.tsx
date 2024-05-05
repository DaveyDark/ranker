import IndividualResponse from "@/components/IndividualResponse";
import ShareStoryButton from "@/components/ShareStoryButton";
import { getRanker } from "@/lib/actions/ranker.action";
import { getRanking } from "@/lib/actions/ranking.action";
import { redirect } from "next/navigation";
import React from "react";

const Page = async ({ params }: { params: { id: number } }) => {
  const response = await getRanking(params.id);

  if (!response) {
    console.log("No response found");
    redirect("/");
  }

  const ranker = await getRanker(response.ranker_id);

  if (!ranker) {
    console.log("No ranker found");
    redirect("/");
  }

  return (
    <div className="bg-white rounded-3xl max-w-lg m-4 sm:mx-auto p-4 flex flex-col gap-6 items-center">
      <div
        className="w-full bg-secondary rounded-3xl p-4 text-white"
        id="canvasTarget"
      >
        <h1 className="font-semibold text-2xl mt-4 mb-8 text-center">
          {ranker.name}
        </h1>
        <IndividualResponse ranks={response.ranks} />
      </div>
      <ShareStoryButton
        shareTitle={`Response on "${ranker.name}" at ${response.createdAt}`}
        shareText=""
        rankerId={response.ranker_id}
        targetId="canvasTarget"
        listId="canvasTarget2"
      />
    </div>
  );
};

export default Page;
