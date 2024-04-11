import Home from "@/components/Home";
import Inbox from "@/components/Inbox";
import TabBar from "@/components/TabBar";
import { getLatestRanker, getUserRankers } from "@/lib/actions/ranker.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");
  const ranker = await getLatestRanker(userId);
  const userRankers = await getUserRankers(userId);

  return (
    <div className="flex flex-col items-center gap-4 h-full justify-around lg:flex-row max-w-[90rem] m-auto">
      <TabBar tab={searchParams.tab || "Home"} />
      <Home
        rankerId={ranker?.id}
        show={!searchParams.tab || searchParams.tab === "Home"}
      />
      <Inbox rankers={userRankers} show={searchParams.tab === "Inbox"} />
    </div>
  );
};

export default Page;
