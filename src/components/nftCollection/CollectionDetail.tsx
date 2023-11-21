"use client";

import { useState } from "react";
import CardCollection from "./CardCollection";

export const CollectionDetail = () => {
  const mockData = ["ALL Campaign", "On going", "Ended", "Upcoming"];
  const [select, setSelect] = useState("ALL Campaign");
  const mockArrayData = [
    {
      id: 1,
      img: "/Caffeine.png",
      name: "CaffeineCraft",
      count: 5,
      claimed: false,
      category: "CaffeineCraft",
    },
    {
      id: 2,
      img: "/Caffeine.png",
      name: "CaffeineCraft",
      count: 5,
      claimed: false,
      category: "CaffeineCraft",
    },
    {
      id: 3,
      img: "/Caffeine.png",
      name: "CaffeineCraft",
      count: 5,
      claimed: false,
      category: "CaffeineCraft",
    },
    {
      id: 4,
      img: "/Caffeine.png",
      name: "CaffeineCraft",
      count: 5,
      claimed: false,
      category: "CaffeineCraft",
    },
    {
      id: 5,
      img: "/claim.png",
      name: "CaffeineCraft",
      count: 9,
      claimed: true,
      category: "CaffeineCraft",
    },
    {
      id: 6,
      img: "/claim.png",
      name: "CaffeineCraft",
      count: 8,
      claimed: true,
      category: "CaffeineCraft",
    },
    {
      id: 7,
      img: "/claim.png",
      name: "CaffeineCraft",
      count: 8,
      claimed: true,
      category: "CaffeineCraft",
    },
    {
      id: 8,
      img: "/claim.png",
      name: "CaffeineCraft",
      count: 8,
      claimed: true,
      category: "CaffeineCraft",
    },
    {
      id: 9,
      img: "/claim.png",
      name: "CaffeineCraft",
      count: 8,
      claimed: true,
      category: "CaffeineCraft",
    },
  ];
  return (
    <div className=" flex flex-col flex-wrap  w-full py-20 px-4 lg:px-32 ">
      <span className=" text-[48px] font-semibold">NFT Collection</span>
      <div className=" flex flex-row flex-wrap  justify-start items-center gap-3 pt-8">
        {mockData.map((item) => {
          return (
            <span
              className={`${
                item === select
                  ? "text-[#FF7000] font-semibold bg-[#461804]"
                  : "bg-[#4F4F4F] text-white"
              } rounded-full  py-2 px-5 cursor-pointer`}
              onClick={() => {
                setSelect(item);
              }}
              key={item}
            >
              {item}
            </span>
          );
        })}
      </div>
      {/* Collection List */}
      <span className="pt-10 pb-10 text-[32px] font-semibold ">
        On going Campaign
      </span>

      <CardCollection data={mockArrayData} />
    </div>
  );
};
