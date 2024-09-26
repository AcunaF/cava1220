import "./headey.styles.css"
import Image from "next/image";
export default function Header() {
    return (
      <div className="headerHe">
      <h1 className="main-title">
  BEBIDAS • EVENTOS • CATAS • DEGUSTACIONES
</h1>
        <Image
          className="imgBorder w-full h-auto shadow-xl"
          src={`/cava1220/header/celebrar.jpg`}
          alt="Celebración"
          width={700}
          height={200}
        />
      </div>
    );
  }
  /*1px solid #baab8f rounded-lg border-4 border-yellow-300*/