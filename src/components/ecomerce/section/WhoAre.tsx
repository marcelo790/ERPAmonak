import { useTranslation } from "react-i18next"
export default function WhoAre() {

    const {t} = useTranslation()
  return (
    <div  className="main-section2">
        <div className="section2-image">
            <img src="/job.jpg" alt="mesa"/>
        </div>
        <div className="section2-who-are">
            <div className="section2-block1">
                <div className="section2-tilde"/>
            </div>
            <div className="section2-block2">
                <h2>{t('S-QS')}</h2>
                <section>{t('S-QS-D')}
                </section>
            </div>
            <div className="section2-block3">
                <div className="section2-block3-circle">
                    <p>+130</p>
                    <p>{t('S-QS-CF')}</p>
                </div>
                <div className="section2-block3-circle">
                    <p>+7</p>
                    <p>{t('S-QS-AE')}</p>
                </div>  
                <div className="section2-block3-circle">
                    <p>+1</p>
                    <p>{t('S-QS-S')}</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}
