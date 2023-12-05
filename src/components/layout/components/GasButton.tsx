"use client";

import { Fuel } from "lucide-react";
import { usePathname } from "next/navigation";

interface Props {
  balance: string;
}

export default function GasButton({ balance }: Props) {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" ? (
        <div className=" flex flex-row items-center justify-center gap-1 border-[1px] border-[#FF7000] px-2 ml-0 lg:ml-3 mr-2 lg:mr-8 py-[10px] rounded-full bg-[#461804]">
          <Fuel color="#FFA532" size={16} />
          <div className=" w-[2px] bg-[#FFA532] h-[16px] flex" />
          <h6 className="text-[#FFA532]">{Number(balance).toFixed(2)}</h6>
        </div>
      ) : (
        <div className=" flex flex-row items-center justify-center gap-1 border-[1px] border-[#FF7000] px-2 ml-2 lg:ml-3 mr-0 lg:mr-0 py-[10px] rounded-full bg-[#461804]">
          <Fuel color="#FFA532" size={16} />
          <div className=" w-[2px] bg-[#FFA532] h-[16px] flex" />
          <h6 className="text-[#FFA532]">{Number(balance).toFixed(2)}</h6>
        </div>
      )}
    </>
  );
}
