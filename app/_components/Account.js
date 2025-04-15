"use client";

import Image from "next/image";
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";
import { useEffect, useState } from "react";

export default function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse"></div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      {ensAvatar && (
        <div className="relative h-8 w-8 rounded-full overflow-hidden">
          <Image
            alt="ENS Avatar"
            src={ensAvatar}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="text-sm">
        {ensName || `${address?.slice(0, 6)}...${address?.slice(-4)}`}
      </div>
      <button
        onClick={() => disconnect()}
        className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
      >
        Disconnect
      </button>
    </div>
  );
}
