import { useTranslation } from "react-i18next";

export default function SecctionWhoAre() {

    
      const { t } = useTranslation();
      
  return (
    <div className='section-container'>
        <div className="banner">      
            <div className="banner-content">
                <h1 className="banner-title">{t("M-QS")}</h1>
            </div>
        </div>
        <div className='sections'>
            <div className='section-1'>
                <div className='sec1-block-1'>
                    <p>
                    {t("S-QS-D")}
                    </p>
                </div>
                <div className='sec1-block-2'>
                    <div className="sec1-block-circle">
                        <p>+130</p>
                        <p>{t("S-QS-CF")}</p>
                    </div>
                    <div className="sec1-block-circle">
                        <p>+7</p>
                        <p>{t("S-QS-AE")}</p>
                    </div>  
                    <div className="sec1-block-circle">
                        <p>+1</p>
                        <p>{t("S-QS-S")}</p>
                    </div>
                </div>
            </div>
            <div className='section-2'>
                <div className="banner-content">
                    <h1 className="banner-title">{t("S-M")}</h1>
                </div>
            </div>
            <div className='section-3'>
                <div className='sec3-block-1'>
                    <p>
                    {t("S-M-D")}
                    </p>
                </div>
            </div>
            <div className='section-4'>
                <div className="banner-content">
                    <h1 className="banner-title">{t("S-V")}</h1>
                </div>
            </div>
            <div className='section-5'>
                <div className='sec5-block-1'>
                    <p>
                    {t("S-V-D")}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
