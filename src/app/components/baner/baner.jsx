"use client";
import React, { useState, useRef } from "react";
import "./Banner.css"; 
import Image from "next/image";

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselItemsRef = useRef([]);
  const totalItems = 5; 

  const updateCarousel = (index) => {
    carouselItemsRef.current.forEach((item, i) => {
      item.style.display = i === index ? "block" : "none";
    });
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  React.useEffect(() => {
    updateCarousel(currentIndex);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <h1 className="text-4xl font-bold text-white-300 mb-14 text-center">
        Nuestros eventos
      </h1>
      <div className="relative h-56 overflow-hidden md:h-96">
        {[...Array(totalItems)].map((_, index) => (
          <div
            key={index}
            className="carousel-item"
            ref={(el) => (carouselItemsRef.current[index] = el)}
          >
            <Image
              src={`/cava1220/carousel/images${index}.jpeg`}
              layout="responsive"
              objectFit="cover"
              width={920}
              height={560}
              alt={`Descripción ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Botón anterior */}
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="sr-only">Siguiente</span>
      </button>
    </div>
  );
}
