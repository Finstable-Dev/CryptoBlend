export enum DialogViews {
  CLAIM_DIALOG = "claim-dialog",
  QR_DIALOG = "qr-dialog",
  SCAN_QR = "scan-qr",
  CLAIM_NFT_DIALOG = "claim-nft-dialog",
  CAMERA_SCAN = "camera-scan-",
}

export interface IDialog {
  displayDialog: boolean;
  dialogView: DialogViews;
  openDialog: () => void;
  closeDialog: () => void;
  setDialogView: (view: DialogViews) => void;
}
