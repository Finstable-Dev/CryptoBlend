export enum DialogViews {
  DETAIL_COLLECTION_DIALOG = "detail-collection-dialog",
}

export interface IDialog {
  displayDialog: boolean;
  dialogView: DialogViews;
  openDialog: () => void;
  closeDialog: () => void;
  setDialogView: (view: DialogViews) => void;
}
