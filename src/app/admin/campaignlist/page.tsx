"use client";

import InputBase from "@/components/base/input/inputbase";
import useDialog from "@/store/UIProvider/dialog.store";

const CampaignList = () => {
  const { openDialog, setDialogView } = useDialog();

  return (
    <main className="flex  h-[100dvh] w-full   flex-col bg-[rgba(0,0,0,0.75)] ">
      <div className=" w-full  flex flex-col  pt-32 px-16">
        <span>Add Campaign</span>
        <div>
          <span>Name Campaign</span>
          <InputBase placeholder="Search" className=" w-full bg-white" />
        </div>
      </div>
    </main>
  );
};

export default CampaignList;
