"use client";

import { useAccount } from "wagmi";

const { createContext, useState, useContext } = require("react");

const WalletContext = createContext();

function WalletProvider({ children }) {
  const account = useAccount();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <WalletContext.Provider value={{ isOpen, setIsOpen, closeModal, account }}>
      {children}
    </WalletContext.Provider>
  );
}

function useWallet() {
  const context = useContext(WalletContext);
  if (!context) throw new Error("Context used outside its boundary");
  return context;
}

export { WalletProvider, useWallet };
