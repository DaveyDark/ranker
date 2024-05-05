import { UserButton } from "@clerk/nextjs";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between align-center p-8 max-w-7xl mx-auto absolute left-0 right-0">
      <Link
        className="text-2xl lg:text-3xl font-bold text-white p-4"
        href="/sign-up"
      >
        RANKER.GG
      </Link>
      <div className="my-auto scale-125 lg:scale-150 bg-gray p-1 rounded-full">
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
