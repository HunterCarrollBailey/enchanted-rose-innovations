import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";
import Rose from "@/assets/EnchantedRoseLogo.svg"
export const metadata: Metadata = {
  title: "Enchanted Rose Innovations",
  description: "Innovating Solutions Together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen min-w-full bg-slate-900 text-slate-200 bg-rose bg-contain bg-no-repeat bg-center bg-fixed`}
      >
        <div className="min-h-screen min-w-screen backdrop-blur-sm flex flex-col items-center p-5 md:p-10 animate-fade animate-once animate-duration-[2500ms] animate-ease-in">
          <Header />
          <main className="mt-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
