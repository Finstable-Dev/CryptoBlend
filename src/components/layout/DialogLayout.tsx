'use client';

import useDialog from '@/store/UIProvider/dialog.store';
import { DialogViews } from '@/store/UIProvider/dialog.type';

import DetailCollectionDialog from '../base/dialog/DetailCollectionDialog';
import { Dialog } from '../ui/dialog';

function DialogUI() {
  const { displayDialog, dialogView, closeDialog } = useDialog();
  return (
    <Dialog open={displayDialog} onOpenChange={closeDialog}>
      {dialogView === DialogViews.DETAIL_COLLECTION_DIALOG && (
        <DetailCollectionDialog />
      )}
    </Dialog>
  );
}
export default function DialogLayout() {
  return <DialogUI />;
}
