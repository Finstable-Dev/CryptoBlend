"use client";

import { Button } from "@/components/ui/button";
import useDialog from "@/store/UIProvider/dialog.store";
import Image from "next/image";

const CampaignList = () => {
  const { openDialog, setDialogView } = useDialog();

  return (
    <main className="flex  h-full w-full   flex-col bg-[rgba(0,0,0,0.75)] ">
      <div className=" w-full  flex flex-col  pt-32 px-3 lg:px-16">
        <span className=" text-[32px] font-semibold">Campaign List</span>
        {/* On going Campaign  */}
        <span className="pt-10 pb-10 text-[32px] font-semibold ">
          On going Campaign
        </span>
        <div className="flex flex-col justify-center items-start">
          <div className=" flex flex-row  overflow-x-scroll overflow-y-scroll no-scrollbar">
            <div className="transition ease-in-out delay-150 hover:translate-y-1 duration-300 flex flex-col bg-[#292929] min-w-[299px]  sm:min-w-[398px] h-full  p-6 mb-2 rounded-[16px] border-[#454545] border-[1px] gap-4 hover:border-[1px] hover:border-[#FFA532] hover:shadow-[1px_1px_50px_-25px_rgba(255,122,0,0.9)] ">
              <div className=" flex justify-center items-center ">
                <Image
                  className="cursor-pointer w-[270px] sm:w-[350px] h-[220px] sm:h-[351px] rounded-[16px] border-[5px] border-quaternary "
                  src="/Caffeine.png"
                  width={302}
                  height={301}
                  alt="logo"
                />
              </div>
              <span className=" text-2xl font-semibold">CaffeineCraft</span>
            </div>
          </div>
        </div>
        {/* Upcomming Campaign */}
        <span className="pt-10 pb-10 text-[32px] font-semibold ">
          Upcomming Campaign
        </span>
        <div className="flex flex-col justify-center items-start">
          <div className=" flex flex-row  overflow-x-scroll overflow-y-scroll no-scrollbar">
            <div className="transition ease-in-out delay-150 hover:translate-y-1 duration-300 flex flex-col bg-[#292929] min-w-[299px]  sm:min-w-[398px] h-full  p-6 mb-2 rounded-[16px] border-[#454545] border-[1px] gap-4 hover:border-[1px] hover:border-[#FFA532] hover:shadow-[1px_1px_50px_-25px_rgba(255,122,0,0.9)] ">
              <div className=" flex justify-center items-center ">
                <Image
                  className="cursor-pointer w-[270px] sm:w-[350px] h-[220px] sm:h-[351px] rounded-[16px] border-[5px] border-quaternary "
                  src="/coffeecub.png"
                  width={302}
                  height={301}
                  alt="logo"
                />
              </div>
              <span className=" text-2xl font-semibold">CaffeineCraft</span>
            </div>
          </div>
        </div>
        {/*  Ended  Campaign */}
        <span className="pt-10 pb-10 text-[32px] font-semibold ">
          Ended Campaign
        </span>
        <div className="flex flex-col justify-center items-start">
          <div className=" flex flex-row  overflow-x-scroll overflow-y-scroll no-scrollbar">
            <div className="transition ease-in-out delay-150 hover:translate-y-1 duration-300 flex flex-col bg-[#292929] min-w-[299px]  sm:min-w-[398px] h-full  p-6 mb-2 rounded-[16px] border-[#454545] border-[1px] gap-4 hover:border-[1px] hover:border-[#FFA532] hover:shadow-[1px_1px_50px_-25px_rgba(255,122,0,0.9)] ">
              <div className=" flex justify-center items-center ">
                <Image
                  className="cursor-pointer w-[270px] sm:w-[350px] h-[220px] sm:h-[351px] rounded-[16px] border-[5px] border-quaternary "
                  src="/claim.png"
                  width={302}
                  height={301}
                  alt="logo"
                />
              </div>
              <span className=" text-2xl font-semibold">CaffeineCraft</span>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center pb-20">
          <Button
            type="button"
            variant="ghost"
            className="lg:border-[1px] border-[0px] p-3  font-semibold  w-[154px] h-[48px] mt-20"
            style={{
              borderRadius: "99px",
              background:
                "linear-gradient(282.7deg, #FFA532 0%, #FF7000 72.62%)",
            }}
          >
            <h5 className=" text-white font-medium">See more</h5>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default CampaignList;
