import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexorian AI Feedback Analyzer",
  description: "AI-powered survey and customer feedback analysis with sentiment and themes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}