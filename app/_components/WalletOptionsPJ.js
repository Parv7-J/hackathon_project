"use client";

import { useEffect, useState } from "react";
import { useConnect } from "wagmi";

function WalletOptionsPJ() {
  const { connect, connectors } = useConnect();

  return (
    <div>
      {connectors.map((connector) => (
        <WalletOptionPJ
          key={connector.uid}
          connector={connector}
          connect={connect}
        />
      ))}
    </div>
  );
}

function WalletOptionPJ({ connector, connect }) {
  const [ready, setReady] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  });

  const handleConnect = async () => {
    setIsConnecting(true);
    try {
      await connect({ connector });
    } catch (e) {
      throw new Error("Cant connect wallet " + e.message);
    } finally {
      setIsConnecting(false);
    }
  };
  return (
    <button disabled={!ready || isConnecting} onClick={handleConnect}>
      {connector.name}
    </button>
  );
}

export default WalletOptionsPJ;
