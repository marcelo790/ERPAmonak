import Banner from "@/components/ecomerce/banner/Banner"
import Footer from "@/components/ecomerce/footer/Footer"
import Header from "@/components/ecomerce/header/Header"
import { Outlet } from "react-router-dom"

export default function EcomerceLayout() {
  return (
    <>
      <Header/>      
      <Banner/>
      <Outlet />
      <Footer/>
    </>
  )
}
