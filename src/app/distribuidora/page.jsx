"use client";
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
//import {glen} from "@/public/glenfidich.png";

const Distribuidora = () => {
  const { data: session, status } = useSession();

  console.log("session: ", session?.user, "status", status);
  const [tipo, setTipo] = useState("promociones");
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 10;
  // Verifica si el usuario está autenticado antes de llamar a la API de productos
  const productos = apiProductos.fetch(tipo);
  // Calcular el índice inicial y final de productos a mostrar según la página
  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosPaginados = productos.slice(
    indicePrimerProducto,
    indiceUltimoProducto
  );
  // Número total de páginas
  const totalPaginas = Math.ceil(productos.length / productosPorPagina);
  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  return (
    <div className="">
      <div>
        {/* Mostrar el estado de la sesión */}
        {status === "authenticated" ? (
          <p className="container mx-auto mt-5">
            {" "}
            <b className=" ">{session.user?.email || "Usuario"}</b>
            <small className="ml-5">Ver cuenta</small>
            <small className="ml-5">
              Carrito <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            </small>
          </p>
        ) : (
          <p>No has iniciado sesión</p>
        )}
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="m-1">
              <button
                className="m-2"
                onClick={() => {
                  setTipo("destilados");
                  setPaginaActual(1);
                }}
              >
                Destilados
              </button>
              <button
                className="m-2"
                onClick={() => {
                  setTipo("gin");
                  setPaginaActual(1);
                }}
              >
                Gin
              </button>
              <button
                className="m-2"
                onClick={() => {
                  setTipo("vinos");
                  setPaginaActual(1);
                }}
              >
                Vinos
              </button>
              <button
                className="m-2"
                onClick={() => {
                  setTipo("bebidas");
                  setPaginaActual(1);
                }}
              >
                Bebidas
              </button>
              <button
                className="m-2 text-yellow-300 shadow-xl"
                onClick={() => {
                  setTipo("promociones");
                  setPaginaActual(1);
                }}
              >
                PROMOCIONES
              </button>
            </div>
          </div>

          {/* Tabla de productos */}
          <div className="container productos-grid">
            {productosPaginados.length > 0 ? (
              productosPaginados.map((producto, index) => (
                <div key={index} className="card">
                  <h2>{producto.nombre}</h2>
                  <Image
                    src={glen}
                    alt="img"
                    className="imgenImg"
                    width={150}
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
                  <p>
                    Stock: {producto.stock ? producto.stock : "Inicia sesión"}
                  </p>
                  <div className="card-actions">
                    <button onClick={() => alert("Agregado al carrito")}>
                      Agregar
                    </button>
                    <button onClick={() => alert("Quitado del carrito")}>
                      Quitar
                    </button>
                  </div>
                  <div className="card-shipping">
                    <button> envio</button>
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

        <button>
          <Link href="/">Volver al inicio</Link>
        </button>
      </div>
      <Fetchsheets className="container mx-auto" />
    </div>
  );
};

export default Distribuidora;
