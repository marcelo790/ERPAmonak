import {z, } from 'zod'

/* Roles */
export const rolSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string()
})

export type Rol = z.infer<typeof rolSchema>
export type RolFormData = Pick<Rol,'id' | 'name' | 'description'>

/* Users */

const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    old_password: z.string(),
    new_password: z.string(),
    new_password_confirmation: z.string(),
    confirmed: z.boolean(),
    rolesId: z.string().nullable(),
    token: z.string()
})

export type User = z.infer<typeof userSchema>
export type UserProfileForm = Pick<User, 'name'>
export type UpdateCurrentUserPasswordForm = Pick<User, 'old_password' | 'new_password' | 'new_password_confirmation'>

/* Modulo y Permisos */

const moduleSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string()
})

const permissionSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    moduleId: z.number() 
})

export type Module = z.infer<typeof moduleSchema>