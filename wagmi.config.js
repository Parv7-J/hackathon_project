import { createConfig, http } from "wagmi";
import { holesky } from "wagmi/chains";
import { injected, metaMask } from "wagmi/connectors";

export const config = createConfig({
  chains: [holesky],
  connectors: [metaMask(), injected()],
  transports: { [holesky.id]: http() },
});
