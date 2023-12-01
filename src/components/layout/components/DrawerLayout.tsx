"use client";

import useDrawer from "@/store/UIProvider/drawer.store";

import { NavbarMenu } from "@/components/base/drawer/NavbarMenu";
import { DrawerViews } from "@/store/UIProvider/drawer.type";
import { Sheet } from "../../ui/sheet";

function DrawerUI() {
  const { closeDrawer, displayDrawer, drawerView } = useDrawer();

  return (
    <Sheet open={displayDrawer} onOpenChange={closeDrawer}>
      {drawerView === DrawerViews.NAVBAR_MENU && <NavbarMenu />}
    </Sheet>
  );
}
export default function DrawerLayout() {
  return <DrawerUI />;
}
