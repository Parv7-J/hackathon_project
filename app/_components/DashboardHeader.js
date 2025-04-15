import Link from "next/link";
import ConnectWalletButton from "./ConnectWalletButton";

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
