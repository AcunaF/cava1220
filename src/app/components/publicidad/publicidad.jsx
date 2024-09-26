import "./styles.css"
import Image from "next/image";
export default function Publicidad (){

    return (<div className="m-2 rounded-lg shadow-lg">
    <h1 className="text-4xl font-bold text-white-300 mb-4 text-center">
   Malbec COLLECTIONS       </h1>
    <Image
      className="imgborder w-full h-auto rounded-lg shadow-xl"
      src={`/cobos.webp`}
      alt="Celebración"
      width={1220}
      height={200}
    />
  </div>)
}

{/*    border: 4px solid #baab8f;
 */}