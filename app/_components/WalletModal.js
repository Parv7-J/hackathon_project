"use client";

import { createPortal } from "react-dom";
import { useWallet } from "../_contexts/WalletContext";
import { useEffect, useRef } from "react";
import WalletOptions from "./WalletOptions";

function WalletModal() {
  const { isOpen, closeModal } = useWallet();
  const modelContentRef = useRef(null);

  const handleOverlayClick = (event) => {
    if (
      modelContentRef.current &&
      !modelContentRef.current.contains(event.target)
    ) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
    }
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, closeModal]);

  return (
    isOpen &&
    createPortal(
      <div
        onClick={handleOverlayClick}
        className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-60 backdrop-blur-sm"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      >
        <div
          className="relative w-full max-w-md p-6 mx-4 bg-white shadow-2xl rounded-2xl border border-gray-100"
          ref={modelContentRef}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Connect Wallet
            </h3>
            <button
              onClick={closeModal}
              className="p-2 text-gray-400 transition-colors rounded-full hover:bg-gray-100 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          <div className="mb-6">
            <WalletOptions />
          </div>

          <div className="pt-4 mt-6 text-xs text-center text-gray-500 border-t border-gray-100">
            By connecting your wallet, you agree to our Terms of Service and
            Privacy Policy
          </div>
        </div>
      </div>,
      document.body
    )
  );
}

export default WalletModal;
