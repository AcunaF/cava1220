import apiEventos from "../../apiEventos";
import Link from "next/link";
import BannerEventos from "../components/banerEventos/banerEventos";
import Image from "next/image";
import "./styles.css"

export default async function Eventos() {
  // Obtener la lista de eventos del lado del servidor
  const eventos = await apiEventos.list();

  return (
    <div className="container mx-auto">
      <div className="m-5">
        <BannerEventos />
        <h1 className="text-3xl font-bold">Eventos</h1>
        <p>
          En esta sección podrás encontrar todos los eventos que están
          programados para ti.
        </p>
      </div>
      <div className="page-header">
      <section className=" grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {eventos.map((evento) => (
          <div
            key={evento.id}
            className="imgborder p-4 imgborder"
          >
            <Image
              alt={evento.title}
              className="mb-3 h-[300px] w-full object-cover"
              width={500}
              height={400}
              src={evento.image}
            />
            <h2 className="text-xl font-bold mb-2">
              <Link
                className="text-lg font-semibold hover:underline"
                href={`/${evento.id}`}
              >
                {evento.title}
              </Link>
            </h2>
            <p>{evento.description}</p>
            <br></br>
            <Link
              href={`/eventos/${evento.id}`}
              className="m-5 bg-gray-500 text-white px-4 py-2 hover:bg-gray-600"
            >
              ¿Quieres ir?
            </Link>
          </div>
        ))}
      </section>
      </div>
    </div>
  );
}
