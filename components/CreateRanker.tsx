"use client";
import { Reorder } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ListItem from "./ListItem";
import PrimaryButton from "./PrimaryButton";
import Image from "next/image";
import { IRankerTemplate } from "@/database/schema/ranker_template.schema";
import feather from "feather-icons";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";

interface Props {
  userImg: string;
  userName: string;
  rankerName: string;
  rankerOptions: string[];
  randomRankerCallback: () => Promise<IRankerTemplate>;
  submitRankerCallback: (
    name: string,
    options: string[],
  ) => Promise<number | undefined>;
}

const CreateRanker = (props: Props) => {
  const [rankerName, setRankerName] = useState<string>(props.rankerName);
  const [rankerOptions, setRankerOptions] = useState<string[]>(
    props.rankerOptions,
  );
  const [newOption, setNewOption] = useState<string>("");

  const router = useRouter();
  const shuffleButton = useRef<HTMLButtonElement>(null);

  const toaster = useToast();

  function handler() {
    if (!rankerName) {
      toaster.toast({
        title: "Please enter a ranker name",
        variant: "destructive",
      });
      return;
    }
    if (rankerName.length > 50) {
      toaster.toast({
        title: "Please enter a ranker name with less than 50 characters",
        variant: "destructive",
      });
      return;
    }
    if (rankerOptions.length < 2) {
      toaster.toast({
        title: "Please enter at least 2 options",
        variant: "destructive",
      });
      return;
    }
    props.submitRankerCallback(rankerName, rankerOptions).then((id) => {
      if (!id) router.push("/");
      router.push(`/home`);
    });
  }

  function handleRandomizeClick() {
    const button = document.querySelector(".spin-button");
    if (!button) return;
    button.classList.add("animate-spin-once");
    button.addEventListener("animationend", async () => {});
  }

  const addRankerOption = () => {
    if (!newOption) {
      toaster.toast({
        title: "Option cannot be empty",
        variant: "destructive",
      });
      return;
    }
    if (newOption.length > 50) {
      toaster.toast({
        title: "Please enter an option with less than 50 characters",
        variant: "destructive",
      });
      return;
    }
    if (rankerOptions.includes(newOption)) {
      toaster.toast({
        title: "Option already exists",
        variant: "destructive",
      });
      return;
    }
    if (rankerOptions.length >= 10) {
      toaster.toast({
        title: "You can only have up to 10 options",
        variant: "destructive",
      });
      return;
    }
    setRankerOptions([...rankerOptions, newOption]);
    setNewOption("");
  };

  useEffect(() => feather.replace(), []);

  return (
    <>
      <div className="bg-white p-6 rounded-xl flex flex-col gap-4 m-4">
        <span className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            <Image
              width={36}
              height={36}
              className="rounded-full"
              src={props.userImg}
              alt="avatar"
            />
            <h2 className="text-sm font-semibold">{props.userName}</h2>
          </div>
          <div>
            <button
              className="bg-primary p-4 rounded-full spin-button"
              onClick={handleRandomizeClick}
              ref={shuffleButton}
              onAnimationEnd={() => {
                shuffleButton.current!.classList.remove("animate-spin-once");
                props.randomRankerCallback().then((ranker) => {
                  setRankerName(ranker.name);
                  setRankerOptions(ranker.options);
                });
              }}
            >
              <svg
                className="text-white"
                height={24}
                width={24}
                data-feather="refresh-cw"
              />
            </button>
          </div>
        </span>
        <div className="bg-secondary p-6 rounded-xl flex flex-col gap-4">
          <p className="text-white text-2xl font-semibold text-center">Topic</p>
          <input
            className="text-md bg-transparent font-semibold text-white border-secondary-foreground border-2 
            rounded-xl p-4 focus:outline-none focus:border-primary"
            placeholder="Enter ranker topic"
            value={rankerName}
            onChange={(v) => setRankerName(v.target.value)}
          />
        </div>
      </div>
      <div className="bg-white rounded-2xl p-4 shadow-diagonal shadow-primary">
        <div className="bg-secondary p-4 rounded-2xl flex justify-between gap-2 items-center">
          <input
            className="bg-secondary-foreground text-white px-2 py-4 text-center rounded-3xl
            focus:outline-none focus:border-primary border-2 border-transparent font-semibold"
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addRankerOption()}
          />
          <button
            className="bg-primary p-2 rounded-full"
            onClick={addRankerOption}
          >
            <svg
              className="text-white"
              height={24}
              width={24}
              data-feather="plus"
            ></svg>
          </button>
        </div>
        <Reorder.Group
          values={rankerOptions}
          onReorder={setRankerOptions}
          as="ul"
          layoutScroll
          className="my-5 text-white bg-secondary p-4 rounded-3xl flex flex-col 
          gap-1 custom-scrollbar"
        >
          {rankerOptions.map((opt, i) => (
            <Reorder.Item value={opt} key={opt} className="mx-auto">
              <ListItem
                title={opt}
                count={i + 1}
                editable
                index={i}
                onDel={(i: number) => {
                  setRankerOptions(
                    rankerOptions.filter((_, index) => index !== i),
                  );
                }}
              />
            </Reorder.Item>
          ))}
        </Reorder.Group>
        <PrimaryButton
          title={"Submit"}
          icon="chevron-right"
          onSubmit={handler}
        />
      </div>
    </>
  );
};

export default CreateRanker;
