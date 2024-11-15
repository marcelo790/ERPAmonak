import {z, } from 'zod'

/** Producto - Categoria*/

export const productCategorySchema = z.object({
    id: z.number(),
    name: z.string(),
    parent_category_id: z.string().nullable()
})

export const dashboardProductCategorySchema = z.array(
    productCategorySchema.pick({
        id: true,
        name: true,
        parent_category_id: true
    })
)
export type ProductCategory = z.infer<typeof productCategorySchema>
export type ProductCategoryFormData = Pick<ProductCategory,'id' | 'name' | 'parent_category_id'>