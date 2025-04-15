import { UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-semibold text-slate-800 mb-6">
        Your Profile
      </h1>

      <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
        <UserProfile
          appearance={{
            variables: {
              colorPrimary: "#059669", // emerald-600
              colorText: "#1e293b", // slate-800
              colorTextSecondary: "#475569", // slate-600
              colorBackground: "#ffffff",
              colorInputBackground: "#f8fafc", // slate-50
              colorInputText: "#334155", // slate-700
              borderRadius: "0.75rem",
            },
            elements: {
              // Page layout and structure
              card: {
                boxShadow: "none",
                border: "none",
              },
              navbar: {
                backgroundColor: "#f8fafc", // slate-50
                borderBottom: "1px solid #e2e8f0", // slate-200
              },
              navbarButton: {
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#059669", // emerald-600
                },
              },
              navbarButtonActive: {
                color: "#059669", // emerald-600
                fontWeight: "600",
                borderColor: "#059669", // emerald-600
              },

              // Form elements
              formButtonPrimary: {
                backgroundColor: "#059669", // emerald-600
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: "#047857", // emerald-700
                },
                textTransform: "none",
                transition: "all 0.2s ease",
              },
              formButtonReset: {
                color: "#059669", // emerald-600
                "&:hover": {
                  color: "#047857", // emerald-700
                },
              },
              formFieldLabel: {
                fontWeight: "500",
                color: "#334155", // slate-700
              },
              formFieldInput: {
                border: "1px solid #cbd5e1", // slate-300
                borderRadius: "0.5rem",
                "&:focus": {
                  borderColor: "#10b981", // emerald-500
                  boxShadow: "0 0 0 2px rgba(16, 185, 129, 0.2)", // emerald-500 with opacity
                },
              },

              // Profile section elements
              profileSectionTitle: {
                color: "#1e293b", // slate-800
                fontWeight: "600",
              },
              profileSectionPrimaryButton: {
                color: "#059669", // emerald-600
                "&:hover": {
                  color: "#047857", // emerald-700
                },
              },

              // Avatar elements
              avatarBox: {
                borderRadius: "0.5rem",
              },
              avatarImageActionsUpload: {
                backgroundColor: "#059669", // emerald-600
                "&:hover": {
                  backgroundColor: "#047857", // emerald-700
                },
              },

              // Alert messages
              alert: {
                backgroundColor: "#f0fdf4", // emerald-50
                border: "1px solid #a7f3d0", // emerald-200
                color: "#047857", // emerald-700
                borderRadius: "0.5rem",
              },
              alertText: {
                color: "#047857", // emerald-700
              },

              // Page section
              pageScrollBox: {
                padding: "1.5rem",
              },
            },
          }}
        />
      </div>
    </div>
  );
}
