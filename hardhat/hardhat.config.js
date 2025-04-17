import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ignition-ethers";
import { holesky } from "viem/chains";

// hardhat.config.js
const config = {
  solidity: "0.8.20",
  networks: {
    holesky: {
      url: "https://ethereum-holesky.publicnode.com",
    },
  },
  etherscan: {
    apiKey: {
      holesky: "T7A5AT4T5UNN8U2YYD9WHHFRAAP924CT7R",
    },
  },
};

export default config;
