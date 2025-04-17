import { parseEther } from "viem"; // Wagmi's native ETH→wei converter
import { useWriteContract } from "wagmi";
import { InsureChainConfig } from "../_contracts/InsureChainConfig";
import { useState } from "react";

function WithdrawFromContract() {
  const [value, setValue] = useState("");
  const { data: hash, writeContract, isPending, error } = useWriteContract();

  const handleWithdraw = (e) => {
    e.preventDefault();
    writeContract({
      ...InsureChainConfig,
      functionName: "withdrawFunds",
      args: [parseEther(value)],
    });
  };

  return (
    <div>
      <form onSubmit={handleWithdraw}>
        <input
          type="text"
          placeholder="0.05 ETH"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit" disabled={isPending}>
          {isPending ? "Processing..." : "Withdraw Contract"}
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

export default WithdrawFromContract;
