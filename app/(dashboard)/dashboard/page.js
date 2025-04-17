"use client";

import supabase from "@/app/_services/supabase";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function Page() {
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
          // PGRST116 is the error code for "no rows found"
          console.error("Error fetching user:", fetchError);
          return;
        }

        // If user doesn't exist, get data from Clerk and create user
        if (!existingUser) {
          // In a real app, you'd get these values from Clerk user object
          // For this example, we're using placeholder data
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
          console.log(newUser.id);
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

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm p-6 border border-emerald-50">
        <span className="text-emerald-700 font-medium">Loading...</span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm p-6 border border-emerald-50">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-emerald-700">
          Your Insurance Policies
        </h2>
        {userInsurances.length === 0 ? (
          <p className="text-gray-500">
            You don't have any insurance policies yet.
          </p>
        ) : (
          <div className="grid gap-4">
            {userInsurances.map((insurance) => (
              <div
                key={insurance.id}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">
                    Policy #{insurance.policy_number}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded text-sm font-medium ${
                      insurance.status === "ACTIVE"
                        ? "bg-green-100 text-green-800"
                        : insurance.status === "EXPIRED"
                        ? "bg-gray-100 text-gray-800"
                        : insurance.status === "CANCELLED"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {insurance.status}
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-500">Coverage</p>
                    <p className="font-medium">${insurance.coverage_amount}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Premium</p>
                    <p className="font-medium">${insurance.premium}/month</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Start Date</p>
                    <p>{new Date(insurance.start_date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">End Date</p>
                    <p>{new Date(insurance.end_date).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
