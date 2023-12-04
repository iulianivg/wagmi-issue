import { WagmiConfig, createConfig, configureChains } from 'wagmi'
// import {  polygon } from 'wagmi/chains'

// import { alchemyProvider } from 'wagmi/providers/alchemy'
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect'


// import { publicProvider } from 'wagmi/providers/public'

// import { Chain } from 'wagmi'
 
 const polygonChain = {
  id: 137,
  name: 'MATIC',
  network: 'matic',
  nativeCurrency: {
    decimals: 18,
    name: 'MATIC',
    symbol: 'MATIC',
  },
  rpcUrls: {
    public: { http: ['https://polygon-rpc.com'] },
    default: { http: ['https://polygon-rpc.com'] }
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://polygonscan.com/' },
  },
} 

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonChain],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://polygon.gateway.tenderly.co`,
      }),
    }),
  ]
  ,)

// Set up wagmi config
export const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        showQrModal: true,
        projectId: '2c40a3beecb11421a37d47c2e774f391',
        metadata: {
          name: 'dpex p2p',
          description: 'DPEX p2p allows you to trade decentralized.',
          // url: 'https://wagmi.sh',
          // icons: ['https://wagmi.sh/icon.png'],
        },
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
})

