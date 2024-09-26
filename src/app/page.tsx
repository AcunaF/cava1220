import api from "../api";
import Link from "next/link";
import Banner from "../../src/app/components/baner/baner";
import Header from "../../src/app/components/header/header";
import Publicidas from "../../src/app/components/publicidad/publicidad";
import Publicidad2 from "../../src/app/components/publicidad2/publicidad2";
import Image from "next/image";
import "./page.styles.css";

export default async function Home() {
  const restaurants = await api.list();

  return (
    <div className="container mx-auto">
      <div className="m-8">
        <Header />
        <Banner />
      </div>
      <div className="m-">
        <Publicidas />
      </div>
      <section className="restaurants-grid">
        {restaurants.map((restaurant) => {
          return (
            <div key={restaurant.id} className=" restaurant-card">
              <Image
                width={500} // Ajusta el ancho según el tamaño real de la imagen
                height={900} // Ajusta la altura según el tamaño real de la imagen
                alt={restaurant.name}
                className="restaurant-image"
                src={restaurant.image}
              />
              <h2 className="restaurant-name">
                <Link className="restaurant-link" href={`/${restaurant.id}`}>
                  {restaurant.name}
                </Link>
              </h2>
              <p className="restaurant-description">{restaurant.description}</p>
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
