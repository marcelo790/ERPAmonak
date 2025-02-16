import { useTranslation } from "react-i18next";

export default function SectionHowToBuy() {

  const { t } = useTranslation();
  
  return (
    <div className="banner2">
      <div className="banner-content">
        <h1 className="banner-title">{t("M-CC")}</h1>
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
