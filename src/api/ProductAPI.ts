import { Product, ProductFormData, dashboardProductSchema } from "@/types/index";
import api from "@/libs/axios";
import { isAxiosError } from "axios";

export async function createProduct(formData: ProductFormData){
    try {
        const { data } = await api.post('/products', formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error);
        }
    }
}

export async function getProducts(){
    try {
        const { data } = await api.post('/products')
        const response = dashboardProductSchema.safeParse(data)
        if(response.success){
            return response.data
        }
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error);
        }
    }
}

export async function getProductById(productId: Product['id']){
    try {
        const { data } = await api(`/products/${productId}`)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error);
        }
    }
}

type ProductAPIType = {
    formData: ProductFormData
    productId: Product['id']
}
export async function updateProduct({formData, productId}: ProductAPIType){
    try {
        const { data } = await api.put<string>(`/products/${productId}`, formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error);
        }
    }
}

export async function deleteProduct(productId: Product['id']){
    try {
        const { data } = await api.delete<string>(`/products/${productId}`)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error);
        }
    }
}