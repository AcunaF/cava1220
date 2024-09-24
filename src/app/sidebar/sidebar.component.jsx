import apiEventos from "../../apiEventos";
import Link from "next/link";
import Image from "next/image";

export default async function Sidebar() {
  const eventos = await apiEventos.list();

  return (
    <div className="col right-0 m-10">
      <a className="d-flex">
        {eventos.slice(0, 5).map((evento) => (
          <div

            key={evento.id}
            className="flex m-5 border-gray-200 rounded-lg"
          >
            <Image
              alt={evento.title}
              className="mb-31"
              width={50}
              height={30}
              src={evento.image}
            />
            <h2 className="text-xl font-bold mb-1">
              <Link
                className="m-5 text-lg font-semibold hover:underline"
                href={`/${evento.id}`}
              >
                {evento.title}
              </Link>

            </h2>
            <br></br>
           {/*              <small>{evento.description.substring(0, 50)}...</small>
 */}
          </div>
        ))}
      </a>
    </div>
  );
}




