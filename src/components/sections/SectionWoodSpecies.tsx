import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function SectionWoodSpecies() {
  
   // const [activeSection, setActiveSection] = useState("");

 /* const handleClick = (section: string) => {
    setActiveSection(section === activeSection ? "" : section);
  };*/
    
      const { t } = useTranslation();
      
  return (
    <div className='section-container'>
        <div className="bannerProduct">      
            <div className="banner-content">
                <h1 className="banner-title">{t("M-CC")}</h1>
            </div>
        </div>
        <div className='sections'>            
            <div className='section-wood-specie-1'>
                <div className="banner-content">
                    {/*<Link to="/product/mesas" className="link"
                           /* onClick={(e) => {
                                e.preventDefault(); // Evita comportamiento predeterminado del enlace
                                handleClick('mesas'); // Llama a la función personalizada
                            }}
                    >*/}
                        <h1 className="banner-title">{t("ME1-T")}</h1>
                    {/*</Link>*/}                    
                </div>                
            </div> 
            {/*activeSection === "mesas" && (
                    <Mesas/>
                )*/}           
            <div className='section-wood-specie-2'>
                <div className="banner-content">
                    <Link to=""
                    /*onClick={(e) => {
                        e.preventDefault(); // Evita comportamiento predeterminado del enlace
                        handleClick('marcos'); // Llama a la función personalizada
                    }}*/
                    >
                        <h1 className="banner-title">{t("ME2-T")}</h1>
                    </Link>                    
                </div>
            </div>
                        
            <div className='section-wood-specie-3'>
                <div className="banner-content">
                    <Link to="" 
                            /*onClick={(e) => {
                                e.preventDefault(); // Evita comportamiento predeterminado del enlace
                                handleClick('tablas churrasqueras'); // Llama a la función personalizada
                            }}*/
                    >
                        <h1 className="banner-title">{t("ME3-T")}</h1>
                    </Link>                    
                </div>
            </div>            
            {/*activeSection === "tablas churrasqueras" && (
                    <Tablas />
                )*/}
            <div className='section-wood-specie-4'>
                <div className="banner-content">
                    <Link to=""
                       /* onClick={(e) => {
                            e.preventDefault(); // Evita comportamiento predeterminado del enlace
                            handleClick('slab'); // Llama a la función personalizada
                        }}*/
                    >
                        <h1 className="banner-title">{t("ME4-T")}</h1>
                    </Link>                   
                </div>
            </div>
                        
            <div className='section-wood-specie-5'>
                <div className="banner-content">
                    <Link to=""
                    /*onClick={(e) => {
                        e.preventDefault(); // Evita comportamiento predeterminado del enlace
                        handleClick('marcos'); // Llama a la función personalizada
                    }}*/
                    >
                        <h1 className="banner-title">{t("ME5-T")}</h1>
                    </Link>                    
                </div>
            </div>            
            <div className='section-wood-specie-6'>
                <div className="banner-content">
                    <Link to=""
                    /*onClick={(e) => {
                        e.preventDefault(); // Evita comportamiento predeterminado del enlace
                        handleClick('marcos'); // Llama a la función personalizada
                    }}*/
                    >
                        <h1 className="banner-title">{t("ME6-T")}</h1>
                    </Link>                    
                </div>
            </div>            
            <div className='section-wood-specie-7'>
                <div className="banner-content">
                    <Link to=""
                    /*onClick={(e) => {
                        e.preventDefault(); // Evita comportamiento predeterminado del enlace
                        handleClick('marcos'); // Llama a la función personalizada
                    }}*/
                    >
                        <h1 className="banner-title">{t("ME7-T")}</h1>
                    </Link>                    
                </div>
            </div>            
            <div className='section-wood-specie-8'>
                <div className="banner-content">
                    <Link to=""
                    /*onClick={(e) => {
                        e.preventDefault(); // Evita comportamiento predeterminado del enlace
                        handleClick('marcos'); // Llama a la función personalizada
                    }}*/
                    >
                        <h1 className="banner-title">{t("ME8-T")}</h1>
                    </Link>                    
                </div>
            </div>            
            <div className='section-wood-specie-9'>
                <div className="banner-content">
                    <Link to=""
                    /*onClick={(e) => {
                        e.preventDefault(); // Evita comportamiento predeterminado del enlace
                        handleClick('marcos'); // Llama a la función personalizada
                    }}*/
                    >
                        <h1 className="banner-title">{t("ME9-T")}</h1>
                    </Link>                    
                </div>
            </div>            
            <div className='section-wood-specie-10'>
                <div className="banner-content">
                    <Link to=""
                    /*onClick={(e) => {
                        e.preventDefault(); // Evita comportamiento predeterminado del enlace
                        handleClick('marcos'); // Llama a la función personalizada
                    }}*/
                    >
                        <h1 className="banner-title">{t("ME10-T")}</h1>
                    </Link>                    
                </div>
            </div>            
            <div className='section-wood-specie-11'>
                <div className="banner-content">
                    <Link to=""
                    /*onClick={(e) => {
                        e.preventDefault(); // Evita comportamiento predeterminado del enlace
                        handleClick('marcos'); // Llama a la función personalizada
                    }}*/
                    >
                        <h1 className="banner-title">{t("ME11-T")}</h1>
                    </Link>                    
                </div>
            </div>
            {/*activeSection === "marcos" && (
                    <div className="mt-6">
                    <Mesas />
                    </div>
                )*/}

            <div className='section-wood-specie-12'>
                <div className="banner-content">
                    <Link to=""
                    /*onClick={(e) => {
                        e.preventDefault(); // Evita comportamiento predeterminado del enlace
                        handleClick('marcos'); // Llama a la función personalizada
                    }}*/
                    >
                        <h1 className="banner-title">{t("ME12-T")}</h1>
                    </Link>                    
                </div>
            </div>   
            <div className='section-wood-specie-13'>
                <div className="banner-content">
                    <Link to=""
                    /*onClick={(e) => {
                        e.preventDefault(); // Evita comportamiento predeterminado del enlace
                        handleClick('marcos'); // Llama a la función personalizada
                    }}*/
                    >
                        <h1 className="banner-title">{t("ME13-T")}</h1>
                    </Link>                    
                </div>
            </div>      
            <div className='section-wood-specie-14'>
                <div className="banner-content">
                    <Link to=""
                    /*onClick={(e) => {
                        e.preventDefault(); // Evita comportamiento predeterminado del enlace
                        handleClick('marcos'); // Llama a la función personalizada
                    }}*/
                    >
                        <h1 className="banner-title">{t("ME14-T")}</h1>
                    </Link>                    
                </div>
            </div>   
            <div className='section-wood-specie-15'>
                <div className="banner-content">
                    <Link to=""
                    /*onClick={(e) => {
                        e.preventDefault(); // Evita comportamiento predeterminado del enlace
                        handleClick('marcos'); // Llama a la función personalizada
                    }}*/
                    >
                        <h1 className="banner-title">{t("ME15-T")}</h1>
                    </Link>                    
                </div>
            </div>
        </div>
    </div>
  )
}
