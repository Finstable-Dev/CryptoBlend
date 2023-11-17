import { CountdownCampaign } from "@/components/nftCharacter/CountdownCampaign";
import { DetailCharacter } from "@/components/nftCharacter/DetailCharacter";
import { CollectionDetail } from "@/components/nftCollection/CollectionDetail";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  ">
      <div className="bg-[url('/bgblack.png')] w-full h-[751px] bg-cover bg-bottom bg-no-repeat ">
        <div className="flex  flex-row justify-between pt-32 px-32 ">
          <CountdownCampaign />
          <DetailCharacter />
        </div>
      </div>

      <CollectionDetail />
    </main>
  );
}
