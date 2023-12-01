import { PrepareWriteContractConfig } from "@wagmi/core";
export enum DialogViews {
  CLAIM_DIALOG = "claim-dialog",
  QR_DIALOG = "qr-dialog",
  SCAN_QR = "scan-qr",
  CLAIM_NFT_DIALOG = "claim-nft-dialog",
  CAMERA_SCAN = "camera-scan",
  STATE_DIALOG = "state-dialog",
  ADD_POINT_DIALOG = "add_point_dialog",
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
  resultScan: string;
  dialogState: DialogStates;
  writeAsync:
    | ((args?: PrepareWriteContractConfig) => Promise<{ hash: string }>)
    | undefined;
  openDialog: () => void;
  closeDialog: () => void;
  setDialogView: (view: DialogViews) => void;
  setId: (id: number) => void;
  setResultScan: (resultScan: string) => void;
  setDialogState: (state: DialogStates) => void;
  setWriteAsync: (
    writeAsync:
      | ((args?: PrepareWriteContractConfig) => Promise<{ hash: string }>)
      | undefined
  ) => void;
}
