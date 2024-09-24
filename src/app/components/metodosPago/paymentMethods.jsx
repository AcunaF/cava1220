"use client";
import React from "react";
import "./styles.css"
import Image from "next/image";


export default function PaymentMethods() {
  return (
    <section className="mt-8 p-6">
      <h2 className="text-2xl font-semibold mb-6 border-b pb-2 border-gray-200">Métodos de Pago</h2>
      <ul className="space-y-6">
        <li className="flex items-center space-x-4 p-4 bg-gray-50  shadow-sm">
          <imgage
            src="/pagos/mercado-pago.webp"
            alt="Mercado Pago"
            className="h-12 w-auto object-contain"
          />
          <p className=" text-black text-lg font-medium">Mercado Pago</p>
        </li>
        <li className="flex items-center space-x-4 p-4 bg-gray-50  shadow-sm">
          <Image
            src="/pagos/transferencia.png"
            alt="Transferencia Bancaria"
            width={100}
            height={200}
            className="h-12 w-auto object-contain"
          />
        </li>
      </ul>
    </section>
  );
}
