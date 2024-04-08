import { getRanker } from "@/lib/actions/ranker.action";
import { getUser, getUserByClerkId } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: { id: number } }) => {
  const { userId } = auth();
  if (!userId) return redirect("/sign-in");

  const ranker = await getRanker(params.id);
  if (!ranker) {
    return redirect("/");
  }

  const user = await getUserByClerkId(userId);
  if (!user) {
    return redirect("/");
  }
  if (ranker.user_id !== user.id) {
    return redirect("/");
  }

  return <div>page</div>;
};

export default page;
