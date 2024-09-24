
interface Eventos {
    id: string;
    title: string;
    description: string;
    date: Date; 
    location: string;
    image: string;
  }
  
  
const eventos = [
    {
      id: "1",
      title: "Cava 1220: A Weekend in Anytown",
      description:
        "Discover the hidden gems of Cava 1220, an upscale dining experience in Anytown, USA.",
      date: new Date("2023-06-20T18:00:00"),
      location: "Cava 1220, Tandil Argentina",
      image: "/eventos/cavaTeho.jpeg",
    },
    {
      id: "2",
      title: "The Art of Fine Dining: A Dinner Tour in Anytown",
      description:
        "Experience the art of fine dining at various restaurants in Anytown, USA.",
      date: new Date("2023-06-25T19:00:00"),
      location: "Anytown, USA",
      image: "/eventos/fineDining.jpeg",
    },
    {
      id: "3",
      title: "Festival del Vino Malbec en Mendoza",
      description:
        "Disfruta del mejor Malbec de Argentina en el corazón de Mendoza, con bodegas como Catena Zapata y Bodega Norton.",
      date: new Date("2024-04-10T17:00:00"),
      location: "Mendoza, Argentina",
      image: "/eventos/FestivalMendoza.jpeg",
    },
    {
      id: "4",
      title: "Cata de Vinos en Bodega Salentein",
      description:
        "Una exclusiva cata de vinos en Bodega Salentein, una de las más reconocidas en el Valle de Uco.",
      date: new Date("2024-05-15T18:00:00"),
      location: "Valle de Uco, Mendoza",
      image: "/eventos/Salentein.jpg",
    },
    {
      id: "5",
      title: "Ruta del Vino en San Juan",
      description:
        "Recorre las bodegas más tradicionales de San Juan y disfruta de sus mejores vinos en un evento de tres días.",
      date: new Date("2024-03-05T16:00:00"),
      location: "San Juan, Argentina",
      image: "/eventos/rutaSanJuan.jpeg",
    },
    {
      id: "6",
      title: "Día del Torrontés en Cafayate",
      description:
        "Celebra el Día del Torrontés en Cafayate con catas de vinos blancos únicos de la región y bodegas como El Esteco.",
      date: new Date("2024-02-20T15:00:00"),
      location: "Cafayate, Salta",
      image: "/eventos/semanatorrontes.jpg",
    },
    {
      id: "7",
      title: "Vendimia en Bodega Zuccardi",
      description:
        "Vive la Vendimia en Bodega Zuccardi con una experiencia completa de recolección de uvas y catas de sus mejores vinos.",
      date: new Date("2024-03-10T09:00:00"),
      location: "Mendoza, Argentina",
      image: "/eventos/vendimiaZ.jpeg",
    },
    {
      id: "8",
      title: "Experiencia Premium en Bodega Trapiche",
      description:
        "Disfruta de una cata premium en Bodega Trapiche con maridajes exclusivos y recorridos por los viñedos.",
      date: new Date("2024-06-18T18:00:00"),
      location: "Maipú, Mendoza",
      image: "/eventos/trapiche.jpeg",
    },
    {
      id: "9",
      title: "Festival del Bonarda en San Rafael",
      description:
        "Celebra el Bonarda, uno de los vinos emblemáticos de San Rafael, en un festival con degustaciones y música en vivo.",
      date: new Date("2024-09-22T17:00:00"),
      location: "San Rafael, Mendoza",
      image: "/eventos/bonarda.jpeg",
    },
    {
      id: "10",
      title: "Cata de Espumantes en Bodega Chandon",
      description:
        "Un evento especial dedicado a los espumantes en Bodega Chandon, la principal casa de espumosos en Argentina.",
      date: new Date("2024-12-05T19:00:00"),
      location: "Luján de Cuyo, Mendoza",
      image: "/eventos/chandon.jpeg",
    },
    {
      id: "11",
      title: "Noche de Vinos en Bodega Luigi Bosca",
      description:
        "Una noche de catas en Bodega Luigi Bosca, con vinos de alta gama y maridajes gourmet.",
      date: new Date("2024-11-10T20:00:00"),
      location: "Luján de Cuyo, Mendoza",
      image: "/eventos/bosca.jpg",
    },
    {
      id: "12",
      title: "Festival del Vino Patagónico en Neuquén",
      description:
        "Explora los vinos patagónicos en Neuquén con bodegas como Bodega del Fin del Mundo y Familia Schroeder.",
      date: new Date("2024-08-25T17:00:00"),
      location: "Neuquén, Argentina",
      image: "/eventos/patagonia.jpeg",
    }
  ];

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const apiEventos = {
  list: async (): Promise<Eventos[]> => {
    await sleep(750);

    return eventos;
  },
  fetch: async (id: Eventos["id"]): Promise<Eventos> => {
    await sleep(750);

    const evento = eventos.find((evento) => evento.id === id);

    if (!evento) {
      throw new Error(`Restaurant with id ${id} not found`);
    }

    return evento;
  },
};

export default apiEventos;
  