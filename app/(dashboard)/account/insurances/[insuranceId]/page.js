"use client";

import FundContract from "@/app/_components/FundContract";
import Spinner from "@/app/_components/Spinner";
import WithdrawFromContract from "@/app/_components/WithdrawFromContract";
import SubmitClaim from "@/app/_components/SubmitClaim";
import WatchContract from "@/app/_components/WatchContract";

import { useWallet } from "@/app/_contexts/WalletContext";
import { InsureChainConfig } from "@/app/_contracts/InsureChainConfig";
import { useReadContracts } from "wagmi";

function Page({ params }) {
  const { account } = useWallet();

  const { data, error, isPending } = useReadContracts({
    contracts: [
      {
        ...InsureChainConfig,
        functionName: "getPolicyholderClaimIds",
        args: [account.address],
        query: {
          enabled: !!account.address,
        },
      },
      {
        ...InsureChainConfig,
        functionName: "getContractBalance",
      },
    ],
  });

  const [ids, balance] = data || [];

  if (isPending) return <Spinner />;

  if (error) return <div>Error: {error.shortMessage || error.message}</div>;

  return (
    <>
      <div>
        {ids
          ? `This is the response of ids: ${ids.result}`
          : "No response regarding you"}
      </div>
      <div>
        {balance
          ? `This is the response of balance: ${balance.result}`
          : "No response regarding you"}
      </div>
      <FundContract />
      <WithdrawFromContract />
      <SubmitClaim />
      <WatchContract />
    </>
  );
}

export default Page;
