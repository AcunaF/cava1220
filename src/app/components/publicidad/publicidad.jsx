import "./styles.css"
import Image from "next/image";
export default function Publicidad (){

    return (<div className="m-2 rounded-lg shadow-lg">
    <h1 className="text-4xl font-bold text-white-300 mb-4 text-center">
   Malbec COLLECTIONS       </h1>
    <Image
      className="object-cover h-112 w-full rounded-lg shadow-xl"
      src={`/nicasiaVineyard.png`}
      alt="Celebración"
      width={800}
      height={400}
    />
  </div>)
}

{/*    border: 4px solid #baab8f;
 */}