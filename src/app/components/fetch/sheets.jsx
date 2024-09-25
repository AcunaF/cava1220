import React, { useEffect, useState } from "react";
import "./sheets.css";
import Image from "next/image";
import salentein from "@/public/tragos.webp";
import glen from "@/public/glenfidich.png";
const Fetchsheets = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 10;

  // Nuevos estados para búsqueda
  const [tipoBusqueda] = useState("tipo");
  const [nombreBusqueda, setNombreBusqueda] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://docs.google.com/spreadsheets/d/1IcefCvLeQZFKrWLaUpBWdYfoUqdj_kHoZcaRDJTONkM/pub?output=csv"
        );
        const data = await response.text();

        // Convertir CSV a un array de objetos
        const rows = data.split("\n").map((row) => row.split(","));

        // Obtener los encabezados y limpiar espacios
        const headers = rows[0].map((header) => header.trim());

        // Filtrar productos
        const productosFiltrados = rows
          .slice(1)
          .map((row) => {
            return {
              Nombre: row[headers.indexOf("Nombre")],
              Tipo: row[headers.indexOf("Tipo")],
              Neto: row[headers.indexOf("Neto")],
              Lista: row[headers.indexOf("Lista")],
              Stock: row[headers.indexOf("Stock")] || "No disponible",
            };
          })
          .filter((producto) => producto.Nombre); // Filtra productos sin nombre

        setProductos(productosFiltrados);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setCargando(false);
      }
    };

    fetchData();
  }, []);

  if (cargando) {
    return <p>Cargando...</p>;
  }

  // Filtrado de productos basado en la búsqueda
  const productosFiltrados = productos.filter((producto) => {
    const tipoCoincide =
      tipoBusqueda === "tipo" ||
      producto.Tipo.toLowerCase() === tipoBusqueda.toLowerCase();
    const nombreCoincide = producto.Nombre.toLowerCase().includes(
      nombreBusqueda.toLowerCase()
    );
    return tipoCoincide && nombreCoincide;
  });

  // Calcular el índice inicial y final de productos a mostrar según la página
  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosPaginados = productosFiltrados.slice(
    indicePrimerProducto,
    indiceUltimoProducto
  );

  // Número total de páginas
  const totalPaginas = Math.ceil(
    productosFiltrados.length / productosPorPagina
  );

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  return (
    <div className="">
      <div className="imgcontainer m-5">
        <Image
          src={salentein}
          alt="img"
          className="imgtragos"
          width={2200}
          height={90}
        />
      </div>
      {/* Formulario de búsqueda */}
      <div>
        <label className="m-5">Buscar :</label>
        <input
          className="m-2 p-1"
          type="text"
          placeholder="Ingrese el término de búsqueda"
          value={nombreBusqueda}
          onChange={(e) => setNombreBusqueda(e.target.value)}
        />
      </div>

      <div className="productos-grid">
        {productosPaginados.length > 0 ? (
          productosPaginados.map((producto, index) => (
            <div key={index} className="card">
              <h2>{producto.Nombre}</h2>
              <Image
          src={glen}
          alt="img"
          className="imgtragos"
          width={2200}
          height={90}
        />
              <p>Tipo: {producto.Tipo}</p>
              <p>Neto: {producto.Neto}</p>
              <p>Lista: {producto.Lista}</p>
              <p>Stock: {producto.Stock}</p>
              <div className="card-actions">
                <button onClick={() => alert("Agregado al carrito")}>
                  Agregar
                </button>
                <button onClick={() => alert("Quitado del carrito")}>
                  Quitar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>

      {/* Paginación */}
      <div className="pagination">
        <button
          className="m-5"
          disabled={paginaActual === 1}
          onClick={() => cambiarPagina(paginaActual - 1)}
        >
          Anterior
        </button>
        <span className="text-yellow-300 shadow-xl">
          Página {paginaActual} de {totalPaginas}
        </span>
        <button
          className="m-5"
          disabled={paginaActual === totalPaginas}
          onClick={() => cambiarPagina(paginaActual + 1)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Fetchsheets;
