import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import DashboardView from "@/views/DashboardView";
import CreateProductCategoryView from "./views/categories/CreateProductCategoryView";
import EditProductCategoryView from "./views/categories/EditProductCategoryView";
import AuthLayout from "./layouts/AuthLayout";
import LoginView from "./views/auth/LoginView";
import RegisterView from "./views/auth/RegisterView";
import ListUserView from "./views/auth/ListUserView";
import ConfirmAccountView from "./views/auth/ConfirmAccountView";
import RequestNewCodeView from "./views/auth/RequestNewCodeView";
import ForgotPasswordView from "./views/auth/ForgotPasswordView";
import NewPasswordView from "./views/auth/NewPasswordView";
import ListRolesView from "./views/roles/ListRolesView";
import CreateRolView from "./views/roles/CreateRolView";
import EditRolView from "./views/roles/EditRolView";
import ProfileView from "./views/profile/ProfileView";
import ChangePasswordView from "./views/profile/ChangePasswordView";
import ProfileLayout from "./layouts/ProfileLayout";
import ListInventaryView from "./views/products/ListProductView";
import CreateProductView from "./views/products/CreateProductView";
import CreateProductMasivoView from "./views/products/CreateProductMasivoView";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path="/" element={<DashboardView/>} index/>
                    <Route path="/categories/create" element={<CreateProductCategoryView/>} />
                    <Route path="/categories/:productCategoryId/edit" element={<EditProductCategoryView/>} />
                    <Route path="/users" element={<ListUserView/>}/>
                    <Route path="/users/create" element={<RegisterView/>}/>
                    <Route path="/roles" element={<ListRolesView/>}/>
                    <Route path="/roles/create" element={<CreateRolView/>}/>
                    <Route path="/roles/:rolId/edit" element={<EditRolView/>} /> 
                    <Route element={<ProfileLayout/>}>
                        <Route path="/profile" element={<ProfileView/>} />
                        <Route path="/profile/password" element={<ChangePasswordView/>} />
                    </Route>                     
                    <Route path="/products" element={<ListInventaryView/>} /> 
                    <Route path="/products/create" element={<CreateProductView/>} />  
                    <Route path="/products/create-masivo" element={<CreateProductMasivoView/>} />                    
                </Route>
                <Route element={<AuthLayout/>}>
                    <Route path="/auth/login" element={<LoginView/>}/>
                    <Route path="/auth/confirm-account" element={<ConfirmAccountView/>}/>
                    <Route path="/auth/request-code" element={<RequestNewCodeView/>}/>
                    <Route path="/auth/forgot-password" element={<ForgotPasswordView/>}/>
                    <Route path="/auth/new-password" element={<NewPasswordView/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}