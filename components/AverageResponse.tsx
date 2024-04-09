"use client";
import feather from "feather-icons";
import React, { useEffect } from "react";
import ListItem from "./ListItem";

interface Props {
  responses: number;
  ranks: string[];
}

const AverageResponse = ({ responses, ranks }: Props) => {
  useEffect(() => {
    feather.replace();
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full justify-between items-center">
        <h2 className="text-lg">Average Response</h2>
        <span className="bg-secondary-foreground py-2 px-4 rounded-2xl flex gap-1">
          <svg data-feather="bar-chart-2" width={24} height={24} />
          <p>{responses}</p>
        </span>
      </div>
      <div
        id="canvasTarget2"
        className="flex flex-col gap-2 items-center bg-secondary-foreground rounded-3xl p-4
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

export default AverageResponse;
