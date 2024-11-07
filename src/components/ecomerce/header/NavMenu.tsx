import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import LanguageSelector from './LanguageSelector'

export default function NavMenu() {

  const { t } = useTranslation();

    return (
      <nav className="nav flex space-x-6">
        <Link to='/' className="link">{t('M-QS')}</Link>
        <Link to="/products" className="link">{t('M-P')}</Link>
        <Link to="/" className="link">{t('M-OS')}</Link>
        <Link to="/" className="link">{t('M-O')}</Link>
        <Link to="/" className="link">{t('M-CC')}</Link>
        <Link to="/" className="link">{t('M-C')}</Link>          
        <LanguageSelector />    
      </nav>
  
    )
  }