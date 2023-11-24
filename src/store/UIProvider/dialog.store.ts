import { create, StoreApi } from "zustand";
import { devtools } from "zustand/middleware";

import { DialogViews, IDialog } from "./dialog.type";

const initialState = {
  displayDialog: false,
  dialogView: DialogViews.CLAIM_DIALOG,
  id: 0,
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
    setId: (id: number) => {
      set({ id });
    },
  }))
);

export default useDialog;
