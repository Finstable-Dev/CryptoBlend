"use client";

import useDialog from "@/store/UIProvider/dialog.store";

import { ClaimDialog } from "@/components/dialog/ClaimDialog";
import { QrDialog } from "@/components/dialog/QrDialog";
import { ScanQR } from "@/components/dialog/ScanQR";
import { DialogViews } from "@/store/UIProvider/dialog.type";
import { Dialog } from "../../ui/dialog";

function DialogUI() {
  const { displayDialog, dialogView, closeDialog } = useDialog();
  return (
    <Dialog open={displayDialog} onOpenChange={closeDialog}>
      {dialogView === DialogViews.CLAIM_DIALOG && <ClaimDialog />}
      {dialogView === DialogViews.QR_DIALOG && <QrDialog />}
      {dialogView === DialogViews.SCAN_QR && <ScanQR />}
    </Dialog>
  );
}
export default function DialogLayout() {
  return <DialogUI />;
}
