import { CountdownCampaign } from "@/components/nftCharacter/CountdownCampaign";
import { DetailCharacter } from "@/components/nftCharacter/DetailCharacter";
import { CollectionDetail } from "@/components/nftCollection/CollectionDetail";
import { Mouse } from "lucide-react";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[rgba(0,0,0,0.75)] ">
      <div
        className="bg-[url('/bgblack.png')] w-full  xl:h-[751px] bg-cover bg-bottom"
        style={{ boxShadow: "inset 10px -110px 100px -10px black" }}
      >
        <div className="flex flex-col-reverse xl:flex-row justify-center  xl:justify-between items-center pt-32 px-4 1xl:px-32 xl:gap-10 ">
          <CountdownCampaign />
          <DetailCharacter />
        </div>
      </div>
      <Mouse />
      <CollectionDetail />
    </main>
  );
}
