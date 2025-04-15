"use client";

import { createPortal } from "react-dom";
import { useWallet } from "../_contexts/WalletContext";
import { useEffect, useRef } from "react";
import WalletOptionsPJ from "./WalletOptionsPJ";

function WalletModelPJ() {
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
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      >
        <div
          className="relative w-full max-w-md p-6 mx-4 bg-white shadow-xl rounded-xl"
          ref={modelContentRef}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-4 text-lg font-medium text-gray-800">
            Modal is open or not
          </div>
          <WalletOptionsPJ />
          <button
            onClick={closeModal}
            className="px-4 py-2 text-sm font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Click me
          </button>
        </div>
      </div>,
      document.body
    )
  );
}

export default WalletModelPJ;
