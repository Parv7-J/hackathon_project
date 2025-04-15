"use client";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)] bg-slate-50">
      <SignUp
        appearance={{
          // Base theme variables
          variables: {
            colorPrimary: "#059669", // emerald-600
            colorText: "#1e293b", // slate-800
            colorTextSecondary: "#475569", // slate-600
            colorBackground: "#ffffff",
            colorInputBackground: "#f8fafc", // slate-50
            colorInputText: "#334155", // slate-700
            borderRadius: "0.75rem",
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontSize: "16px",
          },
          // Specific element overrides
          elements: {
            // Card and main container
            card: {
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              border: "1px solid #e2e8f0", // slate-200
              padding: "1.75rem",
            },

            // Header elements
            headerTitle: {
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#064e3b", // emerald-900
            },
            headerSubtitle: {
              color: "#475569", // slate-600
              margin: "0.5rem 0 1.25rem 0",
            },

            // Form elements
            formButtonPrimary: {
              backgroundColor: "#059669", // emerald-600
              fontWeight: "500",
              padding: "0.625rem 1rem",
              "&:hover": {
                backgroundColor: "#047857", // emerald-700
              },
              textTransform: "none",
              transition: "all 0.2s ease",
            },
            formButtonReset: {
              color: "#059669", // emerald-600
              fontWeight: "500",
              "&:hover": {
                color: "#047857", // emerald-700
              },
            },
            formFieldLabel: {
              fontWeight: "500",
              color: "#334155", // slate-700
              margin: "0 0 0.375rem 0",
            },
            formFieldInput: {
              border: "1px solid #cbd5e1", // slate-300
              borderRadius: "0.5rem",
              padding: "0.625rem 0.875rem",
              "&:focus": {
                borderColor: "#10b981", // emerald-500
                boxShadow: "0 0 0 2px rgba(16, 185, 129, 0.2)", // emerald-500 with opacity
              },
            },

            // Social buttons
            socialButtonsBlockButton: {
              border: "1px solid #cbd5e1", // slate-300
              borderRadius: "0.5rem",
              color: "#334155", // slate-700
              fontWeight: "500",
              "&:hover": {
                backgroundColor: "#f8fafc", // slate-50
              },
            },
            socialButtonsIconButton: {
              borderRadius: "0.5rem",
              "&:hover": {
                backgroundColor: "#f8fafc", // slate-50
              },
            },

            // Footer elements
            footerActionLink: {
              color: "#059669", // emerald-600
              fontWeight: "500",
              "&:hover": {
                color: "#047857", // emerald-700
                textDecoration: "none",
              },
            },
            footerActionText: {
              color: "#64748b", // slate-500
            },

            // Divider
            dividerLine: {
              backgroundColor: "#e2e8f0", // slate-200
            },
            dividerText: {
              color: "#64748b", // slate-500
              fontSize: "0.875rem",
            },

            // Alerts and notifications
            alert: {
              backgroundColor: "#f0fdf4", // emerald-50
              border: "1px solid #a7f3d0", // emerald-200
              color: "#047857", // emerald-700
              borderRadius: "0.5rem",
              padding: "0.75rem 1rem",
            },

            // OTP/code input fields
            otpCodeFieldInput: {
              border: "1px solid #cbd5e1", // slate-300
              borderRadius: "0.5rem",
              "&:focus": {
                borderColor: "#10b981", // emerald-500
                boxShadow: "0 0 0 2px rgba(16, 185, 129, 0.2)", // emerald-500 with opacity
              },
            },

            // Identity preview
            identityPreviewEditButton: {
              color: "#059669", // emerald-600
              "&:hover": {
                color: "#047857", // emerald-700
              },
            },
          },
          layout: {
            socialButtonsVariant: "blockButton",
            socialButtonsPlacement: "bottom",
          },
        }}
      />
    </div>
  );
}
