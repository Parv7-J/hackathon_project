"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";

export default function AccountLayout({ children }) {
  const pathname = usePathname();

  const sidebarItems = [
    { path: "/account", name: "Profile", icon: "👤" },
    { path: "/account/insurances", name: "Insurances", icon: "🛡️" },
    { path: "/account/claims", name: "Claims", icon: "📝" },
    { path: "/account/wallet", name: "Wallet", icon: "💼" },
  ];

  return (
    <div className="flex bg-gray-50">
      {/* Sidebar with fixed positioning */}
      <div className="fixed w-64 top-0 left-0 h-full bg-white shadow-md border-r border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <h1 className="text-xl font-bold text-emerald-600">Account</h1>
        </div>
        <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-80px)]">
          {sidebarItems.map((item) => (
            <Link
              href={item.path}
              key={item.path}
              className={`flex items-center p-3 rounded-lg transition-colors ${
                pathname === item.path
                  ? "bg-emerald-50 text-emerald-700 font-medium"
                  : "text-gray-700 hover:bg-emerald-100"
              }`}
            >
              <span className="mr-3 text-xl">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content with margin to account for sidebar */}
      <div className="ml-64 w-full pt-16">
        <main className="p-6">
          <Suspense fallback={<Spinner />}>{children}</Suspense>
        </main>
      </div>
    </div>
  );
}
