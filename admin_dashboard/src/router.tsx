import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import DashboardView from "@/views/DashboardView";
import CreateProductCategoryView from "./views/products/CreateProductCategoryView";
import EditProductCategoryView from "./views/products/EditProductCategoryView";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path="/" element={<DashboardView/>} index/>
                    <Route path="/categories/create" element={<CreateProductCategoryView/>} index/>
                    <Route path="/categories/:productCategoryId/edit" element={<EditProductCategoryView/>} index/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}