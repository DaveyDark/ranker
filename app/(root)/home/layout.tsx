import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import TabBar from "@/components/TabBar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ranker",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center justify-between gap-12 h-full">
      <TabBar />
      {children}
    </div>
  );
}
