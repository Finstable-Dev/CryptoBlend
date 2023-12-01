import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useDialog from "@/store/UIProvider/dialog.store";
import { DialogStates, DialogViews } from "@/store/UIProvider/dialog.type";
import { Coffee, Gem } from "lucide-react";
import { useState } from "react";
import { CoffeeIcon } from "../svgIcon/Coffee";
import { GemIcon } from "../svgIcon/Gem";
import { Button } from "../ui/button";

export function ClaimDialog() {
  const [selectItem, setSelectItem] = useState<number>(0);
  const { openDialog, setDialogView, closeDialog, setDialogState, writeAsync } =
    useDialog();

  const onClickOpen = () => {
    setDialogView(DialogViews.QR_DIALOG);
    openDialog();
  };

  return (
    <DialogContent className="max-w-[350px] ssm:max-w-[480px] px-5 rounded-2xl">
      <DialogHeader>
        <DialogTitle className=" break-words text-xl text-left font-semibold w-[290px] ssm::w-[300px]">
          Choose to claim coffee or upgrade member
        </DialogTitle>
      </DialogHeader>
      <hr className=" border-[#3D3D3D]"></hr>
      <div className="flex flex-col ssm:flex-row py-4 items-center justify-center ssm:justify-between gap-3 ssm:gap-0">
        <div
          onClick={() => {
            if (selectItem === 1) {
              setSelectItem(0);
            } else {
              setSelectItem(1);
            }
          }}
          className={`${
            selectItem === 1 ? "border-tertiary border-[1px]" : ""
          } flex flex-col w-[204px] items-center bg-[#3D3D3D] py-[22px] px-[32px] rounded-2xl gap-[20px]`}
        >
          {selectItem === 1 ? (
            <CoffeeIcon />
          ) : (
            <Coffee size={80} strokeWidth={1} />
          )}
          <span
            className={`${
              selectItem === 1
                ? "font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFA532] to-[#FF7000]"
                : ""
            } text-base font-medium `}
          >
            Get a coffee
          </span>
        </div>
        <div
          onClick={() => {
            if (selectItem === 2) {
              setSelectItem(0);
            } else {
              setSelectItem(2);
            }
          }}
          className={`${
            selectItem === 2 ? "border-tertiary border-[1px]" : ""
          } flex flex-col w-[204px] items-center bg-[#3D3D3D] py-[22px] px-[32px] rounded-2xl gap-[20px] `}
        >
          {selectItem === 2 ? <GemIcon /> : <Gem size={80} strokeWidth={1} />}

          <span
            className={`${
              selectItem === 2
                ? "font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFA532] to-[#FF7000]"
                : ""
            } w-full text-base font-medium`}
          >
            Upgrade member
          </span>
        </div>
      </div>
      <hr className="  border-[#3D3D3D]"></hr>

      <div className=" flex flex-col-reverse ssm:flex-row justify-between items-center gap-3 ssm:gap-0">
        <Button
          onClick={() => {
            setSelectItem(0);
            closeDialog();
          }}
          type="button"
          variant="ghost"
          className="lg:border-[1px] border-[0px] px-3 font-semibold h-[48px]  w-full ssm:w-[48%]"
          style={{
            borderRadius: "99px",
            background: "#3D3D3D",
          }}
        >
          <h5 className=" text-white font-medium">Cancel</h5>
        </Button>
        <Button
          disabled={selectItem === 0}
          onClick={async () => {
            if (selectItem === 1) {
              onClickOpen();
            } else {
              setDialogView(DialogViews.ADD_POINT_DIALOG);
              setDialogState(DialogStates.LOADING);
              if (writeAsync) await writeAsync();
              closeDialog();
            }
          }}
          type="button"
          variant="ghost"
          className="lg:border-[1px] border-[0px] px-3  font-semibold h-[48px]    w-full ssm:w-[48%]"
          style={{
            borderRadius: "99px",
            background: "linear-gradient(282.7deg, #FFA532 0%, #FF7000 72.62%)",
          }}
        >
          <h5 className=" text-white font-medium">Confirm</h5>
        </Button>
      </div>
    </DialogContent>
  );
}
