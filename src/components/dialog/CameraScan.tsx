import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useDialog from "@/store/UIProvider/dialog.store";
import { DialogViews } from "@/store/UIProvider/dialog.type";
import { useState } from "react";
import { Button } from "../ui/button";

export function CameraScan() {
  const { openDialog, setDialogView, closeDialog } = useDialog();

  const [result, setResult] = useState("No result");
  // const handleScan = (result) => {
  //   if (result) {
  //     setResult(result);
  //   }
  // };

  // const handleError = (error) => {
  //   console.log(error);
  // };
  const delay = 500;

  const previewStyle = {
    height: 240,
    width: 320,
  };
  const onClickOpen = () => {
    setDialogView(DialogViews.QR_DIALOG);
    openDialog();
  };

  return (
    <DialogContent className="max-w-[350px] ssm:max-w-[480px] px-5 rounded-2xl">
      <DialogHeader>
        <DialogTitle className=" break-words text-xl text-left font-semibold w-[290px] ssm::w-[300px]">
          Scan QR Code
        </DialogTitle>
      </DialogHeader>
      <hr className=" border-[#3D3D3D]"></hr>

      <hr className="  border-[#3D3D3D]"></hr>

      <div className=" flex flex-col-reverse ssm:flex-row justify-between items-center gap-3 ssm:gap-0">
        <Button
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
