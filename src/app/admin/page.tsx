"use client";

import InputBase from "@/components/base/input/inputbase";
import { CoffeeIcon } from "@/components/svgIcon/Coffee";

import { Button } from "@/components/ui/button";
import useDialog from "@/store/UIProvider/dialog.store";
import { DialogViews } from "@/store/UIProvider/dialog.type";
import {
  ArrowDownSquare,
  CopyPlus,
  ScanLine,
  ScanSearch,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEnsAddress } from "wagmi";

const ClaimNFT = () => {
  const { openDialog, setDialogView } = useDialog();

  const [search, setSearch] = useState<string>("");
  const onClickOpen = () => {
    setDialogView(DialogViews.CLAIM_NFT_DIALOG);
    openDialog();
  };

  return (
    <main className="flex   w-full   flex-col bg-[rgba(0,0,0,0.75)] ">
      <div className=" w-full h-[100dvh]  flex flex-col justify-center items-center px-3 lg:px-16 gap-16">
        <span className=" text-[32px] font-semibold">Claim NFT</span>
        <div className=" w-full  flex flex-col sm:flex-row justify-center items-center text-center  gap-5">
          <div className="flex flex-col   w-[305px]  cursor-pointer  h-[250px] justify-center items-center  bg-[#3D3D3D] rounded-xl transition ease-in-out delay-150 hover:translate-1 duration-300 hover:border-[3px] hover:border-[#FFA532] hover:shadow-[1px_1px_50px_-25px_rgba(255,122,0,0.9)] ">
            <Link
              href="/admin/claimNFT"
              className="w-full h-full flex flex-col gap-7 justify-center items-center text-center  py-[22px] px-[32px]"
            >
              <ArrowDownSquare strokeWidth={1} size={120} />
              <h1 className="flex justify-center items-center font-medium">
                Claim NFT
              </h1>
            </Link>
          </div>

          <div className="flex flex-col   w-[305px]  cursor-pointer  h-[250px] justify-center items-center  bg-[#3D3D3D] rounded-xl transition ease-in-out delay-150 hover:translate-1 duration-300 hover:border-[3px] hover:border-[#FFA532] hover:shadow-[1px_1px_50px_-25px_rgba(255,122,0,0.9)] ">
            <Link
              href="/admin/addpoint"
              className="w-full h-full flex flex-col gap-7 justify-center items-center text-center  py-[22px] px-[32px]"
            >
              <CopyPlus strokeWidth={1} size={120} />
              <h1 className="flex justify-center items-center font-medium">
                Add point
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ClaimNFT;
