export interface Chain {
  id: string;
  token: string;
  label: string;
  rpcUrl: string;
  logoURI: string;
}

const chains: { [key: string]: Chain } = {
  "0x2105": {
    id: "0x2105",
    token: "ETH",
    label: "Base",
    rpcUrl: "https://base.llamarpc.com",
    logoURI:
      "https://static.debank.com/image/chain/logo_url/base/ccc1513e4f390542c4fb2f4b88ce9579.png",
  },
  "0xa": {
    id: "0xa",
    token: "ETH",
    label: "Optimism",
    rpcUrl: "https://optimism.llamarpc.com",
    logoURI:
      "https://optimistic.etherscan.io/assets/optimism/images/svg/logos/token-secondary-light.svg",
  },
  "0x89": {
    id: "0x89",
    token: "POLY",
    label: "Polygon",
    rpcUrl: "https://polygon.llamarpc.com",
    logoURI:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png",
  },
  "0xa4b1": {
    id: "0xa4b1",
    token: "ETH",
    label: "Arbitrum One",
    rpcUrl: "https://arbitrum.llamarpc.com",
    logoURI:
      "https://arbiscan.io/assets/arbitrum/images/svg/logos/token-secondary-light.svg?v=24.9.2.0",
  },
  "0x3e7": {
    id: "0x3e7",
    token: "HYPE",
    label: "Hyper EVM",
    rpcUrl: "https://rpc.hyperliquid.xyz/evm",
    logoURI:
      "https://static.debank.com/image/hyper_token/logo_url/hyper/0b3e288cfe418e9ce69eef4c96374583.png",
  },
  "0x65": {
    id: "0x65",
    token: "SOL",
    label: "Solana",
    rpcUrl: "https://api.mainnet-beta.solana.com",
    logoURI: "/solanaLogoMark.svg",
  },
};

export default chains;
