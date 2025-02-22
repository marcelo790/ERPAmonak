import { useTranslation } from "react-i18next";

export default function SectionProducts() {

    
      const { t } = useTranslation();
      
  return (
    <div className='section-container'>
        <div className="banner">      
            <div className="banner-content">
                <h1 className="banner-title">{t("M-P")}</h1>
            </div>
        </div>
        <div className='sections'>
            <div className='section-3'>
                <div className='sec3-block-1'>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis at tempore expedita ea praesentium porro nam quam exercitationem inventore similique fuga consectetur, culpa placeat fugit possimus quod voluptates aperiam perferendis.
                    </p>
                </div>
            </div>
            <div className='section-product-1'>
                <div className="banner-content">
                    <h1 className="banner-title">{t("SP-T")}</h1>
                </div>
            </div>
            <div className='section-3'>
                <div className='sec3-block-1'>
                    <p>
                    {t("SP-D")}
                    </p>
                </div>
            </div>
            <div className='section-product-2'>
                <div className="banner-content">
                    <h1 className="banner-title">{t("SP2-T")}</h1>
                </div>
            </div>
            <div className='section-5'>
                <div className='sec5-block-1'>
                    <p>
                    {t("SP2-D")}
                    </p>
                </div>
            </div>
            <div className='section-product-3'>
                <div className="banner-content">
                    <h1 className="banner-title">{t("SP3-T")}</h1>
                </div>
            </div>
            <div className='section-5'>
                <div className='sec5-block-1'>
                    <p>
                    {t("SP3-D")}
                    </p>
                </div>
            </div>
            <div className='section-product-4'>
                <div className="banner-content">
                    <h1 className="banner-title">{t("SP4-T")}</h1>
                </div>
            </div>
            <div className='section-5'>
                <div className='sec5-block-1'>
                    <p>
                    {t("SP4-D")}
                    </p>
                </div>
            </div>
            <div className='section-product-5'>
                <div className="banner-content">
                    <h1 className="banner-title">{t("SP5-T")}</h1>
                </div>
            </div>
            <div className='section-5'>
                <div className='sec5-block-1'>
                    <p>
                    {t("SP5-D")}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
