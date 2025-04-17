import { ClerkProvider } from "@clerk/nextjs";
import "@/app/_styles/globals.css";
import { Toaster } from "sonner";

export const metadata = {
  title: { template: "%s - InsureChain", default: "InsureChain" },
  description: "Decentralized insurance platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Toaster
            position="top-center"
            visibleToasts={3}
            toastOptions={{
              className: "!p-0 !bg-transparent !shadow-none",
              duration: 5000,
              style: {
                background: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "0.5rem",
              },
              actionButtonStyle: {
                backgroundColor: "#059669", // emerald-600
                color: "white",
                borderRadius: "0.375rem",
              },
              cancelButtonStyle: {
                backgroundColor: "#f3f4f6", // gray-100
                color: "#374151", // gray-700
                borderRadius: "0.375rem",
              },
            }}
            theme="light"
          />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
