import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Manrope } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Practice - Muhammad Kaif Nazeer",
  description:
    "This project i use for testing new things and for the practice of my skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <div>{children}</div>
      </body>
    </html>
  );
}
