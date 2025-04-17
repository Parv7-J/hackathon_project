"use client";

import { useState, useEffect } from "react";
import { useWallet } from "@/app/_contexts/WalletContext";
import { InsureChainConfig } from "@/app/_contracts/InsureChainConfig";
import { useReadContract, useWatchContractEvent } from "wagmi";
import Spinner from "./Spinner";

export default function WatchContract({ className = "" }) {
  const { account } = useWallet();
  const [events, setEvents] = useState([]);

  // Get contract owner
  const { data: owner, isLoading: ownerLoading } = useReadContract({
    ...InsureChainConfig,
    functionName: "owner",
    enabled: !!account.address,
  });

  // Watch for Contract Events
  useWatchContractEvent({
    ...InsureChainConfig,
    eventName: "ClaimSubmitted",
    listener: (logs) => {
      const newEvent = {
        type: "ClaimSubmitted",
        data: logs[0].args,
        timestamp: new Date().toISOString(),
      };
      setEvents((prev) => [newEvent, ...prev.slice(0, 4)]);
    },
  });

  useWatchContractEvent({
    ...InsureChainConfig,
    eventName: "ClaimProcessed",
    listener: (logs) => {
      const newEvent = {
        type: "ClaimProcessed",
        data: logs[0].args,
        timestamp: new Date().toISOString(),
      };
      setEvents((prev) => [newEvent, ...prev.slice(0, 4)]);
    },
  });

  useWatchContractEvent({
    ...InsureChainConfig,
    eventName: "FundsDeposited",
    listener: (logs) => {
      const newEvent = {
        type: "FundsDeposited",
        data: logs[0].args,
        timestamp: new Date().toISOString(),
      };
      setEvents((prev) => [newEvent, ...prev.slice(0, 4)]);
    },
  });

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
  };

  const shortenAddress = (address) => {
    if (!address) return "";
    return `${address.substring(0, 6)}...${address.substring(
      address.length - 4
    )}`;
  };

  return (
    <div className={`${className}`}>
      <div className="mb-4">
        <h4 className="font-medium text-gray-800">Contract Status</h4>
        {ownerLoading ? (
          <div className="flex items-center mt-2">
            <Spinner size="sm" />
            <span className="ml-2 text-sm text-gray-500">
              Loading contract details...
            </span>
          </div>
        ) : (
          <div className="text-sm mt-2">
            <p className="text-gray-600">
              Contract Owner:{" "}
              <span className="font-medium text-emerald-700">
                {shortenAddress(owner)}
              </span>
            </p>
            <p className="text-gray-600 mt-1">
              Your Address:{" "}
              <span className="font-medium">
                {shortenAddress(account.address)}
              </span>
            </p>
          </div>
        )}
      </div>

      <div>
        <h4 className="font-medium text-gray-800 mb-2">Live Events</h4>

        {events.length > 0 ? (
          <div className="space-y-3 max-h-52 overflow-auto pr-2">
            {events.map((event, i) => (
              <div
                key={i}
                className="text-xs p-2 bg-emerald-50 border border-emerald-100 rounded"
              >
                <div className="flex justify-between">
                  <span className="font-medium text-emerald-800">
                    {event.type}
                  </span>
                  <span className="text-gray-500">
                    {formatTimestamp(event.timestamp)}
                  </span>
                </div>
                <div className="mt-1 text-gray-600">
                  {event.type === "ClaimSubmitted" && (
                    <span>
                      New claim submitted by{" "}
                      {shortenAddress(event.data.policyholder)}
                    </span>
                  )}
                  {event.type === "ClaimProcessed" && (
                    <span>
                      Claim {event.data.claimId.toString()} was{" "}
                      {event.data.approved ? "approved" : "rejected"}
                    </span>
                  )}
                  {event.type === "FundsDeposited" && (
                    <span>
                      {shortenAddress(event.data.sender)} deposited{" "}
                      {event.data.amount.toString()} wei
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-gray-50 rounded">
            <p className="text-sm text-gray-500">
              Waiting for contract events...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
