import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function () {
  const {t} = useTranslation()

  return (
    <div className="footer">
      <div className="footer-block1">
        <img src="/sello.svg" alt="logo"/>
        <section>
        "{t('F-D')}"</section>
      </div>
      <div className="footer-block2">
        <nav className="footer-nav">
            <Link to="/">{t('F-M-MS')}</Link>
            <Link to="/products">{t('F-M-P')}</Link>
            <Link to="/">{t('F-M-OS')}</Link>
            <Link to="/">{t('F-M-O')}</Link>
            <Link to="/">{t('F-M-CC')}</Link>            
            <Link to="/">{t('F-M-EA')}</Link>
            <Link to="/">{t('F-M-C')}</Link>         
        </nav>
      </div>
      <div className="footer-block3">
        <p>{t('F-C')}</p>
        <div className="footer-icon">
          <img src="/iconLocation.svg" alt="Location"/>
          <p>{t('F-C-U')}</p>
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
        <p>REDES SOCIALES</p>
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
