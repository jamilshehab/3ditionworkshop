import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./assets/css/tailwind.css";
import "./assets/css/material.css";
import "./globals.css";
import { Footer, Navbar } from "./components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="LTR">
      <body className="">
        <Navbar navClass="nav-light" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
