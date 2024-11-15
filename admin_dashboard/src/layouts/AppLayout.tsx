import { Outlet } from "react-router-dom"
import Logo from "@/components/Logo"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import NavMenu from "@/components/NavMenu"

export default function AppLayout() {
  return (
    <>
      <header className="header">
        <div className="container-header">
          <div className="logo">
            <Logo/>
          </div>
          <NavMenu/>
        </div>        
      </header>
      <section className="max-w-screen-2xl mx-auto mt-10 p-5">
        <Outlet/>
      </section>
      <footer className="py-5">
        <p className="text-center">
          Todos los derechos reservados
        </p>
      </footer>
      <ToastContainer 
          pauseOnHover={false}
          pauseOnFocusLoss={false}
      />
    </>
  )
}
