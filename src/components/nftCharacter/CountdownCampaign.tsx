import Image from "next/image";
import { CountDown } from "./CountDown";

export const CountdownCampaign = () => {
  return (
    <div className=" flex flex-row flex-wrap break-words max-w-[790px] w-full border-[1px] rounded-[16px] p-10 gap-10">
      <Image
        className="cursor-pointer w-[365px] h-[365px]"
        src="/Caffeine.png"
        width={365}
        height={365}
        alt="logo"
      />
      <div className=" flex relative flex-col flex-1 h-[365px] gap-y-5">
        <span className="text-[32px] font-semibold">
          CaffeineCraft Campaign
        </span>
        <div className="flex w-[80px] justify-center items-center  rounded-full bg-[#FF7000]">
          <h4 className=" text-white font-semibold px-[6px] py-1">9 Piece</h4>
        </div>
        <div className=" absolute bottom-0  w-full">
          <h3>END CAMPAIGN</h3>
          <CountDown />
        </div>
      </div>
    </div>
  );
};
