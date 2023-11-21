import { create, StoreApi } from "zustand";
import { devtools } from "zustand/middleware";

import { DialogViews, IDialog } from "./dialog.type";

const initialState = {
  displayDialog: false,
  dialogView: DialogViews.CLAIM_DIALOG,
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
  }))
);

export default useDialog;
