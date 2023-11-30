"use client";

import useDialog from "@/store/UIProvider/dialog.store";

import { AddPointDialog } from "@/components/dialog/AddPointDialog";
import { CameraScan } from "@/components/dialog/CameraScan";
import { ClaimDialog } from "@/components/dialog/ClaimDialog";
import { ClaimNFTDialog } from "@/components/dialog/ClaimNFTDialog";
import { QrDialog } from "@/components/dialog/QrDialog";
import { ScanQR } from "@/components/dialog/ScanQR";
import { SuccessDialog } from "@/components/dialog/SuccessDialog";
import { DialogViews } from "@/store/UIProvider/dialog.type";
import { Dialog } from "../../ui/dialog";

function DialogUI() {
  const { displayDialog, dialogView, closeDialog } = useDialog();
  return (
    <Dialog open={displayDialog} onOpenChange={closeDialog}>
      {dialogView === DialogViews.CLAIM_DIALOG && <ClaimDialog />}
      {dialogView === DialogViews.QR_DIALOG && <QrDialog />}
      {dialogView === DialogViews.SCAN_QR && <ScanQR />}
      {dialogView === DialogViews.CLAIM_NFT_DIALOG && <ClaimNFTDialog />}
      {dialogView === DialogViews.CAMERA_SCAN && <CameraScan />}
      {dialogView === DialogViews.STATE_DIALOG && <SuccessDialog />}
      {dialogView === DialogViews.ADD_POINT_DIALOG && <AddPointDialog />}
    </Dialog>
  );
}
export default function DialogLayout() {
  return <DialogUI />;
}
