"use client";

import Image from "next/image";
import Link from "next/link";

import { ScanLine } from "lucide-react";
import { ConnectButtonCustom } from "./components/ConnectButton";
import GasButton from "./components/GasButton";

export default function Navbar() {
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
        <div className="flex flex-row items-center justify-center gap-5">
          {/* <ModeToggle /> */}
          <div className="flex flex-row items-center justify-center gap-2 border-[1px] border-[#FF7000] px-3 py-[10px] rounded-full bg-[#461804]">
            <ScanLine color="#FFA532" size={20} />
          </div>
          <GasButton />
          <ConnectButtonCustom />
        </div>
      </div>
    </>
  );
}
