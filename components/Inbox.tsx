import Link from "next/link";
import React from "react";

const Inbox = ({
  rankers,
  show,
}: {
  rankers: { name: string; responses: number; id: number }[];
  show: boolean;
}) => {
  const reversedRankers = [...rankers].reverse(); //reversed the order
  return (
    <div
      className={`w-full overflow-hidden lg:mr-24 lg:justify-around p-6 h-full flex flex-col gap-8 max-w-md ${
        show ? "" : "max-lg:hidden"
      }`}
    >
      <div className="bg-white p-6 rounded-3xl flex flex-col gap-4 w-full h-[70vh] md:h-[48rem] overflow-y-auto custom-scrollbar">
        <h1 className="hidden lg:block font-bold text-center text-2xl my-2 ">
          INBOX
        </h1>
        {reversedRankers.map((ranker, i) => (
          <Link
            href={`/rankers/${ranker.id}/summary`}
            className="bg-secondary text-white p-4 rounded-3xl flex 
            flex-col gap-6 relative hover:scale-105 transition-transform"
            key={i}
          >
            <h2 className="font-semibold text-xl">{ranker.name}</h2>
            <div
              className="bg-primary w-8 h-8 rounded-full absolute 
              -right-1.5 -top-1.5 grid place-items-center font-bold"
            >
              {i + 1}
            </div>
            <span className="flex items-center w-full justify-between">
              <p className="text-sm">View Response</p>
              <span className="flex items-center gap-2 bg-secondary-foreground py-1 px-2 rounded-3xl">
                <svg data-feather="bar-chart-2" />
                {ranker.responses}
              </span>
            </span>
          </Link>
        ))}
      </div>
      
    </div>
  );
};

export default Inbox;
