import "./headey.styles.css"
import Image from "next/image";
export default function Header() {
    return (
      <div className="headerHe">
      <h1 className="main-title">
  BEBIDAS • EVENTOS • CATAS • DEGUSTACIONES
</h1>
        <Image
          className="w-full h-auto rounded-lg border-4 border-yellow-300 shadow-xl"
          src={`/cava1220/header/celebrar.jpg`}
          alt="Celebración"
          width={200}
          height={100}
        />
      </div>
    );
  }
  