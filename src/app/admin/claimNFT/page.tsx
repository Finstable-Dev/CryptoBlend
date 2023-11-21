"use client";

import InputBase from "@/components/base/input/inputbase";
import useDialog from "@/store/UIProvider/dialog.store";
import { DialogViews } from "@/store/UIProvider/dialog.type";
import { ScanLine, ScanSearch, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ClaimNFT = () => {
  const { openDialog, setDialogView } = useDialog();
  const [search, setSearch] = useState<string>("");
  const onClickOpen = () => {
    setDialogView(DialogViews.CLAIM_NFT_DIALOG);
    openDialog();
  };
  return (
    <main className="flex  h-[100dvh] w-full   flex-col bg-[rgba(0,0,0,0.75)] ">
      <div className=" w-full  flex  pt-32 px-16">
        <InputBase
          placeholder="Search"
          icon={<ScanLine color="white" size={20} />}
          icon2={<Search color="white" size={20} />}
          icon2Position="left"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className=" w-full bg-white"
        />
      </div>
      {search === "0xC0faa153aa9BA5B337DC4Ec2552e8A7E36899d15" ? (
        <div className="flex flex-col justify-center items-center h-[100%]">
          <div className=" flex flex-row  overflow-x-scroll overflow-y-scroll no-scrollbar">
            <div className="transition ease-in-out delay-150 hover:translate-y-1 duration-300 flex flex-col bg-[#292929] min-w-[299px]  sm:min-w-[398px] h-[390px]  sm:h-[515px] p-6 mr-14 mb-2 rounded-[16px] border-[#454545] border-[1px] gap-4 hover:border-[1px] hover:border-[#FFA532] hover:shadow-[1px_1px_50px_-25px_rgba(255,122,0,0.9)] ">
              <div className=" flex justify-center items-center ">
                <Image
                  className="cursor-pointer w-[270px] sm:w-[350px] h-[220px] sm:h-[351px] rounded-[16px] border-[5px] border-[#FFA532] "
                  src="/Caffeine.png"
                  width={302}
                  height={301}
                  alt="logo"
                />
              </div>
              <span className=" text-2xl font-semibold">CaffeineCraft</span>

              <div className="flex flex-row justify-between  items-center">
                <div className=" flex flex-col ">
                  <span className="text-[#FF890A] text-sm font-semibold">
                    Quantity
                  </span>
                  <span className="text-sm font-semibold">9/9 piece</span>
                </div>

                <button
                  className=" flex h-[48px] py-3 px-6 justify-center items-center rounded-full "
                  style={{
                    borderRadius: "99px",
                    background:
                      "linear-gradient(282.7deg, #FFA532 0%, #FF7000 72.62%)",
                  }}
                  onClick={() => onClickOpen()}
                >
                  <span className="text-white text-md font-medium ">claim</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[100%]">
          <ScanSearch size={40} />
          <span>Please, Search address</span>
          <span>or scan QR code</span>
        </div>
      )}
    </main>
  );
};

export default ClaimNFT;
