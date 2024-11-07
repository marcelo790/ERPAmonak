import { useTranslation } from "react-i18next"
export default function Location() {

  const {t} = useTranslation()
  return (
    <div className="main-section5">
         <div className="section5-location">
            <div className="section5-block1">
                <div className="section5-tilde"/>
            </div>
            <div className="section5-block2">
                <h2>{t('S-U')}</h2>
                <div className="section5-block2-mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60764.55363615894!2d-63.176703999999994!3d-17.848729599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sbo!4v1730403144017!5m2!1ses-419!2sbo"  style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>                
            </div>
        </div>       
    </div>
  )
}
