"use client";

import Image from "next/image";
import Link from "next/link";

import { ClipboardList, CopyPlus, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { ConnectButtonCustom } from "./components/ConnectButton";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div
        className="bg-[#18181b]  fixed top-0 z-50 flex flew-row justify-between w-full h-12 items-center px-4 lg:px-8 py-8 backdrop-blur-sm"
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
          <>
            <div className="hidden md:flex flex-row items-center justify-center gap-5">
              <ConnectButtonCustom />

              <Link href="/admin">
                <h4 className=" font-extralight lg:font-medium text-quaternary">
                  {/* Home */}
                  <div className=" flex flex-row items-center justify-center gap-2 border-[1px] border-[#FF7000] px-3 py-[10px] rounded-full bg-[#461804] cursor-pointer">
                    <Home size={16} color="#FFA532" />
                  </div>
                </h4>
              </Link>
              <Link href="/admin/addcampaign">
                <h4 className=" font-extralight lg:font-medium text-quaternary">
                  {/* Add Campaign */}
                  <div className=" flex flex-row items-center justify-center gap-2 border-[1px] border-[#FF7000] px-3 py-[10px] rounded-full bg-[#461804] cursor-pointer">
                    <CopyPlus size={16} color="#FFA532" />
                  </div>
                </h4>
              </Link>

              <Link href="/admin/campaignlist">
                <h4 className=" font-medium text-quaternary">
                  {/* Campaign List */}
                  <div className=" flex flex-row items-center justify-center gap-2 border-[1px] border-[#FF7000] px-3 py-[10px] rounded-full bg-[#461804] cursor-pointer">
                    <ClipboardList size={16} color="#FFA532" />
                  </div>
                </h4>
              </Link>
            </div>
            <div className="md:hidden flex flex-row items-center justify-center gap-5">
              <ConnectButtonCustom />
            </div>
          </>
        )}
      </div>
    </>
  );
}
