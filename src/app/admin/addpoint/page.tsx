"use client";

import InputBase from "@/components/base/input/inputbase";
import { Button } from "@/components/ui/button";
import { addressList } from "@/constants/addressList";
import { GetrunningCampaing } from "@/hooks/getCampaign";
import useDialog from "@/store/UIProvider/dialog.store";
import { DialogStates, DialogViews } from "@/store/UIProvider/dialog.type";
import { CryptoCoffPoint__factory } from "@/typechain-types";
import { Minus, Plus, ScanLine } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useContractWrite } from "wagmi";

const AddPoint = () => {
  const { resultScan, openDialog, setDialogView, setDialogState } = useDialog();
  const [address, setAddress] = useState<string>("");
  const [point, setPoint] = useState<number>(1);
  const { campaignId } = GetrunningCampaing();
  const { writeAsync, isError, isSuccess } = useContractWrite({
    address: addressList.CryptoCoffPoint,
    abi: CryptoCoffPoint__factory.abi,
    functionName: "addPoint",
    args: [
      address as `0x${string}`,
      BigInt(point),
      BigInt(Number(campaignId || 0)),
    ],
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    if (resultScan) {
      const { address, id } = JSON.parse(resultScan);
      console.log(address, id);
      setAddress(address);
    }
  }, [resultScan]);

  useEffect(() => {
    if (isSuccess) {
      setDialogState(DialogStates.SUCCESS);
    } else if (isError) {
      setDialogState(DialogStates.ERROR);
    }
  }, [isSuccess, isError, setDialogState]);

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
        <div className="flex flex-row justify-between items-center ">
          <span className=" text-[32px] font-semibold">Add Point</span>
          <div
            className={`${
              campaignId === undefined
                ? " bg-[#FF7000] border-[1px] border-black"
                : "bg-[#461804] border-[1px] border-[#FF7000]"
            }     rounded-md px-2 py-1 `}
          >
            {campaignId === undefined ? (
              <span className=" text-[12px] font-semibold text-white">
                Missing Campaign ID
              </span>
            ) : (
              <>
                <span className=" text-[12px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FFA532] to-[#FF7000]">
                  Running Campaing ID
                </span>
                <span className=" text-[12px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FFA532] to-[#FF7000]">
                  {" "}
                  : {campaignId}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-medium">Address</h2>
          <InputBase
            placeholder="0x00000000000"
            icon={<ScanLine color="white" size={20} />}
            icon2Position="left"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            className=" w-full  rounded-xl "
          />
        </div>

        <div className="flex flex-col gap-2 pt-6">
          <h2 className="font-medium">Amount of point</h2>
          <div className=" flex flex-row gap-2 rounded-[48px] border-[1px] border-[#BDBDBD] bg-[#3D3D3D] max-w-[100px] w-full p-3">
            <Minus
              onClick={() => {
                if (point > 1) {
                  setPoint(point - 1);
                }
              }}
              className={`${
                point === 1 ? " cursor-not-allowed" : " cursor-pointer"
              }`}
              color={point === 1 ? "#292929" : "#ffffff"}
              strokeWidth={1}
            />
            {point}
            <Plus
              onClick={() => {
                setPoint(point + 1);
              }}
              color={"#ffffff"}
              className=" cursor-pointer"
              strokeWidth={1}
            />
          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-20">
          <Button
            onClick={async () => {
              setDialogView(DialogViews.ADD_POINT_DIALOG);
              setDialogState(DialogStates.LOADING);
              openDialog();
              await writeAsync();
            }}
            disabled={address.length !== 42 || campaignId === undefined}
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
