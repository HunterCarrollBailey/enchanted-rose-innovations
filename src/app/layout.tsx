import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SectionCard from "@/components/Tags/SectionCard";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

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
        className={
          inter.className +
          "flex flex-col flex-wrap min-h-screen bg-slate-950 bg-rose bg-contain bg-no-repeat bg-center text-slate-200"
        }
      >
        <main className="flex flex-col flex-wrap min-h-screen overflow-scroll noscrollbar backdrop-blur-sm">
        <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
