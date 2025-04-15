"use client";

import { useAccount, useDisconnect } from "wagmi";
import { useWallet } from "../_contexts/WalletContext";

function ConnectWalletButton() {
  const { setIsOpen } = useWallet();
  const account = useAccount();
  const { disconnect } = useDisconnect();

  return account.status === "connected" ? (
    <button
      onClick={disconnect}
      className="px-4 py-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors font-medium"
    >
      Disconnect
    </button>
  ) : (
    <button
      onClick={() => setIsOpen((s) => !s)}
      className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium shadow-sm"
    >
      Connect Wallet
    </button>
  );
}

export default ConnectWalletButton;
