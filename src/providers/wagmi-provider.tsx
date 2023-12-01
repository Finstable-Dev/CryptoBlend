"use client";

import "@rainbow-me/rainbowkit/styles.css";

import {
  connectorsForWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import {
  coinbaseWallet,
  metaMaskWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai, mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [polygonMumbai, mainnet],
  [publicProvider()]
);
const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "";

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
    <RainbowKitProvider
      chains={chains}
      modalSize="compact"
      theme={darkTheme({
        accentColor: "#FF7000",
        accentColorForeground: "white",
        borderRadius: "small",
        fontStack: "system",
        overlayBlur: "small",
      })}
    >
      {children}
    </RainbowKitProvider>
  </WagmiConfig>
);

export default WagmiProvider;
