"use client";

import InputBase from "@/components/base/input/inputbase";
import { useGetSuccessToken } from "@/hooks/addPoint";
import useDialog from "@/store/UIProvider/dialog.store";
import { DialogStates, DialogViews } from "@/store/UIProvider/dialog.type";
import { ScanLine, ScanSearch, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useEnsAddress, useContractWrite } from "wagmi";
import { addressList } from "@/constants/addressList";
import { MemberEmitLog__factory } from "@/typechain-types";

const ClaimNFT = () => {
  const {
    openDialog,
    setDialogView,
    setId,
    resultScan,
    id,
    setDialogState,
    setWriteAsync,
  } = useDialog();
  const [targetAddress, setTargetAddress] = useState<`0x${string}`>();
  const [search, setSearch] = useState<string>("");
  const onClickOpen = (id: number) => {
    setId(id);
    setDialogView(DialogViews.CLAIM_NFT_DIALOG);
    setTargetAddress(
      isAddress
        ? (search.split(",")[0] as `0x${string}`)
        : (data as `0x${string}`)
    );
    openDialog();
  };
  const isAddress = useMemo(() => {
    if (
      search.split(",")[0].charAt(0) === "0" &&
      search.split(",")[0].charAt(1) === "x"
    )
      return true;
    return false;
  }, [search]);

  const { data } = useEnsAddress({
    name: isAddress ? "" : search.split(",")[0],
  });

  const { successToken } = useGetSuccessToken({
    address: isAddress
      ? (search.split(",")[0] as `0x${string}`)
      : (data as `0x${string}`),
    id:
      search.split(",")[1] === undefined || search.split(",")[1] === ""
        ? undefined
        : Number(search.split(",")[1]),
  });
  useEffect(() => {
    if (resultScan) {
      const { address, id } = JSON.parse(resultScan);
      setSearch(`${address},${id}`);
      setTargetAddress(address);
    }
  }, [resultScan]);

  // const { writeAsync, isError, isSuccess } = useContractWrite({
  //   address: addressList.CryptoCoffPoint,
  //   abi: CryptoCoffPoint__factory.abi,
  //   functionName: "claimPoint",
  //   args: [BigInt(id)],
  // });

  // using chainlink
  const { writeAsync, isError, isSuccess } = useContractWrite({
    address: addressList.MemberEmitLog,
    abi: MemberEmitLog__factory.abi,
    functionName: "emitMemberLog",
    args: [targetAddress!, BigInt(id), "coffee"],
  });

  useEffect(() => {
    setWriteAsync(writeAsync as any);
  }, [targetAddress, id]);

  useEffect(() => {
    if (isSuccess) {
      setDialogState(DialogStates.SUCCESS);
    } else if (isError) {
      setDialogState(DialogStates.ERROR);
    }
  }, [isSuccess, isError, setDialogState]);

  return (
    <main className="flex  h-[100dvh] w-full   flex-col bg-[rgba(0,0,0,0.75)] ">
      <div className=" w-full  flex flex-col  pt-32 px-3 lg:px-16 gap-26">
        <div className="pb-12 flex flex-row items-center gap-1">
          <Link href="/admin">
            <h6 className=" cursor-pointer  text-transparent bg-clip-text bg-gradient-to-r from-[#FFA532] to-[#FF7000]">
              Admin
            </h6>
          </Link>
          <h6 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFA532] to-[#FF7000]">
            {" "}
            /{" "}
          </h6>
          <h6>Claim NFT</h6>
        </div>
        <InputBase
          placeholder="Search Address or Ens name, Token ID"
          icon={<ScanLine color="white" size={20} />}
          icon2={<Search color="white" size={20} />}
          icon2Position="left"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className=" w-full rounded-xl "
        />
      </div>
      {/* itemsSearch ? */}
      {search !== "" ? (
        <div className="flex flex-col justify-center items-center h-[100%]">
          <div className=" flex flex-row overflow-x-scroll overflow-y-scroll no-scrollbar">
            {successToken.length > 0 ? (
              <div className="grid grid-cols-3 gap-10">
                {successToken.map((item) => (
                  <div
                    className="transition ease-in-out delay-150 hover:translate-y-1 duration-300 flex flex-col bg-[#292929] min-w-[299px]  sm:min-w-[398px] h-[390px]  sm:h-[515px] p-6 mb-2 rounded-[16px] border-[#454545] border-[1px] gap-4 hover:border-[1px] hover:border-[#FFA532] hover:shadow-[1px_1px_50px_-25px_rgba(255,122,0,0.9)] "
                    key={item.id}
                  >
                    <div className=" flex justify-center items-center ">
                      <Image
                        className="cursor-pointer w-[270px] sm:w-[350px] h-[220px] sm:h-[351px] rounded-[16px] border-[5px] border-quaternary "
                        src={item.image}
                        width={302}
                        height={301}
                        alt="logo"
                      />
                    </div>
                    <div className="flex justify-between">
                      <span className=" text-2xl font-semibold">
                        {item.name}
                      </span>
                      <span className=" text-2xl font-semibold">
                        #{item.id}
                      </span>
                    </div>

                    <div className="flex flex-row justify-between  items-center">
                      <div className=" flex flex-col ">
                        <span className="text-tertiary text-sm font-semibold">
                          Quantity
                        </span>
                        <span className="text-sm font-semibold">
                          {item.attributes[0].value}/9 piece
                        </span>
                      </div>

                      <button
                        className=" flex h-[48px] py-3 px-6 justify-center items-center rounded-full "
                        style={{
                          borderRadius: "99px",
                          background:
                            "linear-gradient(282.7deg, #FFA532 0%, #FF7000 72.62%)",
                        }}
                        onClick={() => onClickOpen(item.id)}
                      >
                        <span className="text-white text-md font-medium ">
                          claim
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              "no item found"
            )}
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
