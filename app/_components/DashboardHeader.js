import Link from "next/link";
import ConnectWalletButton from "./ConnectWalletButton";
import { UserButton } from "@clerk/nextjs";

function DashboardHeader() {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b border-emerald-100 bg-white shadow-sm">
      <Link
        href="/dashboard"
        className="text-emerald-600 font-medium text-lg hover:text-emerald-800 transition-colors"
      >
        Dashboard
      </Link>
      <div className="flex items-center gap-6">
        <UserButton
          appearance={{
            elements: {
              // The button itself
              userButtonBox: {
                border: "1px solid #e2e8f0", // slate-200
                borderRadius: "0.5rem",
                "&:hover": {
                  borderColor: "#cbd5e1", // slate-300
                },
                transition: "all 0.2s ease",
              },
              userButtonTrigger: {
                backgroundColor: "white",
                borderRadius: "0.5rem",
                padding: "0.125rem",
                "&:focus": {
                  boxShadow: "0 0 0 2px rgba(16, 185, 129, 0.2)", // emerald-500 with opacity
                },
              },
              userButtonAvatarBox: {
                width: "2rem",
                height: "2rem",
              },

              // The popup menu
              userButtonPopoverCard: {
                border: "1px solid #e2e8f0", // slate-200
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                borderRadius: "0.5rem",
                overflow: "hidden",
              },
              userButtonPopoverActionButton: {
                color: "#334155", // slate-700
                "&:hover": {
                  backgroundColor: "#f8fafc", // slate-50
                  color: "#059669", // emerald-600
                },
              },
              userButtonPopoverActionButtonText: {
                fontWeight: "500",
              },
              userButtonPopoverActionButtonIcon: {
                color: "#94a3b8", // slate-400
              },
              userButtonPopoverFooter: {
                backgroundColor: "#f8fafc", // slate-50
                borderTop: "1px solid #e2e8f0", // slate-200
              },
              userPreviewMainIdentifier: {
                fontWeight: "600",
                color: "#1e293b", // slate-800
              },
              userPreviewSecondaryIdentifier: {
                color: "#64748b", // slate-500
              },
            },
          }}
        />
        <Link
          href="/account"
          className="text-emerald-600 hover:text-emerald-800 transition-colors"
        >
          Account
        </Link>
        <ConnectWalletButton />
      </div>
    </div>
  );
}

export default DashboardHeader;
