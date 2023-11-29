"use client";

import { Fuel } from "lucide-react";

interface Props {
  balance: string;
}

export default function GasButton({ balance }: Props) {
  return (
    <div className="lg:flex hidden flex-row items-center justify-center gap-2 border-[1px] border-[#FF7000] px-3 ml-3 mr-8 py-[10px] rounded-full bg-[#461804]">
      <Fuel className=" cursor-pointer" color="#FFA532" size={20} />
      <div className=" w-[2px] bg-[#FFA532] h-[16px] sm:flex hidden" />
      <h5 className="text-[#FFA532]">{Number(balance).toFixed(2)}</h5>
    </div>
  );
}
