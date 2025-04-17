"use client";

import { parseEther } from "viem"; // Wagmi's native ETH→wei converter
import { useWriteContract } from "wagmi";
import { InsureChainConfig } from "../_contracts/InsureChainConfig";
import { useState } from "react";

function SubmitClaim() {
  const [value, setValue] = useState("");
  const { data: hash, writeContract, isPending, error } = useWriteContract();

  const handleSubmitClaim = (e) => {
    e.preventDefault();
    writeContract({
      ...InsureChainConfig,
      functionName: "submitClaim",
      args: [parseEther(value), "helloipfshash"], // Converts ETH string to wei
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmitClaim}>
        <input
          type="text"
          placeholder="0.05 ETH"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit" disabled={isPending}>
          {isPending ? "Processing..." : "Submit Claim"}
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

export default SubmitClaim;
