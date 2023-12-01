import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  AlertTriangleIcon,
  Menu,
  ScanLine,
  Wallet,
  WalletCards,
  X,
} from "lucide-react";
import Image from "next/image";

import useDialog from "@/store/UIProvider/dialog.store";
import { DialogViews } from "@/store/UIProvider/dialog.type";
import useDrawer from "@/store/UIProvider/drawer.store";
import { DrawerViews } from "@/store/UIProvider/drawer.type";
import { usePathname } from "next/navigation";
import { Button } from "../../ui/button";
import GasButton from "./GasButton";

export const ConnectButtonCustom = () => {
  const { openDialog, setDialogView } = useDialog();
  const { openDrawer, setDrawerView, displayDrawer } = useDrawer();

  const pathname = usePathname();

  const onClickDrawer = () => {
    setDrawerView(DrawerViews.NAVBAR_MENU);
    openDrawer();
  };

  const onClickOpen = () => {
    setDialogView(DialogViews.SCAN_QR);
    openDialog();
  };
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    onClick={openConnectModal}
                    type="button"
                    variant="ghost"
                    className="lg:border-[1px] border-[0px] w-full px-3 font-semibold "
                    style={{
                      borderRadius: "99px",
                      background:
                        "linear-gradient(282.7deg, #FFA532 0%, #FF7000 72.62%)",
                    }}
                  >
                    <h5 className=" text-white font-medium lg:block hidden">
                      Connect wallet
                    </h5>
                    <Wallet className="block lg:hidden" />
                  </Button>
                );
              }
              if (chain.unsupported) {
                return (
                  <Button
                    onClick={openChainModal}
                    type="button"
                    variant="ghost"
                    className="lg:border-[1px] border-none py-1 font-semibold"
                  >
                    <AlertTriangleIcon className="lg:mr-2 mr-0" size={22} />
                    <span className="lg:block hidden">Wrong network</span>
                  </Button>
                );
              }
              return (
                <div className="flex flex-row">
                  <div className="rounded-lg border-[1px] items-center md:flex hidden">
                    <Button
                      variant="ghost"
                      className="rounded-r-none font-semibold"
                      onClick={openChainModal}
                    >
                      {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 20,
                            height: 20,
                            borderRadius: 999,
                            overflow: "hidden",
                            marginRight: 8,
                          }}
                        >
                          {chain.iconUrl && (
                            <Image
                              alt={chain.name ?? "Chain icon"}
                              src={chain.iconUrl}
                              style={{ width: 20, height: 20 }}
                              width={100}
                              height={100}
                            />
                          )}
                        </div>
                      )}
                      {chain.name}
                    </Button>
                    <div className="bg-black/10 h-6 w-[1px]" />
                    <Button
                      variant="ghost"
                      className="rounded-l-none font-semibold"
                      onClick={openAccountModal}
                    >
                      <div className="rounded-lg bg-black/10 px-2 py-1 col-span-2">
                        {account.displayName}
                      </div>
                    </Button>
                  </div>
                  {pathname === "/" ? (
                    <>
                      <div
                        onClick={() => onClickOpen()}
                        className="flex flex-row items-center justify-center gap-1 border-[1px] border-[#FF7000] px-3 py-[10px] rounded-full bg-[#461804] cursor-pointer ml-3 mr-2"
                      >
                        <ScanLine color="#FFA532" size={16} />
                      </div>
                      <GasButton balance={account.balanceFormatted || ""} />
                    </>
                  ) : (
                    <div className="hidden md:flex flex-row ">
                      <div
                        onClick={() => onClickOpen()}
                        className="flex flex-row items-center justify-center gap-1 border-[1px] border-[#FF7000] px-3 py-[10px] rounded-full bg-[#461804] cursor-pointer ml-3 mr-2"
                      >
                        <ScanLine color="#FFA532" size={16} />
                      </div>
                      <GasButton balance={account.balanceFormatted || ""} />
                    </div>
                  )}

                  <div className="md:hidden flex items-center gap-1">
                    <Button
                      variant="ghost"
                      className="p-0 hidden md:flex items-center justify-center hover:bg-transparent"
                      onClick={openChainModal}
                    >
                      {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 20,
                            height: 20,
                            borderRadius: 999,
                            overflow: "hidden",
                          }}
                        >
                          {chain.iconUrl && (
                            <Image
                              alt={chain.name ?? "Chain icon"}
                              src={chain.iconUrl}
                              style={{ width: 20, height: 20 }}
                              width={100}
                              height={100}
                            />
                          )}
                        </div>
                      )}
                    </Button>

                    {pathname === "/" ? (
                      <>
                        <Button
                          className="flex flex-row items-center justify-center gap-2 border-[1px] border-[#FF7000] px-3 py-[10px] rounded-full bg-[#461804] cursor-pointer"
                          variant="ghost"
                          onClick={openAccountModal}
                        >
                          <WalletCards size={18} color="#FFA532" />
                        </Button>
                      </>
                    ) : (
                      <div className="md:hidden flex gap-4">
                        <Button
                          className=" flex flex-row items-center justify-center gap-2 border-[1px] border-[#FF7000] px-3 py-[10px] rounded-full bg-[#461804] cursor-pointer"
                          variant="ghost"
                          onClick={openAccountModal}
                        >
                          <WalletCards size={18} color="#FFA532" />
                        </Button>
                        <Button
                          className="flex flex-row items-center justify-center gap-2 border-[1px] border-[#FF7000] px-[10px] py-[10px] rounded-full bg-[#461804] cursor-pointer"
                          variant="ghost"
                          onClick={onClickDrawer}
                        >
                          {displayDrawer ? (
                            <X size={18} color="#FFA532" />
                          ) : (
                            <Menu size={18} color="#FFA532" />
                          )}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
