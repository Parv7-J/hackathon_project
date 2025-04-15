"use client";
import { useBalance } from "wagmi";
import { useWallet } from "../_contexts/WalletContext";
import { holesky } from "wagmi/chains";
import { useEffect, useState } from "react";

function Details() {
  const { account } = useWallet();
  const address = account?.address;

  const [isMounted, setIsMounted] = useState(false);

  const {
    data: balance,
    isLoading,
    isError,
  } = useBalance({
    address,
    chainId: holesky.id,
    enabled: !!address,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div>
      <div>Address: {account?.address}</div>
      <div>
        {isLoading
          ? "Loading balance..."
          : isError
          ? "Error fetching balance"
          : balance
          ? `Balance: ${balance.formatted} ${balance.symbol}`
          : "No balance found"}
      </div>
    </div>
  );
}

export default Details;
