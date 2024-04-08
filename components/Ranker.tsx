"use client";
import { Reorder } from "framer-motion";
import { useState } from "react";
import ListItem from "./ListItem";
import PrimaryButton from "./PrimaryButton";

const Ranker = (props: {
  options: string[];
  callback: (order: string[]) => void;
}) => {
  const [options, setOptions] = useState(props.options);

  function handler() {
    props.callback(options);
  }

  return (
    <>
      <Reorder.Group
        values={options}
        onReorder={setOptions}
        as="ul"
        layoutScroll
        className="my-5 text-white bg-secondary px-8 py-4 rounded-3xl flex flex-col gap-1 max-h-[50vh] overflow-y-scroll"
      >
        {options.map((opt, i) => (
          <Reorder.Item value={opt} key={opt}>
            <ListItem title={opt} count={i + 1} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
      <PrimaryButton title={"Submit"} icon="chevron-right" onSubmit={handler} />
    </>
  );
};

export default Ranker;
