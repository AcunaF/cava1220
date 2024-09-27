/* eslint-disable */
interface Restaurant {
  id: string;
  name: string;
  image: string;
  description: string;
  address: string;
  score: number;
  ratings: number;
}

const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Incorporacion Bodega Falasco",
    description:"En el año 2008, Guillermo García Lamadrid de orígenes caribeños, adquiere una antigua Bodega fundada en 1959, ubicada en el distrito de La Compuertas, Luján de Cuyo. Desde aquí comienza una gran transformación, invirtiéndose en tecnología, capacidad y reacondicionando las instalaciones tal como las vemos hoy, llegando a tener una capacidad total 2.200.000 de litro",
    address: "Mendoza, Las compuertas",
    score: 4.5,
    ratings: 100,
    image: "/promociones/Falasco.jpeg",
  },
  {
    id: "2",
    name: "Degustacion bodega Mil suelos",
    description:
      "A fine dining experience with a menu that changes daily based on the freshest ingredients available.",
    address: "123 Main St. Anytown USA",
    score: 4.5,
    ratings: 100,
    image: "/cava1220/bodega.jpeg",
  },
  {
    id: "3",
    name: "Menu",
    description: "Authentic Italian cuisine in a cozy atmosphere with outdoor seating available.",
    address: "456 Oak Ave. Anytown USA",
    score: 4.2,
    ratings: 80,
    image: "/cava1220/menu.jpeg",
  },
  {
    id: "4",
    name: "Piccolo Bamfi Conclave",
    
    description:
      "A family-friendly restaurant with a wide variety of dishes. including vegetarian and gluten-free options.",
    address: "789 Elm St. Anytown USA",
    score: 4.8,
    ratings: 120,
    image: "/cava1220/vinos.jpeg",
  },
  {
    id: "5",
    name: "Nicasia Malbec",
    description: "El concepto de Bodega de familia ha sido desarrollado desde siempre por los emblemáticos hacedores de vino que lograron los grandes íconos de la historia y que sorprendieron al mundo marcando estilos.",
    address: "Mendoza, Lujan de cuyo",
    score: 4.0,
    ratings: 60,
    image: "/promociones/Nicasia.jpeg",
  },
  {
    id: "6",
    name: "The Spice Route",
    description: "A fusion restaurant that combines the flavors of India. Thailand. and China.",
    address: "246 Main St. Anytown USA",
    score: 4.6,
    ratings: 90,
    image:"/restaurants/6.jpg",
  },
  {
    id: "7",
    name: "After viernes 13-7",
    description: "A seafood restaurant with a focus on locally-sourced. sustainable ingredients.",
    address: "369 Beach Blvd. Anytown USA",
    score: 4.3,
    ratings: 70,
    image: "/cava1220/after13-7.jpeg",
  },
  {
    id: "8",
    name: "The Garden Cafe",
    description: "A vegetarian restaurant with a beautiful outdoor garden seating area.",
    address: "753 Maple St. Anytown USA",
    score: 4.9,
    ratings: 150,
    image: "/restaurants/8.jpg",
  },
  {
    id: "9",
    name: "The Burger Joint",
    description: "A classic American diner with a wide variety of burgers. fries. and milkshakes.",
    address: "852 Oak Ave. Anytown USA",
    score: 3.9,
    ratings: 50,
    image:"/restaurants/9.jpg",
  },
  {
    id: "10",
    name: "The Cozy Corner",
    description:
      "A small cafe with a warm and inviting atmosphere. serving breakfast and lunch dishes.",
    address: "963 Main St. Anytown USA",
    score: 4.7,
    ratings: 110,
    image: "/restaurants/10.jpg",
  },
  
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const api = {
  list: async (): Promise<Restaurant[]> => {
    await sleep(750);

    return restaurants;
  },
  fetch: async (id: Restaurant["id"]): Promise<Restaurant> => {
    await sleep(750);

    const restaurant = restaurants.find((restaurant) => restaurant.id === id);

    if (!restaurant) {
      throw new Error(`Restaurant with id ${id} not found`);
    }

    return restaurant;
  },
};

export default api;
