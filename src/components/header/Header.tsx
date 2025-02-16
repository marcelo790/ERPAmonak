import { useEffect, useState } from 'react';
import NavMenu from './NavMenu'
import { Link } from 'react-router-dom';

export default function Header() {

  const [backgroundColor, setBackgroundColor] = useState("rgba(61, 50, 22)");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setBackgroundColor("rgba(61, 50, 22, 0.65)"); // Más traslúcido al bajar
      } else {
        setBackgroundColor("rgba(61, 50, 22)"); // Menú más sólido al estar arriba
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup del evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <div className='header' id='header' style={{backgroundColor}}>
        <div className="container">        
          <div className="divLogo">
            <Link to="/">
              <img src="./client/src/assets/images/logo.svg" alt="Logotipo Amonak" className="logo" />
            </Link>
          </div>
          <NavMenu/>          
        </div>
    </div>
  )
}
