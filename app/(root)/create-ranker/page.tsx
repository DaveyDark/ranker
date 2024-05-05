"use server";
import { redirect } from "next/navigation";
import Image from "next/image";
import { auth } from "@clerk/nextjs";
import { getRandomRankerTemplate } from "@/lib/actions/ranker_template.action";
import CreateRanker from "@/components/CreateRanker";
import { getUserByClerkId } from "@/lib/actions/user.action";
import { IRankerTemplate } from "@/database/schema/ranker_template.schema";
import { createRanker } from "@/lib/actions/ranker.action";

const Page = async () => {
  const { userId } = auth();

  const user = await getUserByClerkId(userId!);

  const ranker = await getRandomRankerTemplate();

  if (!ranker || !user) {
    redirect("/");
  }

  async function callback(): Promise<IRankerTemplate> {
    "use server";
    const rankerTemplate = await getRandomRankerTemplate();
    return rankerTemplate || ({} as IRankerTemplate);
  }

  async function submitRanker(
    name: string,
    options: string[],
  ): Promise<number | undefined> {
    "use server";
    try {
      const newRanker = await createRanker({ name, options, userId: user!.id });

      if (!newRanker) throw new Error("Error creating ranker");

      return newRanker[0].id;
    } catch (e) {
      console.error(`Error creating ranker: ${e}`);
      return undefined;
    }
  }

  return (
    <>
      <main
        className="w-full px-4 min-h-screen flex flex-col lg:flex-row 
        lg:justify-center lg:min-h-[80vh] lg:gap-24 justify-around items-center"
      >
        <CreateRanker
          userName={user.name}
          userImg={user.image_url}
          rankerName={ranker.name}
          rankerOptions={ranker.options}
          randomRankerCallback={callback}
          submitRankerCallback={submitRanker}
        />
      </main>
    </>
  );
};

export default Page;
