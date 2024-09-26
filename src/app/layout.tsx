import type { Metadata } from "next";
import Footer from "../app/footer/footer";
import NavBar from "../app/components/navbar/navbar";
import Providers from "./providers";
import Loading from "./loading";
import { CartProvider } from "../app/CartContext";

import "./globals.css";
import { Suspense } from "react";

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
      <body className="grid min-h-screen grid-rows-[auto,1fr,auto]">
        <header className="fixed top-0 left-0 right-0 flex items-center justify-between text-xl font-bold leading-[4rem] bg-black border-b-4 border-white z-50">
            <NavBar />
        </header>
        
        <Suspense fallback={<Loading/>}>
          <Providers>
          <CartProvider>
            <main className="pt-[4rem] py-8">{children}</main>
            </CartProvider>
          </Providers>
        </Suspense>
        <footer className="text-center leading-[3rem] opacity-70">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
