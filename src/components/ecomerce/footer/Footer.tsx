import { Link } from "react-router-dom"

export default function () {
  return (
    <div className="footer">
      <div className="footer-block1">
        <img src="/sello.svg" alt="logo"/>
        <section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Dolorum minus maxime natus molestiae, sint commodi minima ea cum
         deserunt fugiat quod, rem minima exercitationem quibusdam, quidem eaque nesciunt aliquam dignissimos magni hic.
        </section>
      </div>
      <div className="footer-block2">
        <nav className="footer-nav">
            <Link to="/">MAPA DE SITIO</Link>
            <Link to="/products">PRODUCTOS</Link>
            <Link to="/">OTROS SERVICIOS</Link>
            <Link to="/">OFERTAS</Link>
            <Link to="/">¿CÓMO COMPRAR?</Link>            
            <Link to="/">EXPERIENCIA AMONAK</Link>
            <Link to="/">CONTÁCTANOS</Link>         
        </nav>
      </div>
      <div className="footer-block3">
        <h2>CONTACTANOS</h2>
        <div className="footer-icon">
          <img src="/iconLocation.svg" alt="Location"/>
          <p>Av. Doble Via la Guardia, 7mo anillo</p>
        </div>
        <div className="footer-icon">
          <img src="/iconPhone.svg" alt="Phone"/>
          <p>+591-68834612</p>
        </div>
        <div className="footer-icon">
          <img src="/iconMessage.svg" alt="Email"/>
          <p>amonakbolivia@gmail.com</p>
        </div>
      </div>
      <div className="footer-block4">
        <h2>REDES SOCIALES</h2>
        <div className="footer-redes">
          <img src="/iconFacebook.svg" alt="Facebook"/>
          <img src="/iconInstagram.svg" alt="Instagram"/>
          <img src="/iconTiktok.svg" alt="Tiktok"/>
          <img src="/iconX.svg" alt="X"/>
        </div>
      </div>
    </div>
  )
}
