import { Outlet } from "react-router-dom" 
import Header from "@/components/header/Header"
import Sidebar from "@/components/header/Sidebar"
import Footer from "@/components/footer/Footer"

export default function AppLayout() {
  return (
    <>
      <Header/>
      <Sidebar/>
      <Outlet/>
      <Footer/>
    </>
    
  )
}
