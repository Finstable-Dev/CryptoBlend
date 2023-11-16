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
    <div className=" flex flex-col items-center max-w-[430px] w-full border-[1px] rounded-[16px] py-10 ">
      <div>
        <Image
          className="w-[160px] h-[160px]"
          src="/charactor.png"
          width={160}
          height={160}
          alt="logo"
        />
      </div>

      <div>
        <span className=" text-[#FF7000] text-[32px] font-semibold">
          NFT Character
        </span>
        <div className=" flex flex-row justify-center items-center ">
          <p className=" text-[14px] text-[#5D5D5D] font-medium ">
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

      <div className=" flex flex-row justify-center items-center pt-7 pb-5">
        <h2 className="text-[#5D5D5D] font-medium mr-3">LEVEL:</h2>

        <Image
          className="w-[19.13px] h-[21px] mr-2"
          src="/Bronze.png"
          width={19.13}
          height={21}
          alt="logo"
        />
        <h2 className="text-[#5D5D5D] font-medium">Bronze</h2>
      </div>

      <div className=" flex flex-row relative justify-center items-center w-fll gap-x-1 pt-7">
        <h6>EXP</h6>
        <Progress
          color="white"
          value={progress}
          className="w-[289px] h-[10px]"
        />
        <h6>100%</h6>
        <div className=" text-[10px] font-semibold absolute top-4 left-14">
          10%
        </div>
      </div>
    </div>
  );
};
