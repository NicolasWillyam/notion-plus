import React from "react";
import Navbar from "./_components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full mt-40">{children}</main>
    </div>
  );
}
