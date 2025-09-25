import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function SectionWoodSpecies() {
  
    const [activeSection, setActiveSection] = useState("");

  const handleClick = (section: string) => {
    setActiveSection(section === activeSection ? "" : section);
  };
    
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
                        <h1 className="banner-title">MOMOQUI</h1>
                    {/*</Link>*/}                    
                </div>                
            </div> 
            {/*activeSection === "mesas" && (
                    <Mesas/>
                )*/}           
            <div className='section-wood-specie-2'>
                <div className="banner-content">
                    <Link to="" className="link"
                            onClick={(e) => {
                                e.preventDefault(); // Evita comportamiento predeterminado del enlace
                                handleClick('sillas y bancas'); // Llama a la función personalizada
                            }}
                    >
                        <h1 className="banner-title">PAQUIO</h1>
                    </Link>                    
                </div>
            </div>
                        
            <div className='section-wood-specie-3'>
                <div className="banner-content">
                    <Link to="/product/tablaschurrasqueras" className="link"
                            /*onClick={(e) => {
                                e.preventDefault(); // Evita comportamiento predeterminado del enlace
                                handleClick('tablas churrasqueras'); // Llama a la función personalizada
                            }}*/
                    >
                        <h1 className="banner-title">CORAZÓN PURPURA</h1>
                    </Link>                    
                </div>
            </div>            
            {/*activeSection === "tablas churrasqueras" && (
                    <Tablas />
                )*/}
            <div className='section-wood-specie-4'>
                <div className="banner-content">
                    <Link to="/product/slabs" className="link"
                       /* onClick={(e) => {
                            e.preventDefault(); // Evita comportamiento predeterminado del enlace
                            handleClick('slab'); // Llama a la función personalizada
                        }}*/
                    >
                        <h1 className="banner-title">PICANA NEGRA</h1>
                    </Link>                   
                </div>
            </div>
                        
            <div className='section-wood-specie-5'>
                <div className="banner-content">
                    <Link to="" className="link"
                        onClick={(e) => {
                            e.preventDefault(); // Evita comportamiento predeterminado del enlace
                            handleClick('nudos de maderas'); // Llama a la función personalizada
                        }}
                    >
                        <h1 className="banner-title">MORADO</h1>
                    </Link>                    
                </div>
            </div>            
            <div className='section-wood-specie-6'>
                <div className="banner-content">
                    <Link to="" className="link"
                            onClick={(e) => {
                                e.preventDefault(); // Evita comportamiento predeterminado del enlace
                                handleClick('lumber'); // Llama a la función personalizada
                            }}
                    >
                        <h1 className="banner-title">MARA MACHO</h1>
                    </Link>                    
                </div>
            </div>            
            <div className='section-wood-specie-7'>
                <div className="banner-content">
                    <Link to=""  className="link"                   
                    onClick={(e) => {
                        e.preventDefault(); // Evita comportamiento predeterminado del enlace
                        handleClick('decking'); // Llama a la función personalizada
                    }}
                    >
                        <h1 className="banner-title">TINTO</h1>
                    </Link>                    
                </div>
            </div>            
            <div className='section-wood-specie-8'>
                <div className="banner-content">
                    <Link to="" className="link"
                    onClick={(e) => {
                        e.preventDefault(); // Evita comportamiento predeterminado del enlace
                        handleClick('s4s'); // Llama a la función personalizada
                    }}
                    >
                        <h1 className="banner-title">ROBLE</h1>
                    </Link>                    
                </div>
            </div>            
            <div className='section-wood-specie-9'>
                <div className="banner-content">
                    <Link to="" className="link"
                    onClick={(e) => {
                        e.preventDefault(); // Evita comportamiento predeterminado del enlace
                        handleClick('tableros'); // Llama a la función personalizada
                    }}
                    >
                        <h1 className="banner-title">MANÍ</h1>
                    </Link>                    
                </div>
            </div>            
            <div className='section-wood-specie-10'>
                <div className="banner-content">
                    <Link to=""
                    onClick={(e) => {
                        e.preventDefault(); // Evita comportamiento predeterminado del enlace
                        handleClick('laminas'); // Llama a la función personalizada
                    }}
                    >
                        <h1 className="banner-title">TOCO</h1>
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
                        <h1 className="banner-title">CURUPAU</h1>
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
                        <h1 className="banner-title">NOGAL</h1>
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
                        <h1 className="banner-title">CUTA TIGRE</h1>
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
                        <h1 className="banner-title">MURURE</h1>
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
                        <h1 className="banner-title">TARARÁ AMARILLA</h1>
                    </Link>                    
                </div>
            </div>
        </div>
    </div>
  )
}
