import { Link } from "react-router-dom"
import LanguageSelector from "./LanguageSelector"

export default function NavMenu() {
  return (
    <nav className="nav-menu flex space-x-2">
        <Link to='/' className="link">CATEGORIAS</Link>
        <Link to="/products" className="link">PRODUCTOS</Link>
        <Link to="/" className="link">INVENTARIOS</Link>
        <Link to="/" className="link">VENTAS</Link>
        <Link to="/users" className="link">USUARIOS</Link>
        <Link to="/" className="link">REPORTES</Link> 
        <LanguageSelector />
      </nav>
  )
}
