"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import {Navbar} from "../components/navbar";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith('/dashboard');
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      {!isDashboard && <Navbar />}
      <main className="min-h-screen">
      {children}
      </main>
          <footer className="bg-slate-900 text-white p-4 text-center">
          © Resume Ready
          </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
