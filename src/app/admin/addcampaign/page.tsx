"use client";

import { DatePickerEnd } from "@/components/base/dateinput/DatePickerEnd";
import { DatePickerStart } from "@/components/base/dateinput/DatePickerStart";
import InputBase from "@/components/base/input/inputbase";
import useDialog from "@/store/UIProvider/dialog.store";

const Addcampaign = () => {
  const { openDialog, setDialogView } = useDialog();

  return (
    <main className="flex  h-[100dvh] w-full   flex-col bg-[rgba(0,0,0,0.75)] ">
      <div className=" w-full  flex flex-col items-center  pt-32 px-16 gap-10">
        <span>Add Campaign</span>
        <div>
          <span>Name Campaign</span>
          <InputBase placeholder="Name" className=" w-[634px]  bg-white" />
        </div>

        <div className=" flex flex-row justify-center items-center gap-5">
          <div className="flex flex-col gap-1 w-full">
            <span>Start Campaign</span>
            <DatePickerStart />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <span>End Campaign</span>
            <DatePickerEnd />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Addcampaign;
