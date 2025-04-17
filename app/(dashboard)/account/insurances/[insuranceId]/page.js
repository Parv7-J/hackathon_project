"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import FundContract from "@/app/_components/FundContract";
import Spinner from "@/app/_components/Spinner";
import WithdrawFromContract from "@/app/_components/WithdrawFromContract";
import SubmitClaim from "@/app/_components/SubmitClaim";
import WatchContract from "@/app/_components/WatchContract";
import supabase from "@/app/_services/supabase";
import { useWallet } from "@/app/_contexts/WalletContext";
import { InsureChainConfig } from "@/app/_contracts/InsureChainConfig";
import { useReadContracts } from "wagmi";

function Page({ params }) {
  const { insuranceId } = params;
  const { account } = useWallet();
  const router = useRouter();
  const [insurance, setInsurance] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const fetchInsuranceDetails = async () => {
      const { data, error } = await supabase
        .from("insurance_policies")
        .select("*")
        .eq("id", insuranceId)
        .single();

      if (error) {
        console.error("Error fetching insurance:", error);
        return;
      }

      setInsurance(data);
    };

    if (insuranceId) {
      fetchInsuranceDetails();
    }
  }, [insuranceId]);

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

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount || 0);
  };

  if (isPending || !insurance) return <Spinner />;

  if (error)
    return (
      <div className="max-w-4xl mx-auto mt-8 p-6 bg-red-50 rounded-lg border border-red-200">
        <h2 className="text-xl font-semibold text-red-700 mb-2">Error</h2>
        <p className="text-red-600">{error.shortMessage || error.message}</p>
        <button
          onClick={() => router.push("/account/insurances")}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          Back to Insurances
        </button>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Page Header with Back Button */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => router.push("/account/insurances")}
          className="flex items-center text-emerald-600 hover:text-emerald-800 transition-colors mr-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>
        <h1 className="text-2xl font-bold text-gray-800">
          Insurance Claim Management
        </h1>
      </div>

      {/* Insurance Summary Card */}
      <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="p-6 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold mb-1">
                {insurance.name || insurance.type} Insurance
              </h2>
              <p className="opacity-90 text-sm">
                Policy #{insurance.policy_number}
              </p>
            </div>
            <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
              {insurance.status?.toUpperCase()}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
            <div>
              <p className="text-xs text-white text-opacity-80">
                Coverage Amount
              </p>
              <p className="text-lg font-semibold">
                {formatCurrency(insurance.coverage_amount)}
              </p>
            </div>
            <div>
              <p className="text-xs text-white text-opacity-80">Premium</p>
              <p className="text-lg font-semibold">
                {formatCurrency(insurance.premium_amount)}/month
              </p>
            </div>
            <div>
              <p className="text-xs text-white text-opacity-80">Start Date</p>
              <p className="text-base">{formatDate(insurance.start_date)}</p>
            </div>
            <div>
              <p className="text-xs text-white text-opacity-80">End Date</p>
              <p className="text-base">{formatDate(insurance.end_date)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Contract Data Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-emerald-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-emerald-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            </svg>
            Claim History
          </h3>
          <div className="bg-gray-50 rounded-lg p-4">
            {ids && ids.result && ids.result.length > 0 ? (
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  Your policy has {ids.result.length} claim(s)
                </p>
                <ul className="text-sm text-gray-700 list-disc list-inside">
                  {Array.isArray(ids.result) &&
                    ids.result.map((id, index) => (
                      <li key={index}>
                        Claim #{id.toString()} is being processed
                      </li>
                    ))}
                </ul>
              </div>
            ) : (
              <p className="text-gray-500">
                No claims have been submitted for this policy
              </p>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-emerald-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-emerald-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            Pool Balance
          </h3>
          <div className="bg-gray-50 rounded-lg p-4">
            {balance && balance.result ? (
              <div className="flex items-baseline">
                <span className="text-lg font-semibold text-emerald-700">
                  {balance.result.toString()} ETH
                </span>
                <span className="ml-2 text-sm text-gray-500">
                  available in the contract
                </span>
              </div>
            ) : (
              <p className="text-gray-500">
                Contract balance information unavailable
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Tabbed Interface for Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-emerald-100 overflow-hidden mb-8">
        <div className="flex border-b border-gray-200">
          <button
            className={`px-6 py-4 text-sm font-medium ${
              activeTab === "overview"
                ? "border-b-2 border-emerald-500 text-emerald-600"
                : "text-gray-600 hover:text-emerald-600"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`px-6 py-4 text-sm font-medium ${
              activeTab === "claim"
                ? "border-b-2 border-emerald-500 text-emerald-600"
                : "text-gray-600 hover:text-emerald-600"
            }`}
            onClick={() => setActiveTab("claim")}
          >
            Submit Claim
          </button>
          <button
            className={`px-6 py-4 text-sm font-medium ${
              activeTab === "fund"
                ? "border-b-2 border-emerald-500 text-emerald-600"
                : "text-gray-600 hover:text-emerald-600"
            }`}
            onClick={() => setActiveTab("fund")}
          >
            Fund Pool
          </button>
          <button
            className={`px-6 py-4 text-sm font-medium ${
              activeTab === "withdraw"
                ? "border-b-2 border-emerald-500 text-emerald-600"
                : "text-gray-600 hover:text-emerald-600"
            }`}
            onClick={() => setActiveTab("withdraw")}
          >
            Withdraw
          </button>
        </div>

        <div className="p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-medium text-lg mb-3 text-gray-800">
                  Insurance Details
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 text-sm">
                  <div>
                    <p className="text-gray-500">Provider</p>
                    <p className="font-medium">{insurance.provider_name}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Policyholder</p>
                    <p className="font-medium truncate">{account.address}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Status</p>
                    <p className="font-medium">
                      {insurance.status?.toUpperCase()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Policy Type</p>
                    <p className="font-medium">{insurance.type}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Deductible</p>
                    <p className="font-medium">
                      {formatCurrency(insurance.deductible)}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Payment Frequency</p>
                    <p className="font-medium">
                      {insurance.payment_frequency || "Monthly"}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-lg mb-3 text-gray-800">
                  Contract Monitoring
                </h4>
                <WatchContract className="bg-gray-50 p-5 rounded-lg" />
              </div>
            </div>
          )}

          {activeTab === "claim" && (
            <div>
              <div className="bg-emerald-50 p-4 rounded-lg mb-5">
                <p className="text-sm text-emerald-700">
                  Submit a claim for your {insurance.type} insurance policy #
                  {insurance.policy_number}. Make sure to provide accurate
                  information.
                </p>
              </div>
              <SubmitClaim
                insuranceId={insuranceId}
                policyNumber={insurance.policy_number}
              />
            </div>
          )}

          {activeTab === "fund" && (
            <div>
              <div className="bg-emerald-50 p-4 rounded-lg mb-5">
                <p className="text-sm text-emerald-700">
                  Fund the insurance pool to ensure claims can be paid out and
                  maintain the liquidity of the protocol.
                </p>
              </div>
              <FundContract />
            </div>
          )}

          {activeTab === "withdraw" && (
            <div>
              <div className="bg-emerald-50 p-4 rounded-lg mb-5">
                <p className="text-sm text-emerald-700">
                  Withdraw your stake from the insurance pool if you're
                  eligible.
                </p>
              </div>
              <WithdrawFromContract />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
