import CreateRankerButton from "@/components/CreateRankerButton";
import LearnButton from "@/components/LearnButton";
import LinkButton from "@/components/LinkButton";
import { getLatestRanker } from "@/lib/actions/ranker.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const { userId } = auth();
  if (!userId) return redirect("/sign-in");
  const ranker = await getLatestRanker(userId);

  return (
    <div
      // lg:flex-row-reverse lg:w-full lg:my-24
      className="flex flex-col 
      justify-center gap-32 h-full"
    >
      <CreateRankerButton />
      <div
        // lg:static lg:m-0 lg:rounded-b-[5rem]
        className="bg-secondary absolute bottom-0 left-0 right-0 mx-auto max-w-md
        flex flex-col justify-around
        p-10 pb-4 rounded-t-[5rem] gap-4"
      >
        <div
          className="bg-white rounded-t-[5rem] rounded-b-3xl lg:rounded-b-[5rem]
          p-3 flex flex-col items-center gap-2 px-24"
        >
          <p className={`font-semibold text-lg`}>Copy your link!</p>
          <LinkButton
            link={ranker ? `/ranker/${ranker.id}` : ""}
            disabled={ranker ? false : true}
          />
        </div>
        <div
          className="bg-white rounded-3xl p-3 flex flex-col lg:rounded-[5rem]
          items-center gap-2 px-24"
        >
          <p className="font-semibold text-lg">How to Share?</p>
          <LearnButton />
        </div>
      </div>
    </div>
  );
};

export default Page;
