import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import DashboardView from "@/views/DashboardView";
import CreateProductCategoryView from "./views/products/CreateProductCategoryView";
import EditProductCategoryView from "./views/products/EditProductCategoryView";
import AuthLayout from "./layouts/AuthLayout";
import LoginView from "./views/auth/LoginView";
import RegisterView from "./views/auth/RegisterView";
import ListUserView from "./views/auth/ListUserView";
import ConfirmAccountView from "./views/auth/ConfirmAccountView";
import RequestNewCodeView from "./views/auth/RequestNewCodeView";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path="/" element={<DashboardView/>} index/>
                    <Route path="/categories/create" element={<CreateProductCategoryView/>} index/>
                    <Route path="/categories/:productCategoryId/edit" element={<EditProductCategoryView/>} index/>
                    <Route path="/users" element={<ListUserView/>}/>
                    <Route path="/users/create" element={<RegisterView/>}/>
                </Route>
                <Route element={<AuthLayout/>}>
                    <Route path="/auth/login" element={<LoginView/>}/>
                    <Route path="/auth/confirm-account" element={<ConfirmAccountView/>}/>
                    <Route path="/auth/request-code" element={<RequestNewCodeView/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}