"use client";

import { Fuel } from "lucide-react";

export default function GasButton() {
  return (
    <div className="flex flex-row items-center justify-center gap-2 border-[1px] border-[#FF7000] px-3 py-[10px] rounded-full bg-[#461804]">
      <Fuel color="#FFA532" size={20} />
      <div className=" w-[2px] bg-[#FFA532] h-[16px] sm:flex hidden" />
      <h5 className="text-[#FFA532]">0.00</h5>
    </div>
  );
}
