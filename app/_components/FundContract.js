"use client";

import { parseEther } from "viem"; // Wagmi's native ETH→wei converter
import { useWriteContract } from "wagmi";
import { InsureChainConfig } from "../_contracts/InsureChainConfig";
import { useState } from "react";

function FundContract() {
  const [value, setValue] = useState("");
  const { data: hash, writeContract, isPending, error } = useWriteContract();

  const handleFunding = (e) => {
    e.preventDefault();
    writeContract({
      ...InsureChainConfig,
      functionName: "fundContract",
      value: parseEther(value), // Converts ETH string to wei
    });
  };

  return (
    <div>
      <form onSubmit={handleFunding}>
        <input
          type="text"
          placeholder="0.05 ETH"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit" disabled={isPending}>
          {isPending ? "Processing..." : "Fund Contract"}
        </button>
      </form>

      {error && (
        <div style={{ color: "red" }}>
          Error: {error.shortMessage || error.message}
        </div>
      )}

      {hash && <div>Transaction Hash: {hash}</div>}
    </div>
  );
}

export default FundContract;
