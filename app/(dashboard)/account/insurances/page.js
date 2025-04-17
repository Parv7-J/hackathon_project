"use client";

import supabase from "@/app/_services/supabase";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function InsurancesPage() {
  const { userId, isSignedIn } = useAuth();
  const [userInsurances, setUserInsurances] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isSignedIn || !userId) {
      return;
    }

    const fetchUserData = async () => {
      try {
        // Check if user exists in our database
        const { data: existingUser, error: fetchError } = await supabase
          .from("users")
          .select("*")
          .eq("clerk_id", userId)
          .single();

        if (fetchError && fetchError.code !== "PGRST116") {
          console.error("Error fetching user:", fetchError);
          return;
        }

        if (!existingUser) {
          // If user doesn't exist, create user first
          const { data: newUser, error: insertError } = await supabase
            .from("users")
            .insert([
              {
                clerk_id: userId,
                email: "user@example.com", // Replace with actual email from Clerk
                first_name: "John", // Replace with actual first name from Clerk
                last_name: "Doe", // Replace with actual last name from Clerk
              },
            ])
            .select()
            .single();

          if (insertError) {
            console.error("Error creating user:", insertError);
            return;
          }

          // Fetch insurance for the newly created user
          const { data: insuranceData, error: insuranceError } = await supabase
            .from("insurance_policies")
            .select("*")
            .eq("user_id", newUser.id);

          if (insuranceError) {
            console.error("Error fetching insurance data:", insuranceError);
          } else {
            setUserInsurances(insuranceData || []);
          }
        } else {
          // Fetch insurance for existing user
          const { data: insuranceData, error: insuranceError } = await supabase
            .from("insurance_policies")
            .select("*")
            .eq("user_id", existingUser.id);

          if (insuranceError) {
            console.error("Error fetching insurance data:", insuranceError);
          } else {
            setUserInsurances(insuranceData || []);
          }
        }

        setIsLoading(false);
      } catch (err) {
        console.error("Unexpected error:", err);
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [userId, isSignedIn]);

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Get status styling
  const getStatusStyling = (status) => {
    switch (status) {
      case "ACTIVE":
        return "bg-green-100 text-green-800";
      case "PENDING":
        return "bg-yellow-100 text-yellow-800";
      case "EXPIRED":
        return "bg-gray-100 text-gray-600";
      case "CANCELLED":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Insurances</h1>
          <p className="text-gray-600 mt-2">
            View and manage your insurance policies
          </p>
        </div>

        {isLoading ? (
          <div className="w-full py-32 flex justify-center">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-6 py-1">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-4 bg-gray-200 rounded col-span-2"></div>
                    <div className="h-4 bg-gray-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ) : userInsurances.length === 0 ? (
          <div className="border border-dashed border-gray-300 rounded-lg p-12 text-center">
            <div className="mx-auto w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No Insurance Policies Found
            </h3>
            <p className="text-gray-500 mb-6">
              You don't have any active insurance policies at the moment.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors font-medium">
              Get Insurance
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {userInsurances.map((policy) => {
              const vehicleDetails = policy.details?.vehicle || {};
              return (
                <div
                  key={policy.id}
                  className="bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="border-b border-gray-100">
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center">
                        <div className="mr-4 bg-green-50 p-3 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">
                            Car Insurance
                          </h3>
                          <p className="text-sm text-gray-500">
                            Policy #{policy.policy_number}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyling(
                          policy.status
                        )}`}
                      >
                        {policy.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    {vehicleDetails && (
                      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm font-medium text-gray-700 mb-2">
                          Vehicle Information
                        </p>
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <div>
                            <p className="text-gray-500">Make</p>
                            <p className="font-medium">
                              {vehicleDetails.make || "N/A"}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500">Model</p>
                            <p className="font-medium">
                              {vehicleDetails.model || "N/A"}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500">Year</p>
                            <p className="font-medium">
                              {vehicleDetails.year || "N/A"}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Coverage Amount</p>
                        <p className="font-medium text-gray-800">
                          {formatCurrency(policy.coverage_amount)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Premium</p>
                        <p className="font-medium text-gray-800">
                          {formatCurrency(policy.premium)}/month
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Start Date</p>
                        <p className="font-medium text-gray-800">
                          {formatDate(policy.start_date)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">End Date</p>
                        <p className="font-medium text-gray-800">
                          {formatDate(policy.end_date)}
                        </p>
                      </div>
                    </div>

                    <div className="flex space-x-2 mt-4">
                      <button className="flex-1 bg-white border border-green-600 hover:bg-green-50 text-green-600 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                        View Details
                      </button>
                      <Link
                        href={`/account/insurances/${policy.id}`}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                      >
                        File a Claim
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
