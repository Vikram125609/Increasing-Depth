import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecoilContextProvider from "@/utils/RecoilContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <RecoilContextProvider>
        <body className={inter.className}>
          <nav className="mb-5">Navbaar</nav>
          {children}
          <footer className="mt-5">Footer</footer>
        </body>
      </RecoilContextProvider>
    </html>
  );
}
