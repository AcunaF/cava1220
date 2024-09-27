"use client";
import React, { useState, useRef } from "react";
import "./Banner.css";
import Image from "next/image";

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselItemsRef = useRef([]);
  const totalItems = 5;

  const updateCarousel = () => {
    carouselItemsRef.current.forEach((item, i) => {
      item.style.transform = `translateX(${(i - currentIndex) * 100}%)`; // Desplazamiento horizontal
    });
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  // Gestos táctiles
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    const startX = touch.clientX;

    const handleTouchMove = (e) => {
      const touchMove = e.touches[0];
      if (startX - touchMove.clientX > 50) {
        showNext();
        document.removeEventListener("touchmove", handleTouchMove);
      } else if (touchMove.clientX - startX > 50) {
        showPrev();
        document.removeEventListener("touchmove", handleTouchMove);
      }
    };

    document.addEventListener("touchmove", handleTouchMove);
  };

  React.useEffect(() => {
    updateCarousel();
  }, [currentIndex]);

  return (
    <div>
      <h1 className="text-4xl font-bold text-white-300 m-5 text-center">
        Nuestras promos de la semana
      </h1>
      <div className="carousel-container" onTouchStart={handleTouchStart}>
      <div className="flex justify-center items-center h-96 w-full">
  {[...Array(totalItems)].map((_, index) => (
    <div
      key={index}
      className="carousel-item h-full w-full"
      ref={(el) => (carouselItemsRef.current[index] = el)}
    >
      <Image
        className="object-cover h-64 w-full"
        src={`/cava1220/carousel/images${index}.jpeg`}
        layout="fill"
        objectFit="cover" // Asegura que la imagen llene el ancho y mantenga proporciones
        alt="hola"
      />
    </div>
  ))}
</div>

        {/* Botón anterior */}
        <div className="button">
          <button
            type="button"
            className="carousel-button carousel-prev"
            onClick={showPrev}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Anterior</span>
          </button>

          {/* Botón siguiente */}
          <button
            type="button"
            className="carousel-button carousel-next"
            onClick={showNext}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Siguiente</span>
          </button>
        </div>
        
      </div>
    </div>
  );
}
