import { useState } from "react";

const images = Array.from({ length: 54 }, (_, i) => ({
  image: `/images/mesas/${i + 1}.svg`, // no uses "public/" en src
}));

const ITEMS_PER_PAGE = 6;

export default function Mesas() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = images.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="contenedor-mesa">
      {/* GRID */}
      <div className="contenedor-mesa2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((item, idx) => (
          <a
            key={idx}
            href={item.image}
            target="_blank"
            rel="noopener noreferrer"
            className="w-56 relative group border rounded-lg shadow overflow-hidden block"
          >
            <img
              src={item.image}
              loading="lazy"
              alt={`Mesa Amonak ${startIdx + idx + 1}`}
              className="mx-auto h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              {/* Aquí puedes reactivar tus botones si quieres */}
            </div>
          </a>
        ))}
      </div>

      {/* PAGINACIÓN */}
      <div className="flex items-center justify-center mt-8 gap-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          &lt;
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1
                ? "bg-gray-800 text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          &gt;
        </button>
      </div>

      <p className="text-center text-sm mt-2">
        Mostrando página {currentPage} de {totalPages}
      </p>
    </div>
  );
}
