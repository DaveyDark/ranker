import type { FC } from "react";

interface IndividualListProps {
  ranks: string[];
  index: number;
}

const IndividualList: FC<IndividualListProps> = ({ ranks, index }) => {
  return (
    <>
      <div className="bg-secondary text-white p-4 rounded-3xl h-full w-full border border-secondary-foreground">
        <span className="">Response {index + 1}</span>
        <div className="flex p-2 overflow-x-scroll custom-scrollbar rounded-2xl gap-1">
          {ranks.map((rank, index) => (
            <div className="relative text-xs" key={index}>
              <span
                className="absolute -top-1.5 -left-1.5 bg-primary text-white rounded-full 
                w-6 h-6 grid place-items-center text-sm font-bold aspect-square"
              >
                {index + 1}
              </span>
              <div
                className="bg-secondary-foreground text-white p-1 rounded-xl pt-4 pl-4
                w-24 h-full text-wrap break-words line-clamp-3 overflow-hidden"
              >
                <h1>{rank}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default IndividualList;
