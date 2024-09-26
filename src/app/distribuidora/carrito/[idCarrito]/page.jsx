'use client'
import Link from "next/link";
import {useCart} from "../../../CartContext"


export default function Carrito() {
    const { cart } = useCart();
  
    return (
      <div>
        <div className="m-10">
          <h1>Cuenta Carrito</h1>
          {cart.length > 0 ? (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.nombre} - {item.precio}
                </li>
              ))}
            </ul>
          ) : (
            <p>Tu carrito está vacío.</p>
          )}
        </div>
        <Link className="ml-10" href="/distribuidora">
          Ir a Distribuidora
        </Link>
      </div>
    );
  }