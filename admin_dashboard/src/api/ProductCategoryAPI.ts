import { ProductCategoryFormData } from "@/types/index";
import api from "@/lib/axios";

export async function createProductCategory(formData: ProductCategoryFormData) {
    try {
        const {data} = await api.post('/productCategories', formData)
        return data
    } catch (error) {
        console.log(error)
    }
}