export enum DialogViews {
  CLAIM_DIALOG = "claim-dialog",
  QR_DIALOG = "qr-dialog",
  SCAN_QR = "scan-qr",
  CLAIM_NFT_DIALOG = "claim-nft-dialog",
  CAMERA_SCAN = "camera-scan-",
  STATE_DIALOG = "state-dialog",
}

export enum DialogStates {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface IDialog {
  displayDialog: boolean;
  dialogView: DialogViews;
  id: number;
  dialogState: DialogStates;
  openDialog: () => void;
  closeDialog: () => void;
  setDialogView: (view: DialogViews) => void;
  setId: (id: number) => void;
  setDialogState: (state: DialogStates) => void;
}
