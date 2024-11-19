import api from '@/lib/axios'
import { isAxiosError } from 'axios'

/* Roles */

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