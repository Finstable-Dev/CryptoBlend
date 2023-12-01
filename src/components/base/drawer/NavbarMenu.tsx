"use client";

import { SheetContent } from "@/components/ui/sheet";
import useDrawer from "@/store/UIProvider/drawer.store";
import Link from "next/link";

export function NavbarMenu() {
  const { closeDrawer } = useDrawer();

  return (
    <div>
      <SheetContent
        className="h-fit p-0 overflow-y-scroll border-t-2 border-t-[#FF7000] border-b-0 backdrop-blur-md bg-opacity-60"
        style={{
          boxShadow: "0px 4px 4px 0px rgba(255, 165, 50, 0.20)",
        }}
      >
        <div className=" w-full flex flex-col  justify-center items-center gap-8 pt-4 pb-6 my-3">
          <Link href="/admin" onClick={closeDrawer}>
            <h4 className=" font-medium lg:font-medium text-quaternary">
              Home
            </h4>
          </Link>
          <Link href="/admin/addcampaign" onClick={closeDrawer}>
            <h4 className=" font-medium lg:font-medium text-quaternary">
              Add Campaign
            </h4>
          </Link>
          <Link href="/admin/campaignlist" onClick={closeDrawer}>
            <h4 className=" font-medium text-quaternary">Campaign List</h4>
          </Link>
        </div>
      </SheetContent>
    </div>
  );
}
