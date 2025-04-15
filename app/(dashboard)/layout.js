import "@/app/_styles/globals.css";
import Spinner from "@/app/_components/Spinner";
import DashboardHeader from "@/app/_components/DashboardHeader";
import { Providers } from "./providers";
import { Suspense } from "react";
import { WalletProvider } from "../_contexts/WalletContext";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <WalletProvider>
            <Suspense fallback={<Spinner />}>
              <DashboardHeader />
              <main>{children}</main>
            </Suspense>
          </WalletProvider>
        </Providers>
      </body>
    </html>
  );
}
