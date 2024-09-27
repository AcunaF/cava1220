'use client';
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../../../CartContext";

export default function Carrito() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="m-10">
      <h1 className="text-2xl font-bold mb-4">Cuenta Carrito</h1>
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col"
            ><Image
            src={item?.imagen || ''}
            alt="img"
            className="imgenImg"
            width={500}
            height={150}
          />
              <h2 className="text-xl font-semibold">{item.nombre}</h2>
              <p className="text-gray-600 mb-2">Precio: ${item.precio}</p>
              <div className="flex items-center mb-2">
                <label className="text-gray-600 mr-2">Cantidad:</label>
                <input
                style={{backgroundColor:"gray", color:"white"}}
                type="number"
                  min="1"
                  value={item.cantidad}
                  name="Cantidad"
                  onChange={(e) => {
                    const newQuantity = parseInt(e.target.value, 10);
                    if (newQuantity > 0) {
                      // Actualiza la cantidad del item en el carrito
                      const updatedCart = cart.map(cartItem =>
                        cartItem.id === item.id
                          ? { ...cartItem, cantidad: newQuantity, subtotal: newQuantity * cartItem.precio }
                          : cartItem
                      );
                      setCart(updatedCart);
                    }
                  }}
                  className="border rounded w-16 text-center"
                />
              </div>
              <p className="text-gray-600">Subtotal: ${item.subtotal}</p>
              <button className="mt-auto bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200">
                Comprar
              </button>
              <br></br>
              <button
                className="mt-auto bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-200"
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar Artículo
              </button>
              <hr />
              <Link
                className="block mt-auto text-blue-500 hover:underline"
                href={`/distribuidora/${item.id}`}
              >
                Ver detalles
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">Tu carrito está vacío.</p>
      )}
      <Link
        className="ml-10 mt-4 inline-block text-blue-500 hover:underline"
        href="/distribuidora"
      >
        Ir a Distribuidora
      </Link>
    </div>
  );
}
