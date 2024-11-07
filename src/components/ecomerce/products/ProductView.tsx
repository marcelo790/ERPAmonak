import { useTranslation } from "react-i18next"
export default function ProductView() {

    const {t} = useTranslation()

  return (
    <div className="container-main-products">
        <div className="main-products">        
            <div className="product-container">
                <div className="product-block1">
                    <div className="product-tilde"/>
                </div>
                <div className="product-block2">
                    <h2>{t('SP-T')}</h2>
                    <section>{t('SP-D')}</section>
                </div>
            </div>        
            <div className="product-image">
                <img src="/maderaParota.jpg" alt="Madera Parota"/>
            </div>        
        </div>
        <div className="main-products">                
            <div className="product-image2">
                <img src="/maderaPurpura.jpg" alt="Madera Corazón Púrpura"/>
            </div>      
            <div className="product-container">
                <div className="product-block1">
                    <div className="product-tilde"/>
                </div>
                <div className="product-block2">
                    <h2>{t('SP2-T')}</h2>
                    <section>{t('SP2-D')}</section>
                </div>
            </div>        
        </div>
        <div className="main-products">        
            <div className="product-container">
                <div className="product-block1">
                    <div className="product-tilde"/>
                </div>
                <div className="product-block2">
                    <h2>{t('SP3-T')}</h2>
                    <section>{t('SP3-D')}</section>
                </div>
            </div>        
            <div className="product-image">
                <img src="/maderaMorado.jpg" alt="Madera Morado"/>
            </div>        
        </div>
        <div className="main-products">                
            <div className="product-image2">
                <img src="/maderaMani.jpg" alt="Madera Maní"/>
            </div>      
            <div className="product-container">
                <div className="product-block1">
                    <div className="product-tilde"/>
                </div>
                <div className="product-block2">
                    <h2>{t('SP4-T')}</h2>
                    <section>{t('SP4-D')}</section>
                </div>
            </div>        
        </div>
        <div className="main-products">        
            <div className="product-container">
                <div className="product-block1">
                    <div className="product-tilde"/>
                </div>
                <div className="product-block2">
                    <h2>{t('SP5-T')}</h2>
                    <section>{t('SP5-D')}</section>
                </div>
            </div>        
            <div className="product-image2">
                <img src="/maderaRoble.jpg" alt="Madera Roble"/>
            </div>        
        </div>
    </div>    
  )
}
