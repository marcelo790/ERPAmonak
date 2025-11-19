import { Link } from "react-router-dom"
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavMenu() {

  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <nav className="nav">
      {/* Ícono de menú hamburguesa */}
      <button className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Menú de navegación */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/who-are" className="link">{t("M-QS")}</Link></li>
        <li><Link to="/product" className="link">{t("M-P")}</Link></li>
        {/*<li><Link to="/" className="link">{t("M-OS")}</Link></li>
        <li><Link to="/" className="link">{t("M-O")}</Link></li>*/}
        <li><Link to="/woodSpecies" className="link">{t("M-CC")}</Link></li>
        <li><Link to="/offers" className="link">{t("M-O")}</Link></li>
        <li><Link to="/contact" className="link">{t("M-C")}</Link></li>
        <li><LanguageSelector /></li>
      </ul>
    </nav>
  );
}