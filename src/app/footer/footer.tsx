import Image from 'next/image';

export default function Footer() {
  return (
    <div>
      <footer className="bg-white lg:grid lg:grid-cols-5">
        <div className="relative block h-32 lg:col-span-2 lg:h-full">
          <Image
            src="/cava1220/cava_1220_3.webp"
            alt="Cava 1220"
            width={200} // Ajusta el ancho según el tamaño real de la imagen
            height={100} // Ajusta la altura según el tamaño real de la imagen
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p>
                <span className="text-xs uppercase tracking-wide text-gray-500">
                  Call us
                </span>
                <a
                  href="tel:0123456789"
                  className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl"
                >
                  0123456789
                </a>
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>Monday to Friday: 10am - 5pm</li>
                <li>Weekend: 10am - 3pm</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="font-medium text-gray-900">Services</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="https://www.google.com/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      1on1 Coaching
                    </a>
                  </li>
                  {/* Repite para otros servicios */}
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900">Company</p>
                <ul className=" text-sm">
                  <li>
                    <a
                      href="https://www.google.com/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      About
                    </a>
                  </li>
                  {/* Repite para otras secciones de la empresa */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Image
        alt="imagen-footer"
        className="h-32 w-full object-contain  mt-0 mb-0 pt-0 mb-0 sm:h-40 lg:h-48" // Ajustamos el tamaño según el tamaño de pantalla
        width={500}
        height={400}
        src={`/imagen-footer.png`}
      />
    </div>
  );
}
