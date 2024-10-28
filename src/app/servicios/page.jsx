import Image from "next/image";
import Link from "next/link";
import api from "../../apiServicios";
import "./styles.css";

export default async function Servicios() {
  // Obtiene la lista de servicios
  const servicios = await api.list();

  return (
    <div className="">
      <h1 className="text-4xl font-bold text-white-300 mt-5 mb-5 text-center">
        SERVICIOS • ESPACIO • PROPUESTA • DEGUSTACIONES
      </h1>

      <section className="restaurants-grid">
        {servicios.map((servicio) => (
          <div key={servicio.id} className="restaurant-card">
            <Image
              className="restaurant-image" // Asegura que la clase se aplique a la imagen
              width={500}
              height={250}
              alt={servicio.name}
              src={servicio.image}
            />
            <h2 className="restaurant-name">
              <Link className="restaurant-link" href={`/${servicio.id}`}>
                {servicio.name}
              </Link>
            </h2>
            <p className="restaurant-description">{servicio.description}</p>
          </div>
        ))}
      </section>

      <h2 className="text-4xl font-bold text-white-300 mt-5 mb-5 text-center">
        <Link
          className="restaurant-link"
          href={`/distribuidora}`}
          style={{ color: "white" }}
        >
          Contacto aqui
        </Link>
      </h2>
    </div>
  );
}
