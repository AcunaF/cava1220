/* eslint-disable */
interface Servicios {
  id: string;
  name: string;
  image: string;
  description: string;
}

const servicios: Servicios[] = [
  {
      id: "1",
      name: "propuesta",
      description:"eventos sociales y corporativos",
      image: "/servicios/cava1.png",
    },
    {
      id: "2",
      name: "espacio",
      description:"espacio",
      image: "/servicios/cava2.png",
    },
    {
      id: "3",
      name: "catering",
      description:"eventos sociales y corporativos",
      image: "/servicios/cava3.png",
    },
    {
      id: "4",
      name: "sonido e iluminacion",
      description:"eventos sociales y corporativos",
      image: "/servicios/cava4.png",
    },
    {
      id: "5",
      name: "barras",
      description:"eventos sociales y corporativos",
      image: "/servicios/cava5.png",
    },
    {
      id: "6",
      name: "planificacion",
      description:"eventos sociales y corporativos",
      image: "/servicios/cava6.png",
    },
    {
      id: "7",
      name: "otros servicios",
      description:"eventos sociales y corporativos",
      image: "/servicios/cava7.png",
    },
    {
      id: "8",
      name: "condiciones generales",
      description:"eventos sociales y corporativos",
      image: "/servicios/cava8.png",
    },
    {
      id: "9",
      name: "lugar perfecto",
      description:"eventos sociales y corporativos",
      image: "/servicios/cava9.png",
    },


]

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const api = {
  list: async (): Promise<Servicios[]> => {
    await sleep(750);
    return servicios;
  },
  fetch: async (id: Servicios["id"]): Promise<Servicios> => {
    await sleep(750);
    const servicio = servicios.find((servicio) => servicio.id === id);
    if (!servicio) {
      throw new Error(`Servicio con id ${id} no encontrado`);
    }
    return servicio;
  },
};

// Exportación por defecto del objeto api
export default api;
