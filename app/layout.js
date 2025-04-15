import { ClerkProvider } from "@clerk/nextjs";
import "@/app/_styles/globals.css";

export const metadata = {
  title: { template: "%s - InsureChain", default: "InsureChain" },
  description: "Decentralized insurance platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
