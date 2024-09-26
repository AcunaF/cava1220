import "./styles.css"
import Image from "next/image";
export default function Publicidad (){

    return (<div className="m-5 p-5  rounded-lg shadow-lg">
    <h1 className="text-4xl font-bold text-white-300 mb-4 text-center">
   Malbec COLLECTIONS       </h1>
    <Image
      className="imgborder w-full h-auto rounded-lg shadow-xl"
      src={`/cava1220/header/trivento.webp`}
      alt="Celebración"
      width={900}
      height={500}
    />
  </div>)
}

{/*    border: 4px solid #baab8f;
 */}