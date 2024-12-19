import { z } from "zod";

/* Products */
export const productSchema = z.object({
    id: z.number(), 
    name: z.string(), 
    default_code: z.string(), 
    barcode: z.string(), 
    active: z.boolean(), 
    qty_available: z.number().multipleOf(0.001), 
    virtual_available: z.number().multipleOf(0.001), 
    productTemplateId: z.string(),
    productImages: z.array(z.instanceof(File)),
})


export type Product = z.infer<typeof productSchema>
export type ProductFormData = Pick<
    Product,'id' | 
    'name' | 
    'default_code' | 
    'barcode' | 
    'active' | 
    'qty_available' | 
    'virtual_available' | 
    'productTemplateId' | 
    'productImages'>