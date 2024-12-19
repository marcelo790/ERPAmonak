import api from '@/lib/axios'
import { Rol, RolFormData } from '@/types/indexSecurity'
import { isAxiosError } from 'axios'

/* Roles */

export async function createRol(formData: RolFormData) {
    try {
        const {data} = await api.post('/roles', formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function getAllRoles() {
    try {
        const {data} = await api('/roles')
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function deleteRol(id: Rol['id']) {
    try {
        const {data} = await api.delete<string>(`/roles/${id}`)    
        return data   
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function getByIdRol(id: Rol['id']) {
    try {
        const {data} = await api(`/roles/${id}`)    
        return data   
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

type RolAPIType = {
    formData: RolFormData,
    rolId: Rol['id']
}

export async function updateRol({formData, rolId} : RolAPIType) {
    try {
        const {data} = await api.put<string>(`/roles/${rolId}`, formData)    
        return data   
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}