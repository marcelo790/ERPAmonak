import { useTranslation } from "react-i18next";

export default function SectionOtherService() {

    const { t } = useTranslation();
    
  return (
    <div className="banner4">
      <div className="banner-content">
        <h1 className="banner-title">{t("M-OS")}</h1>
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
