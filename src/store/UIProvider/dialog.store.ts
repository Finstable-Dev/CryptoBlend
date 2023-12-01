import { create, StoreApi } from "zustand";
import { devtools } from "zustand/middleware";
import { PrepareWriteContractConfig } from "@wagmi/core";

import { DialogStates, DialogViews, IDialog } from "./dialog.type";

const initialState = {
  displayDialog: false,
  dialogView: DialogViews.CLAIM_DIALOG,
  id: 0,
  dialogState: "",
  resultScan: "",
  writeAsync: undefined as
    | undefined
    | ((args?: PrepareWriteContractConfig) => Promise<{ hash: string }>),
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

    setWriteAsync: (writeAsync) => {
      set({ writeAsync });
    },
  }))
);

export default useDialog;
