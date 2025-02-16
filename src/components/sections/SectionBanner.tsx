import { useTranslation } from "react-i18next";

export default function SectionBanner() {

    const { t } = useTranslation();
    
  return (
    <div className="banner">      
      <div className="banner-content">
        <h1 className="banner-title">{t("B-T3")}</h1>
      </div>
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
