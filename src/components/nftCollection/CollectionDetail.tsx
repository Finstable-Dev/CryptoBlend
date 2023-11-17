"use client";

import Image from "next/image";
import { useState } from "react";
import { CountDownNfr } from "./CountDownNfr";

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
    <div className=" flex flex-col flex-wrap  w-full py-20 px-32 ">
      <span className=" text-[48px] font-semibold">NFT Collection</span>
      <div className=" flex flex-row  justify-start items-center gap-3 pt-8">
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
      <span className="pt-10 pb-10 text-[32px] font-semibold">
        On going Campaign
      </span>
      <div className="flex flex-row flex-nowrap   w-full ">
        <div className=" flex flex-col my-auto max-w-[250px] h-[515px] w-full justify-between  mr-14">
          <div className="flex flex-col  gap-2 h-full">
            <Image
              className="cursor-pointer w-[170px] h-[170px] rounded-[16px] border-[5px] border-[#FFA532]"
              src="/Caffeine.png"
              width={170}
              height={170}
              alt="logo"
            />
            <span className=" text-2xl font-semibold">CaffeineCraft</span>
            <span className="text-tertiary text-md font-semibold">
              NFT Colletion
            </span>
            <span className="text-md font-semibold">2</span>
            <span className="text-tertiary text-md font-semibold">Used</span>
            <span className="text-md font-semibold">1</span>
          </div>

          <div className="flex flex-col">
            <span className="text-md font-semibold pb-2">
              End time Campaign
            </span>
            <div className=" rounded-full border-[1.86px] border-[#454545] text-center">
              <span className=" text-tertiary text-[32px] font-semibold">
                <CountDownNfr date="12/31/2023 23:59:59" />
              </span>
            </div>
          </div>
        </div>
        {/*  */}
        <div className=" flex flex-row  overflow-x-scroll overflow-y-scroll max-[1024px]:no-scrollbar  min-[1024px]:scrollbar">
          {mockArrayData.map((item, index) => {
            return (
              <>
                <div
                  key={item.id}
                  className=" flex flex-col bg-[#292929]  min-w-[398px] h-[515px] p-6 mr-14 mb-2 rounded-[16px] border-[#454545] border-[1px] gap-4"
                >
                  <div className=" flex justify-center items-center ">
                    <Image
                      className="cursor-pointer w-[350px] h-[351px] rounded-[16px] border-[5px] border-[#FFA532]"
                      src={item.img}
                      width={302}
                      height={301}
                      alt="logo"
                    />
                  </div>
                  <span className=" text-2xl font-semibold">{item.name}</span>
                  {item.claimed === true ? (
                    <div className=" flex flex-col ">
                      <span className="text-[#FF890A] text-sm font-semibold">
                        Quantity
                      </span>
                      <span className="text-sm font-semibold">
                        {item.count}/9 piece
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-row justify-between  items-center">
                      <div className=" flex flex-col ">
                        <span className="text-[#FF890A] text-sm font-semibold">
                          Quantity
                        </span>
                        <span className="text-sm font-semibold">
                          {item.count}/9 piece
                        </span>
                      </div>

                      <button
                        className=" flex h-[48px] py-3 px-6 justify-center items-center rounded-full "
                        style={{
                          borderRadius: "99px",
                          background:
                            "linear-gradient(282.7deg, #FFA532 0%, #FF7000 72.62%)",
                        }}
                      >
                        <span className="text-white text-md font-medium">
                          claim
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </div>
        {/*  */}
      </div>
    </div>
  );
};
