"use client";
import React, { useState } from "react";
import apiProductos from "../../Stock"; 
import Link from "next/link";
import { useSession } from "next-auth/react";
import "../../app/distribuidora/style.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Distribuidora = () => {
  const { data: session, status } = useSession();
  console.log('session: ', session?.user, 'status', status);

  const [tipo, setTipo] = useState('promociones');
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 10;

  // Verifica si el usuario está autenticado antes de llamar a la API de productos
  const productos = apiProductos.fetch(tipo);

  // Calcular el índice inicial y final de productos a mostrar según la página
  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosPaginados = productos.slice(indicePrimerProducto, indiceUltimoProducto);

  // Número total de páginas
  const totalPaginas = Math.ceil(productos.length / productosPorPagina);

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  return (
    <div>
      {/* Mostrar el estado de la sesión */}
      {status === "authenticated" ? (
        <p className="m-2">Bienvenido <b className=" ">{session.user?.email || "Usuario"}</b>
         <small className="ml-5">Ver cuenta</small>
         <small className="ml-5">Carrito <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
         <input type="text" placeholder="Buscar producto..." className="ml-5 p-2 border border-gray-300 rounded-md" />
         </small>
          </p>
      ) : (
        <p>No has iniciado sesión</p>
      )}
      <div className="">
        <div className="flex justify-between">
          <div className="m-1">
            <button className="m-5" onClick={() => { setTipo('destilados'); setPaginaActual(1); }}>Destilados</button>
            <button className="m-5" onClick={() => { setTipo('gin'); setPaginaActual(1); }}>Gin</button>
            <button className="m-5" onClick={() => { setTipo('vinos'); setPaginaActual(1); }}>Vinos</button>
            <button className="m-5" onClick={() => { setTipo('bebidas'); setPaginaActual(1); }}>Bebidas</button>
            <button className="m-5 text-yellow-300 shadow-xl" onClick={() => { setTipo('promociones'); setPaginaActual(1); }}>PROMOCIONES</button>
          </div>
        </div>

        {/* Tabla de productos */}
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              {/* Mostrar columna de precio solo si el usuario está autenticado */}
              {status === "authenticated" && <th>Precio</th>}
              <th>Stock</th>
              <th>Carrito De compras</th>
              <th>¿Te lo enviamos?</th>
            </tr>
          </thead>
          <tbody>
            {productosPaginados.length > 0 ? (
              productosPaginados.map((producto, index) => (
                <tr key={index}>
                  <td>{producto.nombre}</td>
                  <td>{producto.descripcion}</td>
                  {/* Mostrar columna de precio solo si el usuario está autenticado */}
                  {status === "authenticated" && (
                    <td>{Array.isArray(producto.precio) ? producto.precio.join(', ') : producto.precio}</td>
                  )}
                  <td>{producto.stock ? producto.stock : 'Inicia secion'}</td>
                  <td>
                    <button className="m-2" onClick={() => alert('Agregado al carrito')}>
                      Agregar
                    </button>
                    <button className="m-2" onClick={() => alert('Quitado del carrito')}>
                      Quitar
                    </button>
                  </td>
                  <td>
                    <button className="m-2" onClick={() => alert('Envio a domicilio ')}>
                      SI - NO
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">Elige un producto.</td>
              </tr>
            )}
          </tbody>
        </table>

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
  );
};

export default Distribuidora;
