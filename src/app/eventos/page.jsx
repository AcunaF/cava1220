import apiEventos from "../../apiEventos";
import Link from "next/link";
import BannerEventos from "../components/banerEventos/banerEventos";
import Image from "next/image";

export default async function Eventos() {
  // Obtener la lista de eventos del lado del servidor
  const eventos = await apiEventos.list();

  return (
    <div className="container mx-auto ">
      <div className="mt-5 p-2" >
        <BannerEventos />
       
      </div>
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 ml-3 mr-3">
        {eventos.map((evento) => (
          <div
            key={evento.id}
            className="p-4 border border-gray-200 rounded-lg"
          >
            <Image
              alt={evento.title}
              className="mb-3 h-[300px] w-full object-cover"
              width={800}
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
  );
}
