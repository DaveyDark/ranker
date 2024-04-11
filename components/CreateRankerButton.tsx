"use client";
import feather from "feather-icons";
import { useRouter } from "next/navigation";
import { useEffect, useRef, type FC } from "react";

interface CreateRankerProps {}

const CreateRankerButton: FC<CreateRankerProps> = () => {
  const iconRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    feather.replace();
  });
  return (
    <div
      className="bg-white rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-[4rem] my-auto max-w-80
        p-12 relative shadow-primary shadow-diagonal flex flex-col justify-between h-80 md:h-80"
    > 
      <h1 className="text-2xl font-bold leading-7 md:text-3xl">
        Create a new ranking topic and watch the buzz unfold!
      </h1>
      <div className="flex w-full items-center justify-between gap-4">
        <div className="font-bold text-base md:text-xl">Create a Ranker!</div>
        <div
          className="w-16 h-16 bg-blue-500 rounded-full aspect-square hover:cursor-pointer grid place-items-center animate-bounce"
          onClick={() => {
            iconRef.current!.classList.remove("animate-bounce");
            iconRef.current!.classList.add("animate-ping-once");
            setTimeout(() => {
              iconRef.current!.style.opacity = "0";
              iconRef.current!.classList.remove("animate-ping-once");
              router.push("/create-ranker");
            }, 450);
          }}
          ref={iconRef}
        >
          <svg
            className="text-white"
            width={48}
            height={48}
            data-feather="chevron-right"
          />
        </div>
      </div>
    </div>
  );
};
export default CreateRankerButton;
