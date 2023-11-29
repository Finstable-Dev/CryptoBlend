"use client";

import Image from "next/image";
import Link from "next/link";

import useDialog from "@/store/UIProvider/dialog.store";
import { DialogViews } from "@/store/UIProvider/dialog.type";
import { ScanLine } from "lucide-react";
import { usePathname } from "next/navigation";
import { ConnectButtonCustom } from "./components/ConnectButton";
import GasButton from "./components/GasButton";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div
        className="bg-[#18181b]  fixed top-0 z-50 flex flew-row justify-between w-full h-12 items-center px-8 py-8 backdrop-blur-sm"
        style={{
          boxShadow:
            " 0px 0px 6px 0px rgba(0, 0, 0, 0.02), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(255, 137, 10, 0.20)",
        }}
      >
        <Link href="/">
          <Image
            className="cursor-pointer w-[154px] h-[34px]"
            src="/image/Logo.png"
            width={154}
            height={34}
            alt="logo"
          />
        </Link>
        {pathname === "/" ? (
          <div className="flex flex-row items-center justify-center gap-5">
            {/* <ModeToggle /> */}
            <ConnectButtonCustom />
          </div>
        ) : (
          <div className="flex flex-row items-center justify-center gap-5">
            <Link href="/admin/claimNFT">
              <h4 className=" font-extralight lg:font-medium text-quaternary">
                Claim NFT
              </h4>
            </Link>
            <Link href="/admin/addcampaign">
              <h4 className=" font-extralight lg:font-medium text-quaternary">
                Add Campaign
              </h4>
            </Link>

            <Link href="/admin">
              <h4 className=" font-medium text-quaternary">Campaign List</h4>
            </Link>

            <ConnectButtonCustom />
          </div>
        )}
      </div>
    </>
  );
}