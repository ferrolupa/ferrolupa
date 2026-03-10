import Script from "next/script";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: {
    default: "FERROLUPA",
    template: "FERROLUPA | %s",
  },
    icons: {
    icon: "/icon.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 👇 ESTA PARTE ES IMPORTANTE
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* SCRIPT NECESARIO PARA CUSDIS */}
        <Script
          src="https://cusdis.com/js/cusdis.es.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );



}
