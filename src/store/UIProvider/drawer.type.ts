export enum DrawerViews {
  CLAIMDIALOG = "ClaimDialog",
}

export interface IDrawer {
  displayDrawer: boolean;

  drawerView: DrawerViews;
  fullDrawer: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  setDrawerView: (view: DrawerViews) => void;
  setFullDrawer: (type: boolean) => void;
}
