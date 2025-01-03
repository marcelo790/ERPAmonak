import { dashboardProductCategorySchema, ProductCategory, ProductCategoryFormData } from "@/types/index";
import api from "@/lib/axios";
import { isAxiosError } from "axios";
import { ProductFormData } from "@/types/indexInventary";

export async function createProductCategory(formData: ProductCategoryFormData) {
    try {
        const {data} = await api.post('/productCategories', formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function getAllProductCategory() {
    try {
        const {data} = await api('/productCategories')
        const response = dashboardProductCategorySchema.safeParse(data)
        if(response.success){
            return response.data
        }
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function getByIdProductCategory(id: ProductCategory['id']) {
    try {
        const {data} = await api(`/productCategories/${id}`)    
        return data   
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

type ProductCategoryAPIType = {
    formData: ProductCategoryFormData,
    productCategoryId: ProductCategory['id']
}

export async function updateProductCategory({formData, productCategoryId} : ProductCategoryAPIType) {
    try {
        const {data} = await api.put<string>(`/productCategories/${productCategoryId}`, formData)    
        return data   
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function deleteProductCategory(id: ProductCategory['id']) {
    try {
        const {data} = await api.delete<string>(`/productCategories/${id}`)    
        return data   
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

/* Products */

export async function createProduct(formData: ProductFormData) {
    try {
        const {data} = await api.post('/product', formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}