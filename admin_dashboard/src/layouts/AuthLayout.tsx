import Logo from "@/components/Logo"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"

export default function AuthLayout() {
  return (
    <>
        <div className="auth-container min-h-screen">
            <div className="py-10 lg:py-20 mx-auto w-[400px]">
                <Logo/>
                <div className="mt-5">
                    <Outlet/>
                </div>
            </div>
            <ToastContainer 
              pauseOnHover={false}
              pauseOnFocusLoss={false}
            />
        </div>
        
    </>
  )
}
