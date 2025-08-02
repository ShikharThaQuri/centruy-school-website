import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const popins = Poppins({
  variable: "--font-poppins",
  style: ["normal", "italic"],

  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Century Educational Academy",
    template: "%s - Century Academy",
  },
  description: "We Have a warm wellcome to you in Century Educational Academy.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${popins.className} antialiased`}>{children}</body>
    </html>
  );
}
