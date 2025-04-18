// app/account/claims/page.js
"use client";

export default function ClaimsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">My Claims</h1>
        <p className="text-gray-600 mt-2">
          Track and manage your insurance claims
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex flex-col space-y-4">
          <div className="text-center p-8 border-2 border-dashed border-gray-200 rounded-lg">
            <h3 className="text-lg text-gray-500">
              Claims Information Coming Soon
            </h3>
            <p className="text-gray-400 mt-2">
              This section is under development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
