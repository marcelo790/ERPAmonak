import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {

  const [backgroundColor, setBackgroundColor] = useState("rgba(255, 255, 255)");
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 50) {
          setBackgroundColor("rgba(255, 255, 255, 0.65)"); // Más traslúcido al bajar
        } else {
          setBackgroundColor("rgba(255, 255, 255)"); // Menú más sólido al estar arriba
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup del evento al desmontar el componente
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    
  return (
    <div className="sidebar" style={{backgroundColor}}>
        <Link to='/' className="sidebar-icon">
            <img src='./images/icon-carrito.png' alt="Carrito de compras" />
            <p>15</p>
        </Link>
        <Link to='/' className="sidebar-icon">
            <img src='./images/icon-user.png' alt="Usuario" />
        </Link>
        <Link to='/' className="sidebar-icon">
            <img src='./images/icon-search.png' alt="Buscador" />
        </Link>
    </div>
  )
}
