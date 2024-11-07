import { useTranslation } from "react-i18next"

export default function Banner() {

  const {t} = useTranslation()
  return (
    <div className="banner">
        <div className="text-section">
          <div/>
          <p>{t('B-T1')}</p>
          <p>{t('B-T2')} </p>
          <p>{t('B-T3')}</p>
          <p>{t('B-T4')}</p>
        </div>
        <div className="image-section">
          <img src="/banner2.jpg" alt="imagen principal" />
        </div>
        <div className="sidebar">
          <button className="sidebar-icon">🛒</button>
          <button className="sidebar-icon">👤</button>
          <button className="sidebar-icon">🔍</button>
        </div>
    </div>
  )
}
