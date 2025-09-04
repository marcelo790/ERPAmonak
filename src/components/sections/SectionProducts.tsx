import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function SectionProducts() {
  
    const [activeSection, setActiveSection] = useState("");

  const handleClick = (section: string) => {
    setActiveSection(section === activeSection ? "" : section);
  };
    
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
                    <Link to="/product/mesas" className="link"
                           /* onClick={(e) => {
                                e.preventDefault(); // Evita comportamiento predeterminado del enlace
                                handleClick('mesas'); // Llama a la función personalizada
                            }}*/
                    >
                        <h1 className="banner-title">{t("SP-T")}</h1>
                    </Link>                    
                </div>                
            </div> 
            {/*activeSection === "mesas" && (
                    <Mesas/>
                )*/}           
            <div className='section-product-2'>
                <div className="banner-content">
                    <Link to="" className="link"
                            onClick={(e) => {
                                e.preventDefault(); // Evita comportamiento predeterminado del enlace
                                handleClick('sillas y bancas'); // Llama a la función personalizada
                            }}
                    >
                        <h1 className="banner-title">{t("SP2-T")}</h1>
                    </Link>                    
                </div>
            </div>
                        
            <div className='section-product-3'>
                <div className="banner-content">
                    <Link to="/product/tablaschurrasqueras" className="link"
                            /*onClick={(e) => {
                                e.preventDefault(); // Evita comportamiento predeterminado del enlace
                                handleClick('tablas churrasqueras'); // Llama a la función personalizada
                            }}*/
                    >
                        <h1 className="banner-title">{t("SP3-T")}</h1>
                    </Link>                    
                </div>
            </div>            
            {/*activeSection === "tablas churrasqueras" && (
                    <Tablas />
                )*/}
            <div className='section-product-4'>
                <div className="banner-content">
                    <Link to="" className="link"
                        onClick={(e) => {
                            e.preventDefault(); // Evita comportamiento predeterminado del enlace
                            handleClick('slab'); // Llama a la función personalizada
                        }}
                    >
                        <h1 className="banner-title">{t("SP4-T")}</h1>
                    </Link>                   
                </div>
            </div>
                        
            <div className='section-product-5'>
                <div className="banner-content">
                    <Link to="" className="link"
                        onClick={(e) => {
                            e.preventDefault(); // Evita comportamiento predeterminado del enlace
                            handleClick('nudos de maderas'); // Llama a la función personalizada
                        }}
                    >
                        <h1 className="banner-title">{t("SP5-T")}</h1>
                    </Link>                    
                </div>
            </div>            
            <div className='section-product-6'>
                <div className="banner-content">
                    <Link to="" className="link"
                            onClick={(e) => {
                                e.preventDefault(); // Evita comportamiento predeterminado del enlace
                                handleClick('lumber'); // Llama a la función personalizada
                            }}
                    >
                        <h1 className="banner-title">{t("SP6-T")}</h1>
                    </Link>                    
                </div>
            </div>            
            <div className='section-product-7'>
                <div className="banner-content">
                    <Link to=""  className="link"                   
                    onClick={(e) => {
                        e.preventDefault(); // Evita comportamiento predeterminado del enlace
                        handleClick('decking'); // Llama a la función personalizada
                    }}
                    >
                        <h1 className="banner-title">{t("SP7-T")}</h1>
                    </Link>                    
                </div>
            </div>            
            <div className='section-product-8'>
                <div className="banner-content">
                    <Link to="" className="link"
                    onClick={(e) => {
                        e.preventDefault(); // Evita comportamiento predeterminado del enlace
                        handleClick('s4s'); // Llama a la función personalizada
                    }}
                    >
                        <h1 className="banner-title">{t("SP8-T")}</h1>
                    </Link>                    
                </div>
            </div>            
            <div className='section-product-9'>
                <div className="banner-content">
                    <Link to="" className="link"
                    onClick={(e) => {
                        e.preventDefault(); // Evita comportamiento predeterminado del enlace
                        handleClick('tableros'); // Llama a la función personalizada
                    }}
                    >
                        <h1 className="banner-title">{t("SP9-T")}</h1>
                    </Link>                    
                </div>
            </div>            
            <div className='section-product-10'>
                <div className="banner-content">
                    <Link to=""
                    onClick={(e) => {
                        e.preventDefault(); // Evita comportamiento predeterminado del enlace
                        handleClick('laminas'); // Llama a la función personalizada
                    }}
                    >
                        <h1 className="banner-title">{t("SP10-T")}</h1>
                    </Link>                    
                </div>
            </div>            
            <div className='section-product-11'>
                <div className="banner-content">
                    <Link to=""
                    /*onClick={(e) => {
                        e.preventDefault(); // Evita comportamiento predeterminado del enlace
                        handleClick('marcos'); // Llama a la función personalizada
                    }}*/
                    >
                        <h1 className="banner-title">{t("SP11-T")}</h1>
                    </Link>                    
                </div>
            </div>
            {/*activeSection === "marcos" && (
                    <div className="mt-6">
                    <Mesas />
                    </div>
                )*/}            
        </div>
    </div>
  )
}
