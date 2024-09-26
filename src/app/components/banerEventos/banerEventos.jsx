"use client";
import "./BanerE.css"; 
import Image from "next/image";
export default function BannerEventos() {
    return (<div className="rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-white-300 mb-4 text-center">
       Eventos locales y Notas de interes      </h1>
       <div className="justify-center items-center w-full h-full">
      <div className="borderimg relative rounded-lg border-4 shadow-xl">
        <Image
          src={`/eventos/bannerE.jpg`}
          width={100}
          height={100}
          alt="Celebración"
          className="imgEventos object-cover"
        />
      </div>
    </div>
      </div>)
     
  
}
