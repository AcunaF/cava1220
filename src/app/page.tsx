import api from "../api";
import Link from "next/link";
import Banner from "../../src/app/components/baner/baner";
import Header from "../../src/app/components/header/header";
import Publicidas from "../../src/app/components/publicidad/publicidad";
import Publicidad2 from "../../src/app/components/publicidad2/publicidad2";
import Image from "next/image";

export default async function Home() {
  const restaurants = await api.list();

  return (
    <div>
      <div className="m-5">
        <Header />
        <Banner />
      </div>
      <div className="m-5">
        <Publicidas />
      </div>
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 p-9">
        {restaurants.map((restaurant) => {
          return (
            <div
              key={restaurant.id}
              className="p-4 border border-gray-200 rounded-lg"
            >
              <Image
                width={200} // Ajusta el ancho según el tamaño real de la imagen
                height={100} // Ajusta la altura según el tamaño real de la imagen
                alt={restaurant.name}
                className="mb-3 h-[300px] w-full object-cover"
                src={restaurant.image}
              />
              <h2 className="text-xl font-bold mb-2">
                <Link
                  className="text-lg font-semibold hover:underline"
                  href={`/${restaurant.id}`}
                >
                  {restaurant.name}
                </Link>
              </h2>
              <p>{restaurant.description}</p>
            </div>
          );
        })}
      </section>
      <div>
        <Publicidad2 />
      </div>
    </div>
  );
}
