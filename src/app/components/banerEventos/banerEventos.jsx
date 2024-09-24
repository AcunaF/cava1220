"use client";
import "./BanerE.css"; 
import Image from "next/image";
export default function BannerEventos() {
    return (<div className="m-10 p-5  rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-white-300 mb-4 text-center">
       Eventos locales, Fiestas provinciales y Notas de interes      </h1>
       <div className="flex justify-center items-center w-full h-full">
      <div className="relative rounded-lg border-4 border-yellow-300 shadow-xl">
        <Image
          src={`/eventos/bannerE.jpg`}
          width={1270}
          height={70}
          alt="Celebración"
          className="object-cover"
        />
      </div>
    </div>
      </div>)
     
  
}
