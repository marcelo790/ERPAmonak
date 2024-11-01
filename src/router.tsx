import {BrowserRouter, Routes, Route} from "react-router-dom"
import AppLayout from "@/layouts/AppLayout"
import DashboardView from "@/views/DashboardView"
import CreateProjectView from "@/views/products/CreateProductView"
import EditProductView from "./views/products/EditProductView"
import EcomerceLayout from "./layouts/EcomerceLayout"
import ProductView from "./components/ecomerce/products/ProductView"
import DashboarEcomerceView from "./views/DashboarEcomerceView"

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path="/admin" element={<DashboardView/>} index/>
                    <Route path="/admin/products/create" element={<CreateProjectView/>} />
                    <Route path="/admin/products/:productId/edit" element={<EditProductView/>} />
                </Route>
                <Route element={<EcomerceLayout/>}>
                    <Route path="/" element={<DashboarEcomerceView/>} index/>
                    <Route path="/products" element={<ProductView/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}