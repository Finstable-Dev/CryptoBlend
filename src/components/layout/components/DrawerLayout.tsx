"use client";

import useDrawer from "@/store/UIProvider/drawer.store";

import { ClaimDialog } from "@/components/dialog/ClaimDialog";
import { DrawerViews } from "@/store/UIProvider/drawer.type";
import { Sheet } from "../../ui/sheet";

function DrawerUI() {
  const { closeDrawer, displayDrawer, drawerView } = useDrawer();

  return (
    <Sheet open={displayDrawer} onOpenChange={closeDrawer}>
      {drawerView === DrawerViews.CLAIMDIALOG && <ClaimDialog />}
    </Sheet>
  );
}
export default function DrawerLayout() {
  return <DrawerUI />;
}
