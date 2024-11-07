import { useTranslation } from "react-i18next"
export default function Vision() {

    const {t} = useTranslation()
  return (
    <div className="main-section4">        
        <div className="section4-vision">
            <div className="section4-block1">
                <div className="section4-tilde"/>
            </div>
            <div className="section4-block2">
                <h2>{t('S-V')}</h2>
                <section>{t('S-V-D')}
                </section>
            </div>
        </div>        
        <div className="section4-image">
            <img src="/job.jpg" alt="mesa"/>
        </div>
    </div>
  )
}
