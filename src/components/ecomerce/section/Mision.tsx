import { useTranslation } from "react-i18next"
export default function Mision() {
  const {t} = useTranslation()
  return (
    <div className='main-section3'>
        <div className="section3-block1">
            <div className="section3-tilde"/>
        </div>
        <div className="section3-block2">
            <h2>{t('S-M')}</h2>
            <section>{t('S-M-D')}
            </section>
        </div>
    </div>
  )
}
