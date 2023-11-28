import { ConnectButton } from "@rainbow-me/rainbowkit";
import { AlertTriangleIcon, Wallet } from "lucide-react";
import Image from "next/image";

import { Button } from "../../ui/button";

export const ConnectButtonCustom = () => {
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
                  <div className="rounded-lg border-[1px] items-center lg:flex hidden">
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
                      <div className="grid grid-cols-3 items-center gap-2">
                        <p>
                          {account.displayBalance
                            ? `${account.displayBalance}`
                            : ""}
                        </p>

                        <div className="rounded-lg bg-black/10 px-2 py-1 col-span-2">
                          {account.displayName}
                        </div>
                      </div>
                    </Button>
                  </div>

                  <div className="lg:hidden flex items-center gap-1">
                    <Button
                      variant="ghost"
                      className="p-0 flex items-center justify-center hover:bg-transparent"
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

                    <Button
                      className="p-0 hover:bg-transparent"
                      variant="ghost"
                      onClick={openAccountModal}
                    >
                      <Wallet size={22} />
                    </Button>
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
