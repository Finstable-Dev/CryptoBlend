import { CountdownCampaign } from "@/components/nftCharacter/CountdownCampaign";
import { DetailCharacter } from "@/components/nftCharacter/DetailCharacter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <div className="flex flex-row justify-between gap-8 w-full">
        <CountdownCampaign />
        <DetailCharacter />
      </div>
    </main>
  );
}
