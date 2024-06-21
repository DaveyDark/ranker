import React from "react";
import LearnButton from "./LearnButton";
import LinkButton from "./LinkButton";
import CreateRankerButton from "./CreateRankerButton";
import ShareButton from "./ShareButton";

const Home = ({
  rankerId,
  rankerTitle,
  show,
}: {
  rankerId: number | undefined;
  rankerTitle: string | undefined;
  show: boolean;
}) => {
  return (
    <div
      className={`flex flex-col h-full items-center
justify-between gap-6 ${show ? "" : "max-lg:hidden"} sm:overflow-hidden`}
    >
      <CreateRankerButton />
      <div
        className="bg-secondary w-screen sm:w-[28rem] md:w-96 flex flex-col justify-around
          p-10 pb-4 rounded-t-[5rem] gap-4 lg:rounded-b-[5rem] lg:mb-4 lg:pb-10"
      >
        <div
          className="bg-white rounded-t-[5rem] rounded-b-3xl lg:rounded-b-[5rem]
            p-3 flex flex-col items-center gap-2 py-2 px-4"
        >
          <p className={`font-semibold text-lg`}>Copy your link!</p>
          <LinkButton
            link={
              rankerId ? `${window.location.origin}/ranker/${rankerId}` : ""
            }
            disabled={rankerId ? false : true}
          />
        </div>
        <div
          className="bg-white rounded-t-[5rem] rounded-b-3xl lg:rounded-b-[5rem]
            p-3 flex flex-col items-center gap-2 py-2 px-4"
        >
          <p className={`font-semibold text-lg`}>Share your ranker!</p>
          <ShareButton
            link={
              rankerId ? `${window.location.origin}/ranker/${rankerId}` : ""
            }
            rankerTitle={rankerTitle || ""}
            disabled={rankerId ? false : true}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
