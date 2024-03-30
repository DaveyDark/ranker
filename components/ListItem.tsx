import type { FC } from "react";

interface AvgListMainProps {
  title: string;
  count: number;
}

const AvgListMain: FC<AvgListMainProps> = ({ title, count }) => {
  return (
    <>
      <div
        className="bg-secondary-foreground m-2 text-white px-2 rounded-3xl shadow-xl min-w-60 max-w-60 
        min-h-[7vh] max-h-[7vh] text-wrap relative flex flex-col justify-center items-center 
        cursor-pointer hover:scale-[102%] transition-transform"
      >
        <span
          className="absolute -top-1.5 -left-1.5 bg-blue-500 text-white rounded-full 
          w-6 h-6 flex items-center justify-center text-sm font-bold"
        >
          {count}
        </span>
        <div className="overflow-auto max-h-[6vh] w-full custom-scrollbar flex justify-center">
          <h1 className="font-semibold px-4">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default AvgListMain;
