import { useTranslation } from "react-i18next";

export default function SectionProducts() {

    
      const { t } = useTranslation();
      
  return (
    <div className='section-container'>
        <div className="bannerProduct">      
            <div className="banner-content">
                <h1 className="banner-title">{t("M-P")}</h1>
            </div>
        </div>
        <div className='sections'>            
            <div className='section-product-1'>
                <div className="banner-content">
                    <h1 className="banner-title">{t("SP-T")}</h1>
                </div>
            </div>            
            <div className='section-product-2'>
                <div className="banner-content">
                    <h1 className="banner-title">{t("SP2-T")}</h1>
                </div>
            </div>            
            <div className='section-product-3'>
                <div className="banner-content">
                    <h1 className="banner-title">{t("SP3-T")}</h1>
                </div>
            </div>            
            <div className='section-product-4'>
                <div className="banner-content">
                    <h1 className="banner-title">{t("SP4-T")}</h1>
                </div>
            </div>            
            <div className='section-product-5'>
                <div className="banner-content">
                    <h1 className="banner-title">{t("SP5-T")}</h1>
                </div>
            </div>            
            <div className='section-product-6'>
                <div className="banner-content">
                    <h1 className="banner-title">{t("SP6-T")}</h1>
                </div>
            </div>            
            <div className='section-product-7'>
                <div className="banner-content">
                    <h1 className="banner-title">{t("SP7-T")}</h1>
                </div>
            </div>            
            <div className='section-product-8'>
                <div className="banner-content">
                    <h1 className="banner-title">{t("SP8-T")}</h1>
                </div>
            </div>            
            <div className='section-product-9'>
                <div className="banner-content">
                    <h1 className="banner-title">{t("SP9-T")}</h1>
                </div>
            </div>            
            <div className='section-product-10'>
                <div className="banner-content">
                    <h1 className="banner-title">{t("SP10-T")}</h1>
                </div>
            </div>            
            <div className='section-product-11'>
                <div className="banner-content">
                    <h1 className="banner-title">{t("SP11-T")}</h1>
                </div>
            </div>            
        </div>
    </div>
  )
}
