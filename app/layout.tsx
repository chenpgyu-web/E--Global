import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Global | Buyer Trust Workspace",
  description:
    "E-Global helps exporters share trust information, order updates, and buyer communication in one structured workspace."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
