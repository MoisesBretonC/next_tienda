import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "app/componentes/header";
Header

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("pepe pecas")
  return (
    <><Header /><html lang="en">
      <body className={inter.className}>{children}
        {children}
      </body>
    </html></>
  );
}
