import "./styles.css"
import Image from "next/image";
export default function Publicidad (){

    return (<div className="rounded-lg shadow-lg">
    <h1 className="text-4xl font-bold text-white-300 mb-4 text-center"         style={{color: "#baab8f"}}
    >
   Malbec COLLECTIONS       </h1>
    <div className="">
    <Image
      className="restaurant-card object-cover h-112 w-full rounded-lg shadow-xl"
      src={`/nicasiaVineyard.png`}
      alt="Celebración"
      width={800}
      height={400}
    />
    </div>
  </div>)
}

{/*    border: 4px solid #baab8f;
 */}