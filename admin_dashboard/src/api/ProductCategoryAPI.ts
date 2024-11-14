import { ProductCategoryFormData } from "@/types/index";
import api from "@/lib/axios";

export async function createProductCategory(formData: ProductCategoryFormData) {
    try {
        console.log(formData)
        const {data} = await api.post('/productCategories', formData)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}