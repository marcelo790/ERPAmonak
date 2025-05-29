import { useState } from "react";
import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";


const images = Array.from({length: 28}, (_, i) => ({
        image: `public/images/tablas/${i + 1}.webp`,
    }))

const ITEMS_PER_PAGE = 6;


export default function Tablas() {

  const [currentPage, setCurrentPage] = useState(1);
    const [modalImage, setModalImage] = useState<string | null>(null);
  
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
            <div
              key={idx}
              className="w-56 relative group border rounded-lg shadow overflow-hidden"
            >
              <img
                src={item.image}
                loading="lazy"
                alt={`Mesa Amonak ${startIdx + idx + 1}`}
                className="mx-auto h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
  
              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <button className="bg-white text-gray-700 p-2 rounded-full hover:bg-gray-200">
                  <FaShoppingCart />
                </button>
                <button className="bg-white text-gray-700 p-2 rounded-full hover:bg-gray-200">
                  <FaHeart />
                </button>
                <button
                  className="bg-white text-gray-700 p-2 rounded-full hover:bg-gray-200"
                  onClick={() => setModalImage(item.image)}
                >
                  <FaEye />
                </button>
              </div>
            </div>
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
  
        {/* MODAL */}
        {modalImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4">
              <div className="relative bg-white p-2 rounded-lg shadow-lg max-w-sm w-full">
              <button
                  className="absolute top-2 right-2 text-gray-600 text-xl hover:text-red-600"
                  onClick={() => setModalImage(null)}
              >
                  ✕
              </button>
              <img
                  src={modalImage}
                  loading="lazy"
                  alt="Imagen ampliada"
                  className="rounded-lg mx-auto max-h-[70vh] object-contain"
              />
              </div>
          </div>
          )}
      </div>
    );
  }
  
