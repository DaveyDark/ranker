"use client";
import feather from "feather-icons";
import React, { useEffect } from "react";

interface Props {
  active: string;
  setActive: (title: string) => void;
  title: string;
  icon: string;
}

const Tab = ({ active, title, icon, setActive }: Props) => {
  useEffect(() => feather.replace);
  return (
    <div
      className={`flex items-center gap-1 p-3 cursor-pointer rounded-3xl z-20 ${
        active == title ? "tab-inactive" : "tab-inactive"
      }`}
      onClick={() => {
        setActive(title);
      }}
    >
      <svg width={24} height={24} data-feather={icon} />
      {title}
    </div>
  );
};

export default Tab;
