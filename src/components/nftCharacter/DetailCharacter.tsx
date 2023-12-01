"use client";

import { useGetMemberData } from "@/hooks/getMemberData";
import { IMetadata } from "@/interfaces/campaign.interface";
import readMetadataService from "@/services/readMetadata.service";
import { Copy, User2 } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useEffect } from "react";
import { useAccount } from "wagmi";
import { Progress } from "../ui/progress";
import { toast } from "../ui/use-toast";

export const DetailCharacter = () => {
  const { address } = useAccount();
  const [progress, setProgress] = React.useState(13);
  const [shortAddress, setShortAddress] = React.useState<string>();
  const { memberNftId, tokenURI } = useGetMemberData();
  const [metadata, setMetadata] = React.useState<IMetadata>();
  const [isClient, setIsClient] = React.useState(false);

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

  const getMetadata = useCallback(async () => {
    const res = await readMetadataService.readMetadata(tokenURI as string);
    setMetadata(res.data);
  }, [tokenURI]);

  useEffect(() => {
    if (tokenURI) {
      getMetadata();
    }
  }, [tokenURI, getMetadata]);

  useEffect(() => {
    console.log("metadata", metadata);
  }, [metadata]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className=" flex flex-col relative justify-center text-center items-center max-w-[430px] h-[450px] w-full border-[1px] rounded-[16px] py-10 bg-[#18181b] border-[#FFA532] opacity-[.9]"
      style={{
        boxShadow: "0px 0px 8px 3px rgba(255, 112, 0, 0.20)",
      }}
    >
      <div className=" absolute right-18 top-0  w-[232px] h-[232px] bg-[#FF7000] opacity-[.3] blur-[100px] z-10" />

      <div className="relative z-20 w-[170px] h-[170px] rounded-full bg-gradient-to-r from-[#FF7000] to-[#FFA532] grid place-items-center">
        <div
          className="absolute animate-pulse inline-flex h-full w-full rounded-full"
          style={{
            boxShadow: "0px 0px 11px 6px rgba(244, 190, 79, 0.30)",
          }}
        ></div>
        {isClient && memberNftId === null ? (
          <User2 size={100} />
        ) : (
          <Image
            className="w-[160px] h-[160px] rounded-full"
            src={
              memberNftId === null && isClient
                ? ""
                : (metadata?.image as string)
            }
            width={160}
            height={160}
            alt="logo"
          />
        )}
      </div>

      <div className=" w-full">
        <span className=" text-[#ffffff] text-[32px] font-semibold">
          {isClient && memberNftId === null ? "No Member" : metadata?.name}
        </span>
        <div className=" flex flex-row justify-center items-center ">
          <p className=" text-[14px] text-[#f6f6f6] font-medium ">
            {shortAddress || "Please Connect wallet "}
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
        <h2 className="text-[rgb(246,246,246)] font-medium mr-3">LEVEL:</h2>
        {isClient && memberNftId === null ? (
          <h2 className="text-[#f6f6f6] font-medium">None</h2>
        ) : (
          <>
            <Image
              className={`w-[35px] h-[35px] mr-2 ${
                !metadata?.attributes[0].value && "hidden"
              }`}
              src={`/rank/${metadata?.attributes[0].value}.png`}
              width={35}
              height={35}
              alt="logo"
            />
            <h2 className="text-[#f6f6f6] font-medium capitalize">
              {metadata?.attributes[0].value}
            </h2>
          </>
        )}
      </div>

      {isClient && memberNftId !== null && (
        <div className=" flex flex-row relative justify-center items-center w-fll gap-x-1 pt-7 ">
          <h6 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFA532] to-[#FF7000]">
            EXP
          </h6>
          <Progress
            color="white"
            value={progress}
            className="w-[250px] lg:w-[289px] h-[10px]"
          />
          <h6 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFA532] to-[#FF7000]">
            100%
          </h6>
          <div className=" text-[10px] font-semibold absolute top-4 left-14 text-transparent bg-clip-text bg-gradient-to-r from-[#FFA532] to-[#FF7000]">
            10%
          </div>
        </div>
      )}
    </div>
  );
};
