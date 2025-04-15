// app/account/layout.js
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner"; // Assuming you have this component

export default function AccountLayout({ children }) {
  const pathname = usePathname();

  const sidebarItems = [
    { path: "/account", name: "Profile", icon: "👤" },
    { path: "/account/insurances", name: "Insurances", icon: "🛡️" },
    { path: "/account/claims", name: "Claims", icon: "📝" },
    { path: "/account/wallet", name: "Wallet", icon: "💼" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed z-10 h-full w-64 bg-white shadow-md">
        <div className="p-4 border-b border-gray-100">
          <h1 className="text-xl font-bold text-blue-600">Account Dashboard</h1>
        </div>
        <nav className="p-4 space-y-1">
          {sidebarItems.map((item) => (
            <Link
              href={item.path}
              key={item.path}
              className={`flex items-center p-3 rounded-lg transition-colors ${
                pathname === item.path
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="mr-3 text-xl">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="ml-64 flex-grow p-6">
        <Suspense fallback={<Spinner />}>{children}</Suspense>
      </main>
    </div>
  );
}
