import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/_styles/globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Login",
};

// export default function RootLayout({ children }) {
//   return (
//     <>
//       <header className="flex justify-end items-center p-4 gap-4 h-16">
//         <SignedOut>
//           <SignInButton />
//           <SignUpButton />
//         </SignedOut>
//         <SignedIn>
//           <UserButton />
//         </SignedIn>
//       </header>
//       {children}
//     </>
//   );
// }

export default function LoginLayout({ children }) {
  return <>{children}</>;
}
