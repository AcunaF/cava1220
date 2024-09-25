import type { Metadata } from "next";
import Footer from "../app/footer/footer";
import Link from "next/link";
import Image from "next/image";
import Providers from "./providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Cava 1220 - Wine",
  description: "Venta de vinos, destilados, whisky y eventos",
  keywords: ["restaurant", "food", "eat", "dinner", "lunch"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-auto mb-10 grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
        <div className="container w-full">
          <header className="fixed top-0 left-0 right-0 flex items-center justify-between text-xl font-bold leading-[4rem] bg-black border-b-4 border-white z-50 w-full">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/cava1220/logoNegro.jpeg"
                  alt="Logo de Cava 1220"
                  width={600}
                  height={200}
                  className="w-auto max-w-[150px] m-2 ml-5"
                />
              </Link>
            </div>
            <nav className="flex flex-grow items-center justify-end space-x-6 mr-5">
              <Link href={`/eventos`}>Eventos</Link>
              <Link href={`/distribuidora`}>Distribuidora</Link>
              <Link href={`login`}>Login</Link>
            </nav>
          </header>
        </div>
        <Providers>
          <main className="pt-[4rem] py-8">{children}</main>
        </Providers>
        <footer className="text-center leading-[3rem] opacity-70">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
