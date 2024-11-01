import NavMenu from './NavMenu'

export default function Header() {
  return (
    <div className='header'>
        <div className="container">        
          <div className="divLogo">
            <img src="/logo.svg" alt="Logotipo Amonak" className="logo" />
          </div>
          <NavMenu />          
        </div>
    </div>
  )
}
