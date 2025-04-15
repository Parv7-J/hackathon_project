"use client";

import { useEffect, useState } from "react";
import { useConnect } from "wagmi";
import { useWallet } from "../_contexts/WalletContext";

function WalletOptions() {
  const { closeModal } = useWallet();
  // const { connect, connectors } = useConnect({
  //   onSuccess: () => {
  //     closeModal();
  //     alert("Wallet Connected");
  //   },
  //   onError: () => {
  //     alert("Failed to connect, try again");
  //   },
  // });

  const { connect, connectors } = useConnect();

  return (
    <div className="space-y-3">
      {connectors.map((connector) => (
        <WalletOption
          key={connector.id}
          connector={connector}
          connect={connect}
          closeModal={closeModal}
        />
      ))}
    </div>
  );
}

function WalletOption({ connector, connect, closeModal }) {
  const [ready, setReady] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector]);

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

  // Emoji selection based on connector name
  const getWalletEmoji = (name) => {
    const nameLower = name.toLowerCase();
    if (nameLower.includes("metamask")) return "🦊";
    if (nameLower.includes("injected")) return "💉";
    return "👛";
  };

  return (
    <button
      disabled={!ready || isConnecting}
      onClick={handleConnect}
      className={`
        w-full flex items-center justify-between px-4 py-3 
        rounded-xl border border-gray-200 
        transition-all duration-200
        ${
          !ready || isConnecting
            ? "bg-gray-100 cursor-not-allowed opacity-60"
            : "bg-white hover:bg-blue-50 hover:border-blue-200 hover:shadow-md"
        }
      `}
    >
      <div className="flex items-center">
        <span className="flex items-center justify-center w-10 h-10 mr-3 text-2xl bg-gray-100 rounded-md">
          {getWalletEmoji(connector.name)}
        </span>
        <span className="font-medium text-gray-800">{connector.name}</span>
      </div>

      {isConnecting ? (
        <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
          Connecting...
        </span>
      ) : ready ? (
        <span className="text-blue-600">→</span>
      ) : (
        <span className="px-3 py-1 text-xs font-medium text-yellow-700 bg-yellow-100 rounded-full">
          Not Available
        </span>
      )}
    </button>
  );
}

export default WalletOptions;
