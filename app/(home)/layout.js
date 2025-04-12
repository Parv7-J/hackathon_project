import "@/app/_styles/globals.css";

import HomeFooter from "../_components/HomeFooter";
import HomeHeader from "../_components/HomeHeader";

export const metadata = {
  title: {
    template: "%s | Insurance",
    default: "Insurance",
  },
  description: "Decen Insurance Claim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <HomeHeader />
        <main className="flex-1">{children}</main>
        <HomeFooter />
      </body>
    </html>
  );
}
