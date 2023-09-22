import Navbar from "@/components/navbar/Navbar";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Taifur | Portfolio",
  description:
    "full stack Taifur portfolio website with typescript and tailwind css",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-gradient-to-r from-slate-900 to-slate-700`}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
