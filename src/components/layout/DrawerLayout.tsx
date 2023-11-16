'use client';

import useDrawer from '@/store/UIProvider/drawer.store';
import { DrawerViews } from '@/store/UIProvider/drawer.type';

import { Cart } from '../base/drawer/Cart';
import { Sheet } from '../ui/sheet';

function DrawerUI() {
  const { closeDrawer, displayDrawer, drawerView } = useDrawer();

  return (
    <Sheet open={displayDrawer} onOpenChange={closeDrawer}>
      {drawerView === DrawerViews.CART && <Cart />}
    </Sheet>
  );
}
export default function DrawerLayout() {
  return <DrawerUI />;
}
