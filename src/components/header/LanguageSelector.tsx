import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [showDropdown, setShowDropdown] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("rgba(61, 50, 22)");
    const [lngSpanish, setLngSpanish] = useState("Español")
    const [lngEnglish, setLngEnglish] = useState("Ingles")
    
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

    const changeLanguage = (lng : string) => {
        i18n.changeLanguage(lng);
        if(lng == 'es'){
          setLngEnglish('Ingles')
          setLngSpanish('Español')
        }else{
          setLngEnglish('English')
          setLngSpanish('Spanish')
        }
        setShowDropdown(false); // Oculta el menú desplegable al seleccionar
    };

    return (
        <div className="language-selector">
            <button 
                className="language-button" 
                onClick={() => setShowDropdown(!showDropdown)}
            >
                <FaGlobe /> {/* Icono de idioma */}
                <span>{i18n.language.toUpperCase()}</span> {/* Idioma actual */}
            </button>
            {showDropdown && (
                <div className="dropdown" style={{backgroundColor}}>
                    <button onClick={() => changeLanguage('es')}>{lngSpanish}</button>
                    <button onClick={() => changeLanguage('en')}>{lngEnglish}</button>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;