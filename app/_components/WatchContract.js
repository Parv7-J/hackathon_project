"use client"; // Required for client-side hooks
import { useEffect } from "react";
import { watchContractEvent } from "@wagmi/core";
import { config } from "@/wagmi.config";
import { InsureChainConfig } from "../_contracts/InsureChainConfig";

export default function WatchContract() {
  useEffect(() => {
    const unwatch = watchContractEvent(config, {
      ...InsureChainConfig,
      eventName: "ClaimSubmitted",
      chainId: 17000, // Holesky chain ID
      onLogs(logs) {
        logs.forEach((log) => {
          console.log("New claim:", log.args);
          // Update UI state here (e.g., using Zustand/Jotai)
        });
      },
    });

    return () => unwatch(); // Cleanup on unmount
  }, []);

  return null; // Or return UI elements
}
