"use client";

import { useGetCampaignInfoByPeriod } from "@/hooks/getCampaign";
import { IDetailCampaign } from "@/interfaces/campaign.interface";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CardCollection from "./CardCollection";

export const CollectionDetail = () => {
  const category = [
    { label: "ALL Campaign", value: "all" },
    { label: "On going", value: "running" },
    { label: "Ended", value: "past" },
    { label: "Upcoming", value: "upcoming" },
  ];
  const [select, setSelect] = useState("all");

  const { result: runningCampaign } = useGetCampaignInfoByPeriod("running");
  const { result: endedCampaign } = useGetCampaignInfoByPeriod("past");
  const { result: upcommingCampaign } = useGetCampaignInfoByPeriod("upcoming");

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col flex-wrap w-full py-20 px-4 lg:px-32">
      <span className="text-[48px] font-semibold">NFT Collection</span>
      <Tabs
        defaultValue={select}
        className="w-full mt-8"
        onValueChange={(value) => setSelect(value)}
      >
        <TabsList className="flex flex-row flex-wrap justify-start items-center bg-transparent mb-8 gap-2">
          {category.map((item) => {
            return (
              <TabsTrigger value={item.value} key={item.value} className="p-0">
                <span
                  className={`${
                    item.value === select
                      ? "text-[#FF7000] font-semibold bg-[#461804]"
                      : "bg-[#4F4F4F] text-white"
                  } rounded-full  py-2 px-5 cursor-pointer`}
                  key={item.value}
                >
                  {item.label}
                </span>
              </TabsTrigger>
            );
          })}
        </TabsList>
        <TabsContent value="all" className="min-h-[500px]">
          {isClient && runningCampaign?.length > 0 && (
            <div className="border-b-2">
              <p className="pt-10 pb-10 text-[32px] font-semibold ">
                On going Campaign
              </p>
              <div className="grid gap-5">
                {runningCampaign?.map((item, index) => (
                  <CardCollection
                    key={index}
                    detail={item as IDetailCampaign}
                  />
                ))}
              </div>
            </div>
          )}

          {isClient && upcommingCampaign?.length > 0 && (
            <div className="border-b-2">
              <p className="pt-10 pb-10 text-[32px] font-semibold ">
                Upcoming Campaign
              </p>
              <div className="grid gap-5">
                {upcommingCampaign?.map((item, index) => (
                  <CardCollection
                    key={index}
                    detail={item as IDetailCampaign}
                  />
                ))}
              </div>
            </div>
          )}

          {isClient && endedCampaign?.length > 0 && (
            <div className="border-b-2">
              <p className="pt-10 pb-10 text-[32px] font-semibold ">
                Ended Campaign
              </p>
              <div className="grid gap-5">
                {endedCampaign?.map((item, index) => (
                  <CardCollection
                    key={index}
                    detail={item as IDetailCampaign}
                  />
                ))}
              </div>
            </div>
          )}

          {endedCampaign?.length === 0 &&
            upcommingCampaign?.length === 0 &&
            runningCampaign?.length === 0 && (
              <p className="grid place-items-center min-h-[500px]">
                No campaign found
              </p>
            )}
        </TabsContent>

        <TabsContent value="running" className="min-h-[500px]">
          {runningCampaign?.length > 0 ? (
            <div>
              <p className="py-10 text-[32px] font-semibold ">
                On going Campaign
              </p>
              <div className="grid gap-5">
                {runningCampaign?.map((item, index) => (
                  <CardCollection
                    key={index}
                    detail={item as IDetailCampaign}
                  />
                ))}
              </div>
            </div>
          ) : (
            <p className="grid place-items-center min-h-[500px]">
              No campaign found
            </p>
          )}
        </TabsContent>

        <TabsContent value="past" className="min-h-[500px]">
          {endedCampaign?.length > 0 ? (
            <>
              <p className="pt-10 pb-10 text-[32px] font-semibold ">
                Ended Campaign
              </p>
              <div className="grid gap-5">
                {endedCampaign?.map((item, index) => (
                  <CardCollection
                    key={index}
                    detail={item as IDetailCampaign}
                  />
                ))}
              </div>
            </>
          ) : (
            <p className="grid place-items-center min-h-[500px]">
              No campaign found
            </p>
          )}
        </TabsContent>

        <TabsContent value="upcoming" className="min-h-[500px]">
          {upcommingCampaign?.length > 0 ? (
            <>
              <p className="pt-10 pb-10 text-[32px] font-semibold ">
                Upcoming Campaign
              </p>
              <div className="grid gap-5">
                {upcommingCampaign?.map((item, index) => (
                  <CardCollection
                    key={index}
                    detail={item as IDetailCampaign}
                  />
                ))}
              </div>
            </>
          ) : (
            <p className="grid place-items-center min-h-[500px]">
              No campaign found
            </p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};
