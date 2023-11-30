import { create, StoreApi } from "zustand";
import { devtools } from "zustand/middleware";

import { DialogStates, DialogViews, IDialog } from "./dialog.type";

const initialState = {
  displayDialog: false,
  dialogView: DialogViews.CLAIM_DIALOG,
  id: 0,
  dialogState: "",
  resultScan: '',
};

const useDialog = create(
  devtools((set: StoreApi<IDialog>["setState"]) => ({
    ...initialState,
    openDialog: () => {
      set({ displayDialog: true });
    },
    closeDialog: () => {
      set({ displayDialog: false });
    },

    setDialogView: (view: DialogViews) => {
      set({ dialogView: view });
    },

    setResultScan: (resultScan) => {
      set({ resultScan });
    },

    setId: (id: number) => {
      set({ id });
    },

    setDialogState: (state: DialogStates) => {
      set({ dialogState: state });
    },
  }))
);

export default useDialog;
