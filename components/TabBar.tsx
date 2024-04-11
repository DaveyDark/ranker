"use client";

import { useState } from "react";
import Tab from "./Tab";
import { usePathname, useRouter } from "next/navigation";
import { formUrlQuery } from "@/lib/utils";

const TabBar = ({ tab }: { tab: string }) => {
  const [active, setActive] = useState(tab);
  const router = useRouter();
  const pathname = usePathname();

  const setActiveCallback = (title: string) => {
    router.push(formUrlQuery({ params: pathname, key: "tab", value: title }));
    setActive(title);
  };

  return (
    <div className="lg_hidden flex relative">
      <div
        className={`p-3 h-full absolute top-0 ${
          active == "Home" ? "left-0 right-[45%]" : "left-[45%] right-0"
        } z-10 transition-all duration-300`}
      >
        <div className="bg-primary rounded-full min-w-full min-h-full z-10"></div>
      </div>
      <div className="lg:hidden flex justify-center relative text-white p-2">
        <div className=" flex bg-[#253143] px-2 py-2 rounded-full gap-2">
          <Tab
            title="Home"
            active={active}
            setActive={setActiveCallback}
            icon="home"
          />
          <Tab
            title="Inbox"
            active={active}
            setActive={setActiveCallback}
            icon="inbox"
          />
        </div>
      </div>
    </div>
  );
};

export default TabBar;
