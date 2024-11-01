import { Link } from "react-router-dom"
export default function NavMenu() {

 
    return (
      <nav className="nav flex space-x-6">
        <Link to='/'>QUIENES SOMOS</Link>
        <Link to="/products">PRODUCTOS</Link>
        <Link to="/">OTROS SERVICIOS</Link>
        <Link to="/">OFERTAS</Link>
        <Link to="/">¿CÓMO COMPRAR?</Link>
        <Link to="/">CONTÁCTANOS</Link>      
      </nav>
  
    )
  }