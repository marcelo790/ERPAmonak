import api from '@/lib/axios'
import { isAxiosError } from 'axios'
import { NewPasswordForm } from '../types';
import { UpdateCurrentUserPasswordForm, User, UserProfileForm } from '@/types/indexSecurity';


type UserAPIType = {
    formData: NewPasswordForm,
    userId: User['id']
}

export async function updatePassword({formData, userId} : UserAPIType) {
    try {        
        const {data} = await api.put<string>(`/auth/change-password/${userId}`, formData)    
        return data   
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function updateProfile(formData: UserProfileForm){
    try {
        const {data} = await api.put<string>('/auth/profile',formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function changePasswordProfile(formData: UpdateCurrentUserPasswordForm){
    try {
        const {data} = await api.post<string>('/auth/change-password',formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}