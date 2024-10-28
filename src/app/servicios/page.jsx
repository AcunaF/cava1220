import Image from "next/image";
import api from "../../apiServicios";
import "./styles.css";

export default async function Servicios() {
  // Obtiene la lista de servicios
  const servicios = await api.list();

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-white-300 m-10 text-center">
      SERVICIOS QUE TRANSFORMAN TU ESPACIO
      </h1>

      <section className="restaurants-grid">
        {servicios.map((servicio) => (
          <div key={servicio.id} className="restaurant-card">
            <Image
              className="restaurant-image"
              width={500}
              height={250}
              alt={servicio.name}
              src={servicio.image}
            />
            <h2 className="restaurant-name">
              <p className="restaurant-link mt-2" style={{color:"#baab8f",}}  href={`/${servicio.id}`}>
                {servicio.name.toUpperCase()}
              </p>
            </h2>
            <p className="restaurant-description">{servicio.description}</p>
          </div>
        ))}
      </section>

      <h2 className="text-4xl font-bold text-white-300 mt-5 mb-5 text-center"
       style={{ color: "#baab8f" }}>¿Necesitas más información o cotizacion sobre un servicio?
      </h2>
      <h4 className="text-3xl font-bold text-white-300 mt-5 mb-5 text-center"
       style={{ color: "#baab8f" }}>dejanos tu consulta</h4>
      <div className="">
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" required />
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
