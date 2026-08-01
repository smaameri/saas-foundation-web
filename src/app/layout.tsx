import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaaS Foundation — B2B SaaS Starter for TypeScript",
  description:
    "An open-source, multi-tenant B2B SaaS starter with admin and customer portals, authentication, organizations, roles, and a typed API layer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="d4b3fdc1-b015-429b-8bef-5b8e7e68cd55"
      />
    </html>
  );
}
