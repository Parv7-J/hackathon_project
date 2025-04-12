import "@/app/_styles/globals.css";

import DashboardHeader from "@/app/_components/DashboardHeader";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <DashboardHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
