import Logo from "@/components/Logo"
import { Link, Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"

export default function AuthLayout() {
  return (
    <>
        <div className="auth-container min-h-screen">
            <div className="lg:py-1 shadow-2xl mx-auto h-auto w-full  flex justify-center bg-white">
              <div className="auth-main">
                <Logo/>
                <div className="mt-5">
                    <Outlet/>
                </div>
              </div>
            </div>
            <div className="footer-auth">
              <div className="footer-title">
                <p>AMONAK S.R.L.</p>
              </div>
              <div className="footer-link">
                  <Link to="https://www.facebook.com/MUEBLES.DE.MADERA.Y.RESINA">
                    <svg  id="Home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.26 42.17">
                      <title>Amonak-Para desarrollo-Sección Footer</title>
                      <path fill="currentColor" d="M27,41.33V25.77h4.52l.69-5.3H27.07c0-1.53-.07-3,0-4.42a1.53,1.53,0,0,1,1.52-1.39c1.2-.11,2.41-.13,3.67-.19V9.8c-2.18-.08-4.37-.48-6.53.21-2.67.85-4.19,3.13-4.26,6.39,0,1.31,0,2.63,0,4H17.05v5.32h4.39V42.14C13,42.65,2.47,36.51.35,24.89A21.13,21.13,0,1,1,27,41.33Z"/>
                    </svg>
                  </Link>
                  <Link to="https://www.instagram.com/amonakbolivia?igsh=azZvcm1tN3J3eWty">
                    <svg id="Home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.57 43.57">
                      <title>Amonak-Para desarrollo-Sección Footer</title>
                      <path fill="currentColor" d="M21.8,43.57A21.79,21.79,0,1,1,43.57,21.84,21.79,21.79,0,0,1,21.8,43.57Zm12.4-27c-.12-4-2.32-6.74-6.29-7a87.58,87.58,0,0,0-12.23,0C12,9.74,9.75,12,9.49,15.66a92.43,92.43,0,0,0,0,12.23c.25,3.72,2.46,5.93,6.17,6.19a89.14,89.14,0,0,0,12.23,0c3.74-.25,5.84-2.53,6.23-6.26C34.32,25.83,34.25,18.27,34.2,16.52Z"/><path fill="currentColor" d="M31.81,28A4,4,0,0,1,28,31.82c-2,.2-4,.2-6,.2s-4.19,0-6.28-.2a4,4,0,0,1-3.89-3.91c-.21-2.23-.19-4.47-.19-6.71a52.31,52.31,0,0,1,.19-5.6,4,4,0,0,1,3.87-3.85,57.75,57.75,0,0,1,6-.19c2.09,0,4.2,0,6.28.19a4.16,4.16,0,0,1,3.93,3.91,8,8,0,0,1,.11.84C32,18.26,32,25.92,31.81,28Zm-10,.25a6.43,6.43,0,1,0-6.47-6.41A6.48,6.48,0,0,0,21.83,28.22ZM30,15.09a1.49,1.49,0,1,0-3,.08,1.51,1.51,0,0,0,1.49,1.43A1.49,1.49,0,0,0,30,15.09Z"/><path fill="currentColor" d="M26,21.76a4.17,4.17,0,1,1-4.19-4.14A4.15,4.15,0,0,1,26,21.76Z"/>
                    </svg>
                  </Link>
                  <Link to="https://www.tiktok.com/@amonakbolivia?_t=8r7mo6B8Oxh&_r=1">
                    <svg id="Home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.57 43.57">
                      <title>Amonak-Para desarrollo-Sección Footer</title>
                      <path fill="currentColor" d="M21.76,43.57A21.79,21.79,0,1,1,43.57,21.88,21.8,21.8,0,0,1,21.76,43.57Zm.58-34.19v1.17c0,5.38,0,10.77,0,16.16a3.57,3.57,0,0,1-3.5,3.48A3.71,3.71,0,0,1,15,27a3.63,3.63,0,0,1,2.84-4,14.45,14.45,0,0,1,1.91-.11V19C14.83,17.9,10,22.76,11,27.81a7.79,7.79,0,0,0,8.45,6.38,7.71,7.71,0,0,0,7-7.75c0-2.69,0-5.39,0-8.08,0-.24,0-.48.05-.74,3.63,1.8,4.68,2.11,6.19,1.87V15.63c-3.79-.42-5.85-2.53-6.31-6.25Z"/>
                    </svg>
                  </Link>
                  <Link to="">
                    <svg id="Home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.57 43.57">
                      <title>Amonak-Para desarrollo-Sección Footer</title>
                      <path fill="currentColor" d="M21.77,0A21.79,21.79,0,1,1,0,21.74,21.78,21.78,0,0,1,21.77,0ZM20,24.65l.6.84c1.94,2.82,3.89,5.65,5.81,8.48a1.16,1.16,0,0,0,1.1.61c2,0,4,0,6,0a5.23,5.23,0,0,0,.69-.08c-3.4-4.95-6.73-9.8-10.08-14.66L33.42,9.05c-1.29-.14-2.22-.13-3.09,1-2.13,2.69-4.44,5.23-6.68,7.83-.14.16-.29.31-.47.5l-.59-.83c-1.81-2.64-3.63-5.27-5.43-7.93A1.22,1.22,0,0,0,16,9c-2,0-3.92,0-5.87,0-.24,0-.47,0-.8.07L19,23.21,9.36,34.47a2.82,2.82,0,0,0,3.13-1C14.89,30.48,17.45,27.63,20,24.65Z"/><path fill="currentColor" d="M31.2,33c-1.06,0-2,0-3,0a1,1,0,0,1-.6-.37L12.49,10.94a1.28,1.28,0,0,1-.07-.29c1,0,2,0,3,0,.17,0,.38.23.5.4L31,32.53A3.18,3.18,0,0,1,31.2,33Z"/>
                    </svg>
                  </Link>
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
