import api from "@/lib/axios"
import { isAxiosError } from "axios"


export async function getAllModulesWithPermission() {
    try {
        const {data} = await api('/modules/permissions')
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}