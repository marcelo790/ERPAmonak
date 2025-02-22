import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
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
