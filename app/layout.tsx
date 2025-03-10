"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "../components/navbar";
import { usePathname } from "next/navigation";
import { Providers } from "@/components/providers";

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
  const isDashboard = pathname.startsWith("/dashboard");
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {!isDashboard && <Navbar />}
          <main className="min-h-screen">{children}</main>
        </Providers>
        <footer className="dark:bg-purple-900 bg-gray-800 text-white p-4 text-center">
          © Resume Ready
        </footer>
      </body>
    </html>
  );
}
