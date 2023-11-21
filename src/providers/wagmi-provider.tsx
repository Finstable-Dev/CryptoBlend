"use client";

import "@rainbow-me/rainbowkit/styles.css";

import {
  connectorsForWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import {
  coinbaseWallet,
  metaMaskWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, optimism, polygon } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [publicProvider()]
);
const projectId = "e7b8cffe1cec205cb8d5c1c933e07a9d" || "";

const connectors = connectorsForWallets([
  // ...wallets,
  {
    groupName: "Popular",
    wallets: [
      rainbowWallet({ projectId, chains }),
      coinbaseWallet({ appName: "", chains }),
      metaMaskWallet({ chains, projectId }),
      walletConnectWallet({
        projectId,
        chains,
      }),
      trustWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const WagmiProvider = ({ children }: { children: React.ReactNode }) => (
  <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains} modalSize="compact">
      {children}
    </RainbowKitProvider>
  </WagmiConfig>
);

export default WagmiProvider;
