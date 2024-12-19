import {z } from 'zod'

/** Auth & Users */

const authSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    password_confirmation: z.string(),
    confirmed: z.boolean(),
    rolesId: z.string().nullable(),
    token: z.string()
})

type Auth = z.infer<typeof authSchema>
export type UserLoginForm = Pick<Auth, 'email' | 'password'>
export type UserRegistrationForm = Pick<Auth, 'name' | 'email' | 'password' | 'password_confirmation' | 'confirmed' | 'rolesId'>
export type RequestConfirmationCodeForm = Pick<Auth, 'email'>
export type ForgotPasswordForm = Pick<Auth, 'email'>
export type NewPasswordForm = Pick<Auth, 'password' | 'password_confirmation'>
export type ConfirmToken = Pick<Auth, 'token'>

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