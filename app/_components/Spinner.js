"use client";

import React from "react";

const Spinner = ({ size = "medium", color = "#3B82F6" }) => {
  const sizeMap = {
    small: "w-5 h-5",
    medium: "w-8 h-8",
    large: "w-12 h-12",
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className={`${sizeMap[size]} animate-spin rounded-full border-4 border-t-transparent`}
        style={{ borderColor: `transparent ${color} ${color} ${color}` }}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
