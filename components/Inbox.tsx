import Link from "next/link";
import React from "react";

const Inbox = ({
  rankers,
  show,
}: {
  rankers: { name: string; responses: number; id: number }[];
  show: boolean;
}) => {
  return (
    <div
      className={`w-full p-6 h-full flex flex-col gap-8 max-w-md ${
        show ? "" : "max-lg:hidden"
      }`}
    >
      <div className="bg-white p-6 rounded-3xl flex flex-col gap-4 w-full h-full overflow-y-auto">
        <h1 className="hidden lg:block font-bold text-center text-2xl my-2">
          INBOX
        </h1>
        {rankers.map((ranker, i) => (
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
      <Link
        href="/create-ranker"
        className="lg:hidden flex gap-4 items-center justify-center"
      >
        <h1
          className="bg-primary text-primary-foreground p-5 rounded-3xl 
          font-semibold text-xl px-16"
        >
          Create a Ranker
        </h1>
        <div className="p-4 bg-primary rounded-full">
          <svg
            className="text-white"
            height={36}
            width={36}
            data-feather="chevron-right"
          ></svg>
        </div>
      </Link>
    </div>
  );
};

export default Inbox;
