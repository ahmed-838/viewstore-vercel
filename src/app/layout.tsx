import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "View Store",
  description: "View Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="data:," />
        <link rel="shortcut icon" href="https://via.placeholder.com/32x32?text=VS" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://via.placeholder.com/32x32?text=VS" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://via.placeholder.com/16x16?text=VS" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://via.placeholder.com/180x180?text=VS" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
