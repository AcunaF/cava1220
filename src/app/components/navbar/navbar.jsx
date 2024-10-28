"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.styles.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Cerrar el menú al hacer clic en cualquier enlace
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="navcontainer">
      <header className="fixed flex items-center justify-between bg-black border-b-4 border-white z-50 w-full">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/cava1220/logoNegro.jpeg"
              alt="Logo de Cava 1220"
              width={600}
              height={200}
              className="w-auto max-w-[150px] m-2 ml-5"
            />
          </Link>
        </div>

        {/* Botón del menú hamburguesa (sólo en dispositivos móviles) */}
        <div className="flex m-5 items-center md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <GiHamburgerMenu size={30} />
          </button>
        </div>

        {/* Menú de navegación (oculto en móviles, visible en pantallas más grandes) */}
        <nav className={`hidden md:flex items-center space-x-6 ml-5`}>
          <Link href="/eventos" className="text-white">
            Eventos
          </Link>
          <Link href="/distribuidora" className="text-white">
            Distribuidora
          </Link>
          <Link href="/servicios" className="text-white">
            Servicios
          </Link>
          <Link href="/login" className="text-white">
            Login
          </Link>
          {/*    <Link href="/" className="py-2 text-white" onClick={closeMenu}>Cursos</Link>
          <Link href="/" className="py-2 text-white" onClick={closeMenu}>Servicios</Link> */}
        </nav>
      </header>

      {/* Menú desplegable para móviles */}
      {isOpen && (
        <div className="absolute top-16 right-0 bg-black w-full md:hidden">
          <nav className="mt-5 flex flex-col items-center">
            <Link
              href="/eventos"
              className="py-2 text-white"
              onClick={closeMenu}
            >
              Eventos
            </Link>
            <Link
              href="/distribuidora"
              className="py-2 text-white"
              onClick={closeMenu}
            >
              Distribuidora
            </Link>
            <Link href="/login" className="py-2 text-white" onClick={closeMenu}>
              Login
            </Link>
            {/*  <Link href="/" className="py-2 text-white" onClick={closeMenu}>Cursos</Link>
            <Link href="/" className="py-2 text-white" onClick={closeMenu}>Servicios</Link>*/}
          </nav>
        </div>
      )}
    </div>
  );
}
