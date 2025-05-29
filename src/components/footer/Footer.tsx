import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

export default function Footer() {

      const { t } = useTranslation();
  const smoothScrollToTop = () => {
    const scrollStep = -window.scrollY / 30; // Ajusta la velocidad (divide en más pasos para hacerlo más lento)
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep); // Mueve la posición del scroll paso a paso
      } else {
        clearInterval(scrollInterval); // Detiene el intervalo al llegar al tope
      }
    }, 16); // 16ms ≈ 60fps para animación suave
  };

  return (
    <div className='footer'>
        <div className='footer-flecha'>
          <Link  to=""
                onClick={(e) => {
                  e.preventDefault(); // Evita comportamiento predeterminado del enlace
                  smoothScrollToTop(); // Llama a la función personalizada
                }}
          >
            <img src="./images/iconFlecha.svg" alt="Inicio"/>
          </Link>
        </div>
        <div className='footer-block1'>
          <Link to="https://www.facebook.com/MUEBLES.DE.MADERA.Y.RESINA">
            <img src="./images/iconFacebook.svg" alt="Facebook"/>
          </Link>
          <Link to="https://www.instagram.com/amonakbolivia?igsh=azZvcm1tN3J3eWty">
            <img src="./images/iconInstagram.svg" alt="Instagram"/>
          </Link>
          <Link to="https://www.tiktok.com/@amonakbolivia?_t=8r7mo6B8Oxh&_r=1">
            <img src="./images/iconTiktok.svg" alt="Tiktok"/>
          </Link>
          <Link to="">
            <img src="./images/iconX.svg" alt="X"/>
          </Link>
        </div>
        <div className='footer-block2'>
          <img src="./images/logo.svg" alt="logo"/>
          <p>{t("F-D")}</p>
        </div>
        <div className='footer-block3'>
          <div className='ft-1'>
            <nav className="footer-nav">
              <Link to="/">{t("F-M-MS")}</Link>
              <Link to="/">{t("F-M-P")}</Link>
              <Link to="/">{t("F-M-OS")}</Link>
              <Link to="/">{t("F-M-O")}</Link>
              <Link to="/">{t("F-M-EA")}</Link>
              <Link to="/">{t("F-M-C")}</Link>        
            </nav>
          </div >
          <div className='ft-2'>
            <p>{t("F-M-V")}</p>
            <svg version="1.1" id="Para_desarrollo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
              y="0px" viewBox="0 0 24.6 32.2" contentStyleType="enable-background:new 0 0 24.6 32.2;" xmlSpace="preserve">

              <g>
                <path fill="currentColor" d="M24.6,12.9c0.1,2.3-1,4.7-2.5,6.8c-2.9,4-5.9,8-8.9,12c-0.5,0.7-1.2,0.7-1.7,0C8.3,27.5,5.1,23.3,2.1,19
                  C-1.4,14.1-0.2,7.7,3.3,3.9c5.3-5.8,15.1-5,19.3,1.7C23.9,7.7,24.6,9.9,24.6,12.9z M12.3,29.7c1-1.4,2-2.6,2.9-3.9
                  c2-2.7,4-5.5,5.9-8.3c1.7-2.5,1.9-5.2,1.1-8c-1.4-5.3-6.9-8.6-12.2-7.4C4.9,3.2,1.2,8.1,2,14c0.3,1.9,1.3,3.5,2.4,5.1
                  c2.4,3.3,4.9,6.6,7.3,9.8C11.9,29.1,12.1,29.4,12.3,29.7L12.3,29.7z"/>
                <path fill="currentColor" d="M18.9,12.3c-0.1,3.7-3.1,6.6-6.8,6.5c-3.6-0.1-6.5-3.2-6.4-6.7c0.1-3.7,3.1-6.6,6.8-6.5
                  C16.1,5.7,19,8.8,18.9,12.3z M7.6,12.3c0,2.6,2.1,4.7,4.8,4.7c2.6,0,4.7-2.1,4.7-4.7c0-2.6-2.1-4.7-4.7-4.7
                  C9.7,7.5,7.6,9.7,7.6,12.3z"/>
              </g>
            </svg>
            <p>8vo Anillo, Doble Via la Guardia</p>
          </div>
          <div className='ft-3'>
            <p>{t("F-M-C")}</p>
            <svg version="1.1" id="Para_desarrollo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                    y="0px" viewBox="0 0 26.2 26.4" contentStyleType="enable-background:new 0 0 26.2 26.4;" xmlSpace="preserve">
                    <path fill="currentColor" d="M20,26.4c-1.8-0.1-3.6-0.7-5.4-1.5c-6.1-3-10.6-7.6-13.4-13.7C0.4,9.4-0.1,7.6,0,5.7c0.1-1,0.4-1.9,1.1-2.6
                    c0.7-0.7,1.4-1.4,2.1-2.1c1.3-1.2,2.7-1.2,4,0C8.3,2,9.4,3,10.4,4.1c1.3,1.3,1.3,2.7,0,4C9.9,8.7,9.3,9.2,8.8,9.7
                    c-0.2,0.2-0.2,0.4-0.1,0.7c1,1.9,2.4,3.5,4,4.9c1,0.8,2.1,1.5,3.2,2.3c0.3,0.2,0.5,0.1,0.7-0.1c0.6-0.6,1.2-1.2,1.8-1.8
                    c1.1-1,2.5-1,3.5,0.1c1.2,1.1,2.4,2.3,3.5,3.5c1.1,1.1,1.1,2.5,0.1,3.6c-0.7,0.8-1.5,1.6-2.3,2.4C22.4,26,21.3,26.4,20,26.4L20,26.4
                    z M19.9,25c1.2,0,1.9-0.3,2.6-1c0.6-0.6,1.2-1.2,1.8-1.8c0.8-0.8,0.8-1.5,0-2.3c-1-1-2.1-2.1-3.1-3.1c-0.8-0.8-1.4-0.8-2.1,0
                    c-0.6,0.6-1.3,1.3-1.9,1.9c-0.5,0.5-0.9,0.5-1.5,0.2c-0.8-0.5-1.7-1-2.5-1.5c-2.4-1.9-4.5-4-5.9-6.8C7,9.9,7.1,9.5,7.6,9
                    c0.6-0.6,1.3-1.2,1.9-1.8c0.7-0.8,0.7-1.3,0-2.1C8.4,4,7.4,2.9,6.3,1.9c-0.8-0.7-1.4-0.7-2.1,0C3.6,2.5,3,3.1,2.4,3.6
                    C1.6,4.4,1.3,5.4,1.4,6.5c0.1,1.4,0.5,2.8,1.1,4c2.7,5.9,7,10.2,12.8,13.1C16.8,24.4,18.4,24.9,19.9,25L19.9,25z"/>
            </svg>
            <p>+591-68834612</p>
            <svg version="1.1" id="Para_desarrollo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
              y="0px" viewBox="0 0 29 18.9" contentStyleType="enable-background:new 0 0 29 18.9;" xmlSpace="preserve">

              <path fill="currentColor" d="M14.5,0c4,0,8,0,12,0C28.2,0,29,0.7,29,2.4c0,4.7,0,9.4,0,14.1c0,1.5-0.8,2.3-2.3,2.3c-8.1,0-16.3,0-24.4,0
                c-1.5,0-2.3-0.8-2.3-2.3c0-4.8,0-9.6,0-14.3C0,0.8,0.8,0,2.3,0C6.4,0,10.4,0,14.5,0z M26.6,17.8c-2.6-3.1-5-6-7.5-9
                c-0.8,0.7-1.6,1.3-2.4,1.9c-1.5,1.2-3,1.2-4.4,0c-0.8-0.6-1.6-1.2-2.4-1.9c-2.5,3-5,6-7.5,9L26.6,17.8L26.6,17.8z M1.9,1.1
                c0.2,0.1,0.3,0.2,0.4,0.3C5.8,4.3,9.4,7.2,13,10c0.9,0.8,2,0.7,2.9,0c3.6-2.9,7.1-5.7,10.7-8.6c0.1-0.1,0.3-0.1,0.4-0.2
                c0,0-0.1-0.1-0.2-0.2C27,1.1,1.9,1.1,1.9,1.1z M1.1,1.8C1,2,1,2,1,2.1C1,7,1,11.9,1,16.8c0,0.2,0.1,0.5,0.2,0.8
                c2.7-3.2,5.3-6.3,7.9-9.4C6.4,6,3.8,3.9,1.1,1.8L1.1,1.8z M27.8,1.8c-2.7,2.2-5.3,4.2-8,6.4c2.6,3.1,5.2,6.2,7.8,9.3
                C28,17,28.1,3.1,27.8,1.8z"/>
            </svg>
            <p>amonakbolivia@gmail.com</p>
          </div>
        </div>
        <div className='footer-block4'>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </div>
    </div>
  )
}
