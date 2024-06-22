import React from "react";
import Link from "next/link";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col gap-12 items-center justify-center h-screen w-full">
      <Link
        className="text-3xl font-bold text-white rounded-xl p-4 lg:text-5xl"
        href="/"
      >
        RANKER.FUN
      </Link>
      {children}
    </div>
  );
};

export default Layout;
