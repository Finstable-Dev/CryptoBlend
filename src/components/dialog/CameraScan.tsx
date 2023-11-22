import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { QrReader } from "react-qr-reader";
import { Button } from "../ui/button";

export function CameraScan() {
  const [data, setData] = useState<string>("No result");
  return (
    <DialogContent className="max-w-[350px] ssm:max-w-[480px] px-5 rounded-2xl">
      <DialogHeader>
        <DialogTitle className=" break-words text-xl text-left font-semibold w-[290px] ssm::w-[300px]">
          Scan QR Code
        </DialogTitle>
      </DialogHeader>
      <hr className=" border-[#3D3D3D]"></hr>
      <QrReader
        onResult={(result: any, error: any) => {
          if (result && result.text) {
            setData(result.text);
          }

          if (error) {
            console.info(error);
          }
        }}
        constraints={{ facingMode: "user" }}
      />
      <hr className="  border-[#3D3D3D]"></hr>

      <Button
        type="button"
        variant="ghost"
        className="lg:border-[1px] border-[0px] px-3 font-semibold h-[48px]  w-full "
        style={{
          borderRadius: "99px",
          background: "#3D3D3D",
        }}
      >
        <h5 className=" text-white font-medium">Cancel</h5>
      </Button>
    </DialogContent>
  );
}
