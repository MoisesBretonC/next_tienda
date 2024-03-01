import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "app/componentes/shared/header/Header";
import { Footer } from "app/componentes/shared/Footer";
Header
Footer

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
     
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
       
    </html>
  );
}
