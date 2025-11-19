import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function SectionContact() {

    const { t } = useTranslation();
    
  return (
    <div className="bannerContact">
      <div className="banner-content">
        <h1 className="banner-title"><Link to="/contact" className="link">{t("M-C")}</Link></h1>
      </div>
    </div>
  )
}
