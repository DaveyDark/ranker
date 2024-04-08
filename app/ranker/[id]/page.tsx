"use server";
import { getRanker } from "@/lib/actions/ranker.action";
import { redirect } from "next/navigation";
import Link from "next/link";
import PrimaryButton from "@/components/PrimaryButton";
import Ranker from "@/components/Ranker";
import { getUser } from "@/lib/actions/user.action";
import Image from "next/image";
import { addRanking } from "@/lib/actions/ranking.action";

const Page = async ({ params }: { params: { id: number } }) => {
  const ranker = await getRanker(params.id);

  if (!ranker) {
    return redirect("/");
  }

  const user = await getUser(ranker.user_id);
  if (!user) {
    return redirect("/");
  }

  async function handler(order: string[]) {
    "use server";
    await addRanking({ id: params.id, ranks: order });
    return redirect("/");
  }

  return (
    <>
      <main className="w-full h-screen flex flex-col justify-around items-center">
        <Link
          className="text-3xl font-bold text-white rounded-xl p-4 lg:text-5xl"
          href="/sign-up"
        >
          RANKER.GG
        </Link>
        <div className="bg-white rounded-2xl p-8 shadow-diagonal shadow-primary">
          <span className="flex items-center gap-2">
            <Image
              width={30}
              height={30}
              className="rounded-full"
              src={user.image_url}
              alt="avatar"
            />
            <h2 className="text-sm font-semibold">{user.name}</h2>
          </span>
          <h1 className="text-2xl font-semibold mt-6 mb-8 text-center">
            {ranker.name}
          </h1>
          <Ranker options={ranker.options} callback={handler} />
        </div>
      </main>
    </>
  );
};

export default Page;
