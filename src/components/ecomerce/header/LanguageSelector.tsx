import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa'; // Usamos react-icons para el icono del idioma

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [showDropdown, setShowDropdown] = useState(false);

    const changeLanguage = (lng : string) => {
        i18n.changeLanguage(lng);
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
                <div className="dropdown">
                    <button onClick={() => changeLanguage('es')}>Español</button>
                    <button onClick={() => changeLanguage('en')}>English</button>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;