import "./headey.styles.css";
import Image from "next/image";
export default function Header() {
  return (
    <div className="headerHe">
      <h1 className="main-title"></h1>
      <Image
        className="imgBorder object-cover h-112 w-full shadow-xl"
        src={`/cava1220/header/celebrar.jpg`}
        alt="Celebración"
        width={1200}
        height={400}
      />
    </div>
  );
}
/*1px solid #baab8f rounded-lg border-4 border-yellow-300*/
