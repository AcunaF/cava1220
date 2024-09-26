import "./styles.css"
import Image from "next/image"
export default function Publicidad2 (){
    return (<div className="rounded-lg shadow-lg m-2">
    <h1 className="font-bold text-white-300 text-center">
   Bodega destacada del mes        </h1>
    <Image
      className="imgborder w-full h-auto rounded-lg shadow-xl"
      src={`/cava1220/header/Banner-Rutini.webp`}
      alt="Celebración"
      width={1200}
      height={500}
    />
  </div>)
}