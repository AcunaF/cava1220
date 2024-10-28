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
      name: "",
      description:"",
      image: "/servicios/cava1.png",
    },
    {
      id: "2",
      name: "espacio",
      description:"Contamos con un salon de eventos completamente quipado y decorado con un estilo moderno y elegante.Se puede adaptar a diferentes tipos de eventos, desde bodas y cumpleaños hasta reuniones corporativas. El espacio cuenta con mobiiliario de alta calidad, iluminacion adecuada, equipo de sonido y proyeccion y todas las comodidades nesesarias para garantizar un ambiente acogedor y funcional. TIENE UNA CAPACIDAD DE HASTA 150PERSONAS",
      image: "/servicios/cava2.png",
    },
    {
      id: "3",
      name: "catering",
      description:"Contamos con un servicio de catering propio de alta calidad. Ofrecemos una gran variedad de opciones gastronomicas para satisfacer los gustos y necesidades de nuestros clientes. Desde menus para banquetes hasta opsciones de catering tematicos, nos aseguramos de ofrecer una experiencia excepcional en cada evento",
      image: "/servicios/cava3.png",
    },
    {
      id: "4",
      name: "sonido e iluminacion",
      description:"Tenemos un equipo de sonido y proyeccion de ultima generacion. asi como servicios de iluminacion y tecnologia audiovisual.Queremos garantizar que los eventos cuenten con los recursos tecnicos nesesarios para presentaciones, discursos, proyecciones y cualquier otra necesidad audiovisual que puedan tener nuestros clientes.",
      image: "/servicios/cava4.png",
    },
    {
      id: "5",
      name: "Barras Móviles",
      description:"Barras moviles con dos propuetas diferentes. CLASIC servicio standar, cocteleria nacional y PREMIUM servicio deluxe, cocteleria nacional e importada. De acuerdo a las preferencias del cliente",
      image: "/servicios/cava5.png",
    },
    {
      id: "6",
      name: "Planificacion",
      description:"Nuestro equipo de profecionales altamente capacitados ofrece servicios de planificacion y coordinacion de eventos. Asesoramos a nuestros clientes en cada detalle, desde la seleccion de bebida y menu, decoracion, logistica y la coordinacion del dia del evento. Nos aseguramos de que cada evento sea unico y personalizado. Que disfruten sin preocupaciones!",
      image: "/servicios/cava6.png",
    },
    {
      id: "7",
      name: "Otros servicios",
      description:"Para complementar la experiencia de nuestros clientes, ofrecemos una serie de servicios adicionales, guardarropa, seguridad, sommelier, musica en vivo y cualquier otro servicio necesario para garantizar el confort y satisfaccion de nuestros clientes y sus invitados.",
      image: "/servicios/cava7.png",
    },
    {
      id: "8",
      name: "Condiciones generales",
      description:"Para reservar la fecha de tu evento, te solicitamos abonar el 50% del valor presupuestado. Todos los importes pagos congelan el preicio desde la fecha de realizacion del mismo",
      image: "/servicios/cava8.png",
    },
    {
      id: "9",
      name: "",
      description:"",
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
