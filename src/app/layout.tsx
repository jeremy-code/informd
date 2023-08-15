import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import { Analytics, AppProvider } from "@/components/Misc";

import "./globals.css";

const outfit = Outfit({ weight: "variable", subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://informd.news/"),
  title: "informd",
  description: "informd is an AI news aggregator.",
  authors: {
    name: "Jeremy Nguyen",
    url: "https://jeremy.ng",
  },
  publisher: "informd",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <Analytics />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
