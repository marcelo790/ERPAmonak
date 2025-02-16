import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "@/layouts/AppLayout"
import DashboardView from "@/views/DashboardView"
import SectionWhoAreView from "./views/SectionWhoAreView"
import SectionContactView from "./views/SectionContactView"

export default function router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AppLayout/>}>
                <Route path="/" element={<DashboardView/>} index />
                <Route path="/who-are" element={<SectionWhoAreView/>} />
                <Route path="/contact" element={<SectionContactView/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
