"use client";

import Image from "next/image";
import Link from "next/link";

import { ConnectButtonCustom } from "./components/ConnectButton";
import GasButton from "./components/GasButton";
import { ModeToggle } from "./components/Thememode";

export default function Navbar() {
  return (
    <>
      <div
        className="bg-white
       fixed top-0 z-50 flex flew-row justify-between w-full h-12 items-center px-8 py-8"
        style={{
          boxShadow:
            "0px 2px 4px 0px rgba(0, 0, 0, 0.08), 0px 0px 6px 0px rgba(0, 0, 0, 0.02)",
        }}
      >
        <Link href="/">
          <Image
            className="cursor-pointer w-[154px] h-[34px]"
            src="/image/logoipsim.png"
            width={154}
            height={34}
            alt="logo"
          />
        </Link>
        <div className="flex flex-row items-center justify-center gap-5">
          <ModeToggle />
          <GasButton />
          <ConnectButtonCustom />
        </div>
      </div>
    </>
  );
}
