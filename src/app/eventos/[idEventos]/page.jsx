"use client";
import apiEventos from "../../../apiEventos";
import { useParams } from "next/navigation";
import Link from "next/link";
import PaymentMethods from "../../components/metodosPago/paymentMethods";
import Image from "next/image";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Eventos() {
  const { idEventos } = useParams();

  const eventos = await apiEventos.list();
  console.log("ID de Eventos:", idEventos);

  const evento = eventos.find((e) => e.id === idEventos);

  if (!evento) {
    return <div>No se encontró el evento.</div>;
  }

  const formattedDate = evento.date.toLocaleDateString();

  return (
    <div className="container mx-auto top-5">
      <section className="top-5 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        <div
          key={evento.id}
          className="mt-5 p-4 border border-gray-200 rounded-lg"
        >
          <Image
            alt={evento.title}
            className="mb-3 h-[300px] w-full object-cover"
            width={100}
            height={200}
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
          <p><b>Description:</b> {evento.description}</p>
          <p><b> Date</b> {formattedDate}</p>
          <div className="flex">
            <PaymentMethods />
          </div>
        </div>
        <div className="absolute right-0 m-10">
        </div>
        
      </section>
      <button className="m-5">
          <Link href="/eventos">
            <b>Go back to Events</b> 
          </Link>
        </button>
    </div>
  );
}
