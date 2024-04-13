import ListItem from "@/components/ListItem";
import React from "react";

interface Props {
  ranks: string[];
}

const IndividualResponse = ({ ranks }: Props) => {
  return (
    <div className="flex flex-col gap-4 w-full ">
      <div className="w-full">
        <h2 className="text-lg">Individual Response</h2>
      </div>
      <div
        id="canvasTarget2"
        className="flex flex-col gap-2 items-center bg-secondary-foreground rounded-3xl py-4
        max-h-[50vh] overflow-y-scroll"
      >
        {ranks.map((rank, index) => (
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
  );
};

export default IndividualResponse;
