import { z } from 'zod';

export const productSchema = z.object({
  id: z.string(),
  productName: z.string(), // Corregido
  productPrice: z.number(), // Corregido
  productDescription: z.string(), // Corregido
  productUnit: z.number(), // Corregido
  productCategory: z.array(z.string()), // Corregido a array de strings
  productImages: z.array(z.instanceof(File)), // Validación para archivos de tipo File
});

export const dashboardProductSchema = z.array(
  productSchema.pick({
    id: true,
    productName: true, // Corregido
    productPrice: true, // Corregido
    productDescription: true, // Corregido
    productUnit: true, // Corregido
    productCategory: true, // Corregido a array de strings
    productImages: true, // Validación para archivos de tipo File
  })
)

export type Product = z.infer<typeof productSchema>

export type ProductFormData = Pick<Product,
    'productName' | 
    'productPrice' | 
    'productDescription' | 
    'productUnit' | 
    'productCategory' | 
    'productImages'
>