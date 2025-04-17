// app/account/wallet/page.js
"use client";

import { useState } from "react";
import { useAccount, useBalance, useDisconnect, useChainId } from "wagmi";

export default function WalletPage() {
  const [showDetails, setShowDetails] = useState(false);
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { data: balanceData } = useBalance({
    address: address,
    watch: true,
  });
  const { disconnect } = useDisconnect();

  // Function to format address for display
  const formatAddress = (addr) => {
    if (!addr) return "";
    return showDetails
      ? addr
      : `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
  };

  // Function to format balance for display
  const formatBalance = (balance) => {
    if (!balance) return "0.00";
    return showDetails ? balance.formatted : "***.**";
  };

  // Get network name based on chain ID
  const getNetworkName = (id) => {
    const networks = {
      1: "Ethereum Mainnet",
      5: "Goerli Testnet",
      11155111: "Sepolia Testnet",
      17000: "Holesky Testnet",
      137: "Polygon",
      80001: "Mumbai Testnet",
      42161: "Arbitrum",
      10: "Optimism",
      // Add more networks as needed
    };
    return networks[id] || `Unknown Network (${id})`;
  };

  // Check if it's a testnet
  const isTestnet = (id) => {
    const testnets = [5, 11155111, 17000, 80001];
    return testnets.includes(id);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Wallet Details</h1>
        <p className="text-gray-600 mt-2">
          Manage your connected wallet and view transaction history
        </p>
      </div>

      {isConnected ? (
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-700">Your Wallet</h2>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <span className="mr-2">
                {showDetails ? "🙈 Hide" : "👁️ Show"}
              </span>
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Address</div>
              <div className="font-mono text-gray-800 break-all">
                {formatAddress(address)}
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Network</div>
              <div className="font-medium text-gray-800">
                {getNetworkName(chainId)}
                {isTestnet(chainId) && (
                  <span className="ml-2 text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                    Testnet
                  </span>
                )}
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Balance</div>
              <div className="font-medium text-gray-800">
                {formatBalance(balanceData)} {balanceData?.symbol}
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Chain ID</div>
              <div className="font-medium text-gray-800">
                {chainId || "Unknown"}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <div className="text-gray-500 mb-4">No wallet connected</div>
        </div>
      )}
    </div>
  );
}
