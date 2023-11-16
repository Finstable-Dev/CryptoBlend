"use client";

import { Fuel } from "lucide-react";

export default function GasButton() {
  return (
    <div className="flex flex-row items-center justify-center gap-2 border-[1px] border-[#FF7000] px-3 py-[10px] rounded-full bg-[#FFF9EC]">
      <Fuel color="#FF7000" size={20} />
      <div className=" w-[2px] bg-[#FF7000] h-[16px] sm:flex hidden" />
      <h5 className="text-[#FF7000]">0.00</h5>
    </div>
  );
}
