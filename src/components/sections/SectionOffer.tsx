import { useTranslation } from "react-i18next";

export default function SectionOffer() {

  const { t } = useTranslation();

  return (
    <div className="banner3">
      <div className="banner-content">
        <h1 className="banner-title">{t("M-O")}</h1>
      </div>
    </div>
  )
}
