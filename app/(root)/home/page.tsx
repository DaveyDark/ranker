import HelpDrawer from "@/components/HelpDrawer";
import Home from "@/components/Home";
import Inbox from "@/components/Inbox";
import ListItem from "@/components/ListItem";
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
    <div className="flex flex-col items-center gap-4 h-full mt-4 justify-around lg:flex-row max-w-7xl m-auto">
      <TabBar tab={searchParams.tab || "Home"} />
      <Home
        rankerId={ranker?.id}
        rankerTitle={ranker?.name}
        show={!searchParams.tab || searchParams.tab === "Home"}
      />
      <Inbox
        activeRanker={ranker?.id || -1}
        rankers={userRankers}
        show={searchParams.tab === "Inbox"}
      />
      <div className="bg-secondary p-4 flex-col gap-4 hidden" id="canvasTarget">
        <h2 className="text-center text-white font-semibold text-xl">
          {ranker?.name}
        </h2>
        <div
          className="flex flex-col gap-2 items-center bg-secondary-foreground rounded-3xl p-4
        overflow-x-hidden custom-scrollbar"
        >
          {ranker?.options.map((rank, index) => (
            <ListItem
              key={index}
              title={rank}
              count={index + 1}
              disabled
              invert
            />
          ))}
        </div>
      </div>
      <HelpDrawer />
    </div>
  );
};

export default Page;
