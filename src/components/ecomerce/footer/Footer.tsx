import { Link } from "react-router-dom"

export default function () {
  return (
    <div className="footer">
      <div className="footer-block1">
        <img src="/sello.svg" alt="logo"/>
        <section>
        "Desde el inicio de Amonak, nos hemos comprometido con la recuperación de madera
que, de otro modo, sería considerada desecho. Al encontrar madera descartada en
carpinterías, vimos la oportunidad de darle una segunda vida a este material que, en su
momento, solo era basura. Con el tiempo, nuestro enfoque se expandió desde las
carpinterías hasta los aserraderos y bosques, donde recuperamos madera hueca o con
desperfectos."</section>
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
          <Link to="https://www.facebook.com/MUEBLES.DE.MADERA.Y.RESINA">
            <img src="/iconFacebook.svg" alt="Facebook"/>
          </Link>
          <Link to="https://www.instagram.com/amonakbolivia?igsh=azZvcm1tN3J3eWty">
            <img src="/iconInstagram.svg" alt="Instagram"/>
          </Link>
          <Link to="https://www.tiktok.com/@amonakbolivia?_t=8r7mo6B8Oxh&_r=1">
            <img src="/iconTiktok.svg" alt="Tiktok"/>
          </Link>
          <Link to="">
            <img src="/iconX.svg" alt="X"/>
          </Link>
        </div>
      </div>
    </div>
  )
}
