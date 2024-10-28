import Link from "next/link";

export default function After() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center mb-5">
        <h1 className="text-4xl font-bold text-white mb-4 shadow-lg"         style={{color: "#baab8f"}}
        >
          After viernes 4 de septiembre
        </h1>
        {/* Video */}
        <video
          className="restaurant-card w-3/4 h-auto rounded-lg shadow-lg"
          src="/after/after0.mp4"
          controls
          autoPlay
          muted
        />
      </div>
      {/* Botón */}
      <Link
        href="/eventos"
        className="mt-10 bg-gradient-to-r from-gray-500 to-blue-500 text-white px-6 py-3 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:from-indigo-500 hover:to-purple-500"
      >
        ¿Quieres ir?
      </Link>
    </div>
  );
}
