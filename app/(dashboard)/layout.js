import "@/app/_styles/globals.css";
import Spinner from "@/app/_components/Spinner";
import DashboardHeader from "@/app/_components/DashboardHeader";
import { Providers } from "./providers";
import { Suspense } from "react";
import { WalletProvider } from "../_contexts/WalletContext";
import WalletModal from "../_components/WalletModal";

export const metadata = { title: "Dashboard" };

export default function DashboardLayout({ children }) {
  return (
    <>
      <Providers>
        <WalletProvider>
          <Suspense fallback={<Spinner />}>
            <DashboardHeader />
            <main>{children}</main>
            <WalletModal />
          </Suspense>
        </WalletProvider>
      </Providers>
    </>
  );
}
