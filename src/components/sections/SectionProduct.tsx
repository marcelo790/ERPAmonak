import { useTranslation } from "react-i18next";

export default function SectionProduct() {

    const { t } = useTranslation();
    
  return (
    <div className="banner5">
      <div className="banner-content">
        <h1 className="banner-title">{t("M-P")}</h1>
      </div>
    </div>
  )
}
