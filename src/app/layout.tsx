import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import React from "react";
import Providers from "./providers";

const poly = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "decaydance flash game archive",
  description: "heck",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script async src="https://unpkg.com/@ruffle-rs/ruffle"></script>
      </head>
      <body
        className={`${poly.className} flex min-h-screen min-w-screen flex-col items-center justify-center px-24 text-slate-900 dark:text-white text-wrap`}
      >
        <ThemeProvider enableSystem={true} attribute="class">
          <Providers>
            <Header />
            <div className="max-w-screen-2xl w-full flex-1">{children}</div>
            <Footer />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
