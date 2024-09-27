import Image from "next/image";
import Link from "next/link";
import api from "../../../api";


export default async function Principal (){
    
    const restaurants = await api.list();

    return(
        <div>
        <h1 className="text-4xl font-bold text-white-300 mt-5 mb-5 mb-4 text-center">

        NOVEDADES • EVENTOS • CATAS • DEGUSTACIONES</h1>
    
          <section className="restaurants-grid">
            {restaurants.map((restaurant) => {
              return (
                <div key={restaurant.id} className="restaurant-card">
                  <Image
                  
                    width={1500} // Ajusta el ancho según el tamaño real de la imagen
                    height={900} // Ajusta la altura según el tamaño real de la imagen
                    alt={restaurant.name}
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
          </div>
    )
}