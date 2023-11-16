import { create, StoreApi } from 'zustand';
import { devtools } from 'zustand/middleware';

import { DrawerViews, IDrawer } from './drawer.type';

const initialState = {
  displayDrawer: false,
  drawerView: DrawerViews.CART,
};

const useDrawer = create(
  devtools((set: StoreApi<IDrawer>['setState']) => ({
    ...initialState,
    openDrawer: () => {
      set({ displayDrawer: true });
    },
    closeDrawer: () => {
      set({ displayDrawer: false });
    },

    setDrawerView: (view: DrawerViews) => {
      set({ drawerView: view });
    },

    setFullDrawer: (type: boolean) => {
      set({ fullDrawer: type });
    },
  }))
);

export default useDrawer;
