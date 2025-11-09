import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function SectionProduct() {

    const { t } = useTranslation();
    
  return (
    <div className="banner5">
      <div className="banner-content">
        <h1 className="banner-title"><Link to="/product" className="link">{t("M-P")}</Link></h1>
      </div>
    </div>
  )
}
