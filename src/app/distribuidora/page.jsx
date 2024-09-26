'use client'
import React, { useState } from "react";
import apiProductos from "../../Stock";
import Image from "next/image";
import glen from "@/public/cava1220/logoNegro.jpeg";
import Link from "next/link";
import { useSession } from "next-auth/react";
import "../../app/distribuidora/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Fetchsheets from "../components/fetch/sheets";
import { useCart } from "../../app/CartContext"; // Importa el hook del carrito

const Distribuidora = () => {
  const { data: session, status } = useSession();
  const { addToCart, removeFromCart } = useCart(); // Desestructura las funciones del carrito
  const [tipo, setTipo] = useState("promociones");
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 10;

  // Verifica si el usuario está autenticado antes de llamar a la API de productos
  const productos = apiProductos.fetch(tipo);
  
  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosPaginados = productos.slice(indicePrimerProducto, indiceUltimoProducto);
  const totalPaginas = Math.ceil(productos.length / productosPorPagina);
  
  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  return (
    <div className="">
      <div>
        <div className="m-4">
          {/* Mostrar el estado de la sesión */}
          {status === "authenticated" ? (
            <p className="mx-auto m-5">
              <b className=" m-5 ">{session.user?.email || "Usuario"}</b>
              <Link className="mr-2" href="/distribuidora/usuario/usuario/">
                <b>Ver cuenta</b>
              </Link>{" "}
              <Link className="mr-2" href="/distribuidora/carrito/carrito/">
                Carrito{" "}
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
              </Link>
            </p>
          ) : (
            <p>No has iniciado sesión</p>
          )}
        </div>
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="m-1">
              <button className="m-2" onClick={() => setTipo("destilados")}>
                Destilados
              </button>
              <button className="m-2" onClick={() => setTipo("gin")}>
                Gin
              </button>
              <button className="m-2" onClick={() => setTipo("vinos")}>
                Vinos
              </button>
              <button className="m-2" onClick={() => setTipo("bebidas")}>
                Bebidas
              </button>
              <button
                className="m-2 text-yellow-300 shadow-xl"
                onClick={() => setTipo("promociones")}
              >
                PROMOCIONES
              </button>
            </div>
          </div>

          {/* Tabla de productos */}
          <div className="productos-grid">
            {productosPaginados.length > 0 ? (
              productosPaginados.map((producto, index) => (
                <div key={index} className="card">
                  <h2>{producto.nombre}</h2>
                  <Image
                    src={glen}
                    alt="img"
                    className="imgenImg"
                    width={500}
                    height={150}
                  />
                  <p>{producto.descripcion}</p>
                  {/* Mostrar precio si el usuario está autenticado */}
                  {status === "authenticated" && (
                    <p>
                      Precio:{" "}
                      {Array.isArray(producto.precio)
                        ? producto.precio.join(", ")
                        : producto.precio}
                    </p>
                  )}
                  <p>Stock: {producto.stock ? producto.stock : "Inicia sesión"}</p>
                  
                  {/* Acciones del carrito */}
                  <div className="card-actions">
                    <button onClick={() => addToCart(producto)}>Agregar</button>
                    <button onClick={() => removeFromCart(producto.id)}>Quitar</button>
                  </div>
                  <div className="card-shipping">
                    <button>Envio</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No hay productos disponibles. Elige una categoría.</p>
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
      </div>
      <Fetchsheets className="container mx-auto" />
      <button className="container mx-auto">
        <Link href="/">Volver al inicio</Link>
      </button>
    </div>
  );
};

export default Distribuidora;
