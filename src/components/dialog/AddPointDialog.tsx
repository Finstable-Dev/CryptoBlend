import { DialogContent } from "@/components/ui/dialog";
import useDialog from "@/store/UIProvider/dialog.store";
import { DialogStates } from "@/store/UIProvider/dialog.type";
import { XCircle } from "lucide-react";
import { CorrectIcon } from "../svgIcon/CorrectIcon";

export function AddPointDialog() {
  const { closeDialog, dialogState } = useDialog();

  return (
    <DialogContent className="max-w-[350px] ssm:max-w-[380px] px-5 rounded-2xl">
      {dialogState === DialogStates.LOADING && (
        <div className="flex flex-col justify-center items-center px-8 py-24 gap-5">
          <span className="loader"></span>
        </div>
      )}
      {dialogState === DialogStates.ERROR && (
        <div className="flex flex-col justify-center items-center p-8 gap-5">
          <XCircle size={80} color="red" />
          <h1>Something went wrong!</h1>
        </div>
      )}
      {dialogState === DialogStates.SUCCESS && (
        <div className="flex flex-col gap-5 justify-center text-center w-full p-5">
          <div className="flex flex-col gap-5 justify-center items-center">
            <CorrectIcon />
            <div className="flex flex-col w-full">
              <span className="w-full">Successfully added point!</span>
              <span>You can check on the NFT.</span>
            </div>
          </div>
        </div>
      )}
    </DialogContent>
  );
}
