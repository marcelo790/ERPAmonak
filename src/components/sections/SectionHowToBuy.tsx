import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function SectionHowToBuy() {

  const { t } = useTranslation();
  
  return (
    <div className="banner3">
      <div className="banner-content">
        <h1 className="banner-title"><Link to="/woodSpecies" className="link">{t("M-CC")}</Link></h1>
      </div>
    </div>
  )
}
