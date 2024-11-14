import {z, } from 'zod'

/** Producto - Categoria*/

export const productCategorySchema = z.object({
    id: z.string(),
    name: z.string(),
    parent_category_id: z.string()
})

export type ProductCategory = z.infer<typeof productCategorySchema>
export type ProductCategoryFormData = Pick<ProductCategory, 'name' | 'parent_category_id'>