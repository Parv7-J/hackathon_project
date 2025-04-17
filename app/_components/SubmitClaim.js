"use client";

import { useState } from "react";
import { useWallet } from "@/app/_contexts/WalletContext";
import { InsureChainConfig } from "@/app/_contracts/InsureChainConfig";
import { useWriteContract } from "wagmi";
import Spinner from "./Spinner";

export default function SubmitClaim({ insuranceId, policyNumber }) {
  const { account } = useWallet();
  const { writeContract, isPending, isSuccess, isError, error } =
    useWriteContract();

  const [claimDetails, setClaimDetails] = useState({
    policyNumber: policyNumber || "",
    amount: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
    evidence: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClaimDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!account.address) {
      alert("Please connect your wallet first");
      return;
    }

    writeContract({
      ...InsureChainConfig,
      functionName: "submitClaim",
      args: [
        claimDetails.policyNumber,
        BigInt(Math.floor(parseFloat(claimDetails.amount) * 100)), // Convert to cents as BigInt
        claimDetails.description,
      ],
    });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <form onSubmit={handleSubmit} className="space-y-4 p-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Policy Number
            </label>
            <input
              type="text"
              name="policyNumber"
              value={claimDetails.policyNumber}
              onChange={handleChange}
              disabled={!!policyNumber}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-100"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Claim Amount ($)
            </label>
            <input
              type="number"
              name="amount"
              value={claimDetails.amount}
              onChange={handleChange}
              placeholder="0.00"
              min="0"
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of Incident
          </label>
          <input
            type="date"
            name="date"
            value={claimDetails.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Claim Description
          </label>
          <textarea
            name="description"
            value={claimDetails.description}
            onChange={handleChange}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Please provide details about your claim..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Evidence URL (optional)
          </label>
          <input
            type="url"
            name="evidence"
            value={claimDetails.evidence}
            onChange={handleChange}
            placeholder="https://"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isPending}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:bg-emerald-300 disabled:cursor-not-allowed"
          >
            {isPending ? <Spinner size="sm" /> : "Submit Claim"}
          </button>
        </div>
      </form>

      {isSuccess && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-700 text-sm">
            Claim submitted successfully!
          </p>
        </div>
      )}

      {isError && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-700 text-sm">
            Error: {error?.message || "Failed to submit claim"}
          </p>
        </div>
      )}
    </div>
  );
}
