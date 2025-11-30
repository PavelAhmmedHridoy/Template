import type { Metadata } from "next";

import "./db.css";

import { Toaster } from "@db/elements/ui/sonner";

export default function RootLayout({
  children
}){
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
