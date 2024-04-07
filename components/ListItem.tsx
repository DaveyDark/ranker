"use client";
import feather from "feather-icons";
import { useEffect, type FC } from "react";

interface AvgListMainProps {
  title: string;
  count: number;
  editable?: boolean;
  onDel?: (i: number) => void;
  index?: number;
}

const AvgListMain: FC<AvgListMainProps> = ({
  title,
  count,
  editable,
  onDel,
  index,
}) => {
  useEffect(() => feather.replace(), []);
  return (
    <>
      <div
        className="bg-secondary-foreground m-2 text-white px-2 rounded-3xl shadow-xl min-w-60 max-w-60 
        min-h-[7vh] text-wrap relative flex flex-col justify-center items-center 
        cursor-pointer hover:scale-[102%] transition-transform py-2"
      >
        <span
          className="absolute -top-1.5 -left-1.5 bg-blue-500 text-white rounded-full 
          w-6 h-6 flex items-center justify-center text-sm font-bold"
        >
          {count}
        </span>
        <div className="min-h-[4vh] w-full custom-scrollbar flex items-center justify-center">
          <h1 className="break-words max-w-full font-semibold px-4">{title}</h1>
        </div>
        {editable && (
          <span
            className="absolute -top-1.5 -right-1.5 bg-red-500 text-white rounded-full 
          w-6 h-6 flex items-center justify-center text-sm font-bold"
            onClick={() => onDel!(index!)}
          >
            <svg
              className="text-white"
              height={16}
              width={16}
              data-feather="minus"
            />
          </span>
        )}
      </div>
    </>
  );
};

export default AvgListMain;
