import type { Metadata } from "next";
import "@/app/globals.css";
import SiteLayout from "@/components/SiteLayout";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Welcome to K's Chicken",
  description: "135, Wennington Road, Rainham RM13 9TR Call us on 01708780264 Your neighbourhood stop for golden fried chicken, wings, burgers, chips and family boxes on Wennington Road.",
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
   
        <div translate="no">
          <SiteLayout>{children}</SiteLayout>

          {/*  Toast Notification System */}
          <Toaster
            position="top-center"
            containerStyle={{ top: "30%" }}
            toastOptions={{
              style: {
                borderRadius: "10px",
                padding: "12px 16px",
                background: "#1e293b",
                color: "#f8fafc",
              },
              success: { style: { background: "#10b981", color: "#fff" } },
              error: { style: { background: "#ef4444", color: "#fff" } },
              loading: { style: { background: "#f59e0b", color: "#fff" } },
            }}
            reverseOrder={false}
          />
        </div>
    
  );
}
