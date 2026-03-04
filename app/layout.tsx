import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Reclaim OS — Take Back Your Screen Time",
  description:
    "Reclaim OS is the Android launcher that helps you break scroll loops, focus faster, and see every minute you win back.",
  metadataBase: new URL("https://reclaimos.com"),
  openGraph: {
    title: "Reclaim OS — Take Back Your Screen Time",
    description:
      "The Android launcher that helps you break scroll loops, focus faster, and see every minute you win back.",
    url: "https://reclaimos.com",
    siteName: "Reclaim OS",
    locale: "en_US",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reclaim OS — Take Back Your Screen Time",
    description:
      "The Android launcher that helps you break scroll loops, focus faster, and see every minute you win back.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://reclaimos.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
