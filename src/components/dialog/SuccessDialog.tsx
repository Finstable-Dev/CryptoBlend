import { DialogContent } from "@/components/ui/dialog";
import useDialog from "@/store/UIProvider/dialog.store";
import { Button } from "../ui/button";
import { Loader2, XCircle } from "lucide-react";
import { CorrectIcon } from "../svgIcon/CorrectIcon";

export function ScanQR() {
  const { closeDialog } = useDialog();

  return (
    <DialogContent className="max-w-[350px] ssm:max-w-[380px] px-5 rounded-2xl">
      <div className="flex flex-col justify-center items-center p-8 gap-5">
        <Loader2 size={80} className="animate-spin" />
        <h1>Loadding...</h1>
      </div>
      <div className="flex flex-col gap-5 justify-center text-center w-full p-5">
        <div className="flex flex-col gap-5 justify-center items-center">
          <CorrectIcon />
          <div className="flex flex-col w-full">
            <span className="w-full">Successfully added campaign!</span>
            <span>You can check on the campaign list page.</span>
          </div>
        </div>
        <hr className=" border-[#3D3D3D]" />
        <div className="flex flex-row w-full justify-evenly items-center">
          <Button
            onClick={() => {
              closeDialog();
            }}
            type="button"
            variant="ghost"
            className=" px-3 font-semibold  w-[140px] h-[48px]"
            style={{
              borderRadius: "99px",
              background: "#3D3D3D",
            }}
          >
            <h5 className=" text-white font-medium">Close</h5>
          </Button>
          <Button
            onClick={() => {
              closeDialog();
            }}
            type="button"
            variant="ghost"
            className=" px-3 font-semibold   w-[140px] h-[48px]"
            style={{
              borderRadius: "99px",
              background:
                "linear-gradient(282.7deg, #FFA532 0%, #FF7000 72.62%)",
            }}
          >
            <h5 className=" text-white font-medium">Campaign List</h5>
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center p-8 ">
        <XCircle size={80} color="red" />
      </div>
    </DialogContent>
  );
}
