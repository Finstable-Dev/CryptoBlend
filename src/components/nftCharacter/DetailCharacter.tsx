"use client";

import { Copy } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useAccount } from "wagmi";
import { Progress } from "../ui/progress";
import { toast } from "../ui/use-toast";

export const DetailCharacter = () => {
  const { address } = useAccount();
  const [progress, setProgress] = React.useState(13);
  const [shortAddress, setShortAddress] = React.useState<string>();
  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      description: "Copy Success",
    });
  };

  React.useEffect(() => {
    if (address) {
      setShortAddress(`${address.slice(0, 6)} ... ${address.slice(-4)}`);
    }
  }, [address]);

  return (
    <div
      className=" flex flex-col relative justify-center text-center items-center max-w-[430px] h-[450px] w-full border-[1px] rounded-[16px] py-10 bg-[#18181b] border-[#FFA532] opacity-[.9]"
      style={{
        boxShadow: "0px 0px 8px 3px rgba(255, 112, 0, 0.20)",
      }}
    >
      <div className=" absolute right-18 top-0  w-[232px] h-[232px] bg-[#FF7000] opacity-[.3] blur-[100px] z-10" />

      <div className="z-20">
        <Image
          className="w-[160px] h-[160px] "
          src="/charactor2.png"
          width={160}
          height={160}
          alt="logo"
        />
      </div>

      <div className=" w-full">
        <span className=" text-[#ffffff] text-[32px] font-semibold">
          NFT Character
        </span>
        <div className=" flex flex-row justify-center items-center ">
          <p className=" text-[14px] text-[#f6f6f6] font-medium ">
            {shortAddress || "0xC0...9d15"}
          </p>
          <Copy
            onClick={() => {
              copyText(address || "");
            }}
            className=" cursor-pointer"
            size={16}
          />
        </div>
      </div>

      <div className=" flex flex-row justify-center items-center pt-7 pb-5 ">
        <h2 className="text-[#f6f6f6] font-medium mr-3">LEVEL:</h2>

        <Image
          className=" w-[35px] h-[35px]  mr-2"
          src="/Bronze.png"
          width={35}
          height={35}
          alt="logo"
        />
        <h2 className="text-[#f6f6f6] font-medium">Bronze</h2>
      </div>

      <div className=" flex flex-row relative justify-center items-center w-fll gap-x-1 pt-7 ">
        <h6 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFA532] to-[#FF7000]">
          EXP
        </h6>
        <Progress
          color="white"
          value={progress}
          className=" w-[250px] lg:w-[289px] h-[10px]"
        />
        <h6 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFA532] to-[#FF7000]">
          100%
        </h6>
        <div className=" text-[10px] font-semibold absolute top-4 left-14 text-transparent bg-clip-text bg-gradient-to-r from-[#FFA532] to-[#FF7000]">
          10%
        </div>
      </div>
    </div>
  );
};
