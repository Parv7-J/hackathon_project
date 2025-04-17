import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const InsureChainModule = buildModule("InsureChain", (m) => {
  const initialThreshold = 70;
  const insureChain = m.contract("InsureChain", [initialThreshold]);
  return { insureChain };
});

export default InsureChainModule;
