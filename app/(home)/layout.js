import "@/app/_styles/globals.css";

import HomeFooter from "../_components/HomeFooter";
import HomeHeader from "../_components/HomeHeader";

export const metadata = {
  title: "Home",
};

export default function HomeLayout({ children }) {
  return (
    <>
      <HomeHeader />
      <main className="flex-1">{children}</main>
      <HomeFooter />
    </>
  );
}
