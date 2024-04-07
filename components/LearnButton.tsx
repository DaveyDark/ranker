"use client";
import React from "react";

const LearnButton = () => {
  return (
    <button
      className="bg-primary text-white p-4 rounded-3xl flex gap-4 font-semibold"
      onClick={() => {
        alert("todo");
      }}
    >
      <svg data-feather="book-open" width={24} height={24} />
      Learn
    </button>
  );
};

export default LearnButton;
