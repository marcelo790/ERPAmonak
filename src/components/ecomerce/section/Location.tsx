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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.970894708605!2d-63.239044826583736!3d-17.839999283126392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e9d74b4c4705%3A0x47863739542541a9!2sAmonak%20Srl.%20Madera%20y%20dise%C3%B1o!5e0!3m2!1ses-419!2sbo!4v1730995954536!5m2!1ses-419!2sbo"  style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>                
            </div>
        </div>       
    </div>
  )
}
