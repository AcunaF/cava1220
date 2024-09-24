import "./headey.styles.css"
export default function Header() {
    return (
      <div className="rounded-lg shadow-lg">
      <h1 className="main-title">
  TIENDA DE BEBIDAS • EVENTOS • CATAS • DEGUSTACIONES
</h1>
        <img
          className="w-full h-auto rounded-lg border-4 border-yellow-300 shadow-xl"
          src={`/cava1220/header/celebrar.jpg`}
          alt="Celebración"
        />
      </div>
    );
  }
  