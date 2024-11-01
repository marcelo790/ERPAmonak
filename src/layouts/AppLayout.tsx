import { Outlet} from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Logo from "@/components/Logo"
import NavMenu from "@/components/NavMenu"

export default function AppLayout() {
  return (
    <>
      <header className="bg-green-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">        
          <div className="relative items-center bg-lime-300 px-4 py-2 rounded-b-md ">
            <Logo/>
          </div>
          <NavMenu />          
          <div className="flex items-center space-x-2 bg-lime-300 px-3 py-2 rounded-full">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            <span className="text-gray-900">USUARIO</span>
          </div>
        </div>
      </header>
      <section className='max-w-screen-2xl mx-auto mt-10 p-5'>
        <Outlet />
      </section>
      <footer className='py-5'>
        <p className='text-center'>
          Todos los derechos reservados {new Date().getFullYear()}
        </p>
      </footer>
      <ToastContainer
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
    </>
  )
}
