"use client";

import InputBase from "@/components/base/input/inputbase";
import { Button } from "@/components/ui/button";
import useDialog from "@/store/UIProvider/dialog.store";
import { Minus, Plus, ScanLine, Search } from "lucide-react";
import Link from "next/link";

import { useState } from "react";

const AddPoint = () => {
  const [name, setName] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  return (
    <main className="flex   flex-col  h-full w-full items-center justify-center  bg-[rgba(0,0,0,0.75)] ">
      <div className="max-w-[1000px] w-full h-[100dvh]  flex flex-col  pt-32 px-3 lg:px-16 gap-5">
        <div className="pb-66 flex flex-row items-center gap-1">
          <Link href="/admin">
            <h6 className=" cursor-pointer  text-transparent bg-clip-text bg-gradient-to-r from-[#FFA532] to-[#FF7000]">
              Admin
            </h6>
          </Link>
          <h6 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFA532] to-[#FF7000]">
            /
          </h6>
          <h6>Add Point</h6>
        </div>
        <span className=" text-[32px] font-semibold">Add Point</span>
        <div className="flex flex-col gap-2">
          <h2 className="font-medium">Address</h2>
          <InputBase
            placeholder="Search Address"
            icon={<ScanLine color="white" size={20} />}
            icon2={<Search color="white" size={20} />}
            icon2Position="left"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className=" w-full  rounded-xl "
          />
        </div>

        <div className="flex flex-col gap-2 pt-6">
          <h2 className="font-medium">Amount of point</h2>
          <div className=" flex flex-row gap-2 rounded-[48px] border-[1px] border-[#BDBDBD] bg-[#3D3D3D] max-w-[100px] w-full p-3">
            <Minus
              onClick={() => {
                if (count > 0) {
                  setCount(count - 1);
                }
              }}
              className={`${
                count === 0 ? " cursor-not-allowed" : " cursor-pointer"
              }`}
              color={count === 0 ? "#292929" : "#ffffff"}
              strokeWidth={1}
            />
            {count}
            <Plus
              onClick={() => {
                if (count < 9) {
                  setCount(count + 1);
                }
              }}
              color={count === 9 ? "#292929" : "#ffffff"}
              className={`${
                count === 9 ? " cursor-not-allowed" : " cursor-pointer"
              }`}
              strokeWidth={1}
            />
          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-20">
          <Button
            type="button"
            variant="ghost"
            className="lg:border-[1px] border-[0px] p-5 font-semibold "
            style={{
              borderRadius: "99px",
              background:
                "linear-gradient(282.7deg, #FFA532 0%, #FF7000 72.62%)",
            }}
          >
            <h4 className=" text-white font-medium">Add Point</h4>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default AddPoint;
