"use client";

import CampaignListItems from "@/components/nftCharacter/CampaignListItems";
import CardCollection from "@/components/nftCollection/CardCollection";
import { Button } from "@/components/ui/button";
import { useGetCampaignInfoByPeriod } from "@/hooks/getCampaign";
import { IDetailCampaign } from "@/interfaces/campaign.interface";
import useDialog from "@/store/UIProvider/dialog.store";
import Image from "next/image";
import { useEffect, useState } from "react";

const CampaignList = () => {
  const { openDialog, setDialogView } = useDialog();

  const { result: runningCampaign } = useGetCampaignInfoByPeriod("running");
  const { result: endedCampaign } = useGetCampaignInfoByPeriod("past");
  const { result: upcommingCampaign } = useGetCampaignInfoByPeriod("upcoming");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <main className="flex  h-full w-full   flex-col bg-[hsla(0,0%,0%,1)] ">
      <div className=" w-full  flex flex-col  py-32 px-3 lg:px-16 gap-4">
        <span className=" text-[32px] font-semibold">Campaign List</span>
        {/* On going Campaign  */}
        {isClient && runningCampaign?.length > 0 ? (
          <div>
            <p className="py-10 text-[32px] font-semibold ">
              On going Campaign
            </p>
            <div className="flex flex-row w-full overflow-scroll gap-5">
              {runningCampaign?.map((item, index) => (
                <CampaignListItems
                  key={index}
                  detail={item as IDetailCampaign}
                />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <p className="py-10 text-[32px] font-semibold ">
              On going Campaign
            </p>
            <p className="grid place-items-center min-h-[500px]">
              No campaign found
            </p>
          </div>
        )}

        {isClient && endedCampaign?.length > 0 ? (
          <>
            <p className="pt-10 pb-10 text-[32px] font-semibold ">
              Ended Campaign
            </p>
            <div className="flex flex-row w-full overflow-scroll  gap-5">
              {endedCampaign?.map((item, index) => (
                <CampaignListItems
                  key={index}
                  detail={item as IDetailCampaign}
                />
              ))}
            </div>
          </>
        ) : (
          <div>
            <p className="py-10 text-[32px] font-semibold ">Ended Campaign</p>
            <p className="grid place-items-center min-h-[500px]">
              No campaign found
            </p>
          </div>
        )}

        {isClient && upcommingCampaign?.length > 0 ? (
          <>
            <p className="pt-10 pb-10 text-[32px] font-semibold ">
              Upcoming Campaign
            </p>
            <div className="flex flex-row w-full overflow-scroll  gap-10">
              {upcommingCampaign?.map((item, index) => (
                <CampaignListItems
                  key={index}
                  detail={item as IDetailCampaign}
                />
              ))}
            </div>
          </>
        ) : (
          <div>
            <p className="py-10 text-[32px] font-semibold ">
              Upcoming Campaign
            </p>
            <p className="grid place-items-center min-h-[500px]">
              No campaign found
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default CampaignList;
