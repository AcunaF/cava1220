'use client'
import React, { useEffect, useState } from "react";
import "./sheets.css";
import Image from "next/image";
import salentein from "@/public/tragos.webp";
import glen from "@/public/glenfidich.png";
import { useCart } from "../../CartContext"; 

const Fetchsheets = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 10;
  // Estados para búsqueda
  const [tipoBusqueda] = useState("tipo");
  const [nombreBusqueda, setNombreBusqueda] = useState("");

  // Usa el carrito del contexto
  const { addToCart, removeFromCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://docs.google.com/spreadsheets/d/1IcefCvLeQZFKrWLaUpBWdYfoUqdj_kHoZcaRDJTONkM/pub?output=csv"
        );
        const data = await response.text();

        const rows = data.split("\n").map((row) => row.split(","));
        const headers = rows[0].map((header) => header.trim());

        const productosFiltrados = rows.slice(1).map((row) => ({
          Nombre: row[headers.indexOf("Nombre")],
          Tipo: row[headers.indexOf("Tipo")],
          Neto: row[headers.indexOf("Neto")],
          Lista: row[headers.indexOf("Lista")],
          Stock: row[headers.indexOf("Stock")] || "No disponible",
        })).filter((producto) => producto.Nombre);

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

  const productosFiltrados = productos.filter((producto) => {
    const tipoCoincide = tipoBusqueda === "tipo" || producto.Tipo.toLowerCase() === tipoBusqueda.toLowerCase();
    const nombreCoincide = producto.Nombre.toLowerCase().includes(nombreBusqueda.toLowerCase());
    return tipoCoincide && nombreCoincide;
  });

  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosPaginados = productosFiltrados.slice(indicePrimerProducto, indiceUltimoProducto);

  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  return (
    <div>
      <div className="container mx-auto imgcontainer m-5">
        <Image src={salentein} alt="img" className="imgtragos" width={900} height={400} />
      </div>

      <div className="search-container">
        <input
          style={{ width: "70%" }}
          className="search-input mx-auto"
          type="text"
          placeholder="Ingrese el término de búsqueda"
          value={nombreBusqueda}
          onChange={(e) => setNombreBusqueda(e.target.value)}
        />
      </div>

      <div className="container mx-auto">
        <div className="productos-grid">
          {productosPaginados.length > 0 ? (
            productosPaginados.map((producto, index) => (
              <div key={index} className="card">
                <h2>{producto.Nombre}</h2>
                <Image
                  src={glen}
                  alt="img"
                  className="imgtragos"
                  width={1200}
                  height={450}
                />
                <p>Tipo: {producto.Tipo}</p>
                <p>Neto: {producto.Neto}</p>
                <p>Lista: {producto.Lista}</p>
                <p>Stock: {producto.Stock}</p>
                <div className="card-actions">
                <button onClick={() => {addToCart(producto); console.log(`Agregado al carrito: ${producto.Nombre}`)}}>Agregar</button>
                <button onClick={() => removeFromCart(producto.Nombre)}>Quitar</button>
                </div>
              </div>
            ))
          ) : (
            <p>No hay productos disponibles.</p>
          )}
        </div>

        <div className="pagination">
          <button disabled={paginaActual === 1} onClick={() => cambiarPagina(paginaActual - 1)}>
            Anterior
          </button>
          <span>
            Página {paginaActual} de {totalPaginas}
          </span>
          <button disabled={paginaActual === totalPaginas} onClick={() => cambiarPagina(paginaActual + 1)}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fetchsheets;
