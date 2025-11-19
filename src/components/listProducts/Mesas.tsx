import { useEffect, useRef, useState } from "react";

const images = Array.from({ length: 17 }, (_, i) => ({
  id: i,
  image: `/images/mesas/${i + 1}.svg`,
  title: `Mesa ${i + 1}`,
  description: `Descripción breve de la Mesa ${i + 1}.`
}));

export default function MesasVertical() {
  const [selected, setSelected] = useState(images[0]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemHeight = 110; // altura fija de cada item
  const scrollSpeed = 1; // px por frame

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrame: number;
    let scrollTop = 0;
    let isPaused = false;

    const step = () => {
      if (!isPaused) {
        scrollTop += scrollSpeed;
        if (scrollTop >= container.scrollHeight / 2) scrollTop = 0; // loop infinito
        container.scrollTop = scrollTop;

        // detectar item centrado
        const centerIndex = Math.floor((scrollTop + container.clientHeight / 2) / itemHeight) % images.length;
        setSelected(images[centerIndex]);
      }
      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);

    // hover pausa
    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // duplicamos los items para loop
  const duplicated = [...images, ...images];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full">

      {/* TARJETA */}
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-6 flex items-center gap-6 h-[300px]">
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2">{selected.title}</h2>
          <p className="text-gray-600 text-sm">{selected.description}</p>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <img
            src={selected.image}
            alt={selected.title}
            className="w-40 h-40 object-contain drop-shadow-lg"
          />
        </div>
      </div>

      {/* CARRUSEL VERTICAL */}
      <div className="relative w-[180px] h-[300px] overflow-hidden rounded-xl shadow bg-white">
        <div ref={containerRef} className="w-full h-full overflow-hidden">
          <div className="flex flex-col">
            {duplicated.map((item, idx) => (
              <div
                key={idx}
                className="w-full h-[110px] flex items-center justify-center border-b cursor-pointer hover:bg-gray-100 transition group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[90px] p-2 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* sombras arriba/abajo */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </div>
  );
}
