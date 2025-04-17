"use client";

import { useState } from "react";
import { useWallet } from "@/app/_contexts/WalletContext";
import { InsureChainConfig } from "@/app/_contracts/InsureChainConfig";
import { useWriteContract } from "wagmi";
import { parseEther } from "viem";
import Spinner from "./Spinner";

export default function FundContract() {
  const { account } = useWallet();
  const { writeContract, isPending, isSuccess, isError, error } =
    useWriteContract();
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!account.address) {
      alert("Please connect your wallet first");
      return;
    }

    try {
      const ethAmount = parseEther(amount);

      writeContract({
        ...InsureChainConfig,
        functionName: "fundContract",
        value: ethAmount,
      });
    } catch (e) {
      alert("Please enter a valid amount");
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6">
        <h3 className="text-lg font-medium mb-4 text-gray-800">
          Fund Insurance Pool
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount (ETH)
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.01"
                className="focus:ring-emerald-500 focus:border-emerald-500 block w-full px-4 py-3 border border-gray-300 rounded-md"
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Your contribution helps ensure the solvency of the insurance pool.
            </p>
          </div>

          <button
            type="submit"
            disabled={isPending || !amount}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:bg-emerald-300 disabled:cursor-not-allowed"
          >
            {isPending ? <Spinner size="sm" /> : "Fund Contract"}
          </button>
        </form>

        {isSuccess && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
            <p className="text-sm text-green-600">
              Successfully funded the contract!
            </p>
          </div>
        )}

        {isError && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">
              Error: {error?.message || "Transaction failed"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
