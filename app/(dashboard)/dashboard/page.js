// import { useAccount } from "wagmi";

// import Account from "@/app/_components/Account";
// import WalletOptions from "@/app/_components/WalletOptions";
// import { useAccount } from "wagmi";
// import { useEffect, useState } from "react";

// function Page() {
//   const { isConnected } = useAccount();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     // Return a loading state or null during SSR/hydration
//     return <div className="text-center py-8">Loading wallet connection...</div>;
//   }

//   return isConnected ? <Account /> : <WalletOptions />;
// }

// export default Page;

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm p-6 border border-emerald-50">
      <span className="text-emerald-700 font-medium">Dashboard</span>
    </div>
  );
}
